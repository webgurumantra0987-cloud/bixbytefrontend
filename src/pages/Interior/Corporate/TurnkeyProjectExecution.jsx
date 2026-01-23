import React, { useEffect } from 'react';
import { 
  HardHat, ClipboardCheck, Truck, Clock, 
  ShieldCheck, Hammer, PencilRuler, BarChart3,
  Calendar, Briefcase, FileText, CheckCircle
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const TurnkeyProjectExecution = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white selection:bg-[#ff6b00] selection:text-white text-[#1a1a1a]">
      
      {/* 1. HERO: THE SINGLE POINT OF RESPONSIBILITY */}
      <HeroSection 
        subtitle="End-to-End Delivery Excellence"
        title="Turnkey Project"
        highlight="Execution."
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE HASSLE-FREE PROMISE */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[#ff6b00] text-[10px] font-black uppercase tracking-[0.6em]">01 — Integration</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight">One Contract. <br /> One <span className="text-[#ff6b00]">Vision.</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              The greatest risk in office design is the "Gap" between the blueprint and the build. At Bixbite, we eliminate that gap through <strong>Total Turnkey Execution</strong>. We act as your single point of responsibility—managing everything from site surveys and government approvals to procurement, MEP engineering, and final styling. You give us the keys to an empty shell; we give them back to a fully operational, high-performance workspace.
            </p>
            <div className="flex gap-8 pt-4">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="text-[#ff6b00]" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Fixed-Price Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                    <Clock className="text-[#ff6b00]" size={20} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Timeline Indemnity</span>
                </div>
            </div>
          </div>
          <div className="relative group">
             <div className="aspect-video bg-gray-100 border border-black/5 overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1503387762-592dea58292b?auto=format&fit=crop&q=80" alt="Construction Site Management" className="w-full h-full object-cover grayscale" />
             </div>
             <div className="absolute -bottom-10 -right-10 bg-[#1a1a1a] p-10 text-white hidden xl:block border-b-4 border-[#ff6b00]">
                <p className="text-4xl font-serif italic mb-2">0%</p>
                <p className="text-[9px] uppercase tracking-[0.3em] leading-loose text-gray-400">Client Management <br /> Stress Ratio</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE 4-PHASE ENGINE */}
      <section className="py-24 bg-[#FAF9F6] border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-serif italic">The Delivery <span className="text-[#ff6b00]">Engine.</span></h3>
            <p className="text-gray-400 text-[10px] uppercase tracking-[0.4em] mt-4">A Systematic Path from Concept to Occupation</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { phase: "01", title: "Pre-Con Audit", icon: <PencilRuler />, desc: "Statutory approvals, bill of quantities (BOQ) finalization, and site readiness testing." },
              { phase: "02", title: "Procurement", icon: <Truck />, desc: "Global sourcing of furniture and materials with pre-negotiated OEM pricing." },
              { phase: "03", title: "The Build", icon: <Hammer />, desc: "On-site execution managed by our in-house civil, electrical, and HVAC engineers." },
              { phase: "04", title: "Handover", icon: <CheckCircle />, desc: "Snagging audits, systems training, and the issuance of 'As-Built' documentation." }
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-white border border-black/5 group hover:border-[#ff6b00] transition-all">
                <span className="absolute top-4 right-4 text-4xl font-serif italic text-gray-100 group-hover:text-[#ff6b00]/10 transition-colors">{item.phase}</span>
                <div className="text-[#ff6b00] mb-6">{item.icon}</div>
                <h4 className="text-[11px] font-black uppercase tracking-widest mb-4">{item.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PROJECT MANAGEMENT TECH */}
      <section className="py-32 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="bg-[#1a1a1a] p-12 text-white">
                <h5 className="text-[10px] font-black uppercase tracking-widest text-[#ff6b00] mb-8">Live Project Dashboard</h5>
                <div className="space-y-6">
                   {[
                     { label: 'Workforce On-Site', val: '42 Pax' },
                     { label: 'Completion Percent', val: '78%' },
                     { label: 'Safety Incidents', val: 'Zero' },
                     { label: 'Material In-Transit', val: 'Veneers / IT Rack' }
                   ].map((log, i) => (
                     <div key={i} className="flex justify-between border-b border-white/5 pb-4">
                        <span className="text-xs text-gray-400">{log.label}</span>
                        <span className="text-xs font-mono text-[#ff6b00]">{log.val}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#ff6b00] flex items-center justify-center">
                <BarChart3 className="text-white" />
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-[#ff6b00] text-[10px] font-black uppercase tracking-[0.6em]">03 — Oversight</span>
            <h3 className="text-4xl font-serif italic">The Transparency <span className="text-[#ff6b00]">Portal.</span></h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
               We give you a 24/7 window into your project's progress. Every Bixbite Turnkey project is managed through our <strong>proprietary Project Dashboard</strong>. You can view daily site photos, check real-time spending against the budget, and track material delivery logs from your mobile device. No surprise costs, no hidden delays.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: STATUTORY & COMPLIANCE */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <span className="text-[#ff6b00] text-[10px] font-black uppercase tracking-[0.6em]">04 — Red Tape Management</span>
            <h3 className="text-4xl font-serif italic text-white">Bureaucracy <span className="text-[#ff6b00]">Handled.</span></h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Office interiors require a mountain of paperwork—Fire NOCs, municipal approvals, electrical load sanctions, and occupational certificates. Our <strong>Liaison Team</strong> handles the entire statutory process. We ensure your space is 100% compliant with local building codes and safety regulations before you even step foot in the lobby.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {[
               { icon: <FileText />, title: "Fire Safety Audits" },
               { icon: <Briefcase />, title: "Municipal Approvals" },
               { icon: <Calendar />, title: "Timeline Insurance" },
               { icon: <HardHat />, title: "Health & Safety (HSE)" }
             ].map((item, i) => (
               <div key={i} className="p-8 bg-white/5 border border-white/10 flex flex-col items-start gap-4">
                  <div className="text-[#ff6b00]">{item.icon}</div>
                  <p className="text-[10px] font-black uppercase tracking-widest">{item.title}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* REUSABLE FAQS */}
      <FAQSection 
        title="Turnkey Execution FAQs"
        items={[
            { q: "What is the benefit of Turnkey vs. multiple contractors?", a: "Turnkey eliminates 'Finger Pointing'. When Bixbite manages the whole project, we own the mistakes and the solutions. It results in a 30% faster delivery speed on average." },
            { q: "How do you ensure quality during the build?", a: "We have an independent QA/QC team that conducts 56-point inspections at four critical milestones: shell readiness, MEP rough-in, carpentry finishing, and systems handover." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="From Blueprints to Business in record time."
        description="Book a project feasibility session to see how Bixbite can deliver your workspace with zero operational downtime."
        buttonText="Inquire for Turnkey Project"
        link="/contact"
      />

      {/* TRUST STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['Licensed General Contractor', 'PMI Certified Managers', 'ISO 45001 Safety', '100% In-House MEP'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default TurnkeyProjectExecution;