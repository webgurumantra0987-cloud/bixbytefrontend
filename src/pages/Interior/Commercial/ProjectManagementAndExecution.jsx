import React, { useEffect } from 'react';
import { 
  ClipboardCheck, Calendar, HardHat, TrendingUp, 
  BarChart3, Truck, ShieldCheck, Users,
  Clock, Briefcase
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceFeatureCards from '../../../components/common/ServiceFeatureCards';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

// Data
import { processItems } from '../../../Data';

const ProjectManagementAndExecution = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#d4af37] selection:text-white">
      
      {/* 1. HERO: THE EXECUTION ENGINE */}
      <HeroSection 
        subtitle="Turnkey Delivery & Oversight"
        title="Project Management"
        highlight="& Execution."
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2000&auto=format&fit=crop"
      />

      {/* 2. THE OPERATIONS STRATEGY (300 Words Content) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-gray-500 text-lg leading-relaxed">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em] block">Operational Excellence</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a] leading-tight">Design is Vision. <br /> Execution is Reality.</h2>
            <p>
              The gap between a beautiful blueprint and a finished building is bridged by <strong>Project Management and Execution</strong>. At Bixbite, we view execution as a discipline of precision. Our management framework is built on three non-negotiables: <strong>Timeline Integrity, Budget Transparency, and Quality Benchmarking.</strong> We act as the single point of accountability, coordinating dozens of specialized vendors to ensure your project moves forward without friction.
            </p>
            <p>
              We utilize <strong>Agile Construction Methodologies</strong> and Cloud-based project tracking to provide our clients with real-time updates. From procurement logistics and vendor vetting to on-site safety audits and snag-list resolution, our team manages the chaos so you don't have to. We specialize in "Live-Site Execution," allowing businesses to remain operational while we renovate, through strategic phasing and sound-buffer protocols.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-12 text-white relative">
            <TrendingUp className="text-[#d4af37] w-12 h-12 mb-8" />
            <h3 className="text-2xl font-serif italic mb-6">The Efficiency Metrics</h3>
            <div className="space-y-6">
                {[
                    { label: "On-Time Delivery", val: "98.5%" },
                    { label: "Vendor Vetting", val: "Tier-1 Only" },
                    { label: "Safety Record", val: "Zero-Incident" }
                ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-white/10 pb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</span>
                        <span className="text-[#d4af37] font-serif italic text-xl">{stat.val}</span>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECT TIMELINE VISUAL */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#f9f9f9] border border-black/5 p-10">
            <p className="text-center mb-10 text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Critical Path Method (CPM) Visualization</p>
            
          </div>
        </div>
      </section>

      {/* 4. THE FOUR PILLARS (Grid Design) */}
      <section className="py-24 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          {[
            { icon: <Briefcase />, title: "Procurement", desc: "Global sourcing of materials to bypass supply chain delays." },
            { icon: <Users />, title: "Vendor Sync", description: "Daily stand-ups with MEP, carpentry, and finishing teams." },
            { icon: <BarChart3 />, title: "Cost Control", description: "Rigorous budget tracking to prevent 'scope creep' and overruns." },
            { icon: <Clock />, title: "Snagging", description: "Meticulous pre-handover audits to ensure a 100% defect-free site." }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="text-[#d4af37] mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h4 className="text-[11px] font-black uppercase tracking-widest mb-3">{item.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc || item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. REUSABLE FEATURE CARDS (Operations Focus) */}
      <ServiceFeatureCards 
        title="Execution Protocol"
        subtitle="The Management Stack"
        items={[
            { icon: <ClipboardCheck size={20} />, title: "Quality Benchmarking", description: "Three-stage inspection (Raw material, In-process, and Finished) for every element." },
            { icon: <Calendar size={20} />, title: "Phased Handover", description: "Strategic scheduling that allows you to occupy completed zones while work continues." },
            { icon: <Truck size={20} />, title: "Logistics Oversight", description: "Managing vertical transportation and night-shift delivery for high-rise projects." }
        ]} 
      />

      {/* 6. THE SITE REALITY (Editorial Layout) */}
      <section className="py-32 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="aspect-video bg-gray-800 relative group">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" alt="Site Supervision" />
                <div className="absolute inset-0 border-[1px] border-white/10 m-4 pointer-events-none" />
            </div>
            <div className="space-y-8">
                <HardHat className="text-[#d4af37] w-12 h-12" />
                <h3 className="text-4xl font-serif italic text-white leading-tight">Zero-Snag <br /> Handover Policy.</h3>
                <p className="text-gray-400 text-lg">
                    Our "White Glove" handover ensures that the site is professionally cleaned, air-filtered, and technically vetted before you receive the keys. We provide a comprehensive "As-Built" document set, including all MEP layouts and material warranties.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    {['24/7 Supervision', 'Digital Daily Reports', 'EHS Compliance', 'Warranty Management'].map(t => (
                        <div key={t} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                            <span className="text-[9px] font-black uppercase tracking-widest">{t}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 7. REUSABLE PROCESS */}
      <ServiceFeatureCards 
        title="The Project Lifecycle"
        subtitle="Workstream"
        items={processItems} 
      />

      {/* 8. FAQ SECTION (REUSABLE) */}
      <FAQSection 
        title="Execution & PM FAQs"
        items={[
            { q: "How do you handle budget overruns?", a: "We use a 'Fixed-Fee' or 'Cost-Plus' model with a 5% contingency buffer, ensuring no financial surprises." },
            { q: "Can you manage local vendors we've already hired?", a: "Yes, we offer 'Pure Management' services to coordinate your preferred contractors into our quality workflow." }
        ]} 
      />

      {/* 9. TRUST STRIP */}
      <section className="py-16 border-t border-black/5 flex flex-wrap justify-center gap-12 opacity-30 grayscale">
         {['PMP Certified Managers', 'ISO 9001 Quality', 'LEED Green Associate'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em]">{t}</span>
         ))}
      </section>

      {/* 10. REUSABLE CTA */}
      <ServiceCTA 
        title="From Blueprints to Reality."
        description="Connect with our project directors to discuss your construction timeline and logistics."
        buttonText="Get Execution Plan"
        link="/contact"
      />

    </div>
  );
};

export default ProjectManagementAndExecution;