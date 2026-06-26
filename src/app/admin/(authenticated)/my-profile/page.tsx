'use client';

import React, { useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Save, X, Pencil, Loader2, User, Mail, Phone, AlertCircle, Camera } from 'lucide-react';

export default function EditProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState({ full_name: '', phone: '', avatar_url: '' });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ phone?: string }>({});
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Clean up memory for preview URLs
  useEffect(() => {
    return () => { if (previewUrl) URL.revokeObjectURL(previewUrl); };
  }, [previewUrl]);

  const validate = () => {
    const newErrors: { phone?: string } = {};
    const phoneRegex = /^[0-9]{10}$/;
    if (!profile.phone || profile.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(profile.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const fetchProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    setEmail(user.email || '');

    const { data } = await supabase
      .from('profiles')
      .select('full_name, phone, avatar_url')
      .eq('id', user.id)
      .single();

    if (data) setProfile({ full_name: data.full_name || '', phone: data.phone || '', avatar_url: data.avatar_url || '' });
  };

  const uploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Set immediate local preview
    setPreviewUrl(URL.createObjectURL(file));

    try {
      setSaving(true);
      const { data: { user } } = await supabase.auth.getUser();
      const fileExt = file.name.split('.').pop();
      const fileName = `${user!.id}/${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('avatar')
        .upload(fileName, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('avatar').getPublicUrl(fileName);
      setProfile(prev => ({ ...prev, avatar_url: data.publicUrl }));
    } catch (err) {
      setToast({ message: "Upload failed", type: 'error' });
      setPreviewUrl(null);
    } finally {
      setSaving(false);
    }
  };

  const handleUpdate = async () => {
    if (!validate()) return;
    setSaving(true);
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase
    .from('profiles')
    .upsert({ 
      id: user.id, // This MUST match the authenticated user's ID
      full_name: profile.full_name, 
      phone: profile.phone,
      avatar_url: profile.avatar_url 
    });
    
    if (error) {
      setToast({ message: "Failed: " + error.message, type: 'error' });
    } else {
      setToast({ message: "Updated successfully!", type: 'success' });
      setIsEditing(false);
      setPreviewUrl(null);
      fetchProfile();
    }
    setSaving(false);
  };

  useEffect(() => { fetchProfile(); }, []);

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-4 bg-slate-50 min-h-screen text-xs">
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

      <div className="flex justify-between items-center bg-slate-900 p-6 rounded-2xl shadow-lg border-l-4 border-yellow-500 gap-4">
        <h1 className="text-sm font-black text-white uppercase tracking-tight">My Profile</h1>
        <button onClick={() => setIsEditing(true)} className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2">
          <Pencil size={14} /> EDIT PROFILE
        </button>
      </div>

      <div className="bg-[#FDFBFF] p-8 rounded-2xl border border-purple-600 border-l-4 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-slate-100 border-2 border-purple-100 flex items-center justify-center overflow-hidden">
             {profile.avatar_url ? <img src={profile.avatar_url} className="w-full h-full object-cover" /> : <User size={40} className="text-slate-400" />}
          </div>
          <div>
            <h2 className="font-black text-slate-800 text-xl">{profile.full_name || 'No Name Set'}</h2>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <div className="bg-white/90 py-1.5 px-3 rounded-md flex items-center gap-2.5 font-bold text-xs sm:text-sm text-slate-700 shadow-[0_1px_2px_rgba(0,0,0,0.01)]"><Mail size={16} className="text-purple-500" /> {email}</div>
          <div className="bg-white/90 py-1.5 px-3 rounded-md flex items-center gap-2.5 font-bold text-xs sm:text-sm text-slate-700 shadow-[0_1px_2px_rgba(0,0,0,0.01)]"><Phone size={16} className="text-purple-500" /> {profile.phone || 'No phone set'}</div>
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border-t-4 border-purple-600">
            <div className="flex justify-between mb-6">
              <h2 className="font-black uppercase text-sm">Edit Information</h2>
              <button onClick={() => setIsEditing(false)}><X size={20}/></button>
            </div>
            
            <div className="flex flex-col items-center mb-6">
              <label className="cursor-pointer relative group flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-full bg-slate-100 border-2 border-purple-200 flex items-center justify-center overflow-hidden relative">
                  {(previewUrl || profile.avatar_url) ? (
                    <img src={previewUrl || profile.avatar_url} className="w-full h-full object-cover" />
                  ) : <User size={40} className="text-slate-400" />}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="text-white" />
                  </div>
                </div>
                <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">Change Image</span>
                <input type="file" className="hidden" onChange={uploadAvatar} accept="image/*" />
              </label>
            </div>
            
            <input className="w-full p-3 border rounded-xl mb-4 font-bold" value={profile.full_name} onChange={e => setProfile({...profile, full_name: e.target.value})} placeholder="Full Name" />
            <input className="w-full p-3 border rounded-xl mb-4 font-bold" value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} placeholder="Phone (10 digits)" />
            
            <button onClick={handleUpdate} disabled={saving} className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold flex justify-center">
              {saving ? <Loader2 className="animate-spin" /> : "SAVE CHANGES"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}