import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { HEPI_INFO, IMPACT_METRICS } from '../data/hepiData';
import { 
  HeartHandshake, 
  Trees, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Activity, 
  Sparkles,
  ShieldCheck,
  Sprout
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenDonate: () => void;
}

const HERO_SLIDES = [
  {
    id: 'forest-canopy',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=85&w=1920',
    title: {
      id: 'Bentang Alam Hutan Hujan Batang Toru',
      en: 'The Batang Toru Rainforest Landscape'
    },
    subtitle: {
      id: '141.749 hektar benteng terakhir dan satu-satunya habitat Orangutan Tapanuli di bumi.',
      en: '141,749 hectares: the last stronghold and sole habitat of the Tapanuli Orangutan on Earth.'
    },
    tag: {
      id: 'Ekosistem Hutan Hujan Primer',
      en: 'Primary Rainforest Ecosystem'
    }
  },
  {
    id: 'sapling-nurseries',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=85&w=1920',
    title: {
      id: 'Persemaian Bibit Pohon Asli Komunitas',
      en: 'Community Native Tree Nurseries'
    },
    subtitle: {
      id: 'Ribuan bibit pohon Meranti dan Kapur dirawat warga desa sebagai tabungan kesehatan dan reboisasi koridor.',
      en: 'Thousands of native saplings nurtured by villagers as healthcare savings and corridor reforestation.'
    },
    tag: {
      id: 'Tabungan Kesehatan Berbasis Pohon',
      en: 'Sapling-Based Healthcare Savings'
    }
  },
  {
    id: 'healthcare-clinic',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=85&w=1920',
    title: {
      id: 'Layanan Medis Non-Tunai Barter Bibit',
      en: 'Non-Cash Healthcare Barter Clinic'
    },
    subtitle: {
      id: 'Masyarakat lingkar hutan mendapatkan pengobatan berkualitas tanpa harus menebang pohon demi biaya medis.',
      en: 'Rainforest communities receive high-quality medical care without having to cut trees for medical emergencies.'
    },
    tag: {
      id: 'Pendekatan Planetary Health',
      en: 'Planetary Health Innovation'
    }
  },
  {
    id: 'orangutan-guardian',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=85&w=1920',
    title: {
      id: 'Menjaga ~800 Orangutan Tapanuli Tersisa',
      en: 'Guarding the ~800 Remaining Tapanuli Orangutans'
    },
    subtitle: {
      id: 'Kolaborasi konservasi bersama komunitas, patroli ranger mantan pembalak, dan pemulihan koridor jelajah.',
      en: 'Community-led conservation, reformed-logger ranger patrols, and movement corridor restoration.'
    },
    tag: {
      id: 'Konservasi Satwa Kritis',
      en: 'Critically Endangered Species'
    }
  }
];

export const Hero: React.FC<HeroProps> = ({ lang, onOpenDonate }) => {
  const isId = lang === 'id';
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section className="relative bg-[#1A1A1A] overflow-hidden">
      {/* Visual Slider Container */}
      <div className="relative h-[560px] sm:h-[640px] lg:h-[720px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title[lang]}
              className="w-full h-full object-cover"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-black/40 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Slide Content Overlay */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-white space-y-4 sm:space-y-6">
              
              {/* Category / Location Pill */}
              <motion.div
                key={`tag-${currentSlide}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-emerald-300 text-xs font-semibold border border-white/20"
              >
                <Trees className="w-3.5 h-3.5 text-emerald-300" />
                <span>{HERO_SLIDES[currentSlide].tag[lang]}</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-normal font-serif text-white tracking-tight leading-[1.15]"
              >
                {HERO_SLIDES[currentSlide].title[lang]}
              </motion.h1>

              {/* Subtitle / Narrative */}
              <motion.p
                key={`sub-${currentSlide}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-lg text-neutral-200 leading-relaxed font-normal max-w-xl"
              >
                {HERO_SLIDES[currentSlide].subtitle[lang]}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <button
                  onClick={onOpenDonate}
                  className="px-6 py-3.5 rounded-full bg-[#2D5A27] hover:bg-[#22461E] text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-lg hover:shadow-xl group"
                >
                  <HeartHandshake className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition-transform" />
                  <span>{isId ? 'Donasi & Sponsor Bibit / Ternak' : 'Donate & Sponsor Trees / Livestock'}</span>
                </button>

                <a
                  href="#programs"
                  className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md font-semibold text-sm transition-all border border-white/30"
                >
                  {isId ? 'Jelajahi 9 Program Kami' : 'Explore 9 Core Programs'}
                </a>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Carousel Navigation Controls (Arrows & Dots) */}
        <div className="absolute bottom-6 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center space-x-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === idx
                      ? 'w-8 h-2.5 bg-emerald-400'
                      : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Impact Metrics Bar */}
      <div className="bg-[#2D5A27] text-white py-6 border-t border-b border-emerald-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center md:text-left">
            {IMPACT_METRICS.slice(0, 4).map((metric) => (
              <div key={metric.id} className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-normal font-serif text-white tracking-tight flex items-center justify-center md:justify-start gap-1">
                  <span>{metric.prefix || ''}</span>
                  <span>{metric.numericValue.toLocaleString('id-ID')}</span>
                  <span>{metric.suffix || ''}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-emerald-200">
                  {metric.label[lang]}
                </div>
                <p className="text-[11px] text-emerald-100/80 line-clamp-1 hidden sm:block">
                  {metric.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
