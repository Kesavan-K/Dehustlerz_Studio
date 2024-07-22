import TeamSection from '@/app/components/TeamCard';
import Image from 'next/image';
import React from 'react';

const OverlayImageSection = () => {
  return (
    <div>
    <div className='md:mx-20 mx-5'>
      <div className="relative w-full mt-24">
        <div className="h-96 w-full relative rounded-md overflow-hidden">
          <Image
            src="/Carousel_1.jpg"
            alt="Random image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-70 rounded-md"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white md:text-3xl text-xl uppercase font-light mb-4">Experience the Magic of Moments</h2>
          <p className="text-white text-center text-md mb-4 md:mx-40">
            At Dehustlerz Studio, we capture the true essence of your most cherished moments. Join us in exploring the beauty of nature and creating stunning photographs that you will treasure forever.
          </p>
          <a href="/pages/Contact" className="mt-4 inline-block px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition duration-300">
            Book Now
          </a>
        </div>
      </div>
    </div>
    <TeamSection/>
    </div>
  );
};

export default OverlayImageSection;
