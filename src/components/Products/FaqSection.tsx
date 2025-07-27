'use client';

import { Section } from '@/types';
import { useState } from 'react';
import { ToggleType } from './ContentPreview';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection = ({ faqSection = [] }: { faqSection: Section[] }) => {
  // console.dir({ faqSection }, { depth: 'infinity' });

  const [expandedSections, setExpandedSections] = useState<ToggleType>({
    intro: true,
  });
  const [showAllModules, setShowAllModules] = useState(false);

  const toggleSection = (key: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const visibleSections = showAllModules
    ? faqSection[0].values
    : faqSection[0].values.slice(0, 5);

  return (
    <div className="p-6">
      {faqSection?.map(subSection => (
        <div key={subSection.order_idx}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {subSection.name}
          </h2>
          <div className="relative bg-white rounded-md border border-gray-300 p-6 space-y-3">
            {visibleSections?.map((SsubSection, sectionIndex) => (
              <div
                key={SsubSection.id}
                className={`border-b border-dashed border-gray-300 ${
                  sectionIndex === visibleSections.length - 1
                    ? 'border-b-0'
                    : ''
                }`}
              >
                <div
                  className="flex justify-between items-center py-4 cursor-pointer font-semibold text-gray-700"
                  onClick={() => toggleSection(SsubSection.id)}
                >
                  <h3 className="prose prose-gray max-w-none text-gray-800 text-sm">
                    {SsubSection.question}
                  </h3>

                  <span
                    className={`transform transition-transform duration-300 text-lg ${
                      expandedSections[SsubSection.id] ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedSections[SsubSection.id]
                      ? 'max-h-screen opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div
                    className="prose prose-gray max-w-none text-gray-600 space-y-4 pt-2 pb-4 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: SsubSection.answer || '',
                    }}
                  />
                </div>
              </div>
            ))}

            <button
              className="absolute -bottom-5 w-fit px-4 py-2 left-0 right-0 block mx-auto text-center bg-gray-50 rounded-full cursor-pointer text-gray-500 hover:text-black text-sm transition-colors duration-200"
              onClick={() => setShowAllModules(prev => !prev)}
            >
              {showAllModules ? (
                <div className="flex justify-center items-center gap-2">
                  কম দেখুন <ChevronUp className="w-4 h-4" />
                </div>
              ) : (
                <div className="flex justify-center items-center gap-2">
                  সকল প্রশ্ন-উত্তর <ChevronDown className="w-4 h-4" />
                </div>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
