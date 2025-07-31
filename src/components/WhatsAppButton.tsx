import { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";

const WhatsAppButton = ({ phoneNumber = "919520770813" }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      buttonRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.6 }
    );
  }, []);

  return (
    <div className="fixed bottom-24 right-5 z-50">
      <div
        ref={buttonRef}
        className="group relative flex items-center justify-center"
      >
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-13 h-13 bg-green-500 text-white rounded-full shadow-[#1f1c1c] hover:shadow-black  shadow-md group-hover:shadow-4xl transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp className="text-4xl" />
        </a>

        {/* Tooltip — only visible when icon hovered */}
        <div className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs px-2 py-1 rounded shadow">
          WhatsApp
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;

