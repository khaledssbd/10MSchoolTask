import { Section } from '@/types';

const WhatYouWillLearn = ({
  pointerSection = [],
}: {
  pointerSection: Section[];
}) => {
  return (
    <div className="p-6">
      {pointerSection?.map(subSection => (
        <div key={subSection.order_idx}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {subSection.name}
          </h2>
          <div className="bg-white rounded-md border border-gray-300 p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {subSection.values?.map(
              (item: {
                color: string;
                icon: string;
                id: string;
                text: string;
              }) => (
                <div key={item.text} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mt-1">
                      <svg
                        className="w-5 h-5 text-blue-500"
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
                  <p className="text-gray-700">{item.text}</p>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatYouWillLearn;
