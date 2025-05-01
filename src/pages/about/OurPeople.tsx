

import { Linkedin, Mail, Twitter } from 'lucide-react';
import raksh from '../../assets/images/Headshot-1.jpg'
import indu from '../../assets/images/indu.jpeg'

const teamMembers = [
  {
    id: 1,
    name: "Indu Negi",
    role: "President",
    bio: "Meet Indu Negi, the passionate and visionary President of BrainyBear Educational Training and Society. After marriage, Indu continued her educational journey by completing ITI, shorthand training, and graduation, paving the way for a life dedicated to service and empowerment.She began her career as a Supervisor with Uttarakhand Seva Nidhi at the Balwadis in Almora, nurturing early childhood education at the grassroots level. Later, she worked as a Coordinator with Swayam Sewa in the Pokhar Block, focusing on the empowerment of women through Self-Help Groups (SHGs). Her efforts helped local women engage in organic farming activities, including mushroom cultivation and other income-generating projects.Indu has always believed in building self-reliant communities. She initiated skill development programs in areas such as toy making and beautician training, helping women gain financial independence.Her contributions extend into healthcare and wellness, where she has organized numerous health camps across Dehradun and other districts in Uttarakhand—often in collaboration with some of the top gynecologists in the state, addressing critical issues in women’s health. She is also deeply committed to child welfare, working to improve the lives of children in various regions of Uttarakhand through education, nutrition, and emotional support. In addition to her social and healthcare work, Indu has shown strong leadership in environmental and water conservation initiatives. She has actively organized programs under “Yamuna Bachao” for the betterment of nature, and led efforts for the Jal Jeevan Mission, focusing on water sustainability and awareness. Through her relentless dedication, Indu Negi has become a beacon of change—uplifting women, children, and communities while protecting the environment. Under her leadership, BrainyBear Educational Training and Society continues to create lasting impact across Uttarakhand.",
    image: indu,
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "alex@example.com"
    }
  },
  {
    id: 2,
    name: "Rakshendu Vardhan",
    role: "Secretary",
    bio: "Born on 10th August 1992, Rakshendu Vardhan is a graduate in Bachelor of Commerce (B.Com) and also holds a Diploma in Hotel Management with a specialization in Bartending. Beyond his academic qualifications, what truly defines Rakshendu is his unwavering passion for social service and community upliftment. From his school days, Rakshendu has actively participated in various volunteer programs, always driven by a genuine desire to make a difference. Over the years, this commitment grew stronger, leading him to work with multiple NGOs across India, contributing to diverse causes aimed at improving society. He, along with the BraiinyBear Educational Training and Society team, has been actively working for the \"Yamuna Bachao\" and \"Jaljeeva Mission\" for years—initiatives focused on environmental restoration and water conservation, showcasing his long-standing commitment to protecting natural resources and promoting sustainability. A humble and grounded individual, Rakshendu is known for his “out-of-the-box” thinking and his readiness to lend a helping hand, no matter the challenge. His journey reflects a blend of professional versatility and heartfelt dedication to social betterment—qualities that make him a valuable pillar of BraiinyBear Educational Training and Society.",
    image: raksh,
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      email: "morgan@example.com"
    }
  },

];

const OurPeople = () => {
  return (
    <div className="pt-28 pb-24 md:px-8 bg-gradient-to-b from-blue-50 to-white min-h-screen mt-10 mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Our <span className="text-[var(--primary-main)]">People</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team members who are the heart of our organization,
            bringing passion and expertise to everything we do.
          </p>
        </div>
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 mt-10 mx-auto max-w-7xl"
          >
            {/* Left Image */}
            <div className="md:w-1/3 w-full h-64 md:h-auto relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
            </div>

            {/* Right Content */}
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-md font-medium text-blue-600 mb-3">{member.role}</p>
              <p className="text-gray-600 mb-5">{member.bio}</p>

              {/* Social Links */}
              <div className="flex space-x-4 pt-3 border-t border-gray-100">
                <a href={member.socialLinks.linkedin} className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={member.socialLinks.twitter} className="text-gray-500 hover:text-blue-400 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href={`mailto:${member.socialLinks.email}`} className="text-gray-500 hover:text-red-500 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Join Our Team CTA */}
        <div className="mt-20 text-center bg-blue-50 p-10 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals to join our growing team.
            Check out our open positions and become part of our story.
          </p>
          <button className="bg-blue-600 hover:bg-[var(--primary-main)] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
            View Open Positions
          </button>
        </div>
      </div>
    </div>


  );
};

export default OurPeople;
