'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Loader2, Edit2, Trash2, X, Plus, Eye, EyeOff, AlertCircle, Phone, Mail, User, Building } from 'lucide-react';
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

    if (!formData.email || formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone || formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const triggerToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

 const fetchData = useCallback(async () => {
  // Querying public.profiles directly is secure and permitted
  const [ulbsRes, adminsRes] = await Promise.all([
    supabase.from('ulbs').select('id, name'),
    supabase.from('profiles')
      .select('id, full_name, role, email, phone, ulb_id, avatar_url')
      .in('role', ['Admin', 'Super Admin'])
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
      if (!response.ok) throw new Error("Failed to delete");
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
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-6 bg-slate-50 min-h-screen text-xs">
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

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-900 p-6 rounded-2xl shadow-lg border-l-4 border-yellow-500 gap-4">
        <h1 className="text-sm font-black text-white tracking-tight uppercase text-center sm:text-left w-full sm:w-auto">Admin Management</h1>
        <button onClick={() => { resetForm(); setShowForm(true); }} className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-indigo-700 flex items-center justify-center gap-2 whitespace-nowrap transition-colors">
          <Plus size={16} /> ADD Admin
        </button>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {admins.map(admin => (
          <div key={admin.id} className="bg-[#FDFBFF] p-7 rounded-2xl border border-purple-400 border-l-4 shadow-[0_2px_10px_rgba(150,100,250,0.1)] transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full border-2 border-purple-100 flex items-center justify-center overflow-hidden">
                {admin.avatar_url ? (
                  <img 
                    src={admin.avatar_url} 
                    alt="Profile" 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <User size={32} className="text-purple-500" />
                )}
              </div>
              <div>
                <h3 className="font-black text-slate-800 text-base">{admin.full_name}</h3>
                <p className="text-purple-600 font-bold text-[10px] uppercase tracking-widest">{admin.role}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white/90 py-1.5 px-3 rounded-md flex items-center gap-2.5 font-bold text-xs sm:text-sm text-slate-700 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                <Mail size={16} className="text-purple-500" /> <span>{admin.email}</span>
              </div>
              <div className="bg-white/90 py-1.5 px-3 rounded-md flex items-center gap-2.5 font-bold text-xs sm:text-sm text-slate-700 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                <Phone size={16} className="text-purple-500" /> <span>{admin.phone || 'N/A'}</span>
              </div>
              <div className="bg-white/90 py-1.5 px-3 rounded-md flex items-center gap-2.5 font-bold text-xs sm:text-sm text-slate-700 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                <Building size={16} className="text-purple-500" /> 
                <span>{ulbs.find(u => u.id === admin.ulb_id)?.name || 'No ULB Assigned'}</span>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-purple-50">
              <button onClick={() => { setIsEditing(admin.id); setFormData({ email: admin.email, name: admin.full_name, phone: admin.phone || '', ulb_id: admin.ulb_id || '', password: '' });setErrors({}); setShowForm(true); }} className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-[10px] uppercase shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all">
                <Edit2 size={12}/> Edit
              </button>
              <button onClick={() => setConfirmDeleteId(admin.id)} className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold text-[10px] uppercase shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all">
                <Trash2 size={12}/> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Form Overlay */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg border-t-4 border-indigo-600">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-black text-slate-800 text-lg uppercase">{isEditing ? 'Edit Admin' : 'New Admin'}</h2>
              <button onClick={() => setShowForm(false)} className="text-slate-400"><X size={20} /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input className="w-full p-3 border border-indigo-200 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
              
              <div className="w-full">
                <input className={`w-full p-3 border rounded-xl ${errors.phone ? 'border-red-500' : 'border-indigo-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all'}`} placeholder="Phone (10 digits)" value={formData.phone} onChange={e => { setFormData({...formData, phone: e.target.value}); if (errors.phone) setErrors({...errors, phone: undefined}); }} />
                {errors.phone && <p className="text-red-500 text-[13px] mt-1">{errors.phone}</p>}
              </div>

              <div className="w-full">
                <input className={`w-full p-3 border rounded-xl ${errors.email ? 'border-red-500' : 'border-indigo-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all'}`} type="email" placeholder="Email" value={formData.email} onChange={e => { setFormData({...formData, email: e.target.value}); if (errors.email) setErrors({...errors, email: undefined}); }} />
                {errors.email && <p className="text-red-500 text-[13px] mt-1">{errors.email}</p>}
              </div>

              <div className="w-full relative">
                <Listbox value={formData.ulb_id} onChange={(v) => setFormData({...formData, ulb_id: v})}>
                  <Listbox.Button className="w-full p-2.5 rounded-xl border border-indigo-200 bg-white text-left text-sm font-semibold text-slate-700 outline-none focus:border-indigo-500 transition-all flex justify-between items-center cursor-pointer">
                    {formData.ulb_id ? ulbs.find(u => u.id === formData.ulb_id)?.name : "Select ULB"}
                    <span className="text-indigo-500 text-[10px]">▼</span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-[60] w-full mt-2 bg-white border border-indigo-100 rounded-xl shadow-xl p-1">
                    {ulbs.map((ulb) => (
                      <Listbox.Option key={ulb.id} value={ulb.id} className={({ active }) => `p-3 cursor-pointer ${active ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600'}`}>
                        {ulb.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </div>

              {!isEditing && (
                <input className="w-full p-3 border border-indigo-200 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" type="password" placeholder="Password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} required />
              )}
              <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] transition-all duration-300">
                {loading ? <Loader2 className="animate-spin mx-auto" /> : 'Save Admin'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}