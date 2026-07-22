import React, { useState } from 'react';
import { Language } from '../types';
import { ANNUAL_REPORTS, TEAM_MEMBERS, FAQS } from '../data/hepiData';
import { 
  FileText, 
  Download, 
  Users, 
  HelpCircle, 
  Award, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  PieChart,
  ShieldCheck,
  Search
} from 'lucide-react';

interface TransparencySectionProps {
  lang: Language;
}

export const TransparencySection: React.FC<TransparencySectionProps> = ({ lang }) => {
  const isId = lang === 'id';

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  // Allocation Budget Breakdown
  const BUDGET_ALLOCATION = [
    { label: isId ? 'Klinik Medis & Obat-obatan' : 'Clinic Care & Medicines', percentage: 55, color: 'bg-[#833556]' },
    { label: isId ? 'Patroli Ranger & Orangutan' : 'Ranger Patrols & Orangutans', percentage: 25, color: 'bg-[#2e5b42]' },
    { label: isId ? 'Persemaian Bibit Pohon' : 'Community Nurseries', percentage: 12, color: 'bg-[#d97706]' },
    { label: isId ? 'Edukasi & Operasional' : 'Education & Governance', percentage: 8, color: 'bg-[#4b5563]' }
  ];

  const handleDownloadReport = (year: string, title: string) => {
    // Generate dummy report download notification
    alert(isId ? `Mengunduh ${title}...` : `Downloading ${title}...`);
  };

  return (
    <section id="transparency" className="py-16 sm:py-24 bg-[#FCFCFB] border-b border-[#EBEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-xs font-semibold mb-3 border border-[#EBEBE8]">
            <ShieldCheck className="w-4 h-4 text-[#2D5A27]" />
            <span>{isId ? 'Tata Kelola & Akuntabilitas' : 'Governance & Accountability'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] font-serif tracking-tight">
            {isId ? 'Transparansi Dampak & Laporan Audit' : 'Impact Transparency & Audited Reports'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#666666]">
            {isId 
              ? 'Kami berkomitmen melaporkan penggunaan setiap rupiah dana donatur dan perkembangan hutan Batang Toru secara terbuka.' 
              : 'We are committed to full disclosure of donor allocations and forest restoration progress.'}
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
                  style={{ width: `${item.percentage}%` }}
                  className={`${idx === 0 ? 'bg-[#2D5A27]' : idx === 1 ? 'bg-[#1A1A1A]' : idx === 2 ? 'bg-[#d97706]' : 'bg-[#666666]'} h-full transition-all`}
                  title={`${item.label}: ${item.percentage}%`}
                />
              ))}
            </div>

            {/* Legend Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {BUDGET_ALLOCATION.map((item, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-[#F1F3F0] flex items-center justify-between border border-[#EBEBE8]">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${idx === 0 ? 'bg-[#2D5A27]' : idx === 1 ? 'bg-[#1A1A1A]' : idx === 2 ? 'bg-[#d97706]' : 'bg-[#666666]'}`} />
                    <span className="font-semibold text-[#1A1A1A]">{item.label}</span>
                  </div>
                  <span className="font-extrabold text-[#2D5A27]">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Downloadable Annual Reports */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-[28px] border border-[#EBEBE8] shadow-2xs space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-[#2D5A27]" />
              <h3 className="text-xl font-normal text-[#1A1A1A] font-serif">
                {isId ? 'Laporan Tahunan & Keuangan' : 'Annual & Financial Reports'}
              </h3>
            </div>

            <div className="space-y-3">
              {ANNUAL_REPORTS.map((rep) => (
                <div
                  key={rep.id}
                  className="p-4 rounded-2xl border border-[#EBEBE8] hover:border-[#2D5A27] transition-all bg-[#FCFCFB] flex items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#2D5A27] text-white text-[10px] font-bold">
                        {rep.year}
                      </span>
                      <h4 className="text-sm font-bold text-[#1A1A1A]">
                        {rep.title[lang]}
                      </h4>
                    </div>
                    <ul className="mt-2 space-y-1 text-xs text-[#666666]">
                      {rep.highlights[lang].map((h, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5A27]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleDownloadReport(rep.year, rep.title[lang])}
                    className="p-3 rounded-full bg-[#2D5A27] hover:bg-[#22461E] text-white font-bold text-xs shrink-0 flex items-center gap-1.5 shadow-2xs"
                  >
                    <Download className="w-4 h-4 text-emerald-200" />
                    <span className="hidden sm:inline">{rep.downloadSize}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Section 2: Leadership & Team Profiles */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-normal text-[#1A1A1A] font-serif">
              {isId ? 'Tim & Dewan Pembina Yayasan' : 'Leadership & Advisory Team'}
            </h3>
            <p className="text-sm text-[#666666] mt-1">
              {isId ? 'Konservasionis dan tenaga medis yang mendedikasikan hidup untuk Batang Toru.' : 'Conservationists and medical leaders dedicated to the Batang Toru ecosystem.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-[28px] p-6 border border-[#EBEBE8] shadow-2xs text-center space-y-4 hover:border-[#2D5A27]/40 transition-all"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto border-4 border-[#F1F3F0] shadow-2xs">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-lg font-normal text-[#1A1A1A] font-serif">
                    {member.name}
                  </h4>
                  <div className="text-xs font-bold text-[#2D5A27] mt-0.5">
                    {member.role[lang]}
                  </div>
                  <p className="text-xs text-[#666666] mt-2 leading-relaxed">
                    {member.bio[lang]}
                  </p>
                </div>

                {member.awards && (
                  <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                    {member.awards.map((award, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-[10px] font-bold border border-[#EBEBE8]">
                        🏆 {award}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Frequently Asked Questions (FAQ) */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-normal text-[#1A1A1A] font-serif">
              {isId ? 'Pertanyaan Sering Diajukan (FAQ)' : 'Frequently Asked Questions'}
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#EBEBE8] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between font-bold text-[#1A1A1A] text-sm sm:text-base hover:text-[#2D5A27]"
                  >
                    <span>{faq.question[lang]}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#2D5A27]" /> : <ChevronDown className="w-5 h-5 text-[#666666]" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#666666] leading-relaxed border-t border-[#F1F3F0] pt-3">
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
