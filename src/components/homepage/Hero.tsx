import { useState, useEffect } from "react";
import backgroundImage1 from "../../assets/images/IMG-20250319-WA0012.jpg";
import backgroundImage2 from "../../assets/images/IMG_4001.JPG";
import backgroundImage3 from "../../assets/images/IMG_4003.JPG";

interface Slide {
  image: string;                                           
  title: string;
  description: string;
  cta: string;
}

const Hero: React.FC = () => {
  const mainSlides: Slide[] = [
    {
      image: backgroundImage1,
      title: "Inspiring Minds",
      description:
        "Building a foundation for lifelong learning through innovative education",
      cta: "Learn More",
    },
    {
      image: backgroundImage2,
      title: "Transforming Lives",
      description:
        "Creating opportunities that empower individuals to reach their full potential",
      cta: "Our Programs",
    },
    {
      image: backgroundImage3,
      title: "Building Community",
      description:
        "Fostering connections that support growth and positive change",
      cta: "Join Us",
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

  const goToNextSlide = (): void => {
    handleSlideChange((currentSlideIndex + 1) % mainSlides.length);
  };

  const goToPrevSlide = (): void => {
    handleSlideChange(
      (currentSlideIndex - 1 + mainSlides.length) % mainSlides.length
    );
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
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
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
            </div>

            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="w-full md:w-2/3 lg:w-1/2">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg">
                      {slide.cta}
                    </button>
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

      {/* Thumbnails (Desktop Only) */}
      <div className="hidden lg:block absolute right-6 md:right-12 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col gap-6">
          {mainSlides.map((slide, index) => (
            <div
              key={index}
              className={`w-24 h-16 overflow-hidden rounded-lg cursor-pointer transition-all duration-300 
                ${
                  index === currentSlideIndex
                    ? "ring-4 ring-blue-500 scale-110 shadow-lg shadow-blue-500/30"
                    : "opacity-60 hover:opacity-100"
                }`}
              onClick={() => handleSlideChange(index)}
            >
              <img
                src={slide.image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls and Indicators (Desktop Only) */}
      <div className="hidden lg:flex absolute bottom-8 left-0 right-0 justify-center items-center gap-8 z-20">
        <button
          onClick={goToPrevSlide}
          className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
          disabled={isTransitioning}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          {mainSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`transition-all duration-300 rounded-full
                ${
                  index === currentSlideIndex
                    ? "w-12 h-3 bg-blue-500"
                    : "w-3 h-3 bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNextSlide}
          className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
          disabled={isTransitioning}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Indicators Only */}
      <div className="lg:hidden absolute bottom-4 left-0 right-0 flex justify-center z-20">
        <div className="flex gap-2">
          {mainSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`transition-all duration-300 rounded-full h-2
                ${
                  index === currentSlideIndex
                    ? "w-8 bg-blue-500"
                    : "w-2 bg-white/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 z-20">
        <div
          className="h-full bg-blue-500 transition-all duration-[6000ms] ease-linear"
          style={{
            width: isTransitioning ? "0%" : "100%",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
