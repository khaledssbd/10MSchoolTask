import { Section } from '@/types';

const HowToPaySection = ({
  howToPaySection = [],
}: {
  howToPaySection: Section[];
}) => {
  console.dir({ howToPaySection }, { depth: 'infinity' });

  return (
    <div className="p-6">
      {howToPaySection?.map(subSection => (
        <div key={subSection.order_idx}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {subSection.name}
          </h2>
          <div className="bg-white rounded-md border border-gray-300 p-6  gap-x-8 gap-y-4  text-sm font-medium">
            <p className="text-gray-700">
              কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{' '}
              <span className="text-green-600 underline">এই ভিডিওটি দেখুন</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowToPaySection;
