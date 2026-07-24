import React, { useState } from 'react';
import { Language } from '../types';
import { 
  Compass, 
  MapPin, 
  ShieldCheck, 
  Trees, 
  HeartPulse, 
  Sprout, 
  Info, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface EcosystemMapProps {
  lang: Language;
}

interface MapLocation {
  id: string;
  name: { id: string; en: string };
  category: 'clinic' | 'nursery' | 'ranger' | 'habitat';
  coords: { x: number; y: number }; // Percentage positions on map canvas
  description: { id: string; en: string };
  stats: { id: string; en: string };
  image: string;
}

const ECOSYSTEM_LOCATIONS: MapLocation[] = [
  {
    id: 'eco-clinic-main',
    name: { id: 'Klinik Utama HePI Batang Toru', en: 'Batang Toru HePI Eco-Clinic' },
    category: 'clinic',
    coords: { x: 32, y: 58 },
    description: { 
      id: 'Pusat pelayanan medis dan perawatan gigi gratis/barter bibit pohon bagi 28 desa mitra di sekitar Hutan Batang Toru.', 
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
    stats: { id: '85.000+ Bibit Dihasilkan', en: '85,000+ Saplings Grown' },
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ranger-station-tarutung',
    name: { id: 'Pos Patroli Ranger HePI Tarutung', en: 'HePI Ranger Station & HQ' },
    category: 'ranger',
    coords: { x: 75, y: 65 },
    description: { 
      id: 'Markas patroli pencegahan pembalakan liar, pembersihan jerat satwa, dan pemantauan kamera jebak.', 
      en: 'Patrol base for anti-poaching, snare removal, camera trap monitoring, and community outreach.' 
    },
    stats: { id: 'Nol Jerat Pemburu di Patroli Utama', en: 'Zero Active Snares in Core Sector' },
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800'
  }
];

export const EcosystemMap: React.FC<EcosystemMapProps> = ({ lang }) => {
  const isId = lang === 'id';
  const [activeLoc, setActiveLoc] = useState<MapLocation>(ECOSYSTEM_LOCATIONS[1]);

  return (
    <section id="ecosystem" className="py-16 sm:py-24 bg-[#F1F3F0] border-b border-[#EBEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#2D5A27] text-xs font-semibold mb-3 border border-[#EBEBE8]">
            <Compass className="w-4 h-4 text-[#2D5A27]" />
            <span>{isId ? 'Wilayah Intervensi HePI' : 'HePI Intervention Area'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] font-serif tracking-tight">
            {isId ? 'Peta Interaktif Ekosistem Batang Toru' : 'Interactive Batang Toru Ecosystem Map'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#666666]">
            {isId 
              ? 'Jelajahi lokasi klinik, kawasan konservasi Orangutan Tapanuli, dan jaringan persemaian pohon di Tapanuli, Sumatera Utara.' 
              : 'Explore our eco-clinics, Tapanuli Orangutan protection zones, and community tree nurseries in North Sumatra.'}
          </p>
        </div>

        {/* Interactive Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Map Graphic Box */}
          <div className="lg:col-span-7 relative bg-[#2D5A27] rounded-[28px] overflow-hidden shadow-2xs border-4 border-white h-[420px] sm:h-[500px]">
            {/* Topo Map Background Pattern */}
            <div 
              className="absolute inset-0 opacity-40 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b3829] via-[#2D5A27]/70 to-[#2D5A27]/40" />

            {/* Region Label Overlay */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full border border-white/20 font-mono flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-200" />
              <span>Tapanuli, Sumatera Utara (1.85° N, 99.08° E)</span>
            </div>

            {/* Interactive Pins */}
            {ECOSYSTEM_LOCATIONS.map((loc) => {
              const isSelected = activeLoc.id === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setActiveLoc(loc)}
                  style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all z-20 focus:outline-none`}
                >
                  {/* Ping Animation for Active */}
                  {isSelected && (
                    <span className="absolute inline-flex h-12 w-12 rounded-full bg-emerald-200 opacity-75 animate-ping -left-2 -top-2" />
                  )}

                  <div className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 shadow-2xs transition-transform ${
                    isSelected 
                      ? 'bg-[#1A1A1A] border-white text-white scale-125' 
                      : 'bg-white border-[#2D5A27] text-[#2D5A27] hover:scale-110'
                  }`}>
                    {loc.category === 'clinic' && <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5" />}
                    {loc.category === 'habitat' && <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />}
                    {loc.category === 'nursery' && <Sprout className="w-4 h-4 sm:w-5 sm:h-5" />}
                    {loc.category === 'ranger' && <Trees className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </div>

                  {/* Pin Tooltip Tag */}
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 bg-black/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap opacity-90 group-hover:opacity-100 shadow-xs pointer-events-none">
                    {loc.name[lang]}
                  </span>
                </button>
              );
            })}

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white text-xs flex flex-wrap items-center justify-between gap-3">
              <span className="font-bold text-emerald-200">{isId ? 'Legenda Peta:' : 'Map Legend:'}</span>
              <div className="flex flex-wrap items-center gap-4 text-[11px]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A27]" /> {isId ? 'Klinik Eco' : 'Eco Clinic'}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> {isId ? 'Habitat Orangutan' : 'Orangutan Habitat'}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> {isId ? 'Persemaian Bibit' : 'Tree Nursery'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Selected Location Detail Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[28px] border border-[#EBEBE8] shadow-2xs space-y-6">
            <div className="relative h-48 rounded-2xl overflow-hidden border border-[#EBEBE8]">
              <img
                src={activeLoc.image}
                alt={activeLoc.name[lang]}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#2D5A27] text-white text-xs font-bold px-3 py-1 rounded-full shadow-2xs">
                {activeLoc.stats[lang]}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#2D5A27] mb-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isId ? 'Lokasi Terpilih' : 'Selected Location'}</span>
              </div>
              <h3 className="text-2xl font-normal text-[#1A1A1A] font-serif">
                {activeLoc.name[lang]}
              </h3>
              <p className="mt-3 text-sm text-[#666666] leading-relaxed">
                {activeLoc.description[lang]}
              </p>
            </div>

            {/* Quick Fact Box */}
            <div className="p-4 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8] text-xs text-[#1A1A1A] space-y-2">
              <div className="font-bold text-[#1A1A1A] flex items-center gap-1.5">
                <Info className="w-4 h-4 text-[#2D5A27]" />
                <span>{isId ? 'Fakta Ekosistem Batang Toru' : 'Batang Toru Key Fact'}</span>
              </div>
              <p className="text-[#666666]">
                {isId 
                  ? 'Batang Toru merupakan hutan hujan tropis seluas 141.749 ha yang terbagi menjadi blok barat dan timur. Menjaga konektivitas koridor hutan sangat krusial agar populasi Orangutan Tapanuli tidak mengalami inbreeding.' 
                  : 'Batang Toru is a 141,749 ha tropical rainforest divided into west and east blocks. Forest corridor connectivity is essential to prevent genetic isolated inbreeding of Tapanuli Orangutans.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
