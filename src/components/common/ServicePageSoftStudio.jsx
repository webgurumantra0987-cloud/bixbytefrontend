import React, { useEffect } from 'react';
import { Square, ArrowUpRight } from 'lucide-react';
import HeroSection from './HeroSection';
import ServiceCTA from './ServiceCTA';
import FAQSection from './FAQSection';

const ServicePageSoftStudio = ({ data, accentColor = "#828a1c" }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F2ED] text-[#2D2926] selection:bg-[#2D2926] selection:text-white transition-colors duration-500">
      
      {/* 1. HERO SECTION */}
      <HeroSection 
        subtitle={data.hero.subtitle}
        title={data.hero.title}
        highlight={data.hero.highlight}
        backgroundImage={data.hero.backgroundImage}
      />

      {/* 2. OFFSET INTRO SECTION */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 border-l border-[#2D2926]/10 pl-8 h-fit lg:sticky lg:top-32">
            <span style={{ color: accentColor }} className="text-[10px] font-bold uppercase tracking-[0.6em] block mb-6">
               01 / {data.intro.sectionLabel}
            </span>
            <h2 className="text-5xl font-serif leading-[1.1]">
              {data.intro.titlePart1} <br />
              <span className="italic font-light opacity-60">{data.intro.titlePart2}</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-12">
            <p className="text-2xl font-light leading-relaxed text-[#2D2926]/80">
              {data.intro.description}
            </p>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
                {data.intro.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                        <Square style={{ backgroundColor: accentColor }} className="w-1 h-1 rotate-45 border-none" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-50">{bullet}</span>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC NARRATIVE GRID */}
      <section className="px-6 max-w-[1400px] mx-auto pb-32">
        <div className="grid lg:grid-cols-12 gap-y-40">
          {data.narrative.map((item, index) => (
            <div 
              key={index} 
              className={`lg:col-span-10 flex flex-col lg:flex-row gap-16 items-start ${
                index % 2 !== 0 ? 'lg:col-start-3 flex-row-reverse' : 'lg:col-start-1'
              }`}
            >
              {/* IMAGE WITH SOFT SHADOW */}
              <div className="w-full lg:w-3/5 group">
                <div className="overflow-hidden bg-[#EAE7E2] shadow-sm">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full aspect-[4/5] lg:aspect-auto object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105" 
                  />
                </div>
              </div>

              {/* FLOATING CONTENT BOX */}
              <div className={`w-full lg:w-2/5 pt-12 ${index % 2 !== 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <div className="space-y-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif italic text-2xl opacity-20">0{index + 1}</span>
                    <h3 className="text-3xl font-serif text-[#2D2926]">{item.title}</h3>
                  </div>
                  <p className="text-[#2D2926]/60 text-lg font-light leading-relaxed">
                    {item.text}
                  </p>
                  <button className="flex items-center gap-2 pt-4 group">
                    <span className="text-[10px] font-bold uppercase tracking-widest border-b border-transparent group-hover:border-[#2D2926] transition-all">Explore Detail</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. REFINED KPI SECTION */}
      <section className="py-32 border-t border-[#2D2926]/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16">
          {data.kpis.map((kpi, i) => (
            <div key={i} className="space-y-4">
              <div style={{ backgroundColor: accentColor }} className="h-px w-8 opacity-40"></div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#2D2926]/40">{kpi.label}</p>
              <p className="text-4xl font-serif italic text-[#2D2926]">{kpi.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER ELEMENTS */}
      <FAQSection title={data.faq.title} items={data.faq.items} />
      <div className="bg-[#EAE7E2]/50 py-24">
        <ServiceCTA 
          title={data.cta.title}
          description={data.cta.description}
          buttonText={data.cta.buttonText}
          link={data.cta.link}
        />
      </div>
    </div>
  );
};

export default ServicePageSoftStudio;