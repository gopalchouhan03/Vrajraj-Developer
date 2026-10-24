import { useState, useMemo } from "react";
import {
  MapPin,
  ArrowRight,
  Search,
  Building2,
  RotateCcw,
} from "lucide-react";
import {
  GROUP_DEVELOPED_PROJECTS,
  PROJECTS_DATA,
} from "../data/projectsData";
import { ImageWithSkeleton } from "../components/ImageWithSkeleton";
const ProjectsPage = ({ onNavigate, onOpenEnquiry }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const categories = ["All", "Residential", "Group Developed"];
  const statuses = ["All", "Details on request"];

  const combinedProjects = [...PROJECTS_DATA, ...GROUP_DEVELOPED_PROJECTS];

  const filteredProjects = useMemo(() => {
    return combinedProjects.filter((project) => {
      const category = project.category || "Residential";
      const status = project.status || "Details on request";

      if (selectedCategory !== "All" && category !== selectedCategory) {
        return false;
      }

      if (selectedStatus !== "All" && status !== selectedStatus) {
        return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName =
          project.name.toLowerCase().includes(query) ||
          (project.nameHindi || "").toLowerCase().includes(query);
        const matchesLocation = (project.location || "").toLowerCase().includes(query);
        const matchesCity = (project.city || "").toLowerCase().includes(query);
        const matchesOverview = (project.overview || "").toLowerCase().includes(query);
        return matchesName || matchesLocation || matchesCity || matchesOverview;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSelectedStatus("All");
    setSearchQuery("");
  };
  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#E9E5DC] pb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D] block mb-2">
            Real Estate Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#234C3B]">
            Our Projects
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#292D2A]/80 max-w-2xl leading-relaxed">
            Explore Vrajraj Developers' projects in Khargone, Madhya Pradesh.
            Site details, project status, and specifications are available on
            request.
          </p>
        </div>
      </section>

      {/* Project Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-5 sm:p-6 rounded-xs border border-[#E9E5DC] shadow-xs space-y-5">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#292D2A]/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by project name, location (e.g. Bodakdev, Shela)..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#F7F6F0]/60 border border-[#E9E5DC] rounded-xs focus:outline-none focus:ring-1 focus:ring-[#356B4D] focus:border-[#356B4D] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-xs text-[#292D2A]/60 hover:text-[#234C3B]"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center justify-between md:justify-end gap-4 text-xs text-[#292D2A]/70">
              <span className="tabular-nums font-medium">
                Showing {filteredProjects.length} of {combinedProjects.length} projects
              </span>
              {(selectedCategory !== "All" ||
                selectedStatus !== "All" ||
                searchQuery) && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-[#234C3B] font-semibold hover:underline cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-[#E9E5DC] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-[#292D2A]/70 mr-1 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-[#356B4D]" />
                Category:
              </span>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer whitespace-nowrap ${isSelected ? "bg-[#234C3B] text-white shadow-xs" : "bg-[#F7F6F0] text-[#292D2A]/85 hover:bg-[#E9E5DC]"}`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-[#292D2A]/70 mr-1 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-[#356B4D]" />
                Status:
              </span>
              {statuses.map((stat) => {
                const isSelected = selectedStatus === stat;
                return (
                  <button
                    key={stat}
                    onClick={() => setSelectedStatus(stat)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer whitespace-nowrap ${isSelected ? "bg-[#356B4D] text-white shadow-xs" : "bg-[#F7F6F0] text-[#292D2A]/85 hover:bg-[#E9E5DC]"}`}
                  >
                    {stat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-xs border border-[#E9E5DC] p-12 text-center space-y-4 max-w-lg mx-auto">
            <Building2 className="w-10 h-10 text-[#356B4D]/60 mx-auto" />
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#234C3B]">
                No Developments Found
              </h3>
              <p className="text-xs sm:text-sm text-[#292D2A]/75 leading-relaxed">
                We could not find any projects matching your current filter
                criteria.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#234C3B] rounded-xs hover:bg-[#356B4D] transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        ) : (
          /* Listing Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xs border border-[#E9E5DC] overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Project Cover Image */}
                  <div className="relative aspect-16/10 overflow-hidden bg-[#E9E5DC]">
                    <ImageWithSkeleton
                      src={project.coverImage}
                      alt={`Representative image, not confirmed project photography, for ${project.name}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      containerClassName="absolute inset-0"
                    />

                    <div className="absolute bottom-3 left-3 rounded-xs bg-[#234C3B]/90 px-3 py-1 text-xs font-medium text-white">
                      Representative image
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-3.5">
                    {/* Clean unboxed metadata with bullet separator */}
                    <div className="flex items-center gap-2 text-xs text-[#292D2A]/70">
                      <span className="flex items-center gap-1 font-medium text-[#234C3B]">
                        <MapPin className="w-3.5 h-3.5 text-[#356B4D]" />
                        {project.city}, {project.state}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#234C3B] group-hover:text-[#356B4D] transition-colors">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm text-[#292D2A]/70">
                        {project.nameHindi}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#292D2A]/85 line-clamp-2 leading-relaxed">
                      {project.overview}
                    </p>

                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-[#E9E5DC]/60 flex items-center justify-between gap-4">
                  <button
                    onClick={() => onOpenEnquiry(project.name)}
                    className="text-xs font-semibold text-[#356B4D] hover:text-[#234C3B] hover:underline cursor-pointer"
                  >
                    Request Project Details
                  </button>

                  <button
                    onClick={() => {
                      onNavigate("project-detail", project.slug);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#234C3B] hover:bg-[#356B4D] rounded-xs transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-labelledby="group-developed-projects"
      >
        <div className="border-t border-[#E9E5DC] pt-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#356B4D]">
            Separately listed portfolio
          </span>
          <h2
            id="group-developed-projects"
            className="mt-1 text-2xl font-bold tracking-tight text-[#234C3B] sm:text-3xl"
          >
            Group Developed Projects
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {GROUP_DEVELOPED_PROJECTS.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => {
                  onNavigate("project-detail", project.slug);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="rounded-xs border border-[#E9E5DC] bg-white px-5 py-4 text-left transition-colors hover:border-[#356B4D] hover:bg-[#F7F6F0] cursor-pointer"
              >
                <h3 className="font-semibold text-[#234C3B]">{project.name}</h3>
                {project.nameHindi && (
                  <p className="mt-1 text-sm text-[#292D2A]/70">
                    {project.nameHindi}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Assistance Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E9E5DC]/50 border border-[#E9E5DC] rounded-xs p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-base font-bold text-[#234C3B]">
              Need more information about a project?
            </h4>
            <p className="text-xs text-[#292D2A]/80">
              Contact our team for confirmed project details and availability.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry()}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#234C3B] hover:bg-[#356B4D] rounded-xs transition-colors cursor-pointer shrink-0"
          >
            Request Project Information
          </button>
        </div>
      </section>
    </div>
  );
};
export { ProjectsPage };
