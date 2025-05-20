import  { useEffect } from 'react';

const TopBar = () => {
  useEffect(() => {
    // Add the custom marquee animation to the document's stylesheet
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee-rtl {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee-rtl {
        animation: marquee-rtl 60s linear infinite;
      }
    `;
    document.head.appendChild(style);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-[var(--primary-main)] text-white py-2 px-4 sm:px-6 shadow-md overflow-hidden">
      <div className="max-w-9xl mx-auto">
        {/* Marquee-like effect with right-to-left animation */}
        <div className="whitespace-nowrap overflow-hidden relative">
          <div className="animate-marquee-rtl inline-block">
            🌟 BraiinyBear Joins Hands with Innovation Artificial Insemination Training Institute 🌟 |
            📜 Accredited by: Department of Animal Husbandry, Dairying & Fisheries, Ministry of Agriculture & Farmers Welfare, Government of India, New Delhi |
            🏆 India’s First and Only Institute that Provides Insemination Training |
            🤝 A Landmark Collaboration for Advancing Animal Husbandry & Reproductive Science Training
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
