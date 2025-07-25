import {
  Award,
  BookOpen,
  Clock,
  Download,
  Play,
  FileText,
  MessageSquare,
  Users,
} from 'lucide-react';

const colorMap = {
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  red: 'bg-red-500',
  green: 'bg-green-500',
};

const features = [
  {
    icon: Play,
    title: '৫০+ ভিডিও লেকচার',
    description:
      'IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা',
    color: 'blue',
  },
  {
    icon: FileText,
    title: '৩৬টি লেকচার শিট',
    description:
      'Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার নিয়মসহ 600+ Vocabulary',
    color: 'indigo',
  },
  {
    icon: MessageSquare,
    title: 'রিডিং এন্ড লিসিনিং মক টেস্ট',
    description:
      '10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই',
    color: 'red',
  },
  {
    icon: Users,
    title: 'লাইভ সেশন',
    description: 'সরাসরি ইন্সট্রাক্টরের সাথে ಮಾತ বলার সুযোগ',
    color: 'green',
  },
];

const CourseFeatures = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        কোর্সটি যেভাবে সাজানো হয়েছে
      </h2>
      <div className="bg-[#111827] rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          console.log({ color: feature.color });
          return (
            <div key={index} className="flex items-start space-x-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full ${
                  colorMap[feature.color as keyof typeof colorMap]
                } text-white flex items-center justify-center`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white/80">{feature.title}</h3>
                <p className="text-sm text-white/50">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseFeatures;
