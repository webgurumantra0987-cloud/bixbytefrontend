import React, { useEffect } from 'react';
import { 
  ShieldCheck, FileText, HardHat, Scale, 
  AlertTriangle, CheckCircle2, Landmark, 
  Map, Ruler, Construction, ShieldAlert, BadgeCheck
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const ComplianceWithCommercialBuilding = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#828a1c] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <HeroSection 
        subtitle="Safety, Ethics & Regulation"
        title="Commercial"
        highlight="Compliance."
        backgroundImage="https://images.unsplash.com/photo-1589939705384-5185138a047a?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE REGULATORY MANIFESTO */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">01 — Authority</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1a1a1a]">Navigating Code With <span className="text-[#828a1c]">Confidence.</span></h2>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              In the high-stakes world of commercial real estate, architectural beauty is secondary to legal viability. At Bixbite, our <strong>Compliance and Norms consultancy</strong> serves as the bridge between visionary design and the rigid requirements of municipal law. We ensure that every blueprint is not just an aesthetic triumph, but a legally fortified asset. By aligning with the <strong>National Building Code (NBC) 2026</strong> from day one, we eliminate the risk of work-stop orders and long-term litigation.
            </p>
          </div>
          <div className="aspect-video bg-gray-100 overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?auto=format&fit=crop&q=80" alt="Regulatory Documentation and Blueprints" className="w-full h-full object-cover" />
            <div className="absolute top-0 right-0 bg-[#828a1c] p-6 text-white">
                <Scale size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FIRE SAFETY & EGRESS LOGIC */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">02 — Life Safety</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Integrated Fire <span className="text-[#6b4411]">Suppression.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Fire safety is the most scrutinized aspect of commercial compliance. We coordinate with elite MEP engineers to design <strong>Integrated Fire Suppression Systems</strong> that exceed standard mandates. Our approach includes calculating occupancy loads to optimize exit-width ratios and designing smoke extraction logic that maintains visibility during emergencies. We don't just secure a Fire NOC; we design a resilient life-safety network that protects both human capital and physical property.
            </p>
            
          </div>
          <div className="order-1 lg:order-2 aspect-square bg-gray-50 overflow-hidden shadow-xl">
             <img src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&q=80" alt="Industrial Fire Safety Systems" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
      </section>

      {/* SECTION 3: MUNICIPAL BYLAWS & FSI */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-video bg-gray-200 shadow-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" alt="Urban Zoning and Skyscrapers" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">03 — Urban Zoning</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Optimizing <span className="text-[#828a1c]">FSI & FAR.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Maximizing your <strong>Floor Space Index (FSI)</strong> while adhering to setback requirements is a delicate mathematical balance. Our consultants specialize in municipal bylaws and urban planning regulations, ensuring you utilize every square inch of permissible land without breaching zoning boundaries. We navigate the complexities of Transferable Development Rights (TDR) and Floor Area Ratio (FAR) to enhance your project's commercial ROI while maintaining 100% legal transparency.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 4: STRUCTURAL STABILITY & SEISMIC CODE */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">04 — Structural Ethics</span>
            <h3 className="text-4xl font-serif italic">Seismic Resilience <span className="text-[#828a1c]">& Stability.</span></h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              Structural integrity is a non-negotiable ethical mandate. Bixbite partners with certified structural auditors to perform <strong>Seismic Vulnerability Assessments</strong>. In high-density commercial zones, we ensure your building exceeds the lateral load requirements for earthquake resistance. Our "Zero-Failure" protocol includes third-party structural stability certifications, protecting stakeholders from the catastrophic consequences of engineering oversight.
            </p>
          </div>
          <div className="aspect-video border border-white/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb193005f?auto=format&fit=crop&q=80" alt="Construction Structural Framework" className="w-full h-full object-cover opacity-50" />
          </div>
        </div>
      </section>

      {/* SECTION 5: ENVIRONMENTAL & SUSTAINABILITY NORMS */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1449156059431-789c1d1a6fca?auto=format&fit=crop&q=80" alt="Sustainable Building Design" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">05 — Ecology</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Green Building <span className="text-[#828a1c]">Accreditation.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Modern compliance extends beyond safety to ecological responsibility. We secure <strong>Environmental Clearances (EC)</strong> and align projects with IGBC or LEED standards. From rainwater harvesting mandates to sewage treatment plant (STP) specifications, we ensure your commercial facility meets the rigorous sustainability norms of 2026. This not only fulfills legal requirements but also qualifies your asset for high-value green financing and tax incentives.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: UNIVERSAL ACCESSIBILITY (ADA) */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">06 — Inclusivity</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Universal <span className="text-[#6b4411]">Accessibility.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              A compliant building is one that is accessible to everyone. We implement <strong>Universal Design Principles</strong>, ensuring full adherence to ADA (Americans with Disabilities Act) and equivalent local mandates. Our audits cover barrier-free access, tactile flooring, braille signage, and automated ingress systems. By designing for inclusivity, we expand the reach of your commercial space and fulfill the ethical core of modern building norms.
            </p>
            
          </div>
          <div className="order-1 lg:order-2 aspect-video shadow-xl overflow-hidden">
             <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80" alt="Modern Accessible Office Entrance" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 7: OCCUPATIONAL HEALTH (OSHA) */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-video bg-gray-100 overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80" alt="Healthy Office Environment" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">07 — Wellness</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Air Quality <span className="text-[#828a1c]">& Hygiene.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              The health of occupants is now a primary compliance vertical. We audit HVAC systems to ensure they meet <strong>ASHRAE ventilation standards</strong>, preventing "Sick Building Syndrome." Our consultancy covers acoustic comfort, indoor air quality (IAQ) sensors, and ergonomic safety norms. In the post-2020 era, these health-focused regulations are essential for securing premium corporate tenants and ensuring long-term operational viability.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: THE HANDOVER & OC PROTOCOL */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#FAF9F6]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">08 — The Final Step</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">The Occupancy <span className="text-[#828a1c]">Certificate.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              The journey ends with the successful acquisition of the <strong>Occupancy Certificate (OC)</strong>. We perform a final forensic audit to ensure that the "As-Built" structure perfectly matches the approved plans. Any deviations are corrected before the final municipal inspection, guaranteeing a seamless transition from construction site to functional business asset. With Bixbite, you don't just finish a building; you inherit a legally bulletproof masterpiece.
            </p>
          </div>
          <div className="aspect-square max-h-[500px] overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80" alt="Legal Handover and Certificates" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Regulatory & Legal FAQs"
        items={[
            { q: "What is NBC 2026?", a: "The NBC 2026 update introduces stricter fire containment standards and mandates for integrated EV charging infrastructure in commercial basements." },
            { q: "How do you handle Fire NOC renewals?", a: "Our team provides periodic safety audits to ensure your systems remain compliant for the annual renewal of Fire Department No-Objection Certificates." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Secure your asset's legal foundation."
        description="Book a technical compliance audit with our certified regulatory consultants today."
        buttonText="Verify My Project"
        link="/contact"
      />

      {/* CERTIFICATION TRUST STRIP */}
      <section className="py-20 bg-white border-t border-black/5 flex flex-wrap justify-center gap-16 opacity-40 grayscale hover:opacity-100 transition-all">
         {['Licensed Structural Engineer', 'Certified Fire Auditor', 'LEED AP Accredited'].map(t => (
             <p key={t} className="text-[10px] font-black uppercase tracking-[0.5em] text-[#1a1a1a]">{t}</p>
         ))}
      </section>

    </div>
  );
};

export default ComplianceWithCommercialBuilding;