import { useEffect } from 'react';

const AntidrugTopbar = () => {
  useEffect(() => {
    // Add the custom marquee animation to the document's stylesheet
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee-antidrug {
        0% { transform: translateX(100vw); }
        100% { transform: translateX(-100%); }
      }
      .animate-marquee-antidrug {
        animation: marquee-antidrug 55s linear 0.1s infinite;
      }
      .animate-marquee-antidrug:hover {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Slogans and vital info mixed for a highly visible layout
  const alertItems = [
    "🚨 ANTI-DRUG HELPLINE — FOR HELP & SUPPORT",
    "📞 Helpline Number: +91 9520770813",
    "💬 Available 24/7",
    "🤝 Confidential & Free Counseling Support",
    "✨ Your Life is Worth More Than a Temporary High",
    "🛑 Choose Tomorrow, Say No To Drugs Today",
    "💪 Support is Just a Call Away — You Are Not Alone",
    "🌟 Your Future is Bright, Keep the Mind Right"
  ];

  // Doubling the array to ensure a perfectly seamless loop without blank gaps
  const marqueeContent = [...alertItems, ...alertItems];

  return (
    <div className="bg-green-600 text-white py-2 shadow-md overflow-hidden border-b border-emerald-700 select-none text-sm md:text-base font-medium">
      <div className="w-full">
        {/* Marquee Wrapper */}
        <div className="flex whitespace-nowrap overflow-hidden relative">
          <div className="animate-marquee-antidrug inline-flex items-center gap-4 cursor-pointer">
            {marqueeContent.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                {item}
                <span className="text-emerald-300 font-bold ml-4">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntidrugTopbar;