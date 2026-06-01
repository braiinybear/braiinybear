import  { useEffect } from 'react';

const TopBar = () => {
  useEffect(() => {
    // Add the custom marquee animation to the document's stylesheet
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee-sync-shared {
        0% { transform: translateX(100vw); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee-sync {
        animation: marquee-sync-shared 45s linear 0s infinite;
      }
      .animate-marquee-sync:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-[var(--primary-main)] text-white py-2 px-4 sm:px-6 shadow-md overflow-hidden select-none text-sm md:text-base font-medium">
      <div className="w-full">
        {/* Marquee-like effect with right-to-left animation */}
        <div className="flex whitespace-nowrap overflow-hidden relative">
          <div className="animate-marquee-sync inline-flex items-center gap-4 cursor-pointer">
            <span>🌟 BraiinyBear Joins Hands with Innovation Artificial Insemination Training Institute 🌟</span>
            <span className="text-blue-300 font-bold ml-4">|</span>
            <span>📜 Accredited by: Department of Animal Husbandry, Dairying & Fisheries, Ministry of Agriculture & Farmers Welfare, Government of India, New Delhi</span>
            <span className="text-blue-300 font-bold ml-4">|</span>
            <span>🏆 India’s First and Only Institute that Provides Insemination Training</span>
            <span className="text-blue-300 font-bold ml-4">|</span>
            <span>🤝 A Landmark Collaboration for Advancing Animal Husbandry & Reproductive Science Training</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
