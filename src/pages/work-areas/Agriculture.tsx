import React from "react";
import agricultureImg from "../../assets/work-areas/agriculture.jpg";

const Agriculture: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Agriculture – Reinvigorating Rural Livelihoods Through Knowledge and Innovation
        </h1>

        <div className="w-full h-64 mb-8 rounded-xl overflow-hidden shadow">
          <img
            src={agricultureImg}
            alt="Agriculture"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            Understanding that agriculture is the backbone of rural India, BraiinyBear empowers farmers
            through scientific training programs on sustainable farming, organic cultivation, soil testing,
            and crop diversification.
          </p>
          <p>
            It brings in agricultural experts, agronomists, and researchers to educate farmers on climate-resilient
            techniques, drip irrigation, vermicomposting, and post-harvest management.
          </p>
          <p>
            BraiinyBear also introduces microfinance models, crop insurance awareness, and market linkage programs
            that eliminate middlemen, ensuring fair prices for farmers.
          </p>
          <p>
            Through community farming models and Farmer Producer Organizations (FPOs), the Society strengthens
            the collective bargaining power of smallholder farmers, enabling them to thrive economically and socially.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Agriculture;
