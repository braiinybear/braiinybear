import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/BRAIINYBEA-removebg-preview.png'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerItems =  [
    { name: "Home", path: "/" },
    { name: "Overview", path: "/overview" },
     { name: "Our People", path: "/about/our-people" },
    { name: "what we do", path: "/our-work" },
    { name: "Gallery", path: "/gallery" },
    { name: "Inquiry", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-100 text-black pt-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo and Brief Description */}
          <div className="flex items-start sm:pl-4 md:pl-6 lg:pl-8">
            <Link to="/" className="flex items-center group">
              <div className="min-w-[4.5rem] sm:min-w-[5.5rem] md:min-w-[6rem] overflow-hidden transform transition-all duration-300 group-hover:scale-105">
                <img
                  src={Logo}
                  alt="Brainy Bear Logo"
                  className="w-20 sm:w-24 md:w-28 h-auto"
                />
              </div>
              <div className="ml-3 flex flex-col leading-tight">
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-brainy-blue">
                  Brainy Bear Educational and Training Society
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-brainy-blue">
                  ब्रैनीबियर शिक्षा प्रशिक्षण एवं सामाजिक संस्था
                </span>
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-6 sm:mt-0">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[var(--primary-main)] text-left">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerItems.map((item) => (
                <li key={item.name} className='m-0 p-2'>
                  <Link
                    to={item.path}
                    className="text-black hover:text-[var(--primary-main)] transition-colors flex items-center"
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
          <div className=" md:mt-0">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[var(--primary-main)] text-left">Contact Us</h4>
            <div className="space-y-3 sm:space-y-4">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-[var(--primary-main)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm sm:text-base">support@braiinybear.org</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-[var(--primary-main)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm sm:text-base">+91 9520770813</span>
              </p>
              <p className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 text-[var(--primary-main)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm sm:text-base text-left">15, New Cantonment Road<br />Dehradun, Uttarakhand</span>
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 sm:mt-10 bg-gray-200 rounded-lg py-4 px-3 sm:px-6 shadow-md">
          <h3 className="text-lg sm:text-xl font-bold text-[var(--primary-main)] mb-3 sm:mb-4 text-center uppercase tracking-wide">
            Important Disclaimer
          </h3>
          <div className="text-black space-y-2 sm:space-y-3 text-xs sm:text-sm">
            <p>
              <span className="text-[var(--primary-main)] font-medium">Please be advised:</span> We do not make phone calls or send messages soliciting donations. Any such communication is
              <span className="text-red-500 font-semibold"> unauthorized</span> and should be disregarded.
            </p>
            <p>
              We take pride in our <span className="text-[var(--primary-main)] font-medium">transparency</span> and authenticity — our <span className="text-[var(--primary-main)] font-medium">only official office</span> is located in <span className="text-[var(--primary-main)]">Dehradun</span>, and we do not have any branches or representatives operating elsewhere.
            </p>
            <p>
              For genuine updates, inquiries, or assistance, please reach out through our <span className="text-[var(--primary-main)] font-medium">official channels</span> listed above. Your trust means everything to us.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-gray-300 text-xs sm:text-sm text-gray-500 pb-4">
          <p>&copy; {currentYear} Brainy Bear Educational Society. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
