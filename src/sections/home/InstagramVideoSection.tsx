import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

type VideoItem = {
  id: number;
  thumbnail: string;
  url: string;
  title?: string;
};

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
};

const SkeletonLoader = () => (
  <div className="relative mx-auto max-w-6xl px-4 p-6">
    <div className="mb-8">
      <div className="w-48 h-8 mx-auto bg-gray-700 rounded animate-pulse mb-3" />
      <div className="w-24 h-1 mx-auto rounded-full bg-gray-700 animate-pulse" />
    </div>
    <div className="relative h-[520px] w-full overflow-hidden rounded-xl bg-[#111829]">
      <div className="flex items-center justify-center h-full gap-4 px-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg animate-pulse"
            style={{
              width: i === 2 ? "280px" : "200px",
              height: i === 2 ? "420px" : "320px",
              opacity: i === 2 ? 1 : 0.6,
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-6 left-0 w-full text-center">
        <p className="text-gray-500 text-sm animate-pulse">Loading videos...</p>
      </div>
    </div>
  </div>
);

const EmptyState = () => (
  <div className="relative mx-auto max-w-6xl px-4 p-6">
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-center mb-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
        Our Instagram
      </h2>
      <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" />
    </div>
    <div className="relative h-[320px] w-full flex flex-col items-center justify-center rounded-xl bg-[#111829] text-gray-400 gap-4 border border-gray-800/50">
      <div className="text-5xl">📷</div>
      <p className="text-xl font-medium">Follow us on Instagram</p>
      <a
        href="https://www.instagram.com/braiinybearorg/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full font-semibold hover:scale-105 transition-transform"
      >
        @braiinybearorg
      </a>
    </div>
  </div>
);

const ErrorState = ({ onRetry }: { onRetry?: () => void }) => (
  <div className="relative mx-auto max-w-6xl px-4 p-6">
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-center mb-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
        Our Instagram
      </h2>
      <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" />
    </div>
    <div className="relative h-[320px] w-full flex flex-col items-center justify-center rounded-xl bg-[#111829] text-gray-400 gap-4 border border-gray-800/50">
      <p className="text-xl">Failed to load videos</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
        >
          Try Again
        </button>
      )}
    </div>
  </div>
);

const PaginationDots = ({
  total,
  current,
  onDotClick,
}: {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}) => {
  const maxDots = 12;
  const shown = Math.min(total, maxDots);
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {Array.from({ length: shown }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={`rounded-full transition-all duration-300 ${
            i === current
              ? "w-8 h-2.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-lg shadow-pink-500/30"
              : "w-2.5 h-2.5 bg-gray-600 hover:bg-gray-400"
          }`}
          aria-label={`Go to video ${i + 1}`}
        />
      ))}
    </div>
  );
};

interface InstagramVideoCarouselProps {
  videos: VideoItem[];
  isLoading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

const InstagramVideoCarousel = ({
  videos,
  isLoading,
  error,
  onRetry,
}: InstagramVideoCarouselProps) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const videoCount = videos?.length || 0;
  const maxVisible = isMobile ? 1 : isTablet ? 3 : 5;
  const buffer = Math.floor(maxVisible / 2);
  const containerHeight = isMobile ? 480 : isTablet ? 460 : 540;

  const prevIdsRef = useRef(new Set<number>());

  const visibleItems = videoCount > 0
    ? Array.from({ length: maxVisible }, (_, i) => {
        const offset = i - buffer;
        const index = (currentIndex + offset + videoCount) % videoCount;
        return { ...videos[index], positionOffset: offset };
      })
    : [];

  const goNext = useCallback(() => {
    if (videoCount === 0) return;
    setCurrentIndex((prev) => (prev + 1) % videoCount);
    setVideoFailed(false);
  }, [videoCount]);

  const goPrev = useCallback(() => {
    if (videoCount === 0) return;
    setCurrentIndex((prev) => (prev - 1 + videoCount) % videoCount);
    setVideoFailed(false);
  }, [videoCount]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  useEffect(() => {
    prevIdsRef.current = new Set(visibleItems.filter(v => v.id != null).map(v => v.id));
  });

  useEffect(() => {
    if (isHovered || videoCount === 0) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [isHovered, videoCount, goNext]);

  useEffect(() => {
    if (videoRef.current) {
      setVideoFailed(false);
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
      setProgress(0);
    }
  }, [currentIndex]);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress(
        (videoRef.current.currentTime / videoRef.current.duration) * 100
      );
    }
  };

