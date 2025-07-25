import { Download } from 'lucide-react';

const FreePDFSection = () => {
  return (
    <div className="py-8 border-t">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <Download className="w-6 h-6 mr-2" />
              <span className="bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                Free PDF
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">IELTS Complete Book</h3>
            <p className="text-orange-100 mb-4">
              সম্পূর্ণ IELTS গাইডবুক ফ্রিতে ডাউনলোড করুন
            </p>
            <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              ডাউনলোড করুন
            </button>
          </div>
          <div className="hidden md:block">
            <img
              src="/10mslogo-svg.svg?height=120&width=200&text=IELTS+Book+Cover"
              alt="IELTS Book"
              className="h-32 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreePDFSection;
