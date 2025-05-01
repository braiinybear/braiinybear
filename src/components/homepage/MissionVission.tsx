import React from 'react';
import { ArrowRight, BookOpen, Eye, Target, Award, Heart, Lightbulb, BarChart3, Users, Globe, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const MissionVision: React.FC = () => {
  // Core values with icons and descriptions
  const coreValues = [
    {
      id: 1,
      title: "Compassion",
      icon: <Heart className="h-10 w-10 mb-4 text-pink-600" />,
      description: "We approach our work with empathy and understanding, recognizing the dignity of every individual we serve.",
      color: "bg-pink-50 border-pink-200",
      iconBg: "bg-pink-100",
    },
    {
      id: 2,
      title: "Integrity",
      icon: <Award className="h-10 w-10 mb-4 text-blue-600" />,
      description: "We maintain transparency in our operations and are accountable to our beneficiaries, donors, and the communities we serve.",
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
    },
    {
      id: 3,
      title: "Innovation",
      icon: <Lightbulb className="h-10 w-10 mb-4 text-[var(--primary-main)]" />,
      description: "We constantly seek creative solutions to address complex social challenges and improve our impact.",
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
    },
    {
      id: 4,
      title: "Sustainability",
      icon: <Target className="h-10 w-10 mb-4 text-green-600" />,
      description: "We design programs with long-term impact in mind, focusing on creating lasting change rather than temporary solutions.",
      color: "bg-green-50 border-green-200",
      iconBg: "bg-green-100",
    },
  ];

  // Impact statistics
  const impactStats = [
    {
      id: 1,
      number: "50,000+",
      title: "Lives Impacted",
      description: "Individuals who directly benefited from our programs and services",
      icon: <Users className="h-12 w-12 text-[var(--primary-main)]" />,
    },
    {
      id: 2,
      number: "120+",
      title: "Communities Served",
      description: "Locations where we've implemented sustainable development projects",
      icon: <Globe className="h-12 w-12 text-[var(--primary-main)]" />,
    },
    {
      id: 3,
      number: "85%",
      title: "Success Rate",
      description: "Program participants who report improved quality of life",
      icon: <BarChart3 className="h-12 w-12 text-[var(--primary-main)]" />,
    },
    {
      id: 4,
      number: "40+",
      title: "Partner Organizations",
      description: "Collaborations that strengthen our reach and impact",
      icon: <Handshake className="h-12 w-12 text-[var(--primary-main)]" />,
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-[var(--primary-main)] to-[var(--primary-main)] py-20 px-6">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"></h1>
<div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-200 text-lg">
            Driven by purpose, guided by values - transforming lives and communities.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Mission & Vision Detail */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[var(--primary-main)]">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-[var(--primary-main)]" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-gray-600 mb-6 text-lg">
                To provide accessible, high-quality education and social services that empower individuals and transform communities for sustainable development and social progress.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[var(--primary-main)]">
                <h3 className="font-semibold text-xl mb-3">What drives us:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-[var(--primary-main)]">•</span>
                    <span>Creating opportunities for marginalized communities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-[var(--primary-main)]">•</span>
                    <span>Building self-sufficiency through education and skill development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-[var(--primary-main)]">•</span>
                    <span>Addressing systemic challenges with innovative solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-[var(--primary-main)]">•</span>
                    <span>Fostering collaborative partnerships for greater impact</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[var(--primary-main)]">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-10 w-10 text-[var(--primary-main)]" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Creating a world where every individual has equal access to opportunities, resources, and support systems needed to achieve their full potential and contribute to society.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[var(--primary-main)]">
                <h3 className="font-semibold text-xl mb-3">We envision:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-[var(--primary-main)]">•</span>
                    <span>Communities where education is accessible to all</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-[var(--primary-main)]">•</span>
                    <span>A society where social barriers no longer limit potential</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-[var(--primary-main)]">•</span>
                    <span>Sustainable development that preserves resources for future generations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 text-[var(--primary-main)]">•</span>
                    <span>Empowered communities driving their own progress</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 px-6 bg-[var(--primary-main)]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Our Impact</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-white text-lg">
              Measuring our success through meaningful change and sustainable outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat) => (
              <div 
                key={stat.id} 
                className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2 text-black">{stat.number}</h3>
                <h4 className="text-xl font-semibold mb-3 text-[var(--primary-main)]">{stat.title}</h4>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Impact Stories</h3>
                <p className="text-gray-600 mb-4">
                  Our work has transformed thousands of lives across multiple communities. Through sustainable programs focused on education, 
                  healthcare, and economic empowerment, we've created lasting change that continues to grow.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[var(--primary-main)] mb-4">
                  <p className="italic text-gray-700">
                    "The educational resources and support provided by this organization changed my life. 
                    I'm now able to support my family and give back to my community."
                  </p>
                  <p className="font-medium mt-2">— Maria, Program Participant</p>
                </div>
                <Link to="/impact-stories" className="inline-flex items-center bg-[var(--primary-main)] hover:bg-[var(--primary-main)] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                  Read More Stories <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div>
                <img src="/api/placeholder/500/300" alt="Impact story" className="rounded-lg shadow-md w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Core Values</h2>
  <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              These principles guide our work and shape our approach to creating sustainable change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <div 
                key={value.id} 
                className={`${value.color} border p-6 rounded-lg transition-all duration-300 hover:shadow-lg text-center`}
              >
                <div className={`${value.iconBg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Journey</h2>
  <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              From humble beginnings to impactful change - the story of our foundation
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* Item 1 */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right pb-8 md:pb-0">
                      <div className="bg-blue-100 inline-block px-3 py-1 rounded-full text-blue-800 font-medium mb-2">2010</div>
                      <h3 className="text-xl font-bold mb-2">Foundation Established</h3>
                      <p className="text-gray-600">Started with a small team of 5 volunteers focused on educational support in one rural community.</p>
                    </div>
                    <div className="md:pl-8">
                      <img src="/api/placeholder/400/220" alt="Foundation established" className="rounded-lg shadow-md" />
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--primary-main)] border-4 border-white"></div>
                </div>

                {/* Item 2 */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:order-last md:text-left pb-8 md:pb-0">
                      <div className="bg-blue-100 inline-block px-3 py-1 rounded-full text-blue-800 font-medium mb-2">2015</div>
                      <h3 className="text-xl font-bold mb-2">Expansion of Programs</h3>
                      <p className="text-gray-600">Added six new focus areas including women empowerment and environmental conservation, reaching 20,000 beneficiaries.</p>
                    </div>
                    <div className="md:order-first md:text-right md:pr-8">
                      <img src="/api/placeholder/400/220" alt="Program expansion" className="rounded-lg shadow-md" />
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--primary-main)] border-4 border-white"></div>
                </div>

                {/* Item 3 */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right pb-8 md:pb-0">
                      <div className="bg-blue-100 inline-block px-3 py-1 rounded-full text-blue-800 font-medium mb-2">2020</div>
                      <h3 className="text-xl font-bold mb-2">Technology Initiative</h3>
                      <p className="text-gray-600">Launched digital literacy programs and technology hubs in 30 communities, bridging the digital divide.</p>
                    </div>
                    <div className="md:pl-8">
                      <img src="/api/placeholder/400/220" alt="Technology initiative" className="rounded-lg shadow-md" />
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--primary-main)] border-4 border-white"></div>
                </div>

                {/* Item 4 */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8 items-center">
                    <div className="md:order-last md:text-left">
                      <div className="bg-blue-100 inline-block px-3 py-1 rounded-full text-blue-800 font-medium mb-2">Today</div>
                      <h3 className="text-xl font-bold mb-2">National Recognition</h3>
                      <p className="text-gray-600">Operating in over 120 communities with 50,000+ lives impacted through our holistic development approach.</p>
                    </div>
                    <div className="md:order-first md:text-right md:pr-8">
                      <img src="/api/placeholder/400/220" alt="National recognition" className="rounded-lg shadow-md" />
                    </div>
                  </div>
                  <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--primary-main)] border-4 border-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Support Our Mission */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
                <p className="text-gray-600 mb-8">Your contribution helps us continue our work in transforming communities and creating opportunities for those in need.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/volunteer" className="bg-[var(--primary-main)] hover:bg-[var(--primary-main)] text-white font-bold py-3 px-6 rounded-md text-center transition-colors duration-300">
                    Volunteer With Us
                  </Link>
                  <Link to="/donate" className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md text-center transition-colors duration-300">
                    Donate Now
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative">
                <img src="/api/placeholder/800/600" alt="Support our mission" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Stay Updated</h2>
  <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="mb-8 text-gray-300">
              Subscribe to our newsletter to receive updates on our projects, events, and success stories
            </p>
            
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md flex-grow text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--primary-main)]" 
              />
              <button type="submit" className="bg-[var(--primary-main)] hover:bg-[var(--primary-main)] text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;