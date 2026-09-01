import React, { useState } from 'react';
import { Language, PartnerVillage } from '../types';
import { PARTNER_VILLAGES } from '../data/hepiData';
import { 
  Compass, 
  MapPin, 
  ShieldCheck, 
  Trees, 
  HeartPulse, 
  Sprout, 
  Info, 
  Sparkles,
  Egg,
  Home,
  CheckCircle2
} from 'lucide-react';

interface EcosystemMapProps {
  lang: Language;
}

interface MapLocation {
  id: string;
  name: { id: string; en: string };
  category: 'clinic' | 'nursery' | 'ranger' | 'habitat' | 'village';
  coords: { x: number; y: number };
  description: { id: string; en: string };
  stats: { id: string; en: string };
  image: string;
}

const MAP_KEY_LOCATIONS: MapLocation[] = [
  {
    id: 'eco-clinic-main',
    name: { id: 'Klinik Utama HePI Batang Toru', en: 'Batang Toru HePI Eco-Clinic' },
    category: 'clinic',
    coords: { x: 32, y: 58 },
    description: { 
      id: 'Pusat pelayanan medis dan perawatan gigi non-tunai dengan barter bibit pohon bagi 28 desa mitra di sekitar Hutan Batang Toru.', 
      en: 'Primary health & dental facility serving 28 partner rainforest villages through the tree-barter system.' 
    },
    stats: { id: '14.250+ Pasien Dilayani', en: '14,250+ Patients Treated' },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'orangutan-corridor',
    name: { id: 'Koridor Utama Habitat Orangutan Tapanuli', en: 'Tapanuli Orangutan Protection Corridor' },
    category: 'habitat',
    coords: { x: 58, y: 35 },
    description: { 
      id: 'Kawasan hutan awan primer seluas 141.749 ha. Rumah bagi seluruh populasi Orangutan Tapanuli (~800 individu) di dunia.', 
      en: 'Primary cloud forest zone of 141,749 ha. Sole habitat on Earth for all ~800 remaining Tapanuli Orangutans.' 
    },
    stats: { id: '~800 Orangutan Tapanuli', en: '~800 Tapanuli Orangutans' },
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nursery-hub',
    name: { id: 'Pusat Persemaian Bibit Pohon Komunitas', en: 'Community Forest Nursery Hub' },
    category: 'nursery',
    coords: { x: 22, y: 40 },
    description: { 
      id: 'Fasilitas pembibitan pohon lokal (Meranti, Kapur, Durian Hutan) hasil tabungan medis warga desa.', 
      en: 'Nursery hub propagating native hardwood and fruit species grown by villagers as health savings.' 
    },
    stats: { id: '128.000+ Bibit Dihasilkan', en: '128,000+ Saplings Grown' },
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ranger-station-tarutung',
    name: { id: 'Pos Patroli Ranger HePI & SMART Patrol', en: 'HePI Ranger Station & HQ' },
    category: 'ranger',
    coords: { x: 75, y: 65 },
    description: { 
      id: 'Markas patroli pencegahan pembalakan liar, pembersihan jerat satwa, dan pemantauan kamera jebak.', 
      en: 'Patrol base for anti-poaching, snare removal, camera trap monitoring, and community outreach.' 
    },
    stats: { id: 'Nol Jerat Aktif di Sektor Inti', en: 'Zero Active Snares in Core Sector' },
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800'
  }
];

