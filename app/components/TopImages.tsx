"use client";
import Image from "next/image";
import React from "react";

const TopImages = () => {
  return (
    <div>
      <section>
        <div className="px-5 lg:py-24 mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col lg:h-svh justify-center">
            <div className="mt-6 md:py-6 mb-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center ">
                <div>
                  {" "}
                  <span className="text-gray-600  uppercase text-xs font-medium ">
                    {" "}
                    Creative Excellence{" "}
                  </span>
                  <p className="text-4xl md:mt-8 mt-4 tracking-tighter font-semibold text-gray-700 text-balance">
                    {" "}
                    Innovative Photography Solutions{" "}
                  </p>
                  <p className="text-sm  mt-4 text-gray-700 text-balance">
                    {" "}
                    Discover how we tailor our photography services to capture
                    the essence of every moment with unparalleled creativity and
                    precision.
                  </p>
                  <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                    <div className="inline-flex items-center gap-2  text-xs text-gray-700">
                      {" "}
                      <svg
                        className="icon icon-tabler text-gray-700 size-4 icon-tabler-camera"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M14.828 5.172l1.172 1.172a2 2 0 0 1 0 2.828l-11 11a2 2 0 0 1 -2.828 0l-1.172 -1.172a2 2 0 0 1 0 -2.828l11 -11a2 2 0 0 1 2.828 0"></path>
                        <circle cx="10" cy="10" r="7"></circle>
                      </svg>{" "}
                      <span className="text-gray-950 font-medium text-sm">
                        {" "}
                        Creative Vision{" "}
                      </span>{" "}
                    </div>
                    <div className="inline-flex items-center gap-2  text-xs text-gray-700">
                      {" "}
                      <svg
                        className="icon icon-tabler text-gray-700 size-4 icon-tabler-heart"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M20 4a4 4 0 0 1 0 8l-8 8l-8 -8a4 4 0 1 1 5.657 -5.657l2.343 2.343l2.343 -2.343a4 4 0 0 1 5.657 5.657l-8 8"></path>
                      </svg>{" "}
                      <span className="text-gray-950 font-medium text-sm">
                        {" "}
                        Emotional Impact{" "}
                      </span>{" "}
                    </div>
                    <div className="inline-flex items-center gap-2  text-xs text-gray-700">
                      {" "}
                      <svg
                        className="icon icon-tabler text-gray-700 size-4 icon-tabler-star"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M12 17.5l-6.5 4l2 -7l-6.5 -4h8.5l2.5 -7l2.5 7h8.5l-6.5 4l2 7z"></path>
                      </svg>{" "}
                      <span className="text-gray-950 font-medium text-sm">
                        {" "}
                        Client Satisfaction{" "}
                      </span>{" "}
                    </div>
                    <div className="inline-flex items-center gap-2  text-xs text-gray-700">
                      {" "}
                      <svg
                        className="icon icon-tabler text-gray-700 size-4 icon-tabler-lightbulb"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M12 3v1m4 2.75a2 2 0 0 1 0 4m-4 2.75v1m-4 -7.75a2 2 0 0 1 4 0m-4 2.75a2 2 0 0 1 4 0m-4 2.75v1m8 -5.5v1"></path>
                        <circle cx="12" cy="14" r="4"></circle>
                      </svg>{" "}
                      <span className="text-gray-950 font-medium text-sm">
                        {" "}
                        Innovative Solutions{" "}
                      </span>{" "}
                    </div>
                  </div>
                </div>

                <div className="h-full md:order-first">
                  {" "}
                  <Image
                    src="/flexSection1.jpg"
                    alt="#_"
                    width={700}
                    height={700}
                    className=" bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square  w-full h-96 object-cover object-center"
                  />{" "}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
  <div className="md:mt-0 mt-7">
    <span className="text-gray-600 uppercase  text-xs font-medium">
      Artistic Expression
    </span>
    <p className="text-4xl md:mt-8 mt-4 tracking-tighter font-semibold text-gray-700 text-balance">
      Tailored Photography Experiences
    </p>
    <p className="text-sm mt-4 text-gray-700 text-balance">
      Experience photography like never before with personalized sessions that capture the true essence of your moments.
    </p>
    <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
      <div className="inline-flex items-center gap-2 text-xs text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M14.828 5.172l1.172 1.172a2 2 0 0 1 0 2.828l-11 11a2 2 0 0 1 -2.828 0l-1.172 -1.172a2 2 0 0 1 0 -2.828l11 -11a2 2 0 0 1 2.828 0"></path>
          <circle cx="10" cy="10" r="7"></circle>
        </svg>
        <span className="text-gray-950 font-medium text-sm">Creative Vision</span>
      </div>
      <div className="inline-flex items-center gap-2 text-xs text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 21l18 0"></path>
          <path d="M9 8l1 0"></path>
          <path d="M9 12l1 0"></path>
          <path d="M9 16l1 0"></path>
          <path d="M14 8l1 0"></path>
          <path d="M14 12l1 0"></path>
          <path d="M14 16l1 0"></path>
          <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
        </svg>
        <span className="text-gray-950 font-medium text-sm">Attention to Detail</span>
      </div>
      <div className="inline-flex items-center gap-2 text-xs text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 21c-3.866 0 -7 -3.134 -7 -7a7 7 0 1 1 14 0c0 3.866 -3.134 7 -7 7z"></path>
          <path d="M12 10.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1 -1.5 1.5a1.5 1.5 0 0 1 -1.5 -1.5a1.5 1.5 0 0 1 1.5 -1.5z"></path>
        </svg>
        <span className="text-gray-950 font-medium text-sm">Heartfelt Moments</span>
      </div>
      <div className="inline-flex items-center gap-2 text-xs text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 7v5l3 3"></path>
          <circle cx="12" cy="12" r="9"></circle>
        </svg>
        <span className="text-gray-950 font-medium text-sm">Timeless Quality</span>
      </div>
    </div>
  </div>
  <div className="h-full">
    <Image
      src="/flexSection3.jpg"
      alt="#_"
      width={700}
      height={700}
      className="bg-gray-200 shadow-box shadow-gray-500/30 overflow-hidden aspect-square w-full h-96 object-cover object-center"
    />
  </div>
</div>

            </div>
          
        </div>
      </section>
    </div>
  );
};

export default TopImages;
