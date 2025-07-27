'use client';

import { Section } from '@/types';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import YouTube from 'react-youtube';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TestimonialsSection = ({
  testimonials = [],
}: {
  testimonials: Section[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [showFullText, SetShowFullText] = useState<boolean>(false);

  const handleShowFullText = () => {
    SetShowFullText(prev => !prev);
  };
  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setPlayingVideoId(null); // Stop playing when changing items
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setPlayingVideoId(null); // Stop playing when changing items
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setPlayingVideoId(null); // Stop playing when changing items
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

  const onPlayerReady = (event: any) => {
    // You can access the player instance through the event
    event.target.playVideo();
  };

  console.dir({ testimonials }, { depth: 'infinity' });

  return (
    <div className="p-6">
      {testimonials.map(subSection => (
        <div key={subSection.order_idx}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {subSection.name}
          </h2>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            // plugins={[
            //   Autoplay({
            //     delay: 3000,
            //   }),
            // ]}
            className="w-full"
          >
            <CarouselContent>
              {subSection.values.map(testimonial => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2">
                  <div className="p-4">
                    <div className="bg-white rounded-lg border border-gray-500/40 overflow-hidden p-5">
                      <div className="relative">
                        {playingVideoId && testimonial.thumb ? (
                          <div>
                            <YouTube
                              videoId={playingVideoId}
                              opts={opts}
                              onReady={onPlayerReady}
                              className="w-full h-full rounded-md"
                            />
                          </div>
                        ) : !playingVideoId && testimonial.thumb ? (
                          <Image
                            src={testimonial.thumb}
                            alt={testimonial.name}
                            width={400}
                            height={400}
                            className="w-full h-fit object-cover rounded-md"
                          />
                        ) : (
                          <div className="pt-6 flex flex-col justify-between items-start gap-5">
                            <h3
                              className={`text-justify text-sm font-medium text-gray-800 leading-relaxed ${
                                showFullText ? '' : 'line-clamp-5'
                              }`}
                            >
                              {testimonial.testimonial}
                            </h3>

                            <button
                              onClick={handleShowFullText}
                              className="text-green-500 text-xs font-medium flex justify-center items-center gap-2"
                            >
                              {showFullText ? 'সংক্ষিপ্ত করুন' : 'আরও দেখুন'}
                              <span
                                className={`transform transition-transform duration-300 text-lg ${
                                  showFullText ? 'rotate-180' : ''
                                }`}
                              >
                                <ChevronDown className="w-5 h-5" />
                              </span>
                            </button>
                          </div>
                        )}

                        {/* <div className="absolute inset-0 flex items-center justify-center">
                          <button className="bg-white/80 rounded-full p-3">
                            <svg
                              className="w-8 h-8 text-gray-800"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 0111.207 8.5v3a1 1 0 01-1.652.748L8 10.5v-1l1.555-1.332z" />
                            </svg>
                          </button>
                        </div> */}
                      </div>
                      <div className="p-4">
                        <div className="flex items-center">
                          <Image
                            src={testimonial.profile_image}
                            alt={testimonial.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div className="ml-3">
                            <h3 className="font-semibold text-gray-800">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {testimonial.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md" />
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsSection;
