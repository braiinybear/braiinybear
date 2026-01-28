const highlights = [
  {
    title: "Education & Training",
    href: '/education-design.png'
  },
  {
    title: "Animal Welfare",
    href: 'Animal Welfare.png'
  },
  {
    title: "Community Welfare",
    href: 'Community Welfare.png'
  },
  {
    title: "Holistic Growth",
    href: 'Holistic Growth.png'
  },
];


const MissionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Mission</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary-main)] to-blue-500 mx-auto mb-6 rounded-3xl hover:rounded-[0px] transition-all duration-500
        "></div>

        <div className="flex flex-wrap justify-center gap-8 w-full">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl hover:shadow-xl transition-all w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] flex-shrink-0 h-80 lg:h-96"
            >
              <img src={item.href} alt={item.title} className="w-full h-full rounded-3xl object-cover hover:rounded-[0px] transition-all duration-500" />
              {/* <p className="text-gray-600 text-sm">{item.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionSection