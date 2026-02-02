

import { Link } from "react-router-dom";
  
  const workAreas = [
    {
      id: 2,
      title: "Senior Citizens",
      description:
        "Supporting elderly care through healthcare assistance, companionship programs, and retirement planning.",
      color: "bg-purple-50 border-purple-200",
      iconBg: "bg-purple-100",
      href: "/Senior Citizens.png",
      hoverColor: "hover:bg-purple-100",
    },
    {
      id: 3,
      title: "INFORMATION AND TECHNOLOGY",
      description:
        "Providing education and training in the latest technologies to help learners stay up to date with global developments.",
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
      href: "/INFORMATION AND TECHNOLOGY.png",
      hoverColor: "hover:bg-blue-100",
    },
    {
      id: 4,
      title: "Agriculture",
      description:
        "Promoting sustainable farming practices and supporting small scale farmers with resources and training to become self sufficient.",
      color: "bg-green-50 border-green-200",
      iconBg: "bg-green-100",
      href: "/Agriculture.png",
      hoverColor: "hover:bg-green-100",
    },
    {
      id: 5,
      title: "Animal Husbandry",
      description:
        "Providing veterinary training for animal care, and support for livestock-based livelihoods.",
      color: "bg-amber-50 border-amber-200",
      iconBg: "bg-amber-100",
      href: "/Animal Husbandry.png",
      hoverColor: "hover:bg-amber-100",
    },
    {
      id: 6,
      title: "Environment",
      description:
        "Promoting conservation projects, awareness programs, and sustainable practices to protect our planet.",
      color: "bg-emerald-50 border-emerald-200",
      iconBg: "bg-emerald-100",
      href: "/Environment.png",
      hoverColor: "hover:bg-emerald-100",
    },
    {
      id: 7,
      title: "Women Empowerment",
      description:
        "Promoting gender equality and women empowerment through Skills Training, Digital Literacy and Business Guidance.",
      color: "bg-pink-50 border-pink-200",
      iconBg: "bg-pink-100",
      href: "/Women Empowerment.png",
      hoverColor: "hover:bg-pink-100",
    },
    {
      id: 8,
      title: "ADDICTION SUPPORT AND REHABILITATION",
      description:
        "Offering counseling services, recovery programs, and reintegration support for those affected by addiction.",
      color: "bg-red-50 border-red-200",
      iconBg: "bg-red-100",
      href: "/Addiction Support And REHABILITATION.png",
      hoverColor: "hover:bg-red-100",
    },
  ];

const WorkAreaSection = () => {
  return (
     <section className="py-10 px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Our Work Areas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              We focus on these key areas to create meaningful and lasting impact within communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workAreas.slice(0, 4).map((area) => (
               <Link
                  to={`/${area.title.toLowerCase().replace(/\s+/g, "-")}`}
                >

                  <img src={area.href} alt={area.title} />
              
                </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {workAreas.slice(4).map((area) => (
              <Link
                  to={`/${area.title.toLowerCase().replace(/\s+/g, "-")}`}>   
                  <img src={area.href} alt={area.title} />
                </Link>
            ))}
          </div>
        </div>
      </section>
  )
}

export default WorkAreaSection