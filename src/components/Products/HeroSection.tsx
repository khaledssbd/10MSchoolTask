import { CourseData } from '@/types';
import { Star } from 'lucide-react';

const HeroSection = ({ data }: { data: CourseData }) => {
  return (
    <div className="bg-gradient-to-tl from-[#09395d] via-[#06011f] to-[#050124] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {data.title}
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star
                    key={star}
                    className="w-5 h-5 text-amber-500 fill-current"
                  />
                ))}
                <span className="ml-2 text-gray-50 text-sm font-medium">
                  (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
                </span>
              </div>
            </div>
            <div
              className="prose prose-invert max-w-none mb-6 text-white/60 w-6/7"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
