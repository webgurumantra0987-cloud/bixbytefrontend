import React, { useEffect } from 'react';
import { FileText, Shield, Scale, PenTool, ArrowLeft, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermAndCondations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <PenTool size={20} />,
      title: "Intellectual Property",
      content: "All architectural designs, drawings, 3D renders, and conceptual frameworks displayed on this portfolio are the exclusive property of Bixbite Studio. Reproduction, distribution, or unauthorized use of these assets for commercial or personal gain without written consent is strictly prohibited."
    },
    {
      icon: <Shield size={20} />,
      title: "Project Engagement",
      content: "Engagement via the contact forms on this website does not constitute a formal contract. Official architectural commissions only commence upon the signing of a Physical Service Agreement and the receipt of an initial retainer fee."
    },
    {
      icon: <Scale size={20} />,
      title: "Accuracy of Information",
      content: "While we strive for precision, the project dimensions, years, and locations listed in this archive are for narrative purposes. Actual project specifications may vary based on final site conditions and client requirements."
    },
    {
      icon: <FileText size={20} />,
      title: "Liability Limits",
      content: "Bixbite Studio is not liable for any indirect or consequential damages arising from the use of this website or reliance on the visual information provided herein. Usage of this site is at the user's own discretion."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] font-sans selection:bg-[#d4af37] selection:text-white">
      
      {/* --- HEADER --- */}
      <header className="pt-32 pb-24 px-6 lg:px-20 border-b border-black/5">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-12 hover:pl-2 transition-all">
            <ArrowLeft size={14} /> Back to Archive
          </Link>
          <h1 className="text-7xl md:text-[10rem] font-serif italic leading-[0.8] tracking-tighter">
            Terms <span className="text-gray-300">&</span> <br /> Legal.
          </h1>
        </div>
      </header>

      {/* --- CONTENT GRID --- */}
      <main className="py-24 px-6 lg:px-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Sidebar Context */}
            <div className="space-y-8">
              <div className="sticky top-40">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#d4af37] block mb-4">Agreement</span>
                <p className="text-2xl font-serif italic text-gray-500 leading-relaxed max-w-sm">
                  By accessing this portfolio, you agree to abide by our professional standards and legal guidelines.
                </p>
                <div className="mt-12 p-8 border border-black/5 bg-white shadow-2xl shadow-black/5">
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-black">Governing Law</h4>
                    <p className="text-xs text-gray-400 leading-relaxed uppercase">
                        These terms are governed by the laws of India, specifically under the jurisdiction of Delhi courts.
                    </p>
                </div>
              </div>
            </div>

            {/* Main Terms List */}
            <div className="space-y-24">
              {sections.map((section, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-6 mb-8 opacity-30 group-hover:opacity-100 transition-opacity">
                    <span className="text-[#d4af37]">{section.icon}</span>
                    <span className="text-[9px] font-black uppercase tracking-[0.4em]">Section 0{idx + 1}</span>
                  </div>
                  <h3 className="text-3xl font-serif italic mb-6">{section.title}</h3>
                  <p className="text-gray-500 leading-[1.8] font-light text-lg border-l border-black/5 pl-8">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>

      {/* --- CTA FOOTER --- */}
      <footer className="py-40 bg-white border-t border-black/5 text-center">
        <div className="container mx-auto px-6">
          <p className="text-xs text-gray-400 mb-12 uppercase tracking-widest font-bold">Have a legal inquiry?</p>
          <a href="mailto:legal@bixbitestudio.in" className="group inline-flex items-center gap-8 border border-black px-16 py-7 hover:bg-black hover:text-white transition-all duration-700">
             <span className="text-[10px] font-black uppercase tracking-[0.6em]">Contact Legal</span>
             <Plus className="group-hover:rotate-90 transition-transform" size={16}/>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default TermAndCondations;