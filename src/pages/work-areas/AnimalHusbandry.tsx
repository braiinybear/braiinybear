import React from "react";
import animalHusbandryImg from "../../assets/work-areas/AnimalHusbandry.jpg";

const AnimalHusbandry: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Animal Husbandry – Nurturing Livelihoods Through Ethical Livestock Management
        </h1>

        <div className="w-full h-64 mb-8 rounded-xl overflow-hidden shadow">
          <img
            src={animalHusbandryImg}
            alt="Animal Husbandry"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            BraiinyBear promotes animal husbandry not only as a livelihood option but as a sustainable
            community development tool. It trains rural families in modern livestock management, covering
            areas such as nutrition, breeding techniques, shelter management, and disease control.
          </p>
          <p>
            The Society frequently partners with veterinary professionals to conduct animal health camps,
            vaccination drives, and awareness sessions on zoonotic diseases.
          </p>
          <p>
            It also supports women-led dairy cooperatives and backyard poultry farming units, enabling
            supplemental income and nutritional security for families.
          </p>
          <p>
            All initiatives are driven by a strong emphasis on ethical treatment, animal welfare, and
            eco-friendly practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimalHusbandry;
