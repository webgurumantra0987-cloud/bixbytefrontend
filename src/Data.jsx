import { Building2, Layout, Home, Store, ShieldCheck, Paintbrush, Compass, HardHat } from "lucide-react";

import { Ruler, Shield } from 'lucide-react'

const getBadge = (index) => (index % 2 === 0 ? "Premium" : "Standard");

export const interiorData = [
  {
    category: "Commercial",
    icon: Building2,
    services: [
      { name: "Space planning & layout optimization", link: "space-planning" },
      { name: "Office, showroom & institutional design", link: "office-design" },
      { name: "Reception & waiting area design", link: "reception-design" },
      { name: "Workstation & cabin design", link: "workstation-design" },
      { name: "False ceiling & lighting solutions", link: "lighting-solutions" },
      { name: "Acoustic treatment", link: "acoustic-treatment" },
      { name: "Electrical & networking layout", link: "electrical-networking" },
      { name: "HVAC & fire safety coordination", link: "hvac-safety" },
      { name: "Material selection & finishing", link: "material-selection" },
      { name: "Brand-aligned interior concepts", link: "brand-interiors" },
      { name: "Project management & execution", link: "project-management" },
      { name: "Compliance with commercial building norms", link: "commercial-compliance" }
    ].map((s, i) => ({ ...s, badge: getBadge(i) }))
  },
  {
    category: "Corporate",
    icon: Layout,
    services: [
      { name: "Corporate space planning", link: "corporate-planning" },
      { name: "Ergonomic workstation design", link: "ergonomic-design" },
      { name: "CEO cabin & management offices", link: "executive-offices" },
      { name: "Boardroom & conference room design", link: "conference-rooms" },
      { name: "Corporate branding integration", link: "corporate-branding" },
      { name: "Modular furniture solutions", link: "modular-furniture" },
      { name: "Smart lighting & automation", link: "smart-automation" },
      { name: "Soundproofing & acoustics", link: "corporate-acoustics" },
      { name: "IT, AV & video conferencing setup", link: "it-av-setup" },
      { name: "Sustainable & green interiors", link: "green-interiors" },
      { name: "Turnkey project execution", link: "turnkey-execution" },
      { name: "AMC & post-handover support", link: "amc-support" }
    ].map((s, i) => ({ ...s, badge: getBadge(i) }))
  },
  {
    category: "Residential",
    icon: Home,
    services: [
      { name: "Home interior concept & theme design", link: "home-themes" },
      { name: "Living room & bedroom interiors", link: "room-interiors" },
      { name: "Modular kitchen design", link: "modular-kitchen" },
      { name: "Wardrobe & storage solutions", link: "storage-solutions" },
      { name: "False ceiling & decorative lighting", link: "residential-lighting" },
      { name: "Electrical & plumbing layout", link: "residential-utilities" },
      { name: "Furniture design & customization", link: "custom-furniture" },
      { name: "Space-saving solutions", link: "space-saving" },
      { name: "Vastu-compliant design", link: "vastu-interiors" },
      { name: "Material & color selection", link: "color-consultancy" },
      { name: "Turnkey home interior execution", link: "home-turnkey" },
      { name: "Budget-based customization", link: "budget-interiors" }
    ].map((s, i) => ({ ...s, badge: getBadge(i) }))
  },
  {
    category: "Retail",
    icon: Store,
    services: [
      { name: "Retail space planning", link: "retail-planning" },
      { name: "Customer flow & layout design", link: "customer-flow" },
      { name: "Display units & shelving design", link: "display-units" },
      { name: "Visual merchandising support", link: "merchandising" },
      { name: "Lighting for product highlighting", link: "retail-lighting" },
      { name: "Branding & signage integration", link: "retail-signage" },
      { name: "Cash counter & storage planning", link: "retail-storage" },
      { name: "Durable material selection", link: "retail-materials" },
      { name: "Shopfront & façade design", link: "shopfront-design" },
      { name: "Mall & high-street compliance", link: "mall-compliance" },
      { name: "Fast-track execution", link: "fast-track-retail" },
      { name: "Cost-effective retail solutions", link: "budget-retail" }
    ].map((s, i) => ({ ...s, badge: getBadge(i) }))
  }
];

