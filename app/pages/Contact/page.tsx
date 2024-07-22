"use client";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaFacebook, FaPhone, FaMailBulk } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div>
      <div className="md:mt-48 my-24">
        <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
          <div>
            <h1 className="md:text-3xl text-2xl  uppercase font-semibold">Reach Out To Us</h1>
            <p className="text-sm text-gray-400 mt-3">
              We are here to help bring your vision to life. Whether its a
              special project or a new venture, we are eager to hear about it.
            </p>
            <div className="mt-12">
              <h2 className="text-md  text-normal">Email</h2>
              <ul className="mt-3">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    {/* Placeholder for email icon */}
                    <FaMailBulk className="text-orange-500"/>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://veilmail.io/e/FkKh7o"
                    className="text-black  text-sm ml-3"
                  >
                    <small className="block">Mail</small>
                    <p className="text-gray-900">info@Dehustlerz.com</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <h2 className="text-md text-normal">Socials</h2>
              <ul className="flex mt-3 space-x-4">
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)">
                    <FaInstagram size={20} className="text-orange-500" />
                  </a>
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)">
                    <FaFacebook size={20}  className="text-orange-500" />
                  </a>
                </li>
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="javascript:void(0)">
                    <FaPhone size={20}  className="text-orange-500"  />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form className="ml-auto space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-orange-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md py-2.5 px-4 border text-sm  outline-orange-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md py-2.5 px-4 border text-sm  outline-orange-500"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full rounded-md px-4 border text-sm pt-2.5  outline-orange-500"
            ></textarea>
            <button
              type="button"
              className="text-white bg-orange-600 hover:bg-orange-500 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-5 md:mt-28">
        <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
          <a href="#">
            <Image
              className="w-full"
              src="/Contact_Img.jpg"
              width={500}
              height={500}
              alt="Sunset in the mountains"
            />
          </a>
          <div className="relative -mt-16 px-10 pt-5 pb-3 bg-slate-50 m-5">
            <h2 className="font-semibold text-lg mb-2">
              Capturing Timeless Moments
            </h2>
            <p className="text-gray-500 text-sm">
              Discover the essence of our photography sessions, where every
              moment is a timeless treasure.
            </p>
            <p className="mt-5 text-gray-600 text-xs">
              By <span className="text-xs text-orange-600">Kesavan K</span> | in{" "}
              <span className="text-xs text-orange-600">Photography</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
