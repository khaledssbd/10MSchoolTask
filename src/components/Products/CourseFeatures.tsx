import { Award, BookOpen, Clock, Download } from 'lucide-react';

const CourseFeatures = () => {
  return (
    <div className="py-8 border-t">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        কোর্সে যা যা থাকছে
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg text-white">
          <div className="flex items-center mb-3">
            <BookOpen className="w-6 h-6 mr-3" />
            <h3 className="text-lg font-semibold">৪০+ ভিডিও লেসন</h3>
          </div>
          <p className="text-blue-100">
            সম্পূর্ণ IELTS সিলেবাস কভার করে বিস্তারিত ভিডিও লেকচার
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-lg text-white">
          <div className="flex items-center mb-3">
            <Award className="w-6 h-6 mr-3" />
            <h3 className="text-lg font-semibold">লাইভ ক্লাস</h3>
          </div>
          <p className="text-green-100">
            সাপ্তাহিক লাইভ ক্লাসে সরাসরি প্রশ্ন করার সুযোগ
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-lg text-white">
          <div className="flex items-center mb-3">
            <Clock className="w-6 h-6 mr-3" />
            <h3 className="text-lg font-semibold">মক টেস্ট</h3>
          </div>
          <p className="text-purple-100">
            নিয়মিত মক টেস্টের মাধ্যমে প্রস্তুতি যাচাই
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-lg text-white">
          <div className="flex items-center mb-3">
            <Download className="w-6 h-6 mr-3" />
            <h3 className="text-lg font-semibold">স্টাডি ম্যাটেরিয়াল</h3>
          </div>
          <p className="text-red-100">
            ডাউনলোডযোগ্য নোট, বই এবং প্র্যাকটিস শিট
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseFeatures;
