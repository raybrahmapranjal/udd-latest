'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Upload, Plus, Trash2, Edit2, CheckCircle, X, Loader2, AlertCircle } from 'lucide-react';
import { Listbox } from '@headlessui/react';

export default function SchemeProgressClient() {
  const [updates, setUpdates] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [formData, setFormData] = useState({ progress: 0, details: '' });
  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  const [previews, setPreviews] = useState<(string | null)[]>([null, null, null]);
  const [allSchemes, setAllSchemes] = useState<any[]>([]);
  const [selectedSchemeId, setSelectedSchemeId] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ progress?: string; images?: string }>({});
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Stabilized Supabase Client
  const supabase = useMemo(() => createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  ), []);

  useEffect(() => {
    return () => previews.forEach((url) => { if (url) URL.revokeObjectURL(url); });
  }, [previews]);

  useEffect(() => {
    supabase.from('schemes').select('id, scheme_name').then(({ data }) => setAllSchemes(data || []));
  }, [supabase]);

  const fetchUpdates = useCallback(async () => {
    if (!selectedSchemeId || selectedSchemeId === 'undefined') return;
    setLoading(true);
    const { data, error } = await supabase
      .from('scheme_updates')
      .select('*')
      .eq('scheme_id', selectedSchemeId)
      .order('created_at', { ascending: true });
    
    if (error) console.error("Fetch error:", error);
    setUpdates(data || []);
    setLoading(false);
  }, [selectedSchemeId, supabase]);

  useEffect(() => {
    fetchUpdates();
  }, [selectedSchemeId, fetchUpdates]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('scheme_updates').delete().eq('id', id);
    if (!error) {
      setToast({ message: 'Deleted successfully!', type: 'success' });
      fetchUpdates();
    } else {
      setToast({ message: 'Failed to delete.', type: 'error' });
    }
  };

  const handleEdit = (update: any) => {
    setEditingId(update.id);
    setSelectedSchemeId(update.scheme_id);
    setFormData({ progress: update.progress_percentage, details: update.details });
    setPreviews([update.image1_url, update.image2_url, update.image3_url]);
    setShowModal(true);
    setErrors({});
  };

  const handleProgressSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    if (!selectedSchemeId || selectedSchemeId === 'undefined') {
      setToast({ message: 'Invalid Scheme Selected.', type: 'error' });
      return;
    }

    const { data: latestUpdates, error: fetchError } = await supabase
      .from('scheme_updates')
      .select('progress_percentage')
      .eq('scheme_id', selectedSchemeId);

    if (fetchError) {
      setToast({ message: 'Error validating progress.', type: 'error' });
      return;
    }

    const maxProgress = latestUpdates && latestUpdates.length > 0 
      ? Math.max(...latestUpdates.map(u => u.progress_percentage || 0)) : 0;

    if (!editingId && formData.progress < maxProgress) {
      setErrors((prev) => ({ ...prev, progress: `Progress cannot be less than ${maxProgress}%.` }));
      return;
    }

    setLoading(true);
    try {
      const uploadedUrls = [...previews];
      for (let i = 0; i < files.length; i++) {
        if (files[i]) {
          const path = `${Date.now()}_${Math.random().toString(36).substring(7)}_${files[i]!.name}`;
          const { error: uploadError } = await supabase.storage.from('progress-images').upload(path, files[i]!);
          if (uploadError) throw uploadError;
          uploadedUrls[i] = supabase.storage.from('progress-images').getPublicUrl(path).data.publicUrl;
        }
      }

      const payload = {
        scheme_id: selectedSchemeId,
        progress_percentage: formData.progress,
        details: formData.details,
        image1_url: uploadedUrls[0],
        image2_url: uploadedUrls[1],
        image3_url: uploadedUrls[2]
      };

      const { error: dbError } = editingId 
        ? await supabase.from('scheme_updates').update(payload).eq('id', editingId)
        : await supabase.from('scheme_updates').insert([payload]);

      if (dbError) throw dbError;

      setToast({ message: `Update ${editingId ? 'edited' : 'added'} successfully!`, type: 'success' });
      setShowModal(false);
      setEditingId(null);
      setFiles([null, null, null]);
      setPreviews([null, null, null]);
      setFormData({ progress: 0, details: '' });
      fetchUpdates();
    } catch (err) {
      setToast({ message: 'Submission failed.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleAddNew = () => {
    setEditingId(null);
    setFormData({ progress: 0, details: '' });
    setFiles([null, null, null]);
    setPreviews([null, null, null]);
    setShowModal(true);
  };

  // ... (Keep your original return/JSX exactly as it was)
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-6 bg-slate-50 min-h-screen text-xs">
      {toast && (
        <div className={`fixed top-6 right-6 z-[100] px-5 py-4 rounded-xl shadow-2xl text-white font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300 ${toast.type === 'success' ? 'bg-emerald-600' : 'bg-red-600'}`}>
          {toast.type === 'success' ? (
              <svg width="24" height="24" viewBox="0 0 36 36" className="stroke-white">
                <circle className="animate-circle" strokeWidth="3" fill="none" strokeDasharray="100" strokeDashoffset="100" cx="18" cy="18" r="15" transform="rotate(-90 18 18)" />
                <path className="animate-check" strokeWidth="3" fill="none" strokeDasharray="20" strokeDashoffset="20" d="M12 18l4 4 8-8" />
              </svg>
          ) : (
            <AlertCircle size={20} className="animate-pulse" />
          )}
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
              <button onClick={() => { handleDelete(deleteId); setDeleteId(null); }}  className="flex-1 py-2 rounded-xl bg-red-600 text-white font-bold">DELETE</button>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-900 p-6 rounded-2xl shadow-lg border-l-4 border-emerald-500 gap-4">
        <h1 className="text-sm font-black text-white tracking-tight uppercase">Scheme Milestones</h1>
        <button 
          onClick={handleAddNew} 
          className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-6 py-2 rounded-xl font-bold hover:from-emerald-700 hover:to-teal-800 transition-all flex items-center gap-2"
        >
          <Plus size={16} /> Add New Update
        </button>
      </div>

     
      <div className="w-full">
        <label className="block text-[10px] font-bold text uppercase tracking-wider mb-2">
          Filter By Scheme
        </label>
        
        <Listbox value={selectedSchemeId} onChange={setSelectedSchemeId}>
          <div className="relative">
            <Listbox.Button className="w-full p-4 rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white text-left text-sm font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md flex justify-between items-center cursor-pointer">
              <span className="truncate">
                {allSchemes.find(s => s.id === selectedSchemeId)?.scheme_name || "Select a scheme"}
              </span>
              <span className="text-emerald-500 text-[10px] opacity-70">▼</span>
            </Listbox.Button>

            <Listbox.Options className="absolute z-50 w-full mt-2 bg-white border border-emerald-100 rounded-xl shadow-2xl overflow-hidden p-1 animate-in fade-in zoom-in-95 duration-200 max-h-60 overflow-y-auto">
              {/* "All" or "Default" option */}
              <Listbox.Option 
                value="" 
                className={({ active }) => 
                  `px-4 py-3 cursor-pointer rounded-lg transition-all duration-200 text-sm font-medium ${active ? 'bg-emerald-50 text-emerald-700' : 'text-slate-500'}`
                }
              >
                Select a scheme
              </Listbox.Option>

              {allSchemes.map((s) => (
                <Listbox.Option 
                  key={s.id} 
                  value={s.id} 
                  className={({ active, selected }) => 
                    `px-4 py-3 cursor-pointer rounded-lg transition-all duration-200 text-sm font-medium 
                    ${active ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700'}
                    ${selected ? 'font-bold' : ''}`
                  }
                >
                  {s.scheme_name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <form onSubmit={handleProgressSubmit} className="bg-white p-8 rounded-2xl w-full max-w-lg shadow-2xl border-t-4 border-t-emerald-600">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-black text-lg uppercase">{editingId ? 'Edit Update' : 'Post Update'}</h2>
              <button type="button" onClick={() => setShowModal(false)}><X size={20}/></button>
            </div>
            
            <div className="mb-6">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Select Scheme
              </label>
              
              <Listbox value={selectedSchemeId} onChange={setSelectedSchemeId}>
                <div className="relative">
                  <Listbox.Button className="w-full p-4 rounded-xl border border-emerald-200 bg-white text-left text-sm font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md flex justify-between items-center cursor-pointer">
                    <span className="truncate">
                      {allSchemes.find(s => s.id === selectedSchemeId)?.scheme_name || "Select a scheme"}
                    </span>
                    <span className="text-emerald-500 text-[10px] opacity-70">▼</span>
                  </Listbox.Button>

                  <Listbox.Options className="absolute z-[60] w-full mt-2 bg-white border border-emerald-100 rounded-xl shadow-2xl p-1 animate-in fade-in zoom-in-95 duration-200 max-h-60 overflow-y-auto">
                    {allSchemes.map((s) => (
                      <Listbox.Option 
                        key={s.id} 
                        value={s.id} 
                        className={({ active, selected }) => 
                          `px-4 py-3 cursor-pointer rounded-lg transition-all duration-200 text-sm font-medium 
                          ${active ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700'}
                          ${selected ? 'bg-emerald-100/50 font-bold' : ''}`
                        }
                      >
                        {s.scheme_name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
            
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Progress: {formData.progress}%</label>
            <input 
              type="range" 
              className="w-full h-2 mb-4 rounded-full appearance-none cursor-pointer 
                        bg-slate-200 accent-emerald-600 
                        [&::-webkit-slider-thumb]:appearance-none 
                        [&::-webkit-slider-thumb]:h-5 
                        [&::-webkit-slider-thumb]:w-5 
                        [&::-webkit-slider-thumb]:rounded-full 
                        [&::-webkit-slider-thumb]:bg-emerald-600 
                        [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(16,185,129,0.2)] 
                        hover:[&::-webkit-slider-thumb]:scale-110 
                        hover:[&::-webkit-slider-thumb]:shadow-[0_0_0_8px_rgba(16,185,129,0.2)]
                        transition-all duration-300"
              style={{
                background: `linear-gradient(to right, #059669 ${formData.progress}%, #e2e8f0 ${formData.progress}%)`
              }}
              value={formData.progress} 
              onChange={(e) => setFormData({...formData, progress: parseInt(e.target.value)})} 
            />
            {errors.progress && <p className="text-red-500 font-bold mb-4">{errors.progress}</p>}
            
            <textarea className="w-full p-4 border border-emerald-200 outline-none  focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-50 rounded-xl mb-6 text-sm" placeholder="Describe the progress..." value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})} required />
            
            <div className="grid grid-cols-3 gap-3 mb-2">
              {[0, 1, 2].map(i => (
                <label 
                  key={i} 
                  className="group relative h-24 w-full cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-50/30 hover:shadow-inner"
                >
                  {/* Centered Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {previews[i] ? (
                      <img src={previews[i]!} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <>
                        <Upload size={20} className="text-slate-400 transition-colors group-hover:text-emerald-600" />
                        <span className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-400 transition-colors group-hover:text-emerald-700">Upload</span>
                      </>
                    )}
                  </div>

                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*" 
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const newFiles = [...files]; newFiles[i] = file; setFiles(newFiles);
                        const newPreviews = [...previews]; newPreviews[i] = URL.createObjectURL(file); setPreviews(newPreviews);
                      }
                    }} 
                  />
                </label>
              ))}
            </div>
            {errors.images && <p className="text-red-500 font-bold mb-4">{errors.images}</p>}
            
            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:from-emerald-700 hover:to-teal-800 transition-all shadow-lg active:scale-95">
              {loading ? <Loader2 className="animate-spin mx-auto" /> : 'Submit Update'}
            </button>
          </form>
        </div>
      )}

      <div className="space-y-6 relative">
        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-slate-50/50 backdrop-blur-[2px] z-10 flex items-center justify-center rounded-2xl">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Loading Milestones...</span>
            </div>
          </div>
        )}

        {updates.map((u, index) => {
          // Logic: The last item is ALWAYS active (Current Progress)
          const isLast = index === updates.length - 1;
          const isCompleted = u.progress_percentage === 100;
          
          return (
            <div 
              key={u.id} 
              className={`relative pl-8 pb-8 group transition-all duration-500 
                ${index !== updates.length - 1 ? 'border-l-2 border-slate-200' : 'border-l-0'}
                ${!isLast ? 'opacity-50 grayscale hover:opacity-75' : 'opacity-100'}`}
            >
              {/* Connector Dot: Glowing Emerald for the latest entry */}
              <div 
                className={`absolute -left-[11px] top-0 rounded-full p-1.5  transition-all duration-300 group-hover:scale-110 
                ${isLast ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-slate-300'}`}
              >
                <CheckCircle size={14} strokeWidth={2.5} color="white" />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className={`font-black text-sm uppercase ${isLast ? 'text-emerald-700' : 'text-slate-500'}`}>
                    {u.progress_percentage}% {isCompleted ? 'Complete' : isLast ? 'Current Progress' : 'History'}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">{u.details}</p>
                </div>
                
                {/* Actions are pinned to the last item but accessible via hover on others */}
               <div className={`flex gap-3 transition-opacity ${isLast ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  {/* Edit Button - Deep Emerald */}
                  <button 
                    onClick={() => handleEdit(u)} 
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all duration-300
                              bg-gradient-to-br from-emerald-600 to-emerald-800 border-b-2 border-emerald-900 text-white
                              hover:shadow-[0_4px_10px_rgba(5,150,105,0.3)] active:border-b-0 active:translate-y-[2px]"
                  >
                    <Edit2 size={12} /> Edit
                  </button>

                  {/* Delete Button - Bold Red */}
                  <button 
                    onClick={() => setDeleteId(u.id)} 
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-[10px] uppercase tracking-wider transition-all duration-300
                              bg-gradient-to-br from-red-600 to-red-800 border-b-2 border-red-900 text-white
                              hover:shadow-[0_4px_10px_rgba(220,38,38,0.3)] active:border-b-0 active:translate-y-[2px]"
                  >
                    <Trash2 size={12} /> Remove
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3">
                {[u.image1_url, u.image2_url, u.image3_url].map((url, i) => {
                  if (!url || typeof url !== 'string') return null;
                  
                  return (
                    <img 
                      key={`${u.id}-${i}`}
                      src={url} 
                      alt="Progress" 
                      className="w-full object-cover rounded-lg border border-emerald-200 shadow-sm cursor-pointer"
                      onClick={() => setSelectedImage(url)}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        
        {/* Empty State */}
        {!loading && updates.length === 0 && (
          <div className="text-center py-12 bg-gradient-to-br from-emerald-600 to-emerald-700 border border-emerald-500 rounded-xl shadow-lg shadow-emerald-200">
             <p className="text-white font-bold uppercase text-xs">No updates found for this scheme.</p>
          </div>
        )}

        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute -top-10 right-0 text-white hover:text-emerald-400"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage} 
                alt="Full view" 
                className="max-h-[80vh] w-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()} 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}