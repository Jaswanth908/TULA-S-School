import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingActions } from './components/layout/FloatingActions';
import { HeroSection } from './components/sections/HeroSection';
import { QuickEnquiryBanner } from './components/sections/QuickEnquiryBanner';
import { PhilosophySection } from './components/sections/PhilosophySection';
import { StatsBentoGrid } from './components/sections/StatsBentoGrid';
import { AwardsBookSection } from './components/sections/AwardsBookSection';
import { RankingsShowcase } from './components/sections/RankingsShowcase';
import { SportsAcademy } from './components/sections/SportsAcademy';
import { InfluentialGuests } from './components/sections/InfluentialGuests';
import { VirtualTourSection } from './components/sections/VirtualTourSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { AdmissionJourney } from './components/sections/AdmissionJourney';
import { Collaborations } from './components/sections/Collaborations';
import { FaqSection } from './components/sections/FaqSection';
import { EnquiryModal } from './components/sections/EnquiryModal';

export const AppContent: React.FC = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryModalOpen(true);
  const closeEnquiry = () => setIsEnquiryModalOpen(false);

  const scrollToVirtualTour = () => {
    const el = document.getElementById('campus-life');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-tis-light-bg dark:bg-tis-dark-bg text-slate-900 dark:text-slate-100 selection:bg-tis-crimson selection:text-white transition-colors duration-300 relative">
      {/* 1. Custom Mouse Follower Cursor (Feature 1) */}
      <CustomCursor />

      {/* 2. Top Scroll Progress Indicator (Feature 4) */}
      <ScrollProgressBar />

      {/* 3. Header & Navigation with Theme Switcher (Feature 3) */}
      <Navbar
        onOpenEnquiry={openEnquiry}
        onOpenVirtualTour={scrollToVirtualTour}
      />

      {/* Main Content Sections with Scroll-Triggered Reveals (Feature 2) */}
      <main className="flex-1">
        <HeroSection
          onOpenEnquiry={openEnquiry}
          onOpenVirtualTour={scrollToVirtualTour}
        />

        <QuickEnquiryBanner onSuccess={() => {}} />

        <StatsBentoGrid onOpenEnquiry={openEnquiry} />

        {/* 3D Interactive Awards Book with 6 Turnable Pages */}
        <AwardsBookSection />

        <PhilosophySection />

        <RankingsShowcase />

        <SportsAcademy onOpenEnquiry={openEnquiry} />

        <VirtualTourSection onOpenEnquiry={openEnquiry} />

        <InfluentialGuests />

        <AdmissionJourney onOpenEnquiry={openEnquiry} />

        <TestimonialsSection />

        <Collaborations />

        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenEnquiry={openEnquiry}
        onOpenVirtualTour={scrollToVirtualTour}
      />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenEnquiry={openEnquiry} />

      {/* Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={closeEnquiry}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
