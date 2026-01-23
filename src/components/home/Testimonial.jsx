import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonial = () => {
  return (
    <section 
      className="py-32 bg-[#FAF9F6] relative overflow-hidden" 
      aria-labelledby="testimonial-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
        
        {/* Star Rating for SEO - Signals high quality to crawlers */}
        <div className="flex justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="fill-[#828a1c] text-[#828a1c]" />
          ))}
        </div>

        <Quote className="mx-auto text-[#828a1c]/10 mb-12" size={60} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 id="testimonial-heading" className="sr-only">Client Reviews and Testimonials</h2>
          
          {/* Headline with integrated keywords */}
          <blockquote className="text-3xl md:text-5xl font-serif italic text-[#1a1a1a] leading-[1.4] mb-12">
            "Bixbite didn't just design our headquarters; they curated an atmosphere that boosted our team's creativity. Their attention to <span className="text-[#828a1c] border-b border-[#828a1c]/30">modern architectural detail</span> and <span className="text-[#6b4411]">sustainable luxury</span> is unmatched in the Indian design industry."
          </blockquote>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-[1px] bg-[#6b4411] mb-6"></div>
            {/* Person Schema Information */}
            <cite className="not-italic">
              <p className="text-[#1a1a1a] font-black uppercase tracking-[0.3em] text-[11px]">Vikram Malhotra</p>
              <p className="text-gray-400 uppercase tracking-[0.2em] text-[9px] mt-1 font-bold">
                CEO, Skyline Enterprises — <span className="text-[#828a1c]">Premium Commercial Project</span>
              </p>
            </cite>
          </div>
        </motion.div>

        {/* SEO Contextual Footer - Low Visibility but high index value */}
        <div className="mt-20 opacity-40">
          <p className="text-[9px] uppercase tracking-[0.3em] text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Recognized as one of the **best luxury interior designers**, Bixbite provides **award-winning architectural consultancy** for high-profile clients and **commercial turnkey solutions**.
          </p>
        </div>
      </div>

      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#828a1c]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
    </section>
  );
};