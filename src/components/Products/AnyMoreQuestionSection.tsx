import { PhoneCall } from 'lucide-react';

const AnyMoreQuestionSection = ({ lang }: { lang: string | undefined }) => {
  return (
    <div className="p-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          {lang === 'bn' ? ' আরও কোন জিজ্ঞাসা আছে?' : 'Any more questions?'}
        </h2>

        <a
          href="tel:16910"
          className="w-fit bg-white rounded-md border border-gray-300 py-6 px-10 gap-3 text-xl font-medium flex items-center justify-center cursor-pointer hover:bg-gray-50 hover:shadow-md hover:border-green-600 transition-colors duration-200"
        >
          <PhoneCall className="w-6 h-6 text-green-600" />
          <p className="text-green-600">কল করুন 16910 নম্বরে</p>
        </a>
      </div>
    </div>
  );
};

export default AnyMoreQuestionSection;
