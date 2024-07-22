"use client";
import React, { useState } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

const photographyProjects = [
  { id: 1, title: "Wedding Photography", imageSrc: "/Carousel1.jpg", category: "Photography" },
  { id: 2, title: "Baby Photoshoot", imageSrc: "/C1.jpg", category: "Photography" },
  { id: 3, title: "Maternity Shoot", imageSrc: "/Carousel1.jpg", category: "Photography" },
  { id: 4, title: "Model Shoot", imageSrc: "/Carousel1.jpg", category: "Photography" },
  { id: 5, title: "Product Shoot", imageSrc: "/C1.jpg", category: "Photography" },
  { id: 6, title: "Event Photography", imageSrc: "/Carousel1.jpg", category: "Photography" },
  { id: 7, title: "Fashion Photography", imageSrc: "/Carousel1.jpg", category: "Photography" },
  { id: 8, title: "Corporate Photography", imageSrc: "/C1.jpg", category: "Photography" },
  { id: 9, title: "Nature Photography", imageSrc: "/Carousel1.jpg", category: "Photography" },
];

const videographyProjects = [
  { id: 1, title: "Wedding Videography", imageSrc: "/C1.jpg", category: "Videography" },
  { id: 2, title: "Event Videography", imageSrc: "/C1.jpg", category: "Videography" },
  { id: 3, title: "Corporate Videography", imageSrc: "/C1.jpg", category: "Videography" },
];

const PortfolioSection = () => {
  const [category, setCategory] = useState("all");

  const handleCategoryChange = (category:any) => {
    setCategory(category);
  };

  const filteredProjects =
    category === "photography"
      ? photographyProjects
      : category === "videography"
      ? videographyProjects
      : [...photographyProjects, ...videographyProjects];

  return (
    <>
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-28 mt-24">
        <a
          href="#"
          className="border rounded-2xl py-1 px-4 text-gray-700 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
        >
          Discover
          <span className="font-semibold"> Dehustlerz Studios</span> Services
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-gray-900 sm:text-7xl">
          Elevate Your Photography
          <span className="relative whitespace-nowrap text-orange-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-700/40"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative">Style</span>
          </span>
        </h1>
        <p className="mx-auto mt-12 max-w-xl text-lg text-gray-700 leading-7">
          Looking to enhance your photos? Whether its for professional portraits or personal moments, let us transform your images with our cutting-edge photography services. Our AI technology can seamlessly replace backgrounds or enhance colors to make your photos truly stand out.
        </p>
        <a className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80" href="/pages/Contact">
          Transform Your Photos →
        </a>
      </main>
      <div className="text-center mb-12 bg-slate-100 md:py-14 md:my-6 my-5 py-8">
        <Typewriter
          options={{
            strings: [
              "Capturing Moments, Creating Memories!",
              "Where Every Click Tells a Story!",
              "Embrace the Essence of Every Moment!",
            ],
            autoStart: true,
            loop: true,
            delay: 40,
            deleteSpeed: 70,
            wrapperClassName: "md:text-4xl text-xl font-semibold uppercase", // Adjust font size here
          }}
        />
      </div>
      <section id="portfolio" className="portfolio-section py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-8 lg:px-40 px-5">
            <button
              onClick={() => handleCategoryChange("all")}
              className="filter-button bg-black hover:bg-orange-700 px-4 py-2 mr-2 mb-2 text-white"
            >
              All
            </button>
            <button
              onClick={() => handleCategoryChange("photography")}
              className="filter-button bg-black hover:bg-orange-700 px-4 py-2 mr-2 mb-2 text-white"
            >
              Photography
            </button>
            <button
              onClick={() => handleCategoryChange("videography")}
              className="filter-button bg-black hover:bg-orange-700 px-4 py-2 mr-2 mb-2 text-white"
            >
              Videography
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-40 px-5">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="group portfolio-item relative hover:shadow-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover group-hover:scale-105 hover:bg-black hover:cursor-pointer transition-transform duration-300 ease-in-out"
                  />
                  <div className="p-4 text-center ">
                    <h3 className="text-gray-900 text-xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>  
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
