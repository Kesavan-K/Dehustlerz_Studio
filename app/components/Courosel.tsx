"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; 

const MyImageGallery = () => {
  const images = [
    '/C1.jpg',
    '/HW2.png',
    '/CW1.jpg',
    '/CW2.jpg',
    '/CW3.jpg',
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]); // Start with the first image

  // Carousel functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = images.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
    }, 3000); // Move to next image every 3 seconds

    return () => clearInterval(interval);
  }, [selectedImage, images]);

  const handleImageClick = (image : any) => {
    setSelectedImage(image);
  };

  return (
    <div className="md:mt-32 mt-28 md:px-20 px-3 rounded-md">
      {/* Big Image */}
      <div className="relative h-[60vh] mb-4 rounded">
        <Image
        className='rounded'
          src={selectedImage}
          alt="Big Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4 md:flex hidden">
          <button className="hover:text-white text-white text-opacity-40 bg-black bg-opacity-20 rounded-full p-2 hover:bg-opacity-70 transition duration-300 focus:outline-none" onClick={() => handleImageClick(images[(images.indexOf(selectedImage) + images.length - 1) % images.length])}>
            <FaArrowLeft className="w-6 h-6" />
          </button>
          <button className="hover:text-white text-white text-opacity-40 bg-black bg-opacity-20 rounded-full p-2 hover:bg-opacity-70 transition duration-300 focus:outline-none" onClick={() => handleImageClick(images[(images.indexOf(selectedImage) + 1) % images.length])}>
            <FaArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Small Images as Cards */}
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="cursor-pointer">
            <div
              className={`relative h-32 rounded-lg overflow-hidden ${image === selectedImage ? 'border-2 border-orange-600' : ''}`}
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyImageGallery;
