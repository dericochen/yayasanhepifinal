import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { 
  Sprout, 
  Stethoscope, 
  Trees, 
  Sparkles, 
  Check, 
  HeartHandshake,
  ShieldCheck,
  Calculator,
  Smile,
  Baby,
  Activity,
  Trees as ForestIcon
} from 'lucide-react';

interface HealthTreeCalculatorProps {
  lang: Language;
  onSponsorTrees: (count: number, amount: number) => void;
}

interface ServiceItem {
  id: string;
  name: { id: string; en: string };
  baseSaplings: number;
  description: { id: string; en: string };
  icon: string;
}

const COST_PER_SAPLING = 1000; // Rp 1.000 per pohon/bibit (Rp 100.000 = 100 pohon)

const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'pohon-meranti',
    name: { id: 'Pohon Meranti (Shorea spp.)', en: 'Meranti Tree (Shorea spp.)' },
    baseSaplings: 20,
    description: { id: 'Pohon kanopi utama hutan Batang Toru penyerap karbon tinggi.', en: 'Primary canopy tree of Batang Toru with high carbon absorption.' },
    icon: 'Trees'
  },
  {
    id: 'pohon-kapur',
    name: { id: 'Pohon Kapur (Dryobalanops)', en: 'Kapur Rainforest Tree' },
    baseSaplings: 30,
    description: { id: 'Pohon kayu endemik pelindung lereng & sumber pakan fauna.', en: 'Endemic slope protector tree & wildlife habitat supporter.' },
    icon: 'Sprout'
  },
  {
    id: 'pohon-durian',
    name: { id: 'Pohon Durian Hutan & Buah-buahan', en: 'Wild Fruit & Durian Trees' },
    baseSaplings: 25,
    description: { id: 'Sumber makanan utama Orangutan Tapanuli & satwa langka.', en: 'Primary food source for Tapanuli Orangutan & wildlife.' },
    icon: 'Trees'
  },
  {
    id: 'pohon-beringin',
    name: { id: 'Pohon Beringin Koridor (Ficus)', en: 'Ficus Corridor Tree' },
    baseSaplings: 25,
    description: { id: 'Pohon penyambung koridor migrasi Orangutan antar blok hutan.', en: 'Connects migration corridors for orangutans between forest blocks.' },
    icon: 'Sprout'
  }
];

