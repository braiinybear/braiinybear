const highlights = [
  {
    icon: "🎓",
    title: "Education & Training",
    description:
      "Equipping people to make intelligent use of the resources at hand and become self sufficient",
  },
  {
    icon: "🐾",
    title: "Animal Welfare",
    description:
      "Helping people understand the needs of their animals and treat them with better care",
  },
  {
    icon: "🤝",
    title: "Community Welfare",
    description: "To join the fight against drugs and help with rehabilitation, while also providing necessary care & support to the elderly",
  },
  {
    icon: "🌱",
    title: "Holistic Growth",
    description: "Nurturing mind, body, and soul for balanced development.",
  },
];


const MissionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Mission</h2>
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
  )
}

export default MissionSection