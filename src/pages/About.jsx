import React, { useEffect } from "react";
import { ArrowUpRight, Ruler, ShieldCheck, Users, Sparkles, Target, Eye } from "lucide-react";
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-[#FAF9F6] min-h-screen selection:bg-[#d4af37] selection:text-white font-sans scroll-smooth">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
            alt="Luxury Architecture" 
            className="w-full h-full object-cover opacity-50 scale-110 animate-[pulse_10s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#d4af37] text-xs font-black uppercase tracking-[0.6em] mb-6 block">
              Established 2012
            </span>
            <h1 className="text-white text-5xl md:text-8xl font-serif italic mb-8 leading-[1.1]">
              Defining the <span className="text-[#d4af37] not-italic">Art</span> of <br />
              Modern Living.
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 opacity-80">
              Bixbite is an award-winning architecture and interior studio dedicated to crafting bespoke spaces that blend technical precision with soul-stirring aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION (Split Layout) --- */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
              <div className="group">
                <div className="flex items-center gap-4 text-[#d4af37] mb-6">
                  <Target size={24} />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#1a1a1a]">Our Mission</span>
                </div>
                <h3 className="text-[#1a1a1a] text-3xl md:text-4xl font-serif italic mb-6">Transforming dreams into reality.</h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                  To eliminate the friction between design and inhabitability through our <strong>Turnkey approach</strong>, delivering integrity and luxury in every square foot.
                </p>
              </div>
              <div className="group">
                <div className="flex items-center gap-4 text-[#d4af37] mb-6">
                  <Eye size={24} />
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#1a1a1a]">Our Vision</span>
                </div>
                <h3 className="text-[#1a1a1a] text-3xl md:text-4xl font-serif italic mb-6">Setting the global benchmark.</h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                  To be the gold standard for **sustainable opulence**, creating landmarks that remain modern and relevant for generations to come.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80" 
                  alt="Architecture Planning" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 border border-gray-100 shadow-sm hidden md:block">
                <p className="text-[#d4af37] text-4xl font-serif italic">150+</p>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Projects Built</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REDESIGNED FUNDAMENTAL PRINCIPLES (Best UI Layout) --- */}
      <section className="py-32 bg-[#1a1a1a] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
            
            {/* Left: Sticky Image Container */}
            <div className="relative hidden lg:block h-full min-h-[600px]">
              <div className="sticky top-32 w-full h-[600px] overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" 
                  alt="Execution Detail" 
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Right: Content List */}
            <div className="flex flex-col justify-center py-10">
              <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">
                The Pillars
              </span>
              <h2 className="text-4xl md:text-6xl font-serif italic mb-16 leading-tight">
                Fundamental <br /> Principles.
              </h2>
              
              <div className="space-y-0">
                {[
                  { icon: Ruler, title: "Architectural Precision", desc: "Using BIM and 3D visualization to ensure millimeter-perfect execution before construction begins." },
                  { icon: Users, title: "Human-Centric Design", desc: "Your lifestyle dictates the flow. We create spaces that function as beautifully as they look." },
                  { icon: ShieldCheck, title: "Unmatched Reliability", desc: "From site analysis to interior styling, we provide a single point of accountability." },
                  { icon: Sparkles, title: "Aesthetic Innovation", desc: "Merging raw materiality with refined elegance to create timeless, iconic environments." }
                ].map((item, idx) => (
                  <div key={idx} className="group border-t border-white/10 py-10 hover:bg-white/[0.02] transition-colors px-4 -mx-4">
                    <div className="flex items-start gap-8">
                      <item.icon className="text-[#d4af37] shrink-0 group-hover:scale-110 transition-transform" size={28} />
                      <div>
                        <h4 className="text-xl font-bold uppercase tracking-widest mb-3 group-hover:text-[#d4af37] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-base leading-relaxed max-w-md">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEO NARRATIVE SECTION --- */}
      <section className="py-32 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-[#1a1a1a] text-3xl font-serif italic mb-10 leading-relaxed">
            "We provide more than blueprints. We provide a commitment to excellence, ensuring your legacy is carved in stone."
          </h3>
          <div className="w-20 h-[1px] bg-[#d4af37] mx-auto mb-10"></div>
          <p className="text-gray-600 text-lg leading-loose">
            BIXBITE is a premier <strong>Full-Service Architectural Studio</strong>. Our legacy is built on a decade of delivering <strong>Luxury Modern Villas</strong> and commercial landmarks across the globe. By integrating <strong>Turnkey Project Management</strong> with avant-garde interior design, we offer a seamless transition from conceptual sketches to finished masterpieces.
          </p>
        </div>
      </section>


    </div>
  );
};

export default About;