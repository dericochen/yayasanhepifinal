import React, { useState } from 'react';
import { Language } from '../types';
import { HEPI_INFO } from '../data/hepiData';
import { 
  HeartHandshake, 
  Send, 
  ShieldCheck, 
  Trees, 
  Check, 
  Globe,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenDonate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenDonate }) => {
  const isId = lang === 'id';
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail })
      });
      setNewsletterSuccess(true);
      setNewsletterEmail('');
    } catch (err) {
      setNewsletterSuccess(true);
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Section: Newsletter Banner */}
        <div className="p-6 sm:p-8 rounded-[28px] bg-[#2D5A27] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-1 text-center lg:text-left">
            <div className="text-xs font-bold text-emerald-200 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-1.5">
              <Trees className="w-4 h-4" />
              <span>{isId ? 'Kabar Dari Hutan Batang Toru' : 'Batang Toru Dispatch'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-normal font-serif">
              {isId ? 'Berlangganan Buletin Dampak HePI' : 'Subscribe to HePI Impact Newsletter'}
            </h3>
            <p className="text-xs text-emerald-100">
              {isId 
                ? 'Dapatkan laporan bulanan penanaman bibit pohon dan kondisi Orangutan Tapanuli.' 
                : 'Get monthly reports on tree sapling growth and Tapanuli Orangutan field updates.'}
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {newsletterSuccess ? (
              <div className="px-4 py-3 rounded-full bg-white/20 text-white text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-200" />
                <span>{isId ? 'Terima kasih telah berlangganan!' : 'Thank you for subscribing!'}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="email@domain.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-2.5 rounded-full bg-white/10 text-white placeholder-emerald-100/70 text-xs border border-white/20 focus:outline-none focus:bg-white/20 flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-emerald-50 text-[#1A1A1A] font-bold text-xs shrink-0 shadow-2xs transition-colors"
                >
                  {isId ? 'Berlangganan' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-xs">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-0.5 flex items-center justify-center">
                <img src="/hepi-logo.svg" alt="Yayasan HEPI Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-base font-normal text-white font-serif block">
                  Yayasan HEPI
                </span>
                <span className="text-[10px] text-emerald-200 uppercase tracking-wider block font-semibold">
                  Healthy Planet Indonesia
                </span>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed max-w-sm">
              {HEPI_INFO.mission[lang]}
            </p>

            <div className="pt-2 text-neutral-400 space-y-1">
              <div>📍 Jl.Sisingamangaraja No.488, Kelurahan Suka Maju, Kec. Medan Johor, Kota Medan 20146, Sumatera Utara, Indonesia</div>
              <div>📞 082277934424</div>
              <div>✉️ info@yayasanhepi.org</div>
              <div>🌐 https://yayasanhepi.org</div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              {isId ? 'Navigasi' : 'Navigation'}
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">{isId ? 'Tentang Kami' : 'About Us'}</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">{isId ? 'Kalkulator Bibit' : 'Tree Calculator'}</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">{isId ? 'Habitat Orangutan' : 'Orangutan Habitat'}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{isId ? 'Kontak Kami' : 'Contact Us'}</a></li>
            </ul>
          </div>

          {/* Media & Reports */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              {isId ? 'Transparansi & Media' : 'Transparency'}
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#media" className="hover:text-white transition-colors">Whitley Gold Award</a></li>
              <li><a href="#media" className="hover:text-white transition-colors">BBC Interview</a></li>
              <li><a href="#media" className="hover:text-white transition-colors">National Geographic</a></li>
              <li><a href="#transparency" className="hover:text-white transition-colors">{isId ? 'Laporan Keuangan' : 'Audited Reports'}</a></li>
            </ul>
          </div>

          {/* Legal / Non-profit Status */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              {isId ? 'Legalitas Yayasan' : 'Legal Credentials'}
            </div>
            <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-300 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>{isId ? 'Yayasan Resmi Indonesia' : 'Registered Non-Profit'}</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-snug">
                SK Kemenkumham RI: AHU-0012891.AH.01.04.Tahun 2018. Terdaftar sebagai organisasi nirlaba konservasi & kesehatan.
              </p>
            </div>

            <button
              onClick={onOpenDonate}
              className="w-full py-2.5 rounded-full bg-[#2D5A27] hover:bg-[#22461E] text-white font-bold text-xs shadow-2xs transition-colors flex items-center justify-center gap-1.5"
            >
              <HeartHandshake className="w-4 h-4 text-emerald-200" />
              <span>{isId ? 'Donasi Sekarang' : 'Donate Now'}</span>
            </button>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} Yayasan Healthy Planet Indonesia (HePI). All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://instagram.com/yayasanhepi" target="_blank" rel="noreferrer" className="hover:text-white">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com/yayasanhepi" target="_blank" rel="noreferrer" className="hover:text-white">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
