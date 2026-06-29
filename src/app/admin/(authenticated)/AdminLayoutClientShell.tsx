'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';
import { 
  LayoutDashboard, Building2, ChevronRight, Info, Target,
  LogOut, Menu, X, User, Settings, Loader2, ShieldAlert,
  CheckCircle2, UserPlus, ChevronDown, MapPin, KeyRound 
} from 'lucide-react';

interface DynamicUser {
  email: string;
  name: string;
  role: string;
  avatar_url?: string | null;
}

interface ShellProps {
  children: React.ReactNode;
  user: DynamicUser;
}

interface ToastState {
  message: string;
  type: 'loading' | 'success';
}

export default function AdminLayoutClientShell({ children, user }: ShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isWebContentOpen, setIsWebContentOpen] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isSchemeMenuOpen, setIsSchemeMenuOpen] = useState(false);
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const navigationItems = [
    { href: '/admin', name: 'Dashboard Overview', icon: LayoutDashboard },
    // { href: '/admin/settings', name: 'System Settings', icon: Settings },
    ...(user.role === 'Super Admin' 
      ? [
          { href: '/admin/manage-admins', name: 'Manage Admin', icon: UserPlus },
          { href: '/admin/manage-ulbs', name: 'Manage ULBS', icon: Building2 }
        ] 
      : []),
  ] as const;

  const webContentItems = [
    { href: '/admin/manage-aboutus', name: 'About Us Content', icon: Info },
    // { href: '/admin/objectives', name: 'Strategic Objectives', icon: Target },
    // { href: '/admin/projects', name: 'Urban Projects', icon: Building2 },
  ];
  const schemeItems = [
    // { href: '/admin/manage-schemes', name: 'Manage Schemes', icon: Target },
    { href: '/admin/manage-schemes', name: 'Schemes', icon: UserPlus },
    { href: '/admin/scheme-progress', name: 'Scheme Progress', icon: CheckCircle2 },
  ];
  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    const handlePopStateBlocker = () => {
      window.history.pushState(null, '', window.location.href);
      setToast({ message: 'Active secure session lock. Use Log Out to exit.', type: 'loading' });
      setTimeout(() => setToast(null), 2500);
    };
    window.addEventListener('popstate', handlePopStateBlocker);
    return () => window.removeEventListener('popstate', handlePopStateBlocker);
  }, [pathname]);

  const triggerLogoutSequence = async () => {
    setIsLogoutModalOpen(false);
    setIsProfileDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setToast({ message: 'Terminating...', type: 'loading' });
    try {
      await supabase.auth.signOut();
      setTimeout(() => {
        setToast({ message: 'Logging Out...', type: 'success' });
        setTimeout(() => {
          window.location.href = '/admin/login';
          setTimeout(() => window.location.reload(), 50);
        }, 1000);
      }, 1200);
    } catch (err) {
      setToast({ message: 'Logout processing encountered a server exception.', type: 'loading' });
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div id="dashboard_root" className="w-screen h-screen bg-rose-50/40 text-zinc-800 flex overflow-hidden font-sans antialiased relative select-none">
      
      {toast && (
        <div className={`fixed bottom-6 right-6 z-[9999] max-w-sm w-full p-4 rounded-2xl shadow-xl border flex items-center gap-3.5 animate-in fade-in slide-in-from-bottom-6 duration-300 transition-all ${toast.type === 'loading' ? 'bg-amber-50 border-amber-200/70 text-amber-900 shadow-amber-950/5' : 'bg-emerald-50 border-emerald-200/70 text-emerald-900 shadow-emerald-950/5'}`}>
          <div className={`p-2 rounded-xl shrink-0 ${toast.type === 'loading' ? 'bg-amber-500/10 text-amber-600' : 'bg-emerald-500/10 text-emerald-600'}`}>
            {toast.type === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}
          </div>
          <div className="flex flex-col min-w-0">
            <span className={`text-[9px] font-black uppercase tracking-widest leading-none ${toast.type === 'loading' ? 'text-amber-500' : 'text-emerald-600'}`}>
              {toast.type === 'loading' ? 'System Processing' : 'Security Clearance'}
            </span>
            <p className="text-xs font-bold mt-1 text-zinc-800 leading-tight">{toast.message}</p>
          </div>
        </div>
      )}

      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-xs animate-in fade-in duration-200" onClick={() => setIsLogoutModalOpen(false)} />
          <div className="bg-white border border-rose-100 rounded-3xl p-6 max-w-sm w-full relative z-10 shadow-2xl animate-in zoom-in-95 duration-200 space-y-5">
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shrink-0">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-black text-zinc-900 uppercase tracking-tight">Log Out</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">Are you sure you want to logout?</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 justify-end">
              <button onClick={() => setIsLogoutModalOpen(false)} className="px-4 py-2 rounded-xl border border-zinc-200 hover:bg-zinc-50 text-zinc-600 font-bold text-xs cursor-pointer transition-colors">Cancel</button>
              <button onClick={triggerLogoutSequence} className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs cursor-pointer shadow-md shadow-rose-500/10 transition-colors">Sign Out</button>
            </div>
          </div>
        </div>
      )}

      <aside id="sidebar_navigation" className={`fixed inset-y-0 left-0 z-50 w-64 bg-white text-zinc-700 border-r border-rose-100/80 flex flex-col justify-between transition-transform duration-300 ease-in-out shrink-0 lg:relative lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0 shadow-xl shadow-rose-950/5' : '-translate-x-full'}`}>
        <div>
          <div className="h-16 flex items-center justify-between px-5 border-b border-rose-100 bg-rose-50/20">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center p-1.5 rounded-xl bg-rose-50 border border-rose-100 shadow-sm">
                <Image src="/btc-logo.png" alt="SIT Logo" width={26} height={26} priority className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black tracking-tight text-zinc-900 uppercase leading-none">UDD BTC</span>
                <span className="text-[9px] font-bold text-rose-500 tracking-widest uppercase mt-0.5">{user.role}</span>
              </div>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-1.5 rounded-lg bg-zinc-50 hover:bg-rose-50 text-zinc-400 hover:text-rose-600 transition-colors lg:hidden">
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="p-3.5 space-y-1">
            {/* Main Navigation Items */}
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)} // Already exists
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all group duration-150 ${isActive ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20' : 'text-zinc-500 hover:bg-rose-50/60 hover:text-rose-600'}`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-zinc-400 group-hover:text-rose-500'}`} />
                    <span>{item.name}</span>
                  </div>
                  <ChevronRight className={`h-3 w-3 transition-all ${isActive ? 'text-white' : 'text-zinc-400'}`} />
                </Link>
              );
            })}

            {/* Website Content Section */}
            <button onClick={() => setIsWebContentOpen(!isWebContentOpen)} className={`flex w-full items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all group duration-150 text-zinc-500 hover:bg-rose-50/60 hover:text-rose-600 cursor-pointer`}>
              <div className="flex items-center gap-3">
                <Info className="h-4 w-4 shrink-0 text-zinc-400 group-hover:text-rose-500" />
                <span>Website Content</span>
              </div>
              <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isWebContentOpen ? 'rotate-0' : '-rotate-90'}`} />
            </button>

            {isWebContentOpen && (
              <div className="ml-7 pl-2 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-200">
                {webContentItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)} // ADDED THIS
                    className={`block px-3 py-2 text-[11px] font-bold ${pathname === item.href ? 'text-rose-600' : 'text-zinc-400 hover:text-rose-500'}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Manage Schemes Section */}
            {user.role === 'Super Admin' && (
              <>
                <button onClick={() => setIsSchemeMenuOpen(!isSchemeMenuOpen)} className="flex w-full items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all group duration-150 text-zinc-500 hover:bg-rose-50/60 hover:text-rose-600 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Target className="h-4 w-4 shrink-0 text-zinc-400 group-hover:text-rose-500" />
                    <span>Manage Schemes</span>
                  </div>
                  <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isSchemeMenuOpen ? 'rotate-0' : '-rotate-90'}`} />
                </button>
                {isSchemeMenuOpen && (
                  <div className="ml-7 pl-2 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-200">
                    {schemeItems.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href} 
                        onClick={() => setIsMobileMenuOpen(false)} // ADDED THIS
                        className={`block px-3 py-2 text-[11px] font-bold ${pathname === item.href ? 'text-rose-600' : 'text-zinc-400 hover:text-rose-500'}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </nav>
        </div>

        <div className="p-3.5 border-t border-rose-100 bg-rose-50/10">
          <div className="flex items-center gap-3 px-2 py-1.5 mb-2.5">
            <div className="relative shrink-0">
              <div className="h-8 w-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center font-black text-xs text-rose-600 uppercase overflow-hidden">
                {user.avatar_url ? (
                  <img src={user.avatar_url} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  user.email.charAt(0)
                )}
              </div>
              <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] font-bold text-zinc-900 truncate leading-tight">{user.name}</span>
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wide mt-0.5 truncate">{user.email}</span>
            </div>
          </div>
          <button type="button" onClick={() => setIsLogoutModalOpen(true)} className="flex w-full items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold bg-zinc-50 hover:bg-rose-50 border border-zinc-200 hover:border-rose-200 text-zinc-500 hover:text-rose-600 transition-all active:scale-[0.98] cursor-pointer">
            <LogOut className="h-3.5 w-3.5 shrink-0" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {isMobileMenuOpen && <div onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 z-40 bg-zinc-950/20 backdrop-blur-xs lg:hidden" />}

      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <header id="dashboard_top_bar" className="h-16 bg-white border-b border-rose-100 shadow-xs flex items-center justify-between px-4 sm:px-6 relative z-30 shrink-0">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-zinc-900 lg:hidden">
              <Menu className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-rose-500 hidden sm:inline shrink-0" />
              <h2 className="text-sm sm:text-base font-black text-zinc-900 tracking-tight uppercase leading-none">Urban Development Department, BTC</h2>
            </div>
          </div>

          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)} className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-rose-50/60 border border-transparent hover:border-rose-100 transition-all cursor-pointer">
              <div className="flex flex-col text-right hidden sm:flex">
                <span className="text-xs font-bold text-zinc-800 leading-tight">{user.name}</span>
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">{user.role}</span>
              </div>
              <div className="h-10 w-10 rounded-xl  flex items-center justify-center text-rose-500 shadow-xs shrink-0 overflow-hidden">
                {user.avatar_url ? (
                  <img 
                    src={user.avatar_url} 
                    alt="User" 
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      // Fallback: If image fails to load, hide it and show the icon
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <User className="h-4 w-4" />
                )}
              </div>
            </button>

            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-rose-100 rounded-xl shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-100">
                <button onClick={() => { setIsProfileDropdownOpen(false); router.push('/admin/my-profile'); }} className="flex items-center gap-2.5 w-full px-3.5 py-2 text-xs font-bold text-zinc-600 hover:bg-zinc-50 transition-colors cursor-pointer text-left">
                  <User className="h-3.5 w-3.5" /> <span>My Profile</span>
                </button>
                <button onClick={() => { setIsProfileDropdownOpen(false); router.push('/admin/reset-password'); }} className="flex items-center gap-2.5 w-full px-3.5 py-2 text-xs font-bold text-zinc-600 hover:bg-zinc-50 transition-colors cursor-pointer text-left">
                  <KeyRound className="h-3.5 w-3.5" /> <span>Change Password</span>
                </button>
                <div className="my-1 border-t border-zinc-100" />
                <button onClick={() => { setIsProfileDropdownOpen(false); setIsLogoutModalOpen(true); }} className="flex items-center gap-2.5 w-full px-3.5 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50/80 transition-colors cursor-pointer text-left">
                  <LogOut className="h-3.5 w-3.5" /> <span>Log Out</span>
                </button>
              </div>
            )}
          </div>
        </header>

        <main id="main_content_canvas" className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}