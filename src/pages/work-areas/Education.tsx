import React from "react";
import { Helmet } from "react-helmet";
import educationImg from "/servers.jpeg";

const Education: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Information And Technology | BraiinyBear Society</title>
        <meta
          name="description"
          content="Explore how BraiinyBear Educational and Training Society is transforming education through community learning centers, inclusive programs, and digital empowerment."
        />
        <meta
          name="keywords"
          content="Education, Rural Learning, Teacher Training, Digital Literacy, Inclusive Education, BraiinyBear Society"
        />
      </Helmet>

      <div className="pt-24 pb-16 px-4 md:px-12 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Information and Technology – Empowering Through Digital Literacy
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
            At BraiinyBear Educational and Training Society, we recognize Information and Technology as essential drivers of inclusive development. We work to deliver modern, competitive education and digital skills to underprivileged communities and individuals, ensuring that no one is left behind in an increasingly technology driven and urbanized world.
          </p>
          <p>
            Through training in digital literacy, emerging technologies, and the use of modern software and machines, we strive to bridge the access gap and create equal opportunities for everyone. Our efforts enable learners to confidently participate in contemporary workplaces, access opportunities in growing cities, and remain at par with a rapidly progressing global society.
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
