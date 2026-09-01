import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, LivestockPackage } from '../types';
import { LIVESTOCK_PACKAGES } from '../data/hepiData';
import { 
  Sprout, 
  Trees, 
  Sparkles, 
  Check, 
  HeartHandshake, 
  ShieldCheck, 
  Calculator, 
  Info,
  Calendar,
  Layers,
  Egg
} from 'lucide-react';

interface HealthTreeCalculatorProps {
  lang: Language;
  onSponsorTrees: (count: number, amount: number, notes?: string) => void;
}

interface TreeItem {
  id: string;
  name: { id: string; en: string };
  baseSaplings: number;
  description: { id: string; en: string };
  co2AbsorptionKgPerYear: number;
}

const COST_PER_SAPLING = 1000; // Rp 1.000 per bibit pohon

const TREE_SPECIES: TreeItem[] = [
  {
    id: 'pohon-meranti',
    name: { id: 'Pohon Meranti (Shorea spp.)', en: 'Meranti Canopy Tree (Shorea spp.)' },
    baseSaplings: 25,
    description: { id: 'Pohon kanopi raksasa hutan primer Batang Toru penyerap karbon tinggi.', en: 'Towering primary canopy tree of Batang Toru with high carbon sequestration.' },
    co2AbsorptionKgPerYear: 28
  },
  {
    id: 'pohon-kapur',
    name: { id: 'Pohon Kapur (Dryobalanops aromatica)', en: 'Kapur Rainforest Hardwood' },
    baseSaplings: 30,
    description: { id: 'Pohon endemik penahan erosi lereng terjal dan penampung air tanah alami.', en: 'Endemic slope soil-binder tree and natural aquifer replenisher.' },
    co2AbsorptionKgPerYear: 25
  },
  {
    id: 'pohon-durian-hutan',
    name: { id: 'Pohon Durian Hutan & Buah-buahan', en: 'Wild Fruit & Durian Trees' },
    baseSaplings: 20,
    description: { id: 'Pohon pakan utama Orangutan Tapanuli & satwa frugivora hutan awan.', en: 'Key feeding tree for Tapanuli Orangutans and frugivore rainforest species.' },
    co2AbsorptionKgPerYear: 22
  },
  {
    id: 'pohon-beringin',
    name: { id: 'Pohon Beringin Koridor (Ficus spp.)', en: 'Ficus Corridor Tree' },
    baseSaplings: 15,
    description: { id: 'Pohon penyambung koridor kanopi jelajah Orangutan antar blok hutan.', en: 'Canopy corridor connector facilitating Orangutan movements between fragmented blocks.' },
    co2AbsorptionKgPerYear: 32
  }
];

