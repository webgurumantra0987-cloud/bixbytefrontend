import React, { useEffect } from 'react';
import { Minus, ArrowDown } from 'lucide-react';
import HeroSection from './HeroSection';
import ServiceCTA from './ServiceCTA';
import FAQSection from './FAQSection';


const ServicePageMinimal = ({ data, accentColor = "#828a1c" }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  
  return (
    /* CHANGED: Background to Bone/Linen and Text to Slate-900 */
    <div className="bg-[#FAF9F6] text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-white">
      
      {/* 1. MINIMAL HERO */}
      <HeroSection 
        subtitle={data.hero.subtitle}
        title={data.hero.title}
        highlight={data.hero.highlight}
        backgroundImage={data.hero.backgroundImage}
      />

      {/* 2. CENTERED INTRO */}
      {/* CHANGED: Border color to light slate opacity */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto border-x border-slate-200/60">
        <span style={{ color: accentColor }} className="text-[10px] font-bold uppercase tracking-[0.8em] mb-12 block">
           {data.intro.sectionLabel}
        </span>
        <h2 className="text-6xl font-serif italic mb-12">
          {data.intro.titlePart1} <span className="text-slate-400">{data.intro.titlePart2}</span>
        </h2>
        <p className="text-slate-500 text-xl font-light leading-relaxed mb-16">
          {data.intro.description}
        </p>
        <div className="flex justify-center items-center gap-8">
            {data.intro.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3">
                    <Minus style={{ color: accentColor }} size={20} />
                    <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em]">{bullet}</span>
                </div>
            ))}
        </div>
      </section>

      {/* 3. FULL-WIDTH NARRATIVE (Cinematic Style) */}
      <section className="border-t border-slate-200/60">
        {data.narrative.map((item, index) => (
          <div key={index} className="grid lg:grid-cols-2 min-h-[80vh] border-b border-slate-200/60">
            <div className={`p-16 flex flex-col justify-center space-y-8 ${index % 2 !== 0 ? 'lg:order-2 border-l border-slate-200/60' : ''}`}>
              <h3 className="text-5xl font-serif italic text-slate-800">{item.title}</h3>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                {item.text}
              </p>
              <div className="pt-8">
                <ArrowDown size={32} style={{ color: accentColor }} className="animate-bounce" />
              </div>
            </div>
            <div className={`relative overflow-hidden ${index % 2 !== 0 ? 'lg:order-1' : 'border-l border-slate-200/60'}`}>
              {/* REMOVED: brightness-50 so images are clear in light mode */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
              />
            </div>
          </div>
        ))}
      </section>

      {/* 4. KPI STRIP (Inverted for Light Mode) */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {data.kpis.map((kpi, i) => (
            <div key={i} className="group cursor-default">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-4 group-hover:text-white transition-colors">{kpi.label}</p>
              <p style={{ color: accentColor }} className="text-5xl font-serif italic">{kpi.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQ & CTA (Integrated Colors) */}
      <div className="bg-[#FAF9F6]">
        <FAQSection title={data.faq.title} items={data.faq.items} />
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

export default ServicePageMinimal;