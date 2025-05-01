import React from "react";
import seniorCitizenImg from "../../assets/work-areas/senior-citizen.jpg";

const SeniorCitizen: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Senior Citizens – Fostering Dignity, Connection, and Care
        </h1>

        <div className="w-full h-64 mb-8 rounded-xl overflow-hidden shadow">
          <img
            src={seniorCitizenImg}
            alt="Senior Citizens"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            BraiinyBear deeply values the wisdom and experience of senior citizens. It operates
            “Silver Circles” – safe and vibrant community spaces where elderly individuals can socialize,
            learn new skills, and participate in intergenerational activities.
          </p>
          <p>
            Regular health camps, yoga sessions, legal aid workshops, and mental wellness counseling are
            provided to ensure a healthy and secure life in their golden years.
          </p>
          <p>
            The Society also runs ‘Adopt-a-Grandparent’ programs, connecting youth with isolated elders
            to foster emotional bonds and reduce loneliness.
          </p>
          <p>
            Whether it’s organizing cultural events, helping with government schemes, or assisting with
            healthcare logistics, BraiinyBear ensures no elder is left behind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeniorCitizen;
