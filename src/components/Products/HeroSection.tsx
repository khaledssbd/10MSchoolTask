import { CourseData } from '@/types';
import { Play, Star, Users } from 'lucide-react';

const HeroSection = ({ data }: { data: CourseData }) => {
  // Find trailer video
  const trailerVideo = data.media.find(
    media =>
      media.resource_type === 'video' ||
      media.thumbnail_url?.includes('youtube')
  );

  // console.log({ trailerVideo });

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            IELTS Course by Munzereen Shahid
          </h1>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map(star => (
                <Star
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
              <span className="ml-2 text-gray-600">4.9 (2,847 reviews)</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-1" />
              <span>15,234 students</span>
            </div>
          </div>
          <div
            className="prose prose-gray max-w-none mb-6"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>

        <div className="lg:col-span-1">
          {trailerVideo && (
            <div className="relative">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <img
                  src={trailerVideo.thumbnail_url}
                  alt="Course Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="bg-white rounded-full p-4">
                    <Play
                      className="w-8 h-8 text-gray-800 ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  ৳1,000
                </div>
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-2">
                  {data.cta_text.name}
                  {data.cta_text.value}
                </button>
                <p className="text-sm text-gray-600 text-center">
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
