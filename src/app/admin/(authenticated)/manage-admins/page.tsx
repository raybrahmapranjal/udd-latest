'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Loader2, Edit2, Trash2, Download, X, Save, Plus } from 'lucide-react';
import { CSVLink } from 'react-csv';
import { Listbox } from '@headlessui/react';

export default function ManageAdminsPage() {
  const [admins, setAdmins] = useState<any[]>([]);
  const [ulbs, setUlbs] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState({ email: '', password: '', name: '', phone: '', ulb_id: '' });
  const [errors, setErrors] = useState({ email: '', phone: '' });
  const [toast, setToast] = useState<string | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const fetchData = useCallback(async () => {
    const [ulbsRes, adminsRes] = await Promise.all([
      supabase.from('ulbs').select('id, name'),
      supabase.from('admin_details').select('*').in('role', ['Admin', 'Super Admin'])
    ]);
    setUlbs(ulbsRes.data || []);
    setAdmins(adminsRes.data || []);
  }, [supabase]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', phone: '' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    if (isEditing) {
      await supabase.from('profiles').update({ 
        full_name: formData.name, 
        phone: formData.phone, 
        ulb_id: formData.ulb_id 
      }).eq('id', isEditing);
      setToast("Admin updated successfully");
    } else {
      const { data: auth } = await supabase.auth.signUp({ email: formData.email, password: formData.password });
      if (auth.user) {
        await supabase.from('profiles').insert({ 
          id: auth.user.id, 
          full_name: formData.name, 
          role: 'Admin', 
          phone: formData.phone, 
          ulb_id: formData.ulb_id 
        });
        setToast("Admin created successfully");
      }
    }
    
    setShowForm(false);
    resetForm();
    fetchData();
    setLoading(false);
    setTimeout(() => setToast(null), 3000);
  };

  const deleteAdmin = async (id: string) => {
    await supabase.from('profiles').delete().eq('id', id);
    setToast("Admin deleted successfully");
    fetchData();
    setTimeout(() => setToast(null), 3000);
  };

  const resetForm = () => { 
    setFormData({ email: '', password: '', name: '', phone: '', ulb_id: '' }); 
    setIsEditing(null); 
    setErrors({ email: '', phone: '' });
  };

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-4 bg-slate-50 min-h-screen text-xs">
      {toast && <div className="fixed top-5 right-5 z-50 bg-slate-800 text-white px-4 py-2 rounded-xl shadow-lg">{toast}</div>}

      <div className="flex justify-between items-center bg-white p-3 border border-indigo-200 border-l-4 border-l-indigo-500 rounded-xl">
        <h1 className="text-sm font-black text-slate-800 tracking-tight">ADMIN MANAGEMENT</h1>
        <button onClick={() => { resetForm(); setShowForm(true); }} className="flex items-center gap-1.5 bg-indigo-600 text-white px-4 py-1.5 rounded-xl font-bold transition-all hover:bg-indigo-700">
          <Plus size={14} /> Add Admin
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showForm ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white p-4 border border-emerald-200 border-l-4 border-l-emerald-500 rounded-xl mb-4">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
            <input className="p-2 border border-slate-200 rounded-xl outline-none focus:border-indigo-500" placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
            <div>
                <input className="w-full p-2 border border-slate-200 rounded-xl outline-none focus:border-indigo-500" placeholder="Phone (10 digits)" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                {errors.phone && <p className="text-red-500 mt-1 ml-1">{errors.phone}</p>}
            </div>

            <div>
                <input className="w-full p-2 border border-slate-200 rounded-xl outline-none focus:border-indigo-500" type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                {errors.email && <p className="text-red-500 mt-1 ml-1">{errors.email}</p>}
            </div>

            {/* Custom Styled Dropdown */}
            <Listbox value={formData.ulb_id} onChange={(value) => setFormData({ ...formData, ulb_id: value })}>
              <div className="relative">
                <Listbox.Button className="w-full p-2 border border-slate-200 rounded-xl bg-white text-left font-bold text-slate-700 outline-none focus:border-indigo-500">
                  {formData.ulb_id ? ulbs.find(u => u.id === formData.ulb_id)?.name : <span className="text-slate-400 font-normal">Select ULB</span>}
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg max-h-60 overflow-auto">
                  {ulbs.map((u) => (
                    <Listbox.Option key={u.id} value={u.id} className={({ active }) => `cursor-pointer p-3 font-bold ${active ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700'}`}>
                      {u.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>

            {!isEditing && <input className="p-2 border border-slate-200 rounded-xl col-span-2 outline-none focus:border-indigo-500" type="password" placeholder="Password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} required />}
            <button type="submit" className="col-span-2 bg-emerald-600 text-white py-2 rounded-xl font-bold hover:bg-emerald-700 flex justify-center items-center gap-2 transition-all">
              {loading ? <Loader2 className="animate-spin" size={14} /> : <Save size={14}/>} {isEditing ? 'UPDATE' : 'SAVE'}
            </button>
          </form>
        </div>
      </div>

      <div className="bg-white border border-slate-200 border-t-4 border-t-indigo-500 overflow-hidden rounded-xl">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
            <tr>
              <th className="p-3 text-left">NAME</th><th className="p-3 text-left">EMAIL</th><th className="p-3 text-left">ROLE</th><th className="p-3 text-left">PHONE</th><th className="p-3 text-left">ULB</th><th className="p-3 text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {admins.map(admin => (
              <tr key={admin.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-3 font-bold text-slate-700">{admin.full_name}</td>
                <td className="p-3 text-slate-500">{admin.email}</td>
                <td className="p-3 text-slate-500">{admin.role}</td>
                <td className="p-3 text-slate-500">{admin.phone}</td>
                <td className="p-3 text-slate-500">{admin.ulb_name}</td>
                <td className="p-3 text-right space-x-2">
                  <button onClick={() => { setIsEditing(admin.id); setFormData({name: admin.full_name, phone: admin.phone, ulb_id: admin.ulb_id, email: admin.email, password: ''}); setShowForm(true); }} className="text-indigo-600 hover:text-indigo-800"><Edit2 size={14}/></button>
                  <button onClick={() => deleteAdmin(admin.id)} className="text-red-500 hover:text-red-700"><Trash2 size={14}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}