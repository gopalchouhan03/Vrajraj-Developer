import { useState } from "react";
import {
  MapPin,
  CheckCircle,
  Phone,
  MessageSquare,
  Images,
  ArrowRight,
  ShieldCheck,
  Send,
  AlertCircle,
  FileText,
  Compass,
} from "lucide-react";
import { COMPANY_DETAILS, PROJECTS_DATA } from "../data/projectsData";
import { Lightbox } from "../components/Lightbox";
import { InteractiveMap } from "../components/InteractiveMap";
const ProjectDetailsPage = ({ project, onNavigate, onOpenEnquiry }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedUnit, setSelectedUnit] = useState(
    project.unitTypes[0] || "Any Configuration",
  );
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const validatePhone = (num) => {
    const cleaned = num.replace(/\D/g, "");
    return /^[6-9]\d{9}$/.test(cleaned);
  };
  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!fullName.trim()) {
      errors.fullName = "Please enter your full name";
    }
    if (!phone.trim()) {
      errors.phone = "Please provide your 10-digit mobile number";
    } else if (!validatePhone(phone)) {
      errors.phone =
        "Please provide a valid Indian mobile number starting with 6, 7, 8, or 9";
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please provide a valid email format";
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generated = `VRJ-${Math.floor(1e5 + Math.random() * 9e5)}`;
      setRefId(generated);
      setIsSubmitted(true);
      try {
        const stored = JSON.parse(
          localStorage.getItem("vrajraj_enquiries") || "[]",
        );
        stored.push({
          referenceId: generated,
          fullName,
          phone,
          email,
          propertyInterest: `${project.name} (${selectedUnit})`,
          message,
          timestamp: /* @__PURE__ */ new Date().toISOString(),
        });
        localStorage.setItem("vrajraj_enquiries", JSON.stringify(stored));
      } catch {}
    }, 600);
  };
  const openGalleryAt = (index) => {
    setActivePhotoIndex(index);
    setIsLightboxOpen(true);
  };
  const relatedProjects = PROJECTS_DATA.filter(
    (p) => p.id !== project.id,
  ).slice(0, 2);
  const whatsappMessage = encodeURIComponent(
    `Hello Vrajraj Developers, I am viewing ${project.name} on your official website and would like to receive the sanctioned floor plans and price sheet. My name is ${fullName || "a prospective buyer"}.`,
  );
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* =========================================================================
       A. Project Hero
       ========================================================================= */}
      <section className="relative w-full bg-[#234C3B] text-white">
        {/* Cover Photo */}
        <div className="relative h-[55vh] sm:h-[65vh] min-h-[420px] max-h-[640px] w-full overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#234C3B] via-[#234C3B]/60 to-black/35" />

          {/* Hero Metadata and CTAs */}
          <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10 sm:pb-14">
            <div className="max-w-3xl space-y-3">
              {/* Clean unboxed metadata with dot separators */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#DCE5D9] tracking-wider uppercase font-semibold">
                <span>{project.category}</span>
                <span aria-hidden="true" className="text-[#B69A64]">
                  ·
                </span>
                <span className="text-[#B69A64]">{project.status}</span>
                {project.possessionDate && (
                  <>
                    <span aria-hidden="true" className="text-[#B69A64]">
                      ·
                    </span>
                    <span>{project.possessionDate}</span>
                  </>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                {project.name}
              </h1>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F7F6F0]/90">
                <MapPin className="w-4 h-4 text-[#B69A64] shrink-0" />
                <span>
                  {project.location}, {project.city}, {project.state}
                </span>
                {project.reraNumber && (
                  <>
                    <span className="hidden sm:inline text-white/40">|</span>
                    <span className="hidden sm:inline font-mono text-xs text-[#DCE5D9]/80">
                      RERA: {project.reraNumber}
                    </span>
                  </>
                )}
              </div>

              <p className="text-xs sm:text-base text-[#F7F6F0]/90 leading-relaxed font-light pt-1 max-w-2xl">
                {project.tagline}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="#project-enquiry-form"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#234C3B] bg-white hover:bg-[#F7F6F0] rounded-sm transition-colors cursor-pointer shadow-md"
                >
                  <span>Enquire About This Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => openGalleryAt(0)}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white border border-white/60 hover:bg-white/10 rounded-sm transition-colors cursor-pointer"
                >
                  <Images className="w-4 h-4" />
                  <span>
                    View Gallery ({project.galleryImages.length} Photos)
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-[#292D2A]/60 border-b border-[#E9E5DC] pb-4">
          <button
            onClick={() => onNavigate("home")}
            className="hover:text-[#234C3B] cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate("projects")}
            className="hover:text-[#234C3B] cursor-pointer"
          >
            Projects
          </button>
          <span>/</span>
          <span className="text-[#234C3B] font-semibold">{project.name}</span>
        </nav>
      </div>

      {/* =========================================================================
       B. Project Image Gallery
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block mb-1">
              Visual Presentation
            </span>
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-[#234C3B]">
              Project Architectural Gallery
            </h2>
          </div>

          <button
            onClick={() => openGalleryAt(0)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#234C3B] hover:text-[#356B4D] border-b border-[#234C3B]/40 pb-0.5 cursor-pointer"
          >
            <Images className="w-4 h-4 text-[#356B4D]" />
            <span>Open Fullscreen Gallery</span>
          </button>
        </div>

        {/* Mosaic Layout: 1 large on left, 2 smaller stacked on right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Large Photo */}
          <div
            onClick={() => openGalleryAt(0)}
            className="md:col-span-8 relative aspect-16/10 overflow-hidden rounded-xs border border-[#E9E5DC] bg-[#E9E5DC] group cursor-pointer"
          >
            <img
              src={project.galleryImages[0]?.url || project.coverImage}
              alt={project.galleryImages[0]?.caption || project.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-3 left-3 bg-[#234C3B]/90 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-xs">
              {project.galleryImages[0]?.caption}
            </div>
            <div className="absolute top-3 right-3 bg-white/95 text-[#234C3B] text-xs font-semibold px-2.5 py-1 rounded-xs shadow-xs">
              Click to Enlarge
            </div>
          </div>

          {/* Supporting Thumbnails Stack */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
            {project.galleryImages.slice(1, 3).map((img, idx) => (
              <div
                key={idx}
                onClick={() => openGalleryAt(idx + 1)}
                className="relative aspect-16/10 overflow-hidden rounded-xs border border-[#E9E5DC] bg-[#E9E5DC] group cursor-pointer"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-2 left-2 right-2 truncate bg-[#234C3B]/85 text-white text-[11px] px-2 py-1 rounded-xs">
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
       C. Project Overview & Specifications
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Details (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview Narrative */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block">
                Development Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#234C3B]">
                Project Overview
              </h2>
              <p className="text-sm sm:text-base text-[#292D2A]/85 leading-relaxed">
                {project.overview}
              </p>
              {project.statusDetail && (
                <div className="p-4 bg-[#E9E5DC]/50 rounded-xs border border-[#E9E5DC] flex items-center gap-3 text-xs sm:text-sm text-[#234C3B] font-medium">
                  <ShieldCheck className="w-5 h-5 text-[#356B4D] shrink-0" />
                  <span>Construction Status: {project.statusDetail}</span>
                </div>
              )}
            </div>

            {/* Unit Configurations */}
            <div className="space-y-4 border-t border-[#E9E5DC] pt-8">
              <h3 className="text-lg sm:text-xl font-bold text-[#234C3B]">
                Available Configurations & Typologies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.unitTypes.map((unit, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xs border border-[#E9E5DC] flex items-center justify-between shadow-xs"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-[#292D2A]">
                      {unit}
                    </span>
                    <span className="text-[11px] text-[#356B4D] uppercase font-bold tracking-wider">
                      Sanctioned
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4 border-t border-[#E9E5DC] pt-8">
              <h3 className="text-lg sm:text-xl font-bold text-[#234C3B]">
                Planning & Architectural Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#292D2A]/85"
                  >
                    <CheckCircle className="w-4 h-4 text-[#356B4D] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities Grid */}
            <div className="space-y-4 border-t border-[#E9E5DC] pt-8">
              <h3 className="text-lg sm:text-xl font-bold text-[#234C3B]">
                Curated Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white rounded-xs border border-[#E9E5DC] space-y-1.5 shadow-xs"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-[#234C3B]">
                      <Compass className="w-4 h-4 text-[#356B4D]" />
                      <span>{amenity.name}</span>
                    </div>
                    <p className="text-xs text-[#292D2A]/80 leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Table */}
            <div className="space-y-4 border-t border-[#E9E5DC] pt-8">
              <h3 className="text-lg sm:text-xl font-bold text-[#234C3B]">
                Technical & Construction Specifications
              </h3>
              <div className="bg-white rounded-xs border border-[#E9E5DC] overflow-hidden shadow-xs">
                <dl className="divide-y divide-[#E9E5DC]">
                  {project.specifications.map((spec, idx) => (
                    <div
                      key={idx}
                      className="px-5 py-3.5 sm:grid sm:grid-cols-3 sm:gap-4 text-xs sm:text-sm"
                    >
                      <dt className="font-semibold text-[#234C3B]">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 sm:mt-0 sm:col-span-2 text-[#292D2A]/85">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Quick Snapshot Sticky Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 sm:p-7 rounded-xs border border-[#E9E5DC] shadow-xs lg:sticky lg:top-24 space-y-6">
              <div className="border-b border-[#E9E5DC] pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block mb-1">
                  At a Glance
                </span>
                <h3 className="text-xl font-bold text-[#234C3B]">
                  {project.name}
                </h3>
                <p className="text-xs text-[#292D2A]/70 mt-1">
                  {project.location}
                </p>
              </div>

              <div className="space-y-3.5 text-xs text-[#292D2A]/85">
                <div className="flex items-center justify-between">
                  <span className="text-[#292D2A]/60">Property Type</span>
                  <span className="font-semibold text-[#234C3B]">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#292D2A]/60">Construction Status</span>
                  <span className="font-semibold text-[#356B4D]">
                    {project.status}
                  </span>
                </div>
                {project.totalUnits && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#292D2A]/60">Total Units</span>
                    <span className="font-semibold text-[#234C3B]">
                      {project.totalUnits}
                    </span>
                  </div>
                )}
                {project.siteArea && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#292D2A]/60">Land Parcel</span>
                    <span className="font-semibold text-[#234C3B]">
                      {project.siteArea}
                    </span>
                  </div>
                )}
                {project.possessionDate && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#292D2A]/60">Target Handover</span>
                    <span className="font-semibold text-[#234C3B]">
                      {project.possessionDate}
                    </span>
                  </div>
                )}
                {project.reraNumber && (
                  <div className="pt-2 border-t border-[#E9E5DC]">
                    <span className="text-[11px] text-[#292D2A]/60 block mb-0.5">
                      Gujarat RERA Registration
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-[#234C3B] break-all">
                      {project.reraNumber}
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-2 space-y-2.5">
                <a
                  href="#project-enquiry-form"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#234C3B] hover:bg-[#356B4D] rounded-sm transition-colors shadow-xs"
                >
                  <FileText className="w-4 h-4" />
                  <span>Enquire & Request Brochure</span>
                </a>

                <a
                  href={`tel:${COMPANY_DETAILS.contacts[0].phone.replace(/\s+/g, "")}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#234C3B] bg-[#E9E5DC] hover:bg-[#DCE5D9] rounded-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#356B4D]" />
                  <span>
                    Call {COMPANY_DETAILS.contacts[0].name}:{" "}
                    {COMPANY_DETAILS.contacts[0].phone}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
       D. Location and Address with Interactive Map
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block mb-1">
            Site Coordinates & Connectivity
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#234C3B]">
            Strategic Location
          </h2>
          <p className="text-xs sm:text-sm text-[#292D2A]/80 mt-1">
            Situated within easy vehicular access of key commercial avenues,
            schools, and hospitals.
          </p>
        </div>

        <InteractiveMap
          name={project.name}
          address={project.address}
          city={project.city}
          state={project.state}
          pincode={project.pincode}
          coordinates={project.coordinates}
        />
      </section>

      {/* =========================================================================
       E. Enquiry Form Section
       ========================================================================= */}
      <section
        id="project-enquiry-form"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-xs border border-[#E9E5DC] p-8 sm:p-12 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block mb-1">
              Direct Interaction
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#234C3B]">
              Interested in {project.name}?
            </h2>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 mt-2 leading-relaxed">
              Connect directly with our internal property consultants. We will
              share comprehensive PDF floor plans, master layout sanctions, and
              current payment schedules.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 bg-[#F7F6F0] rounded-xs border border-[#356B4D]/30 text-center space-y-4 max-w-lg mx-auto">
              <div className="w-12 h-12 bg-[#356B4D]/20 text-[#356B4D] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-[#234C3B]">
                  Enquiry Successfully Registered
                </h4>
                <p className="text-xs font-mono text-[#356B4D]">
                  Reference Code: {refId}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
                Thank you, <strong>{fullName}</strong>. Our project specialist
                for <strong>{project.name}</strong> will connect with you at{" "}
                <strong>{phone}</strong> to share the detailed brochure and
                schedule an accompanied site walkthrough.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#25D366] text-white rounded-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Instant WhatsApp
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold bg-[#234C3B] text-white rounded-sm hover:bg-[#356B4D]"
                >
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleEnquirySubmit}
              className="space-y-5 max-w-2xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#292D2A] mb-1">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dhaval Shah"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F7F6F0]/50 border ${formErrors.fullName ? "border-red-500" : "border-[#E9E5DC]"} rounded-xs focus:outline-none focus:ring-1 focus:ring-[#356B4D]`}
                  />
                  {formErrors.fullName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.fullName}
                    </p>
                  )}
                </div>

                {/* Indian Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-[#292D2A] mb-1">
                    Indian Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-[#292D2A]/60 font-medium select-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      value={phone}
                      onChange={(e) =>
                        setPhone(e.target.value.replace(/\D/g, ""))
                      }
                      placeholder="89891 21000"
                      className={`w-full pl-11 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#F7F6F0]/50 border ${formErrors.phone ? "border-red-500" : "border-[#E9E5DC]"} rounded-xs focus:outline-none focus:ring-1 focus:ring-[#356B4D] tabular-nums`}
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-[#292D2A] mb-1">
                    Email Address{" "}
                    <span className="text-xs text-[#292D2A]/50">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="dhaval@example.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F7F6F0]/50 border border-[#E9E5DC] rounded-xs focus:outline-none focus:ring-1 focus:ring-[#356B4D]"
                  />
                </div>

                {/* Configuration of Interest */}
                <div>
                  <label className="block text-xs font-semibold text-[#292D2A] mb-1">
                    Interested Configuration
                  </label>
                  <select
                    value={selectedUnit}
                    onChange={(e) => setSelectedUnit(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F7F6F0]/50 border border-[#E9E5DC] rounded-xs focus:outline-none focus:ring-1 focus:ring-[#356B4D]"
                  >
                    {project.unitTypes.map((u, i) => (
                      <option key={i} value={u}>
                        {u}
                      </option>
                    ))}
                    <option value="Any / Flexible Layout">
                      Any / Flexible Layout
                    </option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[#292D2A] mb-1">
                  Specific Queries / Timing for Walkthrough{" "}
                  <span className="text-xs text-[#292D2A]/50">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Planning a weekend visit or inquiring about payment milestones"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F7F6F0]/50 border border-[#E9E5DC] rounded-xs focus:outline-none focus:ring-1 focus:ring-[#356B4D] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#234C3B] hover:bg-[#356B4D] rounded-xs transition-colors cursor-pointer disabled:opacity-70 shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting ? "Submitting Enquiry..." : "Submit Enquiry"}
                  </span>
                </button>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-[#234C3B] bg-[#E9E5DC] hover:bg-[#DCE5D9] rounded-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#356B4D]" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

              <p className="text-[11px] text-[#292D2A]/60 pt-1">
                Your contact information is strictly handled by Vrajraj
                Developers in-house sales desk.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* =========================================================================
       F. Related Projects
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#E9E5DC] pt-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block mb-1">
              Explore More
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#234C3B]">
              Related Developments
            </h3>
          </div>
          <button
            onClick={() => {
              onNavigate("projects");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xs font-semibold text-[#234C3B] hover:underline cursor-pointer"
          >
            View All ({PROJECTS_DATA.length})
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedProjects.map((rel) => (
            <div
              key={rel.id}
              onClick={() => {
                onNavigate("project-detail", rel.slug);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group bg-white rounded-xs border border-[#E9E5DC] overflow-hidden shadow-xs hover:shadow-md transition-shadow cursor-pointer flex flex-col sm:flex-row"
            >
              <div className="sm:w-48 aspect-4/3 sm:aspect-auto overflow-hidden bg-[#E9E5DC] shrink-0">
                <img
                  src={rel.coverImage}
                  alt={rel.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#292D2A]/60 mb-1">
                    <span>{rel.category}</span>
                    <span>·</span>
                    <span className="text-[#356B4D] font-medium">
                      {rel.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#234C3B] group-hover:text-[#356B4D] transition-colors">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-[#292D2A]/75 mt-1 line-clamp-2">
                    {rel.location}, {rel.city}
                  </p>
                </div>
                <div className="pt-3 flex items-center gap-1 text-xs font-semibold text-[#234C3B]">
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
       G. Sticky Mobile Enquiry Action Bar
       ========================================================================= */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E9E5DC] px-4 py-2.5 shadow-lg flex items-center justify-between gap-3">
        <a
          href={`tel:${COMPANY_DETAILS.contacts[0].phone.replace(/\s+/g, "")}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-[#234C3B] bg-[#E9E5DC] rounded-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#356B4D]" />
          <span>Call Office</span>
        </a>

        <a
          href="#project-enquiry-form"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-white bg-[#234C3B] rounded-xs"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Enquire</span>
        </a>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={project.galleryImages}
        currentIndex={activePhotoIndex}
        onIndexChange={setActivePhotoIndex}
        projectTitle={project.name}
      />
    </div>
  );
};
export { ProjectDetailsPage };
