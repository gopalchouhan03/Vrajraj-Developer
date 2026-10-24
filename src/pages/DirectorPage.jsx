import { ArrowRight, ShieldCheck, HeartHandshake, Compass } from "lucide-react";
import { COMPANY_DETAILS } from "../data/projectsData";
const DirectorPage = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* Header / Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#E9E5DC] pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block mb-2">
            Leadership & Vision
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#234C3B]">
            Director's Desk
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#292D2A]/80 max-w-2xl leading-relaxed">
            A personal reflection on our commitments, construction discipline,
            and the enduring responsibility of shaping spaces where generations
            thrive.
          </p>
        </div>
      </section>

      {/* Main Editorial Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Credentials */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="aspect-3/4 overflow-hidden rounded-xs border border-[#E9E5DC] bg-[#E9E5DC] shadow-sm">
              <img
                src={COMPANY_DETAILS.director.photo}
                alt={COMPANY_DETAILS.director.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="bg-white p-6 rounded-xs border border-[#E9E5DC] space-y-2 shadow-xs">
              <h2 className="text-xl font-bold text-[#234C3B]">
                {COMPANY_DETAILS.director.name}
              </h2>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#356B4D]">
                {COMPANY_DETAILS.director.title}
              </p>
              <p className="text-xs text-[#292D2A]/70 pt-2 border-t border-[#E9E5DC]/80 leading-relaxed">
                Guiding land acquisition, master planning, and engineering
                oversight for Vrajraj developments in Khargone, Madhya Pradesh.
              </p>
            </div>

            <div className="p-5 bg-[#E9E5DC]/50 rounded-xs border border-[#E9E5DC] space-y-3 text-xs text-[#292D2A]/80">
              <div className="flex items-center gap-2 text-[#234C3B] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#356B4D]" />
                <span>Statutory & Title Transparency</span>
              </div>
              <p className="leading-relaxed">
                "We hold every land parcel to rigorous legal scrutiny before
                breaking ground. Complete peace of mind is non-negotiable for
                our buyers."
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Message */}
          <div className="lg:col-span-7 space-y-8 text-[#292D2A]/90 text-sm sm:text-base leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#234C3B] leading-snug">
                Building with Integrity: A Lifetime Responsibility
              </h2>
              <p className="text-base sm:text-lg text-[#234C3B] font-medium leading-relaxed italic border-l-2 border-[#B69A64] pl-4">
                "संपूर्ण निर्माण क्षेत्र की सबसे सुंदर, आधुनिक एवं सर्वसुविधायुक्त कॉलोनियों के निर्माता"
              </p>
            </div>

            <div className="space-y-5 text-[#292D2A]/85">
              <p>
                Welcome to Vrajraj Developers. Over the years of developing
                residential communities and commercial opportunities in Khargone,
                Madhya Pradesh,
                our core belief has remained grounded: a developer is not merely
                a vendor of square feet, but a custodian of community
                well-being.
              </p>
              <p>
                In an industry often clouded by marketing hyperbole, we have
                chosen a quiet and disciplined path. We focus on four
                foundational pillars that define our daily decisions at the
                project sites:
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-6 pt-2">
              <div className="border border-[#E9E5DC] p-5 rounded-xs bg-white space-y-2">
                <div className="flex items-center gap-2 text-[#234C3B] font-bold">
                  <Compass className="w-4 h-4 text-[#356B4D]" />
                  <span>1. Thoughtful Planning Over Superficial Grandeur</span>
                </div>
                <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
                  A home must work effortlessly in daily life. We optimize
                  window placements for natural morning sunlight and continuous
                  cross-breezes, arrange kitchens for practical Indian culinary
                  traditions, and eliminate narrow, unusable corridors that add
                  cost without adding living value.
                </p>
              </div>

              <div className="border border-[#E9E5DC] p-5 rounded-xs bg-white space-y-2">
                <div className="flex items-center gap-2 text-[#234C3B] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#356B4D]" />
                  <span>2. Uncompromising Structural Safety</span>
                </div>
                <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
                  We use certified primary steel brands, tested grade ready-mix
                  concrete, and seismic-resistant engineering calculations that
                  exceed minimum regulatory mandates. What remains hidden behind
                  the plaster and paint is what protects your family for sixty
                  years.
                </p>
              </div>

              <div className="border border-[#E9E5DC] p-5 rounded-xs bg-white space-y-2">
                <div className="flex items-center gap-2 text-[#234C3B] font-bold">
                  <HeartHandshake className="w-4 h-4 text-[#356B4D]" />
                  <span>3. Relationships Beyond the Key Handover</span>
                </div>
                <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
                  Our involvement does not terminate when the registry is
                  signed. We work alongside the newly formed resident
                  co-operative societies, assisting with operational setups,
                  solar water harvesting frameworks, and maintenance transition
                  for complete peace of mind.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4 text-[#292D2A]/85">
              <p>
                Whether you are seeking your family's first apartment, an
                independent plotted sanctuary, or a commercial space for your
                enterprise, my door and the doors of our project engineers
                remain open to answer every query with complete clarity.
              </p>
              <p>
                I invite you to walk through our developments, speak directly to
                our on-site team, and experience the Vrajraj standard firsthand.
              </p>
            </div>

            {/* Closing Signature Block */}
            <div className="pt-8 border-t border-[#E9E5DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#356B4D] font-bold block mb-1">
                  Warm regards,
                </span>
                <p className="text-xl font-bold text-[#234C3B] tracking-tight">
                  {COMPANY_DETAILS.director.name}
                </p>
                <p className="text-xs text-[#292D2A]/70 uppercase tracking-wider mt-0.5">
                  {COMPANY_DETAILS.director.title} · Vrajraj Developers
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    onNavigate("projects");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#234C3B] hover:bg-[#356B4D] rounded-sm transition-colors cursor-pointer"
                >
                  <span>Explore Our Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenEnquiry}
                  className="px-4 py-2.5 text-xs sm:text-sm font-medium text-[#234C3B] border border-[#234C3B]/40 hover:bg-[#E9E5DC] rounded-sm transition-colors cursor-pointer"
                >
                  Schedule Site Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export { DirectorPage };
