import Image from 'next/image';
import React from 'react';
import { FaInstagram, FaPhone } from 'react-icons/fa';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Lead Photographer',
      imageSrc: '/Home-Img2.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Creative Director',
      imageSrc: '/Home-Img2.jpg',
    },
    {
      id: 3,
      name: 'Michael Brown',
      role: 'Photo Editor',
      imageSrc: '/Home-Img2.jpg',
    },
    {
        id: 1,
        name: 'John Doe',
        role: 'Lead Photographer',
        imageSrc: '/Home-Img2.jpg',
      },
      {
        id: 2,
        name: 'Jane Smith',
        role: 'Creative Director',
        imageSrc: '/Home-Img2.jpg',
      },
      {
        id: 3,
        name: 'Michael Brown',
        role: 'Photo Editor',
        imageSrc: '/Home-Img2.jpg',
      },
  ];

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-semibold  tracking-tight text-black text-center">OUR TEAM</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex items-center">
              <div className="w-24 h-24 rounded overflow-hidden mr-4 md:mt-10 mt-5">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  layout="responsive"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className=''>
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
