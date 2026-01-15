import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/BRAIINYBEA-removebg-preview.png'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerItems = [
    { name: "Home", path: "/" },
    { name: "Overview", path: "/overview" },
    { name: "Our People", path: "/about/our-people" },
    { name: "What We Do", path: "/our-work" },
    { name: "FAQ", path: "/faq" },
    { name: "Gallery", path: "/gallery" },
    { name: "Inquiry", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  return (
    <footer className="bg-[#dbdddf] text-black py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">

          {/* Logo and Brief Description */}
          <div className="flex flex-col items-center w-full sm:w-auto min-h-[250px]">
            <Link to="/" className="flex flex-col items-center justify-center">
              <div className="min-w-[5rem] sm:min-w-[6rem] md:min-w-[7rem] mb-4">
                <img
                  src={Logo}
                  alt="Brainy Bear Logo"
                  className="w-24 sm:w-28 md:w-32 h-auto"
                />
              </div>
              <div className="text-center">
                <span className="md:text-xl text-[var(--primary-main)] font-semibold text-[1.125rem] sm:text-[1.25rem]">
                  BraiinyBear Educational and Training Society
                </span>
                <br />
                <span className="sm:text-base md:text-lg text-[var(--primary-main)] font-semibold text-[1.125rem] sm:text-[1.25rem]">
                  ब्रैनीबियर शिक्षा प्रशिक्षण एवं सामाजिक संस्था
                </span>
              </div>
            </Link>
          </div>

          {/* Footer Items - Quick Links and Contact */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center min-h-[250px] w-full sm:w-auto">

            {/* Quick Links */}
            <div className="space-y-4 md:space-y-6 text-center flex-grow">
              <h4 className="text-xl font-semibold text-[var(--primary-main)]">Quick Links</h4>
              <ul className="space-y-2">
                {footerItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-black hover:text-[var(--primary-main)] flex items-center justify-center transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2 text-[var(--primary-main)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 md:space-y-6 text-center flex-grow">
              <h4 className="text-xl font-semibold text-[var(--primary-main)]">Contact Us</h4>
              <div className="space-y-3">
                <p className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-[var(--primary-main)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm sm:text-base">support@braiinybear.org</span>
                </p>
                <p className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-3 text-[var(--primary-main)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm sm:text-base">+91 9520770813</span>
                </p>
                <p className="flex items-start justify-center">
                  <svg className="w-5 h-5 mr-3 mt-1 text-[var(--primary-main)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm sm:text-base">15, New Cantonment Road, Dehradun, Uttarakhand</span>
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-gray-200 rounded-lg py-4 px-6 shadow-md">
          <h3 className="text-xl font-bold text-[var(--primary-main)] mb-4 text-center uppercase tracking-wider">
            Important Disclaimer
          </h3>
          <p className="text-sm sm:text-base text-black">
            <span className="text-[var(--primary-main)] font-semibold">Please be advised:</span> We do not make phone calls or send messages soliciting donations. Any such communication is <span className="text-red-600 font-semibold">unauthorized</span> and should be disregarded.
          </p>
          <p className="text-sm sm:text-base text-black mt-2">
            We take pride in our <span className="text-[var(--primary-main)] font-semibold">transparency</span> and authenticity. Our <span className="text-[var(--primary-main)] font-semibold">only official office</span> is located in <span className="text-[var(--primary-main)]">Dehradun</span>, and we do not have any branches or representatives operating elsewhere.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 sm:mt-10 pt-6 border-t border-gray-300 text-xs sm:text-sm text-gray-500">
          <p>&copy; {currentYear} BraiinyBear Educational Society. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer