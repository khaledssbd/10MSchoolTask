import { Section } from '@/types';

const CourseInstructor = ({
  instructorSections = [],
}: {
  instructorSections: Section[];
}) => {
  return (
    <div className="py-8 border-t">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        কোর্স ইন্সট্রাক্টর
      </h2>
      {instructorSections.map(section => (
        <div key={section.order_idx}>
          {section.values?.map(instructor => (
            <div
              key={instructor.id}
              className="flex items-start space-x-6 bg-gray-50 p-6 rounded-lg"
            >
              <img
                src={
                  instructor.image ||
                  `/10mslogo-svg.svg?height=100&width=100&text=${instructor.title}`
                }
                alt={instructor.title}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {instructor.title}
                </h3>
                <p className="text-green-600 font-medium mb-2">
                  {instructor.designation}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {instructor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CourseInstructor;
