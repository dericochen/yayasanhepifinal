import React, { useState } from 'react';
import { Language } from './types';
import { HEPI_INFO } from './data/hepiData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { HealthTreeCalculator } from './components/HealthTreeCalculator';
import { EcosystemMap } from './components/EcosystemMap';
import { MediaAwards } from './components/MediaAwards';
import { TransparencySection } from './components/TransparencySection';
import { ContactVolunteer } from './components/ContactVolunteer';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { SearchModal } from './components/SearchModal';
import { AdminTransactionReportModal } from './components/AdminTransactionReportModal';

export default function App() {
  const [lang, setLang] = useState<Language>('id');

  // Modals state
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Calculator prefill state for donation modal
  const [sponsorshipPrefill, setSponsorshipPrefill] = useState<{ count?: number; amount?: number; notes?: string }>({});

  const handleSponsorTrees = (count: number, amount: number, notes?: string) => {
    setSponsorshipPrefill({ count, amount, notes });
    setDonateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FCFCFB] text-[#1A1A1A] font-sans selection:bg-[#2D5A27] selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenDonate={() => {
          setSponsorshipPrefill({});
          setDonateModalOpen(true);
        }}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Hero Section with Forest Imagery Carousel */}
      <Hero
        lang={lang}
        onOpenDonate={() => {
          setSponsorshipPrefill({});
          setDonateModalOpen(true);
        }}
      />

      {/* About Us Narrative, Vision & Mission, History, and HePI Board */}
      <AboutSection lang={lang} />

      {/* 9 Core Flagship Programs (3x3 Grid) */}
      <ProgramsSection 
        lang={lang}
        onOpenDonate={() => {
          setSponsorshipPrefill({});
          setDonateModalOpen(true);
        }}
      />

      {/* Interactive Tree Sapling & Dynamic Livestock Calculator */}
      <HealthTreeCalculator
        lang={lang}
        onSponsorTrees={handleSponsorTrees}
      />

      {/* Batang Toru Ecosystem Map & 7 Partner Villages */}
      <EcosystemMap lang={lang} />

      {/* News, Field Dispatches, and Global Awards */}
      <MediaAwards lang={lang} />

      {/* Governance, Transparency, Audited Reports & FAQ */}
      <TransparencySection lang={lang} />

      {/* Contact & Volunteer Inquiries */}
      <ContactVolunteer lang={lang} />

      {/* Footer with 7 Strategic Partners, Quarterly Newsletter, Bank Details, Admin Link */}
      <Footer
        lang={lang}
        onOpenDonate={() => {
          setSponsorshipPrefill({});
          setDonateModalOpen(true);
        }}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Donation Modal (Bank Transfer Only, Secured with Input Validation) */}
      <DonationModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        lang={lang}
        prefilledSaplings={sponsorshipPrefill.count}
        prefilledAmount={sponsorshipPrefill.amount}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        lang={lang}
      />

      {/* Admin Transaction Report & Portal Modal */}
      <AdminTransactionReportModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        lang={lang}
      />

    </div>
  );
}
