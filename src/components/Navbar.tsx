"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-12 w-auto mr-4" />
        </div>

        {/* Hamburger Icon (for mobile) */}
        <button
          className="md:hidden text-green-400 focus:outline-none"
          onClick={toggleMobileMenu}
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
          <a href="#Hero" className="block md:inline hover:text-green-400">
            HOME
          </a>
          <a href="#Insight" className="block md:inline hover:text-green-400">
            TECHNOLOGY
          </a>
          <a href="#Revolution" className="block md:inline hover:text-green-400">
            REVOLUTION
          </a>
          <a href="#Adddoing" className="block md:inline hover:text-green-400">
            ADDING DOING
          </a>
          <a
            href="#Contribution"
            className="block md:inline hover:text-green-400"
          >
            INVESTMENT
          </a>
          <a
            href="/Whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block md:inline hover:text-green-400"
          >
            WHITEPAPER
          </a>

          {/* Mobile View - Language Selector & Buy Now Button */}
          <div className="mt-4 flex flex-col space-y-4 md:hidden">
            <button className="text-green-400 px-4 py-2 hover:bg-green-400 hover:text-white">
              EN
            </button>
            <a
              href="/Presale"
              className="bg-green-400 px-4 py-2 rounded-full hover:bg-green-500 text-black font-semibold"
            >
              Buy Now
            </a>
          </div>
        </nav>

        {/* Desktop View - Language Selector & Buy Now Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-green-400 px-4 py-2 hover:bg-green-400 hover:text-white">
            EN
          </button>
          <a
            href="/Presale"
            className="bg-green-400 px-4 py-2 rounded-full hover:bg-green-500 text-black font-semibold"
          >
            Buy Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
