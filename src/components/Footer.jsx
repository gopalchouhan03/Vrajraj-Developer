import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MapPin,
  ArrowUp,
  ShieldCheck,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import {
  COMPANY_DETAILS,
  GROUP_DEVELOPED_PROJECTS,
  PROJECTS_DATA,
} from "../data/projectsData";
const Footer = ({ onNavigate, onOpenEnquiry }) => {
  const [showLegalModal, setShowLegalModal] = useState(null);
  const [loadBackgroundVideo, setLoadBackgroundVideo] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isVideoCrossfading, setIsVideoCrossfading] = useState(false);
  const footerRef = useRef(null);
  const backgroundVideoRefs = useRef([]);
  const isVideoCrossfadingRef = useRef(false);
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
  useEffect(() => {
    if (!loadBackgroundVideo) return;

    const activeVideo = backgroundVideoRefs.current[activeVideoIndex];
    const incomingVideo = backgroundVideoRefs.current[1 - activeVideoIndex];
    if (!activeVideo || !incomingVideo) return;

    let frameId;
    const crossfadeDuration = 0.5;
    const startCrossfade = () => {
      if (isVideoCrossfadingRef.current) return;

      isVideoCrossfadingRef.current = true;
      setIsVideoCrossfading(true);
      incomingVideo.currentTime = 0;
      incomingVideo.play().catch((error) => {
        console.error("Footer background video could not start.", error);
        isVideoCrossfadingRef.current = false;
        setIsVideoCrossfading(false);
      });
    };
    const checkForCrossfade = () => {
      if (
        activeVideo.duration &&
        activeVideo.currentTime >= activeVideo.duration - crossfadeDuration
      ) {
        startCrossfade();
      }
    };
    const checkPlaybackPosition = () => {
      checkForCrossfade();

      if (!isVideoCrossfadingRef.current) {
        frameId = requestAnimationFrame(checkPlaybackPosition);
      }
    };
    const handleEnded = async () => {
      if (!isVideoCrossfadingRef.current) {
        incomingVideo.currentTime = 0;
        try {
          await incomingVideo.play();
        } catch (error) {
          console.error("Footer background video could not continue.", error);
          activeVideo.currentTime = 0;
          activeVideo.play().catch((playError) => {
            console.error("Footer background video could not restart.", playError);
          });
          return;
        }
      }

      activeVideo.pause();
      activeVideo.currentTime = 0;
      isVideoCrossfadingRef.current = false;
      setIsVideoCrossfading(false);
      setActiveVideoIndex(1 - activeVideoIndex);
    };

    activeVideo.addEventListener("ended", handleEnded);
    activeVideo.addEventListener("timeupdate", checkForCrossfade);
    if (activeVideo.paused) {
      activeVideo.play().catch((error) => {
        console.error("Footer background video could not autoplay.", error);
      });
    }
    frameId = requestAnimationFrame(checkPlaybackPosition);

    return () => {
      cancelAnimationFrame(frameId);
      activeVideo.removeEventListener("ended", handleEnded);
      activeVideo.removeEventListener("timeupdate", checkForCrossfade);
    };
  }, [activeVideoIndex, loadBackgroundVideo]);
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
        {loadBackgroundVideo &&
          [0, 1].map((videoIndex) => (
            <video
              key={videoIndex}
              ref={(video) => {
                backgroundVideoRefs.current[videoIndex] = video;
              }}
              autoPlay={videoIndex === 0}
              muted
              playsInline
              preload="auto"
              poster="/assets/images/footer-aerial-poster.webp"
              aria-hidden="true"
              tabIndex={-1}
              className={`pointer-events-none absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-500 ${
                videoIndex === activeVideoIndex || isVideoCrossfading
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <source src="/assets/videos/footer-aerial.mp4" type="video/mp4" />
            </video>
          ))}
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
                Built on enduring values of structural integrity, transparent
                project information, and thoughtful planning. View our listed
                projects in Khargone, Madhya Pradesh.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center text-xs font-semibold tracking-wider text-white bg-[#356B4D] hover:bg-[#B69A64] hover:text-[#292D2A] px-4 py-2 rounded-sm transition-colors cursor-pointer"
                >
                  SCHEDULE A SITE VISIT
                </button>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-[#B69A64] hover:text-[#234C3B]"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-[#B69A64] hover:text-[#234C3B]"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-[#B69A64] hover:text-[#234C3B]"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
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
                      <span className="min-w-0 truncate group-hover:underline">
                        {proj.name}
                        {proj.nameHindi && (
                          <span className="ml-2 text-xs text-[#DCE5D9]/70">
                            {proj.nameHindi}
                          </span>
                        )}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/10 pt-3">
                <h5 className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#B69A64]">
                  Group Developed Projects
                </h5>
                <ul className="space-y-1.5 text-xs text-[#DCE5D9]/85">
                  {GROUP_DEVELOPED_PROJECTS.map((project) => (
                    <li key={project.id}>
                      <button
                        onClick={() => {
                          onNavigate("project-detail", project.slug);
                          scrollToTop();
                        }}
                        className="text-left hover:text-white transition-colors cursor-pointer"
                      >
                        {project.name}
                        {project.nameHindi && (
                          <span className="ml-2 text-[#DCE5D9]/65">
                            {project.nameHindi}
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
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
                MP RERA details pending verification
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
                    Project locations shown here are city-level references in
                    Khargone, Madhya Pradesh. Exact site addresses, land-title
                    documents, approvals, and MP RERA registration details for
                    each development are pending confirmation by the developer.
                  </p>
                  <p>
                    Verify applicable requirements under the Real Estate
                    (Regulation and Development) Act, 2016, the applicable
                    Madhya Pradesh rules, and all project approvals directly
                    with the Madhya Pradesh Real Estate Regulatory Authority
                    (MP RERA) and other competent local authorities before
                    making a booking or payment. Do not rely on this website as
                    proof of registration or approval.
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
