import { useState, useEffect } from "react";
import backgroundImage1 from "../../assets/heroimg3.jpeg";
import backgroundImage2 from "../../assets/heroimg2.jpeg";
import backgroundImage3 from "../../assets/heroimg.jpeg";

interface Slide {
  image: string;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  titleLine4?: string;
  cta: string;
}

const Hero: React.FC = () => {
  
  const mainSlides: Slide[] = [
    {
      image: backgroundImage1,
      titleLine1: "We are tie-up with",
      titleLine2: "A.I. TRAINING INSTITUTE",
      titleLine3: "Accredited by",
      titleLine4:
        "Department of Animal Husbandry & Fisheries, Ministry of Agriculture & Farmer Welfare",
      cta: "Learn More",
    },

    {
      image: backgroundImage2,
      titleLine1: "राष्ट्रीय पशुधन मिशन",
      titleLine2: "योजना के अंतर्गत",
      titleLine3: "पशुपालन और डेयरी क्षेत्र",
      titleLine4: "को समग्र रूप से समृद्ध बनाना",
      cta: "और जानें",
    },
    {
      image: backgroundImage3,
      titleLine1: "आत्मनिर्भर भारत - सक्षम पशुपालक",
      titleLine2: "1000 पशुपालकों पर",
      titleLine3: "1 मैत्री वर्कर योजना",
      titleLine4: "- राष्ट्रीय गोकुल मिशन",
      cta: "और जानें",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentSlideIndex + 1) % mainSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlideIndex, mainSlides.length]);

  const handleSlideChange = (newIndex: number): void => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlideIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  return (
    <section className="relative h-[70vh] md:h-[75vh] lg:h-[80vh] w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {mainSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out           
              ${
                index === currentSlideIndex
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }`}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Gradient overlay - different for each slide */}
            <div
              className={`absolute inset-0 ${
                index === 0
                  ? "bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"
                  : index === 1
                  ? "bg-gradient-to-tr from-black/70 via-purple-900/40 to-transparent"
                  : "bg-gradient-to-b from-teal-900/70 via-teal-800/50 to-transparent/30"
              }`}
            />

            {/* Content area with decorative elements */}
            <div className="absolute inset-0 flex items-center">
              {/* Decorative vertical line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-yellow-400 via-yellow-500 to-transparent"></div>

              <div className="container mx-auto px-6 md:px-12 lg:px-24 relative">
                {/* Decorative shape behind text */}
                <div className="absolute -left-4 top-0 w-2/3 h-full bg-gradient-to-r from-black/30 to-transparent rounded-r-3xl -skew-x-6 transform origin-top-left"></div>

                <div className="relative w-full md:w-3/4 lg:w-2/3 py-8">
                  {/* Accent line */}
                  <div className="w-24 h-2 bg-yellow-400 mb-6 rounded-full"></div>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-300 mb-4">
                    {slide.titleLine1}
                  </h1>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4">
                    {slide.titleLine2}
                  </h2>

                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                    {slide.titleLine3}
                  </div>

                  <div className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-200 mb-10 max-w-2xl">
                    {slide.titleLine4}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {slide.cta && (
                      <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg flex items-center">
                        {slide.cta}
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    )}
                    <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white/10">
                      Discover More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnails with improved styling (Desktop Only) */}
      <div className="hidden lg:block absolute right-6 md:right-12 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col gap-6">
          {mainSlides.map((slide, index) => (
            <div
              key={index}
              className={`w-24 h-16 overflow-hidden rounded-lg cursor-pointer transition-all duration-300 
                ${
                  index === currentSlideIndex
                    ? "ring-4 ring-yellow-400 scale-110 shadow-lg shadow-yellow-400/30"
                    : "opacity-60 hover:opacity-100"
                }`}
              onClick={() => handleSlideChange(index)}
            >
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 ${
                    index === currentSlideIndex
                      ? "bg-transparent"
                      : "bg-black/30"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls (just indicators) */}
      <div className="hidden lg:flex absolute bottom-8 left-0 right-0 justify-center items-center z-20">
        <div className="flex items-center gap-3 bg-black/30 px-6 py-3 rounded-full">
          {mainSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`transition-all duration-300 rounded-full
                ${
                  index === currentSlideIndex
                    ? "w-12 h-3 bg-yellow-400"
                    : "w-3 h-3 bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Indicators with improved styling */}
      <div className="lg:hidden absolute bottom-4 left-0 right-0 flex justify-center z-20">
        <div className="flex gap-2 bg-black/30 px-4 py-2 rounded-full">
          {mainSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`transition-all duration-300 rounded-full h-2
                ${
                  index === currentSlideIndex
                    ? "w-8 bg-yellow-400"
                    : "w-2 bg-white/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar with improved styling */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/50 z-20">
        <div
          className="h-full bg-yellow-400 transition-all duration-[6000ms] ease-linear"
          style={{
            width: isTransitioning ? "0%" : "100%",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
