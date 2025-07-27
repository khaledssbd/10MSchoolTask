'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TopCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    sectionId: string | undefined
  ) => {
    e.preventDefault();
    const section = document.querySelector(sectionId!);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const carouselItems = [
    {
      title: 'কোর্স ইন্সট্রাক্টর',
      id: '#CourseInstructor',
    },
    {
      title: 'কোর্সটি যেভাবে সাজানো হয়েছে',
      id: '#CourseFeatures',
    },
    {
      title: 'কোর্সটি করে যা শিখবেন',
      id: '#WhatYouWillLearn',
    },
    {
      title: 'কোর্স সম্পর্কে বিস্তারিত',
      id: '#CourseDetails',
    },
    {
      title: 'কোর্স এক্সক্লুসিভ ফিচার',
      id: '#ExclusiveFeatureSection',
    },
    {
      title: 'এই কোর্সের সাথে ফ্রি পাচ্ছেন–',
      id: '#FreeItemsSection',
    },
    {
      title: 'শিক্ষার্থীরা যা বলছে',
      id: '#TestimonialsSection',
    },
    {
      title: 'সচরাচর জিজ্ঞাসা',
      id: '#FaqSection',
    },
    ,
  ];

  return (
    <div className="w-full max-w-3xl m-8 absolute left-42">
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          className="bg-gray-500 hover:bg-white text-gray-800 font-bold p-2 rounded-full disabled:opacity-50 group"
        >
          <ChevronLeft className="text-white group-hover:text-black" />
        </button>
      </div>
      <div className="overflow-hidden border-b border-gray-300" ref={emblaRef}>
        <div className="flex">
          {carouselItems.map((item, index) => (
            <button
              onClick={e => scrollToSection(e, item?.id)}
              key={index}
              className="flex-shrink-0 relative px-4 py-2 cursor-pointer"
            >
              <p className="text-center whitespace-nowrap">{item?.title}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="absolute -right-8 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          className="bg-gray-500 hover:bg-white text-gray-800 font-bold p-2 rounded-full disabled:opacity-50 group"
        >
          <ChevronRight className="text-white group-hover:text-black" />
        </button>
      </div>
    </div>
  );
};

export default TopCarousel;
