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
import ContentPreview from '@/components/Products/ContentPreview';
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

  console.dir({ data }, { depth: 'infinity' });

  // console.log({ media: data.media });

  // Separate sections by type
  const instructorSection = data.sections.filter(
    (section: { type: string }) => section.type === 'instructors'
  );

  const featureSection = data.sections.filter(
    (section: { type: string }) => section.type === 'features'
  );

  const contentPreviewSection = data.sections.filter(
    (section: { type: string }) => section.type === 'content_preview'
  );

  // console.log({ featureSections });

  const pointerSection = data.sections.filter(
    (section: { type: string }) => section.type === 'pointers'
  );

  // console.log({ pointerSections });

  const pdfSection = data.sections.filter(
    (section: { type: string }) => section.type === 'group_join_engagement'
  );

  const aboutSection = data.sections.filter(
    (section: { type: string }) => section.type === 'about'
  );

  const exclusiveFeatureSection = data.sections.filter(
    (section: { type: string }) => section.type === 'feature_explanations'
  );

  return (
    <div className="bg-gray-100">
      <HeroSection data={data} />
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div className="px-4 sm:px-6 lg:px-8 py-8 lg:col-span-2 space-y-8">
          <CourseInstructor instructorSection={instructorSection} />
          <CourseFeatures featureSection={featureSection} />
          <FreePDFSection pdfSection={pdfSection} />
          <WhatYouWillLearn pointerSection={pointerSection} />
          <ContentPreview contentPreviewSection={contentPreviewSection} />
          <CourseDetails aboutSection={aboutSection} />
        </div>
        <div className="mt-8 lg:-mt-64 lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <Checklist data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
