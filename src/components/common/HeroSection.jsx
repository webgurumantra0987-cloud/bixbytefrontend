import React, { useState, useEffect } from 'react';

const HeroSection = ({ subtitle, title, highlight, backgroundImage, height = "85vh" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      className="relative flex items-center overflow-hidden bg-[#0a0a0a]"
      style={{ height: height }}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt={title} 
          className={`w-full h-full object-cover transition-all duration-[2000ms] ease-out 
            ${isLoaded ? 'opacity-40 scale-100' : 'opacity-0 scale-110'} 
            motion-safe:animate-[pulse_10s_infinite]`}
        />
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Animated Subtitle */}
          <span className={`text-[#d4af37] text-[10px] font-black uppercase tracking-[1em] mb-6 block transition-all duration-1000 delay-300 
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {subtitle}
          </span>

          {/* Main Heading */}
          <h1 className={`text-white text-5xl md:text-8xl font-serif italic mb-8 leading-[1.1] tracking-tighter transition-all duration-1000 delay-500
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {title} <br />
            <span className="text-[#d4af37] not-italic">{highlight}</span>
          </h1>

          {/* Architectural Accent Line */}
          <div className={`h-[1px] bg-[#d4af37]/50 transition-all duration-[1.5s] delay-700
            ${isLoaded ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;