export const HealthTreeCalculator: React.FC<HealthTreeCalculatorProps> = ({
  lang,
  onSponsorTrees
}) => {
  const isId = lang === 'id';

  // State
  const [selectedServices, setSelectedServices] = useState<Record<string, number>>({
    'general-consult': 1,
    'dental-care': 1
  });
  const [villageStatus, setVillageStatus] = useState<'green' | 'yellow' | 'red'>('green');
  const [customDonationInput, setCustomDonationInput] = useState<number>(100000);

  // Multiplier calculation
  const discountMultiplier = villageStatus === 'green' ? 0.3 : villageStatus === 'yellow' ? 0.6 : 1.0;

  // Calculate totals
  const rawSaplingTotal = Object.entries(selectedServices).reduce((sum: number, [serviceId, qty]: [string, number]) => {
    const service = CLINIC_SERVICES.find((s) => s.id === serviceId);
    return sum + (service ? service.baseSaplings * qty : 0);
  }, 0);

  const finalSaplingsNeeded = Math.max(1, Math.round(rawSaplingTotal * discountMultiplier));
  const reforestedAreaM2 = finalSaplingsNeeded * 4; // 1 sapling covers ~4m² forest corridor
  const donorSponsorshipCost = finalSaplingsNeeded * COST_PER_SAPLING; // Rp 2.000 / sapling (100rb = 50 bibit)

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) => {
      const current = prev[serviceId] || 0;
      if (current > 0) {
        const next = { ...prev };
        delete next[serviceId];
        return next;
      } else {
        return { ...prev, [serviceId]: 1 };
      }
    });
  };

  const updateQuantity = (serviceId: string, delta: number) => {
    setSelectedServices((prev) => {
      const current = prev[serviceId] || 0;
      const updated = Math.max(1, current + delta);
      return { ...prev, [serviceId]: updated };
    });
  };

  // Preset button handler for testing custom amounts like 100k -> 50 saplings
  const handleSimulateAmount = (amount: number) => {
    setCustomDonationInput(amount);
  };

  const saplingsFromCustomInput = Math.floor(customDonationInput / COST_PER_SAPLING);

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-[#F1F3F0] border-b border-[#EBEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#2D5A27] text-xs font-semibold mb-3 border border-[#EBEBE8]">
            <Calculator className="w-4 h-4 text-[#2D5A27]" />
            <span>{isId ? 'Simulasi Barter Non-Tunai' : 'Non-Cash Barter Calculator'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] font-serif tracking-tight">
            {isId ? 'Kalkulator Berobat Dengan Bibit Pohon' : 'Healthcare-for-Trees Calculator'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#666666]">
            {isId 
              ? 'Simulasikan bagaimana warga desa di Batang Toru membina hutan dengan bibit pohon (1 Pohon = Rp 1.000).' 
              : 'Simulate how Batang Toru villagers sponsor trees (1 Tree = Rp 1,000).'}
          </p>
        </div>

        {/* Quick Simulator Preset Bar */}
        <div className="bg-white p-6 rounded-[24px] border border-[#EBEBE8] shadow-2xs max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#2D5A27]" />
              {isId ? 'Simulasi Cepat Nominal Sponsor:' : 'Quick Nominal Simulation:'}
            </span>
            <span className="text-xs text-[#2D5A27] font-semibold">
              Rp 1.000 = 1 Pohon
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { amount: 10000, label: '10 Pohon' },
              { amount: 50000, label: '50 Pohon' },
              { amount: 100000, label: '100 Pohon ✨' },
              { amount: 250000, label: '250 Pohon' }
            ].map((preset) => (
              <button
                key={preset.amount}
                type="button"
                onClick={() => handleSimulateAmount(preset.amount)}
                className={`py-2.5 px-3 rounded-full text-xs font-bold transition-all border ${
                  customDonationInput === preset.amount
                    ? 'bg-[#2D5A27] text-white border-[#2D5A27] shadow-2xs'
                    : 'bg-[#F1F3F0] text-[#1A1A1A] border-[#EBEBE8] hover:bg-[#EBEBE8]'
                }`}
              >
                Rp {preset.amount.toLocaleString('id-ID')} ({preset.label})
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={customDonationInput}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="p-3.5 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8] flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2">
                <Sprout className="w-4 h-4 text-[#2D5A27]" />
                <span className="text-[#1A1A1A] font-medium">
                  {isId 
                    ? `Donasi Rp ${customDonationInput.toLocaleString('id-ID')} menanam` 
                    : `Donation of Rp ${customDonationInput.toLocaleString('id-ID')} plants`}
                </span>
              </div>
              <span className="font-extrabold text-[#2D5A27] text-sm">
                {saplingsFromCustomInput} {isId ? 'Bibit Meranti/Kapur' : 'Native Saplings'}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Interactive Controls */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[28px] border border-[#EBEBE8] shadow-2xs space-y-8">
            
            {/* Step 1: Village Green Status */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2D5A27]" />
                  <span>1. {isId ? 'Pilih Status Hijau Desa' : 'Select Village Status'}</span>
                </label>
                <span className="text-xs text-[#666666]">
                  {isId ? 'Insentif Komitmen Konservasi' : 'Conservation Incentive'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setVillageStatus('green')}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    villageStatus === 'green'
                      ? 'border-[#2D5A27] bg-[#F1F3F0] ring-1 ring-[#2D5A27]'
                      : 'border-[#EBEBE8] bg-white hover:border-[#2D5A27]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#2D5A27] text-white">
                      {isId ? 'Desa Hijau' : 'Green Village'}
                    </span>
                    <span className="text-xs font-extrabold text-[#2D5A27]">-70%</span>
                  </div>
                  <div className="text-xs text-[#1A1A1A] mt-2 font-medium">
                    {isId ? 'Nol Penebangan Kayu' : 'Zero Logging Commitment'}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setVillageStatus('yellow')}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    villageStatus === 'yellow'
                      ? 'border-[#d97706] bg-[#fef3c7] ring-1 ring-[#d97706]'
                      : 'border-[#EBEBE8] bg-white hover:border-[#d97706]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#d97706] text-white">
                      {isId ? 'Desa Kuning' : 'Yellow Village'}
                    </span>
                    <span className="text-xs font-extrabold text-[#d97706]">-40%</span>
                  </div>
                  <div className="text-xs text-[#1A1A1A] mt-2 font-medium">
                    {isId ? 'Masa Transisi Stop Log' : 'Transitioning Village'}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setVillageStatus('red')}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    villageStatus === 'red'
                      ? 'border-[#833556] bg-[#833556]/5 ring-1 ring-[#833556]'
                      : 'border-[#EBEBE8] bg-white hover:border-[#833556]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#833556] text-white">
                      {isId ? 'Desa Merah' : 'Red Village'}
                    </span>
                    <span className="text-xs font-extrabold text-[#833556]">0%</span>
                  </div>
                  <div className="text-xs text-[#1A1A1A] mt-2 font-medium">
                    {isId ? 'Masih Ada Logging' : 'Active Logging Zone'}
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Select Services Needed */}
            <div>
              <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-3">
                2. {isId ? 'Pilih Jenis Bibit Pohon Konservasi' : 'Select Tree Species / Planting Packages'}
              </label>

              <div className="space-y-3">
                {CLINIC_SERVICES.map((service) => {
                  const isSelected = !!selectedServices[service.id];
                  const qty = selectedServices[service.id] || 1;

                  return (
                    <div
                      key={service.id}
                      className={`p-4 rounded-2xl border transition-all ${
                        isSelected 
                          ? 'border-[#2D5A27] bg-[#F1F3F0]' 
                          : 'border-[#EBEBE8] bg-white hover:border-[#2D5A27]/30'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 cursor-pointer flex-1" onClick={() => toggleService(service.id)}>
                          <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                            isSelected ? 'bg-[#2D5A27] border-[#2D5A27] text-white' : 'border-[#EBEBE8] bg-white'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-3" />}
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-[#1A1A1A]">
                              {service.name[lang]}
                            </h4>
                            <p className="text-xs text-[#666666] mt-0.5">
                              {service.description[lang]}
                            </p>
                            <div className="mt-1.5 text-xs font-semibold text-[#2D5A27]">
                              Base: {service.baseSaplings} {isId ? 'Bibit Pohon / Pasien' : 'Saplings / Patient'}
                            </div>
                          </div>
                        </div>

                        {/* Quantity Counter */}
                        {isSelected && (
                          <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-full border border-[#EBEBE8] shrink-0">
                            <button
                              type="button"
                              onClick={() => updateQuantity(service.id, -1)}
                              className="w-6 h-6 rounded-full bg-[#F1F3F0] hover:bg-[#EBEBE8] text-xs font-bold text-[#1A1A1A]"
                            >
                              -
                            </button>
                            <span className="text-sm font-bold text-[#1A1A1A] w-6 text-center">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(service.id, 1)}
                              className="w-6 h-6 rounded-full bg-[#F1F3F0] hover:bg-[#EBEBE8] text-xs font-bold text-[#1A1A1A]"
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Side: Live Animated Calculation Result Card */}
          <div className="lg:col-span-5 bg-[#2D5A27] text-white p-6 sm:p-8 rounded-[28px] shadow-2xs relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Trees className="w-64 h-64 text-white" />
            </div>

            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <span className="text-xs font-bold tracking-widest text-emerald-200 uppercase">
                {isId ? 'Hasil Sponsor Pohon HePI' : 'HePI Tree Sponsorship Summary'}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white border border-white/10">
                {villageStatus === 'green' ? (isId ? 'Diskon Desa Hijau 70%' : '70% Green Discount') : villageStatus === 'yellow' ? (isId ? 'Diskon 40%' : '40% Discount') : (isId ? 'Tarif Penuh' : 'Full Rate')}
              </span>
            </div>

            {/* Big Stat Display with Motion Animation */}
            <div className="text-center py-6 bg-black/20 rounded-2xl border border-white/10">
              <div className="text-xs text-emerald-200 uppercase font-bold tracking-wider mb-1">
                {isId ? 'Total Bibit Pohon Dibutuhkan' : 'Total Tree Saplings Needed'}
              </div>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={finalSaplingsNeeded}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                  className="text-5xl sm:text-6xl font-normal font-serif text-white tracking-tight flex items-center justify-center gap-2"
                >
                  <Sprout className="w-10 h-10 text-emerald-200" />
                  <span>{finalSaplingsNeeded}</span>
                  <span className="text-xl font-normal text-emerald-200">
                    {isId ? 'bibit' : 'saplings'}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Animated Saplings Visualizer Grid */}
              <div className="mt-4 flex flex-wrap justify-center gap-1.5 px-4 max-h-24 overflow-y-auto">
                {Array.from({ length: Math.min(finalSaplingsNeeded, 50) }).map((_, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.01, type: 'spring' }}
                    className="p-1 rounded-md bg-white/10 text-emerald-200"
                    title={`Bibit Pohon Ke-${idx + 1}`}
                  >
                    <Sprout className="w-3.5 h-3.5" />
                  </motion.div>
                ))}
              </div>

              <p className="text-xs text-emerald-100 mt-3 px-4">
                {isId 
                  ? 'Atau setara dengan bibit tanaman lokal hasil bibitan warga.' 
                  : 'Or equivalent in native tree saplings grown by villagers.'}
              </p>
            </div>

            {/* Impact Highlights */}
            <div className="space-y-3 text-sm border-t border-b border-white/20 py-4">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-emerald-100">{isId ? 'Estimasi Luas Koridor Ditanami:' : 'Estimated Replanted Corridor:'}</span>
                <span className="font-bold text-emerald-200">{reforestedAreaM2} m²</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-emerald-100">{isId ? 'Jenis Pohon Diterima:' : 'Accepted Native Species:'}</span>
                <span className="font-semibold text-white">Meranti, Kapur, Durian Hutan</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-emerald-100">{isId ? 'Estimasi Biaya Sponsor Donatur:' : 'Donor Sponsorship Equivalent:'}</span>
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={donorSponsorshipCost}
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    className="font-extrabold text-white"
                  >
                    Rp {donorSponsorshipCost.toLocaleString('id-ID')}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Call to action for Donors */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => onSponsorTrees(finalSaplingsNeeded, donorSponsorshipCost)}
                className="w-full py-3.5 px-4 rounded-full bg-white text-[#2D5A27] hover:bg-emerald-50 font-bold text-sm shadow-2xs transition-all flex items-center justify-center gap-2 text-center"
              >
                <HeartHandshake className="w-5 h-5 text-[#2D5A27]" />
                <span>
                  {isId 
                    ? `Sponsori ${finalSaplingsNeeded} Bibit Ini (Rp ${donorSponsorshipCost.toLocaleString('id-ID')})` 
                    : `Sponsor These ${finalSaplingsNeeded} Saplings (Rp ${donorSponsorshipCost.toLocaleString('id-ID')})`}
                </span>
              </button>
              <p className="text-[11px] text-center text-emerald-100/80">
                {isId 
                  ? 'Bantuan donasi Anda menanggung biaya operasional obat medis klinik dan perawatan bibit oleh warga.' 
                  : 'Your donation covers clinic medicine costs and tree nursery care.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

