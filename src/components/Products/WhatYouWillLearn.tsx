import { Section } from '@/types';

const WhatYouWillLearn = ({
  pointerSections = [],
}: {
  pointerSections: Section[];
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {pointerSections.map(section => (
        <div key={section.order_idx}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {section.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {section.values?.map(item => (
              <div key={item.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
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
                <p className="text-gray-700">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatYouWillLearn;
