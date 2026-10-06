import React, { useState } from 'react';
import { Menu, X, Shield, Calendar, LogOut, ChevronDown, PhoneCall, FileText, Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  openBookingModal: () => void;
  openAuthModal: (mode?: 'login' | 'register') => void;
  openBookCallModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  openBookingModal,
  openAuthModal,
  openBookCallModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { user, isAdmin, logout } = useAuth();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'team', label: 'Our Team' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Trust Blue and Sage Green identity */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-emerald-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C8 2 5 4.5 5 8c0 3.5 1.5 7 2.5 10 .8 2.3 2.5 4 4.5 4s3.7-1.7 4.5-4c1-3 2.5-6.5 2.5-10 0-3.5-3-6-7-6z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Demo Clinic
                </span>
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full hidden sm:inline-block">
                  Dental Care
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium hidden sm:inline-block">
                Healthy Smiles, Brighter Futures
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center p-1.5 bg-slate-100/90 rounded-full border border-slate-200/80">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-blue-700 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Zone */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Book a Call pill button */}
            <button
              onClick={openBookCallModal}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full transition-all cursor-pointer flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>Book a Call</span>
            </button>

            {/* Admin Badge link if admin */}
            {isAdmin && (
              <button
                onClick={() => handleNavClick('admin')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full border transition-colors cursor-pointer ${
                  currentTab === 'admin'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
                }`}
                title="Admin Console"
              >
                <Shield className="w-3.5 h-3.5 text-current" />
                Admin Panel
              </button>
            )}

            {/* User status / profile */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 rounded-full border border-slate-300 transition-colors cursor-pointer shadow-xs"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-700 to-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
                    {user.full_name?.charAt(0) || 'U'}
                  </div>
                  <span className="max-w-[100px] truncate">{user.full_name || 'My Account'}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 text-xs">
                    <div className="px-4 py-2.5 border-b border-slate-100">
                      <p className="font-bold text-slate-900 truncate">{user.full_name}</p>
                      <p className="text-emerald-700 font-mono text-[11px] font-semibold">{user.phone || user.email}</p>
                      <span className="inline-block mt-1 uppercase text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {user.role}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setUserDropdownOpen(false);
                        handleNavClick('user-dashboard');
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-slate-50 flex items-center gap-2 text-slate-800 font-semibold cursor-pointer"
                    >
                      <FileText className="w-4 h-4 text-emerald-600" />
                      <span>My Reports & Scans</span>
                    </button>

                    <button
                      onClick={() => {
                        setUserDropdownOpen(false);
                        handleNavClick('user-dashboard');
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-slate-50 flex items-center gap-2 text-slate-700 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>My Appointments</span>
                    </button>

                    {isAdmin && (
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          handleNavClick('admin');
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-blue-50 flex items-center gap-2 text-blue-700 font-semibold cursor-pointer"
                      >
                        <Shield className="w-4 h-4 text-blue-600" />
                        Admin Console
                      </button>
                    )}

                    <div className="border-t border-slate-100 my-1" />

                    <button
                      onClick={() => {
                        setUserDropdownOpen(false);
                        logout();
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-red-50 flex items-center gap-2 text-red-600 font-semibold cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => openAuthModal('login')}
                className="text-xs font-bold text-slate-700 hover:text-blue-700 px-3 py-1.5 cursor-pointer transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Patient Login</span>
              </button>
            )}

            {/* Primary Action Button - Trust Blue with Sage Green Touch */}
            <button
              onClick={openBookingModal}
              className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 rounded-full shadow-md shadow-blue-500/20 transition-all whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={openBookCallModal}
              className="p-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200"
              aria-label="Call Doctor"
            >
              <PhoneCall className="w-4 h-4" />
            </button>
            <button
              onClick={openBookingModal}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-blue-600 rounded-full shadow-xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-semibold ${
                  currentTab === link.id
                    ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-2">
            {user ? (
              <>
                <div className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                  <p className="font-bold text-slate-900">{user.full_name}</p>
                  <p className="text-emerald-700 font-mono text-[11px] font-semibold">{user.phone || user.email}</p>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick('user-dashboard');
                  }}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm text-emerald-800 font-bold bg-emerald-50 border border-emerald-200 flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>My Diagnostic Reports & Scans</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick('user-dashboard');
                  }}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2 font-medium"
                >
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>My Appointments</span>
                </button>
                {isAdmin && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleNavClick('admin');
                    }}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm text-blue-700 bg-blue-50 border border-blue-200 flex items-center gap-2 font-bold"
                  >
                    <Shield className="w-4 h-4 text-blue-600" />
                    Admin Panel
                  </button>
                )}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logout();
                  }}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 font-semibold"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal('login');
                }}
                className="w-full py-2.5 text-center text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Patient Sign In (Mobile No.)</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookCallModal();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>Book a Free Call</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingModal();
              }}
              className="w-full py-3 text-center text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md cursor-pointer"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
