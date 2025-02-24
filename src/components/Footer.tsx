import React from 'react';
import Image from 'next/image';
import { FaTwitter } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";








const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 text-center">
      {/* Logo Section */}
      <div className="mb-6">
        <Image
          src="/logo.svg"
          alt="WellFit Logo"
          width={100}
          height={100}
          className="mx-auto"
        />
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center gap-6 mb-6">
      <a
          href="https://www.facebook.com/profile.php?id=61567781161379"
          target="Facebook"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-600 text-2xl"
        >
          <i className="fab fa-linkedin"><FaFacebook /> </i> {/* Font Awesome Facebook */}
        </a>

        <a
          href="https://x.com/BerndGuggenber2"
          target="twitter"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 text-2xl"
        >
          <i className="fab fa-twitter"> <FaTwitter /></i> {/* Font Awesome Twitter */}
        </a>
        <a
          href="https://www.instagram.com/wellfit_original/"
          target="Instagram"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-600 text-2xl"
        >
          <i className="fab fa-linkedin"><FaInstagram /></i> {/* Font Awesome Instagram */}
        </a>
        <a
          href="https://www.youtube.com/channel/UC0nP_XYnDoIUfsKmhS926ug"
          target="Youtube "
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-600 text-2xl"
        >
          <i className="fab fa-linkedin"><TbBrandYoutubeFilled /></i> {/* Font Awesome Youtube */}
        </a>
        <a
          href="https://www.tiktok.com/@wellfit_original"
          target="Tiktok "
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-600 text-2xl"
        >
          <i className="fab fa-linkedin"><AiFillTikTok /> </i> {/* Font Awesome Tiktok */}
        </a>
        <a
          href="https://t.me/WellFit_io"
          target="Telegram"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-600 text-2xl"
        >
          <i className="fab fa-linkedin"><FaTelegram /> </i> {/* Font Awesome Telegram */}
        </a>
      </div>

      {/* Newsletter Section */}
      <h2 className="text-xl font-bold mb-4">Newsletter Signup</h2>
      <p className="mb-6 text-gray-300">
        Stay informed about the upcoming phases of WellFit and the release of our whitepapers!
      </p>

      <form className="flex justify-center items-center gap-4 mb-8">
        <input
          type="email"
          placeholder="Enter your email address..."
          className="px-4 py-2 rounded-full w-full max-w-md border border-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-400 transition"
        >
          Subscribe
        </button>
      </form>

      {/* Copyright Section */}
      <p className="text-gray-400">Copyright © 2024 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
