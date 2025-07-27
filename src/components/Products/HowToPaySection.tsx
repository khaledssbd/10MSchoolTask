'use client';

import { Section } from '@/types';
import { Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';

const HowToPaySection = ({
  howToPaySection = [],
}: {
  howToPaySection: Section[];
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const videoId = '5wfn60rmWX4';

  const handleVideoLinkClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsVideoPlaying(false);
  };

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className="p-6">
      {howToPaySection?.map(subSection => (
        <div key={subSection.order_idx}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {subSection.name}
          </h2>
          <div className="bg-white rounded-md border border-gray-300 p-6 gap-x-8 gap-y-4 text-sm font-medium">
            <p className="text-gray-700">
              কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{' '}
              <button
                onClick={handleVideoLinkClick}
                className="text-green-600 underline hover:text-green-700 cursor-pointer"
              >
                এই ভিডিওটি দেখুন
              </button>
            </p>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
              <div
                ref={modalRef}
                className="bg-white rounded-lg p-6 w-full max-w-4xl relative"
              >
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-semibold"
                >
                  ✕
                </button>

                {isVideoPlaying ? (
                  <div className="aspect-video w-full p-5">
                    <YouTube
                      videoId={videoId}
                      opts={opts}
                      className="w-full h-full rounded-md"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-8">
                    <h3 className="text-xl font-bold mb-6">
                      পেমেন্ট করার পদ্ধতি
                    </h3>
                    <button
                      onClick={handlePlayButtonClick}
                      className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 flex items-center justify-center transition-colors"
                    >
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                          clipRule="evenodd"
                        />
                      </svg> */}
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </button>
                    <p className="mt-4 text-gray-600">
                      ভিডিওটি দেখতে প্লে বাটনে ক্লিক করুন
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HowToPaySection;
