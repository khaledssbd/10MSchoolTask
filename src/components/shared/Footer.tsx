import { Facebook, Instagram, X, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const socialLinks = [
    {
      href: 'https://cdn.10minuteschool.com/images/facebook_1695730910971.png',
      icon: Facebook,
    },
    {
      href: 'https://cdn.10minuteschool.com/images/instagram_1695731442397.png',
      icon: Instagram,
    },
    {
      href: 'https://cdn.10minuteschool.com/images/linkedin_1695731507042.pngo',
      icon: Linkedin,
    },
    {
      href: 'https://cdn.10minuteschool.com/images/youtube_1695731538726.png',
      icon: Youtube,
    },
    {
      href: 'https://cdn.10minuteschool.com/images/Tiktok_1695731564895.png',
      icon: Linkedin,
    },
  ];
  return (
    <footer className="bg-white text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/10mslogo-svg.svg?height=32&width=120&text=10+Minute+School"
              alt="10 Minute School"
              className="h-8 mb-4"
              width={400}
              height={400}
            />
            <p className="text-gray-400 text-sm">
              বাংলাদেশের সবচেয়ে বড় অনলাইন শিক্ষা প্ল্যাটফর্ম
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">কোর্স</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  একাডেমিক
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  স্কিলস
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  ভাষা শেখা
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">সাপোর্ট</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  যোগাযোগ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  সাহায্য
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">ফলো করুন</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">YouTube</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} 10 Minute School. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
