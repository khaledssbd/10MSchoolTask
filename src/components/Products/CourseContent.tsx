import { Section } from '@/types';
import { Clock } from 'lucide-react';

const CourseContent = ({
  featureSections = [],
}: {
  featureSections: Section[];
}) => {
  return (
    <div>
      {featureSections.map(section => (
        <div key={section.order_idx} className="py-8 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {section.name}
          </h2>
          <div className="space-y-4">
            {section.values?.map((item, index) => (
              <div key={item.id} className="border border-gray-200 rounded-lg">
                <div className="p-4 bg-gray-50 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">
                      {index + 1}. {item.title}
                    </h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>45 min</span>
                    </div>
                  </div>
                </div>
                {item.description && (
                  <div className="p-4">
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseContent;
