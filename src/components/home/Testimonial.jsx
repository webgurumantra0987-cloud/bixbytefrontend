import React from 'react';
import { Quote, Star, MapPin, Award, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const testimonials = [
  { id: "01", name: "Vikram Malhotra", role: "CEO, Skyline", location: "Delhi", project: "Commercial", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80", quote: "Bixbite curated an atmosphere that boosted our team's creativity. Exceptional detail." },
  { id: "02", name: "Ananya Sharma", role: "Director, Lume", location: "Mumbai", project: "Hospitality", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80", quote: "The fusion of sculptural aesthetics and utility redefined luxury for our guests." },
  { id: "03", name: "Rajesh Varma", role: "Founder, Varma", location: "Bangalore", project: "Residential", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80", quote: "Engineering precision at its finest. They turned a complex site into a marvel." },
  { id: "04", name: "Siddharth Goel", role: "Private Client", location: "Gurgaon", project: "Villa", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80", quote: "My home feels like a piece of art that functions perfectly with the environment." },
  { id: "05", name: "Ishani Rai", role: "MD, Urban Space", location: "Pune", project: "Interior", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80", quote: "They have an intuitive understanding of space and light. Highly recommended." },
  { id: "06", name: "Arjun Mehta", role: "COO, TechPark", location: "Hyderabad", project: "Corporate", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80", quote: "A seamless transition from concept to execution. The turnkey solution was flawless." },
  { id: "07", name: "Kavita Singh", role: "Owner, Bloom", location: "Jaipur", project: "Retail", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80", quote: "Bixbite captured our brand's soul through their architectural vision." },
  { id: "08", name: "Rohan Das", role: "Architectural Lead", location: "Kolkata", project: "Institutional", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80", quote: "Innovative materials and sustainable focus. They are the future of Indian design." },
];

export const Testimonial = () => {
  return (
    <section className="py-32 bg-[#FAF9F6] overflow-hidden testimonial-slider-container">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        
        {/* Navigation Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-gray-200 pb-10">
          <div className="max-w-2xl">
            <span className="text-[#828a1c] text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Client Validation</span>
            <h2 className="text-[#1a1a1a] text-5xl md:text-7xl font-serif italic leading-none">
              The <span className="not-italic font-sans font-black text-[#828a1c]">Global</span> Collective.
            </h2>
          </div>
          
          {/* Custom Arrows */}
          <div className="flex gap-4">
            <button className="swiper-prev-btn w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#828a1c] hover:text-white transition-all duration-500">
              <ChevronLeft size={20} />
            </button>
            <button className="swiper-next-btn w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#828a1c] hover:text-white transition-all duration-500">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-prev-btn',
            nextEl: '.swiper-next-btn',
          }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 }, // Shows 4 cards in one grid row
          }}
          className="pb-20"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-[45px] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col h-full group">
                
                {/* Top Row */}
                <div className="flex justify-between items-start mb-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-[#828a1c]/10 rounded-[25px] rotate-6 group-hover:rotate-12 transition-transform"></div>
                    <img src={item.image} className="w-20 h-20 rounded-[25px] object-cover relative z-10" alt={item.name} />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-[#828a1c] text-[#828a1c]" />
                    ))}
                  </div>
                </div>

                {/* Info Block */}
                <div className="mb-6">
                  <h3 className="text-xl font-black text-[#1a1a1a] mb-1">{item.name}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#828a1c]">{item.role}</p>
                </div>

                <p className="text-gray-500 text-base leading-relaxed italic font-serif mb-8 flex-grow">
                  "{item.quote}"
                </p>

                {/* Location/Project Blocks */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-[#FAF9F6] p-3 rounded-2xl flex flex-col gap-1">
                    <MapPin size={12} className="text-[#828a1c]" />
                    <span className="text-[8px] font-black uppercase text-gray-400">{item.location}</span>
                  </div>
                  <div className="bg-[#FAF9F6] p-3 rounded-2xl flex flex-col gap-1">
                    <Award size={12} className="text-[#828a1c]" />
                    <span className="text-[8px] font-black uppercase text-gray-400">{item.project}</span>
                  </div>
                </div>

                {/* Dark Button Style */}
                <button className="w-full bg-[#1a1a1a] text-white py-4 rounded-2xl flex items-center justify-center gap-3 group/btn hover:bg-[#828a1c] transition-all duration-500">
                  <span className="text-[10px] font-black uppercase tracking-widest">Case Study</span>
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};