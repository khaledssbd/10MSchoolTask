import { Section } from '@/types';

const WhatYouWillLearn = ({
  pointerSections = [],
}: {
  pointerSections: Section[];
}) => {
  return (
    <div>
      {pointerSections.map(section => (
        <div key={section.order_idx} className="py-8 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {section.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.values?.map(item => (
              <div key={item.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatYouWillLearn;
