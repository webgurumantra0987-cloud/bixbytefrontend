import React, { useEffect } from 'react';
import { 
  ShieldCheck, FileText, HardHat, Scale, 
  AlertTriangle, CheckCircle2, Landmark, 
  Map, Ruler, Construction 
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

// Data
import { processItems } from '../../../Data';

const ComplianceWithCommercialBuilding = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#d4af37] selection:text-white">
      
      {/* 1. HERO: THE REGULATORY ANCHOR */}
      <HeroSection 
        subtitle="Safety, Ethics & Regulation"
        title="Commercial"
        highlight="Compliance."
        backgroundImage="https://images.unsplash.com/photo-1589939705384-5185138a047a?auto=format&fit=crop&q=80"
      />

      {/* 2. THE LEGAL LANDSCAPE (300 Words Content) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Regulatory Oversight</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight mb-8">Navigating Code <br /> With Confidence.</h2>
            <p>
              In the world of commercial real estate, design beauty is irrelevant if the structure does not meet <strong>National Building Codes (NBC)</strong> and local municipal bylaws. At Bixbite, our <strong>Compliance and Norms consultancy</strong> ensures that your project is built on a foundation of legal security. We bridge the gap between architectural vision and the rigid requirements of safety, accessibility, and environmental law.
            </p>
            <p>
              Our specialists conduct rigorous audits of <strong>Fire Safety Norms</strong>, High-Rise Regulations, and Occupancy Certificates (OC). We ensure that every staircase width, fire exit placement, and structural load calculation adheres to the 2026 updated standards. By integrating compliance early in the design phase, we prevent costly legal delays, fines, and retrofitting, protecting your investment from long-term liability.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-12 text-white">
            <Scale className="text-[#d4af37] w-12 h-12 mb-8" />
            <h3 className="text-2xl font-serif italic mb-6">Zero-Risk Protocol</h3>
            <div className="space-y-4">
              {[
                "NBC 2026 Standard Alignment",
                "Fire NOC Coordination",
                "ADA/Universal Accessibility",
                "Environmental Clearance (EC)"
              ].map((norm) => (
                <div key={norm} className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <CheckCircle2 size={16} className="text-[#d4af37]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{norm}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SAFETY & ACCESSIBILITY DIAGRAM (Visual) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-black/5 p-4">
            
            <p className="text-center mt-6 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                Technical Schematic: Fire Refuge Area & Egress Calculations
            </p>
          </div>
        </div>
      </section>

      {/* 4. CODE OF ETHICS GRID (Technical breakdown) */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          {[
            { icon: <AlertTriangle />, title: "Hazard Mitigation", desc: "Seismic resilience and structural stability audits for high-density zones." },
            { icon: <Landmark />, title: "Municipal Bylaws", desc: "Zoning compliance, FSI/FAR optimization, and setback requirements." },
            { icon: <ShieldCheck />, title: "Occupational Health", desc: "Ventilation standards, air quality norms, and ergonomic safety (OSHA)." }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="text-[#d4af37] mb-6">{item.icon}</div>
              <h4 className="text-[12px] font-black uppercase tracking-widest mb-4">{item.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. REUSABLE SERVICE CARDS (The Audit Steps) */}
      <ServiceFeatureCards 
        title="Audit Spectrum"
        subtitle="Compliance Layers"
        items={[
            { icon: <FileText size={20} />, title: "Documentation Review", description: "Verifying all blueprints against current government mandates before submission." },
            { icon: <Map size={20} />, title: "Site Inspections", description: "On-site verification of material quality and structural alignment with plans." },
            { icon: <Construction size={20} />, title: "Structural Integrity", description: "Third-party structural stability certificates and load-bearing audits." }
        ]} 
      />

      {/* 6. FIRE SAFETY DEEP DIVE (SEO Content) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 aspect-[16/9] overflow-hidden grayscale">
                <img src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Fire Safety Systems" />
            </div>
            <div className="lg:col-span-5">
                <h3 className="text-4xl font-serif italic mb-8">Integrated Fire <br /> Suppression Systems.</h3>
                <p className="text-gray-500 leading-relaxed mb-10">
                    We coordinate with specialized MEP engineers to ensure that fire hydrants, sprinkler systems, and smoke detectors are not just installed, but optimized for the specific occupancy load of your commercial facility.
                </p>
                <div className="space-y-4">
                    {['Flame Retardant Materials', 'Smoke Extraction Logic', 'Emergency Lighting Pathways'].map(t => (
                        <div key={t} className="flex items-center gap-3">
                            <CheckCircle2 size={14} className="text-[#d4af37]" />
                            <span className="text-[10px] font-black uppercase tracking-widest">{t}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 7. REUSABLE PROCESS SECTION */}
      <ServiceFeatureCards 
        title="Approval Workflow"
        subtitle="The Legal Journey"
        items={processItems} 
      />

      {/* 8. FAQ SECTION (REUSABLE) */}
      <FAQSection 
        title="Compliance & Legal FAQs"
        items={[
            { q: "What is the NBC 2026 update?", a: "The 2026 update includes stricter guidelines for electric vehicle (EV) charging safety and higher earthquake-resistance standards for commercial towers." },
            { q: "Do you handle the paperwork for Fire NOC?", a: "Yes, we handle the technical documentation and liaison required to secure Fire Department clearances." }
        ]} 
      />

      {/* 9. CERTIFICATION TRUST STRIP */}
      <section className="py-20 bg-[#FAF9F6] border-t border-black/5 flex flex-wrap justify-center gap-12 opacity-40 grayscale">
        {['Licensed Structural Engineer', 'Certified Safety Auditor', 'Green Building Accredited'].map(t => (
            <p key={t} className="text-[10px] font-black uppercase tracking-[0.4em]">{t}</p>
        ))}
      </section>

      {/* 10. REUSABLE CTA */}
      <ServiceCTA 
        title="Secure your project's legal future."
        description="Book a comprehensive compliance audit with our certified regulatory consultants today."
        buttonText="Verify My Site"
        link="/contact"
      />

    </div>
  );
};

export default ComplianceWithCommercialBuilding;