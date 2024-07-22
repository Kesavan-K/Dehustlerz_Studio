"use client";
import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Use usePathname to get the current path

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/pages/About' },
    { name: 'Gallery', path: '/pages/Gallery' },
    { name: 'Services', path: '/pages/Services' },
    { name: 'Contact', path: '/pages/Contact' }
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="flex flex-wrap items-center justify-between p-4">
        <Link href="/">
          <div className="relative cursor-pointer">
            <Image src="/Logoo.png" alt="Logo" className='h-10' width={150} height={200} />
          </div>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hidden md:flex">
            <FaInstagram className="h-5 w-5" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hidden md:flex">
            <FaFacebookF className="h-4 w-4 m-0.5" />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 w-full rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link href={link.path}>
                  <div
                    className={`block py-2 px-3 rounded text-sm uppercase cursor-pointer ${pathname === link.path ? 'text-orange-600  bg-black' : 'md:text-gray-300 text-gray-700'} hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-whitdark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
