import React from 'react'
import Image from "next/image";

const Contribution = () => {
  return (
      <section id='Contribution'
       className="bg-white px-6 py-12 sm:px-12 lg:px-20 lg:py-20 flex flex-col items-center gap-8">

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="flex-1 text-gray-800">
                <div className="mb-8">
                <Image
                src="/logo.svg" 
                alt="WellFit Logo"
                width={100} 
                height={100}
                className="rounded-full object-contain"
                />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Your contribution to a better future
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-4">
            By participating in the first phase of our pre-sale, you are laying
            a cornerstone for the future of <strong>WellFit</strong> – and
            beyond. Your investment is more than just financial support: it
            secures the patent for our groundbreaking technology and empowers us
            to turn the vision of WellFit into reality.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-4">
            Through the acquisition of <strong>WellFit Tokens</strong>, you
            become part of a movement that redefines the boundaries of health,
            education, and technology. You help us protect innovation, enhance
            quality of life, and create a platform that inspires people
            worldwide.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-4 font-semibold">
            Your contribution makes a difference.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-4">
            You won't just witness a revolution in health and technology –
            you'll actively shape it. Together, we're building a world where
            wellness and knowledge go hand in hand. Join us as WellFit moves the
            world forward.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            <strong>Your engagement matters.</strong> Your decision propels us
            all toward a brighter future.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/Contribution.svg" 
            alt="A Better Future - WellFit"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contribution
