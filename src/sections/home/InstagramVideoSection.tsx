import React, { useState, useRef, useEffect } from "react";

type VideoItem = {
  id: number;
  thumbnail: string;
  url: string;
  title?: string;
};

const videos: VideoItem[] = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1744231413143-67086a79977b?w=500&auto=format&fit=crop&q=60",
    url: "/videos/drug .mp4",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1751575004372-2eeba67e52e5?w=500&auto=format&fit=crop&q=60",
    url: "/videos//Agriculture.mp4",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1752035680950-79d735be5499?w=500&auto=format&fit=crop&q=60",
    url: "/videos//eaducation .mp4",
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1751528962027-ac9f0370ff5d?w=500&auto=format&fit=crop&q=60",
    url: "/videos//enviroment .mp4",
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1753622118655-136a65245d89?w=500&auto=format&fit=crop&q=60",
    url: "/videos/old-.mp4",
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1753622118655-136a65245d89?w=500&auto=format&fit=crop&q=60",
    url: "/videos/old-2.mp4",
  },
];

const getReelSize = (height: number) => ({
  height: `${height}px`,
  width: `${(9 / 16) * height}px`,
});

const getBaseStyle = (): React.CSSProperties => ({
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "15px",
  transition: "transform 0.4s ease, opacity 0.4s ease",
  cursor: "pointer",
  userSelect: "none",
  objectFit: "cover",
  backgroundColor: "#000",
});

const stylesByOffset: Record<number, React.CSSProperties> = {
  [-2]: { left: "15%", opacity: 0.4, zIndex: 0, ...getReelSize(280) },
  [-1]: { left: "30%", opacity: 0.8, zIndex: 1, ...getReelSize(320) },
  [0]: {
    left: "50%",
    opacity: 1,
    zIndex: 2,
    ...getReelSize(420),
    boxShadow: "-2px 5px 33px 6px rgba(0,0,0,0.35)",
  },
  [1]: { left: "70%", opacity: 0.8, zIndex: 1, ...getReelSize(320) },
  [2]: { left: "85%", opacity: 0.4, zIndex: 0, ...getReelSize(280) },
};

const InstagramVideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoCount = videos.length;
  const maxVisible = Math.min(5, videoCount);
  const buffer = Math.floor(maxVisible / 2);

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % videoCount);
  };

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + videoCount) % videoCount);
  };

  useEffect(() => {
    const centerVideo = videos[currentIndex];
    if (!centerVideo.url) {
      const timer = setTimeout(() => {
        handleNext();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  const getVisibleItems = () => {
    const items = [];
    for (let offset = -buffer; offset <= buffer; offset++) {
      const index = (currentIndex + offset + videoCount) % videoCount;
      items.push({ ...videos[index], positionOffset: offset });
    }
    return items;
  };

  const adjustTransform = (offset: number) => {
    const shift = 20;
    if (offset === -1) {
      return direction === "next"
        ? `translate(calc(-50% - ${shift}px), -50%)`
        : `translate(calc(-50% + ${shift}px), -50%)`;
    }
    if (offset === 1) {
      return direction === "next"
        ? `translate(calc(-50% + ${shift}px), -50%)`
        : `translate(calc(-50% - ${shift}px), -50%)`;
    }
    return "translate(-50%, -50%)";
  };

  return (
    <div className="relative mx-auto max-w-6xl px-4 p-6 scale-104">
      <div className="titleContainer mb-8">
        <h2 className="text-3xl font-bold text-center mb-3">Our Instagram</h2>
        <div className="mx-auto mb-12 w-24 h-1 rounded-full bg-gradient-to-r from-[var(--primary-main)] to-blue-500"></div>
      </div>
      <div
        className="relative h-[520px] w-full overflow-hidden rounded-xl shadow-gray-500 shadow-lg bg-[#111829]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {getVisibleItems().map((video) => {
          const style = {
            ...getBaseStyle(),
            ...stylesByOffset[video.positionOffset],
            transform: adjustTransform(video.positionOffset),
          };

          const titleOverlay = video?.title ? (
            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-4 rounded-b-lg">
              <h3 className="text-lg font-semibold">{video.title}</h3>
            </div>
          ) : null;

          if (video.positionOffset === 0 && video.url) {
            return (
              <div key={video.id} style={style} className="relative overflow-hidden">
                <video
                  ref={videoRef}
                  src={video.url}
                  className="w-full h-full object-cover rounded-[15px] hover:scale-108 transition-transform duration-500 ease-in-out"
                  autoPlay
                  muted
                  playsInline
                  onEnded={handleNext}
                  preload="auto"
                  loop={false}
                  controls={false}
                />
                {titleOverlay}
              </div>
            );
          }

          if (video.thumbnail) {
            return (
              <div key={video.id} style={style} className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title ?? "Video thumbnail"}
                  className="w-full h-full object-cover rounded-[15px]"
                  draggable={false}
                />
                {titleOverlay}
              </div>
            );
          }

          return (
            <div
              key={video.id}
              style={style}
              className="flex items-center justify-center text-gray-500 bg-gray-300 font-medium text-center"
            >
              No Thumbnail
            </div>
          );
        })}

        {/* Buttons */}
        <button
          onClick={handlePrev}
          className={`absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:scale-110 hover:bg-white hover:text-black ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className={`absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:scale-110 hover:bg-white hover:text-black ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default InstagramVideoCarousel;
