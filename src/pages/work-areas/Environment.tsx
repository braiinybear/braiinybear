import React from "react";
import environmentImg from "../../assets/work-areas/Environment.jpg";

const Environment: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Environment – Inspiring Eco-Warriors for a Sustainable Tomorrow
        </h1>

        <div className="w-full h-64 mb-8 rounded-xl overflow-hidden shadow">
          <img
            src={environmentImg}
            alt="Environment"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            BraiinyBear believes that education without environmental consciousness is incomplete.
            It conducts extensive awareness campaigns, interactive seminars, and hands-on eco-projects
            in schools, colleges, and communities to inculcate values of sustainability.
          </p>
          <p>
            Activities such as tree plantation drives, rainwater harvesting workshops, plastic-free
            village initiatives, and climate education camps are routinely carried out with enthusiastic
            participation from locals.
          </p>
          <p>
            The Society also introduces innovative projects like “Green Schools” and “Community Composting
            Models,” teaching individuals how to reuse, recycle, and reduce.
          </p>
          <p>
            By training youth as ‘Green Ambassadors’, BraiinyBear nurtures future leaders who not only understand
            ecological balance but actively contribute to preserving it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Environment;
