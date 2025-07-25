import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  Star,
  Play,
  Download,
  Users,
  Clock,
  Award,
  BookOpen,
} from 'lucide-react';
import { getProductData } from '@/services/Product';
import HeroSection from '@/components/Products/HeroSection';
import CourseInstructor from '@/components/Products/CourseInstructor';
import CourseFeatures from '@/components/Products/CourseFeatures';
import FreePDFSection from '@/components/Products/FreePDFSection';
import WhatYouWillLearn from '@/components/Products/WhatYouWillLearn';
import CourseContent from '@/components/Products/CourseContent';
import Checklist from '@/components/Products/Checklist';
import CourseDetails from '@/components/Products/CourseDetails';

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: 'en' | 'bn' }>;
};

// type SearchParams = Promise<{ lang?: 'en' | 'bn' }>;

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const query = await searchParams;

  try {
    const data = await getProductData(query.lang);

    // console.dir({ data }, { depth: 'infinity' });

    return {
      title: data.seo.title,
      description: data.seo.description,
      keywords: data.seo.keywords,
      openGraph: {
        title: data.seo.title,
        description: data.seo.description,
        images: data.seo.defaultMeta[5].content
          ? [data.seo.defaultMeta[5].content]
          : [],
      },
    };
  } catch {
    return {
      title: 'IELTS Course',
      description: 'Learn IELTS with expert instructors',
    };
  }
}

const ProductPage = async ({ searchParams }: PageProps) => {
  const query = await searchParams;

  const data = await getProductData(query.lang);

  // console.log({ data });

  // console.log({ media: data.media });

  // Separate sections by type
  const instructorSections = data.sections.filter(
    (section: { type: string }) => section.type === 'instructor'
  );

  const featureSections = data.sections.filter(
    (section: { type: string }) => section.type === 'features'
  );

  const pointerSections = data.sections.filter(
    (section: { type: string }) => section.type === 'pointers'
  );

  const aboutSections = data.sections.filter(
    (section: { type: string }) => section.type === 'about'
  );

  return (
    <div className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <HeroSection data={data} />
      {/* Course Instructor */}
      <CourseInstructor instructorSections={instructorSections} />
      {/* Course Features */}
      <CourseFeatures />
      {/* Free PDF Section */}
      <FreePDFSection />
      {/* What You'll Learn */}
      |<WhatYouWillLearn pointerSections={pointerSections} />
      {/* Course Content */}
      <CourseContent featureSections={featureSections} />
      {/* Checklist */}
      <Checklist data={data} />
      {/* Course Details */}
      <CourseDetails aboutSections={aboutSections} />
    </div>
  );
};

export default ProductPage;
