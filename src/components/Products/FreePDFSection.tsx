import { Download } from 'lucide-react';

const FreePDFSection = () => {
  return (
    <div className="bg-black rounded-lg p-8 text-white mt-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 mb-6 md:mb-0 md:pr-8">
          <div className="flex items-center mb-3">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
              Free PDF
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-2">IELTS Confirm 7+ Score (Guideline)</h3>
          <p className="text-gray-300 mb-4">
            IELTS ভালো score করার সেরা Strategies জানুন সেরা মেন্টরের অভিজ্ঞতায়।
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center">
            <Download className="w-5 h-5 mr-2" />
            <span>PDF Download করুন</span>
          </button>
        </div>
        <div className="flex-shrink-0">
          <img
            src="https://placehold.co/200x150/333333/FFFFFF?text=Guideline+Cover"
            alt="IELTS Guideline"
            className="h-40 object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FreePDFSection;
