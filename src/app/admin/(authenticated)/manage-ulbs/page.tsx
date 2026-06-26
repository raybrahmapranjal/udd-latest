'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Loader2, Trash2, X, Plus, Edit2, AlertCircle} from 'lucide-react';
import { Listbox } from '@headlessui/react';
export default function AddUlbPage() {
  const [ulbs, setUlbs] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  // const [deleteId, setDeleteId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', district: '', state: '', code: '' });
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
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
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-6 bg-slate-50 min-h-screen text-xs">
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

      {/* Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/10 backdrop-blur-sm p-4">
          <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-xs w-full text-center">
            <h3 className="font-black text-slate-800 mb-2">CONFIRM DELETE</h3>
            <p className="text-slate-500 mb-6">This action is permanent.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 py-2 rounded-xl border border-slate-200 font-bold text-slate-600">CANCEL</button>
              <button onClick={deleteUlb} className="flex-1 py-2 rounded-xl bg-red-600 text-white font-bold">DELETE</button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-900 p-6 rounded-2xl shadow-lg border-l-4 border-purple-500 gap-4">
        <h1 className="text-sm font-black text-white tracking-tight uppercase w-full sm:w-auto text-center sm:text-left">
          ULB Management
        </h1>
        
        <button 
          onClick={() => { 
            setEditingId(null); 
            setFormData({ name: '', district: '', state: '', code: '' }); 
            setShowForm(true); 
          }} 
          className="w-full sm:w-auto bg-purple-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-purple-700 flex items-center justify-center gap-2 whitespace-nowrap transition-colors"
        >
          <Plus size={16} /> ADD ULB
        </button>
      </div>

      {/* Form Overlay */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg border-t-4 border-t-purple-600">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-black text-slate-800 text-lg uppercase">{editingId ? 'Edit ULB' : 'New ULB'}</h2>
              <button onClick={() => setShowForm(false)} className="text-slate-400"><X size={20} /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input className="w-full p-3 border border-purple-200 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all" placeholder="ULB Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
              <div className="grid grid-cols-2 gap-4">
                <input className="w-full p-3 border border-purple-200 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all" placeholder="District" value={formData.district} onChange={e => setFormData({...formData, district: e.target.value})} required />
                <div className="w-full relative">
 
                  <Listbox value={formData.state || "Assam"} onChange={(v) => setFormData({...formData, state: v})}>
                    <Listbox.Button className="w-full p-3 border border-purple-200 rounded-xl text-left bg-white text-slate-700 hover:border-purple-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all flex justify-between items-center">
                      <span>{formData.state || "Assam"}</span>
                      <span className="text-purple-400 text-[10px]">▼</span>
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-20 w-full mt-2 bg-white border border-purple-100 rounded-xl shadow-xl max-h-40 overflow-auto p-1">
                      {["Assam"].map((state) => (
                        <Listbox.Option 
                          key={state} 
                          value={state} 
                          className={({ active }) => `p-3 cursor-pointer rounded-lg ${active ? 'bg-purple-50 text-purple-700 font-bold' : 'text-slate-600'}`}
                        >
                          {state}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
              </div>
              <input className="w-full p-3 border border-purple-200 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all" placeholder="ULB Code" value={formData.code} onChange={e => setFormData({...formData, code: e.target.value})} required />
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.23)] transition-all duration-300"
              >
                {loading ? <Loader2 className="animate-spin mx-auto" /> : 'Save ULB'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-purple-300 border-t-4 border-t-purple-600 overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead className="hidden sm:table-header-group bg-slate-50 border-b border-slate-100 text-slate-500 uppercase text-[10px] tracking-widest">
        <tr>
          <th className="p-4">Name</th>
          <th className="p-4">District</th>
          <th className="p-4">State</th>
          <th className="p-4">Code</th>
          <th className="p-4 text-right">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {ulbs.map(ulb => (
          <tr key={ulb.id} className="block sm:table-row hover:bg-slate-50/50 p-4 sm:p-0">
            <td className="p-2 sm:p-4 flex justify-between sm:table-cell font-bold text-slate-800">
              <span className="sm:hidden text-[10px] uppercase text-slate-400 font-bold">Name</span>
              {ulb.name}
            </td>
            <td className="p-2 sm:p-4 flex justify-between sm:table-cell text-slate-600">
              <span className="sm:hidden text-[10px] uppercase text-slate-400 font-bold">District</span>
              {ulb.district}
            </td>
            <td className="p-2 sm:p-4 flex justify-between sm:table-cell text-slate-600">
              <span className="sm:hidden text-[10px] uppercase text-slate-400 font-bold">State</span>
              {ulb.state}
            </td>
            <td className="p-2 sm:p-4 flex justify-between sm:table-cell text-slate-600 font-mono">
              <span className="sm:hidden text-[10px] uppercase text-slate-400 font-bold">Code</span>
              {ulb.code}
            </td>
            <td className="p-2 sm:p-4 flex justify-end gap-3 sm:table-cell">
                <div className="flex justify-end gap-2">
                  {/* Edit Button */}
                  <button 
                    onClick={() => { setFormData({ name: ulb.name, district: ulb.district, state: ulb.state, code: ulb.code }); setEditingId(ulb.id); setShowForm(true); }} 
                    className="flex items-center gap-1.5 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white px-3 py-1.5 rounded-lg shadow-md hover:shadow-indigo-200 hover:scale-105 transition-all duration-200 text-xs font-bold"
                  >
                    <Edit2 size={14}/> EDIT
                  </button>

                  {/* Delete Button */}
                  <button 
                    onClick={() => setDeleteId(ulb.id)} 
                    className="flex items-center gap-1.5 bg-gradient-to-br from-red-500 to-red-600 text-white px-3 py-1.5 rounded-lg shadow-md hover:shadow-red-200 hover:scale-105 transition-all duration-200 text-xs font-bold"
                  >
                    <Trash2 size={14}/> DELETE
                  </button>
                </div>
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