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



  export const projects = [
    // EXTERIOR - 12 ITEMS
    { id: 1, title: "The Obsidian Villa", category: "Exterior", location: "Athens, Greece", year: "2024", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" },
    { id: 2, title: "Azure Coast Estate", category: "Exterior", location: "Monaco", year: "2023", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" },
    { id: 3, title: "Monolith Pavilion", category: "Exterior", location: "Oslo, Norway", year: "2024", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" },
    { id: 4, title: "Canyon Retreat", category: "Exterior", location: "Arizona, USA", year: "2022", image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80" },
    { id: 5, title: "Glass Horizon", category: "Exterior", location: "Dubai, UAE", year: "2025", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80" },
    { id: 6, title: "The Brutalist Box", category: "Exterior", location: "Berlin, Germany", year: "2023", image: "https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80" },
    { id: 7, title: "Solaris Heights", category: "Exterior", location: "Malibu, USA", year: "2024", image: "https://images.unsplash.com/photo-1505843513577-22bb7d21ef45?auto=format&fit=crop&q=80" },
    { id: 8, title: "Alpine Sanctuary", category: "Exterior", location: "Swiss Alps", year: "2023", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80" },
    { id: 9, title: "Verdana Estate", category: "Exterior", location: "Tuscany, Italy", year: "2022", image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80" },
    { id: 10, title: "Zenith Tower", category: "Exterior", location: "Singapore", year: "2025", image: "https://images.unsplash.com/photo-1449156001437-3a1621dfbe69?auto=format&fit=crop&q=80" },
    { id: 11, title: "The Pebble House", category: "Exterior", location: "Kyoto, Japan", year: "2024", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80" },
    { id: 12, title: "Echo Canyon Residence", category: "Exterior", location: "Cape Town, SA", year: "2023", image: "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?auto=format&fit=crop&q=80" },

    // INTERIOR - 12 ITEMS
    { id: 13, title: "Marble Serenity", category: "Interior", location: "Milan, Italy", year: "2024", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80" },
    { id: 14, title: "Velvet Executive", category: "Interior", location: "London, UK", year: "2023", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80" },
    { id: 15, title: "Minimalist Loft", category: "Interior", location: "New York, USA", year: "2024", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80" },
    { id: 16, title: "Gold Leaf Suite", category: "Interior", location: "Paris, France", year: "2022", image: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80" },
    { id: 17, title: "The Oak Library", category: "Interior", location: "Edinburgh, Scotland", year: "2025", image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80" },
    { id: 18, title: "Art Deco Lounge", category: "Interior", location: "Miami, USA", year: "2023", image: "https://images.unsplash.com/photo-1616594116733-470081dd0067?auto=format&fit=crop&q=80" },
    { id: 19, title: "Japandi Living", category: "Interior", location: "Tokyo, Japan", year: "2024", image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80" },
    { id: 20, title: "Concrete Haven", category: "Interior", location: "Berlin, Germany", year: "2023", image: "https://images.unsplash.com/photo-1615876234586-44491fbd0f97?auto=format&fit=crop&q=80" },
    { id: 21, title: "Azure Dining", category: "Interior", location: "Monaco", year: "2022", image: "https://images.unsplash.com/photo-1617806118233-18e16208a50a?auto=format&fit=crop&q=80" },
    { id: 22, title: "Terracotta Kitchen", category: "Interior", location: "Seville, Spain", year: "2025", image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&q=80" },
    { id: 23, title: "Cloud Master Bed", category: "Interior", location: "Sydney, Australia", year: "2024", image: "https://images.unsplash.com/photo-1616060222521-38c11bd8e2bf?auto=format&fit=crop&q=80" },
    { id: 24, title: "Brass & Stone Bath", category: "Interior", location: "Lisbon, Portugal", year: "2023", image: "https://images.unsplash.com/photo-1620626011761-9963d7521477?auto=format&fit=crop&q=80" },
  ];