import React, { useEffect } from 'react';
import { PenTool, Shield, Scale, FileText, ArrowRight, Gavel, Globe, Info, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/common/HeroSection';

const TermAndCondations = () => {
  useEffect(() => {
    // Ensures page starts at top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Data for the Hero Component
  const heroData = {
    subtitle: "Bixbite Legal Collective",
    title: "Structural",
    highlight: "Integrity.",
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
  };

  const legalDocs = [
    { 
      id: "01", 
      title: "Intellectual Property Rights", 
      icon: <PenTool size={16}/>, 
      text: "Every geometry, structural calculation, and interior narrative featured within this digital archive is the exclusive intellectual asset of Bixbite Studio. Reproduction, mimicking, or unauthorized commercial distribution of these concepts is strictly monitored and legally protected under Indian and International Copyright Treaties. We treat our blueprints as proprietary trade secrets and technical innovations.",
      extended: "Our intellectual property extends to all CAD files, 3D visualizations, custom furniture designs, and lighting configurations developed by our team. Any unauthorized use in competing architectural projects will be met with immediate legal injunctions. We utilize digital watermarking and blockchain-based asset tracking to monitor our creative output globally."
    },
    { 
      id: "02", 
      title: "Contractual Engagement", 
      icon: <Shield size={16}/>, 
      text: "A professional architect-client relationship is formally established only upon the physical signing of our 'Studio Master Agreement' and the validation of the commencement retainer. The presentation of our portfolio is for descriptive purposes and does not constitute a public offer.",
      extended: "All engagements are subject to our standard fee structure as outlined by the Council of Architecture. Initial site visits and feasibility studies are billed separately from the design phase. Bixbite Studio reserves the right to decline projects that do not align with our ethical or structural standards."
    },
    { 
      id: "03", 
      title: "Data Accuracy & Disclaimers", 
      icon: <Scale size={16}/>, 
      text: "While we strive for absolute accuracy, the photographic and metric data provided are for conceptual visualization. Final structural outcomes are subject to onsite geological surveys, municipality regulations, and material availability.",
      extended: "Bixbite Studio is not responsible for errors in site measurements provided by third-party surveyors. All 'As-Built' drawings provided at the end of a project reflect the final state of construction, which may differ from initial renders due to structural necessity or client-approved modifications during the build phase."
    },
    { 
      id: "04", 
      title: "Liability & Professional Risk", 
      icon: <FileText size={16}/>, 
      text: "Bixbite Studio maintains professional indemnity; however, we are not liable for external third-party interpretations or misuse of the technical details provided on this site. Users are encouraged to seek direct consultation for specific project feasibility.",
      extended: "This limitation of liability applies to the maximum extent permitted by law. We do not guarantee the performance of external contractors unless they are explicitly managed under our 'Design-Build' contract. Safety audits are mandatory for all structural renovations managed by our firm."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1a1a1a] font-sans selection:bg-[#d4af37] selection:text-white overflow-x-hidden">
      
      {/* --- SECTION 1: DARK HEADER & HERO --- */}
      <div className="bg-[#050505] pb-20">
        <HeroSection 
          subtitle={heroData.subtitle}
          title={heroData.title}
          highlight={heroData.highlight}
          backgroundImage={heroData.backgroundImage}
        />
      </div>

      {/* --- SECTION 2: TRANSITION BOX (DARK TO LIGHT) --- */}
      <main className="max-w-[1600px] mx-auto relative z-20 -mt-24 px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 bg-white border border-black/5 shadow-2xl">
          <div className="p-8 border-r border-black/5 flex flex-col justify-between bg-[#FAF9F6]">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#d4af37]">Archive 2026</span>
            <Globe size={18} className="text-gray-300 hidden lg:block" />
          </div>
          <div className="p-8 lg:col-span-3">
             <h2 className="text-3xl md:text-5xl font-serif italic tracking-tighter leading-none mb-4">
               Professional <span className="text-gray-300">and</span> Legal Code.
             </h2>
             <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-loose max-w-xl">
               Governing the intersection of aesthetic luxury and regulatory compliance.
             </p>
          </div>
        </div>


        
        {/* --- SECTION 3: LIGHT CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-x border-b border-black/5 bg-white mb-20 shadow-sm">
          
          {/* Left Sidebar: Sticky Information */}
          <div className="lg:col-span-4 p-8 lg:p-12 bg-[#FAF9F6] border-r border-black/5 space-y-12">
            <div>
               <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#d4af37] mb-6">Executive Summary</h3>
               <p className="text-sm text-gray-500 font-light leading-relaxed">
                 Architecture is a public trust. We hold ourselves accountable to the legal frameworks of the High Court of Delhi.
               </p>
            </div>

            <div className="space-y-8">
               <div className="flex items-center gap-6">
                 <div className="w-12 h-12 bg-white border border-black/5 flex items-center justify-center rounded-full shadow-sm">
                    <Gavel size={18} className="text-[#d4af37]" />
                 </div>
                 <div>
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-black">Jurisdiction</h4>
                    <p className="text-[9px] text-gray-400 uppercase tracking-tighter font-medium">New Delhi, India</p>
                 </div>
               </div>
               
               <div className="pt-8 border-t border-black/5">
                 <p className="text-[10px] text-gray-400 italic font-serif leading-relaxed">
                   "To build is to create a legacy; to protect that legacy is our professional obligation to our clients."
                 </p>
               </div>
            </div>
          </div>

          {/* Right Column: Interactive Articles */}
          <div className="lg:col-span-8 divide-y divide-black/5">
            {legalDocs.map((doc) => (
              <div key={doc.id} className="group grid grid-cols-1 md:grid-cols-12 hover:bg-[#FAF9F6] transition-all duration-500">
                <div className="md:col-span-2 p-8 border-r border-black/5 flex items-start justify-between md:flex-col">
                  <span className="text-5xl font-serif italic text-black/[0.04] group-hover:text-[#d4af37]/20 transition-colors">
                    {doc.id}
                  </span>
                  <div className="text-gray-300 group-hover:text-[#d4af37] transition-colors">
                    {doc.icon}
                  </div>
                </div>
                <div className="md:col-span-10 p-8 lg:p-12">
                   <h3 className="text-xl lg:text-2xl font-serif italic mb-6 group-hover:translate-x-2 transition-transform duration-500">
                     {doc.title}
                   </h3>
                   <div className="text-sm md:text-base text-gray-600 leading-[1.8] font-light max-w-2xl space-y-6">
                      <p>{doc.text}</p>
                      
                      {/* Hidden Extended Content - Simulating Density */}
                      <div className="hidden group-hover:block animate-in fade-in slide-in-from-top-4 duration-700">
                        <p className="text-[11px] lg:text-xs text-gray-400 py-6 border-t border-black/[0.05] leading-relaxed">
                          {doc.extended}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-[#d4af37] transition-colors cursor-default">
                        <ChevronDown size={10} className="group-hover:rotate-180 transition-transform" />
                        <span>Hover to expand article</span>
                      </div>
                   </div>
                </div>
              </div>
            ))}

            {/* Final Dense Block: Arbitration */}
            <div className="p-8 lg:p-12 bg-gray-50/50">
               <div className="flex items-center gap-3 mb-6">
                  <Info size={14} className="text-[#d4af37]" />
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Governance & Arbitration</h4>
               </div>
               <p className="text-xs text-gray-400 leading-[2.2] md:columns-2 gap-12 font-light">
                 The relationship between Bixbite and the user is governed by the laws of India. Any disputes shall be settled through arbitration under the Arbitration and Conciliation Act, 1996. We maintain a policy of absolute transparency regarding client data and project specifications. Our digital presence is an extension of our physical office—designed with the same rigor and respect for structural boundaries. We reserve the right to modify these clauses to reflect changing national building codes and environmental regulations.
               </p>
            </div>
          </div>
        </div>
      </main>

      {/* --- SECTION 4: REFINED LIGHT FOOTER --- */}
      <footer className="py-24 bg-white border-t border-black/5 flex flex-col items-center">
        <div className="container mx-auto text-center px-6">
          <a href="mailto:legal@bixbitestudio.in" className="group flex flex-col items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-gray-300 group-hover:text-[#d4af37] transition-colors">
              Request Full Agreement
            </span>
            <div className="flex items-center gap-4 border-b border-black/10 pb-2 hover:border-[#d4af37] transition-all">
              <span className="text-xl md:text-3xl font-serif italic text-[#1a1a1a]">legal@bixbitestudio.in</span>
              <ArrowRight size={24} className="text-[#d4af37] group-hover:translate-x-4 transition-transform duration-500" />
            </div>
          </a>
          <div className="mt-20">
            <Link to="/" className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-400 hover:text-black transition-colors">
              Return to Archive
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermAndCondations;