import React, { useEffect } from 'react';
import { 
  Layers, Box, Sparkles, ShieldCheck, 
  Leaf, Droplets, Maximize, Scissors,
  Fingerprint, Search, Palette, Microscope
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const Materialselectionandfinishing = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#828a1c] selection:text-white">
      
      {/* 1. HERO: THE TACTILE CANVAS */}
      <HeroSection 
        subtitle="Surfaces, Textures & Durability"
        title="Material &"
        highlight="Finishing."
        backgroundImage="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2000&auto=format&fit=crop"
      />

      {/* SECTION 1: THE MATERIAL MANIFESTO */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">01 — Sensory Weight</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1a1a1a]">The Language of <span className="text-[#828a1c]">Raw & Refined.</span></h2>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              In high-end architecture, materials are more than just finishes; they are the emotional weight of a space. At Bixbite, our <strong>Material Selection and Finishing</strong> process is a meticulous balance between aesthetic narrative and functional longevity. We curate palettes that speak to your brand’s identity, selecting only those surfaces that offer superior <strong>abrasion resistance, UV stability, and tactile comfort.</strong> Every stone, veneer, and textile is chosen to tell a cohesive story of luxury and resilience.
            </p>
          </div>
          <div className="aspect-video bg-gray-100 overflow-hidden shadow-2xl relative group">
            <img src="https://images.unsplash.com/photo-1615873968403-89e068629275?q=80&w=1500&auto=format&fit=crop" alt="Architectural Material Palette" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
            <div className="absolute inset-0 border-[20px] border-white/5 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PERFORMANCE BEYOND AESTHETICS */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white border-y border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square bg-gray-50 overflow-hidden shadow-xl">
             <img src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80" alt="Technical Surface Testing" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">02 — Engineering</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Surface <span className="text-[#6b4411]">Forensics.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              We subject our material library to rigorous performance criteria. For high-traffic commercial environments, we specify materials with high <strong>Martindale rub counts</strong> and Grade 5 abrasion resistance. Our engineering team evaluates "Life-Cycle Costing," ensuring that the materials we select today won't require costly retrofitting in five years. From nanotech-coated laminates that repel fingerprints to anti-static flooring for IT zones, we optimize for the technical demands of 2026.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 3: SUSTAINABILITY & ETHICAL SOURCING */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">03 — Ecology</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Ethical <span className="text-[#828a1c]">Materiality.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Bixbite prioritizes <strong>Sustainable Sourcing</strong> as a core mandate. We curate a library of FSC-certified timbers, recycled-content composites, and low-VOC (Volatile Organic Compound) finishes. By choosing materials that contribute to LEED and IGBC points, we help our clients build assets that are ecologically responsible. Our "Green-Guard" vetted finishes ensure that indoor air quality is protected, eliminating the off-gassing associated with standard industrial coatings.
            </p>
          </div>
          <div className="aspect-video bg-gray-200 shadow-2xl overflow-hidden">
             <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80" alt="Sustainable Wood Sourcing" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 4: THE SCIENCE OF METAMERISM */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 aspect-video border border-white/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80" alt="Material Light Lab" className="w-full h-full object-cover opacity-60" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">04 — Chromatics</span>
            <h3 className="text-4xl font-serif italic">Chromatic <span className="text-[#828a1c]">Consistency.</span></h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              A major pitfall in finishing is "Metamerism"—where a color looks perfect in a showroom but fails under site lighting. We conduct forensic <strong>Material Board Reviews</strong> under various Kelvin temperatures (3000K to 6000K). By simulating actual site conditions in our light lab, we guarantee that your marble veins and veneer tones remain consistent across the morning sun and evening artificial lighting, ensuring visual harmony 24/7.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 5: NANOTECH & SMART SURFACES */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">05 — Innovation</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">The Nano <span className="text-[#828a1c]">Revolution.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              We integrate <strong>Smart Materials</strong> that offer more than just beauty. Our catalog includes thermal-healing laminates that allow small scratches to be repaired with simple heat, and anti-microbial surfaces for healthcare and F&B zones. By utilizing PVD (Physical Vapor Deposition) coatings for metal accents, we achieve luxury champagne-gold and bronze finishes that are significantly harder and more scratch-resistant than traditional electroplating.
            </p>
          </div>
          <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-2xl p-8 flex items-center justify-center">
             <Microscope className="w-24 h-24 text-[#828a1c] opacity-20" />
          </div>
        </div>
      </section>

      {/* SECTION 6: ACOUSTIC MATERIALITY */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-video shadow-xl overflow-hidden">
             <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" alt="Acoustic Fabric Wall Panels" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">06 — Sonics</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Absorptive <span className="text-[#6b4411]">Textiles.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Materials aren't just seen; they are heard. We select finishing textiles based on their <strong>NRC (Noise Reduction Coefficient)</strong> ratings. In open-plan commercial environments, we utilize PET-felt acoustic panels and high-pile carpets to minimize reverberation. This ensures that even in a bustling workspace, the acoustic environment remains calm and productive, pairing visual luxury with sonic comfort.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 7: BESPOKE VENEER & STONE CURATION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">07 — Hand-Selection</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Grain <span className="text-[#828a1c]">& Vein Matching.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              For high-end cabinetry and lobbies, we perform "Live Curation." We travel to the yards to hand-select marble slabs and wood veneers, ensuring <strong>book-matching and slip-matching</strong> that creates seamless visual flow. This level of detailing—where the grain of a cabinet continues perfectly across multiple panels—is the signature of a Bixbite finish. We treat natural materials with the reverence they deserve, ensuring their organic beauty is optimized for your space.
            </p>
          </div>
          <div className="aspect-video bg-[#FAF9F6] border-2 border-dashed border-[#828a1c]/30 flex items-center justify-center overflow-hidden">
             <img src="https://images.unsplash.com/photo-1628592102173-b7a89e429d1f?auto=format&fit=crop&q=80" alt="Marble Vein Detail" className="w-full h-full object-cover opacity-80" />
          </div>
        </div>
      </section>

      {/* SECTION 8: HYGIENE & ANTI-MICROBIAL FINISHES */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#FAF9F6]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square max-h-[500px] overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" alt="Hygienic Hospital Grade Surfaces" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">08 — Safety</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Bacteriostatic <span className="text-[#828a1c]">Surfaces.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              In post-2020 design, hygiene is a performance metric. We specify <strong>Non-Porous Stones</strong> and silver-ion infused laminates that inhibit the growth of bacteria and mold. Our selections for F&B and healthcare sectors are vetted for resistance to industrial-grade cleaning agents, ensuring that even under high-frequency sanitization, the finish remains intact and beautiful. We bridge the gap between clinical safety and residential warmth.
            </p>
          </div>
        </div>
      </section>

      {/* DATA STRIP: TECHNICAL PERFORMANCE */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-12">
          {[
            { label: "Rub Count", val: "100k+ Martindale" },
            { label: "VOC Level", val: "< 0.5 mg/m³" },
            { label: "UV Stability", val: "Grade 5+" },
            { label: "Fire Rating", val: "Class-A" }
          ].map((kpi, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">{kpi.label}</p>
              <p className="text-3xl font-serif italic text-[#828a1c]">{kpi.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Material Selection FAQs"
        items={[
            { q: "What is the difference between a veneer and a laminate?", a: "Veneer is a thin layer of real wood offering organic warmth, while laminate is a high-durability synthetic panel offering consistency and scratch resistance." },
            { q: "Do you provide fire-rated upholstery?", a: "Yes, all our commercial-grade textiles are treated to meet BS 5852 or equivalent fire safety standards." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Touch the future of your interior."
        description="Book a technical curation session in our material library to define your project's tactile soul."
        buttonText="Book Curation Session"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['FSC Certified', 'Green Guard Gold', 'LEED Accredited', 'ISO 9001 Sourcing'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default Materialselectionandfinishing;