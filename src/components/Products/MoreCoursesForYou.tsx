'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  // CarouselPrevious,
} from '../ui/carousel'; // Adjust path if necessary
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

const MoreCoursesForYou = ({ lang }: { lang: string | undefined }) => {
  const moreCourses = [
    {
      thumb:
        'https://cdn.10minuteschool.com/images/thumbnails/batch-12-ielts-live-batch-thumbnails.jpg',
      title: 'IELTS LIVE Batch',
      instructor:
        'Zawad Hasan Adib, Saraf Samantha Khan, Uttam Deb, Salsabil Haque',
      price: '8500',
      oldPrice: '10000',
      url: 'https://10minuteschool.com/product/ielts-live-batch/?ref=ielts-live-batch&type=recommendation',
    },
    {
      thumb:
        'https://cdn.10minuteschool.com/images/thumbnails/skills/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg',
      title: 'ঘরে বসে Spoken English',
      instructor: 'Munzereen Shahid',
      price: '1950',
      oldPrice: '',
      url: 'https://10minuteschool.com/product/ghore-boshe-spoken-english/?ref=ghore-boshe-spoken-english&type=recommendation',
    },
    {
      thumb:
        'https://cdn.10minuteschool.com/images/catalog/media/16x9_1732445853307.jpg',
      title: 'Email Marketing করে Freelancing',
      instructor: 'Tisat Fatema Tia',
      price: '1950',
      oldPrice: '',
      url: 'https://10minuteschool.com/product/email-marketing-course/?ref=email-marketing-course&type=recommendation',
    },
    {
      thumb:
        'https://cdn.10minuteschool.com/images/thumbnails/complete-grammar-course-thumbnail.jpg',
      title: 'Complete English Grammar Course',
      instructor: 'Munzereen Shahid',
      price: '1950',
      oldPrice: '',
      url: 'https://10minuteschool.com/product/english-grammar-course/?ref=english-grammar-course&type=recommendation',
    },
    {
      thumb:
        'https://cdn.10minuteschool.com/images/thumbnails/skills/youtube-marketing-course-thumbnail.jpg',
      title: 'YouTube Marketing করে Freelancing',
      instructor: 'Md. Sabbir Hossain',
      price: '1950',
      oldPrice: '',
      url: 'https://10minuteschool.com/product/youtube-marketing-course/?ref=youtube-marketing-course&type=recommendation',
    },
  ];

  return (
    <div className="p-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-16">
          {lang === 'bn' ? 'আপনার জন্য আরও কিছু কোর্স' : 'More courses for you'}
        </h2>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          {/* <CarouselPrevious className="absolute -left-6 top-1/2 z-10 bg-white/40 rounded-full p-2 hover:bg-white transition-colors border border-gray-200 text-black" /> */}
          <CarouselNext className="absolute right-4 -top-8 z-10 bg-white/40 rounded-full p-2 hover:bg-white transition-colors border border-gray-200 text-black" />

          <CarouselContent className="-ml-4">
            {moreCourses.map((course, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Link
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="bg-white rounded-lg border border-gray-300 hover:border-green-500 overflow-hidden transform transition-transform duration-200  h-full flex flex-col">
                    <div className="relative w-full aspect-video">
                      <Image
                        src={course.thumb}
                        alt={course.title}
                        width={500}
                        height={500}
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex-grow pb-3">
                        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-1">
                          {course.instructor}
                        </p>
                      </div>
                      <div className="flex items-center mt-auto">
                        {course.price && (
                          <p className="text-lg font-semibold text-green-600">
                            ৳ {course.price}
                          </p>
                        )}
                        {course.oldPrice && (
                          <p className="ml-2 text-lg text-gray-700 line-through">
                            ৳{course.oldPrice}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default MoreCoursesForYou;
