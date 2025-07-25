import { CourseData } from '@/types';
import {  Star } from 'lucide-react';

const HeroSection = ({ data }: { data: CourseData }) => {
  // Find trailer video
  const trailerVideo = data.media.find(
    media =>
      media.resource_type === 'video' ||
      media.thumbnail_url?.includes('youtube')
  );

  // console.log({ trailerVideo });

  return (
    <div className="bg-gradient-to-tl from-[#09395d] via-[#060129] to-[#040112] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {data.title}
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
                <span className="ml-2 text-gray-300">
                  (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
                </span>
              </div>
            </div>
            <div
              className="prose prose-invert max-w-none mb-6"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
