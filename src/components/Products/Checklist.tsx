'use client';

import { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import YouTube from 'react-youtube';
import { CourseData } from '@/types';
import Image from 'next/image';

const Checklist = ({ data }: { data: CourseData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const galleryItems = data.media.filter(
    media => media.name === 'preview_gallery' || media.name === 'book_preview'
  );

  const currentItem = galleryItems[currentIndex];

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
    setPlayingVideoId(null); // Stop playing when changing items
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
    setPlayingVideoId(null); // Stop playing when changing items
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setPlayingVideoId(null); // Stop playing when changing items
  };

  const handlePlayClick = () => {
    if (currentItem.resource_type === 'video') {
      setPlayingVideoId(currentItem.resource_value);
    }
  };

  const onPlayerReady = (event: any) => {
    // You can access the player instance through the event
    event.target.playVideo();
  };

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
    <div className="bg-white border border-gray-300 p-1">
      {galleryItems.length > 0 && (
        <div className="relative mb-6">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            {playingVideoId && currentItem.resource_type === 'video' ? (
              <YouTube
                videoId={playingVideoId}
                opts={opts}
                onReady={onPlayerReady}
                className="w-full h-full"
              />
            ) : currentItem.resource_type === 'image' ? (
              <Image
                src={currentItem.resource_value}
                alt="Course Preview"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <Image
                  src={currentItem.thumbnail_url!}
                  alt="Video Thumbnail"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                  onClick={handlePlayClick}
                >
                  <div className="bg-white rounded-full p-4">
                    <Play
                      className="w-8 h-8 text-gray-800 ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </>
            )}

            {galleryItems.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black/50 rounded-full"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black/50 rounded-full"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail gallery */}
          {galleryItems.length > 1 && (
            <div className="flex gap-2 mt-2 overflow-x-auto py-2">
              {galleryItems?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 ${
                    currentIndex === index
                      ? 'border-green-500'
                      : 'border-transparent'
                  }`}
                >
                  <Image
                    src={
                      item.resource_type === 'video'
                        ? item.thumbnail_url!
                        : item.resource_value
                    }
                    alt="Thumbnail url"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  {item.resource_type === 'video' && (
                    <div className="relative -mt-6 flex justify-center">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Rest of your component remains the same */}
      <div className="p-5">
        <div className="flex items-center space-x-2 mb-2">
          <div className="text-2xl font-bold text-gray-900">
            ৳3850
            <span className="text-lg text-gray-500 line-through ml-2">
              ৳5000
            </span>
          </div>
          <div className="relative inline-flex items-center text-white text-sm font-semibold">
            {/* Left angled cut using clip-path */}
            <div className="bg-orange-500/80 pl-3 pr-2 py-1 rounded-r-md flex items-center clip-tag">
              <span className="mr-1 text-base">•</span>
              1150 ৳ ছাড়
            </div>
          </div>
        </div>

        <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-6">
          {data.cta_text.name}
        </button>

        {data.checklist.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              এই কোর্সে যা থাকছে
            </h3>
            <ul className="space-y-3">
              {data.checklist?.map(item => (
                <li key={item.id} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checklist;
