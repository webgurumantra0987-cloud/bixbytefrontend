import React, { useState, useMemo, useEffect } from 'react';
import { ArrowUpRight, Plus, Layers, Globe, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
 import  { galleryData } from '../Data';


const Gallery = () => {
  const [sectFilter, setSectFilter] = useState('All Sectors');
  const sectors = ['All Sectors', 'Residential', 'Commercial', 'Institutional'];

  // Ensure scroll is at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = useMemo(() => {
    return galleryData.filter(proj => 
      sectFilter === 'All Sectors' || proj.sector === sectFilter
    );
  }, [sectFilter]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] selection:bg-[#d4af37] selection:text-white">
      
      {/* --- SECTION 1: DARK HERO (THE DRAMA) --- */}
      <section className="relative h-[95vh] w-full flex items-center overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 grayscale scale-105 transition-transform duration-[10s] hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0A0A0A]"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-10 animate-pulse">
              <div className="w-12 h-[1px] bg-[#d4af37]"></div>
              <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[1em]">Archive MMXXVI</span>
            </div>
            <h1 className="text-white text-7xl md:text-[12rem] font-serif italic leading-[0.75] tracking-tighter">
              Structural <br />
              <span className="text-[#d4af37] not-italic">Poetry</span>.
            </h1>
            <div className="mt-20 flex items-center gap-6 text-white/40">
                <ChevronDown size={20} className="animate-bounce" />
                <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Scroll to Explore</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: LIGHT GALLERY (THE DATA) --- */}
      <div className="relative z-20 bg-[#FAF9F6] text-[#1a1a1a] rounded-t-[40px] -mt-10 pt-20">
        
        {/* Sticky Nav */}
        <nav className="sticky top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-xl border-b border-black/5 px-6 lg:px-20 py-10">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-10 overflow-x-auto no-scrollbar w-full md:w-auto">
              {sectors.map((sect) => (
                <button 
                  key={sect} 
                  onClick={() => setSectFilter(sect)}
                  className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative pb-2 whitespace-nowrap
                    ${sectFilter === sect ? 'text-black' : 'text-gray-300 hover:text-black'}`}
                >
                  {sect}
                  {sectFilter === sect && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4af37]"></span>
                  )}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
               <Globe size={14} className="text-[#d4af37]" />
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Global Index / {filteredProjects.length}</span>
            </div>
          </div>
        </nav>

        {/* Masonry Grid */}
        <main className="py-32 px-6 lg:px-20">
          <div className="container mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-32">
              {filteredProjects.map((project, idx) => (
                <div key={project.id} className="relative break-inside-avoid group pt-4">
                  <Link to={`/project/${project.id}`} className="block">
                    
                    {/* Image with Industrial Border */}
                    <div className="relative overflow-hidden bg-white border border-black/5 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-black/5">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 flex items-center gap-3">
                          <Layers size={12} className="text-[#d4af37]" />
                          <span className="text-[8px] font-black uppercase tracking-widest">{project.sector}</span>
                      </div>
                    </div>

                    {/* Meta Data */}
                    <div className="mt-10 px-2 flex justify-between items-end">
                      <div>
                        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-3">{project.location}</p>
                        <h3 className="text-4xl font-serif italic text-black leading-none group-hover:text-[#d4af37] transition-colors">
                            {project.title}
                        </h3>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* --- SECTION 3: LIGHT FOOTER --- */}
        <footer className="py-60 text-center border-t border-black/5">
          <div className="container mx-auto px-6">
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-gray-300 mb-12 block">Inquiries</span>
            <h2 className="text-6xl md:text-[10rem] font-serif italic tracking-tighter leading-[0.8] mb-16">
               Start the <br /> <span className="text-[#d4af37] not-italic">Dialogue</span>.
            </h2>
            <Link to="/contact" className="group inline-flex items-center gap-10 bg-[#1a1a1a] text-white px-20 py-8 hover:bg-[#d4af37] transition-all duration-500">
               <span className="text-[11px] font-black uppercase tracking-[0.6em]">Connect</span>
               <Plus className="group-hover:rotate-90 transition-transform duration-500" />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Gallery;