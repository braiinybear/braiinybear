import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AntidrugTopbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Slogans and vital info mixed with video reel watch link
  const alertItems = [
    { text: "🚨 ANTI-DRUG HELPLINE — FOR HELP & SUPPORT", isVideoLink: false },
    { text: "📞 Helpline Number: +91 9520770813", isVideoLink: false },
    { text: "🎥 WATCH: Our Anti-Drug Awareness Campaign Reel (Click to Play)", isVideoLink: true },
    { text: "💬 Available 24/7", isVideoLink: false },
    { text: "🤝 Confidential & Free Counseling Support", isVideoLink: false },
    { text: "✨ Your Life is Worth More Than a Temporary High", isVideoLink: false },
    { text: "🛑 Choose Tomorrow, Say No To Drugs Today", isVideoLink: false },
    { text: "💪 Support is Just a Call Away — You Are Not Alone", isVideoLink: false },
    { text: "🌟 Your Future is Bright, Keep the Mind Right", isVideoLink: false }
  ];

  return (
    <>
      <div className="bg-green-600 text-white py-2 shadow-md overflow-hidden border-b border-emerald-700 select-none text-sm md:text-base font-medium">
        <div className="w-full">
          {/* Marquee Wrapper */}
          <div className="flex whitespace-nowrap overflow-hidden relative">
            <div className="animate-marquee-sync inline-flex items-center gap-4 cursor-pointer">
              {alertItems.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                  {item.isVideoLink ? (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs md:text-sm font-bold border border-red-500 animate-pulse transition-all duration-300 shadow-md transform hover:scale-105 cursor-pointer"
                    >
                      {item.text}
                    </button>
                  ) : (
                    <span>{item.text}</span>
                  )}
                  <span className="text-emerald-300 font-bold ml-4">|</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  Anti-Drug Awareness Campaign
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Video Body */}
              <div className="relative aspect-[9/16] max-h-[50vh] sm:max-h-[55vh] mx-auto bg-black flex-1 min-h-0 w-full">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  controls
                  playsInline
                  src="/videos/BB%20reel%20(18.5.26).mp4"
                />
              </div>

              {/* Footer / Call to Action */}
              <div className="p-4 bg-neutral-900/90 text-center border-t border-neutral-800">
                <p className="text-sm text-neutral-300 font-medium mb-3">
                  Need help or support? We are here for you.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+919520770813"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.02]"
                  >
                    📞 Call Helpline: +91 9520770813
                  </a>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      // Redirect to rehabilitation page
                      window.location.href = "/addiction-support-and-rehabilitation";
                    }}
                    className="text-xs text-neutral-400 hover:text-emerald-400 underline transition-colors cursor-pointer mt-1"
                  >
                    Learn more about our Drug Rehabilitation Program
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AntidrugTopbar;