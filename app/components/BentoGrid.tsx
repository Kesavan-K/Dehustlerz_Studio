"use client";
import Image from "next/image";
import React from "react";

const BentoGrid = () => {
  return (
    <div>
      <div className="bg-gray-100 md:mt-10 mt-5">
        <div className=" mx-auto px-4 py-8">
          <h1 className="md:text-2xl text-md font-semibold uppercase  text-center mt-8">
            Capturing Innovation in the Moment 
          </h1>
          <p className="md:text-2xl text-md font-light  text-gray-700 text-center my-2">
          Top Collections from Our Studio
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-10 md:px-40">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded shadow group hover:cursor-pointer">
              <Image
                src="/Gallery_7.jpg"
                width={700}
                height={700}
                alt="Wedding"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white">Model Photoshoot</h3>
                  <p className="text-slate-200 uppercase text-sm">
                  Award-winning photography that speaks for itself.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded shadow  group hover:cursor-pointer">
              <Image
                src="/Home-Img1.jpg"
                width={300}
                height={400}
                alt="Baby Photoshoot"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    Baby Photoshoot
                  </h4>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded shadow  group hover:cursor-pointer">
              <Image
                src="/Home-Img2.jpg"
                width={300}
                height={400}
                alt="Model Shoot"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    Wedding Shoot
                  </h4>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded shadow  group hover:cursor-pointer">
              <Image
                src="/Home-Img3.jpg"
                width={300}
                height={400}
                alt="Product Shoot"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    Product Shoot
                  </h4>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded shadow  group hover:cursor-pointer">
              <Image
                src="/Home-Img4.jpg"
                width={300}
                height={400}
                alt="Maternity Shoot"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    Maternity Shoot
                  </h4>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded shadow  group hover:cursor-pointer">
              <Image
                src="/Home-Img5.jpg"
                width={300}
                height={400}
                alt="Event Photography"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    Event Photography
                  </h4>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded shadow  group hover:cursor-pointer">
              <Image
                src="/Home-Img6.jpg"
                width={300}
                height={400}
                alt="Corporate Photography"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    Corporate Photography
                  </h4>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded shadow  group hover:cursor-pointer">
              <Image
                src="/Home-Img7.jpg"
                width={300}
                height={400}
                alt="Family Portraits"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    Family Portraits
                  </h4>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded shadow  group hover:cursor-pointer">
              <Image
                src="/Home-Img9.jpg"
                width={300}
                height={400}
                alt="Travel Photography"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">
                    Travel Photography
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