export const HealthTreeCalculator: React.FC<HealthTreeCalculatorProps> = ({
  lang,
  onSponsorTrees
}) => {
  const isId = lang === 'id';

  // Mode: 'trees' vs 'livestock'
  const [calcTab, setCalcTab] = useState<'trees' | 'livestock'>('trees');

  // Tree Mode State
  const [selectedTrees, setSelectedTrees] = useState<Record<string, number>>({
    'pohon-meranti': 2,
    'pohon-kapur': 1
  });
  const [villageStatus, setVillageStatus] = useState<'green' | 'yellow' | 'red'>('green');
  const [customDonationInput, setCustomDonationInput] = useState<number>(100000);

  // Livestock Mode State
  const [selectedLivestockPkg, setSelectedLivestockPkg] = useState<LivestockPackage>(LIVESTOCK_PACKAGES[1]); // 5 hens default
  const [livestockQuantity, setLivestockQuantity] = useState<number>(1);

  // Multiplier calculation for trees
  const discountMultiplier = villageStatus === 'green' ? 0.3 : villageStatus === 'yellow' ? 0.6 : 1.0;

  const rawSaplingTotal = Object.entries(selectedTrees).reduce((sum: number, [treeId, qty]: [string, number]) => {
    const item = TREE_SPECIES.find((t) => t.id === treeId);
    return sum + (item ? item.baseSaplings * qty : 0);
  }, 0);

  const finalSaplingsNeeded = Math.max(1, Math.round(rawSaplingTotal * discountMultiplier));
  const reforestedAreaM2 = finalSaplingsNeeded * 4; // ~4m² forest corridor per sapling
  const donorSponsorshipCost = finalSaplingsNeeded * COST_PER_SAPLING;
  const estimatedCo2Kg = finalSaplingsNeeded * 25; // average 25kg CO2 per tree/year

  const toggleTree = (treeId: string) => {
    setSelectedTrees((prev) => {
      const current = prev[treeId] || 0;
      if (current > 0) {
        const next = { ...prev };
        delete next[treeId];
        return next;
      } else {
        return { ...prev, [treeId]: 1 };
      }
    });
  };

  const updateTreeQuantity = (treeId: string, delta: number) => {
    setSelectedTrees((prev) => {
      const current = prev[treeId] || 0;
      const updated = Math.max(1, current + delta);
      return { ...prev, [treeId]: updated };
    });
  };

  const handleSimulateAmount = (amount: number) => {
    setCustomDonationInput(amount);
  };

  const saplingsFromCustomInput = Math.floor(customDonationInput / COST_PER_SAPLING);

  // Livestock total
  const totalLivestockCost = selectedLivestockPkg.priceIdr * livestockQuantity;

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-[#FCFCFB] border-b border-[#EBEBE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-xs font-semibold mb-3 border border-[#EBEBE8]">
            <Calculator className="w-4 h-4 text-[#2D5A27]" />
            <span>{isId ? 'Kalkulator Dampak & Paket Donasi' : 'Impact & Package Calculator'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] font-serif tracking-tight">
            {isId ? 'Kalkulator Pohon & Donasi Ternak' : 'Tree & Eco-Livestock Calculator'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#666666] leading-relaxed">
            {isId 
              ? 'Hitung dampak langsung donasi Anda dalam bentuk bibit pohon kanopi atau paket ternak produktif untuk mantan pembalak liar.' 
              : 'Calculate the direct impact of your contribution in native canopy saplings or productive eco-livestock packages for reformed loggers.'}
          </p>

          {/* Mode Switcher Tabs */}
          <div className="inline-flex items-center p-1.5 bg-[#F1F3F0] rounded-full border border-[#EBEBE8] mt-6">
            <button
              onClick={() => setCalcTab('trees')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                calcTab === 'trees'
                  ? 'bg-[#2D5A27] text-white shadow-2xs'
                  : 'text-[#666666] hover:text-[#1A1A1A]'
              }`}
            >
              <Trees className="w-4 h-4" />
              <span>{isId ? '1. Bibit Pohon & Barter Kesehatan' : '1. Tree Saplings & Health Barter'}</span>
            </button>
            <button
              onClick={() => setCalcTab('livestock')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                calcTab === 'livestock'
                  ? 'bg-[#2D5A27] text-white shadow-2xs'
                  : 'text-[#666666] hover:text-[#1A1A1A]'
              }`}
            >
              <Egg className="w-4 h-4" />
              <span>{isId ? '2. Paket Ternak Ayam & Kambing' : '2. Poultry & Livestock Packages'}</span>
            </button>
          </div>
        </div>

        {/* TAB 1: TREE CALCULATOR */}
        {calcTab === 'trees' && (
          <div className="space-y-8">
            {/* Quick Simulator Preset Bar */}
            <div className="bg-white p-6 rounded-[24px] border border-[#EBEBE8] shadow-2xs max-w-3xl mx-auto space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#2D5A27]" />
                  {isId ? 'Simulasi Cepat Nominal Bibit Pohon:' : 'Quick Tree Donation Simulation:'}
                </span>
                <span className="text-xs text-[#2D5A27] font-semibold">
                  Rp 1.000 = 1 Bibit Pohon Asli
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { amount: 25000, label: '25 Pohon' },
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
                        ? `Donasi Rp ${customDonationInput.toLocaleString('id-ID')} mendanai penanaman` 
                        : `Donation of Rp ${customDonationInput.toLocaleString('id-ID')} funds`}
                    </span>
                  </div>
                  <span className="font-extrabold text-[#2D5A27] text-sm">
                    {saplingsFromCustomInput} {isId ? 'Bibit Pohon Hutan' : 'Native Rainforest Saplings'}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Tree Main Calculation Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: Species & Village Status */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[28px] border border-[#EBEBE8] shadow-2xs space-y-6">
                
                {/* Step 1: Village Status */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#2D5A27]" />
                      <span>1. {isId ? 'Status Hijau Desa Binaan' : 'Village Conservation Status'}</span>
                    </label>
                    <span className="text-xs text-[#2D5A27] font-medium">
                      {isId ? 'Insentif Diskon Biaya' : 'Incentive Discount'}
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
                        {isId ? 'Nol Pembalakan Liar' : 'Zero Illegal Logging'}
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
                        {isId ? 'Masa Transisi Stop Log' : 'Transition Phase'}
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

                {/* Step 2: Species selection */}
                <div>
                  <label className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-3">
                    2. {isId ? 'Pilih Jenis Pohon Kanopi & Buah Hutan' : 'Select Tree Species to Sponsor'}
                  </label>

                  <div className="space-y-3">
                    {TREE_SPECIES.map((tree) => {
                      const isSelected = !!selectedTrees[tree.id];
                      const qty = selectedTrees[tree.id] || 1;

                      return (
                        <div
                          key={tree.id}
                          className={`p-4 rounded-2xl border transition-all ${
                            isSelected 
                              ? 'border-[#2D5A27] bg-[#F1F3F0]' 
                              : 'border-[#EBEBE8] bg-white hover:border-[#2D5A27]/30'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3 cursor-pointer flex-1" onClick={() => toggleTree(tree.id)}>
                              <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                                isSelected ? 'bg-[#2D5A27] border-[#2D5A27] text-white' : 'border-[#EBEBE8] bg-white'
                              }`}>
                                {isSelected && <Check className="w-3.5 h-3.5 stroke-3" />}
                              </div>
                              <div>
                                <h4 className="text-sm sm:text-base font-bold text-[#1A1A1A]">
                                  {tree.name[lang]}
                                </h4>
                                <p className="text-xs text-[#666666] mt-0.5">
                                  {tree.description[lang]}
                                </p>
                                <div className="mt-1.5 flex items-center gap-3 text-xs text-[#2D5A27] font-semibold">
                                  <span>{tree.baseSaplings} {isId ? 'Bibit / Pasien' : 'Saplings / Patient'}</span>
                                  <span>•</span>
                                  <span>~{tree.co2AbsorptionKgPerYear} kg CO2/thn</span>
                                </div>
                              </div>
                            </div>

                            {isSelected && (
                              <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-full border border-[#EBEBE8] shrink-0">
                                <button
                                  type="button"
                                  onClick={() => updateTreeQuantity(tree.id, -1)}
                                  className="w-6 h-6 rounded-full bg-[#F1F3F0] hover:bg-[#EBEBE8] text-xs font-bold text-[#1A1A1A]"
                                >
                                  -
                                </button>
                                <span className="text-sm font-bold text-[#1A1A1A] w-6 text-center">
                                  {qty}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => updateTreeQuantity(tree.id, 1)}
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

              {/* Right Side: Tree Impact Summary */}
              <div className="lg:col-span-5 bg-[#2D5A27] text-white p-6 sm:p-8 rounded-[28px] shadow-2xs space-y-6">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="text-xs font-bold tracking-widest text-emerald-200 uppercase">
                    {isId ? 'Ringkasan Barter Pohon' : 'Tree Sponsorship Summary'}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white border border-white/10">
                    {villageStatus === 'green' ? '-70% Diskon' : villageStatus === 'yellow' ? '-40% Diskon' : 'Tarif Penuh'}
                  </span>
                </div>

                <div className="text-center py-6 bg-black/20 rounded-2xl border border-white/10">
                  <div className="text-xs text-emerald-200 uppercase font-bold tracking-wider mb-1">
                    {isId ? 'Total Bibit Pohon Dihasilkan' : 'Total Tree Saplings Funded'}
                  </div>
                  <div className="text-5xl font-normal font-serif text-white tracking-tight flex items-center justify-center gap-2">
                    <Sprout className="w-9 h-9 text-emerald-200" />
                    <span>{finalSaplingsNeeded}</span>
                    <span className="text-lg font-normal text-emerald-200">
                      {isId ? 'bibit' : 'trees'}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-100 mt-2">
                    {isId ? 'Dirawat di persemaian desa & ditanam di koridor Batang Toru' : 'Nurtured in community nurseries & replanted in Batang Toru'}
                  </p>
                </div>

                {/* Impact Metrics List */}
                <div className="space-y-3 text-xs sm:text-sm border-t border-b border-white/20 py-4">
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-100">{isId ? 'Luas Koridor Hutan Ditanami:' : 'Corridor Area Replanted:'}</span>
                    <span className="font-bold text-emerald-200">{reforestedAreaM2} m²</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-100">{isId ? 'Estimasi Serapan CO2e / Tahun:' : 'Estimated CO2e Absorbed / Year:'}</span>
                    <span className="font-bold text-emerald-200">{estimatedCo2Kg.toLocaleString('id-ID')} kg CO2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-100">{isId ? 'Biaya Sponsor Donatur:' : 'Donor Sponsorship Equivalent:'}</span>
                    <span className="font-extrabold text-white text-base">
                      Rp {donorSponsorshipCost.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onSponsorTrees(finalSaplingsNeeded, donorSponsorshipCost, `Sponsor ${finalSaplingsNeeded} Bibit Pohon Hutan Batang Toru`)}
                  className="w-full py-3.5 px-4 rounded-full bg-white text-[#2D5A27] hover:bg-emerald-50 font-bold text-sm shadow-2xs transition-all flex items-center justify-center gap-2"
                >
                  <HeartHandshake className="w-5 h-5 text-[#2D5A27]" />
                  <span>
                    {isId 
                      ? `Sponsori ${finalSaplingsNeeded} Bibit (Rp ${donorSponsorshipCost.toLocaleString('id-ID')})` 
                      : `Sponsor ${finalSaplingsNeeded} Saplings (Rp ${donorSponsorshipCost.toLocaleString('id-ID')})`}
                  </span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: DYNAMIC LIVESTOCK PACKAGE CALCULATOR (4-5 Females, Yearly Updated 2026) */}
        {calcTab === 'livestock' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: Package Selection */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[28px] border border-[#EBEBE8] shadow-2xs space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#2D5A27] uppercase tracking-wider block">
                      {isId ? 'Pilihan Paket Ternak Dinamis' : 'Dynamic Eco-Livestock Packages'}
                    </span>
                    <h3 className="text-xl font-normal text-[#1A1A1A] font-serif mt-0.5">
                      {isId ? 'Pemberdayaan Ayam & Kambing Bergulir' : 'Poultry & Revolving Goat Packs'}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#F1F3F0] text-[#2D5A27] text-xs font-bold border border-[#EBEBE8]">
                    Update {selectedLivestockPkg.updatedYear}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {isId 
                    ? 'Bantuan indukan ternak diberikan kepada keluarga mantan pembalak liar untuk menghasilkan telur dan anakan bergulir, menghapuskan ketergantungan pada penebangan kayu.' 
                    : 'Productive livestock is provided to former loggers for egg nutrition and revolving offspring, eliminating reliance on timber felling.'}
                </p>

                {/* Package Cards */}
                <div className="space-y-3">
                  {LIVESTOCK_PACKAGES.map((pkg) => {
                    const isSelected = selectedLivestockPkg.id === pkg.id;
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setSelectedLivestockPkg(pkg)}
                        className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                          isSelected 
                            ? 'border-[#2D5A27] bg-[#F1F3F0] ring-1 ring-[#2D5A27]' 
                            : 'border-[#EBEBE8] bg-white hover:border-[#2D5A27]/40'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                              isSelected ? 'bg-[#2D5A27] border-[#2D5A27] text-white' : 'border-[#EBEBE8] bg-white'
                            }`}>
                              {isSelected && <Check className="w-3 h-3 stroke-3" />}
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="px-2.5 py-0.5 rounded-full bg-[#2D5A27] text-white text-[10px] font-bold uppercase">
                                  {pkg.optionLabel[lang]}
                                </span>
                                <h4 className="text-sm sm:text-base font-bold text-[#1A1A1A]">
                                  {pkg.name[lang]}
                                </h4>
                              </div>
                              <p className="text-xs text-[#666666]">
                                {pkg.description[lang]}
                              </p>
                              <div className="text-xs text-[#2D5A27] font-semibold flex items-center gap-1.5 pt-1">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>{pkg.impact[lang]}</span>
                              </div>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <div className="text-base font-extrabold text-[#2D5A27]">
                              Rp {pkg.priceIdr.toLocaleString('id-ID')}
                            </div>
                            <div className="text-[10px] text-[#666666]">
                              {isId ? '/ paket komplit' : '/ complete pack'}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Package Quantity Selector */}
                <div className="p-4 rounded-2xl bg-[#F1F3F0] border border-[#EBEBE8] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">
                    {isId ? 'Jumlah Paket yang Ingin Disponsori:' : 'Number of Packages to Sponsor:'}
                  </span>
                  <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-full border border-[#EBEBE8]">
                    <button
                      type="button"
                      onClick={() => setLivestockQuantity((q) => Math.max(1, q - 1))}
                      className="w-7 h-7 rounded-full bg-[#F1F3F0] hover:bg-[#EBEBE8] text-sm font-bold text-[#1A1A1A]"
                    >
                      -
                    </button>
                    <span className="text-base font-extrabold text-[#1A1A1A] w-6 text-center">
                      {livestockQuantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setLivestockQuantity((q) => q + 1)}
                      className="w-7 h-7 rounded-full bg-[#F1F3F0] hover:bg-[#EBEBE8] text-sm font-bold text-[#1A1A1A]"
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>

              {/* Right: Livestock Summary Card */}
              <div className="lg:col-span-5 bg-[#2D5A27] text-white p-6 sm:p-8 rounded-[28px] shadow-2xs space-y-6">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="text-xs font-bold tracking-widest text-emerald-200 uppercase">
                    {isId ? 'Ringkasan Donasi Ternak' : 'Livestock Sponsorship Summary'}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white border border-white/10">
                    Tahun {selectedLivestockPkg.updatedYear}
                  </span>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-normal font-serif text-white">
                    {selectedLivestockPkg.name[lang]}
                  </h4>
                  <p className="text-xs text-emerald-100 leading-relaxed">
                    {selectedLivestockPkg.impact[lang]}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/20 border border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-emerald-100">
                    <span>{isId ? 'Harga Satuan Paket (2026):' : 'Unit Package Price (2026):'}</span>
                    <span className="font-bold text-white">Rp {selectedLivestockPkg.priceIdr.toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex justify-between items-center text-emerald-100">
                    <span>{isId ? 'Jumlah Keluarga Penerima:' : 'Recipient Families:'}</span>
                    <span className="font-bold text-emerald-200">{livestockQuantity} {isId ? 'Keluarga' : 'Households'}</span>
                  </div>
                  <div className="flex justify-between items-center text-emerald-100">
                    <span>{isId ? 'Estimasi Betina + Jantan:' : 'Female + Male Count:'}</span>
                    <span className="font-bold text-white">
                      {selectedLivestockPkg.femaleCount * livestockQuantity} Betina + {selectedLivestockPkg.maleCount * livestockQuantity} Jantan
                    </span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex justify-between items-center text-sm">
                    <span className="font-bold text-white">{isId ? 'Total Donasi:' : 'Total Donation:'}</span>
                    <span className="text-xl font-extrabold text-emerald-300">
                      Rp {totalLivestockCost.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onSponsorTrees(livestockQuantity, totalLivestockCost, `Donasi ${livestockQuantity} ${selectedLivestockPkg.name.id} (Rp ${totalLivestockCost.toLocaleString('id-ID')})`)}
                  className="w-full py-3.5 px-4 rounded-full bg-white text-[#2D5A27] hover:bg-emerald-50 font-bold text-sm shadow-2xs transition-all flex items-center justify-center gap-2"
                >
                  <HeartHandshake className="w-5 h-5 text-[#2D5A27]" />
                  <span>
                    {isId 
                      ? `Sponsori ${livestockQuantity} Paket Ternak Ini` 
                      : `Sponsor ${livestockQuantity} Livestock Package(s)`}
                  </span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
