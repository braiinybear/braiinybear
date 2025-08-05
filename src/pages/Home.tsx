import Hero from "../components/homepage/Hero";
import { Helmet } from "react-helmet";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// import {
//   ArrowRight,
// } from "lucide-react";

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
        <link rel="canonical" href="https://braiinybear.org/" />
      </Helmet>

      <Hero />

      {/* Our Mission */}
      <MissionSection />

      {/* Our Impact Section */}

      <ImpactSection />

      {/* Our Work Areas */}
      <WorkAreaSection />

      {/* InstagramVideoSection  */}
      <InstagramVideoCarousel />


      {/* Volunteer/Donate CTA */}
      <section className="mt-20 py-16 px-6 bg-blue-50">
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
                  {/* <Link
                    to="/donate"
                    className="bg-[var(--primary-main)] hover:bg-[var(--primary-main)] text-white font-bold py-3 px-6 rounded-md text-center transition-colors duration-300"
                  >
                    Donate Now
                  </Link> */}
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
