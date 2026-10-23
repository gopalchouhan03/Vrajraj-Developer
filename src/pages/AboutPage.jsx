import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Shield,
  Users,
  Layers,
  MapPin,
} from "lucide-react";
const AboutPage = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="space-y-20 sm:space-y-28 py-8 sm:py-12">
      {/* =========================================================================
       A. About Hero
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#E9E5DC] pb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block mb-2">
            Company Profile
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#234C3B] max-w-3xl leading-tight">
            About Vrajraj Developers
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#292D2A]/85 max-w-3xl leading-relaxed font-light">
            An established Indian real estate development firm rooted in
            architectural thoughtfulness, clear legal titles, and honest
            craftsmanship across residential, commercial, and plotted sectors.
          </p>
        </div>

        {/* Hero Architectural Photographic Banner */}
        <div className="mt-8 aspect-21/9 sm:aspect-16/7 w-full overflow-hidden rounded-xs border border-[#E9E5DC] bg-[#E9E5DC] shadow-xs">
          <img
            src="/assets/images/hero_vrajraj_garden_1792732219280.jpg"
            alt="Vrajraj development community landscaping"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* =========================================================================
       B. Our Story
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block">
              Origin & Ethos
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#234C3B] leading-tight">
              Shaping Everyday Living with Discipline
            </h2>
            <p className="text-sm sm:text-base text-[#292D2A]/85 leading-relaxed">
              Vrajraj Developers was founded with a straightforward mandate: to
              remove the opacity and anxiety often associated with buying real
              estate in India. We saw that while the urban landscape was
              expanding rapidly, buyers were yearning for dependable builders
              who deliver exactly what is promised on paper.
            </p>
            <p className="text-sm sm:text-base text-[#292D2A]/85 leading-relaxed">
              From our foundational plotted developments in the peri-urban belts
              of Gujarat to high-street corporate offices on Sindhu Bhavan Marg
              and boutique residential towers in Bodakdev, our trajectory has
              been deliberately measured. We prioritize completing and
              stabilizing each site to perfection over aggressive speculative
              expansion.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-4/3 overflow-hidden rounded-xs border border-[#E9E5DC] bg-[#E9E5DC] shadow-xs">
              <img
                src="/assets/images/project_residency_1792732222157.jpg"
                alt="Completed residential development exterior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
       C & D. Vision & Mission
       ========================================================================= */}
      <section className="bg-[#E9E5DC]/50 py-16 sm:py-20 border-y border-[#E9E5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <div className="bg-white p-8 sm:p-10 rounded-xs border border-[#E9E5DC] shadow-xs space-y-4">
              <div className="w-12 h-12 bg-[#DCE5D9] text-[#234C3B] rounded-xs flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#356B4D]" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#356B4D] font-bold block">
                Our Long-Term Horizon
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#234C3B]">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-[#292D2A]/85 leading-relaxed">
                To be recognized across Western India as the real estate partner
                of enduring trust — creating sustainable, well-planned
                residential enclaves and productive commercial landmarks that
                appreciate in both communal livability and investment value.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-xs border border-[#E9E5DC] shadow-xs space-y-4">
              <div className="w-12 h-12 bg-[#DCE5D9] text-[#234C3B] rounded-xs flex items-center justify-center">
                <Layers className="w-6 h-6 text-[#356B4D]" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#356B4D] font-bold block">
                Daily Operational Focus
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#234C3B]">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-[#292D2A]/85 leading-relaxed">
                To execute construction with strict adherence to structural
                safety codes, maintain total transparency in legal
                documentation, plan spaces tailored to authentic human routines,
                and cultivate lasting post-handover relationships with our
                societies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
       E. Our Values (Integrity, Quality, Transparency, Responsibility)
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block mb-1">
            Ethical Compass
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#234C3B]">
            Our Core Values
          </h2>
          <p className="text-sm sm:text-base text-[#292D2A]/80 mt-2">
            Non-negotiables that guide every site engineer, architect, and
            customer relationship manager.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-xs border border-[#E9E5DC] space-y-2.5">
            <h4 className="text-lg font-bold text-[#234C3B] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#356B4D]" />
              Integrity
            </h4>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
              Doing what is right, particularly when it costs more or takes
              longer. Uncompromising structural steel, genuine carpet areas, and
              honest commitments.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xs border border-[#E9E5DC] space-y-2.5">
            <h4 className="text-lg font-bold text-[#234C3B] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#356B4D]" />
              Quality
            </h4>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
              Rigorous laboratory batch testing of materials, precision tile
              joints, weather-resistant waterproofing, and durable branded
              electrical fixtures.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xs border border-[#E9E5DC] space-y-2.5">
            <h4 className="text-lg font-bold text-[#234C3B] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#356B4D]" />
              Transparency
            </h4>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
              Clear title deed reports, open RERA documentation, exact payment
              milestones linked to physical construction progress, and zero
              hidden levies.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xs border border-[#E9E5DC] space-y-2.5">
            <h4 className="text-lg font-bold text-[#234C3B] flex items-center gap-2">
              <Users className="w-4 h-4 text-[#356B4D]" />
              Responsibility
            </h4>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
              Commitment to rain-water percolation, native shade tree planting,
              on-site construction worker safety standards, and long-term
              community stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
       F. Our Development Approach
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#234C3B] text-white rounded-xs p-8 sm:p-12 lg:p-16">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#B69A64] font-semibold block mb-2">
              Execution Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              How We Build at Vrajraj
            </h2>
            <p className="text-sm sm:text-base text-[#DCE5D9] mt-3 leading-relaxed font-light">
              From site selection to community formation, our step-by-step
              process ensures consistent outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3 border-t border-white/20 pt-6">
              <span className="text-xs font-mono text-[#B69A64]">
                01. Planning & Design
              </span>
              <h4 className="text-base font-bold text-white">
                Functional Layouts
              </h4>
              <p className="text-xs sm:text-sm text-[#DCE5D9] leading-relaxed">
                Prioritizing natural breezes, optimal kitchen workflows, privacy
                between bedroom wings, and efficient vehicle circulation.
              </p>
            </div>

            <div className="space-y-3 border-t border-white/20 pt-6">
              <span className="text-xs font-mono text-[#B69A64]">
                02. Engineering & Detailing
              </span>
              <h4 className="text-base font-bold text-white">
                Structural Rigor
              </h4>
              <p className="text-xs sm:text-sm text-[#DCE5D9] leading-relaxed">
                Continuous engineering supervision on site, certified concrete
                grades, anti-termite treatment, and multi-layer terrace
                waterproofing.
              </p>
            </div>

            <div className="space-y-3 border-t border-white/20 pt-6">
              <span className="text-xs font-mono text-[#B69A64]">
                03. Practical Spaces
              </span>
              <h4 className="text-base font-bold text-white">
                Comfort in Daily Use
              </h4>
              <p className="text-xs sm:text-sm text-[#DCE5D9] leading-relaxed">
                Adequate power plug points, ergonomic utility drying balconies,
                deep basement driveway turning radiuses, and child-safe
                railings.
              </p>
            </div>

            <div className="space-y-3 border-t border-white/20 pt-6">
              <span className="text-xs font-mono text-[#B69A64]">
                04. Transparent Communication
              </span>
              <h4 className="text-base font-bold text-white">
                Customer Milestones
              </h4>
              <p className="text-xs sm:text-sm text-[#DCE5D9] leading-relaxed">
                Regular photographic site progress updates, transparent payment
                reminders, and proactive support for home loan documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
       G. Our Work & Presence
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block">
              Presence & Locations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#234C3B]">
              Active Across Gujarat’s Prime Urban Growth Nodes
            </h2>
            <p className="text-sm text-[#292D2A]/85 leading-relaxed">
              We concentrate our developments in strategic micro-markets with
              verified civic infrastructure, reliable municipal water
              connections, and direct connectivity to arterial transit rings.
            </p>
            <div className="pt-2 space-y-2 text-xs sm:text-sm text-[#292D2A]/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#356B4D]" />
                <span>Bodakdev & SG Highway Extension, Ahmedabad</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#356B4D]" />
                <span>Sindhu Bhavan Corporate Corridor, Ahmedabad</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#356B4D]" />
                <span>Shela – Sanand Green Belt Plotted Corridors</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#356B4D]" />
                <span>Vasna – Bhayli Road, Vadodara</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="aspect-4/3 overflow-hidden rounded-xs border border-[#E9E5DC] bg-[#E9E5DC]">
              <img
                src="/assets/images/project_commercial_1792732223227.jpg"
                alt="Commercial landmark facade"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-4/3 overflow-hidden rounded-xs border border-[#E9E5DC] bg-[#E9E5DC]">
              <img
                src="/assets/images/project_greens_1792732221978.jpg"
                alt="Plotted gated community avenue"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
       H. CTA
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E9E5DC]/60 border border-[#E9E5DC] rounded-xs p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#234C3B]">
              Ready to Explore Our Portfolio?
            </h3>
            <p className="text-xs sm:text-sm text-[#292D2A]/80 max-w-xl">
              Browse our currently available 3 & 4 BHK residences, commercial
              spaces, and vetted plotted lands across Gujarat.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                onNavigate("projects");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#234C3B] hover:bg-[#356B4D] rounded-sm transition-colors cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenEnquiry}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#234C3B] bg-white border border-[#234C3B]/30 hover:bg-[#F7F6F0] rounded-sm transition-colors cursor-pointer"
            >
              Enquire Directly
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export { AboutPage };
