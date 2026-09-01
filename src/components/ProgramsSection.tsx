import React, { useState } from 'react';
import { Language, ProgramItem } from '../types';
import { PROGRAMS } from '../data/hepiData';
import { 
  HeartPulse, 
  Trees, 
  Sprout, 
  GraduationCap, 
  CheckCircle, 
  ArrowRight, 
  X,
  Sparkles,
  ShieldCheck,
  Egg,
  Compass
} from 'lucide-react';

interface ProgramsSectionProps {
  lang: Language;
  onOpenDonate: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ lang, onOpenDonate }) => {
  const isId = lang === 'id';
  const [activeCategory, setActiveCategory] = useState<'all' | 'health' | 'conservation' | 'livelihoods' | 'livestock' | 'education' | 'research'>('all');
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const filteredPrograms = activeCategory === 'all' 
    ? PROGRAMS 
    : PROGRAMS.filter((p) => p.category === activeCategory);

  const categories = [
    { id: 'all', label: isId ? 'Semua (9 Program)' : 'All (9 Programs)' },
    { id: 'health', label: isId ? 'Kesehatan & Klinik' : 'Healthcare & Clinic' },
    { id: 'conservation', label: isId ? 'Konservasi & Ranger' : 'Conservation & Rangers' },
    { id: 'livelihoods', label: isId ? 'Persemaian Bibit' : 'Tree Nurseries' },
    { id: 'livestock', label: isId ? 'Ternak Ramah Hutan' : 'Eco-Livestock' },
    { id: 'education', label: isId ? 'Edukasi Sekolah' : 'Education' },
    { id: 'research', label: isId ? 'Riset Ekologi' : 'Research' }
  ];

  return (
    <section id="programs" className="py-16 sm:py-24 bg-[#F1F3F0] border-b border-[#EBEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#2D5A27] text-xs font-semibold mb-3 border border-[#EBEBE8]">
            <HeartPulse className="w-4 h-4 text-[#2D5A27]" />
            <span>{isId ? 'Integrasi Konservasi & Kesejahteraan' : 'Holistic Conservation & Well-Being'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] font-serif tracking-tight">
            {isId ? '9 Program Utama Yayasan HEPI' : '9 Core Programs of HePI'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#666666] leading-relaxed">
            {isId 
              ? 'Mengintegrasikan pelayanan kesehatan non-tunai, pembibitan pohon hutan asli, peternakan produktif mandiri, dan perlindungan habitat Orangutan Tapanuli.' 
              : 'Integrating non-cash healthcare, native rainforest tree propagation, self-reliant livestock empowerment, and Tapanuli Orangutan habitat protection.'}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#2D5A27] text-white shadow-2xs'
                    : 'bg-white text-[#666666] border border-[#EBEBE8] hover:bg-[#EBEBE8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3x3 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-[28px] overflow-hidden border border-[#EBEBE8] shadow-2xs hover:border-[#2D5A27]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Program Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#2D5A27] text-[10px] font-bold uppercase tracking-wider shadow-2xs">
                    {program.category}
                  </span>

                  {/* Impact Stat Badge */}
                  <div className="absolute bottom-3 right-3 bg-[#2D5A27] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                    <span>{program.impactStat}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-normal text-[#1A1A1A] font-serif group-hover:text-[#2D5A27] transition-colors line-clamp-2">
                    {program.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-3">
                    {program.summary[lang]}
                  </p>

                  {/* Key Activities bullet preview */}
                  <div className="space-y-1.5 pt-2 border-t border-[#F1F3F0]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D5A27] block">
                      {isId ? 'Kegiatan Lapangan:' : 'Key Field Activities:'}
                    </span>
                    <ul className="space-y-1 text-xs text-[#333333]">
                      {program.keyActivities[lang].slice(0, 2).map((act, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-[#2D5A27] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#EBEBE8] mt-3">
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="text-xs font-bold text-[#2D5A27] hover:underline flex items-center gap-1 group/btn"
                >
                  <span>{isId ? 'Detail Program' : 'View Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenDonate}
                  className="px-3.5 py-1.5 rounded-full bg-[#2D5A27] hover:bg-[#22461E] text-white font-semibold text-xs transition-colors"
                >
                  {isId ? 'Dukung' : 'Support'}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-[28px] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#F1F3F0] hover:bg-[#EBEBE8] text-[#1A1A1A] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 rounded-2xl overflow-hidden">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title[lang]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-0.5 rounded-full bg-[#2D5A27] text-white text-[10px] font-bold uppercase tracking-wider mb-1 inline-block">
                  {selectedProgram.category}
                </span>
                <h3 className="font-normal text-xl sm:text-2xl font-serif">
                  {selectedProgram.title[lang]}
                </h3>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-[#2D5A27] tracking-wider mb-2">
                {isId ? 'Deskripsi Lengkap Program' : 'Full Program Overview'}
              </h4>
              <p className="text-sm text-[#444444] leading-relaxed">
                {selectedProgram.fullDescription[lang]}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-[#2D5A27] tracking-wider mb-3">
                {isId ? 'Daftar Kegiatan Lapangan & Implementasi' : 'Field Implementation Activities'}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#333333]">
                {selectedProgram.keyActivities[lang].map((act, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F1F3F0] border border-[#EBEBE8]">
                    <ShieldCheck className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#EBEBE8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#666666]">
                {isId ? 'Capaian Dampak:' : 'Impact Milestone:'} <strong className="text-[#1A1A1A]">{selectedProgram.impactStat} {selectedProgram.impactLabel[lang]}</strong>
              </div>
              <button
                onClick={() => {
                  setSelectedProgram(null);
                  onOpenDonate();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#2D5A27] hover:bg-[#22461E] text-white font-bold text-xs shadow-md transition-colors"
              >
                {isId ? 'Bantu Donasi Program Ini' : 'Fund This Program'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
