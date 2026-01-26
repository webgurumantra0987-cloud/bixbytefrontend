import React, { useEffect } from 'react';
import { 
  BadgeDollarSign, 
  TrendingDown, 
  Target, 
  Percent, 
  BarChart3, 
  Layers, 
  ShieldCheck, 
  Scale,
  CheckCircle2,
  Zap
} from 'lucide-react';

// Common Components
import HeroSection from '../../../components/common/HeroSection';
import ServiceCTA from '../../../components/common/ServiceCTA';
import FAQSection from '../../../components/common/FAQSection';

const BudgetBasedCustomization = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#1a1a1a] selection:text-white">
      
      {/* 1. HERO: THE INVESTMENT ARCHITECTURE */}
      <HeroSection 
        subtitle="Investment Strategy"
        title="Fiscal Clarity &"
        highlight="Budgeting."
        backgroundImage="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80"
      />

      {/* SECTION 1: THE FIDUCIARY DESIGN APPROACH */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">01 — Optimization</span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a]">Design is Capital. <br /> <span className="text-[#828a1c]">Spend it Wisely.</span></h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              We don't view budget as a limitation; we view it as a <strong>performance metric</strong>. Our Budget-Based Customization service ensures that every dollar spent is visible in the final result. By aligning architectural ambitions with fiscal reality from day zero, we eliminate the "cost-creep" that plagues traditional design firms.
            </p>
            <div className="flex gap-6">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-[#828a1c]" size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Fixed-Fee Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-[#828a1c]" size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Value Engineering</span>
                </div>
            </div>
          </div>
          <div className="bg-[#1a1a1a] p-1 border-white/10 shadow-2xl">
             <div className="border border-white/5 p-12">
                <BadgeDollarSign className="text-[#828a1c] w-12 h-12 mb-8" />
                <h3 className="text-white text-2xl font-serif italic mb-6">The Fiscal Framework</h3>
                <div className="space-y-6">
                    {['Strategic Capital Allocation', 'Material ROI Analysis', 'Direct-to-Source Procurement', 'Real-Time Cost Tracking'].map((item, i) => (
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

      {/* SECTION 2: DATA VISUALIZATION (Technical Chart Placeholder) */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-serif italic mb-16 text-[#1a1a1a]">The Bixbite <span className="text-[#828a1c]">Procurement Advantage.</span></h3>
          
          <div className="max-w-4xl mx-auto mb-12 border border-black/5 p-8 bg-[#FAF9F6]">
            {/* Visual representation of direct sourcing vs traditional markups */}
            
          </div>

          <p className="max-w-3xl mx-auto text-gray-500 font-light text-lg">
            Through our global vendor network, we bypass secondary markups. Our clients benefit from <strong>direct-from-manufacturer pricing</strong> on 70% of project materials, allowing for higher-spec finishes within the same capital budget.
          </p>
        </div>
      </section>

      {/* SECTION 3: THE THREE INVESTMENT TIERS */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {[
            { 
              tier: "Efficient", 
              desc: "Smart, agile spaces focusing on high-impact zones like reception and boardrooms while optimizing secondary areas.",
              features: ['Local Material Sourcing', 'Modular MEP Systems', 'Standard-Grade Shell']
            },
            { 
              tier: "Signature", 
              desc: "Our most popular tier. Custom finishes, integrated technology, and a balance of imported and domestic materials.",
              features: ['Custom Millwork', 'Acoustic Treatments', 'Integrated Tech-Stack']
            },
            { 
              tier: "Executive", 
              desc: "No-compromise luxury. Rare material palettes, artisanal craftsmanship, and bespoke architectural hardware.",
              features: ['Global Stone Sourcing', 'Smart Automation', 'Artisanal Metalwork']
            }
          ].map((plan, i) => (
            <div key={i} className="bg-[#FAF9F6] p-16 hover:bg-white transition-all group">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4 block">Option 0{i+1}</span>
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

      {/* SECTION 4: VALUE ENGINEERING (The Digital Bible equivalent) */}
      <section className="py-32 bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <Scale className="text-[#828a1c] w-12 h-12" />
            <h3 className="text-4xl font-serif italic">The CVE <br /> (Creative Value Engineering).</h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              We don't "cut costs"—we <strong>engineer value</strong>. Our CVE process uses material science to find high-performance alternatives that mimic the aesthetic of expensive imports at a fraction of the cost. This allows us to protect the design vision even when budget pressures arise.
            </p>
            <div className="max-w-md border border-white/10 p-6 bg-white/5">
                <p className="text-[10px] font-black uppercase tracking-widest mb-4">Case Study Impact</p>
                <p className="text-3xl font-serif italic text-[#828a1c]">18% Savings</p>
                <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest">Achieved on Corporate HQ Phase II</p>
            </div>
          </div>
          <div className="aspect-video bg-gray-900 border border-white/5 relative p-8">
             <div className="h-full w-full opacity-30 border border-dashed border-[#828a1c] flex items-center justify-center">
                
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LIFECYCLE ROI */}
      <section className="py-24 px-6 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-video shadow-2xl overflow-hidden grayscale">
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Commercial Interior Investment" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em]">05 — Longevity</span>
            <h3 className="text-4xl font-serif italic text-[#1a1a1a]">Total Cost of <br /> Ownership <span className="text-[#828a1c]">(TCO).</span></h3>
            <p className="text-gray-500 leading-relaxed font-light text-lg">
              Low initial cost often hides high maintenance debt. We present our clients with a 5-year <strong>Total Cost of Ownership</strong> model for all material selections. We advocate for durable, high-traffic finishes that lower your operational expenses over the lease term, ensuring your spatial asset remains a profitable investment.
            </p>
            <div className="p-8 bg-white border border-black/5 rounded-sm overflow-hidden">
                
            </div>
          </div>
        </div>
      </section>

      {/* KPI METRIC STRIP */}
      <section className="py-20 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Budget Variance", val: "<2%" },
            { label: "Direct Sourcing", val: "70%" },
            { label: "Design ROI", val: "Proven" },
            { label: "Fee Structure", val: "Fixed" }
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
        title="Fiscal Strategy FAQs"
        items={[
            { q: "How do you handle market price fluctuations?", a: "We lock in material prices through early-procurement agreements and strategic deposits, shielding your budget from market volatility." },
            { q: "Can we adjust the budget mid-project?", a: "Yes. Our real-time cost tracking allows us to simulate the impact of changes immediately, allowing for informed decision-making without halting construction." }
        ]} 
      />

      {/* FINAL CTA */}
      <ServiceCTA 
        title="Invest in design that works."
        description="Connect with our project directors for a comprehensive fiscal feasibility study for your next space."
        buttonText="Get Feasibility Audit"
        link="/contact"
      />

      {/* COMPLIANCE STRIP */}
      <section className="py-16 bg-[#FAF9F6] border-t border-black/5 flex justify-center gap-12 overflow-hidden opacity-40 grayscale hover:opacity-100 transition-all">
        {['Transparency Accredited', 'Direct-to-Source Verified', 'Audit-Ready Reporting', 'Fixed-Price Compliant'].map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap text-black font-bold">{t}</span>
        ))}
      </section>

    </div>
  );
};

export default BudgetBasedCustomization;