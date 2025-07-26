'use client';

import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 w-full bg-white shadow-sm border-b border-gray-200">
      <div className=" mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Image
              src="/10mslogo-svg.svg"
              alt="10 Minute School"
              className="h-8"
              width={400}
              height={400}
            />
            <nav className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-green-500 text-sm"
              >
                একাডেমিক
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-500 text-sm"
              >
                স্কিলস
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-500 text-sm"
              >
                ভর্তি পরীক্ষা
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-500 text-sm"
              >
                চাকরি
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-500 text-sm"
              >
                ভাষা শেখা
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium">
              লগইন
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
