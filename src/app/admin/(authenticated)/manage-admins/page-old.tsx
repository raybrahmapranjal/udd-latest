'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Loader2, Edit2, Trash2, X, Plus, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Listbox } from '@headlessui/react';

export default function ManageAdminsPage() {
  const [admins, setAdmins] = useState<any[]>([]);
  const [ulbs, setUlbs] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '', phone: '', ulb_id: '' });
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const validate = () => {
    const newErrors: { email?: string; phone?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";
    if (formData.phone && !phoneRegex.test(formData.phone)) newErrors.phone = "Phone must be exactly 10 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const triggerToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchData = useCallback(async () => {
    const [ulbsRes, adminsRes] = await Promise.all([
      supabase.from('ulbs').select('id, name'),
      supabase.from('admin_details').select('*').in('role', ['Admin', 'Super Admin'])
    ]);
    setUlbs(ulbsRes.data || []);
    setAdmins(adminsRes.data || []);
  }, [supabase]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      if (isEditing) {
        await supabase.from('profiles').update({ full_name: formData.name, phone: formData.phone, ulb_id: formData.ulb_id }).eq('id', isEditing);
        triggerToast("Admin updated successfully");
      } else {
        const { data: auth, error: authErr } = await supabase.auth.signUp({ email: formData.email, password: formData.password });
        if (authErr) throw authErr;
        if (auth.user) {
          await supabase.from('profiles').insert({ id: auth.user.id, full_name: formData.name, role: 'Admin', phone: formData.phone, ulb_id: formData.ulb_id });
          triggerToast("Admin created successfully");
        }
      }
      setShowForm(false);
      resetForm();
      fetchData();
    } catch (err: any) {
      triggerToast(err.message || "Operation failed", "error");
    } finally {
      setLoading(false);
    }
  };

  const deleteAdmin = async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/delete-admin', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: id }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to delete");
      triggerToast("Admin deleted successfully");
      fetchData();
    } catch (err: any) {
      triggerToast(err.message || "An unexpected error occurred", "error");
    } finally {
      setConfirmDeleteId(null);
      setLoading(false);
    }
  };

  const resetForm = () => { 
    setFormData({ email: '', password: '', name: '', phone: '', ulb_id: '' }); 
    setErrors({});
    setIsEditing(null); 
    setShowPassword(false);
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
          ) : (
            <AlertCircle size={20} className="animate-pulse" />
          )}
          <span className="tracking-wide uppercase">{toast.message}</span>
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmDeleteId && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/10 backdrop-blur-sm p-4">
          <div className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-200 max-w-xs w-full text-center">
            <h3 className="font-black text-slate-800 mb-2">CONFIRM DELETE</h3>
            <p className="text-slate-500 mb-6">Are you sure? This action is permanent.</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmDeleteId(null)} className="flex-1 py-2 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50">CANCEL</button>
              <button onClick={() => deleteAdmin(confirmDeleteId)} className="flex-1 py-2 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700">DELETE</button>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 border border-indigo-200 border-l-4 border-l-indigo-500 rounded-xl gap-3">
        <h1 className="text-sm font-black text-slate-800 tracking-tight uppercase">Admin Management</h1>
        <button onClick={() => { resetForm();setShowForm(!showForm); }} className="flex items-center gap-1.5 bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-indigo-700 w-full sm:w-auto justify-center">
          <Plus size={14} /> Add Admin
        </button>
      </div>

      {/* Form Section */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showForm ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white p-4 border border-emerald-200 border-l-4 border-l-emerald-500 rounded-xl mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-black text-slate-800 uppercase">{isEditing ? 'EDIT ADMIN' : 'NEW ADMIN'}</h2>
            <button onClick={() => { setShowForm(false); resetForm(); }} className="text-slate-400"><X size={16} /></button>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input className="p-2 border border-slate-200 rounded-xl" placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
            <input className="p-2 border border-slate-200 rounded-xl" placeholder="Phone (10 digits)" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            <input className="p-2 border border-slate-200 rounded-xl md:col-span-2" type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
            <div className="md:col-span-2">
              <Listbox value={formData.ulb_id} onChange={(v) => setFormData({...formData, ulb_id: v})}>
                <div className="relative">
                  <Listbox.Button className="w-full p-2 border border-slate-200 rounded-xl text-left bg-white">{formData.ulb_id ? ulbs.find(u => u.id === formData.ulb_id)?.name : "Select ULB"}</Listbox.Button>
                  <Listbox.Options className="absolute z-10 w-full bg-white border border-slate-200 rounded-xl shadow-lg max-h-40 overflow-auto">
                    {ulbs.map(u => <Listbox.Option key={u.id} value={u.id} className="p-2 cursor-pointer hover:bg-indigo-50">{u.name}</Listbox.Option>)}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
            {!isEditing && (
              <div className="md:col-span-2 relative">
                <input className="w-full p-2 border border-slate-200 rounded-xl pr-10" type={showPassword ? "text" : "password"} placeholder="Password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} required />
                <button type="button" className="absolute right-3 top-2.5 text-slate-400" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button>
              </div>
            )}
            <button type="submit" className="md:col-span-2 bg-emerald-600 text-white py-2 rounded-xl font-bold">{loading ? <Loader2 className="animate-spin mx-auto" size={14}/> : 'SAVE'}</button>
          </form>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white border border-indigo-200 border-t-4 border-t-indigo-500 overflow-hidden rounded-xl">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
              <tr>
                <th className="p-3 text-left">NAME</th>
                <th className="p-3 text-left">EMAIL</th>
                <th className="p-3 text-left">PHONE</th>
                <th className="p-3 text-left">ROLE</th>
                <th className="p-3 text-left">ULB</th>
                <th className="p-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {admins.map(admin => (
                <tr key={admin.id} className="hover:bg-slate-50 border-b border-slate-50">
                  <td className="p-3 font-bold text-slate-700 whitespace-nowrap">{admin.full_name}</td>
                  <td className="p-3 text-slate-500">{admin.email}</td>
                  <td className="p-3 text-slate-500">{admin.phone}</td>
                  <td className="p-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold whitespace-nowrap ${
                      admin.role === 'Super Admin' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {admin.role.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-3 text-slate-500">{admin.ulb_name || 'N/A'}</td>
                  <td className="p-3 flex gap-3 justify-end">
                    <button onClick={() => { setIsEditing(admin.id); setFormData({ email: admin.email, name: admin.full_name, phone: admin.phone || '', ulb_id: admin.ulb_id || '', password: '' }); setShowForm(true); }} className="text-indigo-600"><Edit2 size={16}/></button>
                    <button onClick={() => setConfirmDeleteId(admin.id)} className="text-red-500"><Trash2 size={16}/></button>
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