  import {
  ArrowRight,
  BookOpen,
  Users,
  Lightbulb,
  Leaf,
  PawPrint,
  Sun,
  Heart,
  Activity,
} from "lucide-react";

import { Link } from "react-router-dom";
  
  // Work areas with icons and descriptions
  const workAreas = [
    {
      id: 1,
      title: "Education",
      icon: <BookOpen className="h-12 w-12 mb-4 text-blue-600" />,
      description:
        "Providing quality education and learning resources to underprivileged children and communities.",
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
      hoverColor: "hover:bg-blue-100",
    },
    {
      id: 2,
      title: "Senior Citizens",
      icon: <Users className="h-12 w-12 mb-4 text-purple-600" />,
      description:
        "Supporting elderly care through healthcare assistance, companionship programs, and retirement planning.",
      color: "bg-purple-50 border-purple-200",
      iconBg: "bg-purple-100",
      hoverColor: "hover:bg-purple-100",
    },
    {
      id: 3,
      title: "Innovation and Technology",
      icon: <Lightbulb className="h-12 w-12 mb-4 text-[var(--primary-main)]" />,
      description:
        "Leveraging technology to solve social challenges and foster innovation in rural communities.",
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
      hoverColor: "hover:bg-blue-100",
    },
    {
      id: 4,
      title: "Agriculture",
      icon: <Leaf className="h-12 w-12 mb-4 text-green-600" />,
      description:
        "Promoting sustainable farming practices and supporting small-scale farmers with resources and training.",
      color: "bg-green-50 border-green-200",
      iconBg: "bg-green-100",
      hoverColor: "hover:bg-green-100",
    },
    {
      id: 5,
      title: "Animal Husbandry",
      icon: <PawPrint className="h-12 w-12 mb-4 text-amber-600" />,
      description:
        "Providing veterinary services, training in animal care, and support for livestock-based livelihoods.",
      color: "bg-amber-50 border-amber-200",
      iconBg: "bg-amber-100",
      hoverColor: "hover:bg-amber-100",
    },
    {
      id: 6,
      title: "Environment",
      icon: <Sun className="h-12 w-12 mb-4 text-emerald-600" />,
      description:
        "Implementing conservation projects, awareness programs, and sustainable practices to protect our planet.",
      color: "bg-emerald-50 border-emerald-200",
      iconBg: "bg-emerald-100",
      hoverColor: "hover:bg-emerald-100",
    },
    {
      id: 7,
      title: "Women Empowerment",
      icon: <Heart className="h-12 w-12 mb-4 text-pink-600" />,
      description:
        "Creating opportunities for women through skill development, microfinance, and entrepreneurship support.",
      color: "bg-pink-50 border-pink-200",
      iconBg: "bg-pink-100",
      hoverColor: "hover:bg-pink-100",
    },
    {
      id: 8,
      title: "Drug Rehabilitation",
      icon: <Activity className="h-12 w-12 mb-4 text-red-600" />,
      description:
        "Offering recovery programs, counseling services, and reintegration support for those affected by addiction.",
      color: "bg-red-50 border-red-200",
      iconBg: "bg-red-100",
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
              We take a holistic approach to community development through these
              key focus areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workAreas.map((area) => (
              <div
                key={area.id}
                className={`${area.color} border p-6 rounded-lg ${area.hoverColor} transition-all duration-300 hover:shadow-lg text-center`}
              >
                <div
                  className={`${area.iconBg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <Link
                  to={`/${area.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default WorkAreaSection