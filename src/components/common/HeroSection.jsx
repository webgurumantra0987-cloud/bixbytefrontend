import React, { useState, useEffect } from 'react';

const HeroSection = ({ 
  subtitle = "Bespoke Architectural Innovation", 
  title = "Defining Modern", 
  highlight = "Spaces", 
  images = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    "https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070"
  ], 
  height = "85vh" 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Slider Logic: Fade every 5 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section 
      className="relative flex items-center overflow-hidden bg-[#0F1113]"
      style={{ height: height }}
    >
      {/* Background Slider Layer - No Blur, Sharp Images */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out
              ${index === currentIndex ? 'opacity-40' : 'opacity-0'}`}
          >
            <img 
              src={img} 
              alt={`Slide ${index}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Simple Flat Overlay - No Gradients or Vignettes */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="max-w-5xl">
          
          {/* Micro Subtitle (8px) */}
          <div className="overflow-hidden mb-6">
            <span className={`text-white text-[8px] font-black uppercase tracking-[0.6em] block transition-all duration-1000 delay-300 
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
              {subtitle}
            </span>
          </div>

          {/* Main Heading (Solid White) */}
          <h1 className={`text-white text-5xl md:text-7xl lg:text-8xl font-serif italic mb-10 leading-[1.05] tracking-tighter transition-all duration-1000 delay-500
            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {title} <br />
            <span className="not-italic font-sans font-bold uppercase tracking-tight text-white">{highlight}</span>
          </h1>

          {/* Thin Architectural Divider */}
          <div className={`h-[1px] bg-white transition-all duration-[2s] delay-700
            ${isLoaded ? 'w-16 opacity-100' : 'w-0 opacity-0'}`}></div>
          
          {/* Micro Slider Indicators */}
          <div className={`mt-12 flex items-center gap-4 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`h-[1px] transition-all duration-700 ${i === currentIndex ? 'w-10 bg-white' : 'w-4 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;