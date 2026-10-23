/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { lazy, Suspense, useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { EnquiryModal } from "./components/EnquiryModal";
import { PROJECTS_DATA } from "./data/projectsData";

const HomePage = lazy(() =>
  import("./pages/HomePage.jsx").then(({ HomePage }) => ({
    default: HomePage,
  })),
);
const DirectorPage = lazy(() =>
  import("./pages/DirectorPage.jsx").then(({ DirectorPage }) => ({
    default: DirectorPage,
  })),
);
const AboutPage = lazy(() =>
  import("./pages/AboutPage.jsx").then(({ AboutPage }) => ({
    default: AboutPage,
  })),
);
const ProjectsPage = lazy(() =>
  import("./pages/ProjectsPage.jsx").then(({ ProjectsPage }) => ({
    default: ProjectsPage,
  })),
);
const ProjectDetailsPage = lazy(() =>
  import("./pages/ProjectDetailsPage.jsx").then(({ ProjectDetailsPage }) => ({
    default: ProjectDetailsPage,
  })),
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage.jsx").then(({ ContactPage }) => ({
    default: ContactPage,
  })),
);

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentProjectSlug, setCurrentProjectSlug] = useState(
    PROJECTS_DATA[0].slug,
  );
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryProjectContext, setEnquiryProjectContext] = useState();
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace("#", "").trim();
      if (!hash || hash === "home") {
        setCurrentPage("home");
      } else if (hash.startsWith("project/")) {
        const slug = hash.replace("project/", "");
        const exists = PROJECTS_DATA.find((p) => p.slug === slug);
        if (exists) {
          setCurrentPage("project-detail");
          setCurrentProjectSlug(slug);
        } else {
          setCurrentPage("projects");
        }
      } else if (
        ["directors-desk", "about", "projects", "contact"].includes(hash)
      ) {
        setCurrentPage(hash);
      }
    };
    parseHash();
    window.addEventListener("hashchange", parseHash);
    return () => window.removeEventListener("hashchange", parseHash);
  }, []);
  const handleNavigate = (page, projectSlug) => {
    setCurrentPage(page);
    if (projectSlug) {
      setCurrentProjectSlug(projectSlug);
      window.location.hash = `project/${projectSlug}`;
    } else {
      window.location.hash = page === "home" ? "" : page;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleOpenEnquiry = (projectName) => {
    setEnquiryProjectContext(projectName);
    setIsEnquiryModalOpen(true);
  };
  const currentProject =
    PROJECTS_DATA.find((p) => p.slug === currentProjectSlug) ||
    PROJECTS_DATA[0];
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F0] text-[#292D2A]">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Page Stage */}
      <main className="flex-1">
        <Suspense
          fallback={
            <div
              className="flex min-h-[50vh] items-center justify-center"
              role="status"
            >
              Loading page...
            </div>
          }
        >
          {currentPage === "home" && (
            <HomePage
              onNavigate={handleNavigate}
              onOpenEnquiry={handleOpenEnquiry}
            />
          )}

          {currentPage === "directors-desk" && (
            <DirectorPage
              onNavigate={handleNavigate}
              onOpenEnquiry={() => handleOpenEnquiry()}
            />
          )}

          {currentPage === "about" && (
            <AboutPage
              onNavigate={handleNavigate}
              onOpenEnquiry={() => handleOpenEnquiry()}
            />
          )}

          {currentPage === "projects" && (
            <ProjectsPage
              onNavigate={handleNavigate}
              onOpenEnquiry={handleOpenEnquiry}
            />
          )}

          {currentPage === "project-detail" && (
            <ProjectDetailsPage
              project={currentProject}
              onNavigate={handleNavigate}
              onOpenEnquiry={handleOpenEnquiry}
            />
          )}

          {currentPage === "contact" && (
            <ContactPage onNavigate={handleNavigate} />
          )}
        </Suspense>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Global Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultProjectName={enquiryProjectContext}
      />
    </div>
  );
}
export { App as default };
