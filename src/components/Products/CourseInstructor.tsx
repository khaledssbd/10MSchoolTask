import { Section } from '@/types';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const CourseInstructor = ({
  instructorSections = [],
}: {
  instructorSections: Section[];
}) => {
  // console.dir({ instructorSections }, { depth: 'infinity' });

  return (
    <div className="p-6">
      {instructorSections?.map(section => (
        <div key={section.order_idx}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {section.name}
          </h2>
          <div className="bg-white rounded-md border border-gray-300 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.values?.map(item => (
              <div key={section.order_idx}>
                {section.values?.map((instructor, index) => (
                  <div key={index} className="flex items-center space-x-6">
                    <Image
                      src={instructor.image}
                      alt={instructor.title || 'Instrctor Image'}
                      width={400}
                      height={400}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl text-gray-900 hover:text-green-500 transition-colors flex justify-start items-center gap-2 cursor-pointer">
                        {instructor.name}{' '}
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      </h3>

                      <div
                        className="prose prose-gray max-w-none mt-1"
                        dangerouslySetInnerHTML={{
                          __html: instructor.description,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseInstructor;
