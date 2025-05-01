import React from "react";
import educationImg from "../../assets/work-areas/education.jpg"; 

const Education: React.FC = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-12 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Education – Laying the Foundation of Knowledge and Growth
        </h1>

        <div className="w-full h-64 mb-8 rounded-xl overflow-hidden shadow">
          <img
            src={educationImg}
            alt="Education"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            At the core of BraiinyBear’s mission lies an unwavering commitment to
            transforming the educational landscape, especially for underprivileged
            and marginalized communities.
          </p>
          <p>
            The Society establishes and supports community learning centers, mobile
            schools, and after-school tutoring programs in rural and semi-urban regions.
            It focuses not just on basic literacy and numeracy but also on critical
            thinking, creativity, communication, and problem-solving skills.
          </p>
          <p>
            Through teacher training programs, BraiinyBear elevates the quality of
            instruction by introducing modern pedagogy, inclusive teaching methods,
            and use of digital tools such as smart boards, tablets, and learning apps.
          </p>
          <p>
            Special attention is given to differently-abled children and dropout students,
            helping them reintegrate into the learning ecosystem with dignity and purpose.
          </p>
          <p>
            The Society also offers career guidance, scholarship support, and digital
            literacy programs to prepare students for future employment and entrepreneurial
            ventures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
