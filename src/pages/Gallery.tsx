import React from "react";

import img1 from "../assets/images/IMG_3992.JPG";
import img2 from "../assets/images/IMG_3993.JPG";
import img3 from "../assets/images/IMG_3994.JPG"
import img4 from "../assets/images/IMG_3995.JPG";
import img5 from "../assets/images/IMG_3997.JPG";
import img6 from "../assets/images/IMG_3998.JPG";
import img7 from "../assets/images/IMG_3999.JPG";
import img8 from "../assets/images/IMG_4001.JPG";
import img9 from "../assets/images/IMG_3996.JPG";
import img10 from "../assets/images/IMG_4002.JPG";
import img11 from "../assets/images/IMG_4003.JPG";
import img12 from "../assets/images/IMG_4004.JPG";
import img13 from "../assets/images/IMG_4005.JPG";
import img14 from "../assets/images/IMG_4006.JPG";
import img15 from "../assets/images/IMG_4007.JPG";
import img16 from "../assets/images/IMG_4008.JPG";
import img17 from "../assets/images/IMG_4009.JPG";
import img18 from "../assets/images/img.JPG";
import img19 from "../assets/images/IMG.jpeg"
import img20 from "../assets/images/IMG02.jpeg"
import img21 from "../assets/images/IMG01.jpeg"

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21
];

const Gallery: React.FC = () => {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-10 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-4">
        Our <span className="text-[var(--primary-main)]">Gallery</span>
      </h1>
      <p className="text-center text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
        Explore the moments captured during our events, activities, and training sessions.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
