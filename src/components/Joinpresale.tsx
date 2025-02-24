import React from 'react';
import Image from 'next/image';

const Joinpresale = () => {
  return (
    <section className="bg-blue-500 text-white p-6 md:p-12 rounded-lg flex flex-col md:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Don't miss your chance <br />
          <span className="text-yellow-300">become part of WellFit</span> and actively shape the future!
        </h1>
        <a 
           href="/Presale"
           className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Join Now The Pre-Sale
          </a>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full md:w-80 h-64 md:h-80">
          <Image
            src="/Joinpresale.svg"
            alt="Illustration of a WellFit promotion"
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Joinpresale;
