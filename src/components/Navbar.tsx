import React, { useState } from 'react';
import { Language } from '../types';
import { HEPI_INFO } from '../data/hepiData';
import { 
  HeartHandshake, 
  Globe, 
  Menu, 
  X, 
  Search, 
  Trees, 
  Activity, 
  ChevronRight,
  ShieldCheck,
  FileText
} from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenDonate: () => void;
  onOpenSearch: () => void;
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  onOpenDonate,
  onOpenSearch,
  onOpenAdmin
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    about: lang === 'id' ? 'Tentang Kami' : 'About Us',
    programs: lang === 'id' ? 'Program Utama' : 'Programs',
    ecosystem: lang === 'id' ? 'Ekosistem Batang Toru' : 'Batang Toru Forest',
    calculator: lang === 'id' ? 'Kalkulator Bibit' : 'Tree Calculator',
    media: lang === 'id' ? 'Media & Penghargaan' : 'Media & Awards',
    transparency: lang === 'id' ? 'Laporan Transparansi' : 'Reports & Governance',
    contact: lang === 'id' ? 'Kontak' : 'Contact',
    donateBtn: lang === 'id' ? 'Donasi & Dukung' : 'Donate Now'
  };

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.programs, href: '#programs' },
    { name: t.calculator, href: '#calculator' },
    { name: t.ecosystem, href: '#ecosystem' },
    { name: t.media, href: '#media' },
    { name: t.transparency, href: '#transparency' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FCFCFB]/95 backdrop-blur-md border-b border-[#EBEBE8] shadow-2xs transition-all duration-200">
      {/* Top Banner Notice */}
      <div className="bg-[#2D5A27] text-white text-xs py-1.5 px-4 font-medium flex justify-between items-center">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-200" />
            <span>
              {lang === 'id' 
                ? 'Yayasan Resmi Pelindung Orangutan Tapanuli & Ekosistem Batang Toru' 
                : 'Official Foundation Guarding Tapanuli Orangutans & Batang Toru Rainforest'}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1">
              <Trees className="w-3.5 h-3.5 text-emerald-200" /> 141.749 ha Hutan Batang Toru
            </span>
            <span className="text-white/40">|</span>
            <span className="flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-emerald-200" /> ~800 Orangutan Tapanuli
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Official Yayasan HEPI identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-white border border-[#EBEBE8] p-0.5 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform duration-200">
            <img src="/hepi-logo.svg" alt="Yayasan HEPI Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-semibold tracking-tight text-[#2D5A27] leading-tight font-serif group-hover:text-[#1F3E1B] transition-colors">
              Yayasan HEPI
            </span>
            <span className="text-[10px] font-bold tracking-wider text-[#666666] uppercase">
              Healthy Planet Indonesia
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[14px] font-medium text-[#666666]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 rounded-lg hover:text-[#2D5A27] hover:bg-[#F1F3F0] transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-full text-[#666666] hover:text-[#2D5A27] hover:bg-[#F1F3F0] border border-[#EBEBE8] transition-all"
            title={lang === 'id' ? 'Cari informasi...' : 'Search site...'}
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Language Toggle */}
          <div className="flex items-center bg-[#F1F3F0] p-1 rounded-full border border-[#EBEBE8]">
            <button
              onClick={() => setLang('id')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                lang === 'id' 
                  ? 'bg-[#2D5A27] text-white shadow-2xs' 
                  : 'text-[#666666] hover:text-[#1A1A1A]'
              }`}
            >
              ID 🇮🇩
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                lang === 'en' 
                  ? 'bg-[#2D5A27] text-white shadow-2xs' 
                  : 'text-[#666666] hover:text-[#1A1A1A]'
              }`}
            >
              EN 🇬🇧
            </button>
          </div>

          {/* Donate CTA Button */}
          <button
            onClick={onOpenDonate}
            className="px-6 py-2.5 rounded-full bg-[#2D5A27] hover:bg-[#22461E] text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-2xs hover:shadow-xs"
          >
            <HeartHandshake className="w-4 h-4 text-emerald-200" />
            <span>{t.donateBtn}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 sm:hidden">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-full text-[#666666] border border-[#EBEBE8]"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[#1A1A1A] hover:bg-[#F1F3F0] border border-[#EBEBE8]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFCFB] border-b border-[#EBEBE8] px-4 pt-2 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-[#EBEBE8]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#666666]">
              Pilih Bahasa / Language
            </span>
            <div className="flex items-center bg-[#F1F3F0] p-1 rounded-full">
              <button
                onClick={() => setLang('id')}
                className={`px-3 py-1 text-xs font-bold rounded-full ${lang === 'id' ? 'bg-[#2D5A27] text-white' : 'text-[#666666]'}`}
              >
                ID 🇮🇩
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-xs font-bold rounded-full ${lang === 'en' ? 'bg-[#2D5A27] text-white' : 'text-[#666666]'}`}
              >
                EN 🇬🇧
              </button>
            </div>
          </div>

          <div className="space-y-1 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#1A1A1A] hover:bg-[#F1F3F0] hover:text-[#2D5A27]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full py-3 rounded-full bg-[#2D5A27] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-xs"
            >
              <HeartHandshake className="w-5 h-5 text-emerald-200" />
              <span>{t.donateBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
