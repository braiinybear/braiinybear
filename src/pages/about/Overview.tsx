import { Helmet } from 'react-helmet';
import bgImage from '../../assets/images/IMG-20250319-WA0012.jpg'
import { Target, Award, Heart, Lightbulb, ShieldCheck, FileText, ExternalLink } from 'lucide-react';


const About: React.FC = () => {


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

  return (
    <>
      <Helmet>
        <title>About BraiinyBear Society | Empowering Education & Community</title>
        <meta name="description" content="Learn about BraiinyBear Society’s mission, vision, core values, and journey to empower communities through education and innovation." />
        <meta name="keywords" content="BraiinyBear, education, community empowerment, innovation, sustainability, women empowerment" />
        <meta name="author" content="BraiinyBear Society" />
      </Helmet>
      <div className="overview-container">
        {/* Hero Banner */}
        <section
          className="relative bg-cover bg-center bg-no-repeat py-24 px-6"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0"></div>

          <div className="relative container mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[var(--primary-main)] to-white text-transparent bg-clip-text animate-pulse">
              About the BraiinyBear Society
            </h1>
            <div className="w-32 h-1 bg-[var(--primary-main)] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-white text-xl mb-10 leading-relaxed">
              Empowering minds, transforming communities through accessible education
              and innovative learning experiences.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-[var(--primary-main)] hover:bg-blue-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Discover Our Programs
              </button>
              <button className="bg-black text-blue-400 hover:bg-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                Join Us
              </button>
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="bg-gradient-to-b from-white-500 to-gray-600 text-center py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto space-y-10">


              {/* Vision Section */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01]">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-[var(--primary-main)] w-full md:w-2/12 p-6 flex items-center justify-center">
                    <span className="text-3xl text-white font-bold">Vision</span>
                  </div>
                  <div className="p-8 md:p-10 text-left w-full md:w-10/12">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      At BraiinyBear Educational and Training Society, we envision a world rooted in kindness, learning, and self-sufficiency. A world where generations work together; where the wisdom of elders nurtures young minds, and youthful leadership drives positive change.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      We dream of inclusive communities where women rise with confidence and dignity, where the environment is cherished, and where agriculture and animal care are respected as vital and modern pursuits. A world free from addiction, where every individual has the opportunity to learn, grow, and thrive with purpose.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Section */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.01]">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-[var(--primary-main)] w-full md:w-2/12 p-6 flex items-center justify-center">
                    <span className="text-3xl text-white font-bold">Mission</span>
                  </div>
                  <div className="p-8 md:p-10 text-left w-full md:w-10/12">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      Our mission is to empower individuals and communities through practical education, skill development, and compassionate action. At BraiinyBear, we are committed to:
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      <span className="font-semibold underline">Education</span>: Fostering empathy, modern skills and entrepreneurship within communities
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      <span className="font-semibold underline">Skill Training</span>: Equipping people to intelligently use available resources at hand and become self-sufficient
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      <span className="font-semibold underline">Women Empowerment</span>: Providing women with the tools, confidence, and the platform to shape their own future
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      <span className="font-semibold underline">Environmental Care</span>: Promoting awareness and accountability to protect the planet for wildlife and future generations
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      <span className="font-semibold underline">Animal Welfare</span>: Educating people to understand the needs of animals and ensure responsible, humane care
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      <span className="font-semibold underline">Healthier Society</span>: Combating substance abuse through awareness, compassion, and access to recovery support
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      <span className="font-semibold underline">Elderly Support</span>: Creating inclusive spaces where elders are respected, connected, and empowered to learn modern skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach Section
    <div className="max-w-5xl mx-auto mt-10">
      <div className="bg-black rounded-xl shadow-xl overflow-hidden">
        <div className="p-10">
          <h3 className="text-3xl font-semibold mb-6 text-blue-400">Our Approach</h3>
          <p className="text-lg mb-8 text-white">
            At Brainy Bear Society, we combine traditional wisdom with cutting-edge educational practices to create meaningful learning journeys. Our programs are:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-900 p-6 rounded-lg shadow-md transform transition-all hover:-translate-y-1">
              <h4 className="font-bold text-xl mb-3 text-blue-300">Learner-Centered</h4>
              <p className="text-gray-200">Tailored to individual needs and learning styles, ensuring that each person's unique journey is supported and valued.</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-lg shadow-md transform transition-all hover:-translate-y-1">
              <h4 className="font-bold text-xl mb-3 text-blue-300">Community-Driven</h4>
              <p className="text-gray-200">Developed with and for the communities we serve, addressing real-world challenges and cultural contexts.</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-lg shadow-md transform transition-all hover:-translate-y-1">
              <h4 className="font-bold text-xl mb-3 text-blue-300">Results-Oriented</h4>
              <p className="text-gray-200">Focused on practical skills and measurable outcomes that translate into tangible benefits for learners and communities.</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
          </div>
        </section>

        {/* Legal Certifications Section */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Legal Registration</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto mb-6 rounded-full"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                We are a legally registered and compliant organization dedicated to transparency, accountability, and social excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-center bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
              {/* Left Column: Description */}
              <div className="md:col-span-7 space-y-6 text-left">
                <div className="bg-blue-100 text-[var(--primary-main)] inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold mb-2">
                  <ShieldCheck className="h-4 w-4 mr-2" /> Registered Society
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight">
                  BraiinyBear Educational and Training Society
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our society is officially incorporated under active regulatory frameworks, establishing us as a formal educational, training, and social welfare institution. We strictly adhere to standard compliance procedures, ensuring high operational transparency for all partners, members, and supporters.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center bg-white border border-gray-100 px-4 py-2.5 rounded-xl shadow-xs">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2.5"></div>
                    <span className="text-sm font-medium text-gray-700">Compliance: 100% Active</span>
                  </div>
                  <div className="flex items-center bg-white border border-gray-100 px-4 py-2.5 rounded-xl shadow-xs">
                    <span className="text-sm font-medium text-gray-500 mr-1.5">Authority:</span>
                    <span className="text-sm font-semibold text-gray-700">Registrar of Societies</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Certificate Card */}
              <div className="md:col-span-5 w-full">
                <div className="bg-white border-2 border-dashed border-blue-200 rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:border-blue-400 flex flex-col justify-between h-full min-h-[260px] text-left">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-blue-50 text-[var(--primary-main)] w-12 h-12 rounded-xl flex items-center justify-center">
                        <FileText className="h-6 w-6" />
                      </div>
                      <span className="bg-green-100 text-green-700 text-xs px-2.5 py-1 rounded-full font-bold animate-pulse">
                        VERIFIED
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1">
                      Certificate of Registration
                    </h4>
                    <p className="text-xs text-gray-500 font-mono mb-4">
                      Reg No: UK0600842025014704
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Official legal document certifying the incorporation of BraiinyBear Society as a recognized training and welfare body.
                    </p>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <a
                      href="/SocietyRegistrationletter.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[var(--primary-main)] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-sm hover:shadow transition duration-300 transform hover:scale-[1.02]"
                    >
                      View Document <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
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
      </div>
    </>
  )
}

export default About
