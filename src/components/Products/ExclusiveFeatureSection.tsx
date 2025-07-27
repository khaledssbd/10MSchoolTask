import { Section } from '@/types';
import Image from 'next/image';

const ExclusiveFeatureSection = ({
  exclusiveFeatureSection = [],
}: {
  exclusiveFeatureSection: Section[];
}) => {
  // console.dir({ exclusiveFeatureSection }, { depth: 'infinity' });

  return (
    <div className="p-6" id="ExclusiveFeatureSection">
      {exclusiveFeatureSection.map(subSection => (
        <div key={subSection.order_idx}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {subSection.name}
          </h2>

          <div className="bg-white rounded-md border border-dashed border-gray-300 p-6">
            {subSection.values?.map(item => (
              <div
                key={item.id}
                className="flex items-center justify-between space-x-3 py-5 border-b border-gray-200 last:border-b-0"
              >
                <div>
                  <p className="text-gray-700 font-medium">{item.title}</p>

                  <div className="flex items-start pt-2 gap-2 flex-col">
                    {item.checklist.map((point: string, index: string) => (
                      <div
                        key={index}
                        className="flex items-center justify-center gap-3"
                      >
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mt-1">
                          <svg
                            className="w-full h-full text-blue-500/80"
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
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Image
                  src={item.file_url}
                  alt={item.title}
                  width={350}
                  height={350}
                  className="w-52 h-52 object-cover rounded-md border border-gray-200"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExclusiveFeatureSection;
