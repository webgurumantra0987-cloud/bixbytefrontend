import React, { useEffect } from 'react';
import { CheckCircle2, Zap } from 'lucide-react';
import HeroSection from './HeroSection';
import ServiceCTA from './ServiceCTA';
import FAQSection from './FAQSection';

const ServicePageBuilder = ({ data, accentColor = "#828a1c" }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FAF9F6] selection:bg-[#1a1a1a] selection:text-white overflow-hidden">
      
      {/* 1. DYNAMIC HERO */}
      <HeroSection 
        subtitle={data.hero.subtitle}
        title={data.hero.title}
        highlight={data.hero.highlight}
        backgroundImage={data.hero.backgroundImage}
      />

      {/* 2. PHILOSOPHY INTRO */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span style={{ color: accentColor }} className="text-[10px] font-black uppercase tracking-[0.6em]">
              01 — {data.intro.sectionLabel}
            </span>
            <h2 className="text-5xl font-serif italic text-[#1a1a1a]">
              {data.intro.titlePart1} <br /> 
              <span style={{ color: accentColor }}>{data.intro.titlePart2}</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              {data.intro.description}
            </p>
            <div className="flex flex-wrap gap-6">
                {data.intro.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 style={{ color: accentColor }} size={18} />
                        <span className="text-[10px] font-black uppercase tracking-widest">{bullet}</span>
                    </div>
                ))}
            </div>
          </div>

          {/* ICON MATRIX CARD */}
          <div className="bg-[#1a1a1a] p-1 border-white/10 shadow-2xl">
             <div className="border border-white/5 p-12">
                <data.matrix.icon style={{ color: accentColor }} className="w-12 h-12 mb-8" />
                <h3 className="text-white text-2xl font-serif italic mb-6">{data.matrix.title}</h3>
                <div className="space-y-6">
                    {data.matrix.items.map((item, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 group cursor-default">
                            <span className="text-gray-400 text-xs uppercase tracking-widest group-hover:text-white transition-colors">{item}</span>
                            <Zap size={14} style={{ color: accentColor }} className="opacity-0 group-hover:opacity-100 transition-all" />
                        </div>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. THE 8-PARAGRAPH NARRATIVE FLOW */}
      <section className="py-12 px-6 max-w-[1400px] mx-auto">
        {data.narrative.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col lg:flex-row items-center gap-16 mb-32 last:mb-0 ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* TEXT BLOCK */}
            <div className="lg:w-1/2 space-y-6">
              <span style={{ color: accentColor }} className="text-[10px] font-black uppercase tracking-[0.5em]">
                {item.id} — Perspective
              </span>
              <h3 className="text-4xl font-serif italic text-slate-900">{item.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                {item.text}
              </p>
            </div>

            {/* IMAGE BLOCK */}
            <div className="lg:w-1/2 w-full">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out" 
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 4. KPI STRIP */}
      <section className="py-20 bg-white border-y border-black/5 mt-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {data.kpis.map((kpi, i) => (
            <div key={i}>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">{kpi.label}</p>
              <p style={{ color: accentColor }} className="text-4xl font-serif italic">{kpi.value}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection title={data.faq.title} items={data.faq.items} />
      <ServiceCTA 
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        link={data.cta.link}
      />
    </div>
  );
};

export default ServicePageBuilder;