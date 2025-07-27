import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const companyLinks = [
    {
      href: 'https://app.10minuteschool.com/careers',
      text: 'ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি',
    },
    {
      href: 'https://docs.google.com/forms/d/e/1FAIpQLScWh9jjyWnUKdDKET1-LHvdTxuU6-ssd0GLTI-0JlQ2MH6RzA/viewform',
      text: 'শিক্ষক হিসেবে যোগ দিন',
    },
    {
      href: 'https://affiliation.10minuteschool.com',
      text: 'অ্যাফিলিয়েট হিসেবে যোগ দিন',
    },
    {
      href: 'https://app.10minuteschool.com/privacy-policy',
      text: 'প্রাইভেসি পলিসি',
    },
    {
      href: 'https://app.10minuteschool.com/refund-policy',
      text: 'রিফান্ড পলিসি',
    },
    {
      href: 'https://app.10minuteschool.com/terms-and-conditions',
      text: 'ব্যবহারকারীর শর্তাবলি',
    },
  ];

  const otherLinks = [
    {
      href: 'https://blog.10minuteschool.com',
      text: 'ব্লগ',
    },
    { href: 'https://10minuteschool.com/store/all', text: 'বুক স্টোর' },
    { href: 'https://10minuteschool.com/content', text: 'ফ্রি নোটস ও স্লাইড' },
    {
      href: 'https://10minuteschool.com/jobs-prep',
      text: 'চাকরি প্রস্তুতি কোর্সসমূহ',
    },
    {
      href: 'https://10minuteschool.com/certificate',
      text: 'সার্টিফিকেট ভেরিফাই করুন',
    },
    { href: 'https://10minuteschool.com/resource', text: 'ফ্রি ডাউনলোড' },
  ];

  const socialIcons: { href: string; icon: string }[] = [
    {
      href: 'https://www.facebook.com/10minuteschool',
      icon: 'https://cdn.10minuteschool.com/images/facebook_1695730910971.png',
    },
    {
      href: 'https://www.instagram.com/10ms_insta',
      icon: 'https://cdn.10minuteschool.com/images/instagram_1695731442397.png',
    },
    {
      href: 'https://www.linkedin.com/company/10ms',
      icon: 'https://cdn.10minuteschool.com/images/linkedin_1695731507042.png',
    },
    {
      href: 'https://www.youtube.com/channel/UCL89KKkLs0tZKld-iIS3NGw',
      icon: 'https://cdn.10minuteschool.com/images/youtube_1695731538726.png',
    },
    {
      href: 'https://www.tiktok.com/@10minuteschool?lang=en',
      icon: 'https://cdn.10minuteschool.com/images/Tiktok_1695731564895.png',
    },
  ];

  return (
    <footer className="bg-white text-gray-800 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <Image
              src="/10mslogo-svg.svg"
              alt="10 Minute School"
              width={150}
              height={40}
            />
            <p className="text-sm mt-4 mb-2">
              ডাউনলোড করুন আমাদের মোবাইল অ্যাপ
            </p>
            <div className="flex gap-2">
              <Link href="#">
                <Image
                  src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"
                  alt="Google Play"
                  width={135}
                  height={40}
                />
              </Link>
              <Link href="#">
                <Image
                  src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png"
                  alt="App Store"
                  width={120}
                  height={40}
                />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">কোম্পানি</h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-green-500"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">অন্যান্য</h4>
            <ul className="space-y-2">
              {otherLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-green-500"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">আমাদের যোগাযোগ মাধ্যম</h4>
            <div className="space-y-4 text-sm">
              <p>
                কল করুন:{' '}
                <a href="tel:16910" className="text-green-500 font-bold">
                  16910
                </a>{' '}
                (24x7)
              </p>
              <p>
                হোয়াটসঅ্যাপ:{' '}
                <a
                  href="https://wa.me/8801896016252"
                  className="text-green-500 font-bold"
                >
                  +8801896016252
                </a>{' '}
                (24x7)
              </p>
              <p>
                দেশের বাহির থেকে:{' '}
                <a
                  href="tel:+8809610916910"
                  className="text-green-500 font-bold"
                >
                  +880 9610916910
                </a>
              </p>
              <p>
                ইমেইল:{' '}
                <a
                  href="mailto:support@10minuteschool.com"
                  className="text-green-500 font-bold"
                >
                  support@10minuteschool.com
                </a>
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              {socialIcons.map((social, index) => (
                <Link href={social.href} key={index} className="w-16 h-16">
                  <Image
                    src={social.icon}
                    alt="Social Icon"
                    width={30}
                    height={30}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 pt-6">
          <p>স্বত্ব © ২০১৫ - ২০২৫ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
