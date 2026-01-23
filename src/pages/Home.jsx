import React, { useState, useEffect } from 'react';
import Hero from '../components/home/Hero';
import { AboutUs } from '../components/home/AboutUs';
import { StatsCounter } from '../components/home/StatsCounter'; // New
import { Services } from '../components/home/Services';
import { Process } from '../components/home/Process';           // New
import { Testimonial } from '../components/home/Testimonial';   // New
import { PartnersContact } from '../components/home/PartnersContact';
import Footer from '../components/layout/Footer';               // Recommended

const Home = () => {
  // Logic for scroll-based animations or navbar states
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-[#FAF9F6] selection:bg-[#828a1c] selection:text-white">
      {/* 1. Hero: The Visual Hook */}
      <Hero isScrolled={isScrolled} />

      {/* 2. About: The Vision & Story */}
      <AboutUs />

      {/* 3. Stats: Credibility & Impact (Dark Section) */}
      <StatsCounter />

      {/* 4. Services: Expertise Grid */}
      <Services />

      {/* 5. Process: Methodology (Light Section) */}
      <Process />

      {/* 6. Testimonial: Social Proof */}
      <Testimonial />

      {/* 7. Partners & Contact: Final CTA */}
      <PartnersContact />
      
      {/* 8. Footer: Navigation & Legal */}
      <Footer />
    </main>
  );
};

export default Home;