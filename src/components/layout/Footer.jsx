import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus, Instagram, Linkedin } from "lucide-react";
import { exteriorData, interiorData } from "../../Data";



const Footer = () => {
  const [activeTab, setActiveTab] = useState("interior");
  const [openSector, setOpenSector] = useState(null);

  const currentData = activeTab === "interior" ? interiorData : exteriorData;

  return (
    <footer className="bg-[#FAF9F6] pt-24 pb-10 text-black font-sans selection:bg-black selection:text-white border-t border-black/10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-20">
        {/* TOP SECTION: TAB NAVIGATION */}
        <div className="mb-12 border-b border-black pb-6">
          <div className="flex items-center gap-10">
            <span className="text-black text-[7px] font-black uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">
              Expertise
            </span>
            <div className="flex gap-10">
              {["interior", "exterior"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setOpenSector(null);
                  }}
                  className="relative group pb-2"
                >
                  <h2
                    className={`text-xs md:text-sm uppercase tracking-[0.4em] font-medium transition-colors duration-500 ${
                      activeTab === tab
                        ? "text-[#828a1c]"
                        : "text-black hover:text-[#828a1c]"
                    }`}
                  >
                    {tab}
                  </h2>
                  {activeTab === tab && (
                    <motion.div
                      layoutId="footerTabUnderline"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-[#828a1c]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          {/* LEFT COLUMN: ACCORDION with Transition Key */}
          <motion.div
            key={activeTab} // THIS IS KEY: It forces a re-animation when tab changes
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 border-t border-black/5"
          >
            {currentData.map((sector, index) => {
              const isOpen = openSector === sector.category;
              return (
                <div key={sector.category} className="border-b border-black/10">
                  <button
                    onClick={() =>
                      setOpenSector(isOpen ? null : sector.category)
                    }
                    className="w-full py-10 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-8">
                      <span className="font-mono text-[8px] font-medium text-black/40 group-hover:text-[#828a1c] transition-colors">
                        0{index + 1}
                      </span>
                      {/* Category Hover Effect: Solid Black -> Green */}
                      <h3
                        className={`text-xl md:text-2xl uppercase tracking-[0.15em] font-medium transition-colors duration-500 ${
                          isOpen
                            ? "text-[#828a1c]"
                            : "text-black group-hover:text-[#828a1c]"
                        }`}
                      >
                        {sector.category}
                      </h3>
                    </div>
                    {isOpen ? (
                      <Minus
                        size={18}
                        strokeWidth={1}
                        className="text-[#828a1c]"
                      />
                    ) : (
                      <Plus
                        size={18}
                        strokeWidth={1}
                        className="text-black group-hover:text-[#828a1c] transition-colors"
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 pb-12 pl-12">
                          {sector.services.map((service, idx) => (
                            <Link
                              key={idx}
                              to={`/${service.link}`}
                              className="group/link flex items-center justify-between border-b border-black/5 py-3"
                            >
                              {/* Sub-item Hover Effect: Solid Black -> Green */}
                              <span className="text-[10px] text-black group-hover:text-[#828a1c] uppercase tracking-[0.1em] transition-colors font-medium">
                                {service.name}
                              </span>
                              <ArrowUpRight
                                size={12}
                                className="opacity-0 group-hover:opacity-100 text-[#828a1c] transform translate-y-1 group-hover:translate-y-0 transition-all"
                              />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* RIGHT COLUMN: CONTACT */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="w-full h-72 bg-gray-100 overflow-hidden border border-black/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.302305314051!2d77.0673474!3d28.4403164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18ef660a0f01%3A0x6739665f80b91d92!2sSector%2044%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="text-black text-[9px] font-black uppercase tracking-[0.5em] border-b border-black pb-2 w-fit">
                  Location
                </p>
                <p className="text-[14px] uppercase tracking-[0.1em] font-medium text-black leading-relaxed">
                  Plot 44, Sector 44,
                  <br />
                  Institutional Area, Gurgaon,
                  <br />
                  Haryana 122003
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-black text-[9px] font-black uppercase tracking-[0.5em] border-b border-black pb-2 w-fit">
                  Inquiries
                </p>
                <div className="text-[14px] uppercase tracking-[0.1em] font-medium flex flex-col gap-2 text-black">
                  <a
                    href="tel:+919876543210"
                    className="hover:text-[#828a1c] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                  <a
                    href="mailto:hello@bixbite.in"
                    className="hover:text-[#828a1c] transition-colors"
                  >
                    hello@bixbite.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM LEGAL SECTION */}
        <div className="pt-10 border-t border-black flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-10">
            <span className="text-[9px] font-black uppercase tracking-[0.5em]">
              Bixbite Innovation Studio © 2026
            </span>
            <div className="flex gap-5">
              <Instagram
                size={14}
                className="cursor-pointer hover:text-[#828a1c] transition-colors"
              />
              <Linkedin
                size={14}
                className="cursor-pointer hover:text-[#828a1c] transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.5em]">
            <Link
              to="/privacy"
              className="hover:text-[#828a1c] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[#828a1c] transition-colors"
            >
              Terms of Service
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 group ml-4"
            >
              <span className="font-bold group-hover:text-[#828a1c] transition-colors">
                Back To Top
              </span>
              <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center group-hover:bg-[#828a1c] group-hover:border-[#828a1c] group-hover:text-white transition-all">
                <ArrowUpRight size={14} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
