import React, { useEffect } from 'react';
import { 
  Building2, Monitor, Users, ShieldCheck, 
  Lightbulb, Zap, Briefcase, GraduationCap,
  Layers, MousePointer, Box, Ruler, BarChart
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const OfficeShowroomandIndustrial = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#828a1c] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <HeroSection 
        subtitle="Corporate & Commercial Architecture"
        title="Institutional"
        highlight="& Office Design."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE STRATEGIC WORKPLACE */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">01 — Strategy</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1a1a1a]">Architecture as a <span className="text-[#828a1c]">Business Asset.</span></h2>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              In the modern landscape of commercial enterprise, the workspace is no longer just a container for employees; it is a sophisticated tool for productivity. At Bixbite, our approach to <strong>Office and Showroom design</strong> begins with a deep dive into organizational psychology. We analyze how your team moves, how light influences their circadian rhythms, and how spatial density affects collaborative output. By treating the floor plan as a strategic blueprint, we ensure that your physical environment actively contributes to your bottom line.
            </p>
          </div>
          <div className="aspect-video bg-gray-100 overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80" alt="Corporate Office Strategy" className="w-full h-full object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-[#6b4411] p-8 text-white max-w-xs hidden md:block">
              <p className="text-[10px] font-black uppercase tracking-widest mb-2">Efficiency Metric</p>
              <p className="text-sm italic font-serif">Optimized layouts can improve team communication speed by up to 25%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INSTITUTIONAL SCALABILITY */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white border-y border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square bg-gray-50 overflow-hidden shadow-xl">
             <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" alt="Institutional Campus Design" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">02 — Scale</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Institutional <span className="text-[#6b4411]">Dignity.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              For <strong>institutional projects</strong>, such as universities, government centers, or healthcare facilities, we prioritize longevity and mass-occupancy management. These structures must serve thousands of users while maintaining rigorous safety standards and aesthetic dignity. Our designs utilize durable, low-maintenance materials that age gracefully, ensuring that the facility remains a community pillar for decades. We coordinate complex movement patterns to prevent congestion in high-traffic zones like lobbies and lecture halls.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SHOWROOM EXPERIENCE */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">03 — Conversion</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">The Customer <span className="text-[#828a1c]">Journey.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              High-end showrooms are stages for brand storytelling. We design immersive environments that guide the visitor's eye using <strong>Visual Merchandising Engineering</strong>. By manipulating lighting contrast and tactile finishes, we create "hot zones" that draw attention to flagship products. Acoustic control is utilized to create an atmosphere of exclusivity, allowing the customer to focus entirely on the brand experience without external distractions.
            </p>
            
          </div>
          <div className="aspect-video bg-[#1a1a1a] p-12 flex items-center justify-center">
             <div className="relative w-full h-full border border-[#828a1c]/20 flex items-center justify-center">
                <Box className="text-[#828a1c] w-20 h-20 animate-pulse" />
                <span className="absolute bottom-4 text-[10px] text-white/40 uppercase tracking-[0.5em]">Experience Mapping</span>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BIM & TECHNICAL COORDINATION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 aspect-video border border-white/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80" alt="Technical BIM Modeling" className="w-full h-full object-cover opacity-50" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">04 — Technology</span>
            <h3 className="text-4xl font-serif italic text-white">Digital Twin <span className="text-[#828a1c]">Coordination.</span></h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              Commercial projects require technical depth beyond the reach of traditional design. We utilize <strong>Building Information Modeling (BIM)</strong> to map every electrical conduit, HVAC duct, and fire suppression line. This digital twin allows us to run clash detection before construction, minimizing costly on-site delays. By integrating the technical skeleton of the building with its aesthetic skin, we deliver projects that are as functionally robust as they are visually striking.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 5: ERGONOMICS & HUMAN CENTRIC DESIGN */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">05 — Wellness</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">The Ergonomic <span className="text-[#828a1c]">Standard.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Employee well-being is directly correlated with spatial design. We implement <strong>Human-Centric Lighting (HCL)</strong> and advanced acoustic zoning to reduce office fatigue. Our furniture selection focuses on musculoskeletal health, while our layouts encourage "Active Design"—promoting movement through strategically placed collaborative hubs and standing zones. This holistic approach reduces absenteeism and fosters a culture of innovation within the workspace.
            </p>
          </div>
          <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Ergonomic Office Furniture" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 6: ACOUSTIC ENGINEERING IN LARGE SPACES */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-video shadow-xl overflow-hidden">
             <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80" alt="Acoustic Ceiling in Boardroom" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">06 — Physics</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Sonic <span className="text-[#6b4411]">Clarity.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              In institutional auditoriums and corporate boardrooms, sound management is critical. We utilize <strong>NRC-rated (Noise Reduction Coefficient)</strong> ceiling baffles and wall panels to control reverberation. By performing acoustic simulations, we ensure speech intelligibility in every corner of the room. This focus on "Invisible Architecture" ensures that your meetings and presentations are delivered with crystal-clear audio quality, regardless of the room's volume.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 7: MODULARITY & FUTURE-PROOFING */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">07 — Evolution</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Agile <span className="text-[#828a1c]">Environments.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Business needs evolve faster than buildings. To combat obsolescence, we design for <strong>Agile Modularity</strong>. This includes under-floor power distribution systems and demountable partitioning that allows you to reconfigure your office layout in a weekend. By future-proofing the technical infrastructure, we ensure that your facility can adapt to new technologies—from AI-integrated meeting rooms to shifting hybrid work densities—without expensive structural renovations.
            </p>
          </div>
          <div className="aspect-video bg-[#FAF9F6] border-2 border-dashed border-[#828a1c]/30 flex items-center justify-center overflow-hidden">
             <div className="grid grid-cols-3 gap-4 p-8">
                {[1,2,3,4,5,6].map(i => <div key={i} className="w-12 h-12 bg-[#828a1c]/10 rounded border border-[#828a1c]/20" />)}
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SUSTAINABLE COMMERCIAL OPERATIONS */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#FAF9F6]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 aspect-square max-h-[500px] overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Green Office Design" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">08 — Responsibility</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Carbon-Smart <span className="text-[#828a1c]">Corporate.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Sustainability is no longer optional in corporate governance. We specify low-VOC materials and <strong>Energy-Star certified</strong> HVAC systems to lower your operational carbon footprint. Our designs maximize natural daylight harvesting through high-performance glazing, reducing the need for artificial lighting during core business hours. By achieving LEED or IGBC certifications for our commercial projects, we help Bixbite clients enhance their ESG (Environmental, Social, and Governance) scores.
            </p>
          </div>
        </div>
      </section>

      {/* KPI STRIP */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-12 text-center md:text-left">
          {[
            { label: "BIM Grade", val: "Level 2" },
            { label: "Standard", val: "ISO 9001" },
            { label: "Sustainability", val: "LEED Gold" },
            { label: "Occupancy", val: "Agile Ready" }
          ].map((kpi, i) => (
            <div key={i}>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">{kpi.label}</p>
              <p className="text-3xl font-serif italic text-[#828a1c]">{kpi.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Commercial Design FAQs"
        items={[
            { q: "How do you manage phased renovations?", a: "We create a 'Swing Space' strategy that allows business operations to continue in one zone while renovation proceeds in another, minimizing downtime." },
            { q: "Can institutional designs be upgraded for future tech?", a: "Yes, we install high-capacity 'backbone' cabling and accessible ceiling trays that allow for hardware upgrades without breaking walls." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Transform your corporate landscape."
        description="Book a technical site audit with our commercial design division to redefine your operational space."
        buttonText="Book Site Audit"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['Corporate Council Member', 'ISO 9001:2026', 'LEED Gold Certified', 'BIM Accredited Studio'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default OfficeShowroomandIndustrial;