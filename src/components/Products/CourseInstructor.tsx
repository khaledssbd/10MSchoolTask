import { Section } from '@/types';

const CourseInstructor = ({
  instructorSections = [],
}: {
  instructorSections: Section[];
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        কোর্স ইন্সট্রাক্টর
      </h2>
      {instructorSections.map(section => (
        <div key={section.order_idx}>
          {section.values?.map(instructor => (
            <div key={instructor.id} className="flex items-start space-x-6">
              <img
                src={instructor.image}
                alt={instructor.title}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {instructor.title}
                </h3>
                <div
                  className="prose prose-gray max-w-none mt-1"
                  dangerouslySetInnerHTML={{ __html: instructor.description }}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CourseInstructor;
