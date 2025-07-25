import { CourseData } from '@/types';

const Checklist = ({ data }: { data: CourseData }) => {
  return (
    <div>
      {data.checklist.length > 0 && (
        <div className="py-8 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            কোর্স সুবিধা
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.checklist.map(item => (
              <div
                key={item.id}
                className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200"
              >
                <div className="flex-shrink-0">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
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
                <span className="text-gray-900 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Checklist;
