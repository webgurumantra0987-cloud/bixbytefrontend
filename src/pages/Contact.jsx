import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Globe, Clock } from 'lucide-react';
 import { useForm } from "react-hook-form"
  import { ToastContainer, toast } from 'react-toastify';
 import axios from 'axios';
const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
   const apiUrl = 'https://apibixbyte.webgurumantra.com/api/';
   const { register, handleSubmit, formState: { errors } } = useForm();
  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, []);
   const onSubmit =   async(data) => {


     const response = await axios.post(`${apiUrl}/contact`, data);
      
       if (response.status === 201) {
         toast.success("✅ Contact Submitted Successfully");
       } else { 
         toast.error("❌ Contact Submission Failed");
       }    
    }


  return (
    <div className="bg-[#FAF9F6] min-h-screen selection:bg-[#d4af37] selection:text-white font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
            alt="Office Architecture" 
            className={`w-full h-full object-cover transition-all duration-[2000ms] ease-out ${isLoaded ? 'opacity-40 scale-105' : 'opacity-0 scale-110'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">
              Inquiries
            </span>
            <h1 className="text-white text-5xl md:text-8xl font-serif italic mb-8 leading-[1.1]">
              Start the <br />
              <span className="text-[#d4af37] not-italic">Dialogue.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* --- CONTACT & FORM SECTION --- */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            
            {/* LEFT SIDE: Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-[#1a1a1a] text-4xl font-serif italic mb-6">Contact Details.</h2>
                <p className="text-gray-500 max-w-sm leading-relaxed mb-10">
                  Whether you are planning a residential masterpiece or a commercial landmark, we invite you to reach out.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">General</p>
                    <p className="text-lg text-[#1a1a1a] font-serif italic">studio@bixbite.com</p>
                    <p className="text-sm text-gray-400">+1 (234) 567-890</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">Headquarters</p>
                    <p className="text-lg text-[#1a1a1a] font-serif italic">1200 Architecture Plaza</p>
                    <p className="text-sm text-gray-400">London Wall, EC2Y 5AS</p>
                  </div>
                </div>
              </div>

              {/* STYLIZED MAP CONTAINER */}
              <div className="relative w-full h-[400px] bg-gray-200 grayscale contrast-125 brightness-90 shadow-2xl group overflow-hidden border border-black/5">
                <iframe 
                  title="London Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.90519361611!2d-0.0921!3d51.5175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cab507b972d%3A0xa6464646464646!2sLondon%20Wall%2C%20London!5e0!3m2!1sen!2suk!4v1625000000000!5m2!1sen!2suk"
                  className="absolute inset-0 w-full h-full filter invert-[90%] hue-rotate-180 brightness-95"
                  frameBorder="0" 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
                {/* Overlay for aesthetic */}
                <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10"></div>
                <div className="absolute bottom-6 left-6 bg-white px-4 py-2 shadow-lg">
                   <p className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a]">View on Google Maps</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Form */}
            <div className="bg-white p-8 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-black/5">
               <h3 className="text-2xl font-serif italic mb-10">Project Inquiry</h3>
               <form className="space-y-8"  onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#d4af37] transition-colors">Full Name</label>
                    <input type="text  " {...register("name",{required:true} ) } className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#d4af37] outline-none transition-all text-[#1a1a1a]" placeholder="Ex. Julian Vane" />
                  </div>
                   <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#d4af37] transition-colors">Full Name</label>
                    <input type="number" {...register("phone",{required:true , maxLength:10} ) } className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#d4af37] outline-none transition-all text-[#1a1a1a]" placeholder="Ex. Julian Vane" />
                  </div>
                  
                  
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#d4af37] transition-colors">Email</label>
                    <input type="email" {...register("email",{required:true ,pattern:{
                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                         message: "invalid email address"
                    }})  } className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#d4af37] outline-none transition-all text-[#1a1a1a]" placeholder="email@address.com" />
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-focus-within:text-[#d4af37] transition-colors">Message</label>
                    <textarea rows="4"   {...register("message",{required:true} ) } className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#d4af37] outline-none transition-all text-[#1a1a1a] resize-none" placeholder="Briefly describe your vision..."></textarea>
                  </div>

                  <button className="group w-full bg-[#1a1a1a] text-white py-6 flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#d4af37] transition-all duration-500">
                    Submit Project Request <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>



      {/* --- GLOBAL PRESENCE --- */}
      <section className="py-24 bg-[#0a0a0a] text-white relative">
        <div className="container mx-auto px-6 text-center">
          <Globe className="text-[#d4af37] mx-auto mb-8 opacity-50" size={32} />
          <h3 className="text-3xl font-serif italic mb-6">Global Operations.</h3>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-6 text-[#d4af37] text-[10px] font-black uppercase tracking-[0.5em]">
             <span className="opacity-60 hover:opacity-100 cursor-default transition-opacity">London HQ</span>
             <span className="opacity-60 hover:opacity-100 cursor-default transition-opacity">Dubai Studio</span>
             <span className="opacity-60 hover:opacity-100 cursor-default transition-opacity">Milan Office</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;