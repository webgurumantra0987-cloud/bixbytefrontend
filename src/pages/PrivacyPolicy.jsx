import React, { useEffect } from 'react';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "January 26, 2026";
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a] font-sans selection:bg-[#d4af37] selection:text-white">
      
      {/* --- MINIMAL DARK HEADER --- */}
      <header className="bg-[#0A0A0A] pt-32 pb-20 px-6 lg:px-20 text-center">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-[#d4af37] text-[10px] font-black uppercase tracking-[0.4em] mb-12 hover:opacity-70 transition-opacity">
            <ArrowLeft size={14} /> Back to Studio
          </Link>
          <h1 className="text-white text-5xl md:text-8xl font-serif italic tracking-tighter mb-4">
            Privacy <span className="text-[#d4af37] not-italic">&</span> Data.
          </h1>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.5em]">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </header>

      {/* --- POLICY CONTENT --- */}
      <main className="py-24 px-6 lg:px-20">
        <div className="container mx-auto max-w-4xl">
          
          <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
            <div className="md:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-[11px] font-black uppercase tracking-[0.4em] mb-6 text-[#d4af37]">Introduction</h2>
                <p className="text-sm text-gray-500 leading-relaxed italic font-serif">
                  "At Bixbite Studio, we believe transparency is the foundation of structural integrity—both in architecture and in data."
                </p>
              </div>
            </div>
            
            <div className="md:col-span-8 space-y-16 text-gray-700 leading-relaxed">
              {/* Point 1 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Eye size={20} className="text-[#d4af37]" />
                  <h3 className="text-xl font-bold tracking-tight">Information Collection</h3>
                </div>
                <p>
                  We collect information that you provide directly to us through our contact forms, including your name, email address, and project details. Additionally, we use cookies and similar technologies to analyze site traffic and improve your browsing experience.
                </p>
              </div>

              {/* Point 2 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <ShieldCheck size={20} className="text-[#d4af37]" />
                  <h3 className="text-xl font-bold tracking-tight">How We Use Your Data</h3>
                </div>
                <p>The information we collect is used to:</p>
                <ul className="list-none space-y-4 mt-4">
                  <li className="flex gap-4 border-l-2 border-black/5 pl-6 py-1 italic">01. Respond to inquiries regarding architectural commissions.</li>
                  <li className="flex gap-4 border-l-2 border-black/5 pl-6 py-1 italic">02. Send curated updates about our studio's latest works (if opted in).</li>
                  <li className="flex gap-4 border-l-2 border-black/5 pl-6 py-1 italic">03. Maintain and optimize the technical performance of this portfolio.</li>
                </ul>
              </div>

              {/* Point 3 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Lock size={20} className="text-[#d4af37]" />
                  <h3 className="text-xl font-bold tracking-tight">Security & Protection</h3>
                </div>
                <p>
                  We implement industry-standard security measures to protect your personal information. Your data is never sold to third parties. We only share information with trusted service providers who assist in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
                </p>
              </div>

              {/* Point 4 */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <FileText size={20} className="text-[#d4af37]" />
                  <h3 className="text-xl font-bold tracking-tight">Your Rights</h3>
                </div>
                <p>
                  You have the right to request access to the personal data we hold about you, or to request that we correct or delete it. For any privacy-related inquiries, please contact us at: 
                  <span className="block mt-4 font-black text-black tracking-widest text-[11px] uppercase">
                    privacy@bixbitestudio.in
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* --- INDIAN COMPLIANCE NOTE --- */}
          <div className="bg-white border border-black/5 p-12 text-center shadow-2xl shadow-black/5">
             <Globe size={24} className="mx-auto text-[#d4af37] mb-6" />
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4">Jurisdiction</h4>
             <p className="text-sm text-gray-500 max-w-lg mx-auto">
               This policy is governed by the laws of India. By using this site, you consent to our processing of your information in accordance with this Privacy Policy.
             </p>
          </div>

        </div>
      </main>

      {/* --- MINIMAL FOOTER --- */}
      <footer className="py-20 bg-[#0A0A0A] text-center">
        <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.8em]">
          Bixbite Studio © 2026 / All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;