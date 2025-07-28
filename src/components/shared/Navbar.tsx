'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronDown,
  Search,
  Phone,
  BookOpen,
  GraduationCap,
  Languages,
  Briefcase,
  Paintbrush,
  Rocket,
  Smile,
  Award,
  NotebookText,
} from 'lucide-react';
import { useState } from 'react';
import { ReactNode } from 'react';

type Section = {
  name: string;
  href: string;
  icon?: ReactNode; // icon is optional
};

type NavLink = {
  name: string;
  href: string;
  sections: Section[];
};

const navLinks: NavLink[] = [
  {
    name: 'ক্লাস ৬-১২',
    href: 'https://10minuteschool.com/academic',
    sections: [
      {
        name: 'এইচএসসি',
        href: 'https://10minuteschool.com/academic/10/?group=science',
        icon: <GraduationCap className="w-4 h-4" />,
      },
      {
        name: 'দশম শ্রেণি',
        href: 'https://10minuteschool.com/academic/101/?group=science',
        icon: <BookOpen className="w-4 h-4" />,
      },
      {
        name: 'নবম শ্রেণি',
        href: 'https://10minuteschool.com/academic/9/?group=science',
        icon: <BookOpen className="w-4 h-4" />,
      },
      {
        name: 'অষ্টম শ্রেণি',
        href: 'https://10minuteschool.com/academic/8/?group=undefined',
        icon: <BookOpen className="w-4 h-4" />,
      },
      {
        name: 'সপ্তম শ্রেণি',
        href: 'https://10minuteschool.com/academic/7/?group=undefined',
        icon: <BookOpen className="w-4 h-4" />,
      },
      {
        name: 'ষষ্ঠ শ্রেণি',
        href: 'https://10minuteschool.com/academic/6/?group=undefined',
        icon: <BookOpen className="w-4 h-4" />,
      },
    ],
  },
  {
    name: 'স্কিলস',
    href: 'https://10minuteschool.com/skills',
    sections: [
      {
        name: 'সকল কোর্সসমূহ',
        href: 'https://10minuteschool.com/skills',
        icon: <BookOpen className="w-4 h-4" />,
      },
      {
        name: 'ভাষা শিক্ষা',
        href: 'https://10minuteschool.com/categories/language-learning',
        icon: <Languages className="w-4 h-4" />,
      },
      {
        name: 'ফ্রিল্যান্সিং',
        href: 'https://10minuteschool.com/categories/freelancing',
        icon: <Briefcase className="w-4 h-4" />,
      },
      {
        name: 'বান্ডেল',
        href: 'https://10minuteschool.com/categories/bundle',
        icon: <NotebookText className="w-4 h-4" />,
      },
      {
        name: 'স্কিলস এন্ড আইটি',
        href: 'https://10minuteschool.com/categories/skills-and-it',
        icon: <Rocket className="w-4 h-4" />,
      },
      {
        name: 'ডিজাইন এন্ড ক্রিয়েটিভ',
        href: 'https://10minuteschool.com/categories/design-and-creative',
        icon: <Paintbrush className="w-4 h-4" />,
      },
      {
        name: 'ক্যারিয়ার রেডিনেস',
        href: 'https://10minuteschool.com/categories/career-readiness',
        icon: <Award className="w-4 h-4" />,
      },
      {
        name: 'কিডস কোর্সসমূহ',
        href: 'https://10minuteschool.com/categories/kids-age-7-14',
        icon: <Smile className="w-4 h-4" />,
      },
      {
        name: 'প্রফেশনাল কোর্সসমূহ',
        href: 'https://10minuteschool.com/categories/professional',
        icon: <Briefcase className="w-4 h-4" />,
      },
      {
        name: 'ফ্রি কোর্সসমূহ',
        href: 'https://10minuteschool.com/categories/free',
        icon: <BookOpen className="w-4 h-4" />,
      },
    ],
  },
  {
    name: 'ভর্তি পরীক্ষা',
    href: 'https://10minuteschool.com/admission',
    sections: [],
  },
  {
    name: 'অনলাইন ব্যাচ',
    href: 'https://10minuteschool.com/online-batch',
    sections: [
      {
        name: 'অনলাইন ব্যাচ (৬ষ্ঠ-১০ম শ্রেণি)',
        href: 'https://10minuteschool.com/online-batch/',
        icon: <GraduationCap className="w-4 h-4" />,
      },
      {
        name: 'এইচএসসি',
        href: 'https://10minuteschool.com/hsc-preparation/hsc-2026/',
        icon: <GraduationCap className="w-4 h-4" />,
      },
    ],
  },
  {
    name: 'ইংলিশ সেন্টার',
    href: 'https://10minuteschool.com/english-centre',
    sections: [
      {
        name: 'সকল প্রোগ্রামসমূহ',
        href: 'https://10minuteschool.com/english-centre',
        icon: <BookOpen className="w-4 h-4" />,
      },
      {
        name: 'IELTS প্রোগ্রাম',
        href: 'https://10minuteschool.com/product/ielts-programme',
        icon: <Languages className="w-4 h-4" />,
      },
      {
        name: 'স্পোকেন ইংলিশ (জুনিয়র)',
        href: 'https://10minuteschool.com/product/spoken-english-junior',
        icon: <Languages className="w-4 h-4" />,
      },
      {
        name: 'ইংলিশ ফাউন্ডেশন প্রোগ্রাম',
        href: 'https://10minuteschool.com/product/english-foundation-programme',
        icon: <Languages className="w-4 h-4" />,
      },
      {
        name: 'কিডস ইংলিশ',
        href: 'https://10minuteschool.com/product/kids-english-programme',
        icon: <Smile className="w-4 h-4" />,
      },
    ],
  },
  {
    name: 'আরো',
    href: 'https://10minuteschool.com/product/ielts-course',
    sections: [
      {
        name: 'চাকরি প্রস্তুতি কোর্সসমূহ',
        href: 'https://10minuteschool.com/jobs-prep',
        // icon: <Briefcase className="w-4 h-4" />,
      },
      {
        name: 'ব্লগ',
        href: 'https://blog.10minuteschool.com',
        // icon: <FileText className="w-4 h-4" />,
      },
      {
        name: 'বুক স্টোর',
        href: 'https://10minuteschool.com/store/all',
        // icon: <Bookmark className="w-4 h-4" />,
      },
      {
        name: 'ফ্রি নোটস ও গাইড',
        href: 'https://10minuteschool.com/resource',
        // icon: <NotebookText className="w-4 h-4" />,
      },
      {
        name: 'একাডেমিক ডিজিটাল কন্টেন্ট',
        href: 'https://10minuteschool.com/content',
        // icon: <FileText className="w-4 h-4" />,
      },
      {
        name: 'সার্টিফিকেট ভেরিফাই করুন',
        href: 'https://10minuteschool.com/certificate',
        // icon: <FileSearch className="w-4 h-4" />,
      },
      {
        name: 'ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি',
        href: 'https://app.10minuteschool.com/careers',
        // icon: <Bell className="w-4 h-4" />,
      },
      {
        name: 'শিক্ষক হিসাবে যোগ দিন',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLScWh9jjyWnUKdDKET1-LHvdTxuU6-ssd0GLTI-0JlQ2MH6RzA/viewform',
        // icon: <UserCircle className="w-4 h-4" />,
      },
      {
        name: 'অ্যাফিলিয়েট হিসাবে যোগ দিন',
        href: 'https://affiliation.10minuteschool.com',
        // icon: <Handshake className="w-4 h-4" />,
      },
    ],
  },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/10mslogo-svg.svg"
                alt="10 Minute School Logo"
                width={160}
                height={40}
                className="h-8"
              />
            </Link>
            <div className="relative hidden lg:block">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles w-5 h-5"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
              </div>
              <Search className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                className="pl-16 pr-4 py-3 w-[350px] border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <nav className="hidden lg:flex items-center space-x-3 relative">
              {navLinks.map(link => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(link.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-600 hover:text-green-500 text-xs py-2 px-1"
                  >
                    {link.name}
                    {link.sections?.length > 0 && (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </Link>

                  {/* Mega Menu */}
                  {activeMenu === link.name && link.sections?.length > 0 && (
                    <div className="absolute left-0 top-full w-[250px] bg-white shadow-lg rounded-b-lg border border-gray-200 p-5">
                      <div className="flex flex-col gap-4">
                        {link.sections.map(section => (
                          <Link
                            key={section.name}
                            href={section.href}
                            className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md"
                          >
                            {section?.icon && (
                              <span className="text-gray-500">
                                {section?.icon}
                              </span>
                            )}

                            <span className="text-sm text-gray-700">
                              {section.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden xl:flex items-center space-x-4">
              <button className="flex items-center border border-gray-300 px-3 py-1.5 rounded-md">
                <span className="text-gray-400 text-xs mb-2">অ</span>
                <span className="text-gray-400 text-xs">A</span>
                <span className="font-medium text-sm pl-2">EN</span>
              </button>
              <a
                href="tel:16910"
                className="flex items-center space-x-2 text-green-500"
              >
                <Phone className="w-4 h-4 fill-green-500" />
                <span className="font-medium">16910</span>
              </a>
              <Link
                href="https://10minuteschool.com/auth/login"
                className="bg-green-600 text-white px-6 py-1.5 rounded-md font-semibold hover:bg-green-800 text-sm"
              >
                লগ-ইন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
