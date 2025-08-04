import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface NoticeSliderProps {
  texts: string[];
  speed?: number; // pixels per second
  interval?: number; // pause between texts in ms
  className?: string;
}

const NoticeSlider: React.FC<NoticeSliderProps> = ({
  texts,
  speed = 100,
  interval = 2000,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || texts.length === 0) return;

    const containerWidth = containerRef.current.offsetWidth;

    const animateText = (index: number) => {
      if (!textRef.current) return;

      textRef.current.textContent = texts[index];

      const textWidth = textRef.current.offsetWidth;
      const distance = containerWidth + textWidth;
      const duration = distance / speed;

      if (tl.current) tl.current.kill();

      gsap.set(textRef.current, { x: containerWidth });

      tl.current = gsap.timeline({
        onComplete: () => {
          if (texts.length > 1) {
            setTimeout(() => {
              setCurrentIndex((prev) => (prev + 1) % texts.length);
            }, interval);
          } else {
            // For single message: restart the same animation
            setTimeout(() => animateText(0), interval);
          }
        },
      });

      tl.current.to(textRef.current, {
        duration,
        x: -textWidth - containerWidth,
        ease: "linear",
      });
    };

    animateText(currentIndex);

    return () => {
      if (tl.current) tl.current.kill();
    };
  }, [currentIndex, speed, interval, texts]);

  return (
   <div
  ref={containerRef}
  className={`flex items-center overflow-hidden relative shadow-sm px-4 py-2 ${className}`}
  aria-live="polite"
  aria-atomic="true"
  role="marquee"
  style={{ backgroundColor: "#000", color: "#fff", height: "2.5rem" }}
>
  <span
    className="flex-shrink-0 font-bold text-yellow-400 mr-4 select-none"
    aria-hidden="true"
  >
    Important Notice:
  </span>

  <div
    ref={textRef}
    className="whitespace-nowrap will-change-transform font-medium"
    style={{ position: "relative" }}
  />
</div>

  );
};

export default NoticeSlider;
