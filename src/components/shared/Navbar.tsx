import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Search, Phone } from 'lucide-react';

const navLinks = [
  {
    name: 'ক্লাস ৬-১২',
    href: 'https://10minuteschool.com/academic',
    sections: [
      { name: 'এইচএসসি', href: '#', icon: '' },
      { name: 'দশম শ্রেণি', href: '#', icon: '' },
      { name: 'নবম শ্রেণি', href: '#', icon: '' },
      { name: 'অষ্টম শ্রেণি', href: '#', icon: '' },
      { name: 'সপ্তম শ্রেণি', href: '#', icon: '' },
      { name: 'ষষ্ঠ শ্রেণি', href: '#', icon: '' },
    ],
  },
  {
    name: 'স্কিলস',
    href: 'https://10minuteschool.com/skills',
    sections: [
      { name: 'সকল কোর্সসমূহ', href: '#', icon: '' },
      { name: 'ভাষা শিক্ষা', href: '#', icon: '' },
      { name: 'ফ্রিল্যান্সিং', href: '#', icon: '' },
      { name: 'বান্ডেল', href: '#', icon: '' },
      { name: 'স্কিলস এন্ড আইটি', href: '#', icon: '' },
      { name: 'ডিজাইন এন্ড ক্রিয়েটিভ', href: '#', icon: '' },
      { name: 'ক্যারিয়ার রেডিনেস', href: '#', icon: '' },
      { name: 'কিডস কোর্সসমূহ', href: '#', icon: '' },
      { name: 'প্রফেশনাল কোর্সসমূহ', href: '#', icon: '' },
      { name: 'ফ্রি কোর্সসমূহ', href: '#', icon: '' },
    ],
  },
  { name: 'ভর্তি পরীক্ষা', href: 'https://10minuteschool.com/admission' },
  {
    name: 'অনলাইন ব্যাচ',
    href: 'https://10minuteschool.com/online-batch',
    sections: [
      { name: 'অনলাইন ব্যাচ (৬ষ্ঠ-১০ম শ্রেণি)', href: '#', icon: '' },
      { name: 'এইচএসসি', href: '#', icon: '' },
    ],
  },
  {
    name: 'ইংলিশ সেন্টার',
    href: 'https://10minuteschool.com/english-centre',
    sections: [
      { name: 'সকল প্রোগ্রামসমূহ', href: '#', icon: '' },
      { name: 'IELTS প্রোগ্রাম', href: '#', icon: '' },
      { name: 'স্পোকেন ইংলিশ (জুনিয়র)', href: '#', icon: '' },
      { name: 'ইংলিশ ফাউন্ডেশন প্রোগ্রাম', href: '#', icon: '' },
      { name: 'কিডস ইংলিশ', href: '#', icon: '' },
    ],
  },
  {
    name: 'আরো',
    href: 'https://10minuteschool.com/product/ielts-course',
    sections: [
      { name: 'চাকরি প্রস্তুতি কোর্সসমূহ', href: '#', icon: '' },
      { name: 'ব্লগ', href: '#', icon: '' },
      { name: 'বুক স্টোর', href: '#', icon: '' },
      { name: 'ফ্রি নোটস ও গাইড', href: '#', icon: '' },
      { name: 'একাডেমিক ডিজিটাল কন্টেন্ট', href: '#', icon: '' },
      { name: 'সার্টিফিকেট ভেরিফাই করুন', href: '#', icon: '' },
      { name: 'ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি', href: '#', icon: '' },
      { name: 'শিক্ষক হিসাবে যোগ দিন', href: '#', icon: '' },
      { name: 'অ্যাফিলিয়েট হিসাবে যোগ দিন', href: '#', icon: '' },
    ],
  },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 w-full bg-white shadow-sm border-b border-gray-200">
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
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                className="pl-12 pr-4 py-3 w-[350px] border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <nav className="hidden lg:flex items-center space-x-3">
              {navLinks.map(link => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="flex items-center text-gray-600 hover:text-green-500 text-xs"
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
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
