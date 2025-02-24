import React from 'react'
import Image from 'next/image'

const Insight = () => {
  return (
    <div id="Insight"
     className="container mx-auto px-9 py-20">
    <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden border">
      {/* Content Section */}
      <div className="flex-1 p-6">
        {/* Logo */}
        <div className="mb-4">
          <Image
            src="/logo.svg"
            alt="WellFit Logo"
            width={80}
            height={80}
            className="mx-auto lg:mx-0"
          />
        </div>
        {/* Title */}
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 text-center lg:text-left">
          An Exclusive Insight
        </h1>
        {/* Text Content */}
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
          There are rare moments when opportunities arise that have the potential to transform our lives profoundly —{' '}
          <strong className="font-semibold">WellFit</strong> is precisely such a chance. Our vision is not just ambitious;
          it is revolutionary: we aim to connect <strong>health</strong>, <strong>technology</strong>, and{' '}
          <strong>education</strong> in an entirely new and transformative way.
        </p>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
          Imagine leveraging cutting-edge technologies — from <strong>artificial intelligence</strong> to{' '}
          <strong>augmented reality</strong> — that not only expand our knowledge but also significantly enhance our
          well-being. <strong>WellFit</strong> is more than a project; it is a movement redefining how we learn, move,
          and interact with each other.
        </p>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
          With a <strong>holistic approach</strong>, we aspire to enrich peoples daily lives, motivating them to achieve
          their goals, lead healthier lives, and enjoy the process. We focus on{' '}
          <strong>interactive experiences</strong> that blend innovation and <strong>sustainability</strong>, creating a
          platform that not only inspires but also drives positive change worldwide.
        </p>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          This is more than an idea — its the beginning of a new era.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <Image
          src="/Insight.svg"
          alt="Futuristic Insight"
          width={1238}
          height={682}
          className="w-full h-auto"
        />
      </div>
    </div>
  </div>
  )
}

export default Insight
