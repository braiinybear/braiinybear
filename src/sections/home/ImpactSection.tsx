import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import childImg from "../../assets/impact-story/child.jpg";
import personImg from "../../assets/impact-story/person.jpg";
import youthImg from "../../assets/impact-story/youth.jpg";
import ruralImg from "../../assets/impact-story/rural.jpg";

gsap.registerPlugin(ScrollTrigger);

type ImpactItem = {
  title: string;
  image: string;
  count: string;
  underlineColor: string;
};

const impactData: ImpactItem[] = [
  {
    title: "Children",
    image: childImg,
    count: "450047+",
    underlineColor: "bg-[#2D3E91]",
  },
  {
    title: "Youth",
    image: youthImg,
    count: "480203+",
    underlineColor: "bg-[#4CC5F1]",
  },
  {
    title: "Rural Households",
    image: ruralImg,
    count: "778665+",
    underlineColor: "bg-[#2D3E91]",
  },
  {
    title: "Persons with Disability",
    image: personImg,
    count: "44307+",
    underlineColor: "bg-[#4CC5F1]",
  },
];

const ImpactSection: React.FC = () => {
  const countRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    countRefs.current.forEach((el, i) => {
      if (!el) return;

      const targetVal = parseInt(impactData[i].count.replace(/\D/g, ""), 10);
      const obj = { val: 0 };

      gsap.to(obj, {
        val: targetVal,
        duration: 2.5,
        ease: "slow(0.7, 0.7, false)",
        onUpdate: () => {
          if (el) {
            el.textContent = Math.floor(obj.val).toLocaleString() + "+";
          }
        },
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "restart none restart none",
        },
      });
    });
  }, []);

  return (
    <section className="py-10 pb-15 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Our Impact
        </h2>
        <div className="mx-auto mb-12 w-24 h-1 rounded-full bg-gradient-to-r from-[var(--primary-main)] to-blue-500"></div>
        <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-20">
          As on <strong>Feb 28, 2025</strong>, we have directly impacted{" "}
          <strong>17,53,222</strong> people across{" "}
          <strong>22 Indian states/union territories</strong>. Our commitment
          remains strong to drive change and empower communities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {impactData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-left space-y-4"
            >
              <div className="w-full overflow-hidden rounded-3xl shadow-sm">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover transform transition-transform duration-800 ease-in-out hover:scale-105 hover:blur-[1px]"
                />
              </div>
              <div className="w-full">
                <h3 className="text-xl text-center font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <div
                  className={`h-1 w-20 m-auto text-center rounded-full ${item.underlineColor} mb-4`}
                  aria-hidden="true"
                />
                <div
                  className="text-4xl text-center font-bold text-gray-900 tracking-tight"
                  ref={(el) => {
                    countRefs.current[index] = el;
                  }}
                >
                  0+
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
