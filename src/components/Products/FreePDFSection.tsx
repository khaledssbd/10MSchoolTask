import { Section } from '@/types';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FreePDFSection = ({ pdfSections = [] }: { pdfSections: Section[] }) => {
  //  console.log({ pdfSections });
  return (
    <div className="space-y-8">
      {pdfSections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="relative bg-black rounded-lg p-8 text-white mt-8 overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={section?.values[0]?.background?.image || ''}
              alt="Background"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 mb-6 md:mb-0 md:pr-8">
              <div className="flex items-center mb-3">
                <Image
                  src={section.values[0].top_left_icon_img}
                  alt="PDF Thumbnail"
                  width={200}
                  height={200}
                  className="h-5 md:h-10 w-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {section?.values[0]?.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {section?.values[0]?.description}
              </p>
              <Link
                href={section?.values[0]?.cta?.clicked_url || '#'}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center w-fit"
              >
                <Download className="w-5 h-5 mr-2" />
                <span>{section?.values[0]?.cta?.text}</span>
              </Link>
            </div>

            <div className="flex-shrink-0 relative z-10">
              {section?.values[0]?.thumbnail && (
                <Image
                  src={section.values[0].thumbnail}
                  alt="PDF Thumbnail"
                  width={200}
                  height={200}
                  className="h-40 w-auto object-contain"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FreePDFSection;
