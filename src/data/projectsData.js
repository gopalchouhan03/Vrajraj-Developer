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
    name: "Vallabh Mahajan & Gopal Mahajan",
    title: "Directors",
    photo: "/assets/images/director_portrait_1792732221245.jpg",
  },
};

const KHARGONE_COORDINATES = { lat: 21.823, lng: 75.613 };
const REPRESENTATIVE_IMAGES = [
  {
    url: "/assets/images/hero_vrajraj_garden_1792732219280.jpg",
    caption: "Representative image",
    category: "Representative view",
  },
  {
    url: "/assets/images/hero_vrajraj_facade_1792732221176.jpg",
    caption: "Representative image",
    category: "Representative view",
  },
  {
    url: "/assets/images/hero_vrajraj_elegance_1792732219339.jpg",
    caption: "Representative image",
    category: "Representative view",
  },
  {
    url: "/assets/images/project_residency_1792732222157.jpg",
    caption: "Representative image",
    category: "Representative view",
  },
];
const REPRESENTATIVE_IMAGE = REPRESENTATIVE_IMAGES[0].url;
const projects = [
  {
    slug: "maa-yamuna-nagar-phase-1",
    name: "Maa Yamuna Nagar Phase 1",
    nameHindi: "माँ यमुना नगर फेस-1",
    category: "Residential",
    status: "Details on request",
  },
  {
    slug: "maa-yamuna-nagar-phase-2",
    name: "Maa Yamuna Nagar Phase 2",
    nameHindi: "माँ यमुना नगर फेस-2",
    category: "Residential",
    status: "Details on request",
  },
  {
    slug: "brajtara-township",
    name: "Brajtara Township",
    nameHindi: "ब्रजतारा टाउनशिप",
    category: "Residential",
    status: "Details on request",
  },
  {
    slug: "vrindavan-dham-phase-1",
    name: "Vrindavan Dham Phase 1",
    nameHindi: "वृन्दावन धाम फेस-1",
    category: "Residential",
    status: "Details on request",
  },
  {
    slug: "vrindavan-dham-phase-2",
    name: "Vrindavan Dham Phase 2",
    nameHindi: "वृन्दावन धाम फेस-2",
    category: "Residential",
    status: "Details on request",
  },
  {
    slug: "tribhuvan-dham",
    name: "Tribhuvan Dham",
    nameHindi: "त्रिभुवन धाम",
    category: "Residential",
    status: "Details on request",
  },
  {
    slug: "vallabha-royals",
    name: "Vallabha Royals",
    nameHindi: "वल्लभा रॉयल्स",
    category: "Residential",
    status: "Details on request",
  },
  {
    slug: "grand-vista",
    name: "Grand Vista",
    nameHindi: "ग्रैंड विस्टा",
    category: "Residential",
    status: "Details on request",
  },
];

const PROJECTS_DATA = projects.map((project) => ({
  id: project.slug,
  ...project,
  tagline: "Khargone, Madhya Pradesh",
  location: "Khargone",
  address: "Exact site address to be confirmed",
  city: "Khargone",
  state: "Madhya Pradesh",
  coordinates: KHARGONE_COORDINATES,
  coverImage: REPRESENTATIVE_IMAGE,
  imagesAreRepresentative: true,
  galleryImages: [],
  overview:
    "Project information is being updated. Contact Vrajraj Developers for confirmed site location, availability, specifications, and applicable approvals.",
  unitTypes: [],
  features: [],
  amenities: [],
  specifications: [],
}));

const GROUP_DEVELOPED_PROJECTS = [
  {
    id: "gps-township",
    slug: "gps-township",
    name: "GPS Township",
    nameHindi: "",
    category: "Group Developed",
    status: "Details on request",
    tagline: "Group developed project. Details available on request.",
    location: "Khargone",
    address: "Exact site address to be confirmed",
    city: "Khargone",
    state: "Madhya Pradesh",
    coordinates: KHARGONE_COORDINATES,
    coverImage: REPRESENTATIVE_IMAGE,
    imagesAreRepresentative: true,
    galleryImages: [],
    overview:
      "Group developed project details are available on request. Contact Vrajraj Developers for the current status and project-specific information.",
    unitTypes: [],
    features: [],
    amenities: [],
    specifications: [],
  },
  {
    id: "fortune-heights",
    slug: "fortune-heights",
    name: "Fortune Heights",
    nameHindi: "फार्च्यून हाइट्स",
    category: "Group Developed",
    status: "Details on request",
    tagline: "Group developed project. Details available on request.",
    location: "Khargone",
    address: "Exact site address to be confirmed",
    city: "Khargone",
    state: "Madhya Pradesh",
    coordinates: KHARGONE_COORDINATES,
    coverImage: REPRESENTATIVE_IMAGE,
    imagesAreRepresentative: true,
    galleryImages: [],
    overview:
      "Group developed project details are available on request. Contact Vrajraj Developers for the current status and project-specific information.",
    unitTypes: [],
    features: [],
    amenities: [],
    specifications: [],
  },
  {
    id: "nayan-tara-township",
    slug: "nayan-tara-township",
    name: "Nayan Tara Township",
    nameHindi: "नयन तारा टाउनशिप",
    category: "Group Developed",
    status: "Details on request",
    tagline: "Group developed project. Details available on request.",
    location: "Khargone",
    address: "Exact site address to be confirmed",
    city: "Khargone",
    state: "Madhya Pradesh",
    coordinates: KHARGONE_COORDINATES,
    coverImage: REPRESENTATIVE_IMAGE,
    imagesAreRepresentative: true,
    galleryImages: [],
    overview:
      "Group developed project details are available on request. Contact Vrajraj Developers for the current status and project-specific information.",
    unitTypes: [],
    features: [],
    amenities: [],
    specifications: [],
  },
];

const ALL_PROJECTS = [...PROJECTS_DATA, ...GROUP_DEVELOPED_PROJECTS];

export {
  COMPANY_DETAILS,
  PROJECTS_DATA,
  GROUP_DEVELOPED_PROJECTS,
  ALL_PROJECTS,
};
