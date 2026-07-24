import React, { useState } from 'react';
import { Language } from './types';
import { HEPI_INFO } from './data/hepiData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { HealthTreeCalculator } from './components/HealthTreeCalculator';
import { EcosystemMap } from './components/EcosystemMap';
import { MediaAwards } from './components/MediaAwards';
import { TransparencySection } from './components/TransparencySection';
import { ContactVolunteer } from './components/ContactVolunteer';
import { Footer } from './components/Footer';
import { DonationModal } from './components/DonationModal';
import { SearchModal } from './components/SearchModal';

import { 
  HeartPulse, 
  Trees, 
  ShieldCheck, 
  Sprout, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const isId = lang === 'id';

  // Modals state
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Calculator prefill state for donation modal
  const [sponsorshipPrefill, setSponsorshipPrefill] = useState<{ count?: number; amount?: number }>({});

  const handleSponsorTrees = (count: number, amount: number) => {
    setSponsorshipPrefill({ count, amount });
    setDonateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#1f2937] font-sans selection:bg-[#833556] selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenDonate={() => {
          setSponsorshipPrefill({});
          setDonateModalOpen(true);
        }}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        lang={lang}
        onOpenDonate={() => {
          setSponsorshipPrefill({});
          setDonateModalOpen(true);
        }}
      />

      {/* About Us Narrative Highlight & Team Showcase */}
      <AboutSection lang={lang} />

      {/* Interactive Barter Calculator */}
      <HealthTreeCalculator
        lang={lang}
        onSponsorTrees={handleSponsorTrees}
      />

      {/* Interactive Ecosystem Map */}
      <EcosystemMap lang={lang} />

      {/* Media & Awards */}
      <MediaAwards lang={lang} />

      {/* Governance & Transparency */}
      <TransparencySection lang={lang} />

      {/* Contact & Volunteer */}
      <ContactVolunteer lang={lang} />

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenDonate={() => {
          setSponsorshipPrefill({});
          setDonateModalOpen(true);
        }}
      />

      {/* Donation Modal */}
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

    </div>
  );
}
