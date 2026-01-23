import React, { useEffect } from 'react';
import { 
  ClipboardCheck, Calendar, HardHat, TrendingUp, 
  BarChart3, Truck, ShieldCheck, Users,
  Clock, Briefcase, Activity, CheckCircle2
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const ProjectManagementAndExecution = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#828a1c] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <HeroSection 
        subtitle="Turnkey Delivery & Oversight"
        title="Project Management"
        highlight="& Execution."
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2000&auto=format&fit=crop"
      />

      {/* SECTION 1: THE OPERATIONS MANIFESTO */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">01 — Reality Engineering</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1a1a1a]">Design is Vision. <br /><span className="text-[#828a1c]">Execution is Reality.</span></h2>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              The gap between a beautiful blueprint and a finished building is bridged by <strong>Project Management and Execution</strong>. At Bixbite, we view execution as a discipline of absolute precision. Our management framework is built on three non-negotiables: <strong>Timeline Integrity, Budget Transparency, and Quality Benchmarking.</strong> We act as the single point of accountability, coordinating dozens of specialized vendors—from MEP engineers to bespoke furniture artisans—to ensure your project moves forward without friction or administrative fatigue.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-12 text-white relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <TrendingUp size={120} />
            </div>
            <h3 className="text-2xl font-serif italic mb-10 text-[#828a1c]">The Efficiency Metrics</h3>
            <div className="space-y-8 relative z-10">
                {[
                    { label: "On-Time Delivery", val: "98.5%", sub: "Critical Path Adherence" },
                    { label: "Vendor Vetting", val: "Tier-1 Only", sub: "Global Network" },
                    { label: "Safety Record", val: "Zero-Incident", sub: "ISO 45001 Standards" }
                ].map((stat, i) => (
                    <div key={i} className="group/item">
                        <div className="flex justify-between items-end border-b border-white/10 pb-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{stat.label}</span>
                            <span className="text-[#828a1c] font-serif italic text-2xl">{stat.val}</span>
                        </div>
                        <p className="text-[8px] uppercase tracking-tighter mt-2 text-white/30">{stat.sub}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TIMELINE GOVERNANCE (GANTT & CPM) */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white border-y border-gray-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">02 — Scheduling</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Critical Path <span className="text-[#6b4411]">Governance.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Time is the most expensive commodity in construction. We utilize <strong>Critical Path Method (CPM)</strong> scheduling and GANTT visualizations to map every dependency within the project lifecycle. By identifying potential bottlenecks—such as long-lead imported materials or municipal permit approvals—months in advance, we maintain a proactive rather than reactive stance. Our digital tracking dashboards provide clients with a real-time window into the site’s progress, ensuring total alignment between the boardroom and the job site.
            </p>
            
          </div>
          <div className="order-1 lg:order-2 aspect-video bg-gray-50 overflow-hidden shadow-xl border border-black/5">
             <img src="https://images.unsplash.com/photo-1531834304451-494aba1ca5a1?auto=format&fit=crop&q=80" alt="Construction Management Board" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
      </section>

      {/* SECTION 3: PROCUREMENT & SUPPLY CHAIN LOGISTICS */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-video bg-gray-200 shadow-2xl overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" alt="Global Supply Chain Logistics" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#6b4411]/20 group-hover:bg-transparent transition-all duration-700"></div>
          </div>
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">03 — Sourcing</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Global Supply <span className="text-[#828a1c]">Orchestration.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Bixbite’s procurement advantage lies in our direct relationships with Tier-1 manufacturers. We manage the entire <strong>Supply Chain Logistics</strong>, from factory-gate inspections in Italy or Vietnam to "Last-Mile" delivery at your project site. Our team handles specialized packing, customs clearance, and climate-controlled storage for sensitive finishes. This vertical integration eliminates middleman markups and ensures that the materials arriving on-site match the high-fidelity specifications promised during the design phase.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE SCIENCE OF SITE SUPERVISION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">04 — Oversight</span>
            <h3 className="text-4xl font-serif italic text-white">Aggressive <span className="text-[#828a1c]">Site Supervision.</span></h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              Quality is not checked at the end; it is built into the process. Our <strong>Site Management Office (SMO)</strong> maintains a 24/7 presence on major projects. We implement a "Three-Stage Inspection" protocol: initial material verification, in-process workmanship audits, and final performance testing. Whether it is verifying the torque on structural bolts or the moisture levels in sub-flooring before timber installation, our engineers ensure that "hidden" elements are executed to the same standard as visible finishes.
            </p>
            
          </div>
          <div className="aspect-video border border-white/10 overflow-hidden shadow-inner">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" alt="Industrial Site Supervision" className="w-full h-full object-cover opacity-60" />
          </div>
        </div>
      </section>

      {/* SECTION 5: LIVE-SITE RENOVATION STRATEGY */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] bg-gray-200 overflow-hidden shadow-2xl border-l-[12px] border-[#828a1c]">
             <img src="https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&q=80" alt="Active Construction Phasing" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">05 — Continuity</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Operational <span className="text-[#828a1c]">Continuity.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              For commercial clients, closing doors for renovation is rarely an option. We specialize in <strong>Phased Execution</strong>, allowing your business to remain 100% operational while we transform your space. This involve strategic "Swing Space" management, night-shift labor cycles, and rigorous dust/noise mitigation. Our team coordinates with your IT and facilities departments to ensure that data lines and essential services are never interrupted, making the construction process virtually invisible to your daily operations.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 6: FINANCIAL TRANSPARENCY & COST CONTROL */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">06 — Finance</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Fiduciary <span className="text-[#6b4411]">Precision.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Construction budget overruns are often the result of poor communication. Bixbite employs <strong>Cost-Control Engineering</strong> to prevent "scope creep." We provide comprehensive Bill of Quantities (BOQ) with fixed-price commitments from our primary vendor list. Every variation order (VO) is documented and vetted through a rigorous approval workflow before execution. This fiduciary responsibility ensures that your final project cost aligns perfectly with the initial investment plan approved at the outset.
            </p>
          </div>
          <div className="order-1 lg:order-2 aspect-video shadow-xl overflow-hidden bg-[#FAF9F6] p-12 flex items-center justify-center">
             <BarChart3 className="w-32 h-32 text-[#6b4411] opacity-20" />
          </div>
        </div>
      </section>

      {/* SECTION 7: HEALTH, SAFETY & ENVIRONMENT (HSE) */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-video bg-gray-100 overflow-hidden shadow-2xl border-r-[12px] border-[#6b4411]">
             <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80" alt="Construction Safety Gear" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">07 — Compliance</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Safety <span className="text-[#828a1c]">Architecture.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              A high-end project is only successful if it is built safely. Our <strong>HSE Management System</strong> adheres to international occupational health and safety standards. Every laborer on a Bixbite site undergoes mandatory safety induction and is equipped with certified PPE. We conduct weekly "Toolbox Talks" and fire safety drills. This commitment to a zero-incident culture protects our workforce and mitigates legal and operational risks for our clients, ensuring a smooth, litigation-free project lifecycle.
            </p>
            
          </div>
        </div>
      </section>

      {/* SECTION 8: ZERO-SNAG HANDOVER & AFTERCARE */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto bg-[#FAF9F6]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">08 — Delivery</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">White-Glove <span className="text-[#828a1c]">Handover.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              The Bixbite experience doesn't end when the furniture is placed. We implement a <strong>Zero-Snag Handover Policy</strong>. Two weeks prior to delivery, our internal quality team conducts a "Pre-Handover Audit," resolving any minor aesthetic or technical defects before you ever see the site. We deliver a digital "Project Bible" containing all warranties, as-built drawings, and maintenance manuals. Furthermore, our post-occupancy support team remains on-call for 12 months to address any settling or technical adjustments.
            </p>
          </div>
          <div className="aspect-square max-h-[500px] overflow-hidden shadow-2xl bg-white p-2">
             <div className="w-full h-full border border-black/5 flex flex-col items-center justify-center space-y-4">
                <CheckCircle2 size={48} className="text-[#828a1c]" />
                <p className="font-serif italic text-xl">100% Verified</p>
             </div>
          </div>
        </div>
      </section>

      {/* KPI PERFORMANCE STRIP */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Management", val: "PMP Certified" },
            { label: "Reporting", val: "Daily Digital" },
            { label: "Standard", val: "ISO 9001" },
            { label: "Defects", val: "Zero-Target" }
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
        title="Execution & PM FAQs"
        items={[
            { q: "How do you handle unforeseen site challenges?", a: "We maintain a 5% time and budget contingency buffer and utilize rapid-response 'Tiger Teams' to resolve site surprises within 24 hours." },
            { q: "Do you manage external specialist vendors?", a: "Yes, our PMO (Project Management Office) serves as the central node for all vendors, ensuring they adhere to our global quality and safety standards." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="From Blueprints to Reality."
        description="Book a technical execution audit with our project directors to map your construction critical path."
        buttonText="Get Execution Plan"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['PMP Certified Directors', 'ISO 45001 Safety', 'FIDIC Contract Standards', 'PMBOK Methodology'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default ProjectManagementAndExecution;