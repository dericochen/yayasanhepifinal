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
  ShieldCheck
} from 'lucide-react';

interface ProgramsSectionProps {
  lang: Language;
  onOpenDonate: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ lang, onOpenDonate }) => {
  const isId = lang === 'id';
  const [activeCategory, setActiveCategory] = useState<'all' | 'health' | 'conservation' | 'livelihoods' | 'education'>('all');
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const filteredPrograms = activeCategory === 'all' 
    ? PROGRAMS 
    : PROGRAMS.filter((p) => p.category === activeCategory);

  const categories = [
    { id: 'all', label: isId ? 'Semua Program' : 'All Programs' },
    { id: 'health', label: isId ? 'Kesehatan Klinik' : 'Healthcare' },
    { id: 'conservation', label: isId ? 'Konservasi Orangutan' : 'Conservation' },
    { id: 'livelihoods', label: isId ? 'Reboisasi & Pembibitan' : 'Tree Nursery' },
    { id: 'education', label: isId ? 'Ekonomi & Edukasi' : 'Livelihoods' }
  ];

  return (
    <section id="programs" className="py-16 sm:py-24 bg-[#FCFCFB] border-b border-[#EBEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-xs font-semibold mb-3 border border-[#2D5A27]/20">
            <HeartPulse className="w-4 h-4 text-[#2D5A27]" />
            <span>{isId ? 'Pendekatan Terpadu' : 'Holistic Approach'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] font-serif tracking-tight">
            {isId ? 'Program Utama Yayasan HEPI' : 'Our Core Programs'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#666666]">
            {isId 
              ? 'Mengintegrasikan pelayanan kesehatan terjangkau, reboisasi berbasis bibit pohon, dan perlindungan habitat Orangutan Tapanuli.' 
              : 'Integrating accessible healthcare, sapling-based reforestation, and protection of the Tapanuli Orangutan habitat.'}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#2D5A27] text-white shadow-2xs'
                    : 'bg-white text-[#666666] border border-[#EBEBE8] hover:bg-[#F1F3F0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-[28px] overflow-hidden border border-[#EBEBE8] shadow-2xs hover:border-[#2D5A27]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Program Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#2D5A27] text-xs font-bold uppercase tracking-wider shadow-2xs">
                    {program.category}
                  </span>

                  {/* Impact Stat Badge */}
                  <div className="absolute bottom-4 right-4 bg-[#2D5A27] text-white px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
                    <span>{program.impactStat} {program.impactLabel[lang]}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-2xl font-normal text-[#1A1A1A] font-serif group-hover:text-[#2D5A27] transition-colors">
                    {program.title[lang]}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {program.summary[lang]}
                  </p>

                  {/* Key Activities bullet preview */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27]">
                      {isId ? 'Kegiatan Utama:' : 'Key Activities:'}
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#1A1A1A]">
                      {program.keyActivities[lang].slice(0, 2).map((act, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#2D5A27] shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[#EBEBE8] mt-4">
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="text-xs font-bold text-[#2D5A27] hover:underline flex items-center gap-1 group/btn"
                >
                  <span>{isId ? 'Pelajari Selengkapnya' : 'Learn More Details'}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenDonate}
                  className="px-4 py-2 rounded-full bg-[#2D5A27] hover:bg-[#22461E] text-white font-semibold text-xs transition-colors"
                >
                  {isId ? 'Dukung Program' : 'Support Program'}
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
              className="absolute top-4 right-4 p-2 rounded-full bg-[#F1F3F0] hover:bg-[#EBEBE8] text-[#1A1A1A]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 rounded-2xl overflow-hidden">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title[lang]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-normal text-xl font-serif">
                {selectedProgram.title[lang]}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-[#2D5A27] tracking-wider mb-2">
                {isId ? 'Deskripsi Lengkap Program' : 'Full Program Description'}
              </h4>
              <p className="text-sm text-[#1A1A1A] leading-relaxed">
                {selectedProgram.fullDescription[lang]}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-[#2e5b42] tracking-wider mb-3">
                {isId ? 'Daftar Kegiatan Lapangan' : 'Field Activities List'}
              </h4>
              <ul className="space-y-2 text-sm text-[#374151]">
                {selectedProgram.keyActivities[lang].map((act, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#f3efe8]">
                    <ShieldCheck className="w-5 h-5 text-[#2e5b42] shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#e5ded4] flex items-center justify-between gap-4">
              <div className="text-xs text-[#6b7280]">
                {isId ? 'Dampak Utama:' : 'Core Impact:'} <strong className="text-[#1f2937]">{selectedProgram.impactStat} {selectedProgram.impactLabel[lang]}</strong>
              </div>
              <button
                onClick={() => {
                  setSelectedProgram(null);
                  onOpenDonate();
                }}
                className="px-5 py-2.5 rounded-xl bg-[#833556] hover:bg-[#6e2c47] text-white font-bold text-sm shadow-md"
              >
                {isId ? 'Bantu Program Ini' : 'Fund This Program'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
