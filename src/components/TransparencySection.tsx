import React, { useState } from 'react';
import { Language } from '../types';
import { ANNUAL_REPORTS, FAQS } from '../data/hepiData';
import { 
  FileText, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  PieChart,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Sparkles
} from 'lucide-react';

interface TransparencySectionProps {
  lang: Language;
}

export const TransparencySection: React.FC<TransparencySectionProps> = ({ lang }) => {
  const isId = lang === 'id';

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<string | null>('faq-hepi-concept');

  // Allocation Budget Breakdown
  const BUDGET_ALLOCATION = [
    { label: isId ? 'Klinik Medis & Obat-obatan' : 'Clinic Care & Medicines', percentage: 52, color: '#2D5A27' },
    { label: isId ? 'Patroli Ranger & Orangutan' : 'Ranger Patrols & Orangutans', percentage: 24, color: '#1A1A1A' },
    { label: isId ? 'Persemaian & Donasi Ternak' : 'Nurseries & Livestock Packs', percentage: 16, color: '#d97706' },
    { label: isId ? 'Edukasi & Operasional' : 'Education & Governance', percentage: 8, color: '#666666' }
  ];

  const handleDownloadReport = (year: string, title: string) => {
    alert(isId ? `Mengunduh ${title}... Dokumen PDF resmi siap dibuka.` : `Downloading ${title}... Official PDF report ready.`);
  };

  return (
    <section id="transparency" className="py-16 sm:py-24 bg-[#F1F3F0] border-b border-[#EBEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#2D5A27] text-xs font-semibold mb-3 border border-[#EBEBE8]">
            <ShieldCheck className="w-4 h-4 text-[#2D5A27]" />
            <span>{isId ? 'Tata Kelola & Akuntabilitas Terbuka' : 'Governance & Public Accountability'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] font-serif tracking-tight">
            {isId ? 'Transparansi Dampak & Laporan Audit' : 'Audited Reports & Fund Transparency'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#666666] leading-relaxed">
            {isId 
              ? 'Kami berkomitmen melaporkan alokasi setiap rupiah dana donatur dan perkembangan pemulihan hutan Batang Toru secara terbuka dan teraudit.' 
              : 'We are committed to full disclosure of every donation rupiah and certified restoration progress across Batang Toru.'}
          </p>
        </div>

        {/* Grid 1: Budget Allocation Visualizer & Downloadable Reports */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Allocation Visualizer */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-[28px] border border-[#EBEBE8] shadow-2xs space-y-6">
            <div className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-[#2D5A27]" />
              <h3 className="text-xl font-normal text-[#1A1A1A] font-serif">
                {isId ? 'Alokasi Penggunaan Dana Donasi' : 'Donation Fund Allocation'}
              </h3>
            </div>

            {/* Stacked Progress Bar */}
            <div className="h-6 w-full rounded-full overflow-hidden flex bg-[#F1F3F0]">
              {BUDGET_ALLOCATION.map((item, idx) => (
                <div
                  key={idx}
                  style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  className="h-full transition-all"
                  title={`${item.label}: ${item.percentage}%`}
                />
              ))}
            </div>

            {/* Legend Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {BUDGET_ALLOCATION.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#F1F3F0] flex items-center justify-between border border-[#EBEBE8]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="font-semibold text-[#1A1A1A]">{item.label}</span>
                  </div>
                  <span className="font-extrabold text-[#2D5A27]">{item.percentage}%</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#FCFCFB] border border-[#EBEBE8] text-xs text-[#666666]">
              <span className="font-bold text-[#1A1A1A] block mb-1">
                {isId ? '🛡️ Opini Audit: Wajar Tanpa Pengecualian (WTP)' : '🛡️ Audit Opinion: Clean Unqualified Opinion'}
              </span>
              {isId 
                ? 'Laporan keuangan Yayasan HEPI diaudit setiap tahun oleh Kantor Akuntan Publik (KAP) independen berlisensi.' 
                : 'HePI Foundation financial statements are audited annually by licensed independent certified public accountants.'}
            </div>
          </div>

          {/* Right: Downloadable Annual Reports */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-[28px] border border-[#EBEBE8] shadow-2xs space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-[#2D5A27]" />
              <h3 className="text-xl font-normal text-[#1A1A1A] font-serif">
                {isId ? 'Laporan Tahunan & Publikasi Riset' : 'Annual & Research Publications'}
              </h3>
            </div>

            <div className="space-y-3">
              {ANNUAL_REPORTS.map((rep) => (
                <div
                  key={rep.id}
                  className="p-4 rounded-2xl border border-[#EBEBE8] hover:border-[#2D5A27] transition-all bg-[#FCFCFB] flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#2D5A27] text-white text-[10px] font-bold">
                        {rep.year}
                      </span>
                      <h4 className="text-sm font-bold text-[#1A1A1A]">
                        {rep.title[lang]}
                      </h4>
                    </div>
                    <ul className="mt-2 space-y-1 text-xs text-[#666666]">
                      {rep.highlights[lang].slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A27] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleDownloadReport(rep.year, rep.title[lang])}
                    className="p-3 rounded-full bg-[#2D5A27] hover:bg-[#22461E] text-white font-bold text-xs shrink-0 flex items-center gap-1.5 shadow-2xs transition-colors"
                    title={isId ? 'Unduh Laporan PDF' : 'Download PDF Report'}
                  >
                    <Download className="w-4 h-4 text-emerald-200" />
                    <span className="hidden sm:inline">{rep.downloadSize}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Section 2: FAQ Accordion (Item 27 - FAQ before Contact section) */}
        <div id="faq" className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#2D5A27] text-xs font-bold uppercase tracking-wider border border-[#EBEBE8]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{isId ? 'Tanya Jawab HePI' : 'Frequently Asked Questions'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] font-serif">
              {isId ? 'Pertanyaan yang Sering Diajukan (FAQ)' : 'Frequently Asked Questions'}
            </h3>
            <p className="text-sm text-[#666666]">
              {isId 
                ? 'Semua yang perlu Anda ketahui mengenai sistem barter bibit pohon, donasi ternak, transfer bank, dan perlindungan Orangutan Tapanuli.' 
                : 'Everything you need to know about sapling barter, livestock donations, bank transfers, and Tapanuli Orangutan protection.'}
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#EBEBE8] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between font-bold text-[#1A1A1A] text-sm sm:text-base hover:text-[#2D5A27] transition-colors"
                  >
                    <span>{faq.question[lang]}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#2D5A27] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#666666] shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#F1F3F0] pt-3">
                      {faq.answer[lang]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
