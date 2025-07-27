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
import { ChevronDown, Play } from 'lucide-react';

const TestimonialsSection = ({
  testimonials = [],
}: {
  testimonials: Section[];
}) => {
  // console.dir({ testimonials }, { depth: 'infinity' });

  const [playingCardKey, setPlayingCardKey] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>(
    {}
  );

  const handlePlayClick = (videoId: string | undefined, cardKey: string) => {
    if (videoId) {
      setPlayingCardKey(cardKey);
    }
  };

  const handleShowFullText = (cardKey: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardKey]: !prev[cardKey],
    }));
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
    event.target.playVideo();
  };

  return (
    <div className="p-6" id="TestimonialsSection">
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
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {subSection.values.map((testimonial, index) => {
                const cardKey = `${subSection.order_idx}-${index}`;
                const isPlaying = playingCardKey === cardKey;
                const isTextExpanded = expandedCards[cardKey] || false;

                return (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="py-4 px-2">
                      <div className="bg-white rounded-lg border border-gray-500/40 p-5 relative">
                        {/* Quotation mark at the top */}
                        <div className="absolute -top-4 left-6 text-4xl text-red-700 pt-3 rounded-full bg-red-200 w-10 h-10 flex items-center justify-center">
                          ❝
                        </div>

                        <div className="relative">
                          {isPlaying && testimonial.thumb ? (
                            <div className="aspect-video">
                              <YouTube
                                videoId={testimonial.video_url}
                                opts={opts}
                                onReady={onPlayerReady}
                                className="w-full h-full rounded-md"
                              />
                            </div>
                          ) : !isPlaying && testimonial.thumb ? (
                            <div className="relative aspect-video">
                              <Image
                                src={testimonial.thumb}
                                alt={testimonial.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-md">
                                <button
                                  onClick={() =>
                                    handlePlayClick(
                                      testimonial.video_url,
                                      cardKey
                                    )
                                  }
                                  className="bg-white/70 rounded-full p-4 hover:bg-white transition-colors"
                                >
                                  <div className="bg-white rounded-full p-4">
                                    <Play className="w-8 h-8 text-red-600 fill-red-600 ml-1" />
                                  </div>
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="pt-6 flex flex-col justify-between items-start gap-5">
                              <h3
                                className={`text-justify text-sm font-medium text-gray-800 leading-relaxed ${
                                  isTextExpanded ? '' : 'line-clamp-5'
                                }`}
                              >
                                {testimonial.testimonial}
                              </h3>

                              <button
                                onClick={() => handleShowFullText(cardKey)}
                                className="text-green-500 text-xs font-medium flex justify-center items-center gap-2"
                              >
                                {isTextExpanded
                                  ? 'সংক্ষিপ্ত করুন'
                                  : 'আরও দেখুন'}
                                <span
                                  className={`transform transition-transform duration-300 text-lg ${
                                    isTextExpanded ? 'rotate-180' : ''
                                  }`}
                                >
                                  <ChevronDown className="w-5 h-5" />
                                </span>
                              </button>
                            </div>
                          )}
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
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-gray-600/60 hover:bg-white rounded-full p-2 shadow-md text-white hover:text-black" />
            <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-gray-600/60 hover:bg-white rounded-full p-2 shadow-md text-white hover:text-black" />
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default TestimonialsSection;
