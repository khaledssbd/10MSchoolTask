'use client';

import { Section } from '@/types';
import { useState } from 'react';
import { ToggleType } from './ContentPreview';
import { ChevronDown } from 'lucide-react';

const CourseDetails = ({
  aboutSections = [],
}: {
  aboutSections: Section[];
}) => {
  // console.log(aboutSections);

  const [expandedSections, setExpandedSections] = useState<ToggleType>({
    intro: true,
  });

  const toggleSection = (key: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="p-6">
      {aboutSections?.map(section => (
        <div key={section.order_idx}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {section.name}
          </h2>
          <div className="bg-white rounded-md border border-gray-300 p-6 space-y-3">
            {/* {section.values?.map((item, index) => (
              <div key={index}>
                <div
                  className="prose prose-gray max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: item.title || '',
                  }}
                />
                <div
                  className="prose prose-gray max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: item.description || '',
                  }}
                />
              </div>
            ))} */}

            {section.values?.map(section => (
              <div
                key={section.id}
                className="border-b border-dashed border-gray-300 last:border-b-0"
              >
                <div
                  className="flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer font-semibold text-gray-700"
                  onClick={() => toggleSection(section.id)}
                >
                  <div
                    className="prose prose-gray max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: section.title || '',
                    }}
                  />

                  <span
                    className={`transform transition-transform duration-300 text-lg ${
                      expandedSections[section.id] ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedSections[section.id]
                      ? 'max-h-screen opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div
                    className="prose prose-gray max-w-none text-gray-700 py-4"
                    dangerouslySetInnerHTML={{
                      __html: section.description || '',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
