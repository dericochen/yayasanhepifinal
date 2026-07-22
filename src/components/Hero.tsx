import React from 'react';
import { Language } from '../types';
import { HEPI_INFO, IMPACT_METRICS } from '../data/hepiData';
import { 
  Trees, 
  HeartPulse, 
  ShieldCheck, 
  Sprout, 
  ArrowRight, 
  Award, 
  Play,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenDonate: () => void;
  onOpenVideoModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenDonate, onOpenVideoModal }) => {
  const isId = lang === 'id';

  return (
    <section className="relative overflow-hidden bg-[#FCFCFB] pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-[#EBEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-xs font-semibold tracking-wide mb-6 border border-[#2D5A27]/20">
          <Award className="w-4 h-4 text-[#2D5A27]" />
          <span>{isId ? 'Pemenang Whitley Gold Award 2016 (Drg. Hotlin Ompusunggu)' : 'Whitley Gold Award Winner 2016 (Dr. Hotlin Ompusunggu)'}</span>
        </div>

        {/* Main Grid: Left Headline + Right Image Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-normal text-[#1A1A1A] leading-[1.15] font-serif tracking-tight">
              {isId ? (
                <>
                  Sehatkan <span className="italic text-[#2D5A27]">Masyarakat</span>,<br />
                  Lestarikan <span className="text-[#2D5A27]">Hutan Batang Toru</span>.
                </>
              ) : (
                <>
                  Healthy <span className="italic text-[#2D5A27]">People</span>,<br />
                  Healthy <span className="text-[#2D5A27]">Batang Toru Forest</span>.
                </>
              )}
            </h1>

            <p className="text-lg text-[#666666] leading-relaxed font-normal max-w-2xl">
              {HEPI_INFO.foundingStory[lang]}
            </p>

            {/* Core Values / Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#1A1A1A]">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#EBEBE8]">
                <CheckCircle2 className="w-5 h-5 text-[#2D5A27] shrink-0" />
                <span className="font-medium text-xs sm:text-sm">
                  {isId ? 'Berobat Dengan Bibit Pohon' : 'Pay Healthcare With Saplings'}
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#EBEBE8]">
                <CheckCircle2 className="w-5 h-5 text-[#2D5A27] shrink-0" />
                <span className="font-medium text-xs sm:text-sm">
                  {isId ? 'Lindungi Orangutan Tapanuli' : 'Protect Tapanuli Orangutans'}
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#EBEBE8]">
                <CheckCircle2 className="w-5 h-5 text-[#2D5A27] shrink-0" />
                <span className="font-medium text-xs sm:text-sm">
                  {isId ? '141.749 ha Hutan Primer' : '141,749 ha Rainforest Preserved'}
                </span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-[#EBEBE8]">
                <CheckCircle2 className="w-5 h-5 text-[#2D5A27] shrink-0" />
                <span className="font-medium text-xs sm:text-sm">
                  {isId ? 'Diskon Medis Desa Hijau' : 'Green Village Health Discounts'}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenDonate}
                className="px-8 py-3.5 rounded-full bg-[#2D5A27] hover:bg-[#22461E] text-white font-semibold text-base transition-all flex items-center gap-2 shadow-2xs hover:shadow-xs"
              >
                <span>{isId ? 'Donasi & Sponsori Bibit' : 'Donate & Sponsor Saplings'}</span>
                <ArrowRight className="w-5 h-5 text-emerald-200" />
              </button>

              <a
                href="#calculator"
                className="px-8 py-3.5 rounded-full border-2 border-[#2D5A27] text-[#2D5A27] hover:bg-[#F1F3F0] font-bold text-base transition-all flex items-center gap-2"
              >
                <Sprout className="w-5 h-5 text-[#2D5A27]" />
                <span>{isId ? 'Simulasi Barter Bibit' : 'Barter Calculator'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[32px] overflow-hidden border border-[#EBEBE8] bg-[#F1F3F0]">
              <img
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200"
                alt="Batang Toru Cloud Forest & Community Healthcare"
                className="w-full h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Highlight Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-[#EBEBE8] max-w-xs flex items-center gap-3 shadow-2xs">
                <div className="w-10 h-10 rounded-full bg-[#2D5A27] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-emerald-200" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#2D5A27] uppercase">Ekosistem Batang Toru</div>
                  <div className="text-xs text-[#1A1A1A] font-medium leading-snug">
                    {isId ? 'Habitat Tunggal Orangutan Tapanuli di Dunia' : 'Only Tapanuli Orangutan Habitat on Earth'}
                  </div>
                </div>
              </div>

              {/* Bottom Card Content inside Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2D5A27] text-xs font-bold text-white">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-200" /> Planetary Health Model
                </div>
                <h3 className="text-xl font-serif font-normal leading-tight">
                  {isId ? '"Sponsor Pohon untuk Hutan Batang Toru"' : '"Tree Sponsorship for Batang Toru Forest"'}
                </h3>
                <p className="text-xs text-slate-200 line-clamp-2">
                  {isId 
                    ? 'Bersama Yayasan HePI, setiap penanaman bibit pohon secara langsung melestarikan habitat Orangutan Tapanuli.' 
                    : 'With HePI Foundation, every tree planted directly protects the habitat of the Tapanuli Orangutan.'}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Impact Tickers Grid */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {IMPACT_METRICS.map((metric) => {
            const getIcon = (iconName: string) => {
              switch (iconName) {
                case 'Trees': return <Trees className="w-6 h-6 text-[#2D5A27]" />;
                case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-[#2D5A27]" />;
                case 'Sprout': return <Sprout className="w-6 h-6 text-[#2D5A27]" />;
                default: return <ShieldCheck className="w-6 h-6 text-[#2D5A27]" />;
              }
            };

            return (
              <div 
                key={metric.id} 
                className="bg-white p-6 rounded-2xl border border-[#EBEBE8] shadow-2xs hover:border-[#2D5A27]/40 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-[#F1F3F0]">
                    {getIcon(metric.icon)}
                  </div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-serif">
                    {metric.prefix}{metric.numericValue.toLocaleString()}{metric.suffix}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#1A1A1A] leading-snug">
                  {metric.label[lang]}
                </h4>
                <p className="text-xs text-[#666666] mt-1 leading-normal">
                  {metric.description[lang]}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
