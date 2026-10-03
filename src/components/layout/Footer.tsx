import React from 'react';
import { Phone, Mail, MapPin, GraduationCap, ArrowUpRight, Shield, Award } from 'lucide-react';
import { CONTACT_INFO } from '../../data/tisData';

interface FooterProps {
  onOpenEnquiry: () => void;
  onOpenVirtualTour: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry, onOpenVirtualTour }) => {
  const currentYear = new Date().getFullYear();

  const policies = [
    { name: 'FAQ', href: '#faq' },
    { name: 'Admission Guidelines', href: '#admissions' },
    { name: 'School Calendar 2026', href: '#' },
    { name: 'Curriculum & NEP 2020', href: '#philosophy' },
    { name: 'Child Welfare & Safety Policy', href: '#' },
    { name: 'Disciplinary & Anti-Bullying Policy', href: '#' },
    { name: 'Mobile Phone & Gadget Policy', href: '#' },
    { name: 'Mandatory CBSE Disclosures', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' }
  ];

  const quickLinks = [
    { name: 'About Rishabh Educational Trust', href: '#about' },
    { name: 'The Modern Gurukul Ethos', href: '#philosophy' },
    { name: '16+ Olympic Sports Academy', href: '#sports' },
    { name: 'Hostel & Residential Life', href: '#campus-life' },
    { name: 'Dignitaries & Olympians', href: '#dignitaries' },
    { name: 'Google Reviews & Parent Feedback', href: '#reviews' },
    { name: 'Alumni Network & Global Placements', href: '#collaborations' }
  ];

  return (
    <footer className="bg-[#0b0d13] text-slate-300 border-t border-slate-800 pt-16 pb-24 sm:pb-16 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-tis-crimson/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-tis-teal/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-tis-crimson flex items-center justify-center text-white shadow-lg shadow-tis-crimson/30">
                <GraduationCap className="w-7 h-7 text-tis-gold-light" />
              </div>
              <div>
                <h3 className="font-serif font-black text-2xl text-white tracking-tight leading-none">
                  TULA'S
                </h3>
                <p className="text-xs uppercase tracking-widest text-tis-gold font-bold">
                  International School
                </p>
                <p className="text-[10px] text-slate-400">
                  The Modern Gurukul • Established 2012
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Affiliated to CBSE, New Delhi. Established under the aegis of Rishabh Educational Trust to impart holistic residential education for boys and girls from Class IV to XII in the serene valley of Dehradun.
            </p>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={onOpenVirtualTour}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-tis-gold-light border border-white/10 flex items-center gap-1.5 transition-colors"
              >
                <span>360° Virtual Tour</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={CONTACT_INFO.fedenaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-slate-300 border border-white/10 flex items-center gap-1.5 transition-colors"
              >
                <span>Fedena Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenEnquiry}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-tis-crimson hover:bg-tis-crimson-dark text-white shadow-sm flex items-center gap-1.5 transition-colors"
              >
                <span>Apply Online 2026-27</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links (2.5 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-white text-base font-bold mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-tis-gold" />
              <span>Explore TIS</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Policies & Compliance (2.5 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-white text-base font-bold mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-tis-teal" />
              <span>Policies & Info</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {policies.slice(0, 7).map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Campus Map & Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-white text-base font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-tis-crimson" />
              <span>Campus Location</span>
            </h4>

            {/* Embedded Google Map Preview Card */}
            <div className="rounded-xl overflow-hidden border border-slate-800 shadow-md mb-4 bg-slate-900 aspect-video relative group">
              <iframe
                title="Tula's International School Campus Map"
                src="https://maps.google.com/maps?q=Tula's%20International%20School%20Dehradun&t=m&z=13&output=embed&iwloc=near"
                className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                aria-label="Campus Location Map"
              />
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-tis-gold shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-tis-teal shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone} / {CONTACT_INFO.altPhone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-tis-crimson-light shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {currentYear} Tula's International School, Dehradun. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <span>•</span>
            <a href="#admissions" className="hover:text-white transition-colors">Admissions</a>
            <span>•</span>
            <a href="#sports" className="hover:text-white transition-colors">Sports</a>
            <span>•</span>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