  const handleVideoError = () => {
    setVideoFailed(true);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  if (isLoading) return <SkeletonLoader />;
  if (error) return <ErrorState onRetry={onRetry} />;
  if (!videos || videos.length === 0) return <EmptyState />;

  const getAnimateTarget = (offset: number) => {
    if (isMobile) {
      return {
        left: '50%',
        opacity: offset === 0 ? 1 : 0,
        zIndex: offset === 0 ? 2 : 0,
        height: 400,
        width: (9 / 16) * 400,
        filter: 'blur(0px)',
      };
    }
    if (isTablet) {
      switch (offset) {
        case -1: return { left: '25%', opacity: 0.7, zIndex: 1, height: 300, width: (9 / 16) * 300, filter: 'blur(0.5px)' };
        case 0: return { left: '50%', opacity: 1, zIndex: 2, height: 400, width: (9 / 16) * 400, filter: 'blur(0px)' };
        case 1: return { left: '75%', opacity: 0.7, zIndex: 1, height: 300, width: (9 / 16) * 300, filter: 'blur(0.5px)' };
        default: return { left: '50%', opacity: 0, zIndex: 0, height: 300, width: (9 / 16) * 300, filter: 'blur(0px)' };
      }
    }
    switch (offset) {
      case -2: return { left: '15%', opacity: 0.4, zIndex: 0, height: 260, width: (9 / 16) * 260, filter: 'blur(1.5px)' };
      case -1: return { left: '32%', opacity: 0.8, zIndex: 1, height: 320, width: (9 / 16) * 320, filter: 'blur(0.5px)' };
      case 0: return { left: '50%', opacity: 1, zIndex: 2, height: 440, width: (9 / 16) * 440, filter: 'blur(0px)' };
      case 1: return { left: '68%', opacity: 0.8, zIndex: 1, height: 320, width: (9 / 16) * 320, filter: 'blur(0.5px)' };
      case 2: return { left: '85%', opacity: 0.4, zIndex: 0, height: 260, width: (9 / 16) * 260, filter: 'blur(1.5px)' };
      default: return { left: '50%', opacity: 1, zIndex: 2, height: 440, width: (9 / 16) * 440, filter: 'blur(0px)' };
    }
  };

  const springTransition = {
    left: { type: "spring" as const, stiffness: 280, damping: 28, mass: 0.9 },
    opacity: { duration: 0.35, ease: "easeInOut" },
    scale: { type: "spring" as const, stiffness: 280, damping: 28, mass: 0.9 },
    height: { type: "spring" as const, stiffness: 280, damping: 28, mass: 0.9 },
    width: { type: "spring" as const, stiffness: 280, damping: 28, mass: 0.9 },
    filter: { duration: 0.3 },
    zIndex: { duration: 0 },
  };

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          Our Instagram
        </h2>
        <div className="mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" />
      </div>

      <div
        className="relative w-full overflow-hidden rounded-2xl shadow-gray-800/50 shadow-2xl bg-[#0d1117] border border-gray-800/50"
        style={{ height: `${containerHeight}px` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label="Instagram video carousel"
        tabIndex={0}
      >
        {visibleItems.map((video) => {
          const offset = video.positionOffset;
          const isCenter = offset === 0;
          const target = getAnimateTarget(offset);
          const isNew = !prevIdsRef.current.has(video.id);
          const isFirstRender = prevIdsRef.current.size === 0;

          const initialPos = isFirstRender || !isNew
            ? undefined
            : {
                left: offset > 0 ? '140%' : '-40%',
                opacity: 0,
                scale: 0.8,
                filter: 'blur(4px)',
              };

          return (
            <motion.div
              key={video.id}
              initial={initialPos}
              animate={target}
              transition={springTransition}
              style={{
                position: "absolute",
                top: "50%",
                y: "-50%",
                x: "-50%",
                borderRadius: "15px",
                cursor: "pointer",
                userSelect: "none",
                backgroundColor: "#000",
                overflow: "hidden",
              }}
              className="shadow-lg shadow-black/30 group"
            >
              {isCenter && video.url && !videoFailed ? (
                <>
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-[15px]"
                    autoPlay
                    muted
                    playsInline
                    onEnded={goNext}
                    onTimeUpdate={handleTimeUpdate}
                    onError={handleVideoError}
                    preload="metadata"
                    loop={false}
                  >
                    <source
                      src={`${video.url}?tr=f-webm,q-70,w-480`}
                      type="video/webm"
                    />
                    <source
                      src={`${video.url}?tr=q-65,w-480`}
                      type="video/mp4"
                    />
                  </video>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {!isPlaying && (
                      <button
                        onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors backdrop-blur-sm"
                        aria-label="Play video"
                      >
                        <Play size={28} fill="white" />
                      </button>
                    )}
                  </div>

                  {isPlaying && (
                    <button
                      onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                      className="absolute top-3 left-3 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                      aria-label="Pause video"
                    >
                      <Pause size={16} fill="white" />
                    </button>
                  )}

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-600/50">
                    <div
                      className="h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transition-all duration-200 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {video.title && (
                    <div className="absolute bottom-4 left-0 w-full px-4">
                      <p className="text-white text-sm font-medium drop-shadow-lg truncate">
                        {video.title}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {video.thumbnail ? (
                    <img
                      src={
                        video.thumbnail.includes("imagekit.io")
                          ? `${video.thumbnail}?tr=w-320,h-568,q-70,f-auto`
                          : video.thumbnail
                      }
                      alt={video.title ?? "Video thumbnail"}
                      className="w-full h-full object-cover rounded-[15px]"
                      draggable={false}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-800 rounded-[15px] font-medium">
                      No Thumbnail
                    </div>
                  )}
                  {video.title && (
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3 rounded-b-[15px]">
                      <p className="text-white text-xs font-medium truncate">
                        {video.title}
                      </p>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          );
        })}

        {maxVisible >= 3 && (
          <>
            <button
              onClick={goPrev}
              className={`absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black ${
                isMobile || isHovered ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Previous video"
            >
              ◀
            </button>
            <button
              onClick={goNext}
              className={`absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black ${
                isMobile || isHovered ? "opacity-100" : "opacity-0"
              }`}
              aria-label="Next video"
            >
              ▶
            </button>
          </>
        )}
      </div>

      <PaginationDots
        total={videoCount}
        current={currentIndex}
        onDotClick={(i) => {
          setCurrentIndex(i);
          setVideoFailed(false);
        }}
      />

      <div className="text-center mt-4">
        <a
          href="https://www.instagram.com/braiinybearorg/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors text-sm group"
        >
          <span>Follow us</span>
          <span className="font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:via-red-400 group-hover:to-yellow-400">
            @braiinybearorg
          </span>
          <span>on Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default InstagramVideoCarousel;
