import { Building2, Leaf, Grid,Layout,DoorOpen,Sparkles, Footprints, Timer,Boxes,Home,Banknote, Store, Type, ShieldCheck, Paintbrush, Compass, ClipboardCheck,Palette,Settings  ,Focus

, Map,
Move,
ShieldAlert,
Layers,
Moon,
Fingerprint,
Target,
Car,
Sprout,
HardHat,
Coffee,
PaintBucket,
Landmark,
Microscope,
Diamond



} from "lucide-react";

import { Ruler, Framer,Shield ,Scale,Sun,Activity,Lightbulb,TrendingDown} from 'lucide-react'

const getBadge = (index) => (index % 2 === 0 ? "Premium" : "Standard");





 export const galleryData = [
  // --- EXISTING INTERNATIONAL SELECTIONS ---
  { id: 1, title: "The Obsidian Villa", sector: "Residential", location: "Malibu, CA", year: "2024", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" },
  { id: 2, title: "Grand Hyatt Facade", sector: "Commercial", location: "Dubai, UAE", year: "2023", image: "https://media.istockphoto.com/id/1430769311/photo/the-lobby-of-a-luxury-hotel-in-arabic-style-with-high-ceilings-columns-and-a-reception-desk.webp?a=1&b=1&s=612x612&w=0&k=20&c=tG3aB-B0FNg6NxiPtd8v80R4gNrBNCnqRgkbk7aKPIs=" },
  { id: 3, title: "Minimalist Loft", sector: "Residential", location: "Berlin, DE", year: "2024", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" },
  { id: 4, title: "Azure Corporate HQ", sector: "Commercial", location: "Singapore", year: "2022", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" },
  
  // --- NEW INDIAN ARCHITECTURAL SELECTIONS ---
  { id: 13, title: "The Lotus Pavilion", sector: "Institutional", location: "New Delhi, IN", year: "2024", image: "https://images.unsplash.com/photo-1752758814584-afc1de531fef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBpbWFncyUyMExPVFVTJTIwUEFWSUxJT058ZW58MHx8MHx8fDA%3D" },
  { id: 14, title: "Jaipur Heritage Wing", sector: "Commercial", location: "Jaipur, RJ", year: "2023", image: "https://images.unsplash.com/photo-1651569411954-b843950d0c1e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBpbWFncyUyMEpBSVBVUiUyMEhFQVJUQUdFJTIwV0lMTHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 15, title: "Cybercity Glass Monolith", sector: "Commercial", location: "Gurugram, HR", year: "2025", image: "https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=Nk1uLgimD0AG9ADjHPx1iLvhZnm28YW6VRZr7uGwvS0=" },
  { id: 16, title: "Bungalow 42", sector: "Residential", location: "Bengaluru, KA", year: "2024", image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200" },
  { id: 17, title: "Marine Drive Suites", sector: "Residential", location: "Mumbai, MH", year: "2022", image: "https://media.istockphoto.com/id/1443804835/photo/a-beautiful-city-with-a-beach-and-some-tetrapods-as-well-as-a-seating-area.webp?a=1&b=1&s=612x612&w=0&k=20&c=AKsK_arQ-HS79xXxyo-HsEXvMyz63NlBl9s7Xy8sfI0=" },
  { id: 18, title: "Concrete Ashram Retreat", sector: "Institutional", location: "Rishikesh, UK", year: "2023", image: "https://media.istockphoto.com/id/1129124675/photo/maruti-temple-in-panjim.webp?a=1&b=1&s=612x612&w=0&k=20&c=pnsEERjo0b7BuNPbaSWRoCDQfZzVvLRkJeWcGgWNxPI=" },
  { id: 19, title: "The Brick Courtyard", sector: "Residential", location: "Ahmedabad, GJ", year: "2024", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200" },
  { id: 20, title: "Himalayan Glass House", sector: "Residential", location: "Manali, HP", year: "2025", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200" },
  
  // --- PREVIOUS INTERNATIONAL DATA ---
  { id: 5, title: "Ethereal Museum", sector: "Institutional", location: "Paris, FR", year: "2024", image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200" },
  { id: 6, title: "Skyline Observatory", sector: "Institutional", location: "Tokyo, JP", year: "2023", image: "https://media.istockphoto.com/id/691792778/photo/standing-young-woman-and-modern-city-panorama-view-from-inside-of-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=8pwiMgE11CLUPX3rB220g9pM8mY_cL_yzd8AKZoZjuM=" },
  { id: 7, title: "The Quartz Pavillion", sector: "Institutional", location: "Zurich, CH", year: "2024", image: "https://media.istockphoto.com/id/171205509/photo/architecture-corporate-interior-1.webp?a=1&b=1&s=612x612&w=0&k=20&c=vrXFPFKNaCNhb7_yTK9hWRKRE0RkjmGuDioACgdHuqA=" },
  { id: 8, title: "Onyx Executive Suite", sector: "Commercial", location: "London, UK", year: "2023", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" },
  { id: 9, title: "Desert Mirage Estate", sector: "Residential", location: "Arizona, USA", year: "2024", image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=1200" },
  { id: 10, title: "Brutalist Library", sector: "Institutional", location: "Oslo, NO", year: "2022", image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200" },
  { id: 11, title: "Vertical Forest Loft", sector: "Residential", location: "Milan, IT", year: "2023", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" },
  { id: 12, title: "Silvergate Tower", sector: "Commercial", location: "Seoul, KR", year: "2025", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80&w=1200" }
];






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

  export const financialParagraphs = [
  {
    id: 0,
    title: "The Philosophy of Value-Based Design",
    content: "In the modern corporate landscape, a budget is often perceived as a constraint—a rigid boundary that dictates the limits of creativity. At Bixbite, we challenge this paradigm by treating financial parameters as a catalyst for innovation. Budget-based customization is not about choosing cheaper materials; it is about the surgical allocation of capital to the areas that yield the highest human and operational dividends. By shifting the conversation from 'what does it cost?' to 'what does it earn?', we help organizations navigate the complexities of interior investment.",
    imageUrl: "https://images.unsplash.com/photo-1454165833767-027ffea10c3b?q=80&w=2070",
    imageCaption: "Strategic Capital Allocation"
  },
  {
    id: 1,
    title: "Computational Value Engineering (CVE)",
    content: "Our methodology is anchored in Computational Value Engineering (CVE), a data-driven process that identifies the 'sweet spot' between cost and impact. We break down the traditional Bill of Quantities (BOQ) into functional performance metrics, allowing clients to see exactly how their investment translates into acoustic comfort, ergonomic health, and brand equity. Through CVE, we identify 'Ghost Costs' and reallocate those funds into high-impact zones like collaborative hubs.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070",
    imageCaption: "Data-Driven Engineering"
  },
  {
    id: 2,
    title: "The Impact-to-Spend Ratio",
    content: "Not every square meter of an office serves the same purpose. We apply an 'Impact-to-Spend Ratio' to zone planning, ensuring premium resources are concentrated in 'High-Touch' areas—the lobby, the boardroom, and client-facing suites. Simultaneously, we utilize 'Smart-Standard' solutions for back-end work zones, focusing on durability and lighting quality rather than ornamental finishes. This prevents budget dilution.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
    imageCaption: "High-Touch Zone Prioritization"
  },
  {
    id: 3,
    title: "Lifecycle Costing and Long-term ROI",
    content: "The true cost of an office interior is found in the years of operation that follow. Our budget-based customization includes a comprehensive Lifecycle Costing (LCC) audit. We evaluate the durability of fabrics, the energy efficiency of lighting, and the modularity of furniture systems to ensure that a lower initial investment doesn't lead to higher maintenance overheads. We focus on materials with high 'Repairability Scores'.",
    imageUrl: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=2070",
    imageCaption: "Long-term Asset Management"
  },
  {
    id: 4,
    title: "Procurement and Global Sourcing",
    content: "Navigating the global supply chain is critical to budget management. Bixbite’s procurement engine utilizes a vast network of Direct-to-Factory (DTF) relationships, bypassing retail markups. Because we understand the raw material costs of steel, timber, and glass, we can negotiate pre-production rates. This allows us to provide 'Professional' grade materials at 'Essential' price points.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    imageCaption: "Global Sourcing Network"
  },
  {
    id: 5,
    title: "Scalable Growth and Phased Execution",
    content: "For rapidly scaling organizations, a massive capital expenditure can be a barrier. We offer a 'Phased Execution' model where the office is designed in its entirety, but implemented in modules aligned with growth milestones. We create a 'Core-and-Expand' layout, ensuring Phase 1 feels complete while the infrastructure for future phases is hidden behind 'Agile Partitioning'.",
    imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070",
    imageCaption: "Phased Modular Growth"
  },
  {
    id: 6,
    title: "Sustainability as a Cost-Saving Driver",
    content: "Sustainable design is an effective tool for budget optimization. By utilizing passive cooling and daylight harvesting, we significantly reduce long-term utility costs. Furthermore, many sustainable material choices come with tax incentives and ESG rebates that lower the effective cost of construction. We ensure ethical design is a financially prudent choice.",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2070",
    imageCaption: "Resource Efficiency"
  },
  {
    id: 7,
    title: "The Bixbite Fixed-Price Guarantee",
    content: "The hallmark of our execution is the Bixbite Fixed-Price Guarantee. We recognize that 'Budget Creep' is the most significant fear for stakeholders. Once the BOQ is signed, Bixbite assumes all financial risk. If material costs rise or logistics fees fluctuate, the client’s price remains unchanged. This commitment ensures the final handover is devoid of financial friction.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070",
    imageCaption: "Contractual Financial Security"
  }
];
  
export const mepData = {
  hero: {
    subtitle: "Infrastructure & Life-Safety",
    title: "The Arteries of",
    highlight: "Architecture.",
    backgroundImage: "https://images.unsplash.com/photo-1558389186-438424b00a32?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Systemic Integrity",
    titlePart1: "Invisible Rigor.",
    titlePart2: "Total Performance.",
    description: "True luxury in architecture is silent. It is the perfect atmospheric temperature, the immediate delivery of pressurized water, and the flicker-free stability of power. We treat MEP not as a secondary utility, but as the central nervous system of your project.",
    bullets: ["Load-Tested Circuitry", "Pressure-Certified Plumbing", "3D Clash Detection"]
  },
  matrix: {
    icon: Activity,
    title: "Engineering Pillars",
    items: ['Thermal Load Analysis', 'Acoustic Pipe Shielding', 'Smart Grid Integration', 'Redundant Power Logic']
  },
  narrative: [
    {
      id: "01",
      title: "Systemic Integrity",
      text: "We treat MEP not as a secondary utility, but as the central nervous system of your project, ensuring that high-end aesthetics are supported by a foundation of absolute reliability.",
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Electrical Grid Precision",
      text: "Our electrical layouts are engineered for the age of automation. We perform rigorous load-balancing and phase-analysis to prevent surges, ensuring stability for sensitive smart-home systems.",
      image: "https://images.unsplash.com/photo-1621905231291-530ae3301c0e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Hydraulic Excellence",
      text: "Water management is a science of pressure. We design systems that ensure consistent flow while implementing acoustic insulation to eliminate the sound of water movement within walls.",
      image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Thermal & HVAC Logic",
      text: "Our HVAC designs prioritize zone-based cooling and HEPA-grade filtration, integrated seamlessly into the ceiling architecture so vents remain discreet.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "3D BIM Coordination",
      text: "Before a single pipe is laid, we build a digital twin. Using BIM, we detect clashes between structural beams and utility lines, preventing costly on-site modifications.",
      image: "https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Life-Safety Engineering",
      text: "Our layouts incorporate NFPA-compliant fire suppression and emergency lighting paths, with redundant power failovers that trigger in milliseconds.",
      image: "https://images.unsplash.com/photo-1599708141690-d93d295bb9bd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Sustainable Infrastructure",
      text: "We integrate low-flow fixtures and greywater recycling loops, reducing the carbon footprint while significantly lowering long-term utility costs.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Legacy of Maintenance",
      text: "We design layouts with dedicated utility shafts and clearly labeled access panels, ensuring that future upgrades can be performed without disturbing finished surfaces.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Design Accuracy", value: "99.8%" },
    { label: "Inspection Pass", value: "100%" },
    { label: "Failover Speed", value: "0.2s" },
    { label: "Energy Savings", value: "30%" }
  ],
  faq: {
    title: "MEP Strategy FAQs",
    items: [
      { q: "How do you handle future upgrades?", a: "We design conduits with 30% vacancy for future tech." },
      { q: "Is the plumbing noiseless?", a: "Yes, we use cast iron or insulated acoustic piping." }
    ]
  },
  cta: {
    title: "Engineer the invisible.",
    description: "Connect with our MEP consultants to audit your site infrastructure.",
    buttonText: "Get Engineering Audit",
    link: "/contact"
  }
};
export const lightingData = {
  hero: {
    subtitle: "Volumetric Design & Atmosphere",
    title: "Sculpting with",
    highlight: "Light & Void.",
    backgroundImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Spatial Dimension",
    titlePart1: "The Fifth Wall.",
    titlePart2: "Luminous Depth.",
    description: "A ceiling is not merely a boundary; it is a canvas for architectural expression. At Bixbite, we combine structural geometry with advanced illumination logic to redefine spatial volume. Our approach transforms overhead planes into dynamic elements that dictate the mood, scale, and soul of an interior.",
    bullets: ["Acoustic Performance", "Integrated Diffuser Logic", "Scene Automation"]
  },
  matrix: {
    icon: Sun,
    title: "Lighting Pillars",
    items: [
      'Lux-Level Mapping', 
      'Kelvin Temperature Control', 
      'Shadow-Gap Detailing', 
      'Indirect Cove Geometry',
      'Acoustic NRC Management',
      'Automated Scene Logic'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Volumetric Sculpting",
      text: "We view the ceiling as the 'Fifth Wall.' By varying heights through multi-tiered false ceilings, we create zones within open-plan spaces, using recessed coves and stepped geometries to manipulate the perception of room volume and architectural scale.",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "The Science of Layering",
      text: "Atmosphere is built in layers. We integrate four distinct levels of light: Ambient (overall visibility), Task (focused performance), Accent (highlighting art), and Mood (soft peripheral glows). This hierarchy ensures the space remains functional yet emotionally resonant.",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Shadow-Gap Detailing",
      text: "The hallmark of modern luxury is the 'floating' ceiling effect. We utilize precise shadow gaps and perimeter channels that hide light sources, allowing a soft wash of illumination to bleed down the walls, creating a weightless architectural feel.",
      image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?q=80&w=1964&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Kelvin & Circadian Logic",
      text: "Light affects biology. Our decorative lighting plans prioritize tunable whites—shifting from cool, energizing 4000K daylight during the afternoon to warm, relaxing 2700K amber tones in the evening, mirroring the natural rhythm of the sun.",
      image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Invisible Integration",
      text: "A clean ceiling is a quiet ceiling. We leverage the false ceiling cavity to conceal HVAC diffusers, fire sprinklers, and audio speakers, ensuring that the visual purity of the design is never interrupted by necessary technical infrastructure.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Acoustic Attenuation",
      text: "Hard surfaces create echo. Our ceiling designs incorporate perforated gypsum and acoustic fabric backings within the decorative tiers to absorb sound, ensuring that high-ceilinged spaces remain intimate and conversation-friendly.",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Decorative Statement Pieces",
      text: "If lighting is the jewelry of a room, the chandelier is its centerpiece. We curate and custom-mount statement fixtures that act as focal points, ensuring their scale, lumen output, and material finish align perfectly with the surrounding architectural language.",
      image: "https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Smart Scene Automation",
      text: "Complexity managed by simplicity. Every lighting element is tied into a central control system, allowing you to trigger pre-set scenes like 'Gallery,' 'Evening Glow,' or 'Entertainment' via a single touch, perfectly balancing every light source simultaneously.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Energy Efficiency", value: "90% LED" },
    { label: "Lux Consistency", value: "98%" },
    { label: "Scene Presets", value: "Unlimited" },
    { label: "NRC Rating", value: "0.75+" }
  ],
  faq: {
    title: "Lighting Design FAQs",
    items: [
      { q: "What is the minimum height required for a false ceiling?", a: "We typically require 4-6 inches for basic LED coves, and 8-12 inches if concealing HVAC ducting." },
      { q: "How do you avoid glare in decorative lighting?", a: "We use deep-regressed COB lights and indirect bouncing techniques to ensure the light source is never directly visible to the eye." }
    ]
  },
  cta: {
    title: "Illuminate your vision.",
    description: "Schedule a lighting consultation to transform your space through volumetric design.",
    buttonText: "Request Lighting Plan",
    link: "/contact"
  }
};

export const furnitureData = {
  hero: {
    subtitle: "Bespoke Craft & Ergonomics",
    title: "The Art of",
    highlight: "Functional Form.",
    backgroundImage: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Material Honesty",
    titlePart1: "Bespoke Soul.",
    titlePart2: "Precision Fit.",
    description: "Furniture is the bridge between architecture and the human body. At Bixbite, we don't just select pieces; we engineer them. Our custom furniture design service focuses on the intersection of anatomical comfort, rare materiality, and spatial optimization—ensuring every piece feels like an extension of the architecture itself.",
    bullets: ["Hardwood Integrity", "Ergonomic Mapping", "Zero-VOC Finishes"]
  },
  matrix: {
    icon: Ruler,
    title: "Craftsmanship Pillars",
    items: [
      'Anatomical Prototyping', 
      'Grain-Match Veneering', 
      'Mortise & Tenon Joinery', 
      'High-Resiliency Foam Density',
      'Textile Durability Testing',
      'Hidden Hardware Logic'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Anatomical Ergonomics",
      text: "Every bespoke seating element begins with a study of human posture. We calculate seat depth, lumbar support angles, and foam density to ensure that our furniture doesn't just look sculptural, but provides long-term physical support tailored to the user's specific height and comfort needs.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Material Sourcing",
      text: "We believe in the soul of raw materials. From hand-picked slabs of reclaimed teak to rare Italian marbles and full-grain leathers, our sourcing process prioritizes sustainability and natural aging, ensuring your furniture gains character over decades of use.",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Millimetric Precision",
      text: "Customization allows us to utilize every square inch of a floor plan. We design built-in cabinetry and modular wardrobes that align perfectly with ceiling shadow gaps and wall textures, creating a 'seamless' look that off-the-shelf furniture simply cannot achieve.",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Textile Engineering",
      text: "Upholstery is a tactile experience. We select fabrics based on 'Martindale' rub-counts for durability, while ensuring the breathability of fibers. Our curated library includes stain-resistant performance weaves, silk-velvets, and hand-woven linens from global heritage mills.",
      image: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=2130&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Traditional Joinery",
      text: "In an age of fast furniture, we return to heritage techniques. Our artisans use mortise-and-tenon, dovetail, and finger joints. This traditional joinery is not just a sign of quality; it allows the wood to expand and contract naturally, preventing structural cracks over time.",
      image: "https://images.unsplash.com/photo-1507908708455-711bc6ad36e8?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Hardware Innovation",
      text: "The movement of furniture should be effortless. We integrate soft-close German hardware, push-to-open magnetic latches, and hidden wireless charging pads into our designs, ensuring that the utility of a piece is advanced but entirely invisible.",
      image: "https://images.unsplash.com/photo-1551133990-7dec23629728?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Curated Curation",
      text: "Not every piece needs to be custom-built. We bridge the gap by curating iconic mid-century modern classics and contemporary designer pieces, blending bespoke Bixbite creations with global icons to create a layered, lived-in aesthetic.",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Prototyping & VR Walkthrough",
      text: "To eliminate guesswork, we provide 1:1 scale sectional prototypes for comfort testing and high-fidelity VR walkthroughs. This allows you to feel the scale of the furniture within your specific room before a single cut is made in the wood.",
      image: "https://images.unsplash.com/photo-1592591544534-6663f9408e06?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Wood Grade", value: "FAS Premium" },
    { label: "Fabric Durability", value: "50k+ Rubs" },
    { label: "Hand-Finish Time", value: "120Hrs+" },
    { label: "Life Span", value: "Generational" }
  ],
  faq: {
    title: "Furniture Customization FAQs",
    items: [
      { q: "What is the lead time for custom furniture?", a: "Depending on the complexity and wood seasoning, typically 8-12 weeks from design approval." },
      { q: "Do you offer a warranty on joinery?", a: "Yes, we provide a 10-year structural warranty on all Bixbite custom-built timber furniture." }
    ]
  },
  cta: {
    title: "Design for the body.",
    description: "Collaborate with our craftsmen to create a piece that fits your home and your life perfectly.",
    buttonText: "Start Custom Design",
    link: "/contact"
  }
};


export const conceptDesignData = {
  hero: {
    subtitle: "Vision & Spatial Strategy",
    title: "The Genesis of",
    highlight: "Atmosphere.",
    backgroundImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Conceptual Genesis",
    titlePart1: "Beyond Walls.",
    titlePart2: "Defined Identity.",
    description: "Concept design is the intellectual foundation of a home. It is where we translate your lifestyle, memories, and aspirations into a tangible architectural language. At Bixbite, we don't start with floor plans; we start with a 'Concept Narrative'—a singular vision that ensures every material, light fixture, and corner of the house tells a cohesive story.",
    bullets: ["Mood Cartography", "Zoning Logic", "Identity Workshops"]
  },
  matrix: {
    icon: Lightbulb,
    title: "Concept Pillars",
    items: [
      'Visual Narrative Mapping', 
      'Color Psychology Analysis', 
      'Spatial Flow Optimization', 
      'Material Tactility Boards',
      'Atmospheric Lighting Study',
      'Lifestyle-Driven Zoning'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Narrative Workshop",
      text: "Every great home starts with a story. We begin by extracting 'First Principles'—how you wake up, how you entertain, and how you retreat. This workshop defines the conceptual north star, ensuring that the design remains true to your identity throughout the complex construction process.",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Atmospheric Cartography",
      text: "We map the 'Emotional Temperature' of each room. Using mood boards that go beyond simple furniture, we look at textures, shadows, and scent-mapping to determine how a space should feel—be it a sun-drenched, airy breakfast nook or a dark, cocoon-like library.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Spatial Choreography",
      text: "Design is movement. We analyze the 'Desire Lines'—the natural paths you take through a home. By optimizing the flow between public hosting areas and private sanctuaries, we ensure the house works intuitively, eliminating dead zones and awkward transitions.",
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "The Tactile Palette",
      text: "Architecture is experienced through the fingertips. In the concept stage, we define the 'Material DNA'—the honest interplay between cold stones, warm timbers, and soft textiles. This ensures a balanced sensory experience before a single purchase is made.",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Volumetric Zoning",
      text: "We think in 3D volumes rather than 2D lines. By adjusting ceiling heights and floor levels conceptually, we create a sense of hierarchy in the home. Large, expansive volumes for social interaction are balanced by compressed, intimate spaces for reflection.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Luminous Strategy",
      text: "Concept design treats light as a building material. We study the path of the sun (Solar Orientation) to place openings that capture morning light and evening glows, minimizing the need for artificial lighting while maximizing the home's connection to nature.",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Lifestyle Synchronization",
      text: "A home must adapt to its inhabitants. Our concepts include 'Flex-Space' logic—rooms that evolve from a home office to a guest suite or a nursery. We build future-proofing into the design DNA, allowing the home to grow as your life does.",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Photorealistic Visioning",
      text: "The final step of the concept phase is the 'Grand Reveal.' Through high-fidelity 3D renders and VR walkthroughs, you can experience the atmosphere of your future home with millimetric accuracy, ensuring complete confidence before moving into technical drafting.",
      image: "https://images.unsplash.com/photo-1635443315592-56743936934c?q=80&w=1932&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Design Iterations", value: "Unlimited" },
    { label: "VR Readiness", value: "100%" },
    { label: "Material Sourcing", value: "Global" },
    { label: "Concept Accuracy", value: "High-Fi" }
  ],
  faq: {
    title: "Concept Design FAQs",
    items: [
      { q: "What is the outcome of the concept phase?", a: "You receive a complete Concept Book containing mood boards, material palettes, spatial zoning, and 3D renders." },
      { q: "Can I change my mind later?", a: "The concept phase is precisely for exploration. It is significantly cheaper to move a virtual wall now than a brick wall later." }
    ]
  },
  cta: {
    title: "Dream in high-fidelity.",
    description: "Start your journey with a concept workshop and see your vision come to life before you build.",
    buttonText: "Book Concept Workshop",
    link: "/contact"
  }
};


export const livingBedroomData = {
  hero: {
    subtitle: "Living & Restorative Spaces",
    title: "Sanctuaries for",
    highlight: "Daily Life.",
    backgroundImage: "https://images.unsplash.com/photo-1616486341351-70ad5a934ad2?q=80&w=2000&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Habitat Curation",
    titlePart1: "Dual Narratives.",
    titlePart2: "The Art of Living.",
    description: "A home is defined by its ability to oscillate between social vibrancy and private stillness. At Bixbite, we design living rooms that act as a sophisticated stage for connection, and bedrooms that serve as silent retreats for restoration. Our approach focuses on sensory comfort—where acoustic privacy meets tactile luxury.",
    bullets: ["Zonal Fluidity", "Restorative Ergonomics", "Bespoke Soft Furnishings"]
  },
  matrix: {
    icon: Home,
    title: "Habitat Pillars",
    items: [
      'Social Geometry Mapping', 
      'Acoustic Sleep Engineering', 
      'Circadian Lighting Scenes', 
      'Bespoke Upholstery Logic',
      'Hidden Storage Integration',
      'Climate-Controlled Comfort'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Social Geometry",
      text: "The living room is a landscape for conversation. We design furniture layouts based on 'social triangles'—ensuring that seating distances are intimate enough for dialogue but spaced for fluid movement. Every sofa and lounge chair is positioned to maximize both focal views and interpersonal connection.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Acoustic Seclusion",
      text: "Peace is an architectural achievement. For bedrooms, we implement multi-layered acoustic strategies—from wall-to-wall soft headboards to heavy-density window treatments—creating a 'sound-cocoon' that filters out the white noise of the external world for deeper rest.",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2080&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "The Feature Wall Narrative",
      text: "Every primary space needs a visual anchor. Whether it is a hand-burnished lime wash finish in the living room or a bespoke fluted timber panel behind the bed, we create vertical interest that adds texture and depth without cluttering the floor plane.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Ergonomic Sanctuary",
      text: "In the bedroom, the bed is the most critical piece of engineering. We integrate custom bed frames with built-in nightstands, wireless charging pads, and 'toe-kick' LED lighting that activates upon movement, ensuring the space is as smart as it is comfortable.",
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Zonal Lighting Logic",
      text: "Lighting must adapt to the time of day. In living spaces, we use 'layering'—floor lamps for reading, warm cove lighting for movies, and accent spots for art. In bedrooms, we prioritize low-Kelvin, blue-light-free sources to support healthy melatonin production.",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Tactile Continuity",
      text: "The transition from public to private should be felt underfoot. We curate a material palette that shifts from the durable elegance of stone or wide-plank oak in the living room to the plush, sensory warmth of hand-tufted silk-wool carpets in the bedroom suites.",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Hidden Utility",
      text: "Clutter is the enemy of calm. Our designs feature 'Invisible Storage'—custom-integrated wardrobes that blend into the wall paneling and media units that conceal wiring and technology, keeping the focus on the architectural lines of the room.",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Circadian Synchronization",
      text: "We automate your environment to follow the sun. Using smart-motorized curtains and tunable lighting, your bedroom wakes you gently with natural light, while your living room adjusts its mood automatically as the day turns into evening.",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Acoustic Rating", value: "-45dB" },
    { label: "Fabric Quality", value: "Premium" },
    { label: "Lighting Scenes", value: "Smart" },
    { label: "Restoration Index", value: "High" }
  ],
  faq: {
    title: "Residential Design FAQs",
    items: [
      { q: "How do you handle small living spaces?", a: "We use low-profile furniture, mirrored reflections, and continuous flooring to trick the eye into seeing more volume." },
      { q: "What is the best lighting for a bedroom?", a: "We recommend a mix of 2700K warm white for general use and dimmable accent lights for late-night reading." }
    ]
  },
  cta: {
    title: "Refine your habitat.",
    description: "Transform your most personal spaces into masterpieces of comfort and style.",
    buttonText: "Request Interior Plan",
    link: "/contact"
  }
};




export const materialData = {
  hero: {
    subtitle: "Tactility & Visual Cohesion",
    title: "The Alchemy of",
    highlight: "Surfaces.",
    backgroundImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Sensory Curation",
    titlePart1: "Tactile Truth.",
    titlePart2: "Color Logic.",
    description: "Materials are the skin of a building. At Bixbite, we curate surfaces that invite touch and colors that evoke emotion. Our selection process is an exhaustive study of how light hits a grain of wood, how stone retains temperature, and how a pigment shifts from dawn to dusk. We don't just pick colors; we engineer atmospheres.",
    bullets: ["Organic Material Sourcing", "Pigment Stability", "Texture Contrast Mapping"]
  },
  matrix: {
    icon: Palette,
    title: "Selection Pillars",
    items: [
      'Reflectance Value Mapping', 
      'Material Durability Grading', 
      'Chromatic Harmony Analysis', 
      'Sustainable Sourcing Audit',
      'Tactile Contrast Balancing',
      'UV Resistance Testing'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Chromatic Psychology",
      text: "Color is the most immediate way to influence the psyche. We move beyond trends to apply color psychology—using grounding earth tones for stability in living areas and ethereal, desaturated hues in personal sanctuaries to promote cortisol reduction and mental clarity.",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Material Honesty",
      text: "We prioritize materials in their most honest state. Whether it is the raw porosity of travertine or the deep, irregular grain of smoked oak, we believe that 'imperfections' are what provide a space with soul and a connection to the natural world.",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "The Interplay of Light",
      text: "Materials do not exist in a vacuum; they exist in light. We test every sample under multiple 'Kelvin' temperatures—from the warm 2700K of evening lamps to the 5000K of midday sun—ensuring the color remains sophisticated and consistent regardless of the hour.",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Tactile Layering",
      text: "A successful room is a symphony of textures. We use a 'High-Low' contrast strategy—pairing cold, polished metals with warm, rough-hewn timbers, or smooth silk wallpapers with coarse linen upholstery—to create a sensory richness that evolves as you move through the space.",
      image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Sustainable Pigmentation",
      text: "Beauty should not come at a cost to health. We exclusively select low-VOC (Volatile Organic Compound) paints and natural mineral pigments that ensure superior air quality while providing a 'dead-flat' matte finish that traditional synthetic paints cannot replicate.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Durability & Patina",
      text: "We design for the future. Our material audits include 'Accelerated Aging' considerations—how will this brass oxidize? How will this leather soften? We choose materials that don't just 'wear out,' but 'wear in,' developing a beautiful patina over decades of use.",
      image: "https://images.unsplash.com/photo-1507908708455-711bc6ad36e8?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Acoustic Softness",
      text: "Material selection is also an acoustic tool. By integrating high-NRC (Noise Reduction Coefficient) materials like felt panels, heavy drapery, and cork-backed wallcoverings, we dampen echoes and create a 'soft' auditory environment in even the most minimalist rooms.",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "The Flat-Lay Curation",
      text: "Before finalization, we create physical 'Flat-Lays.' This tactile board allows you to see the actual samples—wood, stone, fabric, and paint—side-by-side. This 'Physical Preview' ensures that the digital vision translates perfectly into the real-world environment.",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "VOC Content", value: "Low/Zero" },
    { label: "Material Sourcing", value: "Global" },
    { label: "Color Accuracy", value: "99%" },
    { label: "Durability Grade", value: "Commercial" }
  ],
  faq: {
    title: "Material Strategy FAQs",
    items: [
      { q: "Can I use natural marble in high-traffic areas?", a: "We recommend 'honed' finishes for high-traffic stone, which hides etches and scratches better than polished surfaces." },
      { q: "How do I choose the right white?", a: "Whites are never neutral. We analyze the room's compass orientation—North-facing rooms need warm whites, while South-facing rooms need cooler undertones." }
    ]
  },
  cta: {
    title: "Curate your palette.",
    description: "Start your material journey with a tactile workshop to define the skin of your future home.",
    buttonText: "Request Material Audit",
    link: "/contact"
  }
};


export const kitchenData = {
  hero: {
    subtitle: "Precision & Culinary Engineering",
    title: "The Heart of the",
    highlight: "Modern Home.",
    backgroundImage: "https://images.unsplash.com/photo-1556912170-453f2c713249?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Culinary Logic",
    titlePart1: "Surgical Precision.",
    titlePart2: "Bespoke Flow.",
    description: "A kitchen is the most complex machine in a home. At Bixbite, we design modular kitchens as high-performance environments where ergonomics meet elegance. Every drawer pull, appliance integration, and countertop height is calculated to reduce physical strain and maximize the joy of the culinary process.",
    bullets: ["Anti-Bacterial Surfaces", "Soft-Close German Hardware", "Smart Appliance Tie-ins"]
  },
  matrix: {
    icon: Settings,
    title: "Kitchen Pillars",
    items: [
      'The Working Triangle Audit', 
      'High-Pressure Laminate Grading', 
      'Moisture-Resistant Carcass Logic', 
      'Induction & Gas Hybrid Piping',
      'Integrated Waste Management',
      'LED Task-Zone Mapping'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Working Triangle",
      text: "Efficiency is born from geometry. We optimize the distance between the sink, the stove, and the refrigerator—the 'Working Triangle.' This minimizes steps and ensures a fluid transition between prep, cooking, and cleaning, even when multiple people are in the kitchen.",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Carcass Integrity",
      text: "We use Marine-Grade BWP (Boiling Water Proof) plywood for our carcasses, treated against moisture and termites. This ensures that the internal skeleton of your kitchen remains structurally sound for decades, resisting the humidity and heat common in culinary environments.",
      image: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Surface Alchemy",
      text: "Countertops are the most hard-working surfaces in a home. We curate non-porous materials like Quartz, Dekton, and Sintered Stone that are heat-resistant, scratch-proof, and anti-bacterial, allowing you to prep food directly on the surface without fear of staining.",
      image: "https://images.unsplash.com/photo-1556911073-a517e752729c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "The Soft-Close Revolution",
      text: "Luxury is felt in the lack of noise. We exclusively integrate German-engineered hardware—tandem boxes, lift-up shutters, and corner solutions—that glide silently and close with a gentle pneumatic dampening, eliminating the impact of daily wear.",
      image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Integrated Appliance Logic",
      text: "A clean kitchen is a seamless kitchen. We design custom cabinetry to house built-in ovens, dishwashers, and refrigerators, hiding the technological 'noise' behind matching facades to ensure the architectural lines of the home remain uninterrupted.",
      image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Task-Specific Illumination",
      text: "General lighting is never enough in a kitchen. We implement zonal lighting: high-CRI LEDs under top cabinets to illuminate prep areas, warm pendants over the island for social interaction, and interior sensor lights that activate when a drawer is opened.",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Vertical Optimization",
      text: "We utilize the 'Full-Height' strategy. By extending cabinetry to the ceiling, we eliminate dust traps and maximize storage for low-frequency items. Our pull-down shelving systems ensure that even the highest shelves remain accessible to all family members.",
      image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "The Social Island",
      text: "Modern kitchens are the new living rooms. We design kitchen islands with 'Cantilevered Seating' that allows the cook to interact with guests. These islands act as a multi-functional hub for morning coffee, evening cocktails, and collaborative cooking.",
      image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Hardware Cycle", value: "200k Opens" },
    { label: "Heat Resistance", value: "300°C+" },
    { label: "Storage Gain", value: "40% Plus" },
    { label: "Warranty", value: "15 Years" }
  ],
  faq: {
    title: "Kitchen Strategy FAQs",
    items: [
      { q: "What is the difference between an Island and a Peninsula kitchen?", a: "An island is a freestanding block, while a peninsula is connected to a wall. Islands require more floor space for 360-degree clearance." },
      { q: "How do you handle corner storage?", a: "We use 'LeMans' or 'Magic Corner' pull-out systems that bring the contents of the deep corner directly to you, eliminating dead space." }
    ]
  },
  cta: {
    title: "Engineer your kitchen.",
    description: "Start your culinary journey with a 3D planning session to maximize your kitchen's potential.",
    buttonText: "Request Kitchen Audit",
    link: "/contact"
  }
};


export const wardrobeData = {
  hero: {
    subtitle: "Precision Engineering & Organization",
    title: "The Art of the",
    highlight: "Private Collection.",
    backgroundImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Storage Logic",
    titlePart1: "Internal Order.",
    titlePart2: "Visual Stillness.",
    description: "A wardrobe is more than a closet; it is a personalized retail experience within the home. At Bixbite, we design storage systems that prioritize the preservation of your collections. By integrating moisture-controlled environments, anti-tarnish jewelry modules, and precision-engineered motion hardware, we turn daily organization into a seamless ritual.",
    bullets: ["De-humidified Zones", "Motion-Sensor Illumination", "Bespoke Accessory Trays"]
  },
  matrix: {
    icon: Boxes,
    title: "Storage Pillars",
    items: [
      'Ergonomic Reach Mapping', 
      'Anti-Static Fabric Care', 
      'Integrated Dehumidification', 
      'Weight-Bearing Shelf Logic',
      'Hidden Security Safes',
      'Soft-Close Piston Systems'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Boutique Experience",
      text: "We design walk-in wardrobes with the logic of a luxury atelier. Using floor-to-ceiling glass shutters, integrated 'floating' islands, and perimeter LED rim lighting, we create a space where your wardrobe is curated and displayed, rather than just stored.",
      image: "https://images.unsplash.com/photo-1558997519-83ea9252dee8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Ergonomic Inventory Mapping",
      text: "Every inch is audited based on your physical height and inventory volume. We categorize storage into 'Active Zones' (daily reach), 'Secondary Zones' (occasional use), and 'Archive Zones' (seasonal items), ensuring that 100% of the volume is usable and accessible.",
      image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Precision Internal Organizers",
      text: "Standard drawers are inefficient. We implement bespoke internal modules—watch winders, velvet-lined jewelry trays, pull-out tie racks, and specialized shoe carousels—all engineered to protect delicate materials from friction and dust.",
      image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Invisible Atmospheric Control",
      text: "Premium leather and silk require specific climates. We integrate low-vibration dehumidifiers and carbon-filtered air vents within the cabinetry to prevent mold and stale odors, maintaining a constant environment for high-value garment preservation.",
      image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Smart Lighting Choreography",
      text: "Color accuracy is vital for dressing. We use high-CRI (Color Rendering Index) LEDs that mimic natural daylight, ensuring that the colors you see in your mirror are the colors the world sees. Lights activate via silent PIR sensors upon opening.",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Vanity Integration",
      text: "We often bridge the gap between storage and grooming. By embedding a 'Mirror-Niche' with built-in beauty refrigeration and professional-grade 'Hollywood' lighting, we create a centralized hub for your morning and evening preparations.",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Material Continuity",
      text: "Storage shouldn't look like an afterthought. Our wardrobes utilize the same material palette as the bedroom—matching timber veneers, fabric-wrapped panels, or leather-stitched handles—to ensure the storage feels like a seamless extension of the architecture.",
      image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "The Secure Hidden Vault",
      text: "Discretion is paramount. We integrate biometric-locked safes within the wardrobe plinths or behind 'false' back panels, providing a secure, fire-rated sanctuary for jewelry, documents, and valuables that remains invisible to the casual eye.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Volume Gain", value: "+35%" },
    { label: "CRI Rating", value: "95+" },
    { label: "Hardware Life", value: "20 Yrs" },
    { label: "Custom Modules", value: "Unlimited" }
  ],
  faq: {
    title: "Wardrobe Strategy FAQs",
    items: [
      { q: "What is the ideal depth for a wardrobe?", a: "We recommend 600mm for hanging spaces to ensure coat sleeves don't get caught in the shutters, while 450mm is sufficient for folded storage." },
      { q: "Open vs. Closed Wardrobes?", a: "Open wardrobes offer visual ease but require high maintenance. We suggest tinted glass shutters to provide the 'look' of open storage while protecting from dust." }
    ]
  },
  cta: {
    title: "Organize your lifestyle.",
    description: "Connect with our organization experts to design a system that fits your inventory perfectly.",
    buttonText: "Request Wardrobe Audit",
    link: "/contact"
  }
};




export const spaceSavingData = {
  hero: {
    subtitle: "Volumetric Efficiency & Intelligence",
    title: "The Architecture of",
    highlight: "Optimization.",
    backgroundImage: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Spatial Logic",
    titlePart1: "Expanding Limits.",
    titlePart2: "Invisible Utility.",
    description: "Square footage is finite, but volume is infinite. At Bixbite, we approach small-scale living through the lens of 'Kinetic Architecture.' Our space-saving solutions aren't just about storage; they are about creating multi-modal environments where a single room can transition from a high-focus office to a restorative sanctuary in seconds.",
    bullets: ["Kinetic Joinery", "Vertical Plane Logic", "Multi-Modal Zoning"]
  },
  matrix: {
    icon: Move,
    title: "Optimization Pillars",
    items: [
      'Transformative Furniture Logic', 
      'Cavity-Space Utilization', 
      'Vertical Storage Mapping', 
      'Kinetic Hardware Systems',
      'Dual-Purpose Surface Design',
      'Visual Decluttering Strategy'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Vertical Frontier mapping",
      text: "We stop looking at floor plans and start looking at wall volumes. By utilizing the 'dead space' above door frames and extending cabinetry to the absolute ceiling line, we reclaim up to 30% of previously wasted vertical real estate for long-term storage and architectural interest.",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Kinetic Furniture Systems",
      text: "Static furniture is a luxury small spaces cannot afford. We design bespoke kinetic pieces—Murphy beds that reveal home offices, and nesting tables that expand for hosting—ensuring that your furniture adapts to your schedule rather than dictating your movement.",
      image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Hidden Cavity Logic",
      text: "Every wall is an opportunity. We identify non-structural cavities to create recessed niches for books, electronics, or toiletries. This 'subtractive' approach to design keeps the floor plane clear, making the room feel significantly larger and more streamlined.",
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "The Pocket Door Revolution",
      text: "Traditional swing doors consume valuable 'arc space.' We replace them with precision-engineered pocket doors or barn-style sliders that disappear into the wall, freeing up square footage for furniture placement and creating a seamless flow between adjacent zones.",
      image: "https://images.unsplash.com/photo-1615873968403-89e068629275?q=80&w=1932&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Multi-Modal Zoning",
      text: "In a compact home, one room must perform three roles. Through the use of acoustic curtains, sliding glass partitions, and varied floor heights, we create 'soft zones' that allow a living room to function as a guest suite or a dining hall without the need for permanent walls.",
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Under-Stair Engineering",
      text: "The void beneath a staircase is often the most wasted volume in a home. We transform these triangles into high-density pull-out pantries, wine cellars, or integrated workstations, turning a structural necessity into a functional masterpiece.",
      image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Reflective Expansion",
      text: "Space is as much about perception as it is about measurement. We strategically place floor-to-ceiling mirrors and high-gloss finishes to bounce light and double the visual depth of a room, effectively 'breaking' the boundaries of the physical walls.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Bespoke Joinery Modules",
      text: "Standard furniture creates 'gap waste.' Our bespoke joinery is millimetric—designed to fit from corner to corner. This eliminates the awkward 2-inch gaps where dust collects, providing a cohesive, built-in look that feels intentionally carved from the space.",
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Storage Increase", value: "+45%" },
    { label: "Usable Floor", value: "+20%" },
    { label: "Hardware Life", value: "25 Yrs" },
    { label: "Volume Utility", value: "Maximized" }
  ],
  faq: {
    title: "Spatial Strategy FAQs",
    items: [
      { q: "Is custom space-saving furniture more expensive?", a: "While the initial investment is higher, it increases property value and eliminates the need for external storage solutions." },
      { q: "Can Murphy beds be used daily?", a: "Absolutely. We use counter-balanced piston systems that make daily operation as effortless as opening a drawer." }
    ]
  },
  cta: {
    title: "Reclaim your square footage.",
    description: "Connect with our spatial strategists to audit your home's hidden volumetric potential.",
    buttonText: "Request Spatial Audit",
    link: "/contact"
  }
};



export const turnkeyData = {
  hero: {
    subtitle: "End-to-End Project Management",
    title: "From Blueprint to",
    highlight: "Bespoke Reality.",
    backgroundImage: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Seamless Execution",
    titlePart1: "Absolute Control.",
    titlePart2: "Zero Friction.",
    description: "Turnkey execution is the promise of a stress-free transition. At Bixbite, we assume total responsibility for the project lifecycle—from procurement and vendor management to site supervision and final handover. We act as the single point of accountability, ensuring that the design vision is never lost in translation during construction.",
    bullets: ["On-Site Supervision", "Procurement Logistics", "Quality Benchmarking"]
  },
  matrix: {
    icon: ClipboardCheck,
    title: "Execution Pillars",
    items: [
      'Critical Path Scheduling', 
      'Vendor Meritocracy Audit', 
      'Material QC Protocols', 
      'Budget Variance Control',
      'Safety & Compliance Rigor',
      'Snag-List Rectification'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Single Point of Contact",
      text: "The greatest risk in construction is fragmented communication. Our Turnkey model eliminates the need for you to manage multiple contractors. We orchestrate the civil, MEP, and carpentry teams under a single management umbrella, providing you with a streamlined, transparent reporting structure.",
      image: "https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Critical Path Scheduling",
      text: "Time is the ultimate currency. We utilize advanced project management software to create 'Critical Path' schedules. This ensures that long-lead items, like custom marble or imported fixtures, arrive precisely when needed, preventing expensive site idleness and delays.",
      image: "https://images.unsplash.com/photo-1531834685032-c74696a67fd0?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Procurement Intelligence",
      text: "Leveraging our network of global and local suppliers, we manage the entire procurement lifecycle. We handle the technical specifications, quality checks at the factory level, and logistics, ensuring you benefit from institutional pricing and guaranteed material authenticity.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "On-Site Quality Benchmarking",
      text: "Design integrity is maintained through relentless supervision. Our site engineers conduct daily audits against the 'Good-for-Construction' (GFC) drawings, ensuring that every internal wall, electrical point, and plumbing line is placed with millimetric accuracy.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Budget Fidelity",
      text: "We operate on a 'Fixed-Cost' philosophy. By conducting exhaustive site surveys and technical audits during the concept phase, we eliminate 'hidden surprises.' This allows us to provide a financial roadmap that remains stable from the first brick to the final polish.",
      image: "https://images.unsplash.com/photo-1454165833767-02a698d5874c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Vetting & Vendor Management",
      text: "Our craftsmen are our greatest asset. We only deploy vetted teams who understand the Bixbite standard of finish. We manage all labor relations, safety protocols, and insurance, allowing you to focus on the creative journey rather than the administrative burden.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "The 'Snag-Free' Handover",
      text: "A project isn't finished until it is perfect. Before the final handover, our team conducts a rigorous internal snagging process—testing every hinge, outlet, and water pressure point. We deliver a 'Move-in Ready' home where every detail has been pre-validated.",
      image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Post-Occupancy Support",
      text: "Our relationship continues after you move in. We provide a comprehensive 'Home Manual' and a dedicated maintenance support window, ensuring that any settling adjustments or technical questions are addressed immediately by the team that built the space.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Timeline Adherence", value: "98%" },
    { label: "Budget Variance", value: "< 2%" },
    { label: "Vendor Network", value: "200+" },
    { label: "QC Checkpoints", value: "500+" }
  ],
  faq: {
    title: "Turnkey Execution FAQs",
    items: [
      { q: "What is the primary benefit of Turnkey?", a: "Single-point accountability. You don't have to mediate between a carpenter and an electrician; we handle all coordination and quality control." },
      { q: "How do you handle changes during construction?", a: "We use a formal Change Order (CO) process. Any deviations are cost-mapped and approved by you before execution to ensure budget transparency." }
    ]
  },
  cta: {
    title: "Start with certainty.",
    description: "Ready to move from vision to reality? Let our project managers handle the complexity while you enjoy the results.",
    buttonText: "Request Execution Roadmap",
    link: "/contact"
  }
};


export const vastuData = {
  hero: {
    subtitle: "Vedic Science & Spatial Harmony",
    title: "The Geometry of",
    highlight: "Energy Flow.",
    backgroundImage: "https://images.unsplash.com/photo-1590073844006-3a44a7f398a7?q=80&w=2000&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Cosmic Alignment",
    titlePart1: "Ancient Wisdom.",
    titlePart2: "Modern Living.",
    description: "Vastu Shastra is the ancient Indian science of architecture. At Bixbite, we don't view Vastu as a set of superstitions, but as a sophisticated system of environmental psychology. We align your home’s layout with the earth's magnetic fields and solar paths to ensure your living environment acts as a catalyst for health, wealth, and peace.",
    bullets: ["Element Balancing", "Directional Logic", "Energy Audits"]
  },
  matrix: {
    icon: Compass,
    title: "Vastu Pillars",
    items: [
      'Ashta Dikpalakas Alignment', 
      'Brahmasthan (Void) Planning', 
      'Pranic Energy Mapping', 
      'Five Element (Tattva) Balance',
      'Magnetic North Calibration',
      'Solar Path Optimization'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Directional Magnetism",
      text: "Every plot has a unique magnetic signature. We begin by calibrating the 'Vastu Purusha Mandala' to your specific site, ensuring that the primary entries and structural loads are positioned to harmonize with the earth's magnetic grid, reducing sub-conscious stress for the inhabitants.",
      image: "https://images.unsplash.com/photo-1507733108149-c28197a7afe2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "The Brahmasthan Logic",
      text: "The center of the home is its heart, or 'Brahmasthan.' We design this area to be free of heavy structural columns or walls, allowing cosmic energy (Prana) to circulate freely throughout the rooms, ensuring the home feels 'airy' and spiritually light.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Solar & Thermal Placement",
      text: "Vastu is deeply rooted in solar science. We place high-activity zones like kitchens in the Southeast (Agni) to leverage the morning sun’s purifying rays, while positioning master suites in the Southwest (Nairutya) to benefit from the stable, grounding energy of the setting sun.",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Elemental (Tattva) Balancing",
      text: "A balanced home reconciles the five elements. We strategically place water features in the Northeast (Ishanya) for mental clarity and heavy furniture in the South for stability, creating a space where the elements of Fire, Earth, Water, Air, and Space work in synergy.",
      image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Entry & Threshold Vibrations",
      text: "The main entrance is the 'mouth' of the home. We design thresholds that are aesthetically grand yet Vastu-compliant, ensuring they face auspicious directions to attract positive opportunities while acting as a filter for external negative frequencies.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Bedroom Sanctity",
      text: "Rest is a sacred function. Our Vastu layouts ensure that bed placements allow for head alignment toward the South or East, facilitating a deeper REM cycle by aligning the body's iron content with the earth’s magnetic poles.",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Material & Color Frequency",
      text: "Every color has a vibration. We integrate Vastu-recommended color palettes—using cooling blues in the North and warm, grounding terracottas in the South—to balance the psychological 'temperature' of each room based on its directional energy.",
      image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Modern Minimalist Integration",
      text: "Vastu shouldn't compromise modern aesthetics. We specialize in 'Invisible Vastu'—where all the scientific principles are embedded within the walls and furniture heights so that the home remains sleek and minimalist while being spiritually fortified.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Compliance Rate", value: "100%" },
    { label: "Energy Balance", value: "Optimal" },
    { label: "Solar Alignment", value: "Calculated" },
    { label: "Peace Index", value: "High" }
  ],
  faq: {
    title: "Vastu Design FAQs",
    items: [
      { q: "Can an existing home be made Vastu compliant?", a: "Yes, we use 'Remedy Design'—applying mirrors, colors, and elemental shifts to correct energy flow without major structural changes." },
      { q: "Does Vastu limit design creativity?", a: "Not at all. Think of Vastu as a 'Logic Framework' that actually helps narrow down the most efficient placements for a better lifestyle." }
    ]
  },
  cta: {
    title: "Align your living space.",
    description: "Connect with our Vastu consultants to audit your floor plan and unlock the hidden energy of your home.",
    buttonText: "Request Vastu Audit",
    link: "/contact"
  }
};


export const brandingData = {
  hero: {
    subtitle: "Environmental Graphic Design",
    title: "The Language of",
    highlight: "Space.",
    backgroundImage: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Visual Identity",
    titlePart1: "Storytelling.",
    titlePart2: "Wayfinding.",
    description: "Architecture speaks, but branding defines the conversation. At Bixbite, we integrate brand identity into the very fabric of the interior. From custom-fabricated metal signage to subtle glass manifestations, we ensure that every environmental touchpoint reinforces the brand's narrative while providing intuitive navigation for the user.",
    bullets: ["3D Topographic Signage", "Wayfinding Psychology", "Material Brand Coding"]
  },
  matrix: {
    icon: Type,
    title: "Integration Pillars",
    items: [
      'Topographic Logo Fabrication', 
      'Chromatic Brand Alignment', 
      'Intuitive Wayfinding Logic', 
      'ADA Compliance Standards',
      'Illuminated Lettering systems',
      'Glass Manifestation Design'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Environmental Brand Pulse",
      text: "We don't just 'stick' a logo on a wall. We analyze the brand's core values and translate them into material form. For a tech firm, this might be backlit acrylic; for a luxury hotel, it's hand-patinated brass embedded into the stonework.",
      image: "https://images.unsplash.com/photo-1522204538344-922f76ecd041?q=80&w=2071&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "The Psychology of Wayfinding",
      text: "Good signage is invisible until it's needed. We map the 'Desire Lines' of a floor plan to place directional cues at natural decision points, reducing cognitive load and ensuring guests move through the space with instinctive ease.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Dimensionality & Depth",
      text: "Flat graphics are for screens; spaces demand three dimensions. We specialize in 3D lettering, using shadows and relief to create signage that changes character as the viewer moves, adding a layer of sophisticated dynamism to the walls.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Luminous Identity",
      text: "Light is a brand carrier. We utilize halo-lit letters, edge-lit glass, and programmable LED matrices to ensure the brand identity remains vibrant after sunset, using color temperatures that align perfectly with the interior's overall lighting design.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Glass Manifestations",
      text: "In glass-heavy environments, privacy meets branding. We design custom frosted manifestations—using patterns derived from the brand's visual DNA—to provide acoustic and visual privacy while maintaining a sense of openness.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Material Fidelity",
      text: "A brand's color palette must be translated into real-world textures. We match 'Pantone' colors to physical coatings, powder-coated metals, and dyed textiles, ensuring that the physical space is a perfect 1:1 reflection of the digital brand guide.",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Tactile Inclusivity",
      text: "Design is for everyone. Our signage systems integrate Braille and high-contrast tactile elements that meet international accessibility standards without compromising the aesthetic integrity of the interior design.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Temporary & Event Graphics",
      text: "Spaces evolve. We design modular signage systems that allow for temporary branding—such as seasonal displays or conference graphics—that can be updated without damaging the permanent architectural finishes.",
      image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Legibility Dist.", value: "50m+" },
    { label: "ADA Compliance", value: "100%" },
    { label: "Material Life", value: "15 Years" },
    { label: "Color Match", value: "ΔE < 1.0" }
  ],
  faq: {
    title: "Branding Integration FAQs",
    items: [
      { q: "At what stage should branding be integrated?", a: "Ideally during the conceptual interior design phase so we can plan for electrical points and structural reinforcement for heavy signage." },
      { q: "Do you handle logo design?", a: "We focus on environmental translation. If you have a logo, we bring it to life in 3D; if not, we partner with graphic agencies to co-create the identity." }
    ]
  },
  cta: {
    title: "Brand your environment.",
    description: "Transform your commercial space into a living brand experience with our integration specialists.",
    buttonText: "Request Branding Audit",
    link: "/contact"
  }
};


export const cashCounterData = {
  hero: {
    subtitle: "Transactional Ergonomics & Security",
    title: "The Point of",
    highlight: "Conversion.",
    backgroundImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Retail Efficiency",
    titlePart1: "Secure Flow.",
    titlePart2: "Seamless Sales.",
    description: "The cash counter is the most critical touchpoint in a retail environment. At Bixbite, we design transaction zones that balance high-security cash management with ergonomic comfort for staff. Our approach integrates POS technology, concealed cable management, and strategically mapped impulse-buy zones to maximize revenue per square foot.",
    bullets: ["Anti-Theft Engineering", "Integrated POS Housing", "Concealed Cable Logic"]
  },
  matrix: {
    icon: Banknote,
    title: "Planning Pillars",
    items: [
      'Ergonomic Counter Heights', 
      'Concealed Cash-Drop Safes', 
      'Cable Management Cavities', 
      'Impulse-Purchase Grid',
      'Dual-Level Transaction Surfaces',
      'Staff Fatigue Management'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Transactional Ergonomics",
      text: "We design counters with a 'Dual-Level' philosophy. The customer side is set at a comfortable 1050mm for standing interaction, while the staff side is optimized for POS operation and packing, reducing repetitive strain and increasing checkout speed.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Concealed Security Infrastructure",
      text: "Security is built into the cabinetry, not just placed on top. We integrate fire-rated, concealed cash-drop safes and silent panic triggers within the joinery, ensuring staff safety and asset protection without disrupting the store's aesthetic.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Integrated POS Engineering",
      text: "Modern retail requires a complex web of hardware—scanners, printers, card machines, and monitors. We design custom cavities with ventilated housing to prevent hardware overheating and 'Spider-Wire' management systems to keep the counter clean.",
      image: "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "The Psychology of Impulse",
      text: "The checkout queue is prime real estate. We integrate modular 'Hero Shelving' into the counter facade, calculated at eye level for customers in line, turning the waiting area into a high-margin secondary sales engine.",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "High-Density Back-Stock Storage",
      text: "Immediate availability is key to conversion. We design high-density vertical storage behind the counter using 'Pull-out Sliders' and 'Categorized Bins,' allowing staff to retrieve stock without leaving the customer's presence.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Material Durability Standards",
      text: "Counters endure thousands of physical touches daily. We utilize high-pressure laminates, solid surfaces (Corian), and stainless steel kick-plates that are scratch-resistant and easy to sanitize, ensuring the counter looks new for years.",
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1925&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Lighting the Conversion Zone",
      text: "We use 'Focus-Beam' lighting over the transaction area. This not only guides the customer's eye to where they need to pay but also provides high-clarity task lighting for staff to verify currency and check product details.",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Staff Sanctuary Planning",
      text: "A happy staff provides better service. We integrate concealed footrests, anti-fatigue matting recesses, and hidden storage for personal belongings, ensuring the staff remains comfortable during high-traffic shifts.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Checkout Speed", value: "+25%" },
    { label: "Impulse Revenue", value: "+15%" },
    { label: "Cable Density", value: "Zero-Vis" },
    { label: "Hardware Life", value: "10 Years" }
  ],
  faq: {
    title: "Counter Strategy FAQs",
    items: [
      { q: "What is the ideal length for a cash counter?", a: "For a single station, we recommend 1200mm to 1500mm to allow for the POS system and a dedicated packing area." },
      { q: "How do you handle cable management?", a: "We use 'Grommet Channels' and internal vertical raceways that hide wires while keeping them accessible for IT maintenance." }
    ]
  },
  cta: {
    title: "Optimize your checkout.",
    description: "Request a retail audit to turn your transaction zone into a high-performance sales engine.",
    buttonText: "Request Planning Audit",
    link: "/contact"
  }
};



export const costEffectiveRetailData = {
  hero: {
    subtitle: "Value Engineering & High Impact",
    title: "The Architecture of",
    highlight: "Lean Retail.",
    backgroundImage: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Budget Optimization",
    titlePart1: "Maximum Impact.",
    titlePart2: "Minimum Spend.",
    description: "Great design isn't about the cost of materials; it's about the intelligence of their application. At Bixbite, our cost-effective solutions focus on 'Strategic High-Low' design—investing in key customer touchpoints while using industrial-grade, raw finishes for the shell to create a sophisticated, 'loft-style' aesthetic without the premium price tag.",
    bullets: ["Material Substitution", "Modular Fixture Systems", "Adaptive Shell Reuse"]
  },
  matrix: {
    icon: TrendingDown,
    title: "Economy Pillars",
    items: [
      'Industrial Material Palette', 
      'Exposed MEP Aesthetics', 
      'Modular Partition Logic', 
      'High-Efficiency LED Mapping',
      'Pre-Fabricated Joinery',
      'Stock-Size Material Usage'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Raw Aesthetic Strategy",
      text: "We embrace the 'shell' of the building. By polishing existing concrete floors and leaving ceilings exposed, we eliminate the cost of expensive tiling and false ceilings. This 'Industrial Chic' look redirecting those saved funds into high-quality lighting and branding.",
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Material Substitution Logic",
      text: "We swap luxury finishes for 'look-alike' alternatives. High-pressure laminates replace natural stone, and tinted plywood or OSB (Oriented Strand Board) provides an organic, textured warmth that costs a fraction of solid timber or veneers.",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Modular Display Systems",
      text: "Fixed carpentry is expensive and rigid. We design modular, 'plug-and-play' display racks using industrial slotted angles or pipe-fitting systems. This reduces labor costs and allows you to reconfigure your store layout without hiring a contractor.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Strategic Lighting Focus",
      text: "Instead of uniform bright lighting, we use 'Point-Source' track lighting. By darkening the aisles slightly and spotlighting the merchandise, we reduce the total number of fixtures needed and lower monthly electricity overheads while creating a premium mood.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Adaptive Signage & Graphics",
      text: "We replace heavy, illuminated 3D signage with high-impact environmental graphics—such as oversized wall typography or neon-effect LEDs. These provide the same visual 'punch' as high-end signage but are significantly faster and cheaper to produce.",
      image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "The 80/20 Touchpoint Rule",
      text: "We identify the 20% of the store that customers touch the most—door handles, cash counters, and fitting room curtains—and invest in premium materials there. The remaining 80% is finished in cost-effective, durable neutrals that recede into the background.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Pre-Fabricated Components",
      text: "On-site labor is often the biggest budget drain. We utilize off-site pre-fabrication for counters and storage units, meaning site work is reduced to simple assembly, cutting down the project timeline and minimizing business downtime.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Color as Architecture",
      text: "Paint is the most cost-effective tool in a designer's kit. We use bold, architectural blocking—painting the ceiling, pipes, and walls in a single deep hue—to hide imperfections and create a cohesive, high-design look for the cost of a few buckets of paint.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Cost Savings", value: "-40%" },
    { label: "Speed to Market", value: "3 Weeks" },
    { label: "Material Waste", value: "Minimal" },
    { label: "ROI Potential", value: "Accelerated" }
  ],
  faq: {
    title: "Budget Retail FAQs",
    items: [
      { q: "Does 'cost-effective' mean lower quality?", a: "Not at all. It means using simpler materials in smarter ways. We prioritize durability and 'Design Intent' over expensive brand names." },
      { q: "Can this style work for luxury brands?", a: "Yes. Many high-end brands use 'Industrial Minimalism' to make their products stand out as the primary focus of the room." }
    ]
  },
  cta: {
    title: "Launch your brand faster.",
    description: "Start your retail journey with a design that prioritizes your bottom line without sacrificing your brand's soul.",
    buttonText: "Request Budget Strategy",
    link: "/contact"
  }
};



export const customerFlowData = {
  hero: {
    subtitle: "Behavioral Mapping & Spatial Logic",
    title: "The Science of",
    highlight: "Movement.",
    backgroundImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Spatial Choreography",
    titlePart1: "Planned Paths.",
    titlePart2: "Organic Flow.",
    description: "A successful retail layout is a balance between commercial efficiency and customer comfort. At Bixbite, we utilize heat-map logic and psychological 'Anchor' placement to ensure every corner of your store is visited. We design for the 'Invariable Right'—the natural human tendency to turn right upon entry—to maximize product exposure and reduce navigation friction.",
    bullets: ["Heat-Map Optimization", "Decompression Zone Logic", "Sightline Engineering"]
  },
  matrix: {
    icon: Footprints,
    title: "Flow Pillars",
    items: [
      'Invariable Right Logic', 
      'Anchor Product Placement', 
      'Aisle Width Ergonomics', 
      'Decompression Zone Design',
      'Sightline Termination',
      'Checkout Queue Mapping'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Decompression Zone",
      text: "The first 5 to 15 feet of your store is the transition from the outside world. We design this 'Decompression Zone' to be open and inviting, allowing customers to adjust to the lighting and scale before presenting them with the first high-value product displays.",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "The Power Wall Strategy",
      text: "Statistically, 90% of customers turn right. We leverage this by creating a 'Power Wall' on the right side of the entry—a high-impact visual display that sets the brand's tone and features the most critical seasonal or margin-heavy merchandise.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Loop vs. Grid Navigation",
      text: "Depending on your inventory, we implement 'Loop' layouts to guide customers on a defined path past every item, or 'Grid' layouts for speed and familiarity. We ensure aisles are wide enough to avoid the 'Butt-Brush' effect, where customers leave an aisle if someone bumps into them.",
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Anchor Product Placement",
      text: "We place 'Destination' items (staples like milk in a grocery or denim in fashion) at the back of the store. This forces the customer to travel through the entire space, exposing them to 'Impulse' categories along the journey.",
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Sightline Termination",
      text: "Long aisles can be intimidating. We use 'Visual Breaks' and focal points at the end of every vista to draw the customer deeper into the store. These termination points are used to highlight new arrivals or limited-edition collections.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Speed Bump Displays",
      text: "To prevent customers from rushing through, we place 'Speed Bumps'—small, curated display islands—at key intersections. These break the walking rhythm and force a psychological 'pause' to engage with new product stories.",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "The Psychology of the Queue",
      text: "The wait to pay is the final brand touchpoint. We design wrap-around queues that utilize impulse shelving and digital signage to keep customers engaged, reducing 'perceived' wait time and increasing the average basket value at the last minute.",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Heat-Map Data Integration",
      text: "Design is an iterative process. We help you use Wi-Fi or camera heat-mapping to analyze real-world traffic. If a certain corner is 'cold,' we adjust the lighting or shelving height to pull energy back into that zone.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Dwell Time", value: "+20%" },
    { label: "Full-Store Reach", value: "85%" },
    { label: "Avg. Transaction", value: "+12%" },
    { label: "Conversion Rate", value: "High" }
  ],
  faq: {
    title: "Flow Design FAQs",
    items: [
      { q: "What is the 'Butt-Brush' effect?", a: "It's a retail phenomenon where customers stop browsing if they are touched from behind. We design aisle widths (min. 3.5ft) to prevent this physical discomfort." },
      { q: "How do you handle flow in a small boutique?", a: "In small spaces, we use 'Angled' shelving and mirrors to create the illusion of a longer path and better sightlines." }
    ]
  },
  cta: {
    title: "Choreograph your space.",
    description: "Don't let your layout happen by accident. Let our spatial psychologists map your customer journey for maximum conversion.",
    buttonText: "Request Flow Analysis",
    link: "/contact"
  }
};


export const shelvingData = {
  hero: {
    subtitle: "Modular Engineering & Visual Merchandising",
    title: "The Architecture of",
    highlight: "The Product.",
    backgroundImage: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Fixture Engineering",
    titlePart1: "Invisible Support.",
    titlePart2: "Visible Luxury.",
    description: "Display units are the silent salesmen of your store. At Bixbite, we design shelving systems that balance weight-bearing engineering with aesthetic lightness. By integrating concealed LED tracks, adjustable modularity, and high-performance materials, we create fixtures that enhance the perceived value of your merchandise while offering the flexibility to pivot with seasonal inventory shifts.",
    bullets: ["Load-Bearing Precision", "Integrated Task Lighting", "Modular Versatility"]
  },
  matrix: {
    icon: Grid,
    title: "Design Pillars",
    items: [
      'Cantilevered Glass Logic', 
      'Concealed Standard Strips', 
      'Anti-Scratch Surface Tech', 
      'Integrated Power-Tracks',
      'Magnetic Merchandising Kits',
      'Weight-Distribution Math'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Floating Shelf Philosophy",
      text: "Visual clutter kills sales. We utilize cantilevered engineering and concealed wall-mounts to create 'floating' display planes. By removing visible vertical supports, we open up the store’s sightlines and make even the heaviest products appear weightless and premium.",
      image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Adaptive Modular Grid Systems",
      text: "Retail is fluid. Our shelving designs incorporate recessed 'Slot-and-Tab' systems that allow staff to change shelf heights and accessories in seconds without tools. This ensures your layout can evolve from holiday peak stock to minimalist boutique edits seamlessly.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Point-of-Sale Lighting Integration",
      text: "A shelf without light is a dead zone. We embed micro-LED extrusions into the leading edge of every shelf. These are powered by low-voltage magnetic tracks, ensuring that products are washed in high-CRI light without visible wires or hotspots.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Materiality & Product Protection",
      text: "We select finishes based on the merchandise. For high-end footwear, we use micro-perforated leathers or soft-touch paints; for heavy hardware, we utilize industrial-grade powder-coated steel. Every surface is engineered to be anti-glare and scratch-resistant.",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Visual Hierarchy & Eye-Levels",
      text: "We design according to the 'Eye-Level is Buy-Level' rule. Our shelving systems place high-margin 'Hero' items at the 4ft to 5ft mark, while utilizing the 'Stretch Zone' and 'Stoop Zone' for bulk inventory or secondary accessories.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "The Island Feature Unit",
      text: "Freestanding display 'islands' break the customer’s walking rhythm. We design these as sculptural centerpieces that encourage 360-degree interaction, using mixed materials like stone, brass, and glass to anchor the store's design DNA.",
      image: "https://images.unsplash.com/photo-1601612620952-28438f74e3d3?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Glass Vitrine Engineering",
      text: "For high-value items, we design airtight, dust-proof glass vitrines with UV-filtered glazing. We use mitered 'UV-Glue' joints for glass-to-glass connections, providing a seamless, museum-quality view of the jewelry or accessories within.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Digital Signage Synergy",
      text: "Modern shelving must speak. We integrate slimline LCD strips into shelf-talkers, allowing for real-time pricing updates and video content that syncs with the physical product placement, bridging the gap between digital and physical retail.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Weight Capacity", value: "50kg/m" },
    { label: "Adjustment Pitch", value: "25mm" },
    { label: "CRI Lighting", value: "98+" },
    { label: "Setup Time", value: "Minimal" }
  ],
  faq: {
    title: "Display & Shelving FAQs",
    items: [
      { q: "What is the best material for high-traffic retail shelving?", a: "Powder-coated steel or high-pressure laminates (HPL) are ideal for durability. For luxury, we use PVD-coated stainless steel." },
      { q: "How do you hide the wires for lighted shelves?", a: "We use 'Conductive Tracks' built into the wall standards, so the shelf picks up power the moment it is clicked into place—no plugs required." }
    ]
  },
  cta: {
    title: "Elevate your merchandise.",
    description: "Your products deserve a stage, not just a shelf. Let us engineer a display system that maximizes your visual impact.",
    buttonText: "Request Fixture Design",
    link: "/contact"
  }
};



export const durableMaterialData = {
  hero: {
    subtitle: "High-Performance Material Science",
    title: "The Engineering of",
    highlight: "Permanence.",
    backgroundImage: "https://images.unsplash.com/photo-1533000932906-8805f77891b9?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Performance Spec",
    titlePart1: "Enduring Form.",
    titlePart2: "Tested Function.",
    description: "Durability is the foundation of sustainable luxury. At Bixbite, we go beyond aesthetics to analyze the molecular resilience of every finish. We specify materials that exceed industrial wear-ratings, ensuring that your commercial or residential space maintains its 'day-one' brilliance despite heavy footfall, UV exposure, and rigorous maintenance cycles.",
    bullets: ["ASTM Wear Ratings", "Anti-Microbial Surfaces", "Impact Resistance Logic"]
  },
  matrix: {
    icon: Shield,
    title: "Durability Pillars",
    items: [
      'Mohs Hardness Validation', 
      'High-Pressure Laminate Tech', 
      'Non-Porous Stone Sealing', 
      'Fire-Retardant Fabric Specs',
      'VOC-Free Industrial Coatings',
      'UV-Stable Pigment Logic'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Hardness & Abrasion Resistance",
      text: "We utilize the Mohs scale and Taber abrasion tests to specify flooring and worktops. For high-traffic retail, we prioritize Grade-5 Porcelain and Sintered Stone, which are virtually impervious to scratches, ensuring the surface never dulls under the friction of constant foot traffic.",
      image: "https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Sintered Stone Technology",
      text: "Moving beyond natural marble, we specify Sintered Stones—materials subjected to 1200 degrees of heat and extreme pressure. The result is a non-porous surface that is immune to thermal shock, acid staining, and liquid absorption, making it the ultimate choice for commercial food zones.",
      image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Industrial-Grade Textiles",
      text: "Our upholstery specifications follow the Martindale Rub Test. For commercial lounges, we only utilize fabrics rated for 100,000+ rubs, often integrating Nanofabric technology that repels spills at the fiber level, preventing deep-set stains and odors.",
      image: "https://images.unsplash.com/photo-1544450173-8c879d93558a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Chemical & Moisture Barriers",
      text: "In bathrooms and laboratories, moisture is the enemy. We specify epoxy-based grouts and hydrophobic coatings that prevent capillary action, ensuring that sub-structures remain dry and mold-free for the entire lifecycle of the building.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Self-Healing Surface Tech",
      text: "We integrate smart materials like FENIX NTM, which utilizes thermal healing properties. Micro-scratches on these matte surfaces can be repaired with a simple household iron, allowing for a soft-touch aesthetic that doesn't fear the wear and tear of a busy office.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "UV Stability & Color Fastness",
      text: "Natural light can bleach an interior in months. We specify UV-stable pigments and solar-control glazing that filters 99% of harmful rays, preserving the deep saturations of your wood veneers and custom paints without the need for heavy curtains.",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Impact-Resistant Edge Banding",
      text: "The corners of cabinetry are usually the first to fail. We use 2mm thick ABS edge banding with PUR (Polyurethane) bonding, creating a waterproof, impact-resistant seal that prevents chipping and peeling even in moisture-heavy environments like kitchens.",
      image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Low-Maintenance Life Cycle",
      text: "Durability also means ease of care. We choose materials that require 'Zero-Maintenance'—avoiding stones that need annual sealing or woods that require frequent oiling—lowering the long-term operational costs for property managers and homeowners alike.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Hardness (Mohs)", value: "7+" },
    { label: "Rub Count", value: "100k+" },
    { label: "Absorption", value: "0.01%" },
    { label: "Warranty", value: "10 Yrs" }
  ],
  faq: {
    title: "Material Durability FAQs",
    items: [
      { q: "What is the difference between Porcelain and Ceramic?", a: "Porcelain is fired at higher temperatures and is much denser, making it frost-proof and significantly more scratch-resistant than ceramic." },
      { q: "How do you test fabric durability?", a: "We use the Martindale test, which simulates natural wear. Anything over 40,000 rubs is considered heavy-duty commercial grade." }
    ]
  },
  cta: {
    title: "Build for the long term.",
    description: "Don't settle for materials that fade. Let our material scientists specify a palette that stands the test of time.",
    buttonText: "Request Material Audit",
    link: "/contact"
  }
};

export const fastTrackData = {
  hero: {
    subtitle: "Accelerated Delivery & Concurrent Engineering",
    title: "The Velocity of",
    highlight: "Execution.",
    backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Time-Critical Delivery",
    titlePart1: "Rapid Response.",
    titlePart2: "Rigorous Control.",
    description: "In the world of commercial real estate and retail, time is literally money. Our Fast-Track Execution model is designed for projects where deadlines are non-negotiable. By utilizing pre-fabricated components, 24/7 site rotations, and real-time BIM coordination, we compress the construction schedule while maintaining 100% fidelity to the original design intent.",
    bullets: ["Phased Permitting", "Pre-Fabricated Modules", "24/7 Site Management"]
  },
  matrix: {
    icon: Timer,
    title: "Velocity Pillars",
    items: [
      'Concurrent Design-Build', 
      'Critical Path Management', 
      'Just-In-Time Procurement', 
      'Off-Site Pre-Assembly',
      'Real-Time Conflict Resolution',
      'Double-Shift Workforce'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Concurrent Engineering",
      text: "We break the traditional 'Design-then-Build' sequence. By initiating site mobilization and structural work while interior finishes are still being finalized in the studio, we overlap schedules to shave weeks off the traditional project timeline.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Critical Path Analysis (CPM)",
      text: "Every hour is mapped. We use sophisticated Critical Path Method software to identify the specific tasks that control the completion date. This allows us to allocate extra resources to 'bottleneck' areas before they cause a delay.",
      image: "https://images.unsplash.com/photo-1507537297325-5629983930ee?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Off-Site Pre-Fabrication",
      text: "While the site is being demolished or leveled, your cabinetry, partitions, and specialized lighting rigs are being built in our climate-controlled factory. Once the site is ready, these components arrive for immediate assembly, bypassing on-site drying times.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Just-In-Time (JIT) Logistics",
      text: "Congested sites lead to slow work. We manage a high-frequency logistics chain where materials arrive exactly when they are needed for installation, preventing inventory pile-ups and ensuring a clear, safe, and high-speed workspace.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Dual-Shift Workflows",
      text: "To accelerate execution, we implement staggered work shifts. Specialist trades (MEP, Data, HVAC) work during low-traffic night hours, while finish trades (Painting, Flooring, Joinery) take over during the day, ensuring 18-24 hours of daily productivity.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Real-Time Cloud Coordination",
      text: "We eliminate the 'wait for response' delay. Site leads use tablets with cloud-linked BIM models to resolve structural clashes instantly. RFIs (Requests for Information) are answered in minutes by the design team, keeping the momentum forward.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Pre-Approved Vendor Network",
      text: "Fast-track projects don't have time for slow bidding. We utilize a vetted network of high-speed vendors and stock-available materials, ensuring that procurement never becomes the long lead-time item that stalls the project.",
      image: "https://images.unsplash.com/photo-1521791136366-39853752c0e7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Snag-As-You-Go Quality Control",
      text: "We don't wait until the end to check quality. Our 'Rolling Punch List' system identifies and fixes imperfections as each room is completed. By the time the final door is hung, the project is already 99% snag-free and ready for handover.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Time Saved", value: "30-40%" },
    { label: "Site Uptime", value: "18 hrs+" },
    { label: "RFI Response", value: "< 2 hrs" },
    { label: "Safety Rating", value: "Accident-Free" }
  ],
  faq: {
    title: "Fast-Track Strategy FAQs",
    items: [
      { q: "Is quality sacrificed for speed?", a: "No. Speed is gained through better management and pre-fabrication, not by rushing on-site craftsmanship." },
      { q: "What is the cost implication?", a: "Fast-track projects carry a premium for labor shifts, but this is usually offset by the massive savings in rent and earlier business revenue." }
    ]
  },
  cta: {
    title: "Meet your deadline.",
    description: "Launch your business or move into your home sooner. Contact our project managers to evaluate your fast-track potential.",
    buttonText: "Request Timeline Audit",
    link: "/contact"
  }
};




export const productLightingData = {
  hero: {
    subtitle: "Photometric Precision & Visual Focus",
    title: "The Physics of",
    highlight: "Desire.",
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Optical Merchandising",
    titlePart1: "Sculpting Volume.",
    titlePart2: "Defining Value.",
    description: "Light is the most powerful tool in retail conversion. At Bixbite, we don't just illuminate spaces; we engineer visual hierarchies. By utilizing high-CRI LEDs and precise beam angles, we eliminate flat lighting and create high-contrast environments that draw the customer's eye directly to the product's texture, color, and craftsmanship.",
    bullets: ["CRI 98+ Color Fidelity", "Dynamic Beam Control", "Anti-Glare Engineering"]
  },
  matrix: {
    icon: Focus,
    title: "Lighting Pillars",
    items: [
      'High-CRI Spectrum Control', 
      'Beam Angle Layering', 
      'Glare Cut-off Logic', 
      'Color Temperature Mapping',
      'Shadow Softening Tech',
      'UV-Free Merchandising'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Color Rendering Index (CRI) 98+",
      text: "We specify lighting with a CRI of 98 or higher to ensure that the colors seen in the store are the true colors of the merchandise. This is critical in fashion and jewelry, where subtle hue variations can make the difference between a sale and a return.",
      image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Three-Point Lighting Hierarchy",
      text: "We apply cinematic lighting principles to retail. Every featured product receives 'Key' light for visibility, 'Fill' light to soften harsh shadows, and 'Back' light to separate the item from its background, creating a three-dimensional pop.",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "The Art of Beam Angles",
      text: "Standard wash lighting dilutes focus. We use narrow 10° to 15° beam spots for high-margin 'Hero' products and wider 36° floods for general circulation. This contrast in light levels subconsciousy guides the customer's journey through the store.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Tunable White Technology",
      text: "Light should adapt to the merchandise. We utilize CCT (Correlated Color Temperature) tuning—using 2700K warm light for gold and leather, and 4000K-5000K cool light for diamonds and tech—ensuring the material’s natural properties are amplified.",
      image: "https://images.unsplash.com/photo-1522204538344-922f76ecd041?q=80&w=2071&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Anti-Glare & Visual Comfort",
      text: "Brilliance should not cause fatigue. We design with 'Dark Light' technology—using deep-cell reflectors and honey-comb louvers—that hides the light source from the customer's direct sightline, ensuring the focus remains on the product, not the ceiling.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Vertical Illumination Logic",
      text: "Customers shop vertically, not horizontally. We prioritize illuminating the walls and perimeter shelving to create a sense of spaciousness, using 'Wall Washers' to provide a clean, even canvas for the merchandise to stand against.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Dynamic Accent Sequencing",
      text: "Static light can become boring. We integrate smart control systems that can subtly shift brightness levels or color temperatures throughout the day, mimicking natural circadian rhythms to keep the store environment feeling fresh and alive.",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Heat & UV Mitigation",
      text: "High-intensity light can damage delicate materials. Our LED specifications include zero UV emission and active heat-sink technology, ensuring that perfumes, leathers, and fine fabrics are protected from fading or degradation over time.",
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1925&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "CRI Rating", value: "98+" },
    { label: "Contrast Ratio", value: "5:1" },
    { label: "Efficiency", value: "120 Lm/W" },
    { label: "Beam Precision", value: "±2°" }
  ],
  faq: {
    title: "Product Lighting FAQs",
    items: [
      { q: "Why is high CRI important in retail?", a: "High CRI (Color Rendering Index) ensures that skin tones look healthy and product colors look vibrant and accurate, reducing product returns due to color mismatch." },
      { q: "What is the best color temperature for luxury goods?", a: "It depends on the material. Gold and wood benefit from 3000K (Warm), while silver, steel, and white fabrics pop under 4000K (Neutral)." }
    ]
  },
  cta: {
    title: "Illuminate your brand.",
    description: "Don't let your products hide in the shadows. Let our photometric experts design a lighting scheme that turns browsers into buyers.",
    buttonText: "Request Lighting Audit",
    link: "/contact"
  }
};



export const complianceData = {
  hero: {
    subtitle: "Regulatory Navigation & Heritage Integration",
    title: "The Architecture of",
    highlight: "Governance.",
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Code & Compliance",
    titlePart1: "Regulatory Logic.",
    titlePart2: "Civic Harmony.",
    description: "Designing for 'Main Street' requires a sophisticated understanding of the friction between commercial ambition and civic responsibility. At Bixbite, we specialize in navigating complex zoning laws, heritage preservation mandates, and universal accessibility standards. We ensure your project is not only legally bulletproof but also a respectful, enduring addition to the urban fabric.",
    bullets: ["Universal Design Standards", "Heritage Facade Preservation", "Zoning & Egress Optimization"]
  },
  matrix: {
    icon: Scale,
    title: "Compliance Pillars",
    items: [
      'ADA / Universal Access', 
      'Fire & Life Safety Egress', 
      'Heritage Impact Analysis', 
      'Zoning Bylaw Navigation',
      'Structural Load Validation',
      'Seismic & Wind Compliance'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Universal Design & Accessibility",
      text: "We believe inclusivity is a design opportunity, not a constraint. We integrate Ramps, tactile paving, and counter heights that exceed ADA standards, ensuring the space is navigable for everyone while maintaining a high-end, integrated aesthetic.",
      image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Heritage Facade Negotiation",
      text: "Working within historic districts requires surgical precision. We specialize in 'Adaptive Reuse,' preserving the original masonry and character of Main Street storefronts while integrating modern glazing and high-performance insulation systems.",
      image: "https://images.unsplash.com/photo-1517713982677-4c66332b98bb?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Life Safety & Egress Mapping",
      text: "Occupant safety is paramount. We use advanced flow-modeling to calculate 'Travel Distances' and 'Exit Widths,' ensuring that even the most complex high-density retail or office layouts can be evacuated safely and meet all local fire marshal codes.",
      image: "https://images.unsplash.com/photo-1590483734747-3f447a3ca931?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Signage & Encroachment Bylaws",
      text: "Main Street signage is heavily regulated. We negotiate with local planning boards to maximize your brand's visibility within 'Awning' and 'Projecting Sign' bylaws, ensuring your identity is bold but compliant with neighborhood character.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Structural Code Validation",
      text: "When modifying existing 'Main Street' buildings, structural integrity is key. We perform seismic audits and load-bearing analysis to ensure that new partitions, heavy shelving, or rooftop HVAC units meet modern building safety codes.",
      image: "https://images.unsplash.com/photo-1581094281217-b45c3453896c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Energy & Environmental Compliance",
      text: "Modern buildings must breathe properly. We design to LEED or local green-building standards, specifying low-VOC materials and high-efficiency envelopes that reduce your operational costs and environmental footprint while meeting code.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Acoustic & Nuisance Mitigation",
      text: "Main Street often blends commercial with residential. We design acoustic buffers and vibration-dampening systems for MEP equipment, ensuring your business operation doesn't violate noise ordinances for neighbors above or beside you.",
      image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?q=80&w=2073&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "The Permit Expediting Process",
      text: "Bureaucracy can stall a project for months. Our team acts as your liaison with city hall, preparing 'Submission-Ready' drawing sets that anticipate common objections, resulting in faster approval times and earlier construction starts.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Permit Success", value: "100%" },
    { label: "ADA Score", value: "A+" },
    { label: "Code Review", value: "Pre-Verified" },
    { label: "Approval Time", value: "-20%" }
  ],
  faq: {
    title: "Compliance & Main St. FAQs",
    items: [
      { q: "What is 'Universal Design'?", a: "It is the design of environments to be usable by all people, to the greatest extent possible, without the need for adaptation or specialized design." },
      { q: "Can you change the windows on a Heritage building?", a: "Yes, but they must usually be 'In-Kind' replacements—meaning they look identical to the originals but use modern thermal glazing." }
    ]
  },
  cta: {
    title: "Navigate the code.",
    description: "Don't let regulations stall your vision. Let our compliance experts guide your Main Street project from permit to handover.",
    buttonText: "Request Regulatory Audit",
    link: "/contact"
  }
};


export const retailPlanningData = {
  hero: {
    subtitle: "Commercial Optimization & Spatial Strategy",
    title: "The Logic of",
    highlight: "The Floor.",
    backgroundImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Macro Strategy",
    titlePart1: "Revenue Mapping.",
    titlePart2: "Operational Flow.",
    description: "Every square foot of a retail environment must justify its existence. At Bixbite, we approach space planning as a mathematical exercise in profit density. By calculating the 'Sales-per-Square-Foot' potential of every zone, we create layouts that eliminate dead space, optimize inventory density, and ensure that high-margin categories occupy the most valuable real estate in your store.",
    bullets: ["Zonal Profit Analysis", "Circulation Efficiency", "Storage-to-Sales Ratios"]
  },
  matrix: {
    icon: Layout,
    title: "Planning Pillars",
    items: [
      'Inventory Density Mapping', 
      'Operational Back-of-House', 
      'Aisle Width Optimization', 
      'Sightline Accessibility',
      'Modular Fixture Grids',
      'Egress & Safety Logic'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Goldilocks Ratio",
      text: "We balance the 'Sales-to-Support' ratio. A store with too much storage loses sales floor potential; too little causes restocking delays. We use data-driven benchmarks to ensure your 'Back-of-House' is lean and your 'Front-of-House' is maximized for customer interaction.",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Visual Merchandising Sightlines",
      text: "We map the 'First Impression' vistas. From the entry point, we engineer 30-degree sightlines that lead the eye to secondary and tertiary departments, ensuring that the customer feels drawn into the depth of the store without feeling overwhelmed.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Zonal Categorization",
      text: "We divide the floor into 'Hot,' 'Warm,' and 'Cold' zones based on traffic data. Impulse items occupy the hot zones near the entry and checkout, while 'destination' categories are placed in cold zones to pull traffic through the entire footprint.",
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Ergonomic Reach & Volume",
      text: "We plan the vertical space. By placing high-volume stock within the 'Strike Zone' (between shoulder and knee height), we increase the speed of customer selection and reduce the physical strain on staff during peak restocking hours.",
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Adaptive Grid Flexibility",
      text: "Retail is seasonal. Our floor plans utilize modular grid systems that allow for 'pop-up' islands or expanded departments during holiday peaks, ensuring the space can expand and contract without requiring a total renovation.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Departmental Thresholds",
      text: "We use flooring materials and lighting shifts to define 'Soft Boundaries' between departments. This creates a sense of discovery as the customer moves from one category to another without the need for restrictive physical walls.",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Staff Flow & Efficiency",
      text: "A floor plan isn't just for customers. We map the 'Service Paths'—the quickest routes for staff to move from the stockroom to the counter or changing rooms—ensuring that service remains fast and the sales floor remains tidy.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "The Egress & Safety Layer",
      text: "Compliance is non-negotiable. Our space planning integrates building code requirements for fire exits and accessible pathways into the core design, so your store is as safe as it is beautiful and profitable.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Rev / Sq. Ft", value: "Optimized" },
    { label: "Dead Space", value: "< 5%" },
    { label: "Stock-to-Sales", value: "30/70" },
    { label: "Safety Paths", value: "Verified" }
  ],
  faq: {
    title: "Space Planning FAQs",
    items: [
      { q: "What is the 'Sales-to-Support' ratio?", a: "It is the percentage of your total floor area dedicated to selling vs. storage/office. A healthy retail average is typically 70% sales floor and 30% support." },
      { q: "How do you define 'Hot Zones'?", a: "These are the areas with the highest footfall, usually located at the front of the store and along the path to the fitting rooms or checkout." }
    ]
  },
  cta: {
    title: "Map your success.",
    description: "Don't guess where your products should go. Let our spatial strategists engineer a floor plan that maximizes your commercial potential.",
    buttonText: "Request Space Audit",
    link: "/contact"
  }
};





export const shopfrontData = {
  hero: {
    subtitle: "Architectural Identity & Curb Appeal",
    title: "The Art of the",
    highlight: "First Impression.",
    backgroundImage: "https://images.unsplash.com/photo-1517713982677-4c66332b98bb?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Exterior Strategy",
    titlePart1: "Capturing Attention.",
    titlePart2: "Inviting Entry.",
    description: "The shopfront is your brand's most important handshake. At Bixbite, we design facades that act as a visual filter between the street and your interior story. We balance high-transparency glazing with bold structural framing to create a 'Boutique Aperture'—a frame that treats your merchandise like a work of art and compels the passerby to stop and enter.",
    bullets: ["Anti-Reflective Glazing", "Thermal Break Engineering", "Illuminated Portal Logic"]
  },
  matrix: {
    icon: Layout,
    title: "Facade Pillars",
    items: [
      'Spider-Fitting Glazing', 
      'Thermal Barrier Logic', 
      'Wind-Load Engineering', 
      'Security Shutter Integration',
      'Architectural Signage Brackets',
      'UV-Filtered Display Glass'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Zero-Bezel Aesthetic",
      text: "We specialize in structural glass systems that eliminate bulky frames. Using 'Fin-Glass' or 'Spider-Fitting' technology, we create a continuous crystal-clear envelope that offers unobstructed views of your interior, effectively making the street an extension of your showroom.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Threshold Psychology",
      text: "The entrance shouldn't just be a door; it’s a transition. We design 'Recessed Entryways' that provide a psychological 'Safe Zone' from street traffic, giving customers a moment to pause and admire the display windows before they physically cross the threshold.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "The 'Aperture' Window Display",
      text: "Display windows are your street-level theater. We design these as dedicated architectural modules with independent lighting tracks and integrated power points, ensuring your visual merchandising team has a flexible stage to tell new brand stories every season.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Thermal Performance & Comfort",
      text: "Glass facades can be energy drains. We specify 'Low-E' double-glazing with argon-filled cavities and thermal-break aluminum profiles. This ensures your HVAC system doesn't overwork to fight street heat, keeping the interior temperature perfect for shopping.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Facade Materiality & Texture",
      text: "We use high-performance cladding—from patinated copper to ultra-compact porcelain slabs—to create a tactile frame for the glazing. These materials are selected for their ability to withstand urban pollution and weathering while maintaining a premium finish.",
      image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Invisible Security Integration",
      text: "Security shouldn't look like a prison. We integrate perforated, backlit security shutters into the facade's 'head' detail. When open, they are completely invisible; when closed, they allow light to filter through, maintaining a vibrant street presence even at night.",
      image: "https://images.unsplash.com/photo-1590483734747-3f447a3ca931?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Nocturnal Branding",
      text: "A shopfront works 24/7. We design the facade's lighting as an integrated system—using wash-lights for textures and halo-lights for signage—ensuring your architectural silhouette remains iconic long after the store has closed.",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Civic & Heritage Alignment",
      text: "We navigate the requirements of local planning boards. Whether it's a modern insertion or a heritage restoration, we ensure the shopfront height, signage scale, and material palette align with the urban character of the street.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Transparency", value: "92%" },
    { label: "U-Value", value: "1.1 W/m²K" },
    { label: "Visual VLT", value: "High" },
    { label: "Safety Rating", value: "P2A Glass" }
  ],
  faq: {
    title: "Shopfront Design FAQs",
    items: [
      { q: "What is Low-E glass?", a: "Low-Emissivity glass has a microscopic coating that reflects heat back to its source, keeping your store cool in summer and warm in winter." },
      { q: "How do you prevent condensation on large glass fronts?", a: "We design 'Air-Slot' ventilation into the base of the window frames to ensure constant airflow across the glass surface." }
    ]
  },
  cta: {
    title: "Transform your curb appeal.",
    description: "Your facade is your 24/7 salesperson. Let us design a shopfront that captures every passerby's attention.",
    buttonText: "Request Facade Audit",
    link: "/contact"
  }
};


export const visualMerchandisingData = {
  hero: {
    subtitle: "Sensory Curation & Product Storytelling",
    title: "The Art of",
    highlight: "Persuasion.",
    backgroundImage: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Sensory Strategy",
    titlePart1: "Emotional Design.",
    titlePart2: "Tactile Stories.",
    description: "Visual Merchandising is the silent language of retail. At Bixbite, we move beyond simple product placement to create immersive brand environments. By layering color theory, rhythmic repetition, and focal-point hierarchy, we turn your inventory into a curated experience that connects with customers on a subconscious level and dramatically increases dwell time.",
    bullets: ["Pyramid Composition", "Color Block Mapping", "Prototyping & Planograms"]
  },
  matrix: {
    icon: Sparkles,
    title: "Curatorial Pillars",
    items: [
      'The Rule of Three Logic', 
      'Chromatic Flow Mapping', 
      'Texture Layering Tech', 
      'Rhythmic Repetition',
      'Focal Point Engineering',
      'Seasonal Agility Planning'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Pyramid Principle",
      text: "We utilize triangular composition to lead the eye. By placing a 'Hero' product at the apex and supporting items at the base, we create a stable, pleasing visual hierarchy that ensures the customer's gaze lands exactly where it should first.",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Chromatic Block Mapping",
      text: "Color is the first thing a brain registers. We design 'Color Stories'—grouping products by hue to create a high-impact visual punch. This not only organizes the store but subconsciously simplifies the decision-making process for the shopper.",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "The Rule of Three",
      text: "Our brains are hardwired to find odd numbers more engaging. We curate displays in sets of three (small, medium, large or low, mid, high) to prevent visual symmetry from becoming 'invisible' to the customer.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Tactile Texture Layering",
      text: "Retail is a physical medium. We mix contrasting textures—rough wood against silk, matte steel against velvet—to create 'Sensory Friction.' This depth encourages customers to touch the products, which is a proven precursor to the final purchase.",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: "05",
      title: "Rhythmic Repetition",
      text: "Repetition creates a sense of luxury and abundance. By repeating a specific shape or product at regular intervals, we create a visual 'beat' that guides the customer's pace through the store, making the shopping journey feel choreographed.",
      image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "06",
      title: "Prop & Mannequin Styling",
      text: "Props shouldn't compete with the product; they should contextualize it. We design custom mannequin vignettes that represent the lifestyle of your target demographic, allowing customers to project themselves into the 'story' of the brand.",
      image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "07",
      title: "Cross-Merchandising Logic",
      text: "We design for convenience and 'Add-on' sales. By placing complementary categories together—such as glassware next to wine or belts next to trousers—we solve the customer's problems and increase the average basket value.",
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "08",
      title: "Data-Driven Planograms",
      text: "Visual merchandising is a science. We provide digital planograms—detailed 'blueprints' for your team—that ensure every store in your network maintains the same high-standard aesthetic and sales-optimized layout.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Dwell Time", value: "+30%" },
    { label: "Basket Value", value: "+18%" },
    { label: "Brand Recall", value: "High" },
    { label: "Inventory Turn", value: "Fast" }
  ],
  faq: {
    title: "Merchandising Strategy FAQs",
    items: [
      { q: "How often should displays be changed?", a: "To keep the store feeling 'alive,' we recommend changing focal point displays every 2-4 weeks and a full floor reset seasonally." },
      { q: "What is a Planogram?", a: "A planogram is a visual map of exactly where every SKU should be placed on a shelf to maximize sales and maintain brand standards." }
    ]
  },
  cta: {
    title: "Tell your brand story.",
    description: "Don't just sell products; sell a lifestyle. Let our visual stylists turn your retail space into a high-conversion theater.",
    buttonText: "Request Merchandising Audit",
    link: "/contact"
  }
};





//  EXTERIOS  DATA {COMMERCIAL}



export const architecturalThemeData = {
  hero: {
    subtitle: "Concept Genesis & Exterior Identity",
    title: "The Soul of the",
    highlight: "Structure.",
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Exterior Narrative",
    titlePart1: "Form Defined.",
    titlePart2: "Identity Built.",
    description: "Architectural Theme Development is the process of establishing a cohesive visual and structural language for a building’s exterior. At Bixbite, we don't just design facades; we develop a 'Material DNA' that dictates how the building interacts with light, shadows, and its urban or natural context. This theme serves as the north star for every exterior decision, from the primary massing to the smallest cladding detail.",
    bullets: ["Massing & Proportion", "Material DNA Mapping", "Contextual Integration"]
  },
  matrix: {
    icon: Building2,
    title: "Thematic Pillars",
    items: [
      'Site-Specific Massing', 
      'Cladding Material Palette', 
      'Fenestration Rhythms', 
      'Structural Expression',
      'Exterior Lighting Logic',
      'Environmental Response'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Massing & Proportional Logic",
      text: "The first step in theme development is defining the building's silhouette. We use 'Subtractive' and 'Additive' massing techniques to create a form that is balanced yet dynamic, ensuring the structure feels anchored to its site while making a bold architectural statement.",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "The Material DNA Matrix",
      text: "We curate a palette of materials that define the building's character. Whether it's the warmth of terracotta, the industrial edge of weathering steel, or the lightness of structural glass, these materials are chosen to age gracefully and speak a consistent design language.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Fenestration & Solid-to-Void Ratios",
      text: "Windows are more than just openings; they are the rhythm of the facade. We calculate precise 'Solid-to-Void' ratios to manage privacy, internal natural light, and the external visual tempo, creating a facade that feels intentional and rhythmic.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Contextual & Vernacular Response",
      text: "A building must belong to its location. We analyze local architectural history and geological conditions to integrate 'Vernacular' elements into modern themes, ensuring the project feels like an evolution of its surroundings rather than an intrusion.",
      image: "https://images.unsplash.com/photo-1518005020250-6759229548b9?q=80&w=1915&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Design Cohesion", value: "100%" },
    { label: "Site Integration", value: "A+" },
    { label: "Material Longevity", value: "50 Yrs" },
    { label: "Thematic Depth", value: "Rich" }
  ],
  faq: {
    title: "Theme Development FAQs",
    items: [
      { q: "What is 'Material DNA'?", a: "It is the specific combination of textures, colors, and materials that create a unique signature for the building, ensuring every wing and floor feels part of a single story." },
      { q: "How does the exterior theme affect the interior?", a: "We believe in 'Inside-Out' design. The exterior theme dictates the placement of windows and the use of materials that often flow into the interior lobby and common areas." }
    ]
  },
  cta: {
    title: "Define your landmark.",
    description: "Every great building starts with a powerful theme. Let us develop the architectural DNA for your next exterior project.",
    buttonText: "Start Theme Workshop",
    link: "/contact"
  }
};




export const facadeDesignData = {
  hero: {
    subtitle: "High-Performance Envelopes & Elevation Aesthetics",
    title: "The Interface of",
    highlight: "Light & Stone.",
    backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Envelope Engineering",
    titlePart1: "Technical Precision.",
    titlePart2: "Visual Impact.",
    description: "A building's facade is its primary interface with the world. At Bixbite, we treat elevation design as a balance of high-performance engineering and sculptural art. We design envelopes that regulate internal climates through thermal-break technology while defining the building's character through rhythmic fenestration and innovative material cladding.",
    bullets: ["Thermal Envelope Logic", "Kinetic Shading Systems", "Rain-Screen Technology"]
  },
  matrix: {
    icon: Framer,
    title: "Elevation Pillars",
    items: [
      'Rain-Screen Cladding Systems', 
      'Structural Glass Engineering', 
      'Thermal Bridge Mitigation', 
      'Acoustic Facade Buffers',
      'Integrated Solar Shading',
      'Maintenance Access Logic'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Rain-Screen Cladding Logic",
      text: "We utilize pressure-equalized rain-screen systems that allow the building to 'breathe.' By creating a ventilated cavity between the cladding and the insulation, we prevent moisture buildup and significantly improve the building's thermal longevity.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Rhythmic Fenestration",
      text: "Windows are the 'eyes' of the structure. We design elevation patterns that balance the need for natural light with energy efficiency. By varying the depth of window reveals, we create natural shadows that reduce solar heat gain and add architectural depth.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Kinetic & Passive Shading",
      text: "We integrate shading devices—brise-soleil, vertical fins, or perforated screens—directly into the elevation design. These elements are mathematically positioned based on sun-path analysis to maximize winter sun and block harsh summer glare.",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Material Contrast & Transition",
      text: "A compelling elevation relies on the play of textures. We engineer the junctions where different materials meet—such as the transition from heavy stone plinths to lightweight zinc panels—ensuring water-tight integrity and visual continuity.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Thermal Gain", value: "-35%" },
    { label: "Wind Rating", value: "Class 4" },
    { label: "UV Protection", value: "99%" },
    { label: "Life Span", value: "40+ Yrs" }
  ],
  faq: {
    title: "Facade Design FAQs",
    items: [
      { q: "What is a 'Thermal Break' in facade design?", a: "It is an insulating element placed within the window frame or cladding support to prevent the transfer of heat or cold from the exterior to the interior." },
      { q: "How do you handle facade maintenance?", a: "We integrate hidden 'tie-back' points and roof-level davit systems into the design to allow for safe cleaning and inspection without visible equipment." }
    ]
  },
  cta: {
    title: "Engineer your elevation.",
    description: "Move beyond simple walls. Let us design a high-performance facade that defines your building's presence.",
    buttonText: "Request Facade Consultation",
    link: "/contact"
  }
};



export const energyEfficientData = {
  hero: {
    subtitle: "Net-Zero Engineering & Thermal Logic",
    title: "The Future of",
    highlight: "Sustainability.",
    backgroundImage: "https://images.unsplash.com/photo-1518005020250-6759229548b9?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Green Engineering",
    titlePart1: "Passive Design.",
    titlePart2: "Active Savings.",
    description: "Energy efficiency is no longer an optional add-on; it is a core architectural requirement. At Bixbite, we utilize a 'Fabric-First' approach, optimizing the building's orientation, insulation, and air-tightness before layering in high-efficiency active systems. Our solutions reduce long-term operational costs by up to 60% while creating a healthier, more consistent indoor climate.",
    bullets: ["Passive Solar Gain", "High-Performance Envelopes", "Smart Energy Monitoring"]
  },
  matrix: {
    icon: Leaf,
    title: "Efficiency Pillars",
    items: [
      'Thermal Bridge Elimination', 
      'High-Performance Glazing', 
      'Passive Cross-Ventilation', 
      'Solar PV Integration',
      'Geothermal HVAC Logic',
      'Graywater Recycling Systems'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Fabric-First Approach",
      text: "We prioritize the building's envelope. By specifying ultra-high R-value insulation and ensuring an airtight seal, we minimize the energy required to heat or cool the space. This 'Passive' strategy ensures the building stays comfortable even during power outages.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Advanced Glazing Technology",
      text: "Windows are often the weakest link in thermal efficiency. We specify triple-pane, krypton-filled units with Low-E coatings that reflect infrared heat while allowing visible light to pass through, reducing the need for artificial cooling and lighting.",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Smart HVAC & Heat Recovery",
      text: "We implement ERV (Energy Recovery Ventilation) systems that pre-condition incoming fresh air using the thermal energy of the exhausted air. This ensures constant fresh air flow without the massive energy loss associated with traditional ventilation.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Renewable Energy Synergies",
      text: "We seamlessly integrate Solar PV arrays and Battery Storage into the architectural form. Instead of being an afterthought, these systems are designed into the rooflines or as 'BIPV' (Building Integrated Photovoltaics) within the facade itself.",
      image: "https://images.unsplash.com/photo-1509391366360-fe5bb658582f?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Energy Savings", value: "Up to 60%" },
    { label: "Carbon Offset", value: "4.5 Tons/Yr" },
    { label: "Payback Period", value: "5-7 Yrs" },
    { label: "Comfort Index", value: "98%" }
  ],
  faq: {
    title: "Sustainability FAQs",
    items: [
      { q: "What is a Net-Zero building?", a: "A Net-Zero building produces as much energy as it consumes over the course of a year, typically through a combination of extreme efficiency and on-site renewables." },
      { q: "Can I retrofit an old building for efficiency?", a: "Yes. Through 'Deep Energy Retrofits,' we can improve insulation and upgrade systems to bring older structures close to modern efficiency standards." }
    ]
  },
  cta: {
    title: "Future-proof your project.",
    description: "Lower your bills and your footprint. Connect with our green energy consultants to design a high-performance building.",
    buttonText: "Request Energy Audit",
    link: "/contact"
  }
};




export const frontageData = {
  hero: {
    subtitle: "Arrival Sequences & Transitional Architecture",
    title: "The Power of the",
    highlight: "Threshold.",
    backgroundImage: "https://images.unsplash.com/photo-1577121024038-d6b80ff02dca?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Entrance Engineering",
    titlePart1: "Inviting Presence.",
    titlePart2: "Secure Boundaries.",
    description: "The entrance is more than a door; it is the psychological transition between environments. At Bixbite, we design frontages that command attention while facilitating seamless movement. Our approach integrates structural massing, landscape synergy, and smart security to create an arrival experience that is both welcoming for guests and intimidating for intruders.",
    bullets: ["Portal Massing Logic", "Integrated Wayfinding", "Weather-Shield Engineering"]
  },
  matrix: {
    icon: DoorOpen,
    title: "Frontage Pillars",
    items: [
      'Canopy & Overhang Logic', 
      'Automated Access Systems', 
      'Landscape-to-Facade Blending', 
      'Ambient Portal Lighting',
      'Structural Glass Entries',
      'Universal Access (ADA) Paths'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Portal Massing Strategy",
      text: "We use 'Subtractive' architectural forms to create recessed entrances that naturally draw people in. By manipulating the scale of the entrance relative to the facade, we establish a clear 'Arrival Hierarchy' that guides the eye and the foot without the need for excessive signage.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Weather-Shield Architecture",
      text: "A great entrance provides shelter before the door is even reached. We engineer custom cantilevers and canopy systems that protect visitors from rain and wind, utilizing thermal-break materials to ensure the 'Transition Zone' remains comfortable year-round.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Material Continuity",
      text: "We believe in a 'Seamless Threshold.' By carrying exterior materials—such as stone pavers or timber cladding—directly into the lobby, we dissolve the boundary between outside and inside, creating a sense of expansiveness and architectural unity.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "The Security Layer",
      text: "Safety should be invisible. We integrate bollards, reinforced structural glass, and facial-recognition access points into the aesthetic design of the frontage, ensuring high-level security that doesn't feel like a barrier.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Flow Capacity", value: "200 p/min" },
    { label: "U-Value (Glass)", value: "1.2" },
    { label: "Security Level", value: "RC3 Rated" },
    { label: "ADA Grade", value: "1:12 Max" }
  ],
  faq: {
    title: "Entrance Design FAQs",
    items: [
      { q: "What is an 'Arrival Sequence'?", a: "It is the planned path a person takes from the street to the interior, involving visual cues, lighting shifts, and tactile changes underfoot." },
      { q: "How do you handle high-wind entrances?", a: "We design 'Wind-Lobbies' or revolving door systems that act as an air-lock, preventing the chimney effect and reducing energy loss." }
    ]
  },
  cta: {
    title: "Design a powerful entrance.",
    description: "Your building's frontage tells your story. Let us design an arrival experience that leaves a lasting impression.",
    buttonText: "Request Entrance Audit",
    link: "/contact"
  }
};




export const exteriorPlanningData = {
  hero: {
    subtitle: "Site Zoning & External Circulation",
    title: "The Logic of the",
    highlight: "Landscape.",
    backgroundImage: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Site Strategy",
    titlePart1: "Contextual Flow.",
    titlePart2: "Resilient Design.",
    description: "Exterior space planning is the art of reconciling human needs with the natural environment. At Bixbite, we map site topography, solar orientation, and wind patterns to create outdoor environments that act as functional extensions of the architecture. From optimizing vehicular entry points to designing private outdoor sanctuaries, we ensure every square inch of your land is utilized with purpose.",
    bullets: ["Topographical Optimization", "Micro-Climate Mapping", "Permeable Hardscape Logic"]
  },
  matrix: {
    icon: Map,
    title: "Planning Pillars",
    items: [
      'Topographic Grade Logic', 
      'Hydrological Drainage Mapping', 
      'Solar Path Optimization', 
      'Vehicular & Pedestrian Flow',
      'Privacy Buffer Zoning',
      'Sustainable Softscape Grids'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Topographical Integration",
      text: "We don't fight the land; we work with it. Our planning uses 'Cut-and-Fill' balancing to minimize earthwork costs while creating multi-level terraces that offer varying perspectives and functional zones across the site.",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Micro-Climate Manipulation",
      text: "Through strategic placement of structures, walls, and vegetation, we can alter the micro-climate of your exterior space—deflecting harsh winter winds while funneling cooling summer breezes into outdoor living areas.",
      image: "https://images.unsplash.com/photo-1518005020250-6759229548b9?q=80&w=1915&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Hardscape-to-Softscape Ratios",
      text: "We calculate the optimal balance between functional hard surfaces and permeable green zones. This ensures high-performance drainage and heat-island reduction while providing enough structural area for dining, lounging, and movement.",
      image: "https://images.unsplash.com/photo-1590483734747-3f447a3ca931?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "The Privacy Perimeter",
      text: "Outdoor luxury is defined by privacy. We use 'Layered Shielding'—combining architectural walls, fencing, and strategic planting—to create secluded zones that feel open to the sky but protected from neighboring sightlines.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Site Coverage", value: "Optimized" },
    { label: "Permeability", value: "60% Min" },
    { label: "Solar Reach", value: "Calculated" },
    { label: "Drainage Grade", value: "2.5% Slope" }
  ],
  faq: {
    title: "Exterior Planning FAQs",
    items: [
      { q: "How do you handle site drainage?", a: "We design 'Bioswales' and use permeable pavers that allow water to return to the water table, preventing flooding and reducing load on city sewers." },
      { q: "Does exterior planning include lighting?", a: "Yes. We map 'Wayfinding' paths and 'Atmospheric' zones to ensure the exterior remains functional and safe after sunset." }
    ]
  },
  cta: {
    title: "Master your land.",
    description: "Your site has hidden potential. Let our architects create a master plan that harmonizes your building with the great outdoors.",
    buttonText: "Request Site Analysis",
    link: "/contact"
  }
};





export const fireSafetyData = {
  hero: {
    subtitle: "Life-Safety Engineering & Regulatory Assurance",
    title: "The Architecture of",
    highlight: "Protection.",
    backgroundImage: "https://images.unsplash.com/photo-1599713000922-0941864115f2?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Defensive Design",
    titlePart1: "Code Rigor.",
    titlePart2: "Absolute Safety.",
    description: "Compliance is the non-negotiable bedrock of architecture. At Bixbite, we view fire safety as a design discipline, not a hurdle. By utilizing computational fluid dynamics for smoke modeling and designing high-efficiency egress paths, we ensure that your building meets the most stringent international fire codes (NFPA/IBC) while maintaining the visual integrity of your design.",
    bullets: ["Passive Fire Protection", "Egress Path Optimization", "Smoke Control Engineering"]
  },
  matrix: {
    icon: ShieldAlert,
    title: "Safety Pillars",
    items: [
      'Compartmentalization Logic', 
      'Structural Fireproofing', 
      'Emergency Egress Mapping', 
      'Smoke Extraction Systems',
      'Hydrant & Sprinkler Grids',
      'Fire-Rated Material Specs'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Zonal Compartmentalization",
      text: "We design buildings to 'self-defend.' By using fire-rated partitions and automatic fire doors, we divide the structure into isolated zones that prevent the spread of flames and smoke, buying critical time for evacuation and firefighting operations.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Optimized Egress Sequences",
      text: "Distance is the enemy in an emergency. We utilize spatial math to calculate the shortest, most intuitive 'Path of Travel' to exits. We integrate emergency lighting and clear wayfinding directly into the architectural finishes to ensure panic-free navigation.",
      image: "https://images.unsplash.com/photo-1590483734747-3f447a3ca931?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Intumescent & Passive Coatings",
      text: "Structural steel loses its strength in high heat. We specify intumescent coatings—paints that expand when heated to insulate the steel—allowing the building's skeleton to remain standing longer during a fire without the need for bulky concrete encasement.",
      image: "https://images.unsplash.com/photo-1581094281217-b45c3453896c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Compliance & Audit Readiness",
      text: "We act as your liaison with municipal authorities. Our 'Submission-Ready' safety sets include fire load calculations, hydrant pressure mapping, and occupancy load audits to ensure your building receives its Occupancy Certificate without delay.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Code Adherence", value: "100%" },
    { label: "Rating (Doors)", value: "120 Min" },
    { label: "Travel Dist.", value: "< 45m" },
    { label: "Audit Pass", value: "First Try" }
  ],
  faq: {
    title: "Safety & Compliance FAQs",
    items: [
      { q: "What is Passive Fire Protection?", a: "It refers to stationary components like fire-rated walls, floors, and coatings that contain a fire by their sheer material presence, requiring no activation." },
      { q: "How do you handle fire safety in open-plan offices?", a: "We use high-velocity smoke curtains and automated smoke vents to channel heat and smoke out of the building, keeping the evacuation air clear." }
    ]
  },
  cta: {
    title: "Protect your investment.",
    description: "Don't leave safety to chance. Let our compliance engineers verify your building's defensive readiness today.",
    buttonText: "Request Safety Audit",
    link: "/contact"
  }
};




export const claddingData = {
  hero: {
    subtitle: "Multi-Material Envelopes & Surface Engineering",
    title: "The Science of",
    highlight: "The Skin.",
    backgroundImage: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1887&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Surface Tech",
    titlePart1: "Material Fusion.",
    titlePart2: "Structural Grace.",
    description: "The exterior finish of a building is its first line of defense and its primary aesthetic statement. At Bixbite, we specialize in the engineering of complex cladding systems—integrating the transparency of high-performance glass, the versatility of Aluminum Composite Panels (ACP), and the timeless durability of natural stone into a singular, cohesive building skin.",
    bullets: ["Unitized Glazing Systems", "ACP Fire-Retardant Specs", "Mechanical Stone Anchoring"]
  },
  matrix: {
    icon: Layers,
    title: "Cladding Pillars",
    items: [
      'Spider-Fitting Glass Tech', 
      'FR-Grade ACP Fabrication', 
      'Dry-Hanging Stone Systems', 
      'Thermal Expansion Joints',
      'Curtain Wall Integration',
      'Back-Ventilated Cavities'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Advanced Glazing Systems",
      text: "We specify unitized and stick-curtain wall systems that prioritize thermal performance. By using double or triple-glazed units with low-emissivity coatings, we ensure maximum transparency while maintaining a high-performance thermal barrier against solar heat gain.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "ACP & Metal Composites",
      text: "Aluminum Composite Panels (ACP) offer unparalleled flat surfaces and bold colors. We strictly utilize FR (Fire-Retardant) and A2 Non-Combustible cores, ensuring that your building's modern aesthetic is backed by the highest global safety standards.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Mechanical Stone Fastening",
      text: "Moving away from wet-cladding, we utilize 'Dry-Hanging' mechanical anchors for stone facades. This system allows for natural thermal expansion and contraction, preventing cracks and ensuring that heavy stone panels remain securely attached for the building's lifetime.",
      image: "https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Junction & Interface Detailing",
      text: "The beauty of a facade is in the details where materials meet. We engineer the 'Interface' between glass and stone or ACP and masonry, ensuring water-tightness through sophisticated flashing and gasket systems that hide sealant joints.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Fire Rating", value: "A2 / FR" },
    { label: "Wind Load", value: "4.5 kPa" },
    { label: "U-Value", value: "1.4" },
    { label: "Anchoring", value: "Mechanical" }
  ],
  faq: {
    title: "Cladding & Glass FAQs",
    items: [
      { q: "What is the benefit of a dry-hung stone system?", a: "It provides better ventilation, prevents salt efflorescence on the stone surface, and is much safer in seismic zones compared to traditional mortar fixing." },
      { q: "Is ACP safe for high-rise buildings?", a: "Only if FR (Fire Retardant) or Mineral-core panels are used. We only specify code-compliant, non-combustible composite materials." }
    ]
  },
  cta: {
    title: "Define your facade.",
    description: "From glass curtain walls to stone monoliths, let our facade engineers design a skin that stands the test of time and weather.",
    buttonText: "Request Cladding Spec",
    link: "/contact"
  }
};



export const outdoorLightingData = {
  hero: {
    subtitle: "Architectural Cinematography & Nocturnal Identity",
    title: "The Sculpting of",
    highlight: "The Night.",
    backgroundImage: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Exterior Photometrics",
    titlePart1: "Illuminated Form.",
    titlePart2: "Dark Sky Logic.",
    description: "Architectural lighting is the 'second life' of a building. At Bixbite, we design facade illumination that emphasizes structural rhythm and material texture without contributing to urban light glare. By utilizing precision-engineered optics and smart control systems, we turn silhouettes into landmarks while ensuring the surrounding landscape remains safe and inviting.",
    bullets: ["Grazing & Wall Washing", "Dark Sky Compliance", "Automated DMX Controls"]
  },
  matrix: {
    icon: Moon,
    title: "Illumination Pillars",
    items: [
      'Texture Grazing Logic', 
      'Silhouetting & Backlighting', 
      'Landscape Path Wayfinding', 
      'Anti-Glare Cut-off Optics',
      'RGBW Dynamic Sequencing',
      'Low-Voltage Efficiency'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Facade Grazing & Textural Depth",
      text: "We place narrow-beam luminaires at the base of textured surfaces like stone or brick. This 'Grazing' technique creates high-contrast shadows that reveal the tactile quality of the materials, giving the building a dramatic, three-dimensional presence at night.",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2068&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Dark Sky & Glare Mitigation",
      text: "We prioritize 'Environmental Responsibility.' By utilizing full-cutoff fixtures and precise aiming, we ensure that light is directed only where it is needed—on the building and paths—preventing light spill into the sky and neighboring properties.",
      image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "The Arrival Sequence Lighting",
      text: "Outdoor lighting is a tool for wayfinding. We design a hierarchy of light levels that naturally lead guests from the driveway to the entrance, using 'Marker' lights for boundaries and 'Accent' lights for the main architectural portal.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Smart DMX & RGBW Control",
      text: "For commercial landmarks, we integrate DMX-controlled RGBW systems. This allows the building facade to change color for events or holidays, all managed through a centralized cloud-based interface with pre-programmed energy-saving schedules.",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Energy Usage", value: "-40% LED" },
    { label: "IP Rating", value: "IP67/68" },
    { label: "Beam Control", value: "±3°" },
    { label: "Life Expectancy", value: "50k Hrs" }
  ],
  faq: {
    title: "Outdoor Lighting FAQs",
    items: [
      { q: "What is 'Wall Grazing'?", a: "It is a lighting technique where lights are placed close to a wall to highlight its texture. It is perfect for stone, wood, or uneven architectural surfaces." },
      { q: "How do you protect fixtures from the weather?", a: "We only specify marine-grade stainless steel or die-cast aluminum fixtures with high IP (Ingress Protection) ratings to withstand rain, dust, and humidity." }
    ]
  },
  cta: {
    title: "Light up your landmark.",
    description: "Don't let your building disappear at sunset. Let our lighting designers create a nocturnal masterpiece for your facade.",
    buttonText: "Request Lighting Masterplan",
    link: "/contact"
  }
};





export const executionData = {
  hero: {
    subtitle: "On-Site Oversight & Quality Assurance",
    title: "The Discipline of",
    highlight: "Realization.",
    backgroundImage: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Site Management",
    titlePart1: "Rigorous Standards.",
    titlePart2: "Seamless Delivery.",
    description: "Great design is only as good as its execution. At Bixbite, our supervision team acts as the bridge between the drafting table and the construction site. We provide daily on-site presence to manage trade coordination, verify material specifications, and enforce safety protocols. Our goal is to eliminate the 'Gap of Interpretation,' ensuring the finished project is an exact mirror of the approved architectural blueprints.",
    bullets: ["Zero-Tolerance Quality Control", "Real-Time Snag Tracking", "Trade Synchronization"]
  },
  matrix: {
    icon: ClipboardCheck,
    title: "Execution Pillars",
    items: [
      'Daily Site Reporting', 
      'Material Verification', 
      'Schedule Critical Path', 
      'HSE Safety Compliance',
      'Shop Drawing Review',
      'Budgetary Oversight'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Quality Control Protocol",
      text: "We implement a multi-stage inspection process. No phase of construction proceeds until the previous one has been 'signed off' by our supervisors. From the slump test of concrete to the alignment of tile grouts, we enforce a zero-tolerance policy for substandard craftsmanship.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Concurrent Trade Coordination",
      text: "Modern sites are crowded. We manage the delicate choreography between MEP (Mechanical, Electrical, Plumbing) teams and interior fit-out crews. By resolving structural clashes on-site in real-time, we prevent costly rework and keep the momentum moving forward.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Material Fidelity Checks",
      text: "Substitutions are the enemy of design. Our supervisors personally verify every delivery against the specified 'Schedule of Finishes.' We ensure that the exact grade of stone, timber, and glass you approved is the one installed on your walls.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Health, Safety & Environment (HSE)",
      text: "A clean site is a fast site. We enforce strict international safety standards, ensuring that all workers are equipped with proper PPE and that the site remains free of hazards, reducing the risk of delays due to accidents or regulatory shutdowns.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Site Visits", value: "Daily" },
    { label: "Design Fidelity", value: "100%" },
    { label: "Safety Incidents", value: "Zero" },
    { label: "Handover Speed", value: "On-Time" }
  ],
  faq: {
    title: "Execution FAQs",
    items: [
      { q: "What is 'Snagging'?", a: "It is the process of identifying minor defects or omissions at the end of a project. Our supervision ensures that 90% of snags are caught and fixed *during* construction, not after." },
      { q: "Does supervision include cost management?", a: "Yes. We verify work-done quantities to ensure that contractor payments are accurate and that the project remains within the contingency budget." }
    ]
  },
  cta: {
    title: "Realize your vision.",
    description: "Don't leave your project to chance. Ensure your design is built to the highest standard with our dedicated supervision team.",
    buttonText: "Request Site Oversight",
    link: "/contact"
  }
};


export const brandingIntegrationData = {
  hero: {
    subtitle: "Environmental Branding & Wayfinding Systems",
    title: "The Architecture of",
    highlight: "Identity.",
    backgroundImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Visual Integration",
    titlePart1: "Brand Immersion.",
    titlePart2: "Spatial Logic.",
    description: "Signage is not an afterthought; it is an architectural element. At Bixbite, we integrate branding into the very fabric of the building. By selecting materials that complement the interior palette and using light as a sculptural medium, we ensure that your logo and wayfinding feel like a natural extension of the space rather than a superficial addition.",
    bullets: ["Architectural Lettering", "Wayfinding Psychology", "Illuminated Identity"]
  },
  matrix: {
    icon: Type,
    title: "Branding Pillars",
    items: [
      '3D Dimensional Lettering', 
      'Intuitive Wayfinding Logic', 
      'Halo & Edge-Lit Tech', 
      'Material-Matched Signage',
      'Digital Display Integration',
      'Regulatory Compliance'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Architectural Dimensionality",
      text: "We move beyond flat graphics. Our signage utilizes 3D depth—using laser-cut metals, acrylics, and woods—to create shadows and highlights that interact with the store's lighting, giving the brand a physical, premium presence.",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2068&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Psychological Wayfinding",
      text: "Effective signage guides without shouting. We design wayfinding systems based on human intuition, placing directional cues at natural 'decision points' to ensure a frictionless flow through large commercial or retail environments.",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Photometric Identity",
      text: "We use light to define brand boundaries. From subtle 'Halo-lit' effects that make letters appear to float, to edge-lit glass panels for directories, we ensure your branding remains visible and atmospheric 24/7.",
      image: "https://images.unsplash.com/photo-1521791136366-39853752c0e7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Material Harmony",
      text: "Your brand shouldn't clash with the architecture. We specify signage materials—like brushed brass, sandblasted glass, or matte-finish composites—that echo the building's material DNA, creating a unified sensory experience.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Visibility", value: "High-Contrast" },
    { label: "Durability", value: "Exterior Grade" },
    { label: "Compliance", value: "ADA/Egress" },
    { label: "Precision", value: "CNC/Laser" }
  ],
  faq: {
    title: "Branding Integration FAQs",
    items: [
      { q: "What is Environmental Branding?", a: "It is the use of the physical environment—walls, floors, lighting, and signs—to communicate a brand's story and values to the people inside the space." },
      { q: "Are your signs ADA compliant?", a: "Yes. We integrate Braille, tactile lettering, and specific mounting heights into our designs to meet all accessibility and safety regulations." }
    ]
  },
  cta: {
    title: "Bring your brand to life.",
    description: "Don't settle for generic signage. Let us engineer a bespoke branding system that integrates perfectly with your architectural vision.",
    buttonText: "Request Branding Audit",
    link: "/contact"
  }
};



export const structuralCoordinationData = {
  hero: {
    subtitle: "Skeleton Engineering & Architectural Alignment",
    title: "The Physics of",
    highlight: "Stability.",
    backgroundImage: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Structural Logic",
    titlePart1: "Engineering Form.",
    titlePart2: "Total Integration.",
    description: "The most beautiful designs are only possible through robust engineering. At Bixbite, we specialize in structural coordination—the bridge between creative intent and physical reality. We work closely with engineers to integrate load-bearing columns, shear walls, and bracing systems into the architectural fabric, ensuring that the 'bones' of the building support the design rather than obstruct it.",
    bullets: ["Load-Path Optimization", "BIM Conflict Resolution", "Material Strength Analysis"]
  },
  matrix: {
    icon: Ruler,
    title: "Coordination Pillars",
    items: [
      'Seismic Load Analysis', 
      'Column Grid Optimization', 
      'Slab-to-Facade Junctions', 
      'BIM Clash Detection',
      'Structural Steel Detailing',
      'Foundation-to-Site Logic'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Column-Free Optimization",
      text: "We strive for spatial purity. By coordinating with structural teams on long-span beams and cantilevered slabs, we minimize the presence of columns in retail and residential spaces, creating open, flexible environments that maximize usable square footage.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "BIM Clash Detection",
      text: "We eliminate on-site surprises. Using 3D Building Information Modeling (BIM), we overlay structural skeletons with MEP and architectural layers to identify and resolve 'clashes' (where a beam might hit a vent) before a single brick is laid.",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Seismic & Wind Resilience",
      text: "Safety is our baseline. We coordinate the integration of shear walls and damping systems that allow the building to withstand lateral loads from wind and earthquakes, all while ensuring these heavy elements are hidden within the interior partitions.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Material Expression",
      text: "Sometimes the structure is the design. We specialize in 'Exposed Structure' coordination, where concrete columns or steel trusses are finished to architectural standards, serving as both the support system and the primary aesthetic feature.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Clash Resolve", value: "100%" },
    { label: "Span Length", value: "Maximized" },
    { label: "Steel Weight", value: "Optimized" },
    { label: "Safety Factor", value: "1.5x Min" }
  ],
  faq: {
    title: "Structural Coordination FAQs",
    items: [
      { q: "Why is coordination important early on?", a: "Early coordination prevents 'Architectural Compromise'—where columns have to be added later in awkward places because the structural needs weren't anticipated." },
      { q: "What is Clash Detection?", a: "It's a digital process that checks for spatial overlaps between the structure, the plumbing, and the architecture to prevent costly on-site errors." }
    ]
  },
  cta: {
    title: "Build on solid ground.",
    description: "Don't let structural constraints limit your vision. Let our coordination experts engineer a building that is as strong as it is beautiful.",
    buttonText: "Request Structural Audit",
    link: "/contact"
  }
};


export const weatherMaterialData = {
  hero: {
    subtitle: "Material Science & Environmental Longevity",
    title: "The Physics of",
    highlight: "Endurance.",
    backgroundImage: "https://images.unsplash.com/photo-1516156008625-3a9d6067769a?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Durability Engineering",
    titlePart1: "Weather Proofing.",
    titlePart2: "Future Proofing.",
    description: "Architecture is a battle against the elements. At Bixbite, we select exterior materials not just for their day-one beauty, but for their performance on year twenty. By analyzing local humidity levels, UV intensity, and wind-driven rain patterns, we specify a material palette that resists fading, corrosion, and decay, ensuring your building's facade remains pristine in the face of environmental stress.",
    bullets: ["Corrosion Class Testing", "UV Stability Validation", "Hydrophobic Coating Specs"]
  },
  matrix: {
    icon: Shield,
    title: "Resilience Pillars",
    items: [
      'Galvanic Corrosion Logic', 
      'Thermal Expansion Gaps', 
      'Hydrostatic Pressure Resistance', 
      'Salt Spray Certification',
      'Efflorescence Mitigation',
      'Solar Reflectance Index (SRI)'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Corten & Self-Protecting Metals",
      text: "We specify 'living' materials like Weathering Steel (Corten) and Copper. These metals develop a stable oxide layer—a patina—that acts as a protective shield against deep corrosion, eliminating the need for periodic painting or chemical coatings.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Hydrophobic & Nano-Coatings",
      text: "For porous materials like stone or concrete, we utilize breathable hydrophobic treatments. These allow water vapor to escape from the inside while preventing liquid water from entering, effectively stopping the freeze-thaw cycles that cause surface cracking.",
      image: "https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "UV-Resistant Polymer Technology",
      text: "Standard plastics and resins degrade under sunlight. We specify high-performance fluoropolymer coatings (like PVDF) for aluminum and composite panels, which maintain 90% of their color vibrance even after decades of intense solar exposure.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Thermal Expansion Management",
      text: "Materials breathe. We calculate the exact expansion coefficients for glass, metal, and stone to design 'Articulated Joints.' This ensures that as the building heats and cools, the facade can expand and contract without warping or shattering seals.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Corrosion Class", value: "C5-High" },
    { label: "UV Warranty", value: "25+ Yrs" },
    { label: "SRI Value", value: "80+" },
    { label: "Water Abs.", value: "< 0.5%" }
  ],
  faq: {
    title: "Material Resilience FAQs",
    items: [
      { q: "What is the Solar Reflectance Index (SRI)?", a: "SRI measures a surface's ability to stay cool in the sun by reflecting solar radiation and emitting thermal radiation. High SRI materials help reduce the 'Urban Heat Island' effect." },
      { q: "How do you prevent metal corrosion near the coast?", a: "We specify Marine-Grade (316) Stainless Steel or anodized aluminum with a minimum thickness of 25 microns to resist chloride-induced pitting." }
    ]
  },
  cta: {
    title: "Engineer for the elements.",
    description: "Don't let the weather dictate your building's lifespan. Let our material scientists specify a palette that stands the test of time.",
    buttonText: "Request Material Audit",
    link: "/contact"
  }
};




export const acpFacadeData = {
  hero: {
    subtitle: "Industrial Composite Engineering & Metal Envelopes",
    title: "Precision in",
    highlight: "Metallic Form.",
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Corporate Envelopes",
    titlePart1: "Monolithic Identity.",
    titlePart2: "Engineered Safety.",
    description: "Aluminum Composite Panels (ACP) and metal cladding systems are the hallmark of modern corporate architecture. At Bixbite, we go beyond simple installation. We engineer facade solutions that utilize A2 non-combustible cores and PVDF coatings to ensure your building's exterior remains vibrant, flat, and fire-safe for decades. Our focus is on achieving razor-sharp joints and perfect alignment to reflect your corporate brand’s precision.",
    bullets: ["Non-Combustible A2 Cores", "PVDF Duragloss Finishes", "Millimeter-Perfect Alignment"]
  },
  matrix: {
    icon: Grid,
    title: "Technical Pillars",
    items: [
      'A2 Fire-Rated Core Specs', 
      'CNC Routed Fabrication', 
      'Hidden Fastener Systems', 
      'Wind Pressure Validation',
      'Anti-Corrosion Sub-Structures',
      'Thermal Expansion Gaskets'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Non-Combustible Core Technology",
      text: "Safety is the corporate priority. We strictly specify ACP with mineral-filled cores that meet ASTM E84 and EN 13501-1 Class A2 standards. This ensures the facade does not contribute to flame spread, protecting occupants and the physical asset.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "The Zero-Tolerance Joint",
      text: "We use high-precision CNC routing to create 'Tray-Panel' systems. This allow for 'Hidden Fastener' installations where all rivets and screws are concealed within the joints, resulting in a smooth, seamless surface that exudes corporate quality.",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067769a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "High-Performance PVDF Coatings",
      text: "To combat urban pollution and UV degradation, our panels feature 70% Kynar 500 PVDF coatings. This technology ensures that corporate colors remain consistent across the entire building surface and do not chalk or fade over time.",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Structural Sub-Frame Engineering",
      text: "The panel is only as good as the skeleton behind it. We design aluminum alloy sub-structures that are thermally isolated from the main building frame, preventing 'Thermal Bridging' and allowing the panels to expand and contract without warping.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Fire Class", value: "A2 / S1 / D0" },
    { label: "Flatness", value: "99.8%" },
    { label: "Wind Load", value: "Up to 5kPa" },
    { label: "Finish", value: "PVDF 3-Coat" }
  ],
  faq: {
    title: "ACP Solution FAQs",
    items: [
      { q: "Is ACP safe for high-rise corporate buildings?", a: "Yes, provided the core is 'Non-Combustible' A2 or B grade. We handle all certification and compliance checks to meet local fire marshal requirements." },
      { q: "What is the maintenance cycle for metal facades?", a: "Due to the PVDF self-cleaning properties, these facades typically only require a soft-water wash every 12-24 months to maintain their gloss." }
    ]
  },
  cta: {
    title: "Upgrade your corporate skin.",
    description: "Modernize your building with an engineered metal envelope. Contact us for a technical facade audit and cost-analysis.",
    buttonText: "Request Technical Specs",
    link: "/contact"
  }
};


export const nightLightingData = {
  hero: {
    subtitle: "Nocturnal Identity & Photometric Artistry",
    title: "The Architecture of",
    highlight: "The After-Dark.",
    backgroundImage: "https://images.unsplash.com/photo-1464933058529-0af0bd63ec64?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Nocturnal Strategy",
    titlePart1: "Illuminated Soul.",
    titlePart2: "Dark Sky Balance.",
    description: "Architectural Night Lighting is not about brightness; it is about the selective application of shadow and glow. At Bixbite, we design nocturnal identities that emphasize a building's rhythm and texture. By utilizing precision optics and astronomical timers, we create landmark experiences that guide the eye while respecting the surrounding environment and minimizing light pollution.",
    bullets: ["Contrast & Shadow Mapping", "Color Temperature Logic", "Smart Motion Sequences"]
  },
  matrix: {
    icon: Moon,
    title: "Design Pillars",
    items: [
      'Wall Grazing Techniques', 
      'Silhouette & Backlighting', 
      'Astronomical Timing Controls', 
      'Anti-Glare Honeycomb Optics',
      'Kelvin Shift Strategies',
      'Emergency Pathway Illumination'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Physics of Wall Grazing",
      text: "To highlight the tactile nature of stone or wood, we place narrow-beam luminaires at a specific distance from the surface. This 'Grazing' technique creates micro-shadows that reveal the depth and texture of the material, making the facade feel three-dimensional at night.",
      image: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?q=80&w=2084&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Color Temperature Hierarchy",
      text: "We use Kelvin temperatures to define mood. Warmer tones (2700K - 3000K) are used for pedestrian areas and entry points to create a welcoming atmosphere, while cooler tones (4000K+) are reserved for highlighting architectural steel or concrete elements.",
      image: "https://images.unsplash.com/photo-1493246507139-91e8bef99c1e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Dark Sky & Glare Management",
      text: "We believe in responsible illumination. Our designs utilize 'Full Cutoff' fixtures that prevent light spill into the sky. By using honeycomb louvers and snoots, we hide the light source (the bulb) so the observer only sees the effect of the light, not the glare.",
      image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "The Pulsing Facade (DMX)",
      text: "For corporate landmarks, we integrate DMX-controlled systems. This allows for dynamic lighting sequences—subtle shifts in intensity or color that reflect the brand's energy, seasonal changes, or special events, all manageable from a central interface.",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Energy Savings", value: "85% (LED)" },
    { label: "Optic Precision", value: "±2°" },
    { label: "IP Rating", value: "IP68" },
    { label: "CRI Index", value: "90+" }
  ],
  faq: {
    title: "Night Lighting FAQs",
    items: [
      { q: "What is 'Dark Sky' Compliance?", a: "It is a standard of lighting that minimizes light pollution, glare, and light trespass, protecting the natural night environment for wildlife and humans." },
      { q: "How long do architectural LEDs last?", a: "The high-grade fixtures we specify are rated for L70, meaning they will maintain 70% of their brightness for over 50,000 hours (approx. 12 years of night use)." }
    ]
  },
  cta: {
    title: "Light up your legacy.",
    description: "A building shouldn't disappear when the sun goes down. Let our lighting designers create an iconic nocturnal presence for your project.",
    buttonText: "Request Lighting Audit",
    link: "/contact"
  }
};



export const corporateIdentityData = {
  hero: {
    subtitle: "Brand-Centric Architecture & Global Identity",
    title: "The Structure of",
    highlight: "Your Legacy.",
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Corporate DNA",
    titlePart1: "Brand Alignment.",
    titlePart2: "Structural Power.",
    description: "A corporate headquarters is more than an office; it is a three-dimensional manifestation of a brand's authority and vision. At Bixbite, we translate your corporate identity—from color psychology to mission statements—into architectural form. We design exteriors that communicate stability, innovation, and leadership, ensuring your physical presence is as powerful as your market position.",
    bullets: ["Brand Material Mapping", "Logo-to-Form Geometry", "Corporate Color Permanence"]
  },
  matrix: {
    icon: Fingerprint,
    title: "Identity Pillars",
    items: [
      'Logo Geometry Integration', 
      'Chromatic Facade Matching', 
      'Iconic Massing Studies', 
      'Entrance Portal Branding',
      'Signage-Integrated Facades',
      'Cultural Context Alignment'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Translating Brand DNA",
      text: "We analyze your brand's core attributes. If your company stands for 'Transparency,' we utilize high-performance structural glass. If it stands for 'Stability,' we emphasize heavy masonry and monolithic forms. The architecture becomes the brand's silent spokesperson.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Chromatic Permanence",
      text: "Corporate colors must be exact. We work with specialized cladding manufacturers to create custom-pigmented ACP or glass fins that match your brand's Pantone specifications, ensuring they remain vibrant and true to the brand for decades.",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "The Entrance: The Brand Handshake",
      text: "The arrival experience is engineered to impress. We design 'Hero Portals' that utilize logo-inspired geometry and integrated digital displays, creating a high-impact transition that prepares clients and employees for the corporate world inside.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Global Scalability",
      text: "For multinational firms, we develop 'Architectural Brand Guidelines.' This ensures that whether you build in London, New York, or Mumbai, your buildings maintain a consistent visual language that is globally recognizable yet locally sensitive.",
      image: "https://images.unsplash.com/photo-1449156001437-3a16d1dfda74?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Brand Recall", value: "95%" },
    { label: "Design Consistency", value: "100%" },
    { label: "Color Accuracy", value: "ΔE < 1.0" },
    { label: "Market Authority", value: "Landmark" }
  ],
  faq: {
    title: "Corporate Identity FAQs",
    items: [
      { q: "How do you integrate a logo into a facade?", a: "We don't just slap a sign on a wall; we use 'Graphic Architecture'—where the shapes, textures, or even the shadows of the building mimic the geometry of your logo." },
      { q: "Can architectural design boost employee morale?", a: "Absolutely. A building that clearly reflects a company's pride and success fosters a sense of belonging and elevates the professional standard for the entire team." }
    ]
  },
  cta: {
    title: "Build your brand's home.",
    description: "Your office is the physical embodiment of your company's value. Let us design an exterior that reflects your true corporate identity.",
    buttonText: "Schedule a Branding Workshop",
    link: "/contact"
  }
};



export const corporateSafetyData = {
  hero: {
    subtitle: "Enterprise Risk Management & Regulatory Assurance",
    title: "The Standard of",
    highlight: "Corporate Trust.",
    backgroundImage: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Safety Governance",
    titlePart1: "Liability Protection.",
    titlePart2: "Occupant Welfare.",
    description: "Corporate Safety is a fusion of architectural design and legal rigor. At Bixbite, we ensure your headquarters or commercial facility goes beyond the minimum code requirements. We implement 'Safety-First' design principles that reduce workplace accidents, ensure rapid emergency evacuation, and maintain strict compliance with global health and safety protocols (OSHA/HSE), protecting both your employees and your corporate liability.",
    bullets: ["Universal Accessibility (ADA)", "Fire Hazard Modeling", "Corporate Liability Audits"]
  },
  matrix: {
    icon: ShieldCheck,
    title: "Compliance Pillars",
    items: [
      'OSHA/HSE Standard Alignment', 
      'Emergency Egress Engineering', 
      'Hazardous Material Zoning', 
      'Slip-Resistance Validation',
      'Structural Load Certification',
      'Accessibility Continuity'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Universal Design & ADA Compliance",
      text: "We view accessibility as a core corporate value. Our compliance designs ensure that every entrance, workstation, and amenity is usable by all individuals, regardless of ability. This involves precise calculation of ramp gradients, door clearances, and tactile wayfinding systems.",
      image: "https://images.unsplash.com/photo-1506784919141-11144214de7d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Workplace Risk Mitigation",
      text: "We analyze corporate workflows to identify 'high-risk' zones. By engineering ergonomic floor transitions and specifying non-reflective, anti-fatigue materials in high-traffic areas, we reduce the physical strain and accidental risks associated with the daily corporate grind.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Life Safety & Smoke Dynamics",
      text: "In large corporate atriums, smoke is the primary threat. We use Computational Fluid Dynamics (CFD) to model air movement during fire events, allowing us to design invisible smoke-curtain systems and high-capacity extraction vents that keep evacuation paths clear.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Corporate Audit Documentation",
      text: "Compliance is only as good as its documentation. We provide 'Compliance Vaults'—digital records of all fire ratings, material certifications, and structural audits—ensuring your corporation is always ready for insurance inspections or government health and safety audits.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Audit Pass Rate", value: "100%" },
    { label: "Liability Index", value: "Minimized" },
    { label: "Response Time", value: "Optimized" },
    { label: "ADA Grade", value: "Gold" }
  ],
  faq: {
    title: "Corporate Compliance FAQs",
    items: [
      { q: "What is an architectural safety audit?", a: "It is a comprehensive review of your physical premises to identify fire hazards, accessibility gaps, or structural wear that could lead to liability issues." },
      { q: "Do you handle international building codes?", a: "Yes. We coordinate with local consultants to ensure that international corporate standards are met within the specific regulatory framework of any country." }
    ]
  },
  cta: {
    title: "Secure your corporate future.",
    description: "Don't let compliance be an afterthought. Let our safety engineers conduct a full-scale audit of your corporate facilities today.",
    buttonText: "Request Compliance Audit",
    link: "/contact"
  }
};




export const corporateSignageData = {
  hero: {
    subtitle: "Brand Presence & Structural Logo Integration",
    title: "The Art of",
    highlight: "Identity Placement.",
    backgroundImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Visual Authority",
    titlePart1: "Brand Stature.",
    titlePart2: "Technical Precision.",
    description: "In the corporate world, your logo is your signature on the city skyline. At Bixbite, we don't just 'attach' signs; we engineer branding interfaces. By analyzing sightlines, parallax effects, and structural wind loads, we determine the optimal placement for your corporate identity, ensuring it commands attention while appearing as an organic part of the architectural design.",
    bullets: ["Sightline & Visibility Mapping", "Structural Mounting Engineering", "Illuminated Brand Consistency"]
  },
  matrix: {
    icon: Target,
    title: "Signage Pillars",
    items: [
      'Parallax Visibility Audits', 
      'High-Altitude Wind Loading', 
      'Precision CNC Fabrication', 
      'Halo-Lit LED Engineering',
      'Material Finish Matching',
      'Regulatory Permit Handling'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Sightline & Parallax Analysis",
      text: "We utilize 3D geospatial modeling to determine the perfect elevation and angle for your signage. Whether viewed from a high-speed highway or a pedestrian walkway, we ensure the logo remains legible and distortion-free from every critical vantage point.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Structural Mounting Integrity",
      text: "Large-scale corporate logos face immense wind pressure. We design custom internal steel sub-frames that distribute these loads safely into the building's primary structure, ensuring the signage remains secure even during extreme weather events.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Nighttime Brand Uniformity",
      text: "We specify high-CRI LEDs and custom diffusion lenses to ensure your brand colors are rendered perfectly at night. From subtle halo-lighting to face-lit channel letters, the illumination is engineered to avoid hot spots and maintain a soft, premium glow.",
      image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=2068&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Material & Facade Harmony",
      text: "Your branding should complement the building's skin. We utilize high-grade finishes—such as brushed titanium, bead-blasted stainless steel, or architectural glass—to ensure the signage feels like an intentional design feature rather than an addition.",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1887&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Visibility Range", value: "2km+" },
    { label: "Wind Rating", value: "Cat 5" },
    { label: "Color Match", value: "Pantone Exact" },
    { label: "LED Life", value: "100k Hrs" }
  ],
  faq: {
    title: "Corporate Signage FAQs",
    items: [
      { q: "How do you handle local city signage permits?", a: "We manage the entire submission process, including structural stability certificates and lighting intensity reports required by municipal planning authorities." },
      { q: "What is the best lighting for a luxury corporate look?", a: "We typically recommend 'Halo-Lighting,' where the light glows from behind the letters. It creates a sophisticated silhouette without the harshness of direct face-lighting." }
    ]
  },
  cta: {
    title: "Command the skyline.",
    description: "Let our engineers determine the optimal placement for your brand identity. Reach out for a comprehensive visibility audit.",
    buttonText: "Request Branding Audit",
    link: "/contact"
  }
};


export const entryZoneData = {
  hero: {
    subtitle: "The Arrival Sequence & Traffic Flow Engineering",
    title: "The Portal of",
    highlight: "First Impressions.",
    backgroundImage: "https://images.unsplash.com/photo-1582030005178-c0702d334571?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Arrival Logistics",
    titlePart1: "Seamless Transit.",
    titlePart2: "Grand Entry.",
    description: "The entry and drop-off zone is the handshake of a building. At Bixbite, we engineer arrival sequences that balance high-volume vehicle logistics with pedestrian safety and architectural grandeur. By optimizing turning radii, canopy coverage, and thermal transitions, we ensure that every visitor’s journey—from their vehicle to the reception desk—is frictionless, protected, and visually stunning.",
    bullets: ["Vehicle Flow Simulation", "All-Weather Canopy Design", "Integrated Security Screening"]
  },
  matrix: {
    icon: Car,
    title: "Design Pillars",
    items: [
      'Turning Radius Analytics', 
      'Anti-Glare Pavement Tech', 
      'Automated Bollard Logic', 
      'Climate-Controlled Buffers',
      'VIP Curb Management',
      'Tactile Wayfinding Cues'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Flow & Transit Optimization",
      text: "We utilize advanced traffic modeling to calculate peak-hour vehicle stacking. This ensures that your drop-off zone never causes traffic backup onto the main road, maintaining a calm and organized arrival experience even during the busiest corporate hours.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "All-Weather Canopy Engineering",
      text: "Our entrance portals feature cantilevered or suspended canopies designed to withstand high wind loads while providing complete protection from rain and intense sun. We integrate invisible drainage systems to prevent water dripping at the curb edge.",
      image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "The Thermal Buffer Zone",
      text: "To maintain interior climate efficiency, we design vestibules and air-curtain systems at the main entrance. This creates a pressurized 'air lock' that prevents dust, heat, and humidity from entering the lobby every time the doors open.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Invisible Security Integration",
      text: "Safety shouldn't feel restrictive. We integrate high-security features like decorative hydraulic bollards and LPR (License Plate Recognition) cameras into the landscape design, providing robust protection that remains virtually invisible to the visitor.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2063&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Turnaround Time", value: "< 45 Sec" },
    { label: "Canopy Span", value: "Up to 12m" },
    { label: "Vehicle Stack", value: "8+ Cars" },
    { label: "Security Level", value: "K4 Rated" }
  ],
  faq: {
    title: "Entry Design FAQs",
    items: [
      { q: "What is the standard width for a commercial drop-off lane?", a: "We typically recommend a minimum of 3.5 meters for a single lane, with an additional 2.5 meters for the passenger unloading zone to allow for wheelchair access and luggage handling." },
      { q: "How do you handle heavy rain at the entrance?", a: "We design oversized gutter systems integrated into the canopy structure and use high-friction, porous paving materials to prevent puddling and slips at the doorstep." }
    ]
  },
  cta: {
    title: "Perfect your arrival.",
    description: "Don't let logistics ruin a luxury experience. Let our architects engineer a world-class entry and drop-off sequence for your facility.",
    buttonText: "Request Site Flow Analysis",
    link: "/contact"
  }
};


export const facadeMaintenanceData = {
  hero: {
    subtitle: "Asset Longevity & Specialized Access Engineering",
    title: "The Science of",
    highlight: "Preservation.",
    backgroundImage: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Lifecycle Management",
    titlePart1: "Enduring Value.",
    titlePart2: "Total Access.",
    description: "A high-performance facade is a long-term investment. At Bixbite, we design maintenance strategies that ensure your building looks as pristine on day 3,000 as it did on day one. We integrate permanent access systems—such as BMUs, monorails, and davit arms—directly into the architectural design, ensuring that cleaning, glass replacement, and seal inspections can be performed safely and cost-effectively without disrupting corporate operations.",
    bullets: ["BMU System Integration", "Glass Replacement Protocols", "Periodic Structural Audits"]
  },
  matrix: {
    icon: Settings,
    title: "Maintenance Pillars",
    items: [
      'Building Maintenance Units (BMU)', 
      'Rope Access Anchor Points', 
      'Davit Arm & Monorail Logic', 
      'Surface Cleaning Chemistry',
      'Sealant Integrity Cycles',
      'Thermal Imaging Surveys'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Permanent Access Systems (BMU)",
      text: "For high-rise corporate towers, we engineer Building Maintenance Units (BMUs). These are integrated into the roof structure, allowing cradles to reach every square inch of the facade for cleaning and repair, while remaining hidden from view when not in use.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Structural Sealant Monitoring",
      text: "Modern glass facades rely on structural silicones. We design 'Lifecycle Schedules' that include periodic laboratory testing of sealant samples and thermal drone surveys to detect air or water leakage before they become costly structural issues.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Material Cleaning Protocols",
      text: "Different materials require different chemistry. We provide a 'Facade Care Manual' specifying the exact pH-neutral cleaning agents and non-abrasive techniques required for your specific ACP, stone, or glass finishes to prevent permanent surface staining.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Glass Replacement Engineering",
      text: "Accidents happen. We design our facade systems with 'Replacement Logic'—ensuring that a single damaged glass pane can be removed and replaced from the exterior using the BMU, without needing to dismantle the surrounding panels.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Asset Life", value: "50+ Yrs" },
    { label: "Access Coverage", value: "100%" },
    { label: "Cleaning Cycle", value: "Quarterly" },
    { label: "Safety Rating", value: "EN 1808" }
  ],
  faq: {
    title: "Facade Maintenance FAQs",
    items: [
      { q: "What is a BMU?", a: "A Building Maintenance Unit is a mechanical device, usually roof-mounted, that carries a cradle for workers to access the building's exterior for cleaning and maintenance." },
      { q: "How often should a facade be cleaned?", a: "For corporate buildings in urban environments, we recommend a full wash every 3 to 6 months to prevent the buildup of atmospheric pollutants that can etch glass surfaces." }
    ]
  },
  cta: {
    title: "Protect your investment.",
    description: "Maintenance starts on the drawing board. Let our engineers design a comprehensive access and care plan for your building's future.",
    buttonText: "Request Maintenance Strategy",
    link: "/contact"
  }
};


export const glassCurtainData = {
  hero: {
    subtitle: "Unitized & Stick-Built Enclosure Engineering",
    title: "The Transparency of",
    highlight: "Modernity.",
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Envelope Engineering",
    titlePart1: "Seamless Glass.",
    titlePart2: "Structural Integrity.",
    description: "Glass curtain walls represent the pinnacle of modern corporate aesthetics. At Bixbite, we engineer light-weight, non-structural framing systems that hang from the building's floor slabs. Our systems utilize thermally-broken aluminum frames and high-performance IGU (Insulated Glass Units) to create a continuous, crystalline skin that protects against wind and water while offering panoramic views and energy efficiency.",
    bullets: ["Thermally Broken Systems", "Unitized & Stick-Built Logic", "High Solar Heat Gain Control"]
  },
  matrix: {
    icon: Layout,
    title: "System Pillars",
    items: [
      'Pressure Equalized Drainage', 
      'Structural Silicone Glazing', 
      'Seismic Movement Joints', 
      'Low-E Coating Optimization',
      'Acoustic Laminated Glass',
      'Solar Shading Integration'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Unitized vs. Stick-Built Logic",
      text: "We offer two primary delivery methods. 'Stick-built' systems are assembled on-site for complex geometries, while 'Unitized' systems are pre-assembled in factory-controlled conditions for rapid installation on high-rise towers, ensuring 100% seal integrity.",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Thermal & Solar Control",
      text: "To combat the 'Greenhouse Effect,' we utilize triple-silver Low-E coatings. These invisible layers reflect infrared heat back into the atmosphere while allowing visible light to pass through, significantly reducing the building's HVAC cooling load.",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Structural Silicone Glazing (SSG)",
      text: "For a 'frameless' aesthetic, we utilize 2-sided or 4-sided SSG. The glass is bonded to the aluminum frame using high-strength structural silicone, eliminating the need for exterior metal pressure plates and creating a smooth, monolithic glass surface.",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067769a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Dynamic Movement Coordination",
      text: "High-rise buildings sway. Our curtain wall systems are engineered with expansion joints and stack-joints that allow the glass skin to move independently of the concrete structure, preventing glass breakage during wind loads or seismic events.",
      image: "https://images.unsplash.com/photo-1521791136366-39853752c0e7?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "U-Value", value: "< 1.4 W/m²K" },
    { label: "Water Tightness", value: "Class RE1200" },
    { label: "Wind Load", value: "Up to 5.0 kPa" },
    { label: "Acoustics", value: "45dB OITC" }
  ],
  faq: {
    title: "Curtain Wall FAQs",
    items: [
      { q: "What is the difference between a window wall and a curtain wall?", a: "A window wall sits *between* floor slabs, while a curtain wall is hung *on the outside* of the building's edge, covering the slabs for a continuous glass appearance." },
      { q: "How do you prevent condensation?", a: "We use 'Thermal Breaks'—non-conductive polyamide strips that separate the inner and outer aluminum frames, preventing cold transfer and moisture buildup." }
    ]
  },
  cta: {
    title: "Design with clarity.",
    description: "Transform your building with a high-performance glass envelope. Contact our facade engineers for a technical feasibility study.",
    buttonText: "Request Technical Specs",
    link: "/contact"
  }
};

export const greenBuildingData = {
  hero: {
    subtitle: "Sustainable Engineering & LEED Alignment",
    title: "The Architecture of",
    highlight: "Sustainability.",
    backgroundImage: "https://images.unsplash.com/photo-1518005020480-1cd343a2d9b8?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Ecological Engineering",
    titlePart1: "Passive Design.",
    titlePart2: "Active Efficiency.",
    description: "Sustainability is no longer a choice; it is a corporate responsibility. At Bixbite, we integrate Green Building Features into the very DNA of your project. From high-performance building envelopes that reduce cooling loads to rainwater harvesting systems and solar-integrated facades, we ensure your building meets global green standards (LEED/BREEAM) while significantly reducing long-term operational costs.",
    bullets: ["Passive Solar Orientation", "Greywater Recycling Systems", "High-Performance Insulation"]
  },
  matrix: {
    icon: Leaf,
    title: "Sustainability Pillars",
    items: [
      'Solar PV Facade Integration', 
      'Rainwater Harvesting Logic', 
      'Low-VOC Material Specs', 
      'Smart HVAC Automation',
      'Vertical Garden Bio-Filters',
      'Daylight Harvesting Sensors'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Passive Solar Optimization",
      text: "We design building massing and window-to-wall ratios based on the sun's path. By utilizing deep overhangs and high-performance glazing, we allow natural light to penetrate deep into the floor plate while blocking 80% of radiant heat, drastically reducing the need for artificial cooling.",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "BIPV: Integrated Photovoltaics",
      text: "We turn the building skin into a power plant. By using Building Integrated Photovoltaics (BIPV) in our glass curtain walls or roof systems, we generate clean energy on-site without compromising the architectural aesthetic of the corporate tower.",
      image: "https://images.unsplash.com/photo-1509391366360-fe5bb60c855a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Bio-Filtration & Living Walls",
      text: "We integrate vertical gardens that act as natural air scrubbers. These living walls filter CO2 and VOCs (Volatile Organic Compounds) from the air while providing psychological 'Biophilic' benefits to employees, leading to higher productivity and lower stress levels.",
      image: "https://images.unsplash.com/photo-1585314062340-f1a5acc79900?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Intelligent Water Management",
      text: "Every drop is reused. Our designs feature dual-plumbing systems that treat greywater from sinks and showers for use in irrigation and toilet flushing, reducing the building's total water consumption by up to 45%.",
      image: "https://images.unsplash.com/photo-1534394015626-b2ca61b361b3?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Energy Savings", value: "35-50%" },
    { label: "Water Reuse", value: "45%" },
    { label: "Carbon Offset", value: "High" },
    { label: "LEED Target", value: "Gold/Platinum" }
  ],
  faq: {
    title: "Green Building FAQs",
    items: [
      { q: "What is the ROI of Green Building?", a: "While initial costs can be 2-5% higher, the reduction in utility bills and maintenance usually pays for the investment within 5-7 years, while increasing the asset's resale value." },
      { q: "What is 'Daylight Harvesting'?", a: "It is a smart lighting system that uses sensors to detect natural light levels and automatically dims or brightens LEDs to maintain a constant light level, saving immense energy." }
    ]
  },
  cta: {
    title: "Build for the future.",
    description: "Lower your operational costs and your carbon footprint. Contact our sustainability experts for a Green Building feasibility study.",
    buttonText: "Request Sustainability Audit",
    link: "/contact"
  }
};


export const landscapeIntegrationData = {
  hero: {
    subtitle: "Biophilic Design & External Amenity Engineering",
    title: "The Fusion of",
    highlight: "Nature & Form.",
    backgroundImage: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Biophilic Systems",
    titlePart1: "Living Hardscapes.",
    titlePart2: "Functional Greenery.",
    description: "Landscape is not merely decoration; it is a performance layer of the building. At Bixbite, we integrate outdoor seating and greenery to create 'Third Spaces'—areas between work and home that foster creativity. By using permeable paving, native plant species, and ergonomic outdoor furniture, we design corporate ecosystems that manage stormwater, reduce the urban heat island effect, and provide restorative spaces for occupants.",
    bullets: ["Xeriscape Planting Logic", "All-Weather Amenity Zoning", "Permeable Drainage Systems"]
  },
  matrix: {
    icon: Sprout,
    title: "Integration Pillars",
    items: [
      'Native Species Selection', 
      'Permeable Paving Tech', 
      'Modular Outdoor Workstations', 
      'Integrated Irrigation Logic',
      'Wind-Buffer Plantings',
      'Acoustic Green Barriers'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Hardscape & Softscape Harmony",
      text: "We bridge the gap between concrete and soil. Our designs utilize 'recessed planters' and floating timber decks that allow structural surfaces to transition seamlessly into lush greenery, ensuring that outdoor seating feels nested within nature rather than adjacent to it.",
      image: "https://images.unsplash.com/photo-1585314062340-f1a5acc79900?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "The Outdoor Office Hub",
      text: "We engineer seating for the digital age. By integrating weatherproof power outlets, solar-shaded pergolas, and high-strength exterior Wi-Fi nodes, we transform traditional gardens into functional outdoor workspaces that boost employee productivity and health.",
      image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=2042&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Microclimate Engineering",
      text: "Landscape is a natural HVAC system. We strategically place deciduous trees and water features to provide 'Evaporative Cooling' during summer months, effectively lowering the ambient temperature of the building's outdoor seating zones by up to 5°C.",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Stormwater Management",
      text: "Our landscapes work during the rain. We utilize 'Bioswales'—vegetated channels that collect, filter, and slow down stormwater runoff. This prevents local flooding and allows water to recharge the local aquifer through permeable sub-layers.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Cooling Effect", value: "3-5°C Reduc." },
    { label: "Permeability", value: "85%" },
    { label: "Plant Survival", value: "98%" },
    { label: "Usage Rate", value: "High" }
  ],
  faq: {
    title: "Landscape Integration FAQs",
    items: [
      { q: "What is Xeriscaping?", a: "It is a landscaping method developed for arid climates that uses drought-tolerant plants and efficient irrigation to eliminate the need for supplemental water from municipal sources." },
      { q: "How do you protect outdoor furniture from the elements?", a: "We specify marine-grade upholstery, powder-coated aluminum frames, and FSC-certified teak that can withstand intense UV and moisture without degrading." }
    ]
  },
  cta: {
    title: "Grow your corporate culture.",
    description: "Move beyond the four walls. Let our landscape architects design an outdoor ecosystem that inspires your team and respects the environment.",
    buttonText: "Request Landscape Audit",
    link: "/contact"
  }
};


export const modernFacadeData = {
  hero: {
    subtitle: "High-Performance Envelopes & Geometric Artistry",
    title: "The Future of",
    highlight: "Vertical Form.",
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Elevation Engineering",
    titlePart1: "Sculptural Precision.",
    titlePart2: "Climate Logic.",
    description: "Modern elevation planning is a dialogue between internal function and external environmental forces. At Bixbite, we design facades that serve as 'active skins.' By integrating parametric modeling and high-performance materials, we create elevations that respond to sunlight, manage thermal transfer, and project a bold, contemporary corporate identity. We don't just design walls; we engineer the building's first point of contact with the world.",
    bullets: ["Parametric Massing Studies", "Material Layering Logic", "Fenestration Optimization"]
  },
  matrix: {
    icon: Layers,
    title: "Planning Pillars",
    items: [
      'Parametric Pattern Logic', 
      'High-Performance Glazing', 
      'Thermal Bridge Mitigation', 
      'Wind Pressure Analysis',
      'Material Contrast Mapping',
      'Dynamic Shadow Control'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Parametric Facade Design",
      text: "We use computational algorithms to generate facade patterns that are mathematically optimized for shade and light. This 'Parametric' approach allows us to create complex, undulating geometries that would be impossible to design with traditional methods, giving your building a unique, futuristic signature.",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Material Layering & Depth",
      text: "Modern elevations thrive on contrast. We specialize in 'Dual-Skin' facades—layering glass with perforated metal screens or terracotta fins. This creates a sense of depth and visual movement, while providing a secondary layer of thermal protection for the building interior.",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "The Window-to-Wall Ratio (WWR)",
      text: "Energy efficiency is built into the elevation. We balance aesthetics with physics by calculating the optimal WWR. This ensures the building has enough glass for panoramic views and daylighting, while maintaining enough solid insulated wall to keep HVAC costs low.",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Geometric Massing",
      text: "We treat the building as a sculpture. By manipulating volumes, setbacks, and cantilevers, we create elevations that play with light and shadow throughout the day, ensuring the building looks different—and equally impressive—from dawn until dusk.",
      image: "https://images.unsplash.com/photo-1521791136366-39853752c0e7?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Design Unique", value: "100%" },
    { label: "Thermal Value", value: "High" },
    { label: "Wind Stability", value: "Certified" },
    { label: "Glazing Spec", value: "Triple/Low-E" }
  ],
  faq: {
    title: "Elevation Planning FAQs",
    items: [
      { q: "What is a 'High-Performance' facade?", a: "It's an envelope designed to actively manage heat, light, and air, rather than just acting as a static barrier. It reduces the building's energy consumption by up to 40%." },
      { q: "Can an existing building elevation be modernized?", a: "Yes, we specialize in 'Facade Retrofitting'—where we overlay a new, high-performance skin onto an old structure to improve both its look and its efficiency." }
    ]
  },
  cta: {
    title: "Elevate your corporate image.",
    description: "Don't settle for a flat design. Let our architects engineer a multi-dimensional facade that defines your building as a modern landmark.",
    buttonText: "Request Facade Audit",
    link: "/contact"
  }
};


export const turnkeyExteriorData = {
  hero: {
    subtitle: "End-to-End Facade Project Management & Site Control",
    title: "The Precision of",
    highlight: "Realization.",
    backgroundImage: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Site Operations",
    titlePart1: "Design Verified.",
    titlePart2: "Execution Perfected.",
    description: "Turnkey execution at Bixbite is where engineering theory meets site reality. We take full responsibility for the exterior lifecycle—from structural steel sub-frames and glass procurement to the final installation and weather-proofing of the facade. Our project managers oversee every millimeter of tolerance, ensuring that the complex layers of modern elevations are executed on time, within budget, and to the highest safety standards.",
    bullets: ["Zero-Tolerance Installation", "Multi-Trade Coordination", "On-Site Quality Assurance"]
  },
  matrix: {
    icon: HardHat,
    title: "Execution Pillars",
    items: [
      'Site Logistics Planning', 
      'Structural Load Validation', 
      'Sealing & Glazing Protocols', 
      'Scaffolding & Access Management',
      'Material Handling Logic',
      'As-Built Documentation'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Precision Sub-Structure Assembly",
      text: "The facade is only as straight as the steel behind it. We execute the installation of high-precision aluminum or galvanized steel sub-frames, using laser-leveling technology to ensure every panel and glass unit aligns perfectly with the building's structural grid.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Logistics & Vertical Transport",
      text: "Executing high-rise exteriors requires master logistics. We manage the movement of oversized glass and ACP panels using specialized spider cranes and BMUs, ensuring delicate materials reach the upper floors safely and are installed without damage.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Weather-Seal & Integrity Testing",
      text: "We don't assume performance; we test it. Our execution includes rigorous on-site hose testing and air-infiltration checks on the primary seals and gaskets to ensure the building envelope remains 100% water-tight against driving rain and wind.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Safety-First Site Governance",
      text: "External execution involves high-risk work at height. We maintain a zero-incident safety culture, with strict adherence to PPE protocols, double-anchor points for rope access, and continuous safety audits for all vertical installation teams.",
      image: "https://images.unsplash.com/photo-1531834685032-c74696a6b988?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Delivery Speed", value: "On-Track" },
    { label: "Safety Record", value: "Zero Incident" },
    { label: "Tolerance", value: "±2mm" },
    { label: "Project Risk", value: "Eliminated" }
  ],
  faq: {
    title: "Turnkey Execution FAQs",
    items: [
      { q: "What does 'Turnkey' actually mean for an exterior?", a: "It means we handle everything: material sourcing, structural sub-frames, logistics, installation, and final certification. You receive a completed, weather-tight building envelope." },
      { q: "How do you manage quality control on-site?", a: "We use a 'Stage-Gate' process where each floor of the facade must be inspected and signed off for alignment and sealing before the installation team moves to the next level." }
    ]
  },
  cta: {
    title: "From blueprint to building.",
    description: "Don't let complex designs fail in the field. Trust our veteran execution teams to bring your building's exterior to life with surgical precision.",
    buttonText: "Request Execution Quote",
    link: "/contact"
  }
};



export const outdoorLivingData = {
  hero: {
    subtitle: "Private Sanctuaries & Transitional Architecture",
    title: "The Art of",
    highlight: "Elevated Living.",
    backgroundImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Residential Extensions",
    titlePart1: "Outdoor Comfort.",
    titlePart2: "Refined Luxury.",
    description: "A balcony or terrace is the lungs of a home. At Bixbite, we design these spaces to be seamless extensions of your interior living room. We balance the technical requirements of waterproofing and structural drainage with the aesthetic needs of privacy and comfort. Whether it's a cantilevered modern balcony or a sprawling Mediterranean porch, we create transitional spaces that allow you to enjoy the outdoors without leaving your home.",
    bullets: ["Advanced Deck Drainage", "Privacy Screen Integration", "All-Weather Material Palette"]
  },
  matrix: {
    icon: Coffee,
    title: "Design Pillars",
    items: [
      'Cantilevered Slab Engineering', 
      'Frameless Glass Balustrades', 
      'Thermal Timber Decking', 
      'Integrated Planter Irrigation',
      'Wind-Break Glass Systems',
      'Atmospheric Cove Lighting'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Seamless Threshold",
      text: "We specialize in 'Flush-Threshold' designs, where the indoor floor and the outdoor deck meet at the exact same level. By using hidden slot drains, we ensure that rainwater never enters the home, while creating a visual continuity that makes your living space feel twice as large.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Structural Safety & Balustrades",
      text: "Safety meets transparency. We utilize top-mounted or side-bolted frameless glass systems using laminated safety glass. This provides an unobstructed view of the horizon while meeting strict residential load-bearing codes for wind and impact.",
      image: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?q=80&w=1923&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Thermal Comfort & Shading",
      text: "To make terraces usable year-round, we integrate bioclimatic pergolas and retractable shading. These systems react to the sun's angle, providing cooling shade in the summer while allowing the low winter sun to warm your home's interior.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Waterproofing Integrity",
      text: "The foundation of a good terrace is invisible. We apply multi-layer liquid-applied membranes and root-resistant barriers under our tiling or decking systems to ensure zero leakage into the rooms below, protecting your home's structural health.",
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Drainage Rate", value: "150L / Min" },
    { label: "Glass Load", value: "1.5 kN/m" },
    { label: "UV Resistance", value: "100%" },
    { label: "Privacy Level", value: "Customizable" }
  ],
  faq: {
    title: "Terrace Design FAQs",
    items: [
      { q: "Can I add a garden to my balcony?", a: "Yes, but it requires structural load calculations and specialized waterproofing. We design lightweight 'Green Terrace' modules that include built-in drainage and root barriers." },
      { q: "What is the best flooring for a porch?", a: "We recommend anti-slip vitrified tiles, WPC (Wood Polymer Composite), or natural Teak. Each offers a different balance of maintenance and aesthetic warmth." }
    ]
  },
  cta: {
    title: "Expand your horizon.",
    description: "Turn your unused outdoor space into a luxury retreat. Contact us for a structural assessment and design concept.",
    buttonText: "Book a Design Session",
    link: "/contact"
  }
};



export const budgetExteriorData = {
  hero: {
    subtitle: "High-Impact Aesthetics & Cost-Optimized Engineering",
    title: "The Logic of",
    highlight: "Value Design.",
    backgroundImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Value Engineering",
    titlePart1: "Maximum Impact.",
    titlePart2: "Minimum Spend.",
    description: "Great architecture isn't defined by the size of the budget, but by the intelligence of the choices. At Bixbite, we specialize in 'Strategic Elevations.' We identify the key visual focal points of your home—like the entrance or the primary facade—and invest in premium materials there, while using cost-effective, durable alternatives for secondary areas. This ensures a luxury look and feel while respecting your financial boundaries.",
    bullets: ["Strategic Material Mixing", "Modular Construction Logic", "Cost-Effective Texture Mapping"]
  },
  matrix: {
    icon: Banknote,
    title: "Budget Pillars",
    items: [
      'Standardized Module Sizing', 
      'High-Grade Texture Paints', 
      'Focal Point Investment', 
      'Local Material Sourcing',
      'Low-Maintenance Finishes',
      'Simplified Geometric Forms'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Strategic Material Layering",
      text: "We use the '80/20 Rule.' 80% of the facade uses high-quality, cost-effective finishes like specialized texture paints or standard bricks, while 20%—the areas closest to the eye—uses premium accents like stone veneer or wood cladding to elevate the entire perception of the home.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Standardized Geometry",
      text: "Custom curves and complex cantilevers drive up labor costs. We focus on 'Rectilinear Sophistication'—using standard structural spans and simple geometric shifts that are easy to build but create deep shadows and a modern, architect-designed silhouette.",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Lighting as a Luxury Tool",
      text: "Light is the most cost-effective building material. By strategically placing inexpensive LED up-lighters and grazing lights, we can make standard plaster walls look like expensive textured stone at night, providing a high-end feel without the material cost.",
      image: "https://images.unsplash.com/photo-1524143813002-454199859f51?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Long-Term Maintenance Savings",
      text: "A low initial cost is a trap if maintenance is high. We prioritize materials with 'Self-Cleaning' properties or integral colors (like pre-pigmented renders) that don't require repainting every few years, saving you significant money over the building's lifecycle.",
      image: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Cost Saving", value: "25-40%" },
    { label: "Visual Quality", value: "Premium" },
    { label: "Execution Time", value: "Fast-Track" },
    { label: "Durability", value: "15+ Years" }
  ],
  faq: {
    title: "Budget Design FAQs",
    items: [
      { q: "How do you reduce costs without making it look 'cheap'?", a: "By using 'Contrast Theory.' We pair affordable flat surfaces with small, high-quality tactile elements. The eye focuses on the quality of the accent, elevating the whole building." },
      { q: "Does budget design affect the home's resale value?", a: "On the contrary, it often increases it. By focusing on durable, timeless materials rather than expensive trends, we ensure the home looks good for years, appealing to a wider range of future buyers." }
    ]
  },
  cta: {
    title: "Smart design, real value.",
    description: "Luxury is a feeling, not just a price tag. Let us show you how to maximize your home's exterior potential within your specific budget.",
    buttonText: "Request a Value Audit",
    link: "/contact"
  }
};

export const exteriorPaintData = {
  hero: {
    subtitle: "High-Performance Finishes & Tactile Surfaces",
    title: "The Skin of",
    highlight: "Character.",
    backgroundImage: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Surface Engineering",
    titlePart1: "Vibrant Pigments.",
    titlePart2: "Total Protection.",
    description: "Paint is the final layer of your home's defense. At Bixbite, we go beyond color selection to engineer the chemical performance of your facade. We specify high-build acrylics, silicone-based renders, and specialized textures that allow your walls to 'breathe' while remaining 100% waterproof. Our approach ensures your home maintains its 'just-painted' look despite the harshest sun, dust, and rain.",
    bullets: ["Anti-Carbonation Coatings", "Self-Cleaning Technology", "UV-Resistant Pigments"]
  },
  matrix: {
    icon: PaintBucket,
    title: "Finish Pillars",
    items: [
      'Silicone Water-Repellents', 
      'Elastomeric Crack-Bridging', 
      'Graffiti-Resistant Coats', 
      'Sand-Blast Texturing',
      'Nano-Self-Cleaning Tech',
      'Solar Reflective Paints'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Elastomeric Crack-Bridging",
      text: "Standard paints crack when walls expand and contract. We use Elastomeric coatings that have high 'elongation' properties—acting like a rubber skin that stretches over hairline cracks to prevent water from reaching the structure behind.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Self-Cleaning Nano-Technology",
      text: "We specify 'Lotus Effect' coatings. These nano-textures cause rainwater to form beads that roll off the surface, picking up dirt and dust along the way. This keeps your facade clean even in high-pollution urban environments.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Tactile Texture Mapping",
      text: "Visual depth is achieved through texture. From rustic 'Grooved' finishes to modern 'Fine-Grain' sprays, we use texture to hide minor plaster imperfections and create a sophisticated play of light and shadow on large wall surfaces.",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067769a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Heat-Reflective Cool Roofs",
      text: "Dark colors absorb heat, but our 'Cool-Coat' technology utilizes pigments that reflect the Near-Infrared (NIR) spectrum. This allows you to have a dark, modern aesthetic while keeping the building's surface temperature up to 15°C cooler.",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Durability", value: "10-15 Years" },
    { label: "Heat Reduc.", value: "Up to 15°C" },
    { label: "Waterproofing", value: "100%" },
    { label: "Fungal Resist.", value: "Certified" }
  ],
  faq: {
    title: "Paint & Texture FAQs",
    items: [
      { q: "What is the difference between normal paint and exterior texture?", a: "Texture is a thicker material (often containing sand or marble chips) that adds physical depth and durability, whereas paint is a thinner film primarily for color and moisture protection." },
      { q: "How do you prevent dampness from coming through the paint?", a: "We apply a three-layer system: a deep-penetrating primer to seal the pores, a waterproof base coat, and a breathable, hydrophobic topcoat." }
    ]
  },
  cta: {
    title: "Refresh your facade.",
    description: "Don't just change the color; upgrade your home's protection. Let our experts recommend the perfect coating system for your climate.",
    buttonText: "Request a Color Consultation",
    link: "/contact"
  }
};

export const homeElevationData = {
  hero: {
    subtitle: "Architectural Sculpting & Modern Residential Envelopes",
    title: "The Face of",
    highlight: "Personal Luxury.",
    backgroundImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Residential Elevation",
    titlePart1: "Curb Appeal.",
    titlePart2: "Structural Grace.",
    description: "A home's elevation is its first word to the world. At Bixbite, we design residential facades that go beyond simple walls; we create three-dimensional sculptures. By manipulating light, shadow, and a curated palette of high-end materials, we ensure your home reflects your personality while significantly increasing its market valuation and architectural standing in the neighborhood.",
    bullets: ["3D Massing & Volume Studies", "Material Contrast Strategy", "Integrated Lighting Design"]
  },
  matrix: {
    icon: Home,
    title: "Design Pillars",
    items: [
      'Proportional Balance Logic', 
      'Hidden Rainwater Systems', 
      'High-Performance Cladding', 
      'Parametric Screen Details',
      'Cantilevered Floating Forms',
      'Entryway Focal Engineering'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Massing & Volumetric Contrast",
      text: "We avoid 'flat' designs. By introducing setbacks, protruding volumes, and floating slabs, we create a dynamic interplay of shadows that changes throughout the day. This volumetric approach gives the house a sense of depth and architectural complexity.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "The Palette of Textures",
      text: "We curate materials that speak to each other. Whether it's the warmth of charred timber (Shou Sugi Ban) against cold raw concrete, or large-format porcelain slabs paired with slim-profile aluminum, we ensure every texture serves a purpose in the visual hierarchy.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Fenestration & Privacy Logic",
      text: "Windows are the eyes of the home. We design 'Strategic Openings'—large glass spans for common areas to bring the outdoors in, paired with CNC-cut metal screens or louvers for private spaces that allow for light and ventilation without compromising security.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Nocturnal Architecture",
      text: "The design doesn't sleep at night. We integrate invisible LED pathways, facade grazing, and spotlighting that accentuates the architectural lines, ensuring your home looks even more impressive after sunset.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Asset Valuation", value: "+25% Impact" },
    { label: "Natural Light", value: "Optimized" },
    { label: "Thermal Gain", value: "Minimized" },
    { label: "Design Style", value: "Bespoke" }
  ],
  faq: {
    title: "Elevation Design FAQs",
    items: [
      { q: "What is the difference between 2D and 3D elevation planning?", a: "2D shows the flat front view, while 3D massing allows us to see how light hits different surfaces, how shadows fall, and how the materials wrap around corners for a true architectural look." },
      { q: "How do you choose between Modern and Traditional styles?", a: "We analyze the neighborhood context and your personal preference. Often, we create 'Transitional' elevations that use traditional materials like stone but in modern, clean-lined applications." }
    ]
  },
  cta: {
    title: "Redefine your home's identity.",
    description: "Don't settle for a generic builder's look. Let our architects sculpt a unique facade that defines your lifestyle.",
    buttonText: "Start My Elevation Design",
    link: "/contact"
  }
};


export const landscapeDrivewayData = {
  hero: {
    subtitle: "Hardscape Engineering & Ornamental Horticulture",
    title: "The Path to",
    highlight: "Home Harmony.",
    backgroundImage: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Site Engineering",
    titlePart1: "Elegant Arrival.",
    titlePart2: "Living Design.",
    description: "The journey to your front door should be an experience, not just a utility. At Bixbite, we engineer driveways and landscapes that balance heavy-duty vehicle requirements with the soft, restorative power of nature. From permeable paving that manages monsoon runoff to 'Smart Landscapes' with automated irrigation and architectural night lighting, we ensure your home's surroundings are as intelligently designed as its interiors.",
    bullets: ["Heavy-Duty Permeable Paving", "Automated Irrigation Systems", "Pedestrian-Vehicle Segregation"]
  },
  matrix: {
    icon: Map,
    title: "Planning Pillars",
    items: [
      'Swept Path Vehicle Analysis', 
      'Sub-Base Soil Stabilization', 
      'Native Species Xeriscaping', 
      'Integrated Linear Drainage',
      'Atmospheric Garden Lighting',
      'Tactile Hardscape Finishes'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Vehicle Flow & Turning Radii",
      text: "We don't guess; we calculate. Using swept-path analysis, we ensure your driveway can accommodate luxury SUVs and guest parking with ease. We design gentle curves and optimal widths that prevent tire-rub on curbs and ensure a smooth, 'one-turn' entry into your garage.",
      image: "https://images.unsplash.com/photo-1590483734724-383b853b237d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Permeable & Durable Hardscapes",
      text: "To prevent local flooding and water pooling, we utilize permeable paving systems. These allow rainwater to filter through the driveway surface back into the ground, reducing the load on municipal drains while providing a high-friction, slip-resistant surface for vehicles.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Layered Ornamental Planting",
      text: "We create 'Visual Privacy' through vegetation. By layering low-level shrubs, mid-level perennials, and high-level canopy trees, we shield your home from street noise and prying eyes, creating a lush microclimate that lowers the ambient temperature around your facade.",
      image: "https://images.unsplash.com/photo-1585314062340-f1a5acc79900?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Architectural Nightlighting",
      text: "A landscape is a 24-hour feature. We design lighting 'scenes'—using path-lights for safety, uplighters to emphasize tree structures, and grazing lights to highlight the texture of stone boundary walls, ensuring your garden feels safe and magical after dark.",
      image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f505?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Drainage Efficiency", value: "95%" },
    { label: "Pavement Rating", value: "T4 Duty" },
    { label: "Irrigation Savings", value: "40%" },
    { label: "Lighting Efficiency", value: "LED / Solar" }
  ],
  faq: {
    title: "Landscape Planning FAQs",
    items: [
      { q: "What is the best material for a residential driveway?", a: "For a balance of luxury and durability, we recommend cobblestones, grass pavers (for permeability), or stamped concrete with a high-strength sub-base to prevent cracking." },
      { q: "How do you handle maintenance for the plants?", a: "We install smart irrigation controllers that monitor local weather forecasts and only water when necessary, combined with a selection of native, low-maintenance species." }
    ]
  },
  cta: {
    title: "Create your garden retreat.",
    description: "Your land has untapped potential. Let our landscape architects engineer an entry sequence and garden that adds lasting value to your lifestyle.",
    buttonText: "Request a Site Survey",
    link: "/contact"
  }
};

export const architecturalStylesData = {
  hero: {
    subtitle: "Heritage Revival & Contemporary Structural Expression",
    title: "The Dialogue of",
    highlight: "Eras.",
    backgroundImage: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Style Synthesis",
    titlePart1: "Timeless Heritage.",
    titlePart2: "Modern Edge.",
    description: "Architecture is a bridge between the past and the future. At Bixbite, we specialize in both the preservation of traditional motifs and the pioneering of modern minimalism. Our 'Transitional' approach takes the soul of traditional design—the warmth of stone, the symmetry of pillars—and filters it through a modern lens of large-span glass and sleek silhouettes, creating a home that feels both familiar and groundbreaking.",
    bullets: ["Classical Proportional Logic", "Modern Material Technology", "Transitional Design Mapping"]
  },
  matrix: {
    icon: Landmark,
    title: "Style Pillars",
    items: [
      'Symmetrical Facade Logic', 
      'Contemporary Massing', 
      'Heritage Ornamentation', 
      'Clean-Lined Minimalism',
      'Material Authenticity',
      'Structural Transparency'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Traditional Foundation",
      text: "We honor historical architectural orders by focusing on permanence and craftsmanship. This involves using natural stone, arched openings, and intricate moldings that speak to a legacy of elegance, providing a home with a sense of rootedness and 'Old World' charm.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "The Modern Evolution",
      text: "Modernism is about freedom. We utilize steel-frame construction to create 'open plans' and curtain walls that eliminate the need for heavy load-bearing partitions, allowing the interior life of the home to connect visually with the external landscape.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Transitional Materiality",
      text: "We bridge the gap by applying traditional materials in modern ways. Imagine hand-carved stone utilized in a sharp, geometric rain-screen system, or traditional wooden rafters supporting a high-tech glass roof—creating a unique, curated aesthetic.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Proportional Harmony",
      text: "Whether modern or traditional, beauty is mathematical. We apply the 'Golden Ratio' and classical scaling to modern volumes, ensuring that even the most avant-garde home feels balanced and pleasing to the human eye.",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Style Range", value: "Hybrid/Pure" },
    { label: "Craftsmanship", value: "Master Grade" },
    { label: "Longevity", value: "Multi-Gen" },
    { label: "Design Depth", value: "High" }
  ],
  faq: {
    title: "Architectural Style FAQs",
    items: [
      { q: "What is 'Transitional Architecture'?", a: "It is a blend of traditional and modern. It takes the cozy, recognizable elements of a classic home and strips away the clutter, replacing it with cleaner lines and larger windows." },
      { q: "Can a modern home still feel warm and inviting?", a: "Absolutely. By using natural materials like timber, warm stone, and strategic ambient lighting, a minimalist modern home can be just as welcoming as a traditional cottage." }
    ]
  },
  cta: {
    title: "Find your design voice.",
    description: "Do you prefer the echoes of the past or the vision of the future? Let us help you craft an architectural identity that is uniquely yours.",
    buttonText: "Explore Style Concepts",
    link: "/contact"
  }
};



export const outdoorLightingDatas = {
  hero: {
    subtitle: "Architectural Grazing & Atmospheric Landscape Illumination",
    title: "The Magic of",
    highlight: "Nocturnal Light.",
    backgroundImage: "https://images.unsplash.com/photo-1534349762230-e0cadf78f505?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Luminous Design",
    titlePart1: "Sculpted Shadow.",
    titlePart2: "Guided Light.",
    description: "Lighting is the final brushstroke of exterior design. At Bixbite, we don't just 'illuminate' a garden; we compose a nocturnal experience. By using a mix of low-voltage LED technology, smart controls, and specific beam angles, we create depth and drama. Our designs ensure that your architectural focal points are celebrated, your pathways are safely guided, and your outdoor spaces become enchanting retreats the moment the sun sets.",
    bullets: ["Zoned Smart Automation", "Architectural Texture Grazing", "Low-Glare Optical Comfort"]
  },
  matrix: {
    icon: Lightbulb,
    title: "Lighting Pillars",
    items: [
      'Up-Lighting Tree Canopies', 
      'Pathway Safety Bollards', 
      'Facade Grazing Logic', 
      'Underwater Pool Optics',
      'Step & Stair Recessed Light',
      'Smart Motion Integration'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Architectural Facade Grazing",
      text: "We place luminaires at the base of textured walls to create 'grazing'—a technique that uses high-contrast shadows to emphasize the beauty of stone, brick, or timber. This transforms flat walls into dramatic 3D textures at night.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Moonlighting & Silhouetting",
      text: "To create a natural feel, we use 'Moonlighting'—placing soft, cool-toned lights high in tree canopies to cast dappled shadows downward. We also use 'Silhouetting' by lighting a wall behind a sculptural plant to reveal its dramatic dark outline.",
      image: "https://images.unsplash.com/photo-1509391366360-fe5bb60c855a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "The Path of Safety",
      text: "Functional lighting shouldn't be boring. We utilize recessed step lights and anti-glare bollards to define the edges of driveways and stairs. These fixtures are designed to direct light exactly where your feet land, without shining directly into your eyes.",
      image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Smart Ecosystem Control",
      text: "Your lighting should respond to your life. We integrate astronomical timers and PIR sensors that automatically adjust brightness based on the time of day, movement, or your customized 'Evening Scenes' controlled via your smartphone.",
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Energy Usage", value: "LED / Low-Watt" },
    { label: "IP Rating", value: "IP67 / IP68" },
    { label: "Color Temp", value: "2700K - 3000K" },
    { label: "Control", value: "App/Voice/Auto" }
  ],
  faq: {
    title: "Outdoor Lighting FAQs",
    items: [
      { q: "What color temperature is best for gardens?", a: "We recommend 'Warm White' (2700K to 3000K). This mimics the cozy glow of firelight and makes greenery and stone look natural and inviting, unlike cool white which can feel clinical." },
      { q: "Are the lights safe in heavy rain?", a: "Absolutely. We only use fixtures with high Ingress Protection (IP) ratings (IP65 or higher), ensuring they are completely dust-tight and protected against powerful water jets." }
    ]
  },
  cta: {
    title: "Light up your night.",
    description: "Don't let your garden disappear at dusk. Contact us for a professional lighting layout that brings your home's exterior to life 24/7.",
    buttonText: "Request a Lighting Layout",
    link: "/contact"
  }
};


export const siteExecutionData = {
  hero: {
    subtitle: "Precision Project Management & On-Site Quality Control",
    title: "The Discipline of",
    highlight: "Realization.",
    backgroundImage: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Site Operations",
    titlePart1: "Design Verified.",
    titlePart2: "Built to Last.",
    description: "The most beautiful design is only as good as its execution. At Bixbite, our site supervision team acts as the guardians of your vision. We manage the complex coordination between civil contractors, facade specialists, and landscape artists. By maintaining a zero-tolerance policy for errors and conducting rigorous material testing, we ensure that every brick, beam, and glass panel is installed with surgical precision and structural integrity.",
    bullets: ["Zero-Tolerance Alignment", "Material Grade Verification", "Daily Progress Audits"]
  },
  matrix: {
    icon: HardHat,
    title: "Execution Pillars",
    items: [
      'Structural Load Validation', 
      'Waterproofing Benchmarking', 
      'Joint & Finish Precision', 
      'Safety Protocol Governance',
      'Material Procurement Logic',
      'As-Built Technical Maps'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Material Quality Verification",
      text: "We don't take the supplier's word for it. Our supervisors conduct on-site slump tests for concrete, verify steel grades with lab reports, and check the moisture content of timber, ensuring that only the highest-tier materials are integrated into your home's exterior.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Waterproofing Integrity Checks",
      text: "A home's longevity depends on its seal. We supervise 'Ponding Tests' on terraces and balconies, where surfaces are flooded for 48 hours to verify that the membrane is 100% watertight before the final aesthetic finishes are applied.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Precision Joinery & Alignment",
      text: "We use laser-leveling tools to ensure that facade panels, window frames, and stone cladding align to within a 2mm tolerance. This attention to detail eliminates visual 'jaggedness' and ensures a clean, architecturally perfect finish.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Contractor Coordination",
      text: "An exterior involves multiple specialized teams. We serve as the central point of control, ensuring the electrician's conduit doesn't interfere with the plumber's drainage, and the stone mason's work integrates perfectly with the window installer's frame.",
      image: "https://images.unsplash.com/photo-1531834685032-c74696a6b988?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Tolerance", value: "±2mm" },
    { label: "Safety Rating", value: "100%" },
    { label: "Design Accuracy", value: "1:1 Match" },
    { label: "Waste Reduc.", value: "15%" }
  ],
  faq: {
    title: "Site Supervision FAQs",
    items: [
      { q: "Why do I need professional supervision if I have a contractor?", a: "A contractor focuses on speed and cost; a supervisor focuses on quality and design intent. We ensure the contractor doesn't take shortcuts that could lead to structural issues later." },
      { q: "How often are site visits conducted?", a: "Depending on the project phase, we conduct either daily inspections or critical-milestone audits to sign off on structural and waterproofing layers before they are covered up." }
    ]
  },
  cta: {
    title: "Build with confidence.",
    description: "Don't leave your luxury investment to chance. Ensure your home is executed to world-class standards with our expert site management.",
    buttonText: "Request Execution Plan",
    link: "/contact"
  }
};


export const vastuExteriorData = {
  hero: {
    subtitle: "Vedic Spatial Geometry & Elemental Alignment",
    title: "The Science of",
    highlight: "Cosmic Flow.",
    backgroundImage: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Vedic Architecture",
    titlePart1: "Elemental Balance.",
    titlePart2: "Spatial Harmony.",
    description: "Vastu Shastra is the ancient Indian science of architecture that synchronizes human life with the cosmic energy grid. At Bixbite, we integrate Vastu principles into modern exterior planning without compromising on contemporary aesthetics. From the 'Brahmasthan' (central void) to the precise placement of water bodies and entry gates, we ensure your home acts as a conduit for prosperity, health, and peace.",
    bullets: ["Magnetic North Orientation", "Elemental Zone Mapping", "Energy Flow Optimization"]
  },
  matrix: {
    icon: Compass,
    title: "Vastu Pillars",
    items: [
      'Main Gate Placement (Pada)', 
      'Northeast Water Sourcing', 
      'Southwest Massing Logic', 
      'Agni (Fire) Zone Utilities',
      'Vastu Purusha Mandala',
      'Positive Slope Engineering'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Main Entry (Simha Dwara)",
      text: "We calculate the exact 'Pada' or division of the facade to place the main entrance. Ideally located in the North or East, the entry is designed to be the most majestic part of the elevation, acting as a gateway for positive solar energy to enter the home.",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Elemental Water Placement",
      text: "The Northeast (Ishanya) corner represents the Water element. We strategically plan swimming pools, underground tanks, or decorative fountains in this zone to enhance mental clarity and spiritual growth for the inhabitants.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Massing & Height Distribution",
      text: "According to Vastu, the Southwest (Nairutya) should be the heaviest and highest point of the building. We design the elevation with setbacks that rise toward the Southwest, providing stability and strength to the head of the household.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Landscaping & Plant Vastu",
      text: "Not all greenery is equal. We place heavy trees in the South and West to block harsh afternoon sun, while keeping the North and East open with light lawns and medicinal plants like Tulsi to allow the morning 'Prana' to flow unobstructed.",
      image: "https://images.unsplash.com/photo-1585314062340-f1a5acc79900?q=80&w=1887&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Vastu Compliance", value: "95% - 100%" },
    { label: "Energy Flow", value: "Optimized" },
    { label: "Brahmasthan", value: "Preserved" },
    { label: "Orientation", value: "Solar/Magnetic" }
  ],
  faq: {
    title: "Vastu Planning FAQs",
    items: [
      { q: "Can a modern glass house be Vastu compliant?", a: "Yes. Vastu is about the placement of functions and masses. We can use modern materials like glass and steel while still adhering to the sacred geometry of the Vastu Purusha Mandala." },
      { q: "What if my plot is not a perfect square?", a: "We use 'Correctional Landscaping' and copper wire energy-blocking techniques to normalize the energy of irregular plots before construction begins." }
    ]
  },
  cta: {
    title: "Align with the universe.",
    description: "Build a home that nurtures your soul. Contact our Vastu-certified architects for a complete energy mapping of your property.",
    buttonText: "Request Vastu Audit",
    link: "/contact"
  }
};


export const waterproofingData = {
  hero: {
    subtitle: "Structural Protection & Sub-Surface Water Management",
    title: "The Integrity of",
    highlight: "Dry Form.",
    backgroundImage: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Hydraulic Engineering",
    titlePart1: "Impermeable Barriers.",
    titlePart2: "Gravity Drainage.",
    description: "Water is the primary cause of structural failure in residential buildings. At Bixbite, we approach waterproofing as a multi-layered defense system. We don't just 'coat' surfaces; we engineer drainage paths that direct water away from the foundation. By combining high-performance membranes with French drains and intelligent slope planning, we ensure your home remains bone-dry and structurally sound for decades.",
    bullets: ["Negative & Positive Side Protection", "Crystalline Slurry Technology", "French Drain Integration"]
  },
  matrix: {
    icon: ShieldCheck,
    title: "Technical Pillars",
    items: [
      'Polyurethane Liquid Membranes', 
      'Bituminous Torch-on Sheets', 
      'Perforated Sub-Soil Drains', 
      'Expansion Joint Sealing',
      'Hydrostatic Pressure Relief',
      'Non-Clog Slot Drains'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Multi-Layer Terrace Proofing",
      text: "We execute a five-stage system for terraces: structural slope (screed), primer, high-build waterproof membrane, protection layer, and finally the aesthetic finish. This 'Sandwich' approach ensures that even if the top tile cracks, the structure remains 100% protected.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "French Drains & Perimeter Flow",
      text: "For properties with high water tables, we install French Drains—perforated pipes surrounded by gravel—at the foundation level. This system 'captures' water before it reaches your basement walls and directs it safely to the municipal storm-water grid.",
      image: "https://images.unsplash.com/photo-1534394015626-b2ca61b361b3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Negative Side Injection",
      text: "In cases where external access is impossible (like existing basements), we use 'Chemical Grout Injection.' We inject hydrophilic resins into the concrete that react with water to expand and seal cracks from the inside out, stopping active leaks instantly.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Slope & Scupper Optimization",
      text: "Standing water is the enemy. We calculate the 'Critical Gradient' for every balcony and roof, ensuring that water moves toward high-capacity scuppers and downspouts at a rate of at least 150 liters per minute during peak rainfall.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Warranty", value: "10-25 Years" },
    { label: "Membrane Elongation", value: "400%" },
    { label: "Ponding Test", value: "48 Hours" },
    { label: "Water Ingress", value: "Zero" }
  ],
  faq: {
    title: "Waterproofing FAQs",
    items: [
      { q: "What is a Ponding Test?", a: "It is the gold standard of verification. We plug the drains and flood the terrace with 2-3 inches of water for 48 hours to check for any dampness on the ceiling below before finishing the floor." },
      { q: "How do you treat expansion joints?", a: "We use specialized TPE (Thermoplastic Elastomer) tapes and backer rods that can stretch and contract as the building moves without ever breaking the waterproof seal." }
    ]
  },
  cta: {
    title: "Don't let the rain in.",
    description: "Waterproofing is cheaper than structural repair. Protect your investment with an engineered drainage and sealing solution.",
    buttonText: "Request a Leak Audit",
    link: "/contact"
  }
};



export const waterproofMaterialData = {
  hero: {
    subtitle: "Advanced Polymer Membranes & Crystalline Chemical Agents",
    title: "The Chemistry of",
    highlight: "Dryness.",
    backgroundImage: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Material Science",
    titlePart1: "Molecular Barrier.",
    titlePart2: "Total Seal.",
    description: "The efficacy of waterproofing is determined at the molecular level. At Bixbite, we curate a library of high-performance materials ranging from high-elongation Polyurethane (PU) to self-healing crystalline admixtures. We select materials based on their 'Crack-Bridging' ability, UV stability, and resistance to hydrostatic pressure, ensuring that every square inch of the building envelope—from the foundation to the roof—is chemically engineered to repel moisture.",
    bullets: ["High-Build PU Coatings", "EPDM Synthetic Rubber", "Crystalline Admixtures"]
  },
  matrix: {
    icon: Microscope,
    title: "Material Library",
    items: [
      'Liquid Applied Polyurethane', 
      'APP Modified Bitumen', 
      'Crystalline Admixtures', 
      'EPDM Rubber Membranes',
      'TPO Single-Ply Sheets',
      'Nano-Silane Sealants'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Liquid Applied Polyurethane (PU)",
      text: "The gold standard for seamless protection. PU coatings are applied as a liquid that cures into a joint-free, rubber-like membrane. Its primary advantage is its 400%+ elongation capacity, allowing it to stretch over structural cracks without tearing.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Crystalline Admixtures",
      text: "For concrete structures, we use 'Internal Sealing.' These chemicals are mixed directly into the concrete. When moisture enters, the chemicals react to grow microscopic crystals that plug the pores of the concrete, effectively making the structure 'self-healing.'",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "EPDM Synthetic Rubber",
      text: "Used primarily for large flat roofs and podiums, EPDM (Ethylene Propylene Diene Monomer) is a highly durable synthetic rubber. It is extremely resistant to UV radiation and thermal shock, maintaining its integrity in temperatures ranging from -40°C to +150°C.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Modified Bituminous Membranes",
      text: "Often referred to as 'Torch-on' membranes, these are multi-layered sheets of bitumen modified with polymers like APP or SBS. They provide a thick, rugged barrier ideal for high-traffic areas and heavy-duty foundation protection.",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067769a?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Tensile Strength", value: "High" },
    { label: "UV Stability", value: "Excellent" },
    { label: "Root Resistance", value: "Certified" },
    { label: "Eco-Friendly", value: "VOC Compliant" }
  ],
  faq: {
    title: "Material Selection FAQs",
    items: [
      { q: "Is liquid or sheet waterproofing better?", a: "Liquid is superior for complex geometries and roofs with many penetrations (pipes/vents) because it's seamless. Sheets are better for large, flat, uniform areas like foundations." },
      { q: "What is 'Self-Healing' waterproofing?", a: "It refers to crystalline technology where the material re-activates in the presence of new moisture to grow more crystals, sealing new cracks that may form over time." }
    ]
  },
  cta: {
    title: "Specify for longevity.",
    description: "The wrong material choice leads to failure. Let our material scientists recommend the correct chemical system for your project's specific environmental conditions.",
    buttonText: "Download Material Specs",
    link: "/contact"
  }
};




export const claddingFinishesData = {
  hero: {
    subtitle: "Premium Cladding Systems & High-Gloss Brand Finishes",
    title: "The Texture of",
    highlight: "Innovation.",
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Commercial Finishes",
    titlePart1: "Sleek Metals.",
    titlePart2: "Total Transparency.",
    description: "In retail architecture, the facade is the first point of brand engagement. At Bixbite, we engineer high-performance cladding systems using Aluminum Composite Panels (ACP), ultra-clear glazing, and architectural metals. Our finishes are selected for their 'Flatness Integrity,' UV resistance, and ease of maintenance, ensuring your commercial property projects a modern, sophisticated image that endures high foot traffic and atmospheric pollutants.",
    bullets: ["FR-Grade ACP Systems", "High-Transmission Glazing", "Anodized Aluminum Accents"]
  },
  matrix: {
    icon: Diamond,
    title: "Material Pillars",
    items: [
      'Fire-Rated (FR) ACP Core', 
      'Stainless Steel PVD Finishes', 
      'Low-Iron Extra Clear Glass', 
      'Perforated Metal Screens',
      'Powder-Coated Mullions',
      'Anti-Fingerprint Surfaces'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Advanced ACP Cladding",
      text: "We exclusively specify Fire-Rated (Class A2/B) Aluminum Composite Panels. Beyond safety, we focus on 'Coating Integrity' using PVDF finishes that guarantee color consistency and chalking resistance for over 20 years, even in intense sun.",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067769a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Ultra-Clear Retail Glazing",
      text: "For retail storefronts, we utilize 'Low-Iron' glass. By reducing the natural green tint found in standard glass, we achieve maximum transparency and color accuracy for window displays, allowing your products to be seen in their true light.",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "PVD Metal Finishes",
      text: "When a project requires luxury, we use Physical Vapor Deposition (PVD) coating on stainless steel. This process allows us to achieve Rose Gold, Champagne, or Titanium Black finishes that are significantly harder and more scratch-resistant than traditional plating.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Dynamic Perforated Metals",
      text: "We design custom-perforated aluminum screens that serve as 'Secondary Skins.' These provide solar shading and privacy while allowing the building to breathe. At night, these screens can be back-lit to transform the facade into a glowing brand beacon.",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Fire Class", value: "A2 / FR" },
    { label: "Glass Clarity", value: "92% VLT" },
    { label: "Finish Life", value: "20+ Years" },
    { label: "Maintenance", value: "Low" }
  ],
  faq: {
    title: "Material & Finish FAQs",
    items: [
      { q: "Is ACP safe for high-rise retail?", a: "Only if FR-Grade (Fire Retardant) cores are used. We strictly use mineral-core ACP which does not support combustion, unlike older PE-core panels." },
      { q: "What is the benefit of PVDF coating?", a: "PVDF (Polyvinylidene Fluoride) is a resin-based coating that provides the best resistance to UV, acids, and pollutants, preventing the 'fading' look common in lower-end retail units." }
    ]
  },
  cta: {
    title: "Precision in every panel.",
    description: "Your brand deserves a finish that reflects its quality. Contact our cladding specialists to view our premium sample library.",
    buttonText: "Request Material Samples",
    link: "/contact"
  }
};



export const attractiveLightingData = {
  hero: {
    subtitle: "Retail Scenography & Dynamic Commercial Illumination",
    title: "The Art of",
    highlight: "Attraction.",
    backgroundImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "High-Street Illumination",
    titlePart1: "Captivating Glow.",
    titlePart2: "Brand Visibility.",
    description: "In the retail world, light is an invitation. At Bixbite, we design 'Attractive Lighting' systems that go beyond basic visibility. We use light to sculpt architectural details, create focal points on window displays, and establish an atmosphere that aligns with your brand identity. Our approach balances high-impact aesthetics with energy-efficient LED technology, ensuring your business shines brightest on the street.",
    bullets: ["Dynamic RGBW Facade Control", "High-CRI Retail Display Lighting", "Nocturnal Identity Mapping"]
  },
  matrix: {
    icon: Sparkles,
    title: "Design Pillars",
    items: [
      'Accentuated Archways', 
      'Glow-Effect Signage', 
      'Color-Correct Window Spots', 
      'Animated LED Strips',
      'Wash Lighting for ACP',
      'Warm Amenity Lighting'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Visual Hierarchy & Framing",
      text: "We don't light everything equally. We use 'High-Contrast' ratios to frame the main entrance and key products. By dimming peripheral areas and spotlighting the threshold, we subconsciously guide the customer’s eye toward the point of entry.",
      image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "The Halo Effect Signage",
      text: "We specialize in 'Back-lit' or 'Halo' signage. Instead of front-lighting a logo, we illuminate the surface behind it. This creates a soft, luxury silhouette that makes your brand name pop without the harsh glare of direct LEDs.",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1887&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Dynamic Color Scaping",
      text: "Using DMX-controlled RGBW systems, we allow your building to change its 'mood' for seasons, sales, or events. Whether it's a soft warm amber for daily use or a vibrant brand-colored pulse for a launch, the building becomes a living part of your marketing.",
      image: "https://images.unsplash.com/photo-1509391366360-fe5bb60c855a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Window Display Brilliance",
      text: "Lighting for products requires High CRI (Color Rendering Index) sources. We ensure that the reds are deep and the golds are bright, preventing the 'faded' look often seen with low-quality outdoor lighting.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Footfall Inc.", value: "+15-20%" },
    { label: "Color Accuracy", value: "95+ CRI" },
    { label: "Energy Class", value: "A++ LED" },
    { label: "Lifespan", value: "50k Hours" }
  ],
  faq: {
    title: "Retail Lighting FAQs",
    items: [
      { q: "Can lighting help with store security?", a: "Yes. By eliminating dark corners and using motion-activated bright 'security floods' in non-public areas, we discourage intruders while keeping the front inviting." },
      { q: "Is architectural lighting expensive to run?", a: "With modern LED and smart timers, lighting a full commercial facade often costs less than running a single commercial HVAC unit." }
    ]
  },
  cta: {
    title: "Stop the scroll, start the stroll.",
    description: "Make your storefront impossible to ignore. Let our lighting designers create a custom nocturnal identity for your brand.",
    buttonText: "Request a Lighting Mockup",
    link: "/contact"
  }
};







export const costEffectiveSolutionsData = {
  hero: {
    subtitle: "Value Engineering & Rapid Commercial Deployment",
    title: "The Strategy of",
    highlight: "Smart Growth.",
    backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Commercial Efficiency",
    titlePart1: "Lower Costs.",
    titlePart2: "Higher Impact.",
    description: "In the competitive retail landscape, speed and budget are as critical as design. At Bixbite, we provide cost-effective exterior solutions that don't look 'budget.' By utilizing standardized panel sizes, high-durability synthetic finishes, and modular installation techniques, we help businesses launch faster and with lower overhead. We focus on 'Value Engineering'—investing in the details that customers touch and see, while optimizing the hidden infrastructure.",
    bullets: ["Standardized Module Logic", "High-Performance Synthetic Finishes", "Pre-Fabricated Componentry"]
  },
  matrix: {
    icon: "Banknote", 
    title: "Efficiency Pillars",
    items: [
      'Modular ACP Grid Planning', 
      'High-Grade Exterior Vinyls', 
      'Off-the-Shelf Glazing Units', 
      'Efficient Lighting Layouts',
      'Local Sourcing Strategy',
      'Rapid-Fix Mounting Systems'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Modular Panel Optimization",
      text: "Material waste is a hidden cost. We design your facade using standard 1220mm x 2440mm panel modules. This 'Zero-Waste' planning ensures you pay for the material on your wall, not the scraps on the floor, reducing ACP costs by up to 20%.",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067769a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Synthetic Texture Substitutes",
      text: "Natural stone and real wood require expensive sub-structures and high maintenance. We utilize high-pressure laminates (HPL) and stone-textured acrylic renders that provide the same visual warmth and luxury but at a fraction of the weight and cost.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Plug-and-Play Lighting",
      text: "Custom architectural lighting can be a labor-intensive expense. We specify high-output, standardized LED systems that provide a premium 'wash' effect on the building skin without requiring specialized high-voltage engineering.",
      image: "https://images.unsplash.com/photo-1524143813002-454199859f51?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Rapid Deployment Systems",
      text: "Time is money in retail. Our 'Z-Clip' and interlocking mounting systems allow for the rapid installation of facade panels, cutting on-site labor time by 30% and allowing your store to open to the public weeks earlier.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "CAPEX Reduc.", value: "20-35%" },
    { label: "Launch Speed", value: "Fast-Track" },
    { label: "Waste Factor", value: "< 5%" },
    { label: "Durability", value: "Commercial Grade" }
  ],
  faq: {
    title: "Cost-Effective FAQs",
    items: [
      { q: "Does cost-effective mean lower quality?", a: "No. It means smarter engineering. We use materials with the same durability ratings as premium options but with simpler installation methods and standardized sizing." },
      { q: "How do you save on maintenance costs?", a: "By choosing materials like powder-coated aluminum and UV-stable synthetics that don't require regular painting or specialized cleaning agents." }
    ]
  },
  cta: {
    title: "Stretch your budget further.",
    description: "A premium facade is within reach. Let our engineers show you how to optimize your retail exterior for maximum ROI.",
    buttonText: "Request a Value Study",
    link: "/contact"
  }
};

export const customerEntryData = {
  hero: {
    subtitle: "Entry Sequence Engineering & High-Conversion Threshold Design",
    title: "The Science of",
    highlight: "The First Step.",
    backgroundImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Entrance Engineering",
    titlePart1: "Seamless Access.",
    titlePart2: "Strategic Flow.",
    description: "The entrance is the most critical few square meters of any retail space. We design 'Decompression Zones' that allow customers to adjust from the busy street to your store's atmosphere. By analyzing pedestrian flow, sightlines, and tactile transitions, we ensure your entry is barrier-free, welcoming, and psychologically engineered to encourage exploration.",
    bullets: ["Decompression Zone Mapping", "Barrier-Free ADA Compliance", "Psychological Threshold Cues"]
  },
  matrix: {
    icon: "DoorOpen", 
    title: "Entry Pillars",
    items: [
      'Automatic Sliding Glass', 
      'Recessed Walk-off Matts', 
      'Air Curtain Climate Control', 
      'Threshold Lighting Accents',
      'Wide-Aperture Ingress',
      'Directional Wayfinding'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Decompression Zone",
      text: "We plan a 5-to-10 foot area immediately inside the door where customers can slow down, adjust their lighting perception, and scan the store. We keep this area clear of heavy merchandise to prevent 'Transition Shock' and encourage deeper browsing.",
      image: "https://images.unsplash.com/photo-1534452203293-497de3c180c3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Tactile Floor Transitions",
      text: "We use changes in floor texture—moving from rough exterior pavement to soft interior rugs or polished stone—to signal a change in environment. This 'Tactile Cueing' subconsciously tells the customer they have arrived in a premium space.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Climate & Sound Barriers",
      text: "To maintain luxury, we integrate invisible air curtains and acoustic baffling at the entrance. This prevents street noise and temperature fluctuations from entering the store, creating a 'Sensory Sanctuary' the moment the door opens.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Dwell Time Inc.", value: "+25%" },
    { label: "Access Width", value: "Min 1.8m" },
    { label: "Safety Rating", value: "Grade A" },
    { label: "Thermal Loss", value: "-30%" }
  ],
  faq: {
    title: "Entry Planning FAQs",
    items: [
      { q: "What is the best width for a retail entrance?", a: "For high-traffic retail, we recommend a minimum clear opening of 1.8 to 2.4 meters to allow two-way traffic without friction." },
      { q: "How do you handle rain and dirt at the entry?", a: "We install heavy-duty recessed scraper mats that are flush with the floor, ensuring safety while trapping 90% of moisture before it hits your main showroom floor." }
    ]
  },
  cta: {
    title: "Make an entrance.",
    description: "Your doorway is your best salesperson. Let us engineer an entry sequence that converts window shoppers into customers.",
    buttonText: "Request an Entry Audit",
    link: "/contact"
  }
};


export const visualMerchandisingDatas = {
  hero: {
    subtitle: "Stop-Motion Facades & High-Conversion Window Scenography",
    title: "The Art of",
    highlight: "Visual Pull.",
    backgroundImage: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Exterior Marketing",
    titlePart1: "Captivate.",
    titlePart2: "Convert.",
    description: "Exterior Visual Merchandising is the bridge between architecture and sales. At Bixbite, we transform your facade into a narrative tool. By integrating high-definition display glazing, modular shelving systems, and specialized lighting 'wash' effects, we ensure your store stops the 3-second passerby. We don't just design windows; we design theater that reflects your current seasonal campaign and drives immediate footfall.",
    bullets: ["Seasonal Display Adaptability", "Sightline Optimization", "Digital-Physical Integration"]
  },
  matrix: {
    icon: "ShoppingBag", 
    title: "Merchandising Pillars",
    items: [
      'Anti-Reflective Display Glass', 
      'Integrated Mannequin Pods', 
      'High-CRI Spotlight Grids', 
      'Kinetic Facade Elements',
      'Threshold Brand Signage',
      'Interactive QR Touchpoints'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Sightline & Angle Analysis",
      text: "We study pedestrian approach angles to determine the 'Golden Zone'—the specific height and angle where the human eye naturally rests. We position your hero products within this zone to maximize the impact of your display from across the street.",
      image: "https://images.unsplash.com/photo-1534452203293-497de3c180c3?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "The Power of Back-Lighting",
      text: "To prevent the 'Cave Effect' (where windows look dark during the day), we install high-lumen light boxes and backlit fabric tension systems. This creates a luminous backdrop that makes products pop regardless of external sun glare.",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Modular Display Flexibility",
      text: "Retail moves fast. We build 'Stage-Ready' window systems with recessed ceiling tracks and hidden floor sockets, allowing your team to completely change the store's exterior look in a few hours without visible wires or bulky stands.",
      image: "https://images.unsplash.com/photo-1567449303078-57ad995bd301?q=80&w=1974&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Stop Rate", value: "+40%" },
    { label: "Display Depth", value: "0.8m - 1.2m" },
    { label: "Color Index", value: "98 CRI" },
    { label: "UV Protection", value: "99% Film" }
  ],
  faq: {
    title: "Merchandising FAQs",
    items: [
      { q: "How do you protect products from sun damage?", a: "We apply museum-grade UV-filter films to all display glazing, which blocks 99% of harmful rays while remaining completely invisible to the eye." },
      { q: "Does exterior lighting need to stay on all night?", a: "We recommend 'Dusk-to-Midnight' scheduling. Automated smart timers ensure your store is selling while people are out for dinner, then dim to 'Security Mode' in the early hours to save energy." }
    ]
  },
  cta: {
    title: "Turn heads. Move products.",
    description: "Your window is your most expensive ad space. Let our visual experts help you maximize its ROI with a high-impact display strategy.",
    buttonText: "Request a Display Strategy",
    link: "/contact"
  }
};


export const facadeUpgradeData = {
  hero: {
    subtitle: "Structural Refurbishment & Aesthetic Modernization",
    title: "The Power of",
    highlight: "Transformation.",
    backgroundImage: "https://images.unsplash.com/photo-1513694490325-c40bca2bb2f5?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Upgrade Services",
    titlePart1: "Renew Value.",
    titlePart2: "Evolve Design.",
    description: "A tired facade is a liability; a modernized one is an asset. We specialize in Facade Upgrade Support, helping property owners and retailers transition from dated exteriors to high-performance, contemporary skins. Whether it’s retrofitting energy-efficient glazing, over-cladding with lightweight ACP, or integrating smart digital signage, we provide the technical roadmap to revitalize your commercial presence without the need for total demolition.",
    bullets: ["Structural Integrity Audits", "Over-Cladding Specialists", "Energy Efficiency Retrofitting"]
  },
  matrix: {
    icon: "Hammer", 
    title: "Upgrade Pillars",
    items: [
      'Seismic Reinforcement', 
      'Thermal Bridge Insulation', 
      'Lightweight Rain-screens', 
      'Adaptive Reuse Logic',
      'Signage Modernization',
      'Glass-to-Wall Ratio Tuning'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Structural Feasibility Audits",
      text: "Before the first panel is replaced, we conduct non-destructive testing on the existing slab and frame. We determine the load-bearing capacity of your current structure to ensure it can safely support modern, heavier glazing or new ornamental cladding systems.",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Clean Over-Cladding",
      text: "One of our most cost-effective solutions is over-cladding. We install a secondary metal sub-frame over your existing masonry, allowing us to 'wrap' your building in modern ACP or HPL panels. This provides an instant aesthetic upgrade while adding an extra layer of thermal insulation.",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067769a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Glazing & Performance Retrofit",
      text: "We replace single-pane, inefficient glass with high-performance, double-glazed units (DGU) with Low-E coatings. This significantly reduces solar heat gain and operational cooling costs, effectively turning your facade into a self-paying investment.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Energy Savings", value: "Up to 40%" },
    { label: "Prop. Value Inc.", value: "15-25%" },
    { label: "Load Capacity", value: "Verified" },
    { label: "Installation", value: "Non-Invasive" }
  ],
  faq: {
    title: "Upgrade Support FAQs",
    items: [
      { q: "Can a facade be upgraded while the store is open?", a: "Yes. Most of our over-cladding and glazing retrofits are performed using external scaffolding or boom lifts, allowing your business to remain operational with minimal interior disruption." },
      { q: "How long does a typical facade transformation take?", a: "A standard retail frontage can be transformed in 2 to 4 weeks, depending on the complexity of the structural reinforcement and material lead times." }
    ]
  },
  cta: {
    title: "Give your building a second life.",
    description: "Don't let a dated exterior hold back your brand. Let our engineers assess your property for a high-impact facade evolution.",
    buttonText: "Request a Site Audit",
    link: "/contact"
  }
};
export const fastTrackExecutionData = {
  hero: {
    subtitle: "Accelerated Project Management & Parallel Workflow Systems",
    title: "The Velocity of",
    highlight: "Delivery.",
    backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Rapid Deployment",
    titlePart1: "Zero Downtime.",
    titlePart2: "Total Precision.",
    description: "In the retail world, every day the doors are closed is a day of lost revenue. Our Fast-Track Execution service is engineered to shrink project timelines by up to 40%. By utilizing 'Dry Construction' techniques, pre-engineered components, and 24/7 site supervision, we ensure that your facade or retail exterior is completed with military precision and at lightning speed.",
    bullets: ["Parallel Path Scheduling", "Pre-Fabricated Assembly", "24/7 Site Management"]
  },
  matrix: {
    icon: "Zap", 
    title: "Velocity Pillars",
    items: [
      'Critical Path Analysis', 
      'Off-Site Pre-Fabrication', 
      'Dry-Joint Installation', 
      'Just-in-Time Logistics',
      'Dual-Shift Labor Force',
      'Rapid-Cure Sealants'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Critical Path Method (CPM)",
      text: "We identify the longest sequence of tasks that must be completed to finish the project. By focusing our elite resources on this 'Critical Path' and managing secondary tasks in parallel, we eliminate the bottlenecks common in standard construction.",
      image: "https://images.unsplash.com/photo-1531834685032-c74696a6b988?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Off-Site Pre-Engineering",
      text: "While the site is being prepared, your facade components are being cut and assembled in a controlled factory environment. This parallel processing means that when the site is ready, the exterior goes up like a modular puzzle rather than being built from scratch.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Dry Construction Logic",
      text: "We prioritize 'Dry' methods (mechanical fixings, Z-clips, and gaskets) over 'Wet' methods (cement and mortar). Dry construction removes the 'curing time' wait periods, allowing for immediate follow-up work and significantly cleaner job sites.",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Timeline Reduc.", value: "30-50%" },
    { label: "Site Cleanliness", value: "High" },
    { label: "Labor Hours", value: "Optimized" },
    { label: "Opening Date", value: "Guaranteed" }
  ],
  faq: {
    title: "Fast-Track FAQs",
    items: [
      { q: "Does faster execution affect the quality of work?", a: "No. Quality is actually increased. By using pre-fabricated parts made in factories and mechanical dry-joints, we eliminate human error often associated with on-site masonry." },
      { q: "Is Fast-Track more expensive?", a: "While labor costs may be slightly higher due to dual-shifts, the massive reduction in 'Lost Revenue Days' and site overhead usually results in a better overall ROI for the client." }
    ]
  },
  cta: {
    title: "Open your doors sooner.",
    description: "Don't let a slow build kill your launch momentum. Let our fast-track experts map out a high-velocity execution plan for your brand.",
    buttonText: "Request a Timeline Audit",
    link: "/contact"
  }
};

export const highVisibilityBrandingData = {
  hero: {
    subtitle: "Architectural Identity & Large-Scale Brand Integration",
    title: "The Power of",
    highlight: "Presence.",
    backgroundImage: "https://images.unsplash.com/photo-1542310503-498f3cc987d3?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Brand Integration",
    titlePart1: "Maximum Impact.",
    titlePart2: "Total Recall.",
    description: "Your building is your largest billboard. At Bixbite, we ensure it speaks clearly. High-Visibility Branding is about more than just a logo on a wall; it's about using architectural finishes, color-matched cladding, and large-format signage to make your property an unmistakable landmark. We synchronize your corporate identity with the building's physical form to ensure maximum brand recall from every approach angle.",
    bullets: ["Corporate Color-Match Cladding", "Large-Format 3D Typography", "Approach-Angle Sightline Study"]
  },
  matrix: {
    icon: "Target", 
    title: "Branding Pillars",
    items: [
      'Edge-to-Edge Facade Vinyls', 
      'Illuminated 3D Channel Letters', 
      'High-Contrast Color Blocking', 
      'Monolithic Totem Signage',
      'Architectural Brand Accents',
      'Sightline Geometry Analysis'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Sightline Geometry",
      text: "We calculate the 'Cone of Vision' for both vehicular and pedestrian traffic. By adjusting the scale and height of your branding elements based on traffic speed and distance, we ensure your message is legible and impactful before the customer even reaches your door.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Color-Matched Architectural Skins",
      text: "We don't just paint; we integrate. We utilize PVDF-coated aluminum panels custom-matched to your brand's Pantone colors. This ensures that the building envelope itself carries your brand identity with a high-gloss, professional finish that lasts for decades.",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067769a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Luminous Identity (Night Mode)",
      text: "Branding shouldn't sleep. We design 'Day-to-Night' transitions using halo-lit lettering and edge-lit facade details. This ensures your brand maintains a premium, glowing presence that stands out against the visual noise of the city after dark.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Brand Recall", value: "+60%" },
    { label: "Legibility Dist.", value: "Maximized" },
    { label: "Finish Warranty", value: "20 Years" },
    { label: "Color Accuracy", value: "Delta E < 1" }
  ],
  faq: {
    title: "Branding FAQs",
    items: [
      { q: "How do you ensure the signage stays secure on the facade?", a: "Every sign is engineered with custom structural brackets that tie directly into the building's steel or concrete frame, ensuring safety even in high-wind conditions." },
      { q: "Can we use digital screens on the exterior?", a: "Yes. We specialize in integrating weather-rated LED mesh and high-brightness digital displays into the cladding for dynamic, real-time brand messaging." }
    ]
  },
  cta: {
    title: "Claim your space.",
    description: "Don't let your business blend into the background. Let our designers turn your property into a high-visibility brand landmark.",
    buttonText: "Request a Sightline Study",
    link: "/contact"
  }
};
export const lowMaintenanceData = {
  hero: {
    subtitle: "Self-Cleaning Surfaces & Ultra-Durable Building Envelopes",
    title: "The Value of",
    highlight: "Longevity.",
    backgroundImage: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=2072&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Operational Efficiency",
    titlePart1: "Enduring Beauty.",
    titlePart2: "Minimal Effort.",
    description: "The true cost of a facade isn't the installation; it's the maintenance over twenty years. At Bixbite, we specify materials that fight the elements. From hydrophobic 'self-cleaning' glass to pre-patinated metals and through-color fiber cements, our selection ensures your commercial property retains its brand-new appearance without the need for frequent pressure washing or costly repainting cycles.",
    bullets: ["Hydrophobic Coating Systems", "UV-Stable Through-Color Panels", "Anti-Graffiti Surface Treatments"]
  },
  matrix: {
    icon: "ShieldCheck", 
    title: "Material Pillars",
    items: [
      'Self-Cleaning Bio-Glass', 
      'Fiber Cement Cladding', 
      'Anodized Aluminum Sheets', 
      'Engineered Stone Polymer',
      'Corrosion-Resistant Alloys',
      'High-Pressure Laminates (HPL)'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Hydrophobic & Photocatalytic Glass",
      text: "We utilize advanced glass coatings that use UV light to break down organic dirt and rain to wash it away. This 'self-cleaning' cycle reduces professional window cleaning frequency by up to 70%, keeping your storefront crystal clear.",
      image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Through-Color Fiber Cement",
      text: "Unlike painted surfaces that chip or fade, through-color materials have the pigment integrated throughout the entire panel. Even if the surface is scratched, the color remains consistent, eliminating the need for touch-ups.",
      image: "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Non-Porous Polymer Stone",
      text: "Natural stone can absorb oil and smog. Our engineered polymer stones are non-porous and chemically inert. They resist staining from city pollutants and can be cleaned with a simple water spray, maintaining a premium look in urban environments.",
      image: "https://images.unsplash.com/photo-1615814144458-7c050a4f5c93?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Cleaning Freq.", value: "-60%" },
    { label: "Color Life", value: "25+ Years" },
    { label: "Stain Resist.", value: "Industrial Grade" },
    { label: "Paint Cycles", value: "Zero Required" }
  ],
  faq: {
    title: "Maintenance FAQs",
    items: [
      { q: "Do low-maintenance materials cost more upfront?", a: "Generally, yes (roughly 15-20%). However, the 'Break-Even' point is usually reached within 4 years due to the savings on professional cleaning and painting." },
      { q: "How do anti-graffiti coatings work?", a: "We apply a permanent, sacrificial, or non-stick clear layer that prevents spray paint from bonding to the facade. Graffiti can be wiped off with a simple solvent without damaging the building." }
    ]
  },
  cta: {
    title: "Invest in permanence.",
    description: "Lower your building's OPEX today. Let our material specialists design a facade that takes care of itself.",
    buttonText: "View Durability Ratings",
    link: "/contact"
  }
};


export const mallAuthorityData = {
  hero: {
    subtitle: "Liaison Services & Technical Compliance Management",
    title: "The Path to",
    highlight: "Approval.",
    backgroundImage: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Regulatory Liaison",
    titlePart1: "Seamless Permits.",
    titlePart2: "Technical Compliance.",
    description: "Retail execution isn't just about design; it's about permission. At Bixbite, we navigate the complex web of Mall Management guidelines and local Municipal Authority (ULB) requirements. From fire safety certificates to structural stability reports and signage bylaws, we manage the entire documentation and liaison process, ensuring your project meets every standard and avoids costly legal delays or fines.",
    bullets: ["Fit-out Manual Compliance", "Fire & Life Safety Audits", "Municipal Signage Licensing"]
  },
  matrix: {
    icon: "FileCheck", 
    title: "Approval Pillars",
    items: [
      'Mall Fit-out Coordination', 
      'Structural Stability Certs', 
      'Electrical Load Sanctions', 
      'Fire NOC Documentation',
      'Civil Defense Alignment',
      'HSE Management Plans'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Mall Guideline Synchronization",
      text: "Every premium mall has a 'Fit-out Manual' governing everything from shopfront transparency to material fire ratings. We analyze these documents in the pre-design phase, ensuring our concepts are pre-aligned with the mall’s architectural DNA for faster turnarounds.",
      image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Fire & Life Safety (FLS) Compliance",
      text: "Retail exteriors must not impede egress. We engineer your facade and entry systems to comply with international NFPA or local fire codes, managing the placement of sprinklers, hydrants, and flame-retardant material certifications.",
      image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Liaison & Permit Management",
      text: "We act as your technical representative before local authorities. We handle the submission of blueprints, MEP drawings, and structural calculations required to obtain the 'Permission to Work' (PTW) and the final 'Completion Certificate.'",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Approval Rate", value: "100%" },
    { label: "Doc. Lead Time", value: "Minimized" },
    { label: "Safety Code", value: "NFPA/Local" },
    { label: "Legal Risk", value: "Zeroed" }
  ],
  faq: {
    title: "Authority FAQs",
    items: [
      { q: "What is a Fit-out Manual?", a: "It is a set of technical and aesthetic rules provided by mall management that dictates how a shopfront must be constructed to ensure safety and visual harmony." },
      { q: "Do you handle the structural stability certificate?", a: "Yes. We work with certified structural engineers who inspect the facade design and provide the necessary endorsement required by authorities for public safety." }
    ]
  },
  cta: {
    title: "Let us handle the red tape.",
    description: "Focus on your business while we manage the permits. Our team ensures your design is fully compliant and ready for construction.",
    buttonText: "Consult an Expert",
    link: "/contact"
  }
};



export const retailDesignData = {
  hero: {
    subtitle: "High-Performance Glazing & Brand-Centric Architectural Envelopes",
    title: "The Physics of",
    highlight: "First Impressions.",
    backgroundImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Retail Architecture",
    titlePart1: "Iconic Shopfronts.",
    titlePart2: "Precision Engineering.",
    description: "A retail facade is more than a wall; it is a 24/7 sales engine. At Bixbite, we combine high-transmission glazing with advanced cladding materials to create storefronts that command attention. We focus on the 'Transparency Index' and 'Structural Slimness,' ensuring that your brand is visible, protected, and presented with an uncompromising level of detail.",
    bullets: ["Point-Fixed Spider Glazing", "High-Span Aluminum Frameworks", "Integrated Brand Lighting"]
  },
  matrix: {
    icon: "Layout", 
    title: "Design Pillars",
    items: [
      'Low-Iron Extra Clear Glass', 
      'Thermally Broken Profiles', 
      'Seamless Silicone Joining', 
      'Hidden Structural Supports',
      'Anti-Reflective Coatings',
      'High-Load Wind Engineering'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "The Transparency Index",
      text: "We utilize Low-Iron glass to eliminate the green tint found in standard glazing. This achieves a 92% light transmission rate, ensuring that the colors of your products inside look exactly as they do in natural daylight, removing the 'barrier' between the street and the sale.",
      image: "https://images.unsplash.com/photo-1582037928867-677556387989?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Structural Glazing Systems",
      text: "For a modern, frameless look, we implement 'Spider' or 'Fin-Supported' glazing. These systems use high-grade stainless steel fixings to hold massive glass panes, allowing for maximum visual aperture without bulky vertical mullions blocking the view.",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067769a?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Climate-Controlled Thresholds",
      text: "A great shopfront must also be an efficient thermal barrier. We use thermally-broken aluminum profiles and Argon-filled double glazing to ensure your HVAC costs stay low while your customers stay comfortable, even in extreme external heat.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Light Trans.", value: "92%" },
    { label: "U-Value", value: "1.4 W/m²K" },
    { label: "Wind Load", value: "Up to 3.5kPa" },
    { label: "Glass Safety", value: "Triple Toughened" }
  ],
  faq: {
    title: "Shopfront FAQs",
    items: [
      { q: "What is the benefit of a thermally broken frame?", a: "It uses a reinforced polyamide bar between the inner and outer aluminum sections to stop heat transfer, preventing condensation and significantly lowering electricity bills." },
      { q: "Is frameless glass safe for high-traffic areas?", a: "Absolutely. We use SentryGlas (SGP) interlayer laminates which are 100 times stiffer and 5 times stronger than traditional PVB interlayers, remaining intact even if the glass breaks." }
    ]
  },
  cta: {
    title: "Design for Dominance.",
    description: "Your storefront is your best advertisement. Let our architects engineer a facade that reflects the true caliber of your brand.",
    buttonText: "Request a Design Concept",
    link: "/contact"
  }
};


export const glazingDesignData = {
  hero: {
    subtitle: "Anti-Reflective Systems & High-Aperture Display Engineering",
    title: "The Clarity of",
    highlight: "Vision.",
    backgroundImage: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1887&auto=format&fit=crop"
  },
  intro: {
    sectionLabel: "Precision Glazing",
    titlePart1: "Invisible Barriers.",
    titlePart2: "Absolute Detail.",
    description: "Window displays are the eyes of a retail brand. At Bixbite, we specialize in high-aperture glazing design that removes the visual 'haze' associated with standard glass. By utilizing anti-reflective coatings and oversized seamless panes, we create a 'ghost-wall' effect where the glass practically disappears, allowing your merchandise to take center stage without the distraction of external glare or structural clutter.",
    bullets: ["Oversized Jumbo Glass Panes", "Anti-Reflective Interlayers", "UV-Blocking Filter Technology"]
  },
  matrix: {
    icon: "Maximize", 
    title: "Glazing Pillars",
    items: [
      'Magnetron Sputtered Coating', 
      'Low-Iron Extra Clear Glass', 
      'Structural Glass Fins', 
      'Butt-Jointed Seamless Glazing',
      'Solar Heat Gain Control',
      'SentryGlas® High-Security'
    ]
  },
  narrative: [
    {
      id: "01",
      title: "Anti-Reflective (AR) Technology",
      text: "Standard glass reflects roughly 8% of light, creating a mirror effect that hides your products. Our AR-coated glazing reduces reflection to less than 1%, ensuring total transparency even in direct sunlight. This is achieved through a multi-layered magnetron sputtering process that cancels out light bounce.",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Seamless Jumbo Panes",
      text: "We design with 'Jumbo' glass sizes (up to 3.3m x 12m) to eliminate vertical mullions. By using butt-joints filled with high-transparency structural silicone, we create an uninterrupted horizontal vista that provides a cinematic view of your interior merchandising.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Thermal & UV Shielding",
      text: "Display windows are vulnerable to heat and sun damage. We integrate spectrally selective Low-E coatings that block 99% of infrared heat and UV rays. This protects sensitive fabrics and leather goods from fading while significantly reducing the store's air conditioning load.",
      image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=2072&auto=format&fit=crop"
    }
  ],
  kpis: [
    { label: "Reflection Rate", value: "< 1%" },
    { label: "Max Pane Size", value: "Up to 12m" },
    { label: "Light Trans.", value: "91-92%" },
    { label: "UV Block", value: "99.9%" }
  ],
  faq: {
    title: "Glazing FAQs",
    items: [
      { q: "What is 'Extra Clear' or 'Low-Iron' glass?", a: "Standard glass has a green tint caused by iron oxide. Low-iron glass removes this impurity, resulting in a perfectly neutral, high-clarity pane that doesn't distort the color of your products." },
      { q: "How do oversized glass panes handle wind pressure?", a: "We utilize structural glass fins—vertical glass strips that act as invisible columns—to provide wind resistance without the need for metal frames." }
    ]
  },
  cta: {
    title: "See the difference.",
    description: "Don't let glare hide your products. Let our glazing engineers design a storefront that provides absolute visual clarity.",
    buttonText: "Request Glazing Specs",
    link: "/contact"
  }
};


