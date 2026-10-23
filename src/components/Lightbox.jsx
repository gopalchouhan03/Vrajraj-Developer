import { useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
const Lightbox = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  projectTitle,
}) => {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const containerRef = useRef(null);
  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    onIndexChange((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onIndexChange]);
  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onIndexChange]);
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleNext, handlePrev, onClose]);
  if (!isOpen || images.length === 0) return null;
  const currentImage = images[currentIndex] || images[0];
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery fullscreen viewer"
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[#141715]/95 backdrop-blur-md flex flex-col justify-between select-none animate-fadeIn"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar */}
      <div className="w-full px-4 sm:px-8 py-4 flex items-center justify-between border-b border-white/10 z-10 text-white">
        <div className="flex items-center gap-3">
          <span className="text-sm sm:text-base font-semibold text-[#DCE5D9]">
            {projectTitle}
          </span>
          <span className="text-white/40">/</span>
          <span className="text-xs sm:text-sm text-[#B69A64] font-mono tabular-nums">
            {currentIndex + 1} of {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Close fullscreen gallery (Esc)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 min-h-0">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-3 sm:left-6 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Previous image (Left Arrow)"
        >
          <ChevronLeft className="w-7 h-7 sm:w-9 sm:h-9" />
        </button>

        {/* Current Photograph */}
        <div className="max-w-5xl max-h-full flex flex-col items-center justify-center">
          <img
            key={currentImage.url}
            src={currentImage.url}
            alt={
              currentImage.caption ||
              `Photograph ${currentIndex + 1} of ${projectTitle}`
            }
            referrerPolicy="no-referrer"
            className="max-h-[68vh] sm:max-h-[72vh] max-w-full object-contain rounded-xs shadow-2xl transition-opacity duration-200"
          />
          {currentImage.caption && (
            <div className="mt-3 text-center px-4 max-w-2xl">
              <p className="text-xs sm:text-sm text-[#DCE5D9]/90 font-medium">
                {currentImage.caption}
              </p>
              {currentImage.category && (
                <span className="text-[11px] text-[#B69A64] uppercase tracking-wider mt-0.5 inline-block">
                  {currentImage.category}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-3 sm:right-6 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Next image (Right Arrow)"
        >
          <ChevronRight className="w-7 h-7 sm:w-9 sm:h-9" />
        </button>
      </div>

      {/* Bottom Thumbnails Strip */}
      <div className="w-full px-4 py-3 bg-[#1B201D]/90 border-t border-white/10 overflow-x-auto">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-3">
          {images.map((img, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => onIndexChange(idx)}
                className={`relative shrink-0 w-14 h-11 sm:w-20 sm:h-14 rounded-xs overflow-hidden transition-all duration-150 cursor-pointer ${isSelected ? "ring-2 ring-[#B69A64] opacity-100 scale-105" : "opacity-50 hover:opacity-85"}`}
                aria-label={`Jump to image ${idx + 1}`}
              >
                <img
                  src={img.url}
                  alt={`Thumbnail ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export { Lightbox };
