import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0f0f0f] border-t border-white/5">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

      <div className="max-w-[1540px] mx-auto px-6 lg:px-12 py-20 grid gap-16">

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-12 gap-16">

          {/* BRAND */}
          <div className="lg:col-span-4">
            <h2 className="text-white text-2xl font-bold tracking-tighter">
              BIXBITE<span className="text-[#d4af37]">.</span>
            </h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-4 max-w-sm">
              Architecture that breathes. We design timeless spaces for modern visionaries.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:border-[#d4af37]/40 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">

            {/* Column */}
            <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                Studio
              </h4>
              <ul className="space-y-4">
                {["About Us", "Process", "Awards", "Careers"].map((item) => (
                  <li key={item}>
                    <Link
                      to="#"
                      className="text-gray-500 text-[11px] uppercase tracking-widest hover:text-white transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column */}
            <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                Services
              </h4>
              <ul className="space-y-4">
                {[
                  "Residential Interiors",
                  "Retail Spaces",
                  "Commercial Design",
                  "Lighting Design",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to="#"
                      className="text-gray-500 text-[11px] uppercase tracking-widest hover:text-white transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column */}
            <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                Portfolio
              </h4>
              <ul className="space-y-4">
                {["Luxury Homes", "Minimalist", "Office", "Hospitality"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        to="#"
                        className="text-gray-500 text-[11px] uppercase tracking-widest hover:text-white transition"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Column */}
            <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="text-gray-500 text-[11px] uppercase tracking-widest">
                  New York, USA
                </li>
                <li className="text-gray-500 text-[11px] uppercase tracking-widest">
                  hello@bixbite.studio
                </li>
                <li className="text-gray-500 text-[11px] uppercase tracking-widest">
                  +1 234 567 890
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/5" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-[10px] uppercase tracking-[0.3em]">

          <span>© 2026 Bixbite Studio. All Rights Reserved.</span>

          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="hover:text-white transition">
              Terms
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 hover:text-[#d4af37] transition"
            >
              Back to Top <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
