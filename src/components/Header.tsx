import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/BRAIINYBEA-removebg-preview.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const currentPath = window.location.pathname;
    setActiveItem(currentPath);

    window.addEventListener("scroll", handleScroll);

    // Close mobile menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Who We Are",
      path: "/about",
      children: [
        { name: "Overview", path: "/overview" },
        { name: "Our People", path: "/about/our-people" },
        { name: "Achievements", path: "/about/achievements" },
      ],
    },
    { name: "What We Do", path: "/our-work" },
    { name: "Gallery", path: "/gallery" },
    { name: "Inquiry", path: "/contact" },
  ];

  const buttonClasses = "bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50";

  return (
    <header
      className={`w-full top-0 left-0 z-50 transition-all duration-700 ${isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white/80 backdrop-blur-md py-2 sm:py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - Added additional padding/margins */}
        <Link
          to="/"
          className="flex items-center group sm:pl-4 md:pl-6 lg:pl-8"
          onClick={() => {
            setActiveItem("/");
            setIsMenuOpen(false);
          }}
        >
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.path}
                onClick={() => setActiveItem(item.path)}
                className={`relative text-base xl:text-lg font-medium transition-all duration-300 group-hover:text-[var(--primary-main)] ${activeItem === item.path ? "text-[var(--primary-main)]" : "text-black"
                  } flex items-center`}
                aria-expanded={item.children ? "false" : undefined}
                aria-haspopup={item.children ? "true" : undefined}
              >
                {item.name}
                {item.children && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                <span
                  className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-[var(--primary-main)] transition-all duration-300 ${activeItem === item.path ? "w-full" : "group-hover:w-full"
                    }`}
                ></span>
              </Link>

              {/* Desktop Dropdown */}
              {item.children && (
                <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-[200px]">
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => {
                        setActiveItem(child.path);
                        setIsMenuOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-[var(--primary-main)] transition-all duration-200"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex space-x-2 xl:space-x-4 pr-2 sm:pr-4 md:pr-6 lg:pr-8">
            <button className={buttonClasses}>
              Volunteer
            </button>
            <button className={buttonClasses}>
              Get Involved
            </button>
          </div>
        </nav>

        {/* Mobile/Tablet Menu Button */}
        <button
          ref={buttonRef}
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          className="lg:hidden text-black focus:outline-none bg-white/80 p-2 rounded-md transition-all duration-300 hover:bg-gray-100 mr-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-6 relative flex items-center justify-center">
            <span
              className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ${isMenuOpen ? "rotate-45 top-3" : "rotate-0 top-1"
                }`}
            ></span>
            <span
              className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ${isMenuOpen ? "opacity-0 w-0" : "opacity-100 w-full top-3"
                }`}
            ></span>
            <span
              className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
                }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed top-[60px] sm:top-[72px] md:top-[84px] left-0 w-full bg-white shadow-xl transition-all duration-500 ease-in-out ${isMenuOpen
              ? "max-h-screen opacity-100 overflow-y-auto"
              : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
            } lg:hidden`}
        >
          <ul className="flex flex-col items-center space-y-1 py-4">
            {navItems.map((item) => (
              <li key={item.name} className="w-full p-0 m-0">
                {item.children ? (
                  <div className="w-full">
                    <button
                      className="w-full cursor-pointer py-3 px-4 text-base md:text-lg font-medium text-black hover:text-[var(--primary-main)] hover:bg-gray-100 rounded-md flex items-center justify-between"
                      onClick={() => toggleDropdown(item.name)}
                      aria-expanded={openDropdown === item.name}
                    >
                      {item.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform duration-300 ${openDropdown === item.name ? "rotate-180" : ""
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`flex flex-col text-left transition-all duration-300 overflow-hidden ${openDropdown === item.name ? "max-h-48 opacity-100 py-2" : "max-h-0 opacity-0"
                        }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => {
                            setActiveItem(child.path);
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                          className="py-2 px-4 text-black text-sm md:text-base hover:text-[var(--primary-main)] hover:bg-gray-100 rounded-md"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 text-base md:text-lg font-medium transition-all duration-300 ${activeItem === item.path
                        ? "text-[var(--primary-main)] bg-gray-100"
                        : "text-black hover:text-[var(--primary-main)] hover:bg-gray-100"
                      }`}
                    onClick={() => {
                      setActiveItem(item.path);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="w-full px-4 pt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className={`${buttonClasses} w-full sm:w-1/2`}>
                Volunteer
              </button>
              <button className={`${buttonClasses} w-full sm:w-1/2`}>
                Donate
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;