import { Section } from '@/types';

const CourseDetails = ({
  aboutSections = [],
}: {
  aboutSections: Section[];
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {aboutSections?.map(section => (
        <div key={section.order_idx}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {section.name}
          </h2>
          <div
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{
              __html: section.description || '',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
