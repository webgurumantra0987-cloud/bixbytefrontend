import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../Data';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Exterior', 'Interior'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[#FAF9F6] min-h-screen selection:bg-[#d4af37] selection:text-white font-sans">
      
      {/* --- HERO SECTION (Left-Aligned to match About Us Header Style) --- */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
            alt="Hero Background" 
            className={`w-full h-full object-cover transition-all duration-[2000ms] ease-out ${isLoaded ? 'opacity-40 scale-105' : 'opacity-0 scale-110'} animate-slow-zoom`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.6em] mb-6 block animate-fade-in-up">
              Portfolio
            </span>
            <h1 className="text-white text-5xl md:text-8xl font-serif italic mb-8 leading-[1.1] animate-fade-in-up">
              The Gallery of <br />
              <span className="text-[#d4af37] not-italic">Refined</span> Vision.
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 opacity-80 animate-fade-in-up">
              Explore our curated archive of bespoke architecture and high-end interior design, where every line tells a story of precision and soul.
            </p>
          </div>
        </div>
      </section>

      {/* --- STICKY FILTER NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-xl border-b border-black/5 py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${
                activeFilter === cat ? 'text-[#1a1a1a]' : 'text-gray-400 hover:text-[#1a1a1a]'
              }`}
            >
              {cat}
              {activeFilter === cat && (
                <div className="absolute -bottom-2 left-0 w-full h-[1.5px] bg-[#d4af37]"></div>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* --- EDITORIAL PROJECT GRID --- */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Using a waterfall layout (offset middle items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-16">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`group relative flex flex-col transition-all duration-700 ${index % 3 === 1 ? 'lg:translate-y-24' : ''}`}
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 shadow-2xl shadow-black/5">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  {/* Hover Label Overlay */}
                  <div className="absolute inset-0 bg-[#0a0a0a]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[8px] font-black tracking-widest text-black">
                    {project.year || "2024"}
                  </div>
                </div>

                {/* Info Wrap */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-[1px] w-6 bg-[#d4af37]"></div>
                    <span className="text-[#d4af37] text-[9px] font-black uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-[#1a1a1a] text-2xl font-serif italic tracking-tight group-hover:text-[#d4af37] transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-[#d4af37]" />
                  </h3>
                  
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] leading-none">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="py-40 bg-[#0a0a0a] mt-40 relative overflow-hidden">
        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#d4af37_1px,transparent_1px),linear-gradient(to_bottom,#d4af37_1px,transparent_1px)] [background-size:100px_100px]"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-white text-5xl md:text-8xl font-serif italic mb-12 leading-tight">
            Build Your <span className="text-[#d4af37]">Masterpiece</span>.
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-6 bg-[#d4af37] text-black px-16 py-6 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 shadow-xl">
            Enquire Today
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Gallery;