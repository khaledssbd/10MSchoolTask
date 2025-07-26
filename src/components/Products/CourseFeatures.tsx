import { Section } from '@/types';
import Image from 'next/image';

const CourseFeatures = ({
  featureSection = [],
}: {
  featureSection: Section[];
}) => {
  // console.dir({ featureSections }, { depth: 'infinity' });

  return (
    <div className="p-6">
      {featureSection?.map(subSection => (
        <div key={subSection.order_idx}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {subSection.name}
          </h2>
          <div className="bg-[#111827] rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {subSection.values?.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full text-white flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt="Feature icon"
                    width={350}
                    height={350}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white/80">{feature.title}</h3>
                  <p className="text-sm text-white/50">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseFeatures;
