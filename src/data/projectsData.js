const COMPANY_DETAILS = {
  name: "Vrajraj Developers",
  tagline: "Building Spaces. Creating Legacies.",
  foundedYear: "2012",
  corporateOffice: {
    line1: "Shri Vrajraj Developers 01",
    line2: "Opp Gol Building Complex, Mahatma Gandhi Marg",
    city: "Khargone",
    state: "Madhya Pradesh",
    pincode: "451001",
    country: "India",
  },
  contacts: [
    { name: "Vallabh Mahajan", phone: "+91 8989121000" },
    { name: "Gopal Mahajan", phone: "+91 94068 88121" },
  ],
  whatsapp: "918989121000",
  director: {
    name: "Rajeshbhai V. Patel",
    title: "Managing Director & Founder",
    photo: "/assets/images/director_portrait_1792732221245.jpg",
  },
};
const PROJECTS_DATA = [
  {
    id: "vrajraj-elegance",
    slug: "vrajraj-elegance",
    name: "Vrajraj Elegance",
    tagline: "Generous 3 & 4 BHK Living Crafted with Architectural Restraint",
    category: "Residential",
    status: "Ongoing",
    statusDetail: "Tower Superstructure Complete \xB7 Finishing in Progress",
    location: "Bodakdev, Off SG Highway",
    address: "Survey No. 248, Near Sindhu Bhavan Extension, Bodakdev",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380054",
    reraNumber: "PR/GJ/AHMEDABAD/CITY/MAA09821/231124",
    coordinates: {
      lat: 23.0483,
      lng: 72.5117,
    },
    coverImage: "/assets/images/project_residency_1792732222157.jpg",
    video: "/assets/videos/vrajraj-elegance.mp4",
    galleryImages: [
      {
        url: "/assets/images/project_residency_1792732222157.jpg",
        caption:
          "South-East exterior elevation with double-height drop-off porch",
        category: "Exterior",
      },
      {
        url: "/assets/images/hero_vrajraj_elegance_1792732219339.jpg",
        caption:
          "Tower facade at twilight with integrated balcony landscape planters",
        category: "Exterior",
      },
      {
        url: "/assets/images/hero_vrajraj_garden_1792732219280.jpg",
        caption:
          "Internal landscaped walking trail and senior citizen shaded deck",
        category: "Community",
      },
      {
        url: "/assets/images/hero_vrajraj_facade_1792732221176.jpg",
        caption:
          "Natural stone cladding, low-E glazing, and detailed masonry finish",
        category: "Exterior",
      },
    ],
    overview:
      "Vrajraj Elegance is an intimate residential enclave comprising carefully designed 3 and 4 BHK residences. Engineered with seismic Zone III structural resilience and optimized cross-ventilation, each home is arranged to maximize privacy and natural daylight without unnecessary spatial wastage.",
    unitTypes: [
      "3 BHK Premium Residences (2,180 sq.ft)",
      "4 BHK Signature Residences (2,850 sq.ft)",
      "4 BHK Duplex Penthouses with Private Terrace (3,920 sq.ft)",
    ],
    features: [
      "Maximum two residences per floor core for enhanced family privacy",
      "East-West cross-ventilation designed specifically for Western Indian climate",
      "Designated 2-car basement parking with direct elevator access for every apartment",
      "Automated dual-line water supply with borewell & treated municipal connections",
      "EV vehicle charging provision at individual designated parking slots",
    ],
    amenities: [
      {
        name: "Landscaped Central Court",
        description:
          "Tree-lined pathways, native shaded plantation, and quiet seating niches for morning walks.",
      },
      {
        name: "Fitness & Yoga Studio",
        description:
          "Naturally ventilated workout space with certified strength equipment and soft mat area.",
      },
      {
        name: "Community Lounge & Library",
        description:
          "Spacious quiet room for residents, society meetings, and reading.",
      },
      {
        name: "Children Safe Play Turf",
        description:
          "Cushioned rubberized flooring zone free from vehicular movement.",
      },
      {
        name: "Multipurpose Banquet Hall",
        description:
          "Air-conditioned community hall with pantry setup for family celebrations.",
      },
    ],
    specifications: [
      {
        label: "Structure",
        value:
          "Earthquake resistant RCC frame structure designed to IS code standards",
      },
      {
        label: "Flooring",
        value:
          "Large-format Italian finish glazed vitrified tiles in living & dining areas",
      },
      {
        label: "Joinery & Windows",
        value:
          "Heavy section anodized aluminium 3-track sliding windows with mosquito mesh",
      },
      {
        label: "Electricals",
        value:
          "Concealed copper wiring with modular switches (Schneider or equivalent) & MCBs",
      },
      {
        label: "Elevators",
        value:
          "Two high-speed 10-passenger automatic elevators with ARD emergency rescue device",
      },
      {
        label: "Security",
        value:
          "24/7 CCTV surveillance across perimeter, boom barriers, and intercom access",
      },
    ],
    possessionDate: "December 2026",
    totalUnits: "48 Exclusive Apartments",
    siteArea: "1.2 Acres",
  },
  {
    id: "vrajraj-meadow-estates",
    slug: "vrajraj-meadow-estates",
    name: "Vrajraj Meadow Estates",
    tagline: "Secured Plotted Community with Broad Tree-Lined Avenues",
    category: "Plotted Development",
    status: "Upcoming",
    statusDetail:
      "Town Planning Clearances Granted \xB7 Infrastructure Commencing",
    location: "Shela \u2013 Sanand Green Belt",
    address: "Near Club O7 Extension, Shela Western Bypass",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "382110",
    reraNumber: "PR/GJ/AHMEDABAD/RURAL/UP00412/240118",
    coordinates: {
      lat: 22.9984,
      lng: 72.4418,
    },
    coverImage: "/assets/images/project_greens_1792732221978.jpg",
    video: "/assets/videos/vrajraj-meadow-estates.mp4",
    galleryImages: [
      {
        url: "/assets/images/project_greens_1792732221978.jpg",
        caption: "Grand secured gatehouse with 60-foot asphalt main boulevard",
        category: "Exterior",
      },
      {
        url: "/assets/images/hero_vrajraj_garden_1792732219280.jpg",
        caption:
          "Perimeter green buffer with organic horticulture and jogging track",
        category: "Community",
      },
      {
        url: "/assets/images/hero_vrajraj_facade_1792732221176.jpg",
        caption: "Clubhouse and community administration architecture concept",
        category: "Planning",
      },
    ],
    overview:
      "Vrajraj Meadow Estates is a legally vetted, fully sanctioned plotted development designed for families planning custom weekend villas or long-term independent homes. The layout guarantees clear property titles, underground utility ducting, paved curbs, and extensive botanical landscaping.",
    unitTypes: [
      "Compact Villa Plots (250 \u2013 350 sq. yards)",
      "Estate Villa Plots (450 \u2013 600 sq. yards)",
      "Corner Premium Plots (750+ sq. yards)",
    ],
    features: [
      "100% clear title with NA (Non-Agricultural) & Plan approvals in place",
      "All utilities (power, water, optical fiber) routed via underground trenches",
      "60-foot main avenue and 30-foot internal arterial paved roads",
      "Compound wall with single controlled point of entry and security post",
      "Perpetual maintenance trust framework for community infrastructure",
    ],
    amenities: [
      {
        name: "Estate Clubhouse",
        description:
          "Indoor games lounge, admin office, and shaded semi-open veranda.",
      },
      {
        name: "Botanical Walking Forest",
        description:
          "Over 400 native Neem, Gulmohar, and Champa trees planted across margins.",
      },
      {
        name: "Half Basketball & Tennis Court",
        description:
          "All-weather outdoor sports court with floodlight facility.",
      },
      {
        name: "Central Gazebo & Lawns",
        description:
          "Open green expanse for morning yoga and seasonal community gatherings.",
      },
    ],
    specifications: [
      {
        label: "Plot Demarcation",
        value:
          "Pre-cast concrete boundary markers with registered survey stones",
      },
      {
        label: "Road Infrastructure",
        value:
          "Heavy-duty asphalt paving with storm water drainage and paver curbs",
      },
      {
        label: "Water Infrastructure",
        value:
          "Overhead elevated reservoir with dedicated water pressure pipeline to each plot",
      },
      {
        label: "Electricity",
        value:
          "UGVCL feeder line connection with underground cabling to individual feeder pillars",
      },
      {
        label: "Lighting",
        value:
          "Energy-saving LED pole lighting synchronized with daylight astronomical timers",
      },
    ],
    possessionDate: "Phase 1 Delivery: Mid 2026",
    totalUnits: "84 Vetted Plots",
    siteArea: "14.5 Acres",
  },
  {
    id: "vrajraj-apex-commercial",
    slug: "vrajraj-apex-commercial",
    name: "Vrajraj Apex Commercial",
    tagline: "High-Visibility Corporate Offices & High-Street Retail Showrooms",
    category: "Commercial",
    status: "Ongoing",
    statusDetail: "Structure Completed \xB7 Facade Glazing in Progress",
    location: "Sindhu Bhavan Marg, Bodakdev",
    address: "Plot 18, Main Sindhu Bhavan Marg, Opposite Times Square",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380054",
    reraNumber: "PR/GJ/AHMEDABAD/CITY/COMM08719/230815",
    coordinates: {
      lat: 23.0441,
      lng: 72.5052,
    },
    coverImage: "/assets/images/project_commercial_1792732223227.jpg",
    video: "/assets/videos/vrajraj-apex-commercial.mp4",
    galleryImages: [
      {
        url: "/assets/images/project_commercial_1792732223227.jpg",
        caption:
          "Full corner perspective showing ground retail and high-efficiency office floors",
        category: "Exterior",
      },
      {
        url: "/assets/images/hero_vrajraj_elegance_1792732219339.jpg",
        caption: "Architectural lighting details and drop-off canopy",
        category: "Exterior",
      },
      {
        url: "/assets/images/hero_vrajraj_facade_1792732221176.jpg",
        caption:
          "Double-height commercial entrance lobby with natural granite finishes",
        category: "Interior",
      },
    ],
    overview:
      "Vrajraj Apex is a prime 7-story commercial landmark commanding high frontage along Sindhu Bhavan Marg. Built for corporate headquarters, professional practices, financial institutions, and brand retail, it pairs generous column spans with dedicated triple-basement parking.",
    unitTypes: [
      "Ground & First Floor Retail Showrooms (850 \u2013 2,400 sq.ft)",
      "Corporate Office Suites (650 \u2013 3,200 sq.ft)",
      "Full Floor Plate Corporate Offices (7,500 sq.ft)",
    ],
    features: [
      "Prominent 140-foot wide road frontage with designated visitor surface parking",
      "Energy-efficient double-glazed DGU facade reducing AC load and street acoustic noise",
      "3-level mechanized and ramp basement parking managing over 180 cars",
      "100% DG generator backup for elevators, lobby lighting, and vital safety systems",
      "Independent HVAC outdoor unit shafts for individual floor tenant air-conditioning",
    ],
    amenities: [
      {
        name: "Grand Double-Height Reception",
        description:
          "Professionally staffed front desk, turnstile access integration, and visitor waiting lounge.",
      },
      {
        name: "Common Conference Suite",
        description:
          "Fully wired 18-seat boardroom available on booking for tenant companies.",
      },
      {
        name: "Cafeteria & Terrace Breakout",
        description:
          "Open-air landscaped terrace pantry on upper floor for informal staff breaks.",
      },
      {
        name: "Service Elevators & Fire Escapes",
        description:
          "Dedicated cargo stretcher lift and dual pressurized fire stairwells.",
      },
    ],
    specifications: [
      {
        label: "Structural Span",
        value:
          "Post-tensioned beam layout for flexible interior pillar-free floor plans",
      },
      {
        label: "Elevators",
        value:
          "4 high-speed geared traction elevators by Schindler with touchless call panels",
      },
      {
        label: "Fire Safety",
        value:
          "NFPA compliant automatic sprinkler network, hose reels, and smoke evacuators",
      },
      {
        label: "Finishes",
        value:
          "Flamed granite facade highlights with acoustic dry-cladding system",
      },
      {
        label: "Power Backup",
        value:
          "Cummins silent diesel generator set with automatic changeover switch (AMF)",
      },
    ],
    possessionDate: "September 2026",
    totalUnits: "52 Office Suites & 12 Retail Outlets",
    siteArea: "32,000 sq.ft Built-Up",
  },
  {
    id: "vrajraj-enclave",
    slug: "vrajraj-enclave",
    name: "Vrajraj Enclave",
    tagline: "Delivered Residential Sanctuary of Calm & Practical Living",
    category: "Residential",
    status: "Completed",
    statusDetail:
      "Successfully Handed Over \xB7 100% Occupancy Certificate Granted",
    location: "Vasna \u2013 Bhayli Road",
    address: "Survey No. 112, Near Bright Day School, Bhayli",
    city: "Vadodara",
    state: "Gujarat",
    pincode: "391410",
    reraNumber: "PR/GJ/VADODARA/VADODARA/MAA04192/2019",
    coordinates: {
      lat: 22.2891,
      lng: 73.1319,
    },
    coverImage: "/assets/images/hero_vrajraj_facade_1792732221176.jpg",
    video: "/assets/videos/vrajraj-enclave.mp4",
    galleryImages: [
      {
        url: "/assets/images/hero_vrajraj_facade_1792732221176.jpg",
        caption:
          "Completed residential facade showing finished balconies and stone boundary",
        category: "Exterior",
      },
      {
        url: "/assets/images/hero_vrajraj_garden_1792732219280.jpg",
        caption:
          "Mature courtyard greenery and children play lawn 3 years post-possession",
        category: "Community",
      },
      {
        url: "/assets/images/hero_vrajraj_elegance_1792732219339.jpg",
        caption:
          "Evening perspective of the residential blocks and internal paved courtyard",
        category: "Exterior",
      },
    ],
    overview:
      "Completed in 2022, Vrajraj Enclave is a proud proof point of our construction longevity and execution discipline. Featuring 72 thoughtful 2 and 3 BHK homes, the community continues to enjoy robust maintenance, peaceful landscaped grounds, and a tight-knit neighborhood.",
    unitTypes: [
      "2 BHK Balanced Homes (1,340 sq.ft) \u2014 Sold Out",
      "3 BHK Family Residences (1,780 sq.ft) \u2014 Resale / Rental Only",
    ],
    features: [
      "Handed over on schedule with complete BU (Building Use) permissions",
      "Active registered co-operative housing society in seamless management",
      "Borewell water recharge pits and systematic rainwater harvesting setup",
      "Low monthly maintenance design with passive ventilation and solar common lighting",
    ],
    amenities: [
      {
        name: "Society Clubhouse",
        description:
          "Equipped with indoor table tennis, carrom, and community meeting room.",
      },
      {
        name: "Landscaped Courtyard",
        description:
          "Mature trees, benches, and secure open areas for evening community strolls.",
      },
      {
        name: "Solar Powered Common Lighting",
        description:
          "Rooftop solar panels offsetting common corridor and garden energy expenses.",
      },
    ],
    specifications: [
      {
        label: "Construction",
        value:
          "RCC frame with lightweight AAC masonry blocks for thermal insulation",
      },
      {
        label: "Doors & Windows",
        value:
          "Decorative main wooden door with brass hardware; powder coated sliding windows",
      },
      {
        label: "Plumbing",
        value:
          "Astral CPVC piping with Jaguar chrome bathroom fittings and concealed valves",
      },
      {
        label: "Water Storage",
        value:
          "Underground sumps and overhead RCC tanks with automatic water-level sensors",
      },
    ],
    possessionDate: "Delivered (October 2022)",
    totalUnits: "72 Finished Homes",
    siteArea: "1.8 Acres",
  },
];
export { COMPANY_DETAILS, PROJECTS_DATA };
