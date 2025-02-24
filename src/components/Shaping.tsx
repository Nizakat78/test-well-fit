import React from 'react'
import Image from 'next/image'

const Shaping = () => {
  return (
    <section className="bg-white px-6 py-12 sm:px-12 lg:px-20 lg:py-20 flex flex-col items-center gap-8 rounded-lg">
      
      <div className="flex flex-col lg:flex-row items-center gap-8">
        
        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/Shaping.svg" 
            alt="Shaping- WellFit"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-gray-800">
          
          {/* Logo Section */}
          <div className="mb-8">
            <Image
              src="/logo.svg" 
              alt="WellFit Logo"
              width={100} 
              height={100}
              className="rounded-full object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Shaping the Future Together
          </h2>

          {/* Paragraphs */}
          <p className="text-base sm:text-base leading-relaxed mb-4">
            <strong>WellFit </strong>is not just an investment – it’s your personal contribution to making the world healthier, more connected, and more innovative. With our vision, we aim to uniquely combine health, education, and technology, making them accessible everywhere: in museums, zoos, nature, or directly in your home. Together, we are building a platform that sustainably inspires people worldwide and actively drives change.
          </p>
          <p className="text-base sm:text-base leading-relaxed mb-4">
            Together, we are creating a platform that sustainably inspires people worldwide and actively drives change.
          </p>

          {/* Key Investment Benefits */}
          <p className="text-base sm:text-base leading-relaxed mb-4">
            <strong>Your support becomes a valuable legacy.</strong> With an investment starting at <strong>€2,500,</strong> you become part of something truly unique and receive a strictly limited physical <strong>WellFit</strong> token. This is complemented by a digital NFT that grants you exclusive rights and benefits.
          </p>

          {/* Benefits Section */}
          <p className="text-base sm:text-base leading-relaxed mb-4">
            <strong>Voting Rights:</strong> <br />
            Influence the development of our platform with exclusive voting privileges.
            <br />
            <strong>Priority Access:</strong> Gain early access to the beta phase and enjoy exclusive features reserved for a select group of supporters.
          </p>

          {/* Physical Token as a Symbol */}
          <p className="text-base sm:text-base leading-relaxed">
            <strong>A symbol of Contribution:</strong>
            <br />
            Your Physical WellFit token serves as a collectable and a testament to your involvement in a global movement.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Shaping;
