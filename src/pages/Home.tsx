import Hero from "../components/homepage/Hero";
import { Helmet } from "react-helmet";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import {
  ArrowRight,
} from "lucide-react";

import img2 from "../assets/images/IMG_3998.JPG";
import ImpactSection from "../sections/home/ImpactSection";
import MissionSection from "../sections/home/MissionSection";
import WorkAreaSection from "../sections/home/WorkAreaSection";
import { Link } from "react-router-dom";
import NewsletterSubscriptionSection from "../sections/home/NewsletterSubscriptionSection";
import InstagramVideoCarousel from "../sections/home/InstagramVideoSection";
// import Events from "./courses/Courses";


const Home: React.FC = () => {

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>BraiinyBear | Empowering Livestock & Farmers through AI Insemination</title>
        <meta name="description" content="BraiinyBear partners with AI Training Institute for artificial insemination training accredited by the Department of Animal Husbandry & Fisheries. Empowering farmers for sustainable livestock growth." />
        <meta name="keywords" content="BraiinyBear, Artificial Insemination, AI Training Institute, Livestock, Farmer Empowerment, Department of Animal Husbandry, Fisheries, Agriculture, National Gokul Mission" />
        <meta property="og:title" content="BraiinyBear | Empowering Livestock & Farmers through AI Insemination" />
        <meta property="og:description" content="Partnering with AI Training Institute accredited by the Department of Animal Husbandry & Fisheries to empower farmers." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Helmet>

      <Hero />

      {/* Our Mission */}
      <MissionSection />

      {/* Our Impact Section */}

      <ImpactSection />

      {/* Our Work Areas */}
      <WorkAreaSection />

      {/* <InstagramVideoSection /> */}
      <InstagramVideoCarousel />

      {/* Success Stories */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Success Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Real stories of transformation and hope from our beneficiaries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="/api/placeholder/600/400"
                alt="Education success story"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Education
                </span>
                <h3 className="text-xl font-semibold mt-3 mb-2">
                  From Dropout to Graduate
                </h3>
                <p className="text-gray-600 mb-4">
                  Ravi was a school dropout due to financial constraints. Our
                  education program provided him with scholarships and
                  mentoring, enabling him to complete his education and secure
                  employment.
                </p>
                <Link
                  to="/stories/education"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="/api/placeholder/600/400"
                alt="Women empowerment story"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Women Empowerment
                </span>
                <h3 className="text-xl font-semibold mt-3 mb-2">
                  The Entrepreneur's Journey
                </h3>
                <p className="text-gray-600 mb-4">
                  Seema joined our skills training program and started her own
                  tailoring business. Today, she employs five women from her
                  village and supports her family with dignity.
                </p>
                <Link
                  to="/stories/women-empowerment"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="/api/placeholder/600/400"
                alt="Agriculture success story"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Agriculture
                </span>
                <h3 className="text-xl font-semibold mt-3 mb-2">
                  Sustainable Farming Success
                </h3>
                <p className="text-gray-600 mb-4">
                  A farming collective of 15 families adopted organic farming
                  practices through our agricultural program, increasing their
                  yield by 40% while reducing costs and environmental impact.
                </p>
                <Link
                  to="/stories/agriculture"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer/Donate CTA */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
                <p className="text-gray-600 mb-8">
                  Your support can make a significant difference in the lives of
                  those we serve. Join us as a volunteer or consider making a
                  donation to support our programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/volunteer"
                    className="bg-blue-600 hover:bg-[var(--primary-main)] text-white font-bold py-3 px-6 rounded-md text-center transition-colors duration-300"
                  >
                    Volunteer With Us
                  </Link>
                  <Link
                    to="/donate"
                    className="bg-[var(--primary-main)] hover:bg-[var(--primary-main)] text-white font-bold py-3 px-6 rounded-md text-center transition-colors duration-300"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative">
                <img
                  src={img2}
                  alt="Volunteers working"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      {/* <Events /> */}

      {/* Partners & Supporters */}
      {/* <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Partners & Supporters</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              We're grateful to work with organizations that share our vision
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
              <div key={partner} className="bg-white p-6 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300">
                <img src={`/api/placeholder/150/80`} alt={`Partner ${partner}`} className="max-h-16" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter Subscription */}
      <NewsletterSubscriptionSection />
    </div>
  );
};

export default Home;
