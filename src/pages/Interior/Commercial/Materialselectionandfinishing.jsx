import React, { useEffect } from 'react';
import { 
  Layers, Box, Sparkles, ShieldCheck, 
  Leaf, Droplets, Maximize, Scissors,
  Fingerprint, Search
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

// Data
import { processItems } from '../../../Data';

const Materialselectionandfinishing = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#d4af37] selection:text-white">
      
      {/* 1. HERO: THE TACTILE CANVAS */}
      <HeroSection 
        subtitle="Surfaces, Textures & Durability"
        title="Material &"
        highlight="Finishing."
        backgroundImage="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2000&auto=format&fit=crop"
      />

      {/* 2. THE MATERIAL MANIFESTO (300 Words Content) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8 text-gray-500 text-lg leading-relaxed">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] block">Surface Engineering</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight">The Language of <br /> Raw & Refined.</h2>
            <p>
              In high-end architecture, materials are more than just finishes; they are the emotional weight of a space. At Bixbite, our <strong>Material Selection and Finishing</strong> process is a meticulous balance between aesthetic narrative and functional longevity. We curate palettes that speak to your brand’s identity, selecting only those materials that offer superior <strong>abrasion resistance, UV stability, and tactile comfort.</strong>
            </p>
            <p>
              We prioritize <strong>Sustainable Sourcing</strong> and low-VOC (Volatile Organic Compound) finishes to ensure a healthy indoor environment. Our selection includes everything from Italian engineered marbles and acoustic PET felts to nanotech-coated laminates that are fingerprint-resistant. By coordinating texture contrasts—pairing cold stones with warm timbers—we create sophisticated environments that remain timeless. Every finish is vetted for "Life-Cycle Costing," ensuring that your investment looks as pristine in a decade as it does on day one.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white border border-black/5 p-4 group">
               <img src="https://images.unsplash.com/photo-1615873968403-89e068629275?q=80&w=1500&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Material Palette" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#1a1a1a] p-12 text-white hidden lg:block border-l-4 border-[#d4af37]">
                <Search className="text-[#d4af37] mb-4" />
                <p className="text-[10px] uppercase tracking-widest leading-loose">Forensic <br /> Specification</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE BENTO GRID (Visual Texture Selection) */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[700px]">
          <div className="md:col-span-2 md:row-span-2 overflow-hidden bg-gray-100">
            <img src="https://images.unsplash.com/photo-1628592102173-b7a89e429d1f?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Stone Texture" />
          </div>
          <div className="md:col-span-2 overflow-hidden bg-gray-100">
            <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Wood Grain" />
          </div>
          <div className="overflow-hidden bg-gray-100">
            <img src="https://images.unsplash.com/photo-1541604193435-2207f2468305?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Fabric Detail" />
          </div>
          <div className="overflow-hidden bg-gray-100">
            <img src="https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Metal Finish" />
          </div>
        </div>
        <p className="text-center mt-6 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Library 2026: Curated Architectural Finishes</p>
      </section>

      {/* 4. PERFORMANCE CRITERIA (Technical Grid) */}
      <section className="py-24 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          {[
            { icon: <ShieldCheck />, title: "Durability Index", desc: "Materials tested for high-traffic commercial use (Grade 4 & 5)." },
            { icon: <Leaf />, title: "Sustainability", desc: "FSC certified timbers and recycled-content composites for LEED points." },
            { icon: <Droplets />, title: "Hygienic Surface", desc: "Anti-microbial laminates and non-porous stones for healthcare & F&B." }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="text-[#d4af37] mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">{item.icon}</div>
              <h4 className="text-[12px] font-black uppercase tracking-widest mb-4">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. REUSABLE FEATURE CARDS (Detailed Specification) */}
      <ServiceFeatureCards 
        title="Technical Curation"
        subtitle="The Material Library"
        items={[
            { icon: <Layers size={20} />, title: "Veneer & Laminate Selection", description: "Bespoke grain matching and high-pressure decorative panels for premium cabinetry." },
            { icon: <Scissors size={20} />, title: "Upholstery & Textile", description: "High-rub count Martindale fabrics with integrated fire-retardant properties." },
            { icon: <Fingerprint size={20} />, title: "Custom Metalwork", description: "PVD coated stainless steel and champagne gold accents for luxury detailing." }
        ]} 
      />

      {/* 6. THE FINISHING TOUCH (Full Width Content) */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-4xl font-serif italic text-[#d4af37] mb-8">The Science of Sampling.</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
                We believe in the power of physical samples. Every project undergoes a "Material Board Review," where physical swatches are viewed under varied lighting conditions (3000K to 6000K) to ensure chromatic consistency. This prevents "Metamerism"—where colors look different under showroom lights versus daylight.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
                {['UV Tested', 'Anti-Static', 'Impact Resistant', 'Low VOC'].map(t => (
                    <span key={t} className="text-[9px] font-black uppercase tracking-widest text-white/40">{t}</span>
                ))}
            </div>
        </div>
      </section>

      {/* 7. REUSABLE PROCESS */}
      <ServiceFeatureCards 
        title="Curation Flow"
        subtitle="The Selection Path"
        items={processItems} 
      />

      {/* 8. FAQ SECTION (REUSABLE) */}
      <FAQSection 
        title="Material Selection FAQs"
        items={[
            { q: "How do you ensure color consistency across materials?", a: "We use physical swatch matching and verify all finishes under a light box to control for metamerism." },
            { q: "Do you offer eco-friendly material options?", a: "Yes, we have a curated library of bio-composites, recycled glass surfaces, and FSC-certified woods." }
        ]} 
      />

      {/* 9. GLOBAL TRUST STRIP */}
      <section className="py-20 bg-[#FAF9F6] border-t border-black/5 opacity-40 grayscale flex justify-center gap-16 overflow-hidden">
        {['ISO 14001', 'Green Guard Gold', 'FSC Certified', 'LEED V4 Accredited'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">{t}</span>
        ))}
      </section>

      {/* 10. REUSABLE CTA */}
      <ServiceCTA 
        title="Touch the future of your interior."
        description="Book a visit to our material library for a hands-on curation session."
        buttonText="Book Curation Session"
        link="/contact"
      />

    </div>
  );
};

export default Materialselectionandfinishing;