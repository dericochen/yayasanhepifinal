import React, { useState } from 'react';
import { Language } from '../types';
import { HEPI_INFO } from '../data/hepiData';
import { 
  Globe, 
  ShieldCheck, 
  Trees, 
  Award, 
  Users, 
  Heart, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const isId = lang === 'id';
  const [activeTab, setActiveTab] = useState<'founder' | 'field' | 'board'>('founder');

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-[#EBEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Story Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-xs font-semibold border border-[#EBEBE8]">
              <Globe className="w-4 h-4 text-[#2D5A27]" />
              <span>{isId ? 'Filosofi & Kisah Pendirian' : 'Philosophy & Founding Narrative'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] font-serif tracking-tight leading-[1.15]">
              {isId ? (
                <>
                  Memutus Rantai Penebangan Hutan Melalui <span className="text-[#2D5A27]">Penanaman Pohon & Konservasi</span>
                </>
              ) : (
                <>
                  Breaking Deforestation Cycles Through <span className="text-[#2D5A27]">Tree Planting & Conservation</span>
                </>
              )}
            </h2>

            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              {HEPI_INFO.foundingStory[lang]}
            </p>

            {/* Core Impact Facts */}
            <div className="p-6 rounded-[24px] bg-[#F1F3F0] border border-[#EBEBE8] space-y-3">
              <h3 className="text-sm font-bold text-[#1A1A1A] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2D5A27]" />
                <span>{isId ? 'Urgensi Pelindungan Hutan Batang Toru' : 'Batang Toru Conservation Imperative'}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                {isId 
                  ? 'Ekosistem Batang Toru seluas 141.749 hektar merupakan hutan hujan tropis primer di Tapanuli yang menjadi satu-satunya habitat asli Orangutan Tapanuli (Pongo tapanuliensis). Kera besar terlangka di dunia ini hanya tersisa ~800 individu. Melalui program kesehatan HePI, warga tidak lagi menebang kayu untuk biaya pengobatan.' 
                  : 'The 141,749-hectare Batang Toru Ecosystem in Tapanuli is the sole natural habitat for the critically endangered Tapanuli Orangutan (Pongo tapanuliensis), with fewer than 800 individuals surviving in the wild.'}
              </p>
            </div>
          </div>

          {/* Right Visual: Official Logo Badge & Impact Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#2D5A27] text-white p-8 rounded-[32px] shadow-2xs space-y-6 relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-emerald-600/20 blur-2xl" />
              
              <div className="flex items-center gap-4 border-b border-white/20 pb-6">
                <div className="w-16 h-16 rounded-full bg-white p-1 shrink-0 shadow-xs">
                  <img src="/hepi-logo.svg" alt="Yayasan HEPI Official Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-xl font-normal font-serif text-white">Yayasan HEPI</h4>
                  <p className="text-xs text-emerald-200 uppercase tracking-wider font-bold">Healthy Planet Indonesia</p>
                </div>
              </div>

              <blockquote className="text-sm sm:text-base font-serif italic text-emerald-50 leading-relaxed">
                {isId 
                  ? '"Ketika masyarakat desa sekitar hutan terlindungi kesehatannya, gergaji mesin akan terhenti dan hutan Batang Toru dapat lestari selamanya."' 
                  : '"When healthcare is assured for rainforest-adjacent villagers, chainsaws fall silent and the Batang Toru ecosystem thrives."'}
              </blockquote>

              <div className="pt-2 flex items-center justify-between text-xs text-emerald-200 border-t border-white/20">
                <span className="font-bold">Whitley Gold Award Winner</span>
                <span>Sumatera Utara, Indonesia</span>
              </div>
            </div>
          </div>

        </div>

        {/* Team & Leadership Showcase */}
        <div className="pt-8 border-t border-[#EBEBE8]">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-xs font-semibold mb-3 border border-[#EBEBE8]">
              <Users className="w-4 h-4 text-[#2D5A27]" />
              <span>{isId ? 'Tim & Kepemimpinan Yayasan' : 'Our Team & Leadership'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] font-serif">
              {isId ? 'Orang-Orang di Balik Yayasan HEPI' : 'The People Behind Yayasan HEPI'}
            </h3>
            <p className="mt-2 text-sm text-[#666666]">
              {isId 
                ? 'Didirikan oleh drg. Hotlin Ompusunggu, M.Sc. bersama tim dedikasi tinggi di bidang kesehatan, konservasi, dan pemberdayaan masyarakat.' 
                : 'Led by Dr. Hotlin Ompusunggu, M.Sc. alongside dedicated healthcare, conservation, and community development teams.'}
            </p>
          </div>

          {/* Team Cards Grid: Combined into Dr. Hotlin and Tim HePI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card 1: Founder Drg. Hotlin Ompusunggu */}
            <div className="bg-[#FCFCFB] rounded-[28px] border border-[#EBEBE8] p-6 shadow-2xs hover:border-[#2D5A27]/40 transition-all space-y-4">
              <div className="relative h-72 rounded-2xl overflow-hidden bg-[#F1F3F0] border border-[#EBEBE8]">
                <img 
                  src="/dr-hotlin.jpg" 
                  alt="drg. Hotlin Ompusunggu, M.Sc." 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#2D5A27] text-white text-[11px] font-bold shadow-xs flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-emerald-200" /> Whitley Gold Award
                </div>
              </div>

              <div>
                <h4 className="text-xl font-normal font-serif text-[#1A1A1A]">
                  drg. Hotlin Ompusunggu, M.Sc.
                </h4>
                <p className="text-xs font-bold text-[#2D5A27] uppercase tracking-wider mt-0.5">
                  {isId ? 'Pendiri & Direktur Eksekutif Yayasan HEPI' : 'Founder & Executive Director'}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {isId 
                    ? 'Dokter gigi dan konservasionis Indonesia peraih Whitley Gold Award (2016) yang diserahkan oleh Princess Anne di London. Pelopor pendekatan Planetary Health yang menghubungkan kesehatan masyarakat dengan kelestarian hutan Batang Toru.' 
                    : 'Indonesian dentist and conservationist, winner of the prestigious Whitley Gold Award (2016) presented by HRH Princess Anne in London. Pioneer of Planetary Health in Indonesia.'}
                </p>
              </div>
            </div>

            {/* Card 2: Combined Tim HePI */}
            <div className="bg-[#FCFCFB] rounded-[28px] border border-[#EBEBE8] p-6 shadow-2xs hover:border-[#2D5A27]/40 transition-all space-y-4">
              <div className="relative h-72 rounded-2xl overflow-hidden bg-[#F1F3F0] border border-[#EBEBE8]">
                <img 
                  src="/hepi-team.jpg" 
                  alt="Tim Healthy Planet Indonesia (HePI)" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#2D5A27] text-white text-[11px] font-bold shadow-xs flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-emerald-200" /> Tim HePI
                </div>
              </div>

              <div>
                <h4 className="text-xl font-normal font-serif text-[#1A1A1A]">
                  {isId ? 'Tim Healthy Planet Indonesia (HePI)' : 'Healthy Planet Indonesia (HePI) Team'}
                </h4>
                <p className="text-xs font-bold text-[#2D5A27] uppercase tracking-wider mt-0.5">
                  {isId ? 'Tim Konservasi, Medis, & Pemberdayaan Masyarakat' : 'Conservation, Medical & Community Team'}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {isId 
                    ? 'Satu kesatuan Tim HePI di Batang Toru yang terdiri dari dokter, perawat, ranger patroli hutan, serta fasilitator persemaian bibit pohon. Bersama masyarakat desa, Tim HePI menjaga 141.749 ha hutan Batang Toru.' 
                    : 'The unified HePI team in Batang Toru comprising doctors, nurses, forest rangers, and seedling nursery facilitators guarding 141,749 ha of Batang Toru rainforest.'}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
