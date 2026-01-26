import React, { useEffect } from 'react';
import { Plus, MoveRight } from 'lucide-react';
import HeroSection from './HeroSection';
import ServiceCTA from './ServiceCTA';
import FAQSection from './FAQSection';

const ServicePageGallery = ({ data, accentColor = "#1a1a1a" }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-[#1a1a1a] selection:bg-[#f0f0f0] selection:text-black">
      
      {/* 1. HERO SECTION */}
      <HeroSection 
        subtitle={data.hero.subtitle}
        title={data.hero.title}
        highlight={data.hero.highlight}
        backgroundImage={data.hero.backgroundImage}
      />

      {/* 2. MINIMALIST INTRO (Staggered Layout) */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto border-b border-slate-100">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400 block mb-6">
                   {data.intro.sectionLabel}
                </span>
                <h2 className="text-5xl font-serif leading-tight">
                    {data.intro.titlePart1} <br />
                    <span style={{ color: accentColor }} className="italic font-light opacity-80">{data.intro.titlePart2}</span>
                </h2>
            </div>
            <div className="lg:w-2/3 space-y-10">
                <p className="text-slate-500 text-2xl font-light leading-relaxed max-w-3xl">
                    {data.intro.description}
                </p>
                <div className="flex flex-wrap gap-8">
                    {data.intro.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <Plus size={14} style={{ color: accentColor }} />
                            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{bullet}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 3. STAGGERED IMAGE GALLERY (8-Section Flow) */}
      <section className="py-24 space-y-48">
        {data.narrative.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col lg:flex-row items-center gap-20 max-w-[1400px] mx-auto px-6 ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* LARGE IMAGE BLOCK */}
            <div className="lg:w-7/12 w-full relative group">
                <div className="overflow-hidden bg-slate-50 aspect-[4/3]">
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                </div>
                {/* FLOATING INDEX NUMBER */}
                <span className="absolute -top-10 -left-10 text-[10rem] font-serif text-slate-50 -z-10 group-hover:text-slate-100 transition-colors hidden lg:block">
                    0{index + 1}
                </span>
            </div>

            {/* TEXT CONTENT BLOCK */}
            <div className="lg:w-5/12 space-y-6">
              <h3 className="text-4xl font-serif italic text-slate-900 border-b border-slate-100 pb-4">
                {item.title}
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-light">
                {item.text}
              </p>
              <div className="pt-6 flex items-center gap-4 group cursor-pointer">
                  <div style={{ backgroundColor: accentColor }} className="h-[1px] w-12 group-hover:w-24 transition-all duration-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-black transition-colors">Learn More</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 4. KPI STRIP (Clean & Subtle) */}
      <section className="py-24 bg-[#FAF9F6] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-16 text-center">
          {data.kpis.map((kpi, i) => (
            <div key={i} className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">{kpi.label}</p>
              <p className="text-4xl font-serif italic text-slate-800">{kpi.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQ & CTA */}
      <div className="bg-white">
        <FAQSection title={data.faq.title} items={data.faq.items} />
        <div className="pb-24">
            <ServiceCTA 
                title={data.cta.title}
                description={data.cta.description}
                buttonText={data.cta.buttonText}
                link={data.cta.link}
            />
        </div>
      </div>
    </div>
  );
};

export default ServicePageGallery;