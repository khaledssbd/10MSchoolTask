import { Section } from '@/types';
import Image from 'next/image';

const TestimonialsSection = ({
  testimonialsSection = [],
}: {
  testimonialsSection: Section[];
}) => {
  console.dir({ testimonialsSection }, { depth: 'infinity' });

  return (
    <div className="p-6">
      {testimonialsSection.map(subSection => (
        <div key={subSection.order_idx}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {subSection.name}
          </h2>

          <div>
            
         </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsSection;
