/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { HeroSection } from './components/sections/HeroSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WhyChooseSection } from './components/sections/WhyChooseSection';
import type { ServiceId } from './types/domain';

const OBSERVED_SECTION_IDS = ['home', 'about', 'services', 'projects', 'contact'] as const;

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [preselectedService, setPreselectedService] = useState<ServiceId | ''>('');

  const scrollToSection = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  }, []);

  const handleStartProject = useCallback(
    (serviceId?: ServiceId) => {
      if (serviceId) {
        setPreselectedService(serviceId);
      }
      scrollToSection('contact');
    },
    [scrollToSection]
  );

  useEffect(() => {
    const elements = OBSERVED_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: 0.01,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#050814] text-slate-100">
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onStartProject={() => handleStartProject()}
      />

      <main className="flex-1">
        <HeroSection
          onExploreServices={() => scrollToSection('services')}
          onStartProject={handleStartProject}
        />

        <AboutSection />

        <ServicesSection onSelectServiceForEnquiry={handleStartProject} />

        <PortfolioSection onRequestSimilarBuild={handleStartProject} />

        <WhyChooseSection />

        <ContactSection preselectedService={preselectedService} />
      </main>

      <Footer onNavigate={scrollToSection} onSelectService={handleStartProject} />
    </div>
  );
}
