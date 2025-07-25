import { CourseData } from '@/types';
import { Play } from 'lucide-react';

const Checklist = ({ data }: { data: CourseData }) => {
  const trailerVideo = data.media.find(
    media =>
      media.resource_type === 'video' ||
      media.thumbnail_url?.includes('youtube')
  );

  return (
    <div className="bg-white border border-gray-300 p-1">
      {trailerVideo && (
        <div className="relative mb-6">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={trailerVideo.thumbnail_url}
              alt="Course Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-white rounded-full p-4 cursor-pointer">
                <Play
                  className="w-8 h-8 text-gray-800 ml-1"
                  fill="currentColor"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='p-5'>
        <div className="text-3xl font-bold text-gray-900 mb-2">
          ৳3850
          <span className="text-xl text-gray-500 line-through ml-2">৳5000</span>
        </div>

        <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-6">
          {data.cta_text.name}
        </button>

        {data.checklist.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              এই কোর্সে যা থাকছে
            </h3>
            <ul className="space-y-3">
              {data.checklist.map(item => (
                <li key={item.id} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checklist;
