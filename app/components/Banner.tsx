"use client"
import React from 'react';
import Typewriter from 'typewriter-effect';

const Banner = () => {
  return (
    <div className=" w-full my-12 bg-black py-12 text-white">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <p className="text-danger text-lg">SPECIAL OFFER</p>
          <h2 className="text-4xl">
            Get <span className="text-slate-50 text-5xl">30%</span> Off on your{' '}
            <span className=" text-gray-500">
              <Typewriter
                options={{
                  strings: ['FirstPhotoshoot'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <p>
            Capture your moments with our professional photography services. From stunning portraits to breathtaking landscapes, our team is dedicated to preserving your memories with creativity and expertise. Book now and enjoy a 30% discount on your first photoshoot.
          </p>
          <a href="/pages/Contact" className="mt-4 inline-block px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition duration-300">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
