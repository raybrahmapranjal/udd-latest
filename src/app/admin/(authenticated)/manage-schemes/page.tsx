'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Loader2, X, MapPin, Plus, FileText, ImageIcon, Phone, Search, Trash2, Edit2, AlertCircle } from 'lucide-react';
import { Listbox } from '@headlessui/react';

export default function ManageSchemesPage() {
  const [schemes, setSchemes] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  const [errors, setErrors] = useState<{ contact?: string; amount?: string }>({});
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null); // Added state
  const [formData, setFormData] = useState({
    scheme_name: '', location: '', done_by: '', financial_year: '2025-2026',
    contact_no: '', status: 'Active', short_desc: '', amount: '', pdf_url: '', image_url: ''
  });

  const getCardConfig = (id: any) => {
    const configs = [
        { gradient: "from-rose-50 to-rose-50/30", borderColor: "border-rose-400", borderLeft: "border-l-rose-500" },
        { gradient: "from-purple-50 to-blue-50/30", borderColor: "border-purple-400", borderLeft: "border-l-purple-500" },
        { gradient: "from-indigo-50 to-emerald-50/30", borderColor: "border-indigo-400", borderLeft: "border-l-emerald-500" },
        { gradient: "from-orange-50 to-amber-50/30", borderColor: "border-orange-400", borderLeft: "border-l-amber-500" },
        { gradient: "from-emerald-50 to-emerald-50/30", borderColor: "border-emerald-400", borderLeft: "border-l-emerald-500" }
    ];
    let num = 0;
    for (let i = 0; i < id.length; i++) {
        num += id.charCodeAt(i);
    }
    return configs[num % configs.length];
  };

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

   const handleDelete = async (id: string) => {
    const { error } = await supabase.from('schemes').delete().eq('id', id);
    if (!error) {
      fetchSchemes();
      showToast('Scheme deleted successfully', 'success');
    } else {
      showToast('Failed to delete scheme', 'error');
    }
  };
  const fetchSchemes = useCallback(async () => {
    const { data, error } = await supabase.from('schemes').select('*').order('created_at', { ascending: false });
    if (error) console.error("Error fetching:", error);
    else setSchemes(data || []);
  }, [supabase]);

  useEffect(() => { fetchSchemes(); }, [fetchSchemes]);

 


  const filteredSchemes = useMemo(() => {
    return schemes.filter(s => {
      const matchesSearch = s.scheme_name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            s.location?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'All' || s.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [schemes, searchTerm, statusFilter]);

  // Reset pagination when search or filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  // Pagination Logic
  const paginatedSchemes = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredSchemes.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredSchemes, currentPage]);

  const totalPages = Math.ceil(filteredSchemes.length / itemsPerPage);

  

  const validateForm = () => {
    const newErrors: { contact?: string; amount?: string } = {};
    if (!/^\d{10}$/.test(formData.contact_no || '')) newErrors.contact = "Must be 10 digits";
    const amountStr = String(formData.amount || '');
    if (isNaN(Number(amountStr)) || amountStr.trim() === '') newErrors.amount = "Invalid number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const uploadFile = async (file: File, bucket: string) => {
    const fileName = `${Date.now()}_${file.name}`;
    const { error } = await supabase.storage.from(bucket).upload(fileName, file);
    if (error) throw error;
    return supabase.storage.from(bucket).getPublicUrl(fileName).data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      let pdfUrl = formData.pdf_url;
      let imageUrl = formData.image_url;
      if (pdfFile) pdfUrl = await uploadFile(pdfFile, 'schemes_pdfs');
      if (imageFile) imageUrl = await uploadFile(imageFile, 'schemes_images');
      const finalData = { ...formData, pdf_url: pdfUrl, image_url: imageUrl };
      
      const { error } = editingId
        ? await supabase.from('schemes').update(finalData).eq('id', editingId)
        : await supabase.from('schemes').insert([finalData]);
      if (error) throw error;
      
      showToast(editingId ? 'Scheme updated!' : 'Scheme added!', 'success');
      setShowForm(false);
      resetForm();
      fetchSchemes();
    } catch (err) { 
      showToast("Operation Failed.", 'error'); 
    }
    finally { setLoading(false); }
  };

  const resetForm = () => {
    setFormData({ scheme_name: '', location: '', done_by: '', financial_year: '2025-2026', contact_no: '', status: 'Active', short_desc: '', amount: '', pdf_url: '', image_url: '' });
    setPdfFile(null); setImageFile(null); setImagePreview(null); setEditingId(null); setErrors({});
  };
  
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-6 bg-slate-50 min-h-screen text-xs">
        {toast && (
            <div className={`fixed top-6 right-6 z-[100] px-5 py-4 rounded-xl shadow-2xl text-white font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300 ${toast.type === 'success' ? 'bg-emerald-600' : 'bg-red-600'}`}>
            {toast.type === 'success' ? (
                <svg width="24" height="24" viewBox="0 0 36 36" className="stroke-white">
                <circle className="animate-circle" strokeWidth="3" fill="none" strokeDasharray="100" strokeDashoffset="100" cx="18" cy="18" r="15" transform="rotate(-90 18 18)" />
                <path className="animate-check" strokeWidth="3" fill="none" strokeDasharray="20" strokeDashoffset="20" d="M12 18l4 4 8-8" />
                </svg>
            ) : <AlertCircle size={20} className="animate-pulse" />}
            <span className="tracking-wide uppercase">{toast.message}</span>
            </div>
        )}
        {deleteId && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/10 backdrop-blur-sm p-4">
            <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-xs w-full text-center">
              <h3 className="font-black text-slate-800 mb-2">CONFIRM DELETE</h3>
              <p className="text-slate-500 mb-6">This action is permanent.</p>
              <div className="flex gap-3">
                <button onClick={() => setDeleteId(null)} className="flex-1 py-2 rounded-xl border border-slate-200 font-bold text-slate-600">CANCEL</button>
                <button onClick={() => { handleDelete(deleteId); setDeleteId(null); }} className="flex-1 py-2 rounded-xl bg-red-600 text-white font-bold">DELETE</button>
              </div>
            </div>
          </div>
        )}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-900 p-6 rounded-2xl shadow-lg border-l-4 border-rose-500 gap-4">
        <h1 className="text-sm font-black text-white tracking-tight uppercase text-center sm:text-left w-full sm:w-auto">Manage Schemes</h1>
        <button onClick={() => { resetForm(); setShowForm(true); }} className="w-full sm:w-auto bg-rose-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-indigo-700 flex items-center justify-center gap-2 whitespace-nowrap transition-colors">
          <Plus size={16} /> ADD SCHEME
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-end">
        {/* Search Field */}
        <div className="w-full flex-grow space-y-1.5">
          <label className="block text-[10px] font-bold text uppercase tracking-wider mb-2">Search Schemes</label>
          <div className="relative group">
            <Search className="absolute left-3 top-3 text-rose-300 group-focus-within:text-rose-600 transition-colors" size={16}/>
            <input 
              className="w-full pl-10 p-3 rounded-xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all shadow-sm" 
              placeholder="Name or location..." 
              onChange={e => setSearchTerm(e.target.value)} 
            />
          </div>
        </div>

        {/* Status Filter */}
        <div className="w-full md:w-48 space-y-1.5">
          <label className="block text-[10px] font-bold text uppercase tracking-wider mb-2">Filter Status</label>
          <div className="relative">
            <Listbox value={statusFilter} onChange={setStatusFilter}>
              <Listbox.Button className="w-full p-2.5 rounded-xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white text-left text-sm font-semibold text-slate-700 outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all cursor-pointer flex justify-between items-center shadow-sm">
                <span className="truncate">{statusFilter}</span>
                <span className="text-rose-500 text-[10px]">▼</span>
              </Listbox.Button>
              <Listbox.Options className="absolute z-50 w-full mt-2 bg-white border border-rose-100 rounded-xl shadow-2xl p-1 animate-in fade-in zoom-in-95">
                {['All', 'Active', 'Completed', 'Pending'].map((status) => (
                  <Listbox.Option 
                    key={status} 
                    value={status} 
                    className={({ active, selected }) => 
                      `px-4 py-3 cursor-pointer rounded-lg text-sm font-medium transition-all
                      ${active ? 'bg-rose-50 text-rose-700' : 'text-slate-600'}
                      ${selected ? 'bg-rose-100 font-bold text-rose-800' : ''}`
                    }
                  >
                    {status}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white p-8 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto border-t-4 border-t-rose-600">
            <div className="flex justify-between mb-6">
              <h2 className="font-black text-slate-800 text-lg uppercase">{editingId ? 'Edit Scheme' : 'Add New Scheme'}</h2>
              <button onClick={() => setShowForm(false)}><X size={20} /></button>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                className="col-span-1 md:col-span-2 p-3 border border-rose-200 rounded-xl focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all" 
                placeholder="Scheme Name" 
                value={formData.scheme_name} 
                onChange={e => setFormData({...formData, scheme_name: e.target.value})} 
                required 
              />
              
              <input 
                className="p-3 border border-rose-200 rounded-xl focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all" 
                placeholder="Location" 
                value={formData.location} 
                onChange={e => setFormData({...formData, location: e.target.value})} 
              />
              
              <input 
                className="p-3 border border-rose-200 rounded-xl focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all" 
                placeholder="Done By" 
                value={formData.done_by} 
                onChange={e => setFormData({...formData, done_by: e.target.value})} 
              />
              
              {/* Financial Year Listbox */}
              <div className="relative w-full">
                <Listbox value={formData.financial_year} onChange={(val) => setFormData({...formData, financial_year: val})}>
                  <Listbox.Button className="w-full p-2.5 rounded-xl border border-rose-200 bg-white text-left text-sm font-semibold text-slate-700 outline-none focus:border-rose-500 transition-all flex justify-between items-center cursor-pointer">
                    <span className="truncate">{formData.financial_year}</span>
                    <span className="text-rose-500 text-[10px]">▼</span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-[60] w-full mt-2 bg-white border border-rose-100 rounded-xl shadow-xl p-1">
                    {['2024-2025', '2025-2026', '2026-2027'].map((year) => (
                      <Listbox.Option key={year} value={year} className={({ active }) => `px-4 py-3 cursor-pointer rounded-lg text-sm ${active ? 'bg-rose-50 text-rose-700' : 'text-slate-700'}`}>
                        {year}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>

              <div>
                <input 
                  className="w-full p-3 border border-rose-200 rounded-xl focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all" 
                  placeholder="Contact No (10 Digits)" 
                  value={formData.contact_no} 
                  maxLength={10} // HTML level restriction
                  onChange={e => {
                    const value = e.target.value.replace(/\D/g, ''); 
                    setFormData({...formData, contact_no: value});

                    // Check if the current value is now valid (length 10)
                    // If it is, clear the error state
                    if (value.length === 10 && errors.contact) {
                      setErrors(prev => ({ ...prev, contact: undefined }));
                    }
                  }}
                  />
               
                  {formData.contact_no.length > 0 && formData.contact_no.length < 10 && (
                    <p className="text-[11px] text-amber-600 mt-1 animate-in fade-in">
                      Keep typing... {10 - formData.contact_no.length} digits left.
                    </p>
                  )}
                {errors.contact && <p className="text-[13px] text-red-500 mt-1">{errors.contact}</p>}
              </div>

              <div>
                <input 
                  className="w-full p-3 border border-rose-200 rounded-xl focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all" 
                  placeholder="Amount" 
                  type="number" 
                  value={formData.amount} 
                  onChange={e => setFormData({...formData, amount: e.target.value})} 
                />
                {errors.amount && <p className="text-[13px] text-red-500 mt-1">{errors.amount}</p>}
              </div>

              {/* Status Listbox */}
              <div className="relative w-full">
                <Listbox value={formData.status} onChange={(val) => setFormData({...formData, status: val})}>
                  <Listbox.Button className="w-full p-2.5 rounded-xl border border-rose-200 bg-white text-left text-sm font-semibold text-slate-700 outline-none focus:border-rose-500 transition-all flex justify-between items-center cursor-pointer">
                    <span className="truncate">{formData.status}</span>
                    <span className="text-rose-500 text-[10px]">▼</span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-[60] w-full mt-2 bg-white border border-rose-100 rounded-xl shadow-xl p-1">
                    {['Active', 'Ongoing', 'Completed'].map((status) => (
                      <Listbox.Option key={status} value={status} className={({ active }) => `px-4 py-3 cursor-pointer rounded-lg text-sm ${active ? 'bg-rose-50 text-rose-700' : 'text-slate-700'}`}>
                        {status}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>

              {/* PDF Upload Section */}
              <div className="space-y-4 col-span-1 md:col-span-2">
                <div className="bg-white border border-rose-200 p-4 rounded-xl shadow-sm w-full transition-all hover:border-rose-400">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer flex-1">
                      <FileText className="mr-3 text-rose-500" size={20} />
                      <span className="text-slate-700 font-bold text-sm uppercase tracking-wide truncate max-w-[200px]">
                        {pdfFile ? pdfFile.name : (formData.pdf_url ? "Current PDF Attached" : "Upload PDF")}
                      </span>
                      <input type="file" className="hidden" accept=".pdf" onChange={e => setPdfFile(e.target.files?.[0] || null)} />
                    </label>
                    
                    {(pdfFile || formData.pdf_url) && (
                      <a 
                        href={pdfFile ? URL.createObjectURL(pdfFile) : formData.pdf_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] font-black text-rose-600 bg-rose-50 px-3 py-1.5 rounded-lg hover:bg-rose-100 transition-colors uppercase"
                      >
                        View PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Image Upload Section */}
              <div className="space-y-4 col-span-1 md:col-span-2">
                <div className="bg-white border border-rose-200 p-4 rounded-xl shadow-sm w-full transition-all hover:border-rose-400">
                  <label className="flex items-center cursor-pointer mb-2">
                    <ImageIcon className="mr-3 text-rose-500" size={20} />
                    <span className="text-slate-700 font-bold text-sm uppercase tracking-wide">
                      {imageFile ? imageFile.name : (formData.image_url ? "Image Attached" : "Upload Image")}
                    </span>
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                  </label>
                  
                  {(imagePreview || formData.image_url) && (
                    <div className="mt-2">
                      <img 
                        src={imagePreview || formData.image_url} 
                        alt="Preview" 
                        className="h-24 w-24 object-cover rounded-lg border border-rose-100 shadow-inner" 
                      />
                    </div>
                  )}
                </div>
              </div>
              
              <textarea 
                className="col-span-1 md:col-span-2 p-3 border border-rose-200 rounded-xl focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all min-h-[100px]" 
                placeholder="Short Description" 
                value={formData.short_desc} 
                onChange={e => setFormData({...formData, short_desc: e.target.value})} 
              />

              <button className="col-span-1 md:col-span-2 bg-rose-600 text-white py-3 rounded-xl font-bold">{loading ? <Loader2 className="animate-spin mx-auto" /> : 'Save Scheme'}</button>
            </form>
          </div>
        </div>
      )}

        <div className="w-full space-y-6">
            {paginatedSchemes.map((s) => {
                const config = getCardConfig(s.id);
                return (
                    <div key={s.id} className={`relative bg-gradient-to-r ${config.gradient} p-6 rounded-xl border ${config.borderColor} ${config.borderLeft} border-l-[4px] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6`}>
                    <div className="flex-grow space-y-4">
                    <div className="flex justify-between items-start gap-4">
                        <div>
                        <h3 className="font-black text-slate-900 text-lg uppercase tracking-tight">{s.scheme_name}</h3>
                        <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-200 shrink-0">
                            <MapPin size={14} />
                        </div>
                        <p className="text-xs text-slate-500 font-semibold tracking-wide uppercase">{s.location}</p>
                        </div>
                        </div>
                        <span className="text-[10px] font-black text-white bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-1.5 rounded-xl shadow-md uppercase tracking-wider shrink-0">
                        FY {s.financial_year}
                        </span>
                    </div>

                    <div className="mt-4">
                        {/* <h4 className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1">Details</h4> */}
                        <p className="text-sm border-slate-300 pl-3 leading-relaxed text-slate-700">
                            {s.short_desc || "No description provided."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2 w-full">
                        {[
                            { label: 'Status', value: s.status, color: 'text-emerald-600' },
                            { label: 'Done By', value: s.done_by, color: 'text-slate-700' }
                        ].map((item, idx) => (
                            <div 
                              key={idx} 
                              className={`bg-white border border-slate-100/80 rounded-xl p-4 flex flex-col shadow-[0_2px_8px_-1px_rgba(0,0,0,0.03)] transition-all border-l-4 ${
                                item.label === 'Status' ? 'border-l-emerald-500' : 'border-l-indigo-500'
                              }`}
                            >
                              <span className="text-[9px] font-bold text uppercase tracking-widest mb-1">{item.label}</span>
                              <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                            </div>
                        ))}
                        <div className="bg-white border-l-4 border-slate-100/80 border-l-orange-500 rounded-xl p-4 flex items-center gap-4 shadow-[0_2px_8px_-1px_rgba(0,0,0,0.03)] transition-all">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg shadow-blue-200 shrink-0">
                            <Phone size={16} />
                            </div>
                            <span className="text-sm font-bold text-slate-700">{s.contact_no}</span>
                        </div>
                    </div>
                    </div>

                    <div className="md:w-64 border-t md:border-t-0 md:border-l border-slate-400 pt-6 md:pt-0 md:pl-6 flex flex-col justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total Budget</span>
                        <span className="text-xl sm:text-2xl font-bold text-[#10b981] leading-none tracking-tight">₹{Number(s.amount).toLocaleString()}</span>
                    </div>
                    {/* Media & Documents Bar */}
                      <div className="flex gap-2 mt-4">
                        {s.image_url && (
                          <a 
                            href={s.image_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex-1 flex items-center justify-center gap-2 py-2 border border-purple-200 rounded-lg text-purple-600 bg-purple-50 transition-all font-bold text-[10px] uppercase tracking-wider"
                          >
                            <ImageIcon size={14} /> View Image
                          </a>
                        )}
                        {s.pdf_url && (
                          <a 
                            href={s.pdf_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex-1 flex items-center justify-center gap-2 py-2 border border-rose-200 rounded-lg text-rose-600 bg-rose-50 transition-all font-bold text-[10px] uppercase tracking-wider"
                          >
                            <FileText size={14} /> View PDF
                          </a>
                        )}
                      </div>
                    
                    <div className="flex flex-col gap-2 mt-6">
                        <button 
                          onClick={() => { 
                            setErrors({}); // <--- Add this! Clear old errors when opening edit
                            setFormData(s); 
                            setEditingId(s.id); 
                            setShowForm(true); 
                          }} 
                          className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg shadow-md shadow-indigo-200 hover:shadow-indigo-300 transition-all font-black text-[11px] uppercase tracking-wider"
                        >
                          <Edit2 size={14}/> Edit Scheme
                        </button>
                        <button 
                            onClick={() => setDeleteId(s.id)} 
                            className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-lg shadow-md shadow-rose-200 hover:shadow-rose-300 transition-all font-black text-[11px] uppercase tracking-wider"
                        >
                            <Trash2 size={14}/> Delete Scheme
                        </button>
                    </div>
                    </div>
                </div>
                );
            })}
            {paginatedSchemes.length === 0 && (
              <div className="w-full flex flex-col items-center justify-center py-7 px-8 bg-gradient-to-br from-rose-600 to-pink-700 border border-rose-500 rounded-xl shadow-lg shadow-rose-200 animate-in fade-in zoom-in duration-500">
                {/* Icon Container with subtle glass effect */}
              

                {/* Text Section */}
                <div className="text-center space-y-2">
                  <h3 className="text-white font-black uppercase tracking-[0.2em] text-sm">
                    No Schemes Available
                  </h3>
                  
                </div>

                {/* Action Button */}
                <button 
                  onClick={() => { setSearchTerm(''); setStatusFilter('All'); }}
                  className="mt-2 flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95"
                >
                  Clear Search & Filters
                </button>
              </div>
            )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-rose-600 disabled:opacity-30 uppercase tracking-widest"
            >
                Previous
            </button>
            <span className="text-xs font-black text-slate-400">
                PAGE {currentPage} OF {totalPages}
            </span>
            <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-rose-600 disabled:opacity-30 uppercase tracking-widest"
            >
                Next
            </button>
            </div>
        )}
    </div>
  );
}