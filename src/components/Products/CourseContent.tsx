import { Section } from '@/types';
import { PlayCircle, Lock } from 'lucide-react';

const CourseContent = ({
  featureSections = [],
}: {
  featureSections: Section[];
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {featureSections.map(section => (
        <div key={section.order_idx}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {section.name}
          </h2>
          <div className="space-y-3">
            {section.values?.map(item => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-gray-100"
              >
                <div className="flex items-center space-x-3">
                  {item.is_free ? (
                    <PlayCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <Lock className="w-6 h-6 text-gray-400" />
                  )}
                  <span className="font-medium text-gray-800">{item.title}</span>
                </div>
                <button className="text-sm font-semibold text-green-600 hover:underline">
                  {item.is_free ? 'ফ্রি দেখুন' : 'লক করা'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseContent;
