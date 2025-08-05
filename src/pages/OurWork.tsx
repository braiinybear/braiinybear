import React from "react";
import { Helmet } from "react-helmet";
import edu from "../assets/educational programs.png";
import communityout from "../assets/community outreach.jpg";
import govcolab from "../assets/government colab.avif";
import skilldev from "../assets/Skill-development.jpg";
import womenemp from "../assets/woman-empowerment.png"

const OurWork: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-10">
      <Helmet>
        <title>What We Do | BraiinyBear Educational and Training Society</title>
        <meta
          name="description"
          content="Discover the impactful work done by BraiinyBear Educational and Training Society in education, training, and social upliftment."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-brainy-blue mb-10">
          What We Do
        </h1>

        <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          At BraiinyBear Educational and Training Society, we are committed to creating meaningful change through education, skills development, and community engagement. Our work is deeply rooted in the belief that everyone deserves access to knowledge and opportunity.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* 1. Educational Programs */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={edu}
              alt="Education"
              className="rounded-lg shadow-md w-full md:w-48 object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-[var(--primary-main)] mb-2">
                1. Educational Programs
              </h2>
              <p className="text-gray-700">
                We offer a range of educational initiatives aimed at bridging the knowledge gap. From foundational literacy programs to advanced technical and vocational training, we ensure inclusive and equitable quality education for all.
              </p>
            </div>
          </div>

          {/* 2. Skill Development */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={skilldev}
              alt="Skill Development"
              className="rounded-lg shadow-md w-full md:w-48 object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-[var(--primary-main)] mb-2">
                2. Skill Development
              </h2>
              <p className="text-gray-700">
                We focus on enhancing employability and entrepreneurship through specialized training in fields like artificial insemination, dairy farming, goat farming, and more.
              </p>
            </div>
          </div>

          {/* 3. Community Outreach */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={communityout}
              alt="Community Outreach"
              className="rounded-lg shadow-md w-full md:w-48 object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-[var(--primary-main)] mb-2">
                3. Community Outreach
              </h2>
              <p className="text-gray-700">
                Through awareness drives, seminars, and social initiatives, we work closely with local communities to promote health, hygiene, and social welfare.
              </p>
            </div>
          </div>

          {/* 4. Women and Youth Empowerment */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={womenemp}
              alt="Empowerment"
              className="rounded-lg shadow-md w-full md:w-48 object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-[var(--primary-main)] mb-2">
                4. Women and Youth Empowerment
              </h2>
              <p className="text-gray-700">
                We run dedicated programs to empower women and youth, helping them become self-reliant through training, counseling, and capacity-building initiatives.
              </p>
            </div>
          </div>

          {/* 5. Government Collaboration */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={govcolab}
              alt="Government Collaboration"
              className="rounded-lg shadow-md w-full md:w-48 object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-[var(--primary-main)] mb-2">
                5. Government Collaboration
              </h2>
              <p className="text-gray-700">
                We actively collaborate with government bodies to deliver certified training programs and support national missions like Swachh Bharat, Skill India, and Digital India.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-brainy-blue font-semibold">
            Together, we’re building a brighter, more inclusive future—one initiative at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
