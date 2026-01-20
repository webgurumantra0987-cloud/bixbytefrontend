import { Building2, Layout, Home, Store, ShieldCheck, Paintbrush, Compass, HardHat } from "lucide-react";

const getBadge = (index) => {
  if (index === 0) return "Top Rated";
  if (index === 2) return "Premium";
  if (index === 10) return "Turnkey";
  return null;
};

export const interiorData = [
  {
    category: "Commercial",
    icon: Building2,
    services: [
      "Space planning & layout optimization", "Office, showroom & institutional design", "Reception & waiting area design", "Workstation & cabin design", "False ceiling & lighting solutions", "Acoustic treatment", "Electrical & networking layout", "HVAC & fire safety coordination", "Material selection & finishing", "Brand-aligned interior concepts", "Project management & execution", "Compliance with commercial building norms"
    ].map((s, i) => ({ name: s, badge: getBadge(i) }))
  },
  {
    category: "Corporate",
    icon: Layout,
    services: [
      "Corporate space planning", "Ergonomic workstation design", "CEO cabin & management offices", "Boardroom & conference room design", "Corporate branding integration", "Modular furniture solutions", "Smart lighting & automation", "Soundproofing & acoustics", "IT, AV & video conferencing setup", "Sustainable & green interiors", "Turnkey project execution", "AMC & post-handover support"
    ].map((s, i) => ({ name: s, badge: getBadge(i) }))
  },
  {
    category: "Residential",
    icon: Home,
    services: [
      "Home interior concept & theme design", "Living room & bedroom interiors", "Modular kitchen design", "Wardrobe & storage solutions", "False ceiling & decorative lighting", "Electrical & plumbing layout", "Furniture design & customization", "Space-saving solutions", "Vastu-compliant design", "Material & color selection", "Turnkey home interior execution", "Budget-based customization"
    ].map((s, i) => ({ name: s, badge: getBadge(i) }))
  },
  {
    category: "Retail",
    icon: Store,
    services: [
      "Retail space planning", "Customer flow & layout design", "Display units & shelving design", "Visual merchandising support", "Lighting for product highlighting", "Branding & signage integration", "Cash counter & storage planning", "Durable material selection", "Shopfront & façade design", "Mall & high-street compliance", "Fast-track execution", "Cost-effective retail solutions"
    ].map((s, i) => ({ name: s, badge: getBadge(i) }))
  }
];

export const exteriorData = [
  {
    category: "Commercial Exterior",
    icon: ShieldCheck,
    services: [
      "Building façade design & elevation", "Exterior space planning", "Architectural theme development", "Glass, ACP, stone & cladding design", "Entrance & frontage design", "Outdoor lighting & façade illumination", "Signage & branding integration", "Weather-resistant material selection", "Structural coordination", "Energy-efficient solutions", "Fire safety & building compliance", "Project execution & supervision"
    ].map((s, i) => ({ name: s, badge: getBadge(i) }))
  },
  {
    category: "Corporate Exterior",
    icon: Paintbrush,
    services: [
      "Corporate identity-based exterior design", "Modern façade & elevation planning", "Glass curtain wall systems", "ACP & metal façade solutions", "Corporate signage & logo placement", "Entry & drop-off zone design", "Landscape & outdoor seating integration", "Architectural night lighting", "Green building features", "Corporate safety compliance", "Turnkey exterior execution", "Façade maintenance planning"
    ].map((s, i) => ({ name: s, badge: getBadge(i) }))
  },
  {
    category: "Residential Exterior",
    icon: Compass,
    services: [
      "Home elevation & façade design", "Modern or traditional architectural style", "Balcony, terrace & porch design", "Boundary wall & gate design", "Exterior paint & texture", "Outdoor & garden lighting", "Landscape & driveway planning", "Weatherproof materials", "Vastu-compliant exterior planning", "Waterproofing & drainage", "Budget-based exterior design", "Site execution & supervision"
    ].map((s, i) => ({ name: s, badge: getBadge(i) }))
  },
  {
    category: "Retail Exterior",
    icon: Store,
    services: [
      "Retail shopfront & façade design", "High-visibility branding", "Window display & glazing design", "Customer entry planning", "Attractive exterior lighting", "ACP, glass & metal finishes", "Mall & authority compliance", "Low-maintenance materials", "Exterior visual merchandising", "Fast-track execution", "Cost-effective solutions", "Façade upgrade support"
    ].map((s, i) => ({ name: s, badge: getBadge(i) }))
  }
];




export const servicesExpertise = [
  { 
    id: "01", 
    title: "Commercial Planning", 
    seo: "Optimizing high-traffic retail & corporate environments.",
    tag: "Strategy",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    fullDescription: "Our commercial planning service focuses on maximizing spatial efficiency and brand visibility. We analyze footfall patterns to create layouts that drive engagement in retail and corporate settings."
  },
  { 
    id: "02", 
    title: "Residential Curation", 
    seo: "Exclusive home interiors with smart automation integration.",
    tag: "Living",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
    fullDescription: "We craft bespoke living environments that blend luxury with technology. From custom furniture selection to full smart-home integration, every detail is curated for high-end comfort."
  },
  { 
    id: "03", 
    title: "Corporate Identity", 
    seo: "Brand-aligned workspaces designed for peak productivity.",
    tag: "Work",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80",
    fullDescription: "Your workspace should reflect your company culture. We design corporate offices that inspire innovation, improve employee well-being, and communicate professional excellence."
  },
  { 
    id: "04", 
    title: "Landscape Architecture", 
    seo: "Urban biophilic design and private garden sanctuaries.",
    tag: "Nature",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80",
    fullDescription: "Bridging the gap between structure and nature. Our landscape designs feature sustainable irrigation, indigenous flora, and architectural lighting for 24/7 outdoor luxury."
  },
  { 
    id: "05", 
    title: "Retail Engineering", 
    seo: "High-conversion storefronts and luxury visual merchandising.",
    tag: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    fullDescription: "Combining psychology and architecture to create retail spaces that sell. We focus on storefront impact, lighting, and customer journey engineering for luxury brands."
  },
  { 
    id: "06", 
    title: "Hospitality Design", 
    seo: "World-class hotel and resort environments.",
    tag: "Leisure",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    fullDescription: "Creating destination experiences through architecture. We specialize in luxury resorts and boutique hotels where every square foot is designed for guest satisfaction."
  }
];