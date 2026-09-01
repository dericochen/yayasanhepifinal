import React, { useState } from 'react';
import { Language } from '../types';
import { HEPI_INFO, PARTNERS } from '../data/hepiData';
import { PartnerLogoBadge } from './PartnerLogoItem';
import { 
  HeartHandshake, 
  Send, 
  ShieldCheck, 
  Trees, 
  Check, 
  Instagram,
  Facebook,
  Mail,
  Building2,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenDonate: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenDonate, onOpenAdmin }) => {
  const isId = lang === 'id';
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterFreq, setNewsletterFreq] = useState<'quarterly' | 'monthly'>('quarterly');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail, frequency: newsletterFreq })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setNewsletterSuccess(true);
        setNewsletterEmail('');
      } else {
        alert(data.error || (isId ? 'Gagal berlangganan' : 'Failed to subscribe'));
      }
    } catch (err) {
      alert(isId ? 'Gagal terhubung ke server.' : 'Network error.');
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Official Strategic Partners (including BINUS University, WFN, HIH, PRCF, Pemkab Tapsel, BKSDA, PBNF, OIC) */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
              {isId ? 'Mitra & Kolaborator' : 'Partners & Collaborators'}
            </div>
            <h3 className="text-xl sm:text-2xl font-normal font-serif text-white">
              {isId ? 'Mitra Yayasan Healthy Planet Indonesia' : 'Partners of HePI Foundation'}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-3.5">
            {PARTNERS.map((partner) => (
              <a
                key={partner.id}
                href={partner.websiteUrl || '#'}
                target={partner.websiteUrl ? '_blank' : '_self'}
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-white border border-[#EBEBE8] hover:border-emerald-500 hover:shadow-lg transition-all duration-200 flex flex-col items-center justify-between text-center group min-h-[120px]"
                title={partner.name}
              >
                <div className="w-full h-14 flex items-center justify-center mb-1 px-1 transition-transform duration-300 group-hover:scale-105">
                  <PartnerLogoBadge partnerId={partner.id} name={partner.name} className="w-full max-h-12 object-contain" />
                </div>
                <div className="text-[10px] font-bold text-[#444444] group-hover:text-[#1A1A1A] transition-colors line-clamp-1 mt-1">
                  {partner.name}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Section 2: Newsletter Banner (Quarterly / 3 Months Update option) */}
        <div className="p-6 sm:p-8 rounded-[28px] bg-[#2D5A27] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-1 text-center lg:text-left">
            <div className="text-xs font-bold text-emerald-200 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-1.5">
              <Trees className="w-4 h-4" />
              <span>{isId ? 'Buletin Triwulanan Batang Toru' : 'Batang Toru Quarterly Dispatch'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-normal font-serif">
              {isId ? 'Berlangganan Buletin Dampak HePI' : 'Subscribe to HePI Impact Newsletter'}
            </h3>
            <p className="text-xs text-emerald-100">
              {isId 
                ? 'Laporan berkala per 3 bulan mengenai kemajuan bibit pohon, paket ternak, dan Orangutan Tapanuli.' 
                : 'Quarterly reports every 3 months on tree saplings, livestock packs, and Tapanuli Orangutans.'}
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {newsletterSuccess ? (
              <div className="px-4 py-3 rounded-full bg-white/20 text-white text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-200" />
                <span>{isId ? 'Terima kasih telah berlangganan buletin per 3 bulan!' : 'Thank you for subscribing to our quarterly bulletin!'}</span>
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
                  {isId ? 'Langganan (Per 3 Bulan)' : 'Subscribe (Quarterly)'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Section 3: Main Footer Links & Old Web Identity Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-xs">
          
          {/* Brand & Old Web Explanation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white p-1 flex items-center justify-center">
                <img src="/hepi-logo.svg" alt="Yayasan HEPI Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-base font-normal text-white font-serif block">
                  Yayasan HEPI
                </span>
                <span className="text-[10px] text-emerald-300 uppercase tracking-wider block font-semibold">
                  Healthy Planet Indonesia
                </span>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed max-w-sm">
              {HEPI_INFO.mission[lang]}
            </p>

            <div className="pt-2 text-neutral-400 space-y-1">
              <div>📍 {HEPI_INFO.contact.address}</div>
              <div>✉️ {HEPI_INFO.contact.email}</div>
              <div>🌐 yayasanhepi.org</div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              {isId ? 'Navigasi Program' : 'Navigation'}
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">{isId ? 'Tentang Kami & Visi Misi' : 'About Us & Vision'}</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">{isId ? '9 Program Utama' : '9 Core Programs'}</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">{isId ? 'Kalkulator Pohon & Ternak' : 'Tree & Livestock Calculator'}</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">{isId ? 'Peta Desa Mitra' : 'Partner Villages Map'}</a></li>
              <li><a href="#media" className="hover:text-white transition-colors">{isId ? 'Berita & Liputan' : 'News & Media'}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Transparency & Legal */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              {isId ? 'Transparansi & Rekening' : 'Transparency & Bank'}
            </div>
            <div className="space-y-2 text-neutral-400">
              <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-[11px] space-y-1">
                <span className="font-bold text-emerald-400 block">Bank Mandiri (Official):</span>
                <span className="text-white font-mono font-bold">106-00-1289100-1</span>
                <span className="text-neutral-400 block text-[10px]">a.n. Yayasan Healthy Planet Indonesia</span>
              </div>
              <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-[11px] space-y-1">
                <span className="font-bold text-emerald-400 block">BCA (Official):</span>
                <span className="text-white font-mono font-bold">822-099-1188</span>
                <span className="text-neutral-400 block text-[10px]">a.n. Yayasan Healthy Planet Indonesia</span>
              </div>
            </div>
          </div>

          {/* Legal Non-profit Status */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              {isId ? 'Legalitas Yayasan' : 'Legal Credentials'}
            </div>
            <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-300 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>{isId ? 'SK Kemenkumham RI' : 'Registered Non-Profit'}</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-snug">
                AHU-0012891.AH.01.04.Tahun 2018. Terdaftar resmi sebagai organisasi nirlaba konservasi & kesehatan di Sumatera Utara.
              </p>
            </div>

            <button
              onClick={onOpenDonate}
              className="w-full py-2.5 rounded-full bg-[#2D5A27] hover:bg-[#22461E] text-white font-bold text-xs shadow-2xs transition-colors flex items-center justify-center gap-1.5"
            >
              <HeartHandshake className="w-4 h-4 text-emerald-200" />
              <span>{isId ? 'Donasi Bank Sekarang' : 'Bank Donation'}</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar (Instagram, Facebook, Email icon links - NO WhatsApp as requested) */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} Yayasan Healthy Planet Indonesia (HePI). All rights reserved.</span>
            {onOpenAdmin && (
              <>
                <span>•</span>
                <button
                  onClick={onOpenAdmin}
                  className="text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1 font-semibold"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{isId ? 'Dasbor Admin & Laporan Transaksi' : 'Admin & Transaction Reports'}</span>
                </button>
              </>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <a 
              href={HEPI_INFO.contact.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href={HEPI_INFO.contact.facebook} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href={`mailto:${HEPI_INFO.contact.email}`} 
              className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
