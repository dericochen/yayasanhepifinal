import React from 'react';
import { Language } from '../types';
import { HEPI_INFO, TEAM_MEMBERS } from '../data/hepiData';
import { 
  HeartHandshake, 
  Trees, 
  Target, 
  Compass, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Users, 
  BookOpen,
  HeartPulse
} from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const isId = lang === 'id';

  const foundersAndBoard = TEAM_MEMBERS.filter((m) => m.type === 'founder' || m.type === 'board');
  const fieldTeam = TEAM_MEMBERS.filter((m) => m.type === 'team');

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FCFCFB] border-b border-[#EBEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-xs font-semibold mb-3 border border-[#EBEBE8]">
            <Compass className="w-4 h-4 text-[#2D5A27]" />
            <span>{isId ? 'Profil & Filosofi Yayasan' : 'About HePI Foundation'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] font-serif tracking-tight">
            {isId ? 'Menjaga Hutan, Menyehatkan Manusia' : 'Protecting Rainforests, Healing Humanity'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#666666] leading-relaxed">
            {HEPI_INFO.tagline[lang]} — {isId ? 'Menghubungkan kesehatan primer masyarakat dengan perlindungan benteng terakhir Orangutan Tapanuli di Sumatera Utara.' : 'Connecting community primary healthcare with the conservation of the last stronghold of the Tapanuli Orangutan in North Sumatra.'}
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Vision Card */}
          <div className="bg-white p-8 sm:p-10 rounded-[28px] border border-[#EBEBE8] shadow-2xs space-y-4 relative overflow-hidden flex flex-col justify-between group hover:border-[#2D5A27]/40 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F1F3F0] text-[#2D5A27] flex items-center justify-center border border-[#EBEBE8]">
                <Target className="w-6 h-6 text-[#2D5A27]" />
              </div>
              <h3 className="text-2xl font-normal text-[#1A1A1A] font-serif">
                {isId ? 'Visi Kami' : 'Our Vision'}
              </h3>
              <p className="text-base text-[#555555] leading-relaxed">
                {HEPI_INFO.vision[lang]}
              </p>
            </div>
            <div className="pt-4 border-t border-[#F1F3F0] text-xs font-bold text-[#2D5A27] flex items-center gap-1.5 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>{isId ? 'Batang Toru Lestari 2030' : 'Resilient Batang Toru 2030'}</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-[#2D5A27] text-white p-8 sm:p-10 rounded-[28px] shadow-2xs space-y-4 relative overflow-hidden flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-300 flex items-center justify-center border border-white/20">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-normal font-serif text-white">
                {isId ? 'Misi Kami' : 'Our Mission'}
              </h3>
              <p className="text-base text-emerald-50/90 leading-relaxed">
                {HEPI_INFO.mission[lang]}
              </p>
            </div>
            <div className="pt-4 border-t border-white/20 text-xs font-bold text-emerald-200 flex items-center gap-1.5 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>{isId ? 'Konservasi Berbasis Kesejahteraan' : 'Community-Centric Conservation'}</span>
            </div>
          </div>
        </div>

        {/* Philosophy & History (Old Web Text & Planetary Health Approach) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-[32px] border border-[#EBEBE8] shadow-2xs">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-xs font-bold uppercase tracking-wider">
              <HeartPulse className="w-3.5 h-3.5" />
              <span>{isId ? 'Filosofi & Sejarah Pendirian' : 'Philosophy & Foundation Story'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] font-serif leading-snug">
              {isId ? 'Filosofi Planetary Health: Saling Menguatkan Alam & Manusia' : 'Planetary Health: Mutual Flourishing of Nature & Humans'}
            </h3>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              {HEPI_INFO.philosophy[lang]}
            </p>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              {HEPI_INFO.history[lang]}
            </p>

            <div className="p-4 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8] flex items-start gap-3 text-xs text-[#2D5A27] font-medium">
              <Award className="w-5 h-5 shrink-0 mt-0.5" />
              <span>
                {isId 
                  ? 'Model HePI diadopsi dari inisiatif ASRI di Kalimantan Barat yang sukses menekan pembalakan liar hingga 90% dan memulihkan ribuan hektar hutan tropis.' 
                  : 'HePI\'s model adapts the proven ASRI West Kalimantan initiative which reduced illegal logging by 90% and restored thousands of rainforest hectares.'}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[28px] overflow-hidden shadow-md border border-[#EBEBE8]">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000"
                alt="Persemaian Bibit HePI Batang Toru"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  {isId ? 'Stasiun Persemaian & Riset Batang Toru' : 'Batang Toru Field Nursery & Research Hub'}
                </span>
                <h4 className="text-lg font-normal font-serif">
                  {isId ? 'Tempat Ribuan Bibit Pohon Dirawat Setiap Hari' : 'Where Thousands of Native Saplings Grow Daily'}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* HePI Board & Leadership Section (Modeled after ASRI style with high-resolution portraits) */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>{isId ? 'Dewan Pembina & Penasihat' : 'Advisory Board & Leadership'}</span>
            </div>
            <h3 className="text-3xl font-normal text-[#1A1A1A] font-serif">
              {isId ? 'Dewan Yayasan Healthy Planet Indonesia' : 'HePI Board of Trustees & Advisors'}
            </h3>
            <p className="text-sm text-[#666666]">
              {isId 
                ? 'Didampingi oleh para dokter, akademisi, dan konservasionis berdedikasi tinggi di tingkat nasional dan global.' 
                : 'Guided by dedicated physicians, researchers, and global conservation leaders.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foundersAndBoard.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-[28px] p-6 border border-[#EBEBE8] shadow-2xs space-y-4 hover:border-[#2D5A27]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-4 border border-[#EBEBE8]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                        {member.type === 'founder' ? (isId ? 'Pendiri & Ketua' : 'Founder & Chair') : (isId ? 'Dewan Pembina' : 'Advisory Board')}
                      </div>
                      <h4 className="text-lg font-normal font-serif">
                        {member.name}
                      </h4>
                    </div>
                  </div>

                  <div className="text-xs font-bold text-[#2D5A27] mb-2">
                    {member.role[lang]}
                  </div>

                  <p className="text-xs text-[#666666] leading-relaxed">
                    {member.bio[lang]}
                  </p>
                </div>

                {member.awards && member.awards.length > 0 && (
                  <div className="pt-3 border-t border-[#F1F3F0] space-y-1">
                    <span className="text-[10px] font-bold text-[#2D5A27] uppercase tracking-wider block">
                      {isId ? 'Penghargaan / Kehormatan:' : 'Key Honors:'}
                    </span>
                    {member.awards.map((award, i) => (
                      <div key={i} className="text-[11px] text-[#1A1A1A] flex items-center gap-1.5 font-medium">
                        <Award className="w-3.5 h-3.5 text-[#2D5A27] shrink-0" />
                        <span>{award}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tim Lapangan HePI & Group Photo Section */}
        <div className="bg-[#F1F3F0] p-8 sm:p-12 rounded-[32px] border border-[#EBEBE8] space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#2D5A27] text-xs font-bold uppercase tracking-wider border border-[#EBEBE8]">
              <Users className="w-3.5 h-3.5" />
              <span>{isId ? 'Garda Terdepan Batang Toru' : 'Field Operations Team'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] font-serif">
              {isId ? 'Tim Medis, Ranger, & Fasilitator Kelompok Tani' : 'Medical Staff, Forest Rangers, & Farm Mentors'}
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              {isId 
                ? 'Didukung oleh 40+ rimbawan lokal, dokter, perawat, analis laboratorium, dan fasilitator persemaian yang bertugas langsung di pos lapangan Tapanuli Selatan.' 
                : 'Supported by 40+ local foresters, physicians, nurses, lab analysts, and nursery facilitators operating across South Tapanuli field posts.'}
            </p>
          </div>

          {/* Group Photo Showcase */}
          <div className="relative rounded-[24px] overflow-hidden shadow-md border-4 border-white h-72 sm:h-96">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=85&w=1600"
              alt="Tim HePI Bersama Komunitas Desa Batang Toru"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase text-emerald-300 tracking-wider">
                  {isId ? 'Foto Bersama Tim & Ranger HePI' : 'HePI Team & Ranger Staff'}
                </span>
                <h4 className="text-xl font-normal font-serif">
                  {isId ? 'Bekerja Bersama Komunitas, Menjaga Setiap Jengkal Hutan' : 'Working Hand-in-Hand with Communities to Protect Every Tree'}
                </h4>
              </div>
              <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white border border-white/30 shrink-0">
                {isId ? '40+ Personil Lapangan' : '40+ Dedicated Field Staff'}
              </div>
            </div>
          </div>

          {/* Key Field Leads Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {fieldTeam.map((lead) => (
              <div key={lead.id} className="bg-white p-6 rounded-2xl border border-[#EBEBE8] flex items-start gap-4 shadow-2xs">
                <img
                  src={lead.image}
                  alt={lead.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#2D5A27] shrink-0"
                />
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#1A1A1A]">
                    {lead.name}
                  </h4>
                  <div className="text-xs font-semibold text-[#2D5A27]">
                    {lead.role[lang]}
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    {lead.bio[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