export const EcosystemMap: React.FC<EcosystemMapProps> = ({ lang }) => {
  const isId = lang === 'id';
  const [selectedLoc, setSelectedLoc] = useState<MapLocation>(MAP_KEY_LOCATIONS[1]);
  const [selectedVillage, setSelectedVillage] = useState<PartnerVillage | null>(PARTNER_VILLAGES[0]);
  const [filterType, setFilterType] = useState<'all' | 'clinic' | 'nursery' | 'habitat' | 'village'>('all');

  return (
    <section id="ecosystem" className="py-16 sm:py-24 bg-[#F1F3F0] border-b border-[#EBEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#2D5A27] text-xs font-semibold mb-3 border border-[#EBEBE8]">
            <Compass className="w-4 h-4 text-[#2D5A27]" />
            <span>{isId ? 'Wilayah Intervensi & Desa Mitra HePI' : 'HePI Intervention Area & Partner Villages'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] font-serif tracking-tight">
            {isId ? 'Peta Ekosistem Batang Toru & Desa Mitra' : 'Batang Toru Ecosystem & Village Map'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#666666] leading-relaxed">
            {isId 
              ? 'Petakan lokasi klinik kesehatan satelit, persemaian bibit komunitas, pos ranger, dan sebaran 28 desa mitra di sekitar Hutan Batang Toru, Tapanuli Selatan.' 
              : 'Map satellite eco-clinics, community tree nurseries, ranger posts, and the distribution of partner villages across the Batang Toru rainforest.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: 'all', label: isId ? 'Semua Titik' : 'All Points' },
              { id: 'habitat', label: isId ? '🦧 Habitat Orangutan' : '🦧 Orangutan Habitat' },
              { id: 'clinic', label: isId ? '🏥 Klinik Kesehatan' : '🏥 Eco Clinics' },
              { id: 'nursery', label: isId ? '🌿 Titik Persemaian' : '🌿 Tree Nurseries' },
              { id: 'village', label: isId ? '🏡 Desa Mitra' : '🏡 Partner Villages' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterType(f.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  filterType === f.id
                    ? 'bg-[#2D5A27] text-white border-[#2D5A27] shadow-2xs'
                    : 'bg-white text-[#666666] border-[#EBEBE8] hover:bg-[#EBEBE8]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Map Canvas */}
          <div className="lg:col-span-7 relative bg-[#2D5A27] rounded-[28px] overflow-hidden shadow-2xs border-4 border-white h-[440px] sm:h-[540px]">
            {/* Topographic Forest Canvas Background */}
            <div 
              className="absolute inset-0 opacity-45 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b3829] via-[#2D5A27]/70 to-[#2D5A27]/40" />

            {/* Region Label Overlay */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full border border-white/20 font-mono flex items-center gap-2 z-20">
              <MapPin className="w-4 h-4 text-emerald-300" />
              <span>Bentang Alam Batang Toru (1.85° N, 99.08° E)</span>
            </div>

            {/* Interactive Pins: Key Facilities */}
            {MAP_KEY_LOCATIONS.filter((l) => filterType === 'all' || filterType === l.category).map((loc) => {
              const isSelected = selectedLoc?.id === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => {
                    setSelectedLoc(loc);
                    setSelectedVillage(null);
                  }}
                  style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all z-30 focus:outline-none"
                >
                  {isSelected && (
                    <span className="absolute inline-flex h-12 w-12 rounded-full bg-emerald-300 opacity-75 animate-ping -left-2 -top-2" />
                  )}

                  <div className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 shadow-md transition-transform ${
                    isSelected 
                      ? 'bg-[#1A1A1A] border-white text-white scale-125' 
                      : 'bg-white border-[#2D5A27] text-[#2D5A27] hover:scale-110'
                  }`}>
                    {loc.category === 'clinic' && <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />}
                    {loc.category === 'habitat' && <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />}
                    {loc.category === 'nursery' && <Sprout className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />}
                    {loc.category === 'ranger' && <Trees className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />}
                  </div>

                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-black/85 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap opacity-90 group-hover:opacity-100 shadow-xs pointer-events-none">
                    {loc.name[lang]}
                  </span>
                </button>
              );
            })}

            {/* Interactive Pins: Partner Villages (Mapped around Batang Toru) */}
            {(filterType === 'all' || filterType === 'village') && PARTNER_VILLAGES.map((village) => {
              const isSelected = selectedVillage?.id === village.id;
              return (
                <button
                  key={village.id}
                  onClick={() => {
                    setSelectedVillage(village);
                    setSelectedLoc(null as any);
                  }}
                  style={{ left: `${village.coordinates.x}%`, top: `${village.coordinates.y}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all z-20 focus:outline-none"
                >
                  <div className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border shadow-sm transition-transform ${
                    isSelected 
                      ? 'bg-amber-400 border-white text-[#1A1A1A] scale-125 font-bold' 
                      : 'bg-white/90 border-[#2D5A27] text-[#2D5A27] hover:scale-110'
                  }`}>
                    <Home className="w-3.5 h-3.5" />
                  </div>

                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-[#1A1A1A]/90 text-amber-300 text-[9px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap shadow-xs pointer-events-none">
                    {village.name}
                  </span>
                </button>
              );
            })}

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-white text-xs flex flex-wrap items-center justify-between gap-2 z-20">
              <span className="font-bold text-emerald-300">{isId ? 'Simbol Peta:' : 'Map Legend:'}</span>
              <div className="flex flex-wrap items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> {isId ? '🏥 Klinik' : '🏥 Clinic'}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> {isId ? '🦧 Orangutan' : '🦧 Orangutan'}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> {isId ? '🌿 Persemaian' : '🌿 Nursery'}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-white" /> {isId ? '🏡 Desa Mitra' : '🏡 Village'}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Selected Detail Card (Facility or Village) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[28px] border border-[#EBEBE8] shadow-2xs space-y-6">
            {selectedVillage ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27] flex items-center gap-1">
                    <Home className="w-3.5 h-3.5" />
                    <span>{isId ? 'Detail Desa Mitra Konservasi' : 'Partner Village Details'}</span>
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                    selectedVillage.status === 'green' ? 'bg-[#2D5A27] text-white' : 'bg-amber-500 text-white'
                  }`}>
                    {selectedVillage.status === 'green' ? (isId ? 'Desa Hijau' : 'Green Village') : (isId ? 'Desa Transisi' : 'Transition')}
                  </span>
                </div>

                <h3 className="text-2xl font-normal text-[#1A1A1A] font-serif">
                  {selectedVillage.name}
                </h3>
                <div className="text-xs text-[#666666] font-medium">
                  📍 {selectedVillage.subdistrict}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8]">
                    <div className="text-[10px] text-[#666666] uppercase font-bold">{isId ? 'Jumlah KK Binaan:' : 'Partner Households:'}</div>
                    <div className="text-lg font-bold text-[#1A1A1A]">{selectedVillage.households} KK</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8]">
                    <div className="text-[10px] text-[#666666] uppercase font-bold">{isId ? 'Kebun Persemaian:' : 'Active Nurseries:'}</div>
                    <div className="text-lg font-bold text-[#2D5A27]">{selectedVillage.nurseriesCount} Titik</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8]">
                    <div className="text-[10px] text-[#666666] uppercase font-bold">{isId ? 'Bibit Terkumpul:' : 'Saplings Grown:'}</div>
                    <div className="text-lg font-bold text-[#2D5A27]">{selectedVillage.saplingsCollected.toLocaleString('id-ID')}</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8]">
                    <div className="text-[10px] text-[#666666] uppercase font-bold">{isId ? 'Kelompok Ternak:' : 'Livestock Group:'}</div>
                    <div className="text-sm font-bold text-[#1A1A1A] mt-1">
                      {selectedVillage.hasLivestockGroup ? (isId ? '✅ Aktif Binaan' : '✅ Active') : (isId ? '⏳ Tahap 2' : '⏳ Phase 2')}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8] text-xs text-[#666666] space-y-1">
                  <div className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2D5A27]" />
                    <span>{isId ? 'Komitmen Perlindungan Hutan' : 'Conservation Agreement'}</span>
                  </div>
                  <p>
                    {isId 
                      ? 'Warga desa menandatangani kesepakatan perlindungan kanopi hutan alam, tidak berburu satwa lindung, dan aktif memelihara persemaian bibit pohon.' 
                      : 'Community signs conservation pacts protecting canopy trees, halting poaching, and actively running native nurseries.'}
                  </p>
                </div>
              </div>
            ) : selectedLoc ? (
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden border border-[#EBEBE8]">
                  <img
                    src={selectedLoc.image}
                    alt={selectedLoc.name[lang]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#2D5A27] text-white text-xs font-bold px-3 py-1 rounded-full shadow-2xs">
                    {selectedLoc.stats[lang]}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2D5A27] mb-1 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isId ? 'Fasilitas & Titik Konservasi' : 'Conservation Facility Point'}</span>
                  </div>
                  <h3 className="text-2xl font-normal text-[#1A1A1A] font-serif">
                    {selectedLoc.name[lang]}
                  </h3>
                  <p className="mt-2 text-sm text-[#666666] leading-relaxed">
                    {selectedLoc.description[lang]}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8] text-xs text-[#666666] space-y-1">
                  <div className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-[#2D5A27]" />
                    <span>{isId ? 'Fakta Ekosistem Batang Toru' : 'Batang Toru Key Fact'}</span>
                  </div>
                  <p>
                    {isId 
                      ? 'Bentang alam Batang Toru seluas 141.749 ha adalah benteng pertahanan ekologis penting bagi Sumatera Utara yang memasok jutaan liter air bersih setiap hari.' 
                      : 'The 141,749 ha Batang Toru ecosystem is a critical ecological watershed supplying millions of liters of clean water daily.'}
                  </p>
                </div>
              </div>
            ) : null}

            {/* Quick list of all 7 partner villages */}
            <div className="pt-4 border-t border-[#EBEBE8] space-y-2">
              <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider block">
                {isId ? 'Daftar Desa Mitra HePI di Tapanuli Selatan:' : 'HePI Partner Villages in South Tapanuli:'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {PARTNER_VILLAGES.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => {
                      setSelectedVillage(v);
                      setSelectedLoc(null as any);
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      selectedVillage?.id === v.id
                        ? 'bg-[#2D5A27] text-white font-bold'
                        : 'bg-[#F1F3F0] text-[#1A1A1A] hover:bg-[#EBEBE8]'
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
