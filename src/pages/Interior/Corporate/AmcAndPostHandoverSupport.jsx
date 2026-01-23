import React, { useEffect } from 'react';
import { 
  ShieldCheck, Settings, Wrench, LifeBuoy, 
  History, BarChart, HardHat, FileText, 
  Activity, Clock, CheckCircle2, Zap
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const AmcAndPostHandoverSupport = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#1a1a1a] selection:text-white">
      
      {/* 1. HERO: THE GUARDIANSHIP */}
      <HeroSection 
        subtitle="Lifecycle Asset Management"
        title="AMC & Post-Handover"
        highlight="Support."
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE FIDUCIARY PROMISE */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">01 — Continuity</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a]">Design Ends. <br /> <span className="text-[#828a1c]">Support is Eternal.</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              A premium space is a high-performance machine; it requires constant calibration to maintain its value. At Bixbite, our relationship with a project doesn't terminate at the "keys-over" ceremony. Our <strong>Post-Handover Support</strong> ecosystem is designed to protect your capital investment. We treat your facility as a living asset, providing the technical oversight needed to ensure that the aesthetic brilliance of day one remains intact for year ten.
            </p>
            <div className="flex gap-6">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-[#828a1c]" size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">24-Hour Response</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-[#828a1c]" size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Zero-Downtime Goal</span>
                </div>
            </div>
          </div>
          <div className="bg-[#1a1a1a] p-1 border-white/10 shadow-2xl">
             <div className="border border-white/5 p-12">
                <Settings className="text-[#828a1c] w-12 h-12 mb-8 animate-spin-slow" />
                <h3 className="text-white text-2xl font-serif italic mb-6">The Maintenance Matrix</h3>
                <div className="space-y-6">
                    {['Preventative Maintenance', 'Predictive Failure Analysis', 'Emergency Rapid-Response', 'Operational Staff Training'].map((item, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 group cursor-default">
                            <span className="text-gray-400 text-xs uppercase tracking-widest group-hover:text-white transition-colors">{item}</span>
                            <Zap size={14} className="text-[#828a1c] opacity-0 group-hover:opacity-100 transition-all" />
                        </div>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PREVENTATIVE VS. REACTIVE (Technical Chart) */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-serif italic mb-16">The Cost of Neglect <span className="text-[#828a1c]">vs. Care.</span></h3>
          
          <p className="max-w-3xl mx-auto mt-12 text-gray-500 font-light text-lg">
            Our data indicates that spaces under a Bixbite AMC see a <strong>32% reduction in long-term operational costs</strong>. By identifying micro-failures in MEP (Mechanical, Electrical, Plumbing) systems before they escalate, we eliminate the need for expensive, disruptive emergency repairs.
          </p>
        </div>
      </section>

      {/* SECTION 3: THREE TIERS OF AMC PROTECTION */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {[
            { 
              tier: "Essential", 
              desc: "Quarterly health checks for MEP and lighting systems. Ideal for small retail or private studios.",
              features: ['Safety Audits', 'Filter Replacements', 'Lighting Calibration']
            },
            { 
              tier: "Performance", 
              desc: "Monthly deep-dives including aesthetic touch-ups and finish protection. Built for corporate headquarters.",
              features: ['Wall & Paint Care', 'Upholstery Protection', 'HVAC Deep Cleaning']
            },
            { 
              tier: "Executive", 
              desc: "On-site facility management and 24/7 emergency concierge. The gold standard for hospitality.",
              features: ['Daily Site Rounds', 'Hardware Lifecycle Mgmt', 'Priority 2-Hour Response']
            }
          ].map((plan, i) => (
            <div key={i} className="bg-[#FAF9F6] p-16 hover:bg-white transition-all group">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4 block">Tier 0{i+1}</span>
              <h4 className="text-3xl font-serif italic mb-6 text-[#1a1a1a]">{plan.tier}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-10 font-light">{plan.desc}</p>
              <ul className="space-y-4">
                {plan.features.map(f => (
                    <li key={f} className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-3">
                        <div className="w-1 h-1 bg-[#828a1c]" /> {f}
                    </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: THE AS-BUILT DIGITAL BIBLE */}
      <section className="py-32 bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <FileText className="text-[#828a1c] w-12 h-12" />
            <h3 className="text-4xl font-serif italic">Digital Twin <br /> & Documentation.</h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Every project we handover comes with a <strong>Digital Asset Bible</strong>. This includes 3D "As-Built" scans, comprehensive material submittals, and MEP schematics. In the event of a repair, our technicians don't guess—they use digital precision to locate every wire and pipe hidden behind your finishes, ensuring surgical intervention rather than destructive exploration.
            </p>
            
          </div>
          <div className="aspect-video bg-gray-900 border border-white/5 relative">
             <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                <BarChart size={200} />
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: RAPID RESPONSE LOGISTICS */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-video shadow-2xl overflow-hidden grayscale">
             <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" alt="Bixbite Maintenance Team" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">05 — Logistics</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Mobile <br /> Maintenance <span className="text-[#828a1c]">Units.</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Bixbite operates a dedicated fleet of <strong>Technical Response Units</strong>. Equipped with specialized diagnostic tools and high-grade finishing materials, these teams are trained specifically in "Live-Site Maintenance." This means we carry out repairs and upgrades with minimal noise and zero dust, allowing your business to remain operational while we work in the shadows.
            </p>
          </div>
        </div>
      </section>

      {/* KPI METRIC STRIP */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Uptime", val: "99.9%" },
            { label: "Critical Response", val: "4 Hours" },
            { label: "Asset Lifecycle", val: "+25%" },
            { label: "Client Retention", val: "95%" }
          ].map((kpi, i) => (
            <div key={i}>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">{kpi.label}</p>
              <p className="text-4xl font-serif italic text-[#828a1c]">{kpi.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Support & AMC FAQs"
        items={[
            { q: "What happens if a material is discontinued?", a: "We maintain a 'Spares & Overages' inventory for all projects for up to 2 years. If exhausted, our procurement team sources the closest architectural match using our global vendor network." },
            { q: "Do you offer support for projects not built by Bixbite?", a: "Yes, we offer an 'Audit & Onboarding' service where we assess your current site and bring it up to Bixbite standards before initiating an AMC." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Protect your architectural legacy."
        description="Connect with our facility management directors to tailor a maintenance plan for your asset."
        buttonText="Request Support Quote"
        link="/contact"
      />

      {/* COMPLIANCE STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['ISO 14001 Compliant', 'OSHA Safety Standards', 'Certified MEP Technicians', 'Preventative Care Accredited'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default AmcAndPostHandoverSupport; 