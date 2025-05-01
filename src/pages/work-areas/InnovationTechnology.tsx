import React from "react";
import innovationImg from "../../assets/work-areas/Innovation&Technology.jpg";

const InnovationTechnology: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Innovation and Technology – Igniting Young Minds, Empowering Futures
        </h1>

        <div className="w-full h-64 mb-8 rounded-xl overflow-hidden shadow">
          <img
            src={innovationImg}
            alt="Innovation and Technology"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            To build a future-ready society, BraiinyBear integrates cutting-edge technology education
            into its training programs. It sets up Innovation Labs, Tech Clubs, and Digital Classrooms
            where students explore robotics, artificial intelligence, app development, and design thinking.
          </p>
          <p>
            Through coding bootcamps, tech fairs, and hackathons, the Society nurtures creativity and
            entrepreneurship among rural and urban youth alike.
          </p>
          <p>
            It also provides technical vocational training for dropouts and unemployed youth, covering
            areas like mobile repair, digital marketing, data entry, and 3D printing.
          </p>
          <p>
            By bridging the digital divide, BraiinyBear creates equal opportunities for all to excel in
            the rapidly evolving technological landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InnovationTechnology;
