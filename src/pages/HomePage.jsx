import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Compass,
  Hammer,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Building,
  Play,
  Pause,
} from "lucide-react";
import {
  COMPANY_DETAILS,
  GROUP_DEVELOPED_PROJECTS,
  PROJECTS_DATA,
} from "../data/projectsData";
import { ImageWithSkeleton } from "../components/ImageWithSkeleton";

const portfolioStats = [
  { value: PROJECTS_DATA.length, label: "Vrajraj projects" },
  { value: GROUP_DEVELOPED_PROJECTS.length, label: "Group-developed projects" },
  { value: 1, label: "City represented · Khargone" },
];

const HomePage = ({ onNavigate, onOpenEnquiry }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasStatsEnteredView, setHasStatsEnteredView] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(() =>
    portfolioStats.map(() => 0),
  );
  const videoRef = useRef(null);
  const statsRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultMuted = true;
    video.muted = true;
    video.playbackRate = 0.7;
    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise !== void 0) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsVideoReady(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    };
    attemptPlay();
    const handleInteraction = () => {
      if (video.paused) {
        video.muted = true;
        video
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => { });
      }
    };
    window.addEventListener("click", handleInteraction, {
      once: true,
      passive: true,
    });
    window.addEventListener("touchstart", handleInteraction, {
      once: true,
      passive: true,
    });
    window.addEventListener("scroll", handleInteraction, {
      once: true,
      passive: true,
    });
    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, []);
  useEffect(() => {
    const stats = statsRef.current;
    if (!stats) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setAnimatedStats(portfolioStats.map((stat) => stat.value));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStatsEnteredView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(stats);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!hasStatsEnteredView) return;

    const duration = 1000;
    let frameId;
    const startTime = performance.now();
    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      setAnimatedStats(
        portfolioStats.map((stat) => Math.floor(stat.value * easedProgress)),
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [hasStatsEnteredView]);
  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.muted = true;
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => { });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="space-y-0">
      {/* =========================================================================
       A. Cinematic Real Estate Video Hero Section
       ========================================================================= */}
      <section
        className="relative w-full h-screen min-h-[640px] max-h-[1080px] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "hsl(201, 100%, 13%)" }}
      >
        {/* Fallback Poster Background (always underneath to prevent white flash) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none transition-opacity duration-700"
          style={{
            backgroundImage:
              "url('/assets/images/hero_vrajraj_elegance_1792732219339.jpg')",
            backgroundColor: "hsl(201, 100%, 13%)",
          }}
        />

        {/* Full-Bleed Real Estate Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="/assets/studio/hero_optimized.mp4"
          onLoadedData={() => setIsVideoReady(true)}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-700 ${isVideoReady ? "opacity-100" : "opacity-90"}`}
          style={{ backgroundColor: "hsl(201, 100%, 13%)" }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#10231b]/35 via-[#10231b]/35 to-[#10231b]/55"
        />

        {/* Hero Content Centered Horizontally & Vertically */}
        <div className="relative z-20 max-w-[1280px] w-full mx-auto px-[32px] text-center flex flex-col items-center justify-center">
          {/* Headline: Instrument Serif, 80px desktop, 48px mobile, 0.95 line-height, -2.46px letter-spacing */}
          <h1 className="font-instrument font-normal text-[48px] sm:text-[64px] lg:text-[80px] leading-[0.95] tracking-[-2.46px] text-white max-w-4xl mx-auto text-balance drop-shadow-md animate-hero-headline">
            Where vision meets architecture.
          </h1>

          {/* Supporting Text: Inter, 18px, 1.625 line-height, max-w ~670px */}
          <p className="font-inter text-[18px] leading-[1.625] text-white/95 max-w-[670px] mx-auto mt-6 drop-shadow-sm animate-hero-paragraph">
            We build spaces that inspire, developments that endure, and places
            people are proud to call home.
          </p>

          {/* Primary CTA */}
          <div className="mt-[48px] animate-hero-cta">
            <button
              onClick={() => {
                onNavigate("projects");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-[#234C3B] px-7 py-3 font-inter text-sm font-medium text-white shadow-2xl transition-colors duration-200 hover:border-white/40 hover:bg-[#356B4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 active:bg-[#1a382b] sm:px-8 sm:py-3.5"
            >
              Explore Our Projects
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
       C. Portfolio snapshot
       ========================================================================= */}
      <section
        aria-label="Vrajraj Developers portfolio overview"
        ref={statsRef}
        className="relative overflow-hidden bg-[#13281F] py-5 text-white sm:py-6"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 8% 50%, #73952E 0, transparent 44%), radial-gradient(ellipse at 92% 0%, #356B4D 0, transparent 36%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:gap-6 sm:px-6 lg:grid-cols-3 lg:px-8">
          {portfolioStats.map((stat, index) => (
            <div
              key={stat.label}
              className="border-l border-white/20 pl-4 sm:pl-6"
            >
              <p
                aria-label={String(stat.value).padStart(2, "0")}
                className="font-heading text-3xl font-semibold tabular-nums text-[#C1D995] sm:text-4xl"
              >
                {String(animatedStats[index]).padStart(2, "0")}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-white/75 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
       D. Vrajraj project portfolio
       ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mb-6 flex flex-col justify-between gap-4 border-b border-[#E9E5DC] pb-4 sm:mb-8 sm:flex-row sm:items-end">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#66804B]">
                Vrajraj Developers · Khargone
              </span>
              <h2 className="mt-1 font-heading text-2xl font-semibold text-[#234C3B] sm:text-3xl">
                Our Projects
              </h2>
            </div>
            <button
              onClick={() => {
                onNavigate("projects");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#234C3B] transition-colors hover:text-[#66804B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#356B4D]"
            >
              Explore all projects
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS_DATA.map((project) => (
              <button
                key={project.id}
                onClick={() => {
                  onNavigate("project-detail", project.slug);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group overflow-hidden rounded-sm bg-white text-left shadow-sm ring-1 ring-[#E9E5DC] transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#356B4D]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E9E5DC]">
                  <ImageWithSkeleton
                    src={project.coverImage}
                    alt={`Representative image, not confirmed project photography, for ${project.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    containerClassName="absolute inset-0"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold tracking-wide text-[#234C3B]">
                    Representative image
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 px-4 py-4">
                  <div className="min-w-0">
                    <h3 className="truncate font-heading text-lg font-semibold text-[#234C3B]">
                      {project.name}
                    </h3>
                    <p className="truncate text-sm text-[#292D2A]/70">
                      {project.nameHindi}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-[#292D2A]/65">
                      <MapPin
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0 text-[#66804B]"
                      />
                      <span className="truncate">
                        {project.city}, {project.state}
                      </span>
                    </p>
                  </div>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-[#66804B] transition-transform group-hover:translate-x-1"
                  />
                </div>
              </button>
            ))}
          </div>
          <div className="mt-7 border-t border-[#E9E5DC] pt-5">
            <h3 className="font-heading text-lg font-semibold text-[#234C3B]">
              Group Developed Projects
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {GROUP_DEVELOPED_PROJECTS.map((project) => (
                <li key={project.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate("project-detail", project.slug);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="rounded-full border border-[#E9E5DC] bg-white px-4 py-2 text-sm text-[#234C3B] transition-colors hover:border-[#356B4D] hover:bg-[#F7F6F0] cursor-pointer"
                  >
                    {project.name}
                    {project.nameHindi && (
                      <span className="ml-2 text-[#292D2A]/65">
                        {project.nameHindi}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
      </section>

      {/* =========================================================================
       B. A concise introduction to Vrajraj Developers
       ========================================================================= */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-7 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-sm bg-[#E9E5DC]">
            <div className="aspect-[16/10]">
              <img
                src="/assets/images/hero_vrajraj_garden_1792732219280.jpg"
                alt="Representative landscaped property image, not confirmed project photography"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 lg:py-4">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#66804B]">
              About Vrajraj
            </span>
            <h2 className="font-heading text-2xl font-semibold leading-tight tracking-tight text-[#234C3B] sm:text-3xl lg:text-4xl">
              Thoughtfully planned. Built for the way people live.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-[#292D2A]/80 sm:text-base">
              We aim to bring considered planning and clear communication to
              the projects we develop in Khargone, Madhya Pradesh. Ask our team
              for verified information about each project.
            </p>
            <button
              onClick={() => {
                onNavigate("about");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 pt-1 text-sm font-semibold text-[#234C3B] transition-colors hover:text-[#66804B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#356B4D]"
            >
              Discover our story
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>
      
      {/* =========================================================================
       F. Our Approach / Why Vrajraj (4 Concise Themes)
       ========================================================================= */}
      <section className="border-y border-[#E9E5DC] bg-[#E9E5DC]/50 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block mb-1">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#234C3B]">
              The Vrajraj Approach
            </h2>
            <p className="text-sm sm:text-base text-[#292D2A]/80 mt-3 leading-relaxed">
              Every foundation we lay reflects four fundamental values that
              ensure long-term peace of mind for our buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {/* Theme 1 */}
            <div
              className="approach-card group relative overflow-hidden bg-white p-5 rounded-xs border border-[#E9E5DC] shadow-xs space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9CBB4] hover:shadow-lg"
              style={{ "--approach-delay": "0ms" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#DCE5D9]/70 text-[#234C3B] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#234C3B] group-hover:text-white">
                <Compass className="w-5 h-5 text-[#356B4D] transition-colors group-hover:text-white" />
              </div>
              <h3 className="text-base font-bold text-[#234C3B] transition-colors duration-300 group-hover:text-[#66804B]">
                Thoughtful Planning
              </h3>
              <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
                Floor plans engineered for optimal cross-ventilation, daylight
                penetration, and efficient carpet-to-super-built ratios.
              </p>
            </div>

            {/* Theme 2 */}
            <div
              className="approach-card group relative overflow-hidden bg-white p-5 rounded-xs border border-[#E9E5DC] shadow-xs space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9CBB4] hover:shadow-lg"
              style={{ "--approach-delay": "100ms" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#DCE5D9]/70 text-[#234C3B] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#234C3B] group-hover:text-white">
                <Hammer className="w-5 h-5 text-[#356B4D] transition-colors group-hover:text-white" />
              </div>
              <h3 className="text-base font-bold text-[#234C3B] transition-colors duration-300 group-hover:text-[#66804B]">
                Quality Construction
              </h3>
              <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
                Tested grade cement, seismic-compliant reinforced steel, and
                branded fixtures for long-term structural durability.
              </p>
            </div>

            {/* Theme 3 */}
            <div
              className="approach-card group relative overflow-hidden bg-white p-5 rounded-xs border border-[#E9E5DC] shadow-xs space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9CBB4] hover:shadow-lg"
              style={{ "--approach-delay": "200ms" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#DCE5D9]/70 text-[#234C3B] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#234C3B] group-hover:text-white">
                <ShieldCheck className="w-5 h-5 text-[#356B4D] transition-colors group-hover:text-white" />
              </div>
              <h3 className="text-base font-bold text-[#234C3B] transition-colors duration-300 group-hover:text-[#66804B]">
                Customer Transparency
              </h3>
              <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
                Project-specific title records and applicable Madhya Pradesh
                approvals are to be verified before purchase.
              </p>
            </div>

            {/* Theme 4 */}
            <div
              className="approach-card group relative overflow-hidden bg-white p-5 rounded-xs border border-[#E9E5DC] shadow-xs space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#B9CBB4] hover:shadow-lg"
              style={{ "--approach-delay": "300ms" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-[#DCE5D9]/70 text-[#234C3B] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#234C3B] group-hover:text-white">
                <TrendingUp className="w-5 h-5 text-[#356B4D] transition-colors group-hover:text-white" />
              </div>
              <h3 className="text-base font-bold text-[#234C3B] transition-colors duration-300 group-hover:text-[#66804B]">
                Long-Term Value
              </h3>
              <p className="text-xs sm:text-sm text-[#292D2A]/80 leading-relaxed">
                Developments situated strategically along emerging
                infrastructure hubs for steady capital appreciation and
                community livability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
       G. Director's Message Preview
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="bg-white rounded-xs border border-[#E9E5DC] p-5 sm:p-7 lg:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Director Portrait */}
            <div className="lg:col-span-5">
              <div className="aspect-3/4 max-w-sm mx-auto overflow-hidden rounded-xs border border-[#E9E5DC] bg-[#E9E5DC]">
                <img
                  src={COMPANY_DETAILS.director.photo}
                  alt={COMPANY_DETAILS.director.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Editorial Quote & Preview */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block">
                Leadership
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#234C3B]">
                A Message from Our Director
              </h2>

              <blockquote className="text-base sm:text-lg text-[#292D2A]/90 italic leading-relaxed border-l-2 border-[#B69A64] pl-4">
                "Real estate in India is never just about concrete blocks or
                architectural drawings. It is where lifetime dreams reside. When
                a family chooses Vrajraj, we take on a solemn responsibility: to
                deliver with unyielding honesty, on-schedule timelines, and
                enduring craftsmanship."
              </blockquote>

              <div className="pt-2">
                <h4 className="text-base font-bold text-[#234C3B]">
                  {COMPANY_DETAILS.director.name}
                </h4>
                <p className="text-xs text-[#292D2A]/70 uppercase tracking-wider">
                  {COMPANY_DETAILS.director.title}
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    onNavigate("directors-desk");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#234C3B] hover:bg-[#356B4D] rounded-sm transition-colors cursor-pointer"
                >
                  <span>Read the Director's Full Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
       H. Project Enquiry Call to Action (Muted Sage / Deep Green Banner)
       ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="bg-[#234C3B] text-white rounded-xs p-6 sm:p-8 lg:p-10 border border-[#1a382b] relative overflow-hidden shadow-sm">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B69A64] font-semibold block">
              Direct Property Consultation
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Looking for the Right Property?
            </h2>
            <p className="text-sm sm:text-base text-[#DCE5D9] leading-relaxed max-w-2xl font-light">
              Tell us what you are looking for, and our team will share
              confirmed information about our listed projects.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  onNavigate("projects");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide text-[#234C3B] bg-white hover:bg-[#F7F6F0] rounded-sm transition-colors cursor-pointer shadow-sm"
              >
                <Building className="w-4 h-4" />
                <span>Explore Projects</span>
              </button>

              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#356B4D] hover:bg-[#B69A64] hover:text-[#292D2A] rounded-sm transition-colors cursor-pointer"
              >
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export { HomePage };
