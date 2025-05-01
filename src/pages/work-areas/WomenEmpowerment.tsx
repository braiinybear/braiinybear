import React from "react";
import womenImg from "../../assets/work-areas/WomenEmpowerment.jpg";

const WomenEmpowerment: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Women Empowerment – Creating Leaders, Entrepreneurs, and Changemakers
        </h1>

        <div className="w-full h-64 mb-8 rounded-xl overflow-hidden shadow">
          <img
            src={womenImg}
            alt="Women Empowerment"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            BraiinyBear is a staunch advocate of gender equality and women empowerment.
            The Society runs skill development centers that offer training in tailoring,
            beauty and wellness, computer literacy, home-based businesses, and digital
            entrepreneurship.
          </p>
          <p>
            It also forms Self-Help Groups (SHGs), facilitating access to microloans and
            encouraging women to start their own businesses. Through legal literacy
            workshops, domestic violence support, and women’s leadership training,
            BraiinyBear helps women break free from societal constraints.
          </p>
          <p>
            The Society also celebrates success stories through Women of Change Awards,
            inspiring other women to step into leadership roles. By enabling women to
            become financially independent and socially confident, BraiinyBear reshapes
            entire families and communities.
          </p>
          <p>
            In essence, BraiinyBear Educational Training and Society is not just an
            organization—it is a movement. A movement that believes in inclusive growth,
            holistic development, and the power of community-driven change. Through its
            passionate work across multiple sectors, BraiinyBear is sowing seeds of
            progress, compassion, and transformation across the nation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WomenEmpowerment;