export const exteriorData = [
  {
    category: "Commercial Exterior",
    icon: ShieldCheck,
    services: [
      { name: "Building façade design & elevation", link: "building-facade" },
      { name: "Exterior space planning", link: "exterior-planning" },
      { name: "Architectural theme development", link: "architectural-theme" },
      { name: "Glass, ACP, stone & cladding design", link: "cladding-design" },
      { name: "Entrance & frontage design", link: "entrance-design" },
      { name: "Outdoor lighting & façade illumination", link: "facade-lighting" },
      { name: "Signage & branding integration", link: "exterior-branding" },
      { name: "Weather-resistant material selection", link: "weatherproof-materials" },
      { name: "Structural coordination", link: "structural-coordination" },
      { name: "Energy-efficient solutions", link: "energy-solutions" },
      { name: "Fire safety & building compliance", link: "exterior-compliance" },
      { name: "Project execution & supervision", link: "exterior-execution" }
    ].map((s, i) => ({ ...s, badge: getBadge(i) }))
  },
  {
    category: "Corporate Exterior",
    icon: Paintbrush,
    services: [
      { name: "Corporate identity-based exterior design", link: "corporate-identity" },
      { name: "Modern façade & elevation planning", link: "corporate-facade" },
      { name: "Glass curtain wall systems", link: "glass-curtain-walls" },
      { name: "ACP & metal façade solutions", link: "metal-facade" },
      { name: "Corporate signage & logo placement", link: "corporate-signage" },
      { name: "Entry & drop-off zone design", link: "corporate-entry" },
      { name: "Landscape & outdoor seating integration", link: "corporate-landscape" },
      { name: "Architectural night lighting", link: "corporate-night-lighting" },
      { name: "Green building features", link: "green-building" },
      { name: "Corporate safety compliance", link: "corporate-safety" },
      { name: "Turnkey exterior execution", link: "corporate-turnkey" },
      { name: "Façade maintenance planning", link: "facade-maintenance" }
    ].map((s, i) => ({ ...s, badge: getBadge(i) }))
  },
  {
    category: "Residential Exterior",
    icon: Compass,
    services: [
      { name: "Home elevation & façade design", link: "home-elevation" },
      { name: "Modern or traditional architectural style", link: "architectural-styles" },
      { name: "Balcony, terrace & porch design", link: "balcony-design" },
      { name: "Boundary wall & gate design", link: "boundary-design" },
      { name: "Exterior paint & texture", link: "exterior-finishes" },
      { name: "Outdoor & garden lighting", link: "garden-lighting" },
      { name: "Landscape & driveway planning", link: "driveway-planning" },
      { name: "Weatherproof materials", link: "res-weatherproof" },
      { name: "Vastu-compliant exterior planning", link: "vastu-exterior" },
      { name: "Waterproofing & drainage", link: "waterproofing" },
      { name: "Budget-based exterior design", link: "budget-exterior" },
      { name: "Site execution & supervision", link: "site-supervision" }
    ].map((s, i) => ({ ...s, badge: getBadge(i) }))
  },
  {
    category: "Retail Exterior",
    icon: Store,
    services: [
      { name: "Retail shopfront & façade design", link: "retail-facade" },
      { name: "High-visibility branding", link: "retail-visibility" },
      { name: "Window display & glazing design", link: "window-glazing" },
      { name: "Customer entry planning", link: "retail-entry" },
      { name: "Attractive exterior lighting", link: "retail-exterior-lighting" },
      { name: "ACP, glass & metal finishes", link: "retail-finishes" },
      { name: "Mall & authority compliance", link: "retail-compliance" },
      { name: "Low-maintenance materials", link: "retail-maintenance" },
      { name: "Exterior visual merchandising", link: "retail-exterior-merch" },
      { name: "Fast-track execution", link: "retail-fast-track" },
      { name: "Cost-effective solutions", link: "retail-budget" },
      { name: "Façade upgrade support", link: "facade-upgrade" }
    ].map((s, i) => ({ ...s, badge: getBadge(i) }))
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


   export const processItems = [
    { 
      icon: <Ruler size={20} />, 
      title: "Site Analysis", 
      description: "Detailed measurement and structural assessment to understand the unique constraints of your space." 
    },
    { 
      icon: <Paintbrush size={20} />, 
      title: "Design Concept", 
      description: "Creating immersive 3D visualizations and material moodboards that align with your brand identity." 
    },
    { 
      icon: <Shield size={20} />, 
      title: "Execution", 
      description: "Full turnkey management and rigorous quality control to ensure the vision is built to perfection." 
    },
  ];

   export const spaceFAQ = [
    { 
      q: "How long does a spatial audit take?", 
      a: "Typically 5-7 business days. We conduct a thorough analysis of site constraints, structural loads, and circulation requirements." 
    },
    { 
      q: "Is Vastu compliant design standard?", 
      a: "Yes. Our lead architects are trained in Vastu Shastra to ensure your layout promotes positive energy flow and directional harmony." 
    },
    { 
      q: "Do you provide 3D walkthroughs?", 
      a: "Every project includes a high-fidelity 3D volume study. This helps you visualize the scale and proportions before we begin execution." 
    }
  ];


 