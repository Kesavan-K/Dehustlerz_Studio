"use client"
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const FactItem = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger animation when 50% of the section is in view
  });

  return (
    <div ref={ref} className="py-5 md:mt-20 mt-10" id="about_us">
      <div className="mx-auto">
        <div className="text-center mx-auto max-w-lg">
          <p className="text-orange-600 uppercase mb-4 font-semibold text-lg">Why Choose Us!</p>
          <h1 className="md:text-5xl text-3xl font-extralight mb-5 md:px-0 px-5">The Leading Photo Studio In Tamilnadu</h1>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 lg:px-20 px-5 py-5">
          <div className="bg-gray-100 text-center h-fit p-5 md:mt-36 lg:mt-20 rounded-md">
            {inView && <h1 className="text-5xl text-orange-600 mb-3 font-light "><CountUp start={1} end={7} duration={6} />+</h1>}
            <h4 className="mb-3">YEARS EXPERIENCE</h4>
            <span>With seven years of experience, we have honed our skills to capture perfect moments. Our expertise ensures that your photos are nothing short of perfection.</span>
          </div>
          <div className="bg-gray-100 text-center h-full p-5 rounded-md">
            {inView && <h1 className="text-5xl text-orange-600 mb-3 font-light"><CountUp start={1} end={600} duration={2} />+</h1>}
            <h4 className="mb-3">WEDDINGS</h4>
            <span>We have successfully covered 600 weddings, each unique and special. Our team knows how to capture the essence of your special day, creating memories that last a lifetime. With every wedding, we bring our unparalleled expertise to ensure your love story is told in the most beautiful way possible.</span>
          </div>
          <div className="bg-gray-100 text-center h-fit p-5 md:mt-36 lg:mt-20 rounded-md">
            {inView && <h1 className="text-5xl text-orange-600 mb-3 font-light"><CountUp start={1} end={5} duration={6} />+</h1>}
            <h4 className="mb-3">AWARDS</h4>
        <span>Our dedication to excellence has been recognized with 5 prestigious awards in the industry. We strive to deliver award-winning quality in every project we undertake.</span>
      </div>
    </div>
  </div>
</div>

  )
}

export default FactItem
