import React from "react";
import { Helmet } from "react-helmet";

const Volunteer: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-10">
      <Helmet>
        <title>Volunteer With Us | BraiinyBear Educational and Training Society</title>
        <meta
          name="description"
          content="Join us as a volunteer at BraiinyBear Educational and Training Society and make a meaningful impact in education, training, and community development."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-brainy-blue mb-6">
          Become a Volunteer
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          At BraiinyBear Educational and Training Society, volunteers are the heart of our mission. Whether you're passionate about education, training, social upliftment, or community outreach — your contribution makes a real difference.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 text-left">
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-brainy-blue mb-2">Why Volunteer?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Empower local communities through knowledge</li>
              <li>Gain hands-on experience in field work and training</li>
              <li>Build leadership and communication skills</li>
              <li>Be part of national development missions</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-brainy-blue mb-2">Opportunities Available</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Teaching & Mentoring</li>
              <li>Technical Training Assistance</li>
              <li>Event Management</li>
              <li>Awareness Campaign Support</li>
              <li>Administrative Assistance</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-left">
          <h2 className="text-2xl font-bold text-brainy-blue mb-4">Ready to Join Us?</h2>
          <p className="text-gray-700 mb-6">
            Fill out our volunteer registration form and we'll get back to you with opportunities that match your interests and skills. Let’s build a better society — together!
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Your phone number"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Why do you want to volunteer with us?</label>
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                rows={4}
                placeholder="Share your motivation and interests"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
