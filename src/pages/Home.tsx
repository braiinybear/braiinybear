import Hero from '../components/homepage/Hero';
import { ArrowRight, BookOpen, Users, Lightbulb, Leaf, PawPrint, Sun, Heart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import childImg from "../assets/impact-story/child.jpg";
import personImg from "../assets/impact-story/person.jpg"
import youthImg from "../assets/impact-story/youth.jpg"
import ruralImg from "../assets/impact-story/rural.jpg"
import img2 from "../assets/images/IMG_3998.JPG"

const Home: React.FC = () => {
  // Work areas with icons and descriptions
  const workAreas = [
    {
      id: 1,
      title: "Education",
      icon: <BookOpen className="h-12 w-12 mb-4 text-blue-600" />,
      description: "Providing quality education and learning resources to underprivileged children and communities.",
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
      hoverColor: "hover:bg-blue-100",
    },
    {
      id: 2,
      title: "Senior Citizens",
      icon: <Users className="h-12 w-12 mb-4 text-purple-600" />,
      description: "Supporting elderly care through healthcare assistance, companionship programs, and retirement planning.",
      color: "bg-purple-50 border-purple-200",
      iconBg: "bg-purple-100",
      hoverColor: "hover:bg-purple-100",
    },
    {
      id: 3,
      title: "Innovation and Technology",
      icon: <Lightbulb className="h-12 w-12 mb-4 text-[var(--primary-main)]" />,
      description: "Leveraging technology to solve social challenges and foster innovation in rural communities.",
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
      hoverColor: "hover:bg-blue-100",
    },
    {
      id: 4,
      title: "Agriculture",
      icon: <Leaf className="h-12 w-12 mb-4 text-green-600" />,
      description: "Promoting sustainable farming practices and supporting small-scale farmers with resources and training.",
      color: "bg-green-50 border-green-200",
      iconBg: "bg-green-100",
      hoverColor: "hover:bg-green-100",
    },
    {
      id: 5,
      title: "Animal Husbandry",
      icon: <PawPrint className="h-12 w-12 mb-4 text-amber-600" />,
      description: "Providing veterinary services, training in animal care, and support for livestock-based livelihoods.",
      color: "bg-amber-50 border-amber-200",
      iconBg: "bg-amber-100",
      hoverColor: "hover:bg-amber-100",
    },
    {
      id: 6,
      title: "Environment",
      icon: <Sun className="h-12 w-12 mb-4 text-emerald-600" />,
      description: "Implementing conservation projects, awareness programs, and sustainable practices to protect our planet.",
      color: "bg-emerald-50 border-emerald-200",
      iconBg: "bg-emerald-100",
      hoverColor: "hover:bg-emerald-100",
    },
    {
      id: 7,
      title: "Women Empowerment",
      icon: <Heart className="h-12 w-12 mb-4 text-pink-600" />,
      description: "Creating opportunities for women through skill development, microfinance, and entrepreneurship support.",
      color: "bg-pink-50 border-pink-200",
      iconBg: "bg-pink-100",
      hoverColor: "hover:bg-pink-100",
    },
    {
      id: 8,
      title: "Drug Rehabilitation",
      icon: <Activity className="h-12 w-12 mb-4 text-red-600" />,
      description: "Offering recovery programs, counseling services, and reintegration support for those affected by addiction.",
      color: "bg-red-50 border-red-200",
      iconBg: "bg-red-100",
      hoverColor: "hover:bg-red-100",
    },
  ];

  const highlights = [
    {
      icon: "🎓",
      title: "Early Education",
      description: "Building strong foundations through engaging and interactive learning.",
    },
    {
      icon: "🧠",
      title: "Skill Development",
      description: "Empowering children with essential life and academic skills.",
    },
    {
      icon: "🤝",
      title: "Community Engagement",
      description: "Fostering a spirit of togetherness and collaboration.",
    },
    {
      icon: "🌱",
      title: "Holistic Growth",
      description: "Nurturing mind, body, and soul for balanced development.",
    },
  ];

  const impactData = [
    {
      title: "Children",
      image: childImg,
      count: "450047+",
      underlineColor: "bg-[#2D3E91]",
    },
    {
      title: "Youth",
      image: youthImg,
      count: "480203+",
      underlineColor: "bg-[#4CC5F1]",
    },
    {
      title: "Rural Households",
      image: ruralImg,
      count: "778665+",
      underlineColor: "bg-[#2D3E91]",
    },
    {
      title: "Persons with Disability",
      image: personImg,
      count: "44307+",
      underlineColor: "bg-[#4CC5F1]",
    },
  ];

  return (
    <div className="bg-gray-50">
      <Hero />

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto mb-6 rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 mb-12">
            As on <strong>Feb 28, 2025</strong>, we have directly impacted <strong>17,53,222</strong> people.
            We currently have operations in <strong>22 Indian states/union territories</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {impactData.map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover rounded-2xl mb-4"
                />
                <div className="text-lg font-semibold text-gray-800">{item.title}</div>
                <div
                  className={`w-14 h-1 mx-auto mt-1 mb-3 rounded-full ${item.underlineColor}`}
                ></div>
                <div className="text-3xl font-bold text-gray-900">{item.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Areas */}
      <section className="py-10 px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Work Areas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              We take a holistic approach to community development through these key focus areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workAreas.map((area) => (
              <div
                key={area.id}
                className={`${area.color} border p-6 rounded-lg ${area.hoverColor} transition-all duration-300 hover:shadow-lg text-center`}
              >
                <div className={`${area.iconBg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <Link
                  to={`/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Real stories of transformation and hope from our beneficiaries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/api/placeholder/600/400" alt="Education success story" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Education</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">From Dropout to Graduate</h3>
                <p className="text-gray-600 mb-4">Ravi was a school dropout due to financial constraints. Our education program provided him with scholarships and mentoring, enabling him to complete his education and secure employment.</p>
                <Link to="/stories/education" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/api/placeholder/600/400" alt="Women empowerment story" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">Women Empowerment</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">The Entrepreneur's Journey</h3>
                <p className="text-gray-600 mb-4">Seema joined our skills training program and started her own tailoring business. Today, she employs five women from her village and supports her family with dignity.</p>
                <Link to="/stories/women-empowerment" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/api/placeholder/600/400" alt="Agriculture success story" className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Agriculture</span>
                <h3 className="text-xl font-semibold mt-3 mb-2">Sustainable Farming Success</h3>
                <p className="text-gray-600 mb-4">A farming collective of 15 families adopted organic farming practices through our agricultural program, increasing their yield by 40% while reducing costs and environmental impact.</p>
                <Link to="/stories/agriculture" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
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
                <p className="text-gray-600 mb-8">Your support can make a significant difference in the lives of those we serve. Join us as a volunteer or consider making a donation to support our programs.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/volunteer" className="bg-blue-600 hover:bg-[var(--primary-main)] text-white font-bold py-3 px-6 rounded-md text-center transition-colors duration-300">
                    Volunteer With Us
                  </Link>
                  <Link to="/donate" className="bg-[var(--primary-main)] hover:bg-[var(--primary-main)] text-white font-bold py-3 px-6 rounded-md text-center transition-colors duration-300">
                    Donate Now
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative">
                <img src={img2} alt="Volunteers working" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Upcoming Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Join us at our upcoming events and be part of the change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="bg-blue-600 text-white px-4 py-2 flex justify-between">
                <span className="font-semibold">May 15, 2025</span>
                <span>10:00 AM</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Educational Workshop</h3>
                <p className="text-gray-600 mb-4">Join us for a day of learning and skill development for children and young adults.</p>
                <Link to="/events/educational-workshop" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="bg-green-600 text-white px-4 py-2 flex justify-between">
                <span className="font-semibold">June 5, 2025</span>
                <span>9:00 AM</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tree Plantation Drive</h3>
                <p className="text-gray-600 mb-4">Help us plant 1,000 trees in the community as part of our environmental conservation efforts.</p>
                <Link to="/events/tree-plantation" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="bg-purple-600 text-white px-4 py-2 flex justify-between">
                <span className="font-semibold">June 20, 2025</span>
                <span>2:00 PM</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Senior Citizen Health Camp</h3>
                <p className="text-gray-600 mb-4">Free health check-ups and consultations for senior citizens in our community center.</p>
                <Link to="/events/health-camp" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/events" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              View all events <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

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
      <section className="py-12 px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">Stay Updated</h2>

            {/* Stylish underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-400 mx-auto mb-6 rounded-full"></div>

            <p className="mb-6 text-gray-400">
              Subscribe to our newsletter for updates on projects and events
            </p>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4 border border-gray-700">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-md flex-grow text-white bg-gray-900 border border-gray-700 focus:outline-none focus:border-[var(--primary-main)] focus:ring-1 focus:ring-[var(--primary-main)]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[var(--primary-main)] hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-all duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="flex justify-center gap-6 mt-4">
              <span className="flex items-center text-gray-400 text-sm">
                <svg className="w-4 h-4 mr-1 text-[var(--primary-main)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Weekly Updates
              </span>
              <span className="flex items-center text-gray-400 text-sm">
                <svg className="w-4 h-4 mr-1 text-[var(--primary-main)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Exclusive Content
              </span>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;