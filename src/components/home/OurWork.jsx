import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const OurWork = () => {
  const projects = [
    { id: "01", title: "Skyline HQ", cat: "Commercial", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000" },
    { id: "02", title: "The Glass Villa", cat: "Residential", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000" },
    { id: "03", title: "Retail Hub", cat: "Retail", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000" },
    { id: "04", title: "Bixbite Labs", cat: "Corporate", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000" },
    { id: "05", title: "Urban Atrium", cat: "Commercial", img: "https://images.unsplash.com/photo-1518005020250-6859b2827c1d?q=80&w=1000" },
    { id: "06", title: "Nordic Loft", cat: "Interior", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000" },
    { id: "07", title: "Summit Tower", cat: "Commercial", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000" },
    { id: "08", title: "Azure Coast", cat: "Residential", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000" },
    { id: "09", title: "Pixel Office", cat: "Corporate", img: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1000" },
    { id: "10", title: "The Gallery", cat: "Retail", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000" },
    { id: "11", title: "Stone Residence", cat: "Residential", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1000" },
    { id: "12", title: "Core Studio", cat: "Interior", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000" }
  ];

  return (
    <section className="py-20 bg-white text-black font-sans">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Heading matching your "The Design Journey" screenshot */}
        <div className="mb-14">
          <h2 className="text-5xl md:text-7xl font-serif italic leading-none mb-4">
            The <span className="not-italic font-sans font-black text-[#828a1c]">Archive.</span>
          </h2>
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-12 bg-[#828a1c]"></div>
            <p className="text-black/40 text-[9px] font-black uppercase tracking-[0.5em]">
              12 Project Commissions
            </p>
          </div>
        </div>

        {/* 4-Column Grid with REDUCED Uniform Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
              /* Reduced Height: h-[380px] */
              className="group relative h-[380px] overflow-hidden rounded-[1.5rem] cursor-pointer"
            >
              {/* Image Layer */}
              <img 
                src={project.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" 
                alt={project.title} 
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Minimal Top ID */}
              <div className="absolute top-6 left-6">
                <span className="text-white/40 font-mono text-[9px] tracking-widest uppercase">
                  [{project.id}]
                </span>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                <div className="h-9 w-9 bg-[#828a1c] text-white rounded-full flex items-center justify-center">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Content Area */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[#828a1c] text-[8px] font-black uppercase tracking-[0.4em] mb-2 block">
                  {project.cat}
                </span>
                <h3 className="text-white text-2xl font-serif italic leading-tight">
                  {project.title}
                </h3>
                
                {/* Visual Accent */}
                <div className="mt-4 w-0 h-[1px] bg-[#828a1c] group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional Action Bar */}
        <div className="mt-16 pt-8 border-t border-black/5 flex justify-center">
            <button className="group text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-4 hover:text-[#828a1c] transition-colors">
              Request Full Catalogue
              <div className="w-8 h-[1px] bg-black group-hover:bg-[#828a1c] group-hover:w-12 transition-all" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;