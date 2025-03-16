"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'; // Import the router for programmatic navigation
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // AOS CSS

const Navbar: React.FC<{ dict: any, lang: 'en-US' | 'de-ES' }> = ({ dict, lang }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(lang);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // To handle dropdown visibility
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const changeLanguage = (newLang: 'en-US' | 'de-ES') => {
    setSelectedLang(newLang);

    const currentPath = window.location.pathname;
    let newPath = currentPath;

    // Check for existing language in the URL and replace it with the new language
    if (currentPath.startsWith('/en-US')) {
      newPath = currentPath.replace('/en-US', `/${newLang}`);
    } else if (currentPath.startsWith('/de-ES')) {
      newPath = currentPath.replace('/de-ES', `/${newLang}`);
    } else {
      // If there is no language in the path, prepend the selected language
      newPath = `/${newLang}${currentPath}`;
    }

    router.push(newPath); // Redirect to the new language path
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-out', // Easing function
      once: true, // Animation happens only once
    });
  }, []);

  // Generate the path for the "Buy Now" button dynamically
  const presaleLink = `/${selectedLang}/Presale`;

  return (
    <header className="bg-black text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div data-aos="fade-down" data-aos-delay="100">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={48}
            height={48}
            className="h-12 w-auto mr-4"
          />
        </div>

        {/* Hamburger Icon (for mobile) */}
        <button
          className="md:hidden text-green-400 focus:outline-none"
          onClick={toggleMobileMenu}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex space-x-6 md:space-x-6 md:items-center absolute md:static bg-black w-full md:w-auto top-16 left-0 md:top-0 z-10 p-4 md:p-0`}
        >
          <Link
            href="#Hero"
            className="block md:inline hover:text-green-400"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {dict.nav?.home || "HOME"}
          </Link>
          <Link
            href="#Insight"
            className="block md:inline hover:text-green-400"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {dict.nav?.technology || "TECHNOLOGY"}
          </Link>
          <Link
            href="#Revolution"
            className="block md:inline hover:text-green-400"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {dict.nav?.revolution || "REVOLUTION"}
          </Link>
          <Link
            href="#Adddoing"
            className="block md:inline hover:text-green-400"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {dict.nav?.addingDoing || "ADDING DOING"}
          </Link>
          <Link
            href="#Contribution"
            className="block md:inline hover:text-green-400"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            {dict.nav?.investment || "INVESTMENT"}
          </Link>
          <Link
            href="/Whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block md:inline hover:text-green-400"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {dict.nav?.whitepaper || "WHITEPAPER"}
          </Link>

          {/* Mobile View - Language Selector & Buy Now Button */}
          <div className="mt-4 flex flex-col space-y-4 md:hidden">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 text-white hover:text-green-400"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <span>{selectedLang === 'en-US' ? 'English' : 'Deutsch'}</span>
                <FaChevronDown />
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-black text-white shadow-lg p-2 rounded mt-2 w-full z-20">
                  <button
                    onClick={() => changeLanguage('en-US')}
                    className="block w-full text-left px-4 py-2 hover:bg-green-400"
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage('de-ES')}
                    className="block w-full text-left px-4 py-2 hover:bg-green-400"
                  >
                    Deutsch
                  </button>
                </div>
              )}
            </div>

            {/* "Buy Now" Button with dynamic language link */}
            <Link
              href={presaleLink}
              className="bg-green-400 px-4 py-2 rounded-full hover:bg-green-500 text-black font-semibold"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              {dict.nav?.buyNow || "Buy Now"}
            </Link>
          </div>
        </nav>

        {/* Desktop View - Language Selector & Buy Now Button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 text-white hover:text-green-400"
              data-aos="fade-down"
              data-aos-delay="1100"
            >
              <span>{selectedLang === 'en-US' ? 'English' : 'Deutsch'}</span>
              <FaChevronDown />
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-black text-white shadow-lg p-2 rounded mt-2 w-32 z-20">
                <button
                  onClick={() => changeLanguage('en-US')}
                  className="block w-full text-left px-4 py-2 hover:bg-green-400"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('de-ES')}
                  className="block w-full text-left px-4 py-2 hover:bg-green-400"
                >
                  Deutsch
                </button>
              </div>
            )}
          </div>

          {/* "Buy Now" Button with dynamic language link */}
          <Link
            href={presaleLink}
            className="bg-green-400 px-4 py-2 rounded-full hover:bg-green-500 text-black font-semibold"
            data-aos="fade-down"
            data-aos-delay="1200"
          >
            {dict.nav?.buyNow || "Buy Now"}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
