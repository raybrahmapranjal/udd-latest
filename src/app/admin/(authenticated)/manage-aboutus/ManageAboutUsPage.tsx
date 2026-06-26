'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Loader2, Trash2, Eye, Plus, Image as ImageIcon, Edit2, X, ChevronDown, AlertCircle } from 'lucide-react';
import { Listbox } from '@headlessui/react';

export default function ManageAboutUsPage({ currentUser }: { currentUser?: { id: string, role: string, ulb_id: string } }) {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);
  const [showEditor, setShowEditor] = useState(false);
  const [hasContent, setHasContent] = useState(false);
  const [ulbs, setUlbs] = useState<{ id: string, name: string }[]>([]);
  const [selectedUlbId, setSelectedUlbId] = useState(currentUser?.ulb_id || '');
  const [formData, setFormData] = useState({ heading: '', description: '', image_url_1: '', image_url_2: '' });
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const activeFieldRef = useRef<string | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    if (currentUser?.role === 'Super Admin') {
      supabase.from('ulbs').select('id, name').then(({ data }) => setUlbs(data || []));
    }
  }, [currentUser]);

  useEffect(() => {
    if (selectedUlbId) fetchContent(selectedUlbId);
  }, [selectedUlbId]);

  const fetchContent = async (ulbId: string) => {
    setLoading(true);
    const { data } = await supabase.from('about_us').select('*').eq('ulb_id', ulbId).single();
    if (data) {
      setFormData(data);
      setHasContent(true);
    } else {
      setFormData({ heading: '', description: '', image_url_1: '', image_url_2: '' });
      setHasContent(false);
    }
    setLoading(false);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const field = activeFieldRef.current;
    if (!file || !field) return;

    setUploading(field);
    const fileExt = file.name.split('.').pop();
    const fileName = `${selectedUlbId}/${field}_${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage.from('about-us-assets').upload(fileName, file);

    if (uploadError) {
      showToast("Upload failed: " + uploadError.message, 'error');
    } else {
      const { data } = supabase.storage.from('about-us-assets').getPublicUrl(fileName);
      const updatedData = { ...formData, [field]: data.publicUrl };
      const { error: dbError } = await supabase.from('about_us').upsert({ ulb_id: selectedUlbId, ...updatedData });
      
      if (dbError) {
        showToast("Failed to save image reference", 'error');
      } else {
        setFormData(updatedData);
        showToast("Image uploaded successfully!", 'success');
      }
    }
    setUploading(null);
  };

  const handleSave = async () => {
    setSaving(true);
    const { error } = await supabase.from('about_us').upsert({ ulb_id: selectedUlbId, ...formData });
    if (error) {
      showToast("Error saving changes", 'error');
    } else {
      showToast("Changes saved successfully!", 'success');
      setHasContent(true);
      setShowEditor(false);
    }
    setSaving(false);
  };

  const executeDelete = async () => {
    setConfirmDelete(false);
    const { error } = await supabase.from('about_us').delete().eq('ulb_id', selectedUlbId);
    if (error) {
      showToast("Failed to delete content", 'error');
    } else {
      showToast("Content deleted successfully", 'success');
      setFormData({ heading: '', description: '', image_url_1: '', image_url_2: '' });
      setHasContent(false);
    }
  };

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-4 bg-slate-50 min-h-screen text-xs">
      {/* Toast Notification */}
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

      {/* Confirmation Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/10 backdrop-blur-sm p-4">
          <div className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-200 max-w-xs w-full text-center">
            <h3 className="font-black text-slate-800 mb-2">CONFIRM DELETE</h3>
            <p className="text-slate-500 mb-6">Are you sure? This action is permanent.</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmDelete(false)} className="flex-1 py-2 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50">CANCEL</button>
              <button onClick={executeDelete} className="flex-1 py-2 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700">DELETE</button>
            </div>
          </div>
        </div>
      )}

      <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileUpload} accept="image/*" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center bg-slate-900 p-4  border-l-4 border-l-orange-500 rounded-xl gap-4">
        <h1 className="text-sm font-black text-white tracking-tight uppercase w-full lg:w-auto text-center lg:text-left">About Us Management</h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {currentUser?.role === 'Super Admin' && (
            <Listbox value={selectedUlbId} onChange={setSelectedUlbId}>
              <div className="relative w-full sm:w-64">
                <Listbox.Button className="w-full p-2 border border-orange-200 rounded-xl text-left bg-orange-50 font-bold flex justify-between items-center text-xs">
                  <span className="truncate">{ulbs.find(u => u.id === selectedUlbId)?.name || "Select ULB"}</span>
                  <ChevronDown size={16} className="text-slate-400 shrink-0" />
                </Listbox.Button>
                <Listbox.Options className="absolute z-50 w-full bg-white border border-orange-200 rounded-xl shadow-lg mt-1 max-h-60 overflow-auto">
                  {ulbs.map(u => <Listbox.Option key={u.id} value={u.id} className="p-2 cursor-pointer hover:bg-indigo-50 text-xs">{u.name}</Listbox.Option>)}
                </Listbox.Options>
              </div>
            </Listbox>
          )}
          {!hasContent && (
            <button onClick={() => setShowEditor(true)} className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-600 text-white px-4 py-2 rounded-xl font-bold shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.23)] transition-all duration-300 flex items-center justify-center gap-1 text-xs whitespace-nowrap">
              <Plus size={14} /> ADD CONTENT
            </button>
          )}
        </div>
      </div>

      {/* Editor */}
      {showEditor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg border-t-4 border-t-orange-500 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-black text-slate-800 text-lg uppercase">EDITOR</h2>
              <button onClick={() => setShowEditor(false)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <input 
                className="w-full p-3 border border-orange-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" 
                placeholder="Heading" 
                value={formData.heading} 
                onChange={e => setFormData({...formData, heading: e.target.value})} 
              />
              <textarea 
                className="w-full p-3 border border-orange-200 rounded-xl focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all" 
                placeholder="Description" 
                value={formData.description} 
                onChange={e => setFormData({...formData, description: e.target.value})} 
              />
              
              <button 
                onClick={handleSave} 
                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white py-3 rounded-xl font-bold shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.23)] transition-all duration-300"
              >
                {saving ? <Loader2 className="animate-spin mx-auto" size={16}/> : 'SAVE CHANGES'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Live Preview */}
      <div className="bg-white border border-orange-200 border-t-4 border-t-orange-500 rounded-xl p-4 space-y-4">
  <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
    <h2 className="font-black text-slate-800 uppercase flex items-center gap-2">
      Live Preview <Eye size={16} />
    </h2>
    {hasContent && (
      <div className="flex gap-3 w-full sm:w-auto">
        {/* Edit Button */}
        <button 
          onClick={() => setShowEditor(true)} 
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-indigo-200 hover:scale-[1.02] transition-all duration-200 text-xs font-bold"
        >
          <Edit2 size={14}/> EDIT
        </button>

        {/* Delete Button */}
        <button 
          onClick={() => setConfirmDelete(true)} 
          className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-br from-red-500 to-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-red-200 hover:scale-[1.02] transition-all duration-200 text-xs font-bold"
        >
          <Trash2 size={14}/> DELETE
        </button>
      </div>
    )}
  </div>

  <h3 className="text-lg font-black break-words">{formData.heading || 'No Content Added'}</h3>
  <p className="text-slate-500 text-sm">{formData.description || 'Use the Add or Edit buttons to manage content.'}</p>
  
  {/* Responsive Grid: Stacks on mobile (1 col), side-by-side on sm+ (2 cols) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {(['image_url_1', 'image_url_2'] as const).map(field => (
      <div key={field} className="border border-slate-200 rounded-xl p-2 space-y-2">
        <div className="h-40 bg-slate-50 flex items-center justify-center rounded-lg overflow-hidden relative">
          {/* Loader for File Upload Process */}
          {uploading === field && <Loader2 className="animate-spin text-indigo-500 absolute z-10" />}
          
          {/* Preloader for Image Loading */}
          {formData[field] && imageLoading[field] && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50/50">
              <Loader2 className="animate-spin text-orange-400" size={24} />
            </div>
          )}

          {formData[field] ? (
            <img 
              src={formData[field]} 
              className={`h-full w-full object-contain transition-opacity duration-300 ${imageLoading[field] ? 'opacity-0' : 'opacity-100'}`}
              alt="Preview"
              onLoad={() => setImageLoading(prev => ({ ...prev, [field]: false }))}
              onLoadStart={() => setImageLoading(prev => ({ ...prev, [field]: true }))}
              onError={() => setImageLoading(prev => ({ ...prev, [field]: false }))}
            />
          ) : (
            <ImageIcon className="text-slate-300" size={40} />
          )}
        </div>
        
        <button 
          onClick={() => { activeFieldRef.current = field; fileInputRef.current?.click(); }} 
          className="w-full bg-orange-50 text-orange-600 py-1.5 rounded-lg font-bold text-[10px] flex items-center justify-center transition-colors hover:bg-orange-100"
        >
          {formData[field] ? 'CHANGE PHOTO' : 'UPLOAD PHOTO'}
        </button>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}