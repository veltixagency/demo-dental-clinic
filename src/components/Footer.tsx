import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, ShieldCheck, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  openBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, openBookingModal }) => {
  const navigateTo = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4 lg:col-span-1 pr-2">
            <div
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-emerald-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
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
                <span className="text-xl font-extrabold text-white tracking-tight">Demo Clinic</span>
                <span className="text-[11px] text-emerald-400 font-semibold tracking-wide">Dental Excellence & Care</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
              Providing gentle, advanced, and comprehensive dental healthcare for your whole family. Combining trust, precision, and modern technology.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600 transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white tracking-wider uppercase mb-4 text-emerald-400">Navigation</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  About the Clinic
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Treatments & Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('team')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Specialist Doctors
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('gallery')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Clinic & Smiles Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-xs font-bold text-white tracking-wider uppercase mb-4 text-emerald-400">Dental Specialties</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  General Checkup & Polishing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Cosmetic Smile Designing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Laser Teeth Whitening
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Orthodontics & Clear Aligners
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Microscopic Root Canal Therapy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('services')}
                  className="hover:text-blue-400 transition-colors text-left cursor-pointer"
                >
                  Guided Titanium Dental Implants
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3 text-xs text-slate-300">
            <h3 className="text-xs font-bold text-white tracking-wider uppercase mb-4 text-emerald-400">Clinic Hours & Info</h3>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>123 Wellness Street, Green Park, New Delhi - 110016</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <span>info@democlinic.com</span>
            </div>
            <div className="flex items-start gap-2.5 pt-1">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                <p className="text-slate-400">Sunday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={openBookingModal}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer text-center"
              >
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Demo Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => alert('Demo Clinic Privacy Policy: Your medical and personal records are strictly confidential and protected by healthcare confidentiality regulations.')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => alert('Demo Clinic Terms & Conditions: Appointments can be rescheduled or cancelled up to 2 hours prior to scheduled slot.')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => navigateTo('admin')}
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 font-semibold"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Staff Login
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
