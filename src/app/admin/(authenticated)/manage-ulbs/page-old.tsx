'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Loader2, Trash2, X, Plus, Edit2, AlertCircle } from 'lucide-react';

export default function AddUlbPage() {
  const [ulbs, setUlbs] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', district: '', state: '', code: '' });
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchUlbs = useCallback(async () => {
    const { data, error } = await supabase.from('ulbs').select('*');
    if (error) showToast("Failed to fetch data", "error");
    else setUlbs(data || []);
  }, [supabase]);

  useEffect(() => { fetchUlbs(); }, [fetchUlbs]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = editingId 
      ? await supabase.from('ulbs').update(formData).eq('id', editingId)
      : await supabase.from('ulbs').insert(formData);

    if (error) showToast(`Error: ${error.message}`, "error");
    else {
      showToast(`ULB ${editingId ? 'updated' : 'added'} successfully`, "success");
      setFormData({ name: '', district: '', state: '', code: '' });
      setShowForm(false);
      setEditingId(null);
      fetchUlbs();
    }
    setLoading(false);
  };

  const deleteUlb = async () => {
    if (!deleteId) return;
    const { error } = await supabase.from('ulbs').delete().eq('id', deleteId);
    if (error) showToast("Delete failed", "error");
    else {
      showToast("ULB deleted successfully", "success");
      fetchUlbs();
    }
    setDeleteId(null);
  };

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-4 bg-slate-50 min-h-screen text-xs relative">
      {/* Toast Notification */}
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

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/10 backdrop-blur-sm p-4">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-xs w-full text-center">
            <h3 className="font-black text-slate-800 mb-2">CONFIRM DELETE</h3>
            <p className="text-slate-500 mb-6">Are you sure you want to delete this ULB?</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 py-2 rounded-xl border border-slate-200 font-bold cursor-pointer">CANCEL</button>
              <button onClick={deleteUlb} className="flex-1 py-2 rounded-xl bg-red-600 text-white font-bold cursor-pointer">DELETE</button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 border-l-4 border-l-yellow-500 rounded-xl gap-3 shadow-sm">
        <h1 className="text-sm font-black text-slate-800 tracking-tight">ULB MANAGEMENT</h1>
        <button 
          onClick={() => { setEditingId(null); setFormData({ name: '', district: '', state: '', code: '' }); setShowForm(!showForm); }} 
          className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold cursor-pointer"
        >
          <Plus size={14} /> Add ULB
        </button>
      </div>

      {/* Form Section */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showForm ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white p-4 border-l-4 border-l-purple-500 rounded-xl mb-4 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-black text-slate-800 uppercase">{editingId ? 'EDIT ULB' : 'NEW ULB'}</h2>
            <button className='cursor-pointer' onClick={() => setShowForm(false)}><X size={16} /></button>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input className="p-2 border border-slate-200 rounded-xl w-full" placeholder="ULB Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
            <input className="p-2 border border-slate-200 rounded-xl w-full" placeholder="District" value={formData.district} onChange={e => setFormData({...formData, district: e.target.value})} required />
            <input className="p-2 border border-slate-200 rounded-xl w-full" placeholder="State" value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} required />
            <input className="p-2 border border-slate-200 rounded-xl w-full" placeholder="ULB Code" value={formData.code} onChange={e => setFormData({...formData, code: e.target.value})} required />
            <button type="submit" className="md:col-span-2 bg-purple-600 text-white py-2 rounded-xl font-bold">{loading ? <Loader2 className="animate-spin mx-auto cursor-pointer" size={14}/> : 'SAVE ULB'}</button>
          </form>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border-t-4 border-t-yellow-500 overflow-hidden rounded-xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500">
              <tr>
                <th className="p-3 text-left">NAME</th>
                <th className="p-3 text-left">DISTRICT</th>
                <th className="p-3 text-left">STATE</th>
                <th className="p-3 text-left">CODE</th>
                <th className="p-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {ulbs.map(ulb => (
                <tr key={ulb.id} className="hover:bg-slate-50 border-b border-slate-50">
                  <td className="p-3 font-bold text-slate-700 whitespace-nowrap">{ulb.name}</td>
                  <td className="p-3 text-slate-500 whitespace-nowrap">{ulb.district}</td>
                  <td className="p-3 text-slate-500 whitespace-nowrap">{ulb.state}</td>
                  <td className="p-3 text-slate-500 font-mono whitespace-nowrap">{ulb.code}</td>
                  <td className="p-3 flex justify-end gap-3">
                    <button onClick={() => { setFormData({ name: ulb.name, district: ulb.district, state: ulb.state, code: ulb.code }); setEditingId(ulb.id); setShowForm(true); }} className="text-indigo-600 cursor-pointer"><Edit2 size={14}/></button>
                    <button onClick={() => setDeleteId(ulb.id)} className="text-red-500 cursor-pointer"><Trash2 size={14}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}