"use client";
import Image from "next/image";
import React from "react";

const FeatureSection = () => {
  return (
    <div>
      <div className="relative overflow-hidden bg-white">
        <div className="pt-24 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg md:mt-10 lg:mt-20">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Explore Our Innovative Works
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Dive into our portfolio and discover moments captured
                beautifully across different categories.
              </p>
            </div>
            <div className="md:mt-10 mt-20">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8 md:mt-20 lg:mt-60 mt-20">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <Image
                          src="/Banner1.png"
                          width={200}
                          height={300}
                          alt=""
                          className="md:h-28 lg:h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-68 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/Banner5.jpg"
                          width={200}
                          height={300}
                          alt=""
                          className="md:h-full lg:h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-28 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/Banner3.jpg"
                          width={200}
                          height={300}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="md:h-40 lg:h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/Gallery_7.jpg"
                          width={200}
                          height={300}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/C1.jpg"
                          width={200}
                          height={300}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 xl:flex flex-col hidden  ">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/Banner8.png"
                          width={200}
                          height={300}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          src="/Banner10.jpg"
                          width={200}
                          height={300}  
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/pages/Contact"
                className="inline-block rounded border border-transparent bg-black py-3 px-8 text-center font-medium text-white hover:bg-orange-600"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <section className="bg-slate-200 overflow-visible my-0 py-24 mt-24">
          <div className="text-white items-center text-center flex flex-col">
            <h2 className="font-bold text-xl text-black md:text-3xl uppercase">
              Discover Dehustlerz Studio
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-md md:text-lg leading-8 text-gray-900">
              Explore the essence of our studios photography and videography
              services. Dive into our portfolio and witness captivating moments
              beautifully captured.
            </p>  
            <a
              href="/pages/Services"
              className="mt-8 rounded-md bg-black px-5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-900 transition focus:outline-none focus:ring focus:border-blue-300"
            >
              View Our Services
            </a>
          </div>
        </section>
      </div>

      

<div className="grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-5 md:px-10 px-5 lg:px-60 md:py-28 py-20 ">
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/Gallery_1.jpg" alt="" width={250} height={500} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/Gallery_11.jpg" alt="" width={250} height={500} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/Gallery_3.jpg" alt="" width={250} height={500} />
        </div>
    </div>
    <div className="grid gap-10 md:-mt-14">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/Gallery_4.jpg" alt="" width={220} height={400} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/Gallery_9.jpg" alt="" width={220} height={400} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/Gallery_12.jpg" alt="" width={220} height={400} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/Gallery_6.jpg" alt="" width={220} height={400} />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/Gallery_7.jpg" alt="" width={220} height={500} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/Gallery_10.jpg" alt="" width={220} height={500} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/Gallery_14.jpg" alt="" width={220} height={500} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/Gallery_8.jpg" alt="" width={220} height={500} />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/Gallery_5.jpg" alt="" width={200} height={500} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/Gallery_13.jpg" alt="" width={200} height={500} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/Gallery_16.jpg" alt="" width={200} height={500} />
        </div>
        <div>
            <Image className="h-auto max-w-full rounded-lg" src="/Gallery_2.jpg" alt="" width={200} height={500} />
        </div>
    </div>
</div>



    </div>
  );
};

export default FeatureSection;
