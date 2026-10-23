import { useState } from "react";
import { MapPin, Navigation, ExternalLink, Plus, Minus } from "lucide-react";
const InteractiveMap = ({
  name,
  address,
  city,
  state,
  pincode,
  coordinates,
  landmarks,
}) => {
  const [zoomLevel, setZoomLevel] = useState(15);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;
  const connectivityItems = landmarks ?? [
    { name: "SG Highway Commercial Corridor", distance: "1.2 km \xB7 4 mins" },
    {
      name: "Sindhu Bhavan Social & Dining District",
      distance: "800 m \xB7 2 mins",
    },
    {
      name: "Zydus / Shalby Multi-Specialty Hospital",
      distance: "3.5 km \xB7 8 mins",
    },
    { name: "SP Ring Road Western Junction", distance: "4.0 km \xB7 9 mins" },
    {
      name: "Ahmedabad International Airport (SVPIA)",
      distance: "19 km \xB7 35 mins",
    },
  ];
  return (
    <div className="bg-white rounded-sm border border-[#E9E5DC] overflow-hidden shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Map Visual Frame */}
        <div className="lg:col-span-7 relative h-72 sm:h-96 bg-[#E9E5DC] overflow-hidden">
          {/* Interactive OpenStreetMap Embed Frame */}
          <iframe
            title={`Location map of ${name}`}
            className="w-full h-full border-0 filter saturate-90"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${coordinates.lng - 0.015 / (zoomLevel / 14)}%2C${coordinates.lat - 0.01 / (zoomLevel / 14)}%2C${coordinates.lng + 0.015 / (zoomLevel / 14)}%2C${coordinates.lat + 0.01 / (zoomLevel / 14)}&layer=mapnik&marker=${coordinates.lat}%2C${coordinates.lng}`}
            loading="lazy"
          />

          {/* Map Controls */}
          <div className="absolute top-3 right-3 flex flex-col gap-1 bg-white/95 rounded-xs shadow-md border border-[#E9E5DC]">
            <button
              onClick={() => setZoomLevel((z) => Math.min(z + 1, 18))}
              className="p-2 text-[#292D2A] hover:text-[#234C3B] hover:bg-[#F7F6F0] transition-colors"
              title="Zoom in"
              aria-label="Zoom in"
            >
              <Plus className="w-4 h-4" />
            </button>
            <div className="h-px bg-[#E9E5DC]" />
            <button
              onClick={() => setZoomLevel((z) => Math.max(z - 1, 12))}
              className="p-2 text-[#292D2A] hover:text-[#234C3B] hover:bg-[#F7F6F0] transition-colors"
              title="Zoom out"
              aria-label="Zoom out"
            >
              <Minus className="w-4 h-4" />
            </button>
          </div>

          {/* Location Badge */}
          <div className="absolute bottom-3 left-3 bg-[#234C3B]/90 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-xs flex items-center gap-1.5 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#B69A64]" />
            <span className="font-medium">{name}</span>
          </div>
        </div>

        {/* Address and Landmarks Info */}
        <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between bg-[#F7F6F0]/40">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#356B4D] block mb-1">
              Project Location
            </span>
            <h4 className="text-lg font-bold text-[#234C3B] mb-2">{name}</h4>
            <p className="text-xs sm:text-sm text-[#292D2A]/85 leading-relaxed mb-4">
              {address}, {city}, {state} – {pincode}
            </p>

            {connectivityItems.length > 0 && (
              <div className="pt-2 border-t border-[#E9E5DC]">
                <span className="text-xs font-semibold text-[#292D2A] block mb-2.5">
                  Neighborhood & Connectivity
                </span>
                <ul className="space-y-2">
                  {connectivityItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between text-xs text-[#292D2A]/80 border-b border-[#E9E5DC]/50 pb-1.5 last:border-none"
                    >
                      <span className="truncate pr-2">{item.name}</span>
                      <span className="text-[#356B4D] font-medium shrink-0 tabular-nums">
                        {item.distance}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="pt-6 mt-4 border-t border-[#E9E5DC]">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#234C3B] hover:bg-[#356B4D] rounded-sm transition-colors shadow-xs"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Turn-by-Turn Directions</span>
              <ExternalLink className="w-3 h-3 opacity-70 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export { InteractiveMap };
