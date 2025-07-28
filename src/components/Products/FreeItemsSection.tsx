import { Section } from '@/types';
import Image from 'next/image';

const FreeItemsSection = ({
  freeItemsSection = [],
}: {
  freeItemsSection: Section[];
}) => {
  // console.dir({ freeItemsSection }, { depth: 'infinity' });

  return (
    <div className="p-6" id="FreeItemsSection">
      {freeItemsSection.map(subSection => (
        <div key={subSection.order_idx}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {subSection.name}
          </h2>

          <div className="relative bg-gradient-to-tr from-black via-red-700/90 to-red-400/70 rounded-2xl p-4">
            {/* Inner container with red gradient and border effect */}
            {/* <div className="relative py-5 px-8 rounded-2xl border-4 border-gray-500/30"> */}

            <div className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-800 py-5 px-8 rounded-2xl border-2 border-gray-400/70">
              {/* Additional inner glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-red-700/90 to-red-400/70 rounded-xl"></div>

              <div className="relative flex flex-col md:flex-row items-center justify-between">
                {/* Left side - Text content */}
                <div className="text-white space-y-6">
                  <h2 className="text-lg md:text-xl font-medium leading-tight">
                    ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)
                  </h2>

                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full flex-shrink-0"></div>
                      <span className="text-base">360 পৃষ্ঠা</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full flex-shrink-0"></div>
                      <span className="text-base">প্রিমিয়াম হার্ডকপি</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full flex-shrink-0"></div>
                      <span className="text-base">ফ্রি ডেলিভারি</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-white/60 rounded-full flex-shrink-0"></div>
                      <span className="text-base">
                        ৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Right side - Book image */}
                {/* <div className="h-72 w-52">
                    <Image
                      src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png"
                      alt="IELTS প্রস্তুতি বই"
                      width={300}
                      height={300}
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div> */}
                <div className="flex justify-center md:justify-end">
                  <Image
                    src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png"
                    alt="IELTS প্রস্তুতি বই"
                    width={150}
                    height={200}
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FreeItemsSection;
