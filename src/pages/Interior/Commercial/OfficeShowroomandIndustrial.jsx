import React, { useEffect } from 'react';
import { 
  Building2, Monitor, Users, ShieldCheck, 
  Lightbulb, Zap, Briefcase, GraduationCap,
  Layers, MousePointer
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

// Data
import { processItems } from '../../../Data';

const OfficeShowroomandIndustrial = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#d4af37] selection:text-white">
      
      {/* SECTION 1: HERO - THE ANCHOR */}
      <HeroSection 
        subtitle="Corporate & Commercial Architecture"
        title="Institutional"
        highlight="& Office Design."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
      />

      {/* SECTION 2: THE PHILOSOPHY (300 Words Content Block) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="sticky top-32 h-fit">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Strategic Framework</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight">Architecture as a <br /> Business Asset.</h2>
          </div>
          <div className="text-gray-500 text-lg leading-relaxed space-y-6">
            <p>
              In the modern landscape of commercial enterprise, the workspace is no longer just a container for employees; it is a sophisticated tool for productivity. At Bixbite, our approach to <strong>Office and Showroom design</strong> begins with a deep dive into organizational psychology. We analyze how your team moves, how light influences their circadian rhythms, and how spatial density affects collaborative output. 
            </p>
            <p>
              For <strong>institutional projects</strong>, such as universities or government facilities, we prioritize longevity and scalability. These structures must serve thousands of users while maintaining rigorous safety standards and aesthetic dignity. Our blueprints integrate <strong>advanced HVAC systems</strong>, fire safety coordination, and future-proof networking layouts that allow the building to evolve alongside technology.
            </p>
            <p>
              When designing <strong>high-end showrooms</strong>, we shift our focus to the "Customer Journey." By utilizing strategic lighting, material contrast, and acoustic control, we create immersive environments that amplify the perceived value of your products. Every square foot is engineered to guide the eye and facilitate the conversion of visitors into brand advocates.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SECTOR SPECIALIZATION (Interactive Grid) */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10">
          {[
            { 
                title: "Executive Workspaces", 
                img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
                desc: "Focusing on agile workstation geometry and acoustic privacy for modern leadership." 
            },
            { 
                title: "Flagship Showrooms", 
                img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
                desc: "The pinnacle of retail engineering, where lighting and movement create brand loyalty." 
            },
            { 
                title: "Public Institutions", 
                img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
                desc: "Designing for durability and mass-occupancy without sacrificing architectural grace." 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 group">
              <div className="aspect-square overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-1000">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-[12px] font-black uppercase tracking-widest mb-4">{item.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: THE TECHNICAL BLUEPRINT (Deep Content) */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-4xl font-serif italic text-[#d4af37]">Integrated Engineering & <br /> Safety Compliance.</h2>
            <p className="text-gray-400 leading-relaxed">
              Commercial projects require a level of technical depth that goes beyond aesthetics. We specialize in <strong>BIM (Building Information Modeling)</strong> to ensure that every electrical conduit, HVAC duct, and networking cable is mapped in a 3D digital twin before a single brick is laid. This reduces on-site errors and ensures that fire safety protocols are woven into the very fabric of the design.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-8 border-t border-white/10">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4af37] mb-2">Standards</p>
                <p className="text-sm font-bold uppercase tracking-widest">ISO 9001 & BIM Level 2</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4af37] mb-2">Execution</p>
                <p className="text-sm font-bold uppercase tracking-widest">Turnkey PMO</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 aspect-[4/3] bg-gray-800 overflow-hidden shadow-2xl">
            <img src="https://media.istockphoto.com/id/1672405474/photo/engineering-team-working-on-site.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mt5vZcOEJr0bd5hC-QnKngRr6QfCumSM4eyxnX0gpm8=" alt="Technical Drawing" className="w-full h-full object-cover opacity-60" />
          </div>
        </div>
      </section>

      {/* SECTION 5: THE PROCESS (REUSABLE COMPONENT) */}
      <ServiceFeatureCards 
        title="Project Lifecycle"
        subtitle="From Concept to Completion"
        items={processItems} 
      />

      {/* SECTION 6: ACOUSTIC & ILLUMINATION (Text Content) */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif italic mb-10">The Science of Sound & Light</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-12">
            In <strong>institutional design</strong>, acoustic treatment is paramount. Whether it is a lecture hall or a boardroom, we utilize NRC-rated materials to ensure speech clarity and noise reduction. Simultaneously, our lighting designs utilize <strong>HCL (Human Centric Lighting)</strong> technology to match the natural solar cycle, boosting employee alertness and showroom vibrancy.
          </p>
          
        </div>
      </section>

      {/* SECTION 7: EDITORIAL SHOWCASE (The Visuals) */}
      <section className="py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden group relative">
              <img src={`https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&sig=${i}`} alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-[10px] font-black uppercase tracking-widest border border-white p-4">View Case Study</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: FAQ (REUSABLE) */}
      <FAQSection 
        title="Office Design Inquiries"
        items={[
            { q: "How do you handle workspace flexibility?", a: "We use modular partitioning and floor-integrated power systems to allow rooms to reconfigure as teams grow." },
            { q: "Do you assist with material procurement?", a: "Yes, we have an elite network of vendors for high-traffic commercial grade materials and finishes." }
        ]} 
      />

      {/* SECTION 9: GLOBAL ACCREDITATION (Trust) */}
      <section className="py-20 border-t border-black/5 bg-[#FAF9F6] text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-10">Accredited Architecture Studio</p>
        <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale transition-all hover:grayscale-0">
          {['Corporate Council', 'Green Building Gold', 'ISO 9001:2025', 'BIM Accredited'].map(t => (
            <span key={t} className="text-sm font-serif italic font-bold">{t}</span>
          ))}
        </div>
      </section>

      {/* SECTION 10: THE ACTION CTA (REUSABLE) */}
      <ServiceCTA 
        title="Transform your corporate landscape."
        description="Connect with our commercial design division to schedule a site audit."
        buttonText="Book a Consultation"
        link="/contact"
      />

    </div>
  );
};

export default OfficeShowroomandIndustrial;