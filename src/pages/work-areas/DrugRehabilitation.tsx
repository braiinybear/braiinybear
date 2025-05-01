import React from "react";
import antiDrugsImg from "../../assets/work-areas/DrugRehabilitation.jpg";

const DrugRehabilitation: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Anti-Drugs – Building Resilience, Saving Lives
        </h1>

        <div className="w-full h-64 mb-8 rounded-xl overflow-hidden shadow">
          <img
            src={antiDrugsImg}
            alt="Anti-Drugs Awareness"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            BraiinyBear addresses the growing menace of substance abuse with a strong preventive and
            rehabilitative approach. It organizes anti-drug awareness rallies, school and college outreach
            programs, and community sensitization workshops to educate the youth and families about the
            dangers of addiction.
          </p>
          <p>
            The Society collaborates with local law enforcement, healthcare providers, and mental health
            counselors to identify high-risk zones and individuals.
          </p>
          <p>
            It runs confidential helplines, rehabilitation referral services, and peer-support circles to
            guide individuals back to a healthy, meaningful life.
          </p>
          <p>
            Moreover, by offering vocational training and psychosocial counseling, it ensures that recovering
            individuals are reintegrated into society with dignity and opportunity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrugRehabilitation;
