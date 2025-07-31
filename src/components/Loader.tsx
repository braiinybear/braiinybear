// src/components/ui/Loader.tsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader: React.FC = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(circleRef.current, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power1.inOut",
    }).to(circleRef.current, {
      strokeDashoffset: 280,
      duration: 1,
      ease: "power1.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
    >
      <svg width="80" height="80" viewBox="0 0 100 100">
        <circle
          ref={circleRef}
          cx="50"
          cy="50"
          r="45"
          stroke="#3b82f6"
          strokeWidth="8"
          fill="none"
          strokeDasharray="280"
          strokeDashoffset="280"
        />
      </svg>
      <p className="text-gray-500 text-sm mt-4 animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
