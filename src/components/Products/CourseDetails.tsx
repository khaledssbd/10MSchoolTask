import { Section } from '@/types';

const CourseDetails = ({
  aboutSections = [],
}: {
  aboutSections: Section[];
}) => {
  return (
    <div>
      {aboutSections.map(section => (
        <div key={section.order_idx} className="py-8 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {section.name}
          </h2>
          <div className="prose prose-gray max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: section.description || '',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
