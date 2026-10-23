import { useEffect, useRef, useState } from "react";
import { Phone, MapPin, ArrowUp, ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS, PROJECTS_DATA } from "../data/projectsData";
const Footer = ({ onNavigate, onOpenEnquiry }) => {
  const [showLegalModal, setShowLegalModal] = useState(null);
  const [loadBackgroundVideo, setLoadBackgroundVideo] = useState(false);
  const footerRef = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const footer = footerRef.current;
    if (
      !footer ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadBackgroundVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "160px" },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <footer
        ref={footerRef}
        className="relative overflow-hidden border-t border-[#1a382b] bg-[#234C3B] pt-16 pb-12 text-[#F7F6F0]"
      >
        <img
          src="/assets/images/footer-aerial-poster.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
        />
        {loadBackgroundVideo && (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/assets/images/footer-aerial-poster.webp"
            aria-hidden="true"
            tabIndex={-1}
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-100"
          >
            <source src="/assets/videos/footer-aerial.mp4" type="video/mp4" />
          </video>
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[#183225]/65"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#356B4D]/60">
            {/* Col 1: Brand & Philosophy */}
            <div className="lg:col-span-4 space-y-4">
              <img
                src="/vrajraj-logo.png"
                alt="Vrajraj Developers"
                width="1042"
                height="912"
                className="h-[84px] w-[96px] rounded-md bg-white p-1.5 object-contain"
              />
              <p className="text-sm text-[#DCE5D9] leading-relaxed max-w-sm">
                Built on enduring values of structural integrity, clear property
                titles, and thoughtful planning. Developing residential
                communities and commercial spaces in Gujarat.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center text-xs font-semibold tracking-wider text-white bg-[#356B4D] hover:bg-[#B69A64] hover:text-[#292D2A] px-4 py-2 rounded-sm transition-colors cursor-pointer"
                >
                  SCHEDULE A SITE VISIT
                </button>
              </div>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-[#B69A64]">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-[#DCE5D9]">
                <li>
                  <button
                    onClick={() => {
                      onNavigate("home");
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate("directors-desk");
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Director's Desk
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate("about");
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate("projects");
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    All Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate("contact");
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Developments */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-[#B69A64]">
                Developments
              </h4>
              <ul className="space-y-2 text-sm text-[#DCE5D9]">
                {PROJECTS_DATA.map((proj) => (
                  <li key={proj.id}>
                    <button
                      onClick={() => {
                        onNavigate("project-detail", proj.slug);
                        scrollToTop();
                      }}
                      className="text-left hover:text-white transition-colors flex items-center justify-between w-full group cursor-pointer"
                    >
                      <span className="truncate group-hover:underline">
                        {proj.name}
                      </span>
                      <span className="text-[11px] text-[#B69A64] shrink-0 ml-2">
                        {proj.status}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Corporate Office & Direct Contacts */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-[#B69A64]">
                Registered Office
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm text-[#DCE5D9]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B69A64] shrink-0 mt-0.5" />
                  <span>
                    {COMPANY_DETAILS.corporateOffice.line1},{" "}
                    {COMPANY_DETAILS.corporateOffice.line2},{" "}
                    {COMPANY_DETAILS.corporateOffice.city},{" "}
                    {COMPANY_DETAILS.corporateOffice.state} –{" "}
                    {COMPANY_DETAILS.corporateOffice.pincode}
                  </span>
                </div>
                {COMPANY_DETAILS.contacts.map((contact) => (
                  <div
                    key={contact.phone}
                    className="flex items-center gap-2.5"
                  >
                    <Phone className="w-4 h-4 text-[#B69A64] shrink-0" />
                    <a
                      href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                      className="hover:text-white tabular-nums"
                    >
                      {contact.name}: {contact.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DCE5D9]/75">
            <div className="flex flex-wrap items-center gap-3">
              <span>
                © {/* @__PURE__ */ new Date().getFullYear()} Vrajraj Developers.
                All rights reserved.
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1 text-[#DCE5D9]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B69A64]" />
                RERA Compliant Projects
              </span>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => setShowLegalModal("disclaimer")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                RERA Disclaimer
              </button>
              <button
                onClick={() => setShowLegalModal("privacy")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={scrollToTop}
                className="p-1.5 bg-[#356B4D] hover:bg-[#B69A64] hover:text-[#292D2A] text-white rounded-sm transition-colors cursor-pointer"
                title="Scroll back to top"
                aria-label="Scroll back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* RERA / Privacy Modal */}
      {showLegalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
        >
          <div className="bg-[#F7F6F0] text-[#292D2A] max-w-lg w-full p-6 sm:p-8 rounded-sm shadow-xl border border-[#E9E5DC]">
            <h3 className="text-lg font-bold text-[#234C3B] mb-3">
              {showLegalModal === "disclaimer"
                ? "RERA Statutory Disclaimer"
                : "Customer Data & Privacy Policy"}
            </h3>
            <div className="text-xs sm:text-sm text-[#292D2A]/85 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {showLegalModal === "disclaimer" ? (
                <>
                  <p>
                    All project specifications, plans, elevations, amenities,
                    and details shown on this website are indicative and subject
                    to approval of relevant government authorities under Gujarat
                    Real Estate Regulatory Authority (GujRERA).
                  </p>
                  <p>
                    Prospective purchasers are requested to verify project
                    details, sanctioned building plans, carpet areas, and
                    statutory approvals with our registered sales
                    representatives or directly on the official GujRERA portal
                    prior to entering into any agreement.
                  </p>
                  <p>
                    This website does not constitute an offer, contract, or
                    legal guarantee. Photographs may show artistic
                    representation of landscaping and architectural finishes.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Vrajraj Developers respects your personal privacy. Any
                    contact information (including your name, telephone number,
                    and email address) submitted via this website is utilized
                    solely by our direct in-house customer advisory team to
                    respond to your specific property inquiries.
                  </p>
                  <p>
                    We maintain strict confidentiality and never sell, rent, or
                    distribute your private contact details to external
                    marketing agencies or third-party call centers.
                  </p>
                  <p>
                    You may request deletion or updates to your contact records
                    at any time by contacting our registered office using the
                    phone numbers listed above.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowLegalModal(null)}
                className="px-4 py-2 text-xs font-semibold bg-[#234C3B] text-white rounded-sm hover:bg-[#356B4D] transition-colors cursor-pointer"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export { Footer };
