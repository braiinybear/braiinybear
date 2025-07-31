import { useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import gsap from "gsap";

const InstagramButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.4 }
    );
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div
        ref={buttonRef}
        className="group relative flex items-center justify-center"
      >
        <a
          href="https://www.instagram.com/braiinybearorg/?utm_source=ig_web_button_share_sheet"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-13 h-13 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white rounded-full shadow-[#363232] hover:shadow-black shadow-md group-hover:shadow-4xl transition-all duration-300 hover:scale-110"
        >
          <FaInstagram className="text-4xl" />
        </a>

        {/* Tooltip */}
        <div className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs px-2 py-1 rounded shadow">
          Instagram
        </div>
      </div>
    </div>
  );
};

export default InstagramButton;
