import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeroSection = ({ dict }: { dict: any }) => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-out", // Easing function
      once: true, // Animation happens only once
    });
  }, []); // Empty array ensures it runs only once when the component mounts

  return (
    <section
      id="Hero"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/Hero.svg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8">
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
          data-aos="fade-up" // AOS fade-up effect
          data-aos-delay="200" // Optional delay to stagger animations
        >
          {dict.hero?.title || "Discover the future of technology, health, and education"}
        </h1>
        <p
          className="text-base sm:text-lg md:text-xl font-medium mb-6"
          data-aos="fade-up" // AOS fade-up effect
          data-aos-delay="400" // Optional delay to stagger animations
        >
          {dict.hero?.description || "A revolutionary platform that rewards you while boosting your health and knowledge"}
        </p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg px-6 py-3 rounded-full font-bold transition"
          data-aos="fade-up" // AOS fade-up effect
          data-aos-delay="600" // Optional delay to stagger animations
        >
          {dict.hero?.button || "Los Geht&apos;s"}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
