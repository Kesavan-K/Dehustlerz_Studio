// components/Footer.js
"use client";
import Image from "next/image";

const Footer = () => {
    return (
      <footer className="bg-black md:mt-20 mt-10">
        <div className=" px-4 mx-auto">
          <div className="md:pt-14 pt-7 mx-auto max-w-4xl">
            <a className="block md:mx-auto mb-5 max-w-max" href="#">
              {/* Add your image here */}
              <Image src="/logo.png" alt="Footer Logo" className="mx-auto" width={700} height={800} />
            </a>
            <div className="flex flex-row justify-center -mx-3 lg:-mx-6">
              <div className="w-full md:w-auto p-3 md:px-6">
                <a href="/" className="inline-block md:text-lg text-md text-gray-300 hover:text-white font-medium">
                  Home
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:px-6">
                <a href="/pages/About" className="inline-block md:text-lg text-md text-gray-300 hover:text-white font-medium">
                  About
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:px-6">
                <a href="/pages/Gallery" className="inline-block md:text-lg text-md text-gray-300 hover:text-white font-medium">
                Gallery
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:px-6">
                <a href="/pages/Services" className="inline-block md:text-lg text-md text-gray-300 hover:text-white font-medium">
                Services
                </a>
              </div>

            </div>
          </div>
        </div>
        <div className=" px-4 mx-auto">
          <p className="md:py-5 py-2 text-md text-gray-400 md:text-lg text-sm font-medium text-center">
           Copyright © {new Date().getFullYear()} Dehustlerz Studios. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  