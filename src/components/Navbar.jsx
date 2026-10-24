import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { COMPANY_DETAILS } from "../data/projectsData";
const Navbar = ({ currentPage, onNavigate, onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "directors-desk", label: "Director's Desk" },
    { id: "about", label: "About Us" },
    { id: "projects", label: "Projects" },
  ];
  const handleLinkClick = (pageId) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${isScrolled ? "bg-[#ffffff]/90 backdrop-blur-md border-b border-[#E9E5DC] shadow-xs" : "bg-[#ffffff]/80 backdrop-blur-sm border-b border-[#E9E5DC]/60"}`}
      >
        <div className="mx-auto max-w-[1280px] px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand logo */}
            <button
              onClick={() => handleLinkClick("home")}
              className="shrink-0 rounded-sm text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#356B4D]"
              aria-label="Vrajraj Developers home"
            >
              <img
                src="/vrajraj-logo.png"
                alt="Vrajraj Developers"
                width="640"
                height="560"
                className="logo-intro h-12 w-14 object-contain transition-opacity group-hover:opacity-85 sm:h-14 sm:w-16"
              />
            </button>

            {/* Primary navigation links */}
            <nav className="hidden lg:flex items-center gap-6 font-inter text-[13px] font-medium text-[#0f172a]">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`group relative shrink-0 whitespace-nowrap py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#356B4D] ${isActive ? "font-semibold text-[#234C3B]" : "text-slate-600 hover:text-[#234C3B]"}`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 bottom-0 h-0.5 origin-left rounded-full bg-[#356B4D] transition-transform duration-200 ease-out ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"}`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Enquiry call to action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenEnquiry()}
                className="shrink-0 whitespace-nowrap rounded-full bg-[#234C3B] px-5 py-2 font-inter text-[13px] font-medium text-white shadow-sm transition-colors duration-200 hover:bg-[#356B4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#356B4D] focus-visible:ring-offset-2 active:bg-[#1a382b]"
              >
                Find my dream
              </button>

              {/* Mobile hamburger button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#0f172a] hover:bg-black/5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu sheet */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E9E5DC] px-6 pt-4 pb-6 space-y-2 animate-fadeIn font-inter">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`group relative block w-full rounded-sm px-3 py-2.5 text-left text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#356B4D] ${isActive ? "bg-[#356B4D]/10 font-semibold text-[#234C3B]" : "font-medium text-slate-700 hover:bg-[#356B4D]/5 hover:text-[#234C3B]"}`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 bottom-1 h-0.5 origin-left rounded-full bg-[#356B4D] transition-transform duration-200 ease-out ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"}`}
                  />
                </button>
              );
            })}
            <button
              onClick={() => handleLinkClick("contact")}
              className={`group relative block w-full rounded-sm px-3 py-2.5 text-left text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#356B4D] ${currentPage === "contact" ? "bg-[#356B4D]/10 font-semibold text-[#234C3B]" : "font-medium text-slate-700 hover:bg-[#356B4D]/5 hover:text-[#234C3B]"}`}
            >
              Contact Us
              <span
                aria-hidden="true"
                className={`absolute inset-x-3 bottom-1 h-0.5 origin-left rounded-full bg-[#356B4D] transition-transform duration-200 ease-out ${currentPage === "contact" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"}`}
              />
            </button>

            <div className="pt-4 border-t border-[#E9E5DC] mt-3 space-y-2">
              <a
                href={`tel:${COMPANY_DETAILS.contacts[0].phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 px-3 py-2 text-sm text-[#0f172a] font-medium"
              >
                <PhoneCall className="w-4 h-4 text-[#000000]" />
                <span>
                  Call {COMPANY_DETAILS.contacts[0].name}:{" "}
                  {COMPANY_DETAILS.contacts[0].phone}
                </span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full rounded-full bg-[#234C3B] px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#356B4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#356B4D] focus-visible:ring-offset-2"
              >
                Find my dream
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
export { Navbar };
