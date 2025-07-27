import { Section } from '@/types';

const RequirementsSection = ({
  requirementsSection = [],
}: {
  requirementsSection: Section[];
}) => {
  // console.dir({ requirementsSection }, { depth: 'infinity' });

  const requirements = [
    { text: 'ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)' },
    {
      text: 'স্মার্টফোন অথবা পিসি',
    },
  ];

  return (
    <div className="p-6">
      {requirementsSection?.map(subSection => (
        <div key={subSection.order_idx}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {subSection.name}
          </h2>
          <div className="bg-white rounded-md border border-gray-300 p-6 flex flex-col gap-x-8 gap-y-4  text-sm font-medium">
            {requirements?.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
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
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequirementsSection;
