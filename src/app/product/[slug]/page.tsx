import type { Metadata } from 'next';
import { getProductData } from '@/services/Product';
import HeroSection from '@/components/Products/HeroSection';
import CourseInstructor from '@/components/Products/CourseInstructor';
import CourseFeatures from '@/components/Products/CourseFeatures';
import FreePDFSection from '@/components/Products/FreePDFSection';
import WhatYouWillLearn from '@/components/Products/WhatYouWillLearn';
import ContentPreview from '@/components/Products/ContentPreview';
import Checklist from '@/components/Products/Checklist';
import CourseDetails from '@/components/Products/CourseDetails';
import ExclusiveFeatureSection from '@/components/Products/ExclusiveFeatureSection';
import FreeItemsSection from '@/components/Products/FreeItemsSection';
import TestimonialsSection from '@/components/Products/TestimonialsSection';
import RequirementsSection from '@/components/Products/RequirementsSection';
import HowToPaySection from '@/components/Products/HowToPaySection';
import FaqSection from '@/components/Products/FaqSection';
import AnyMoreQuestionSection from '@/components/Products/AnyMoreQuestionSection';
import MoreCoursesForYou from '@/components/Products/MoreCoursesForYou';
import AdvertiseBanner from '@/components/Products/AdvertiseBanner';
import TopCarousel from '@/components/Products/TopCarousel';

type PageProps = {
  searchParams: Promise<{ lang?: 'en' | 'bn'; banner?: 'true' | 'false' }>;
};

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const query = await searchParams;

  if (query.lang && query.lang !== 'en' && query.lang !== 'bn') {
    query.lang = 'en';
  }

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

  if (query.lang && query.lang !== 'en' && query.lang !== 'bn') {
    query.lang = 'en';
  }

  const data = await getProductData(query.lang);

  // console.dir({ data }, { depth: 'infinity' });

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

  const freeItemsSection = data.sections.filter(
    (section: { type: string }) => section.type === 'free_items'
  );

  const testimonialsSection = data.sections.filter(
    (section: { type: string }) => section.type === 'testimonials'
  );

  const requirementsSection = data.sections.filter(
    (section: { type: string }) => section.type === 'requirements'
  );

  const howToPaySection = data.sections.filter(
    (section: { type: string }) => section.type === 'how_to_pay'
  );

  const faqSection = data.sections.filter(
    (section: { type: string }) => section.type === 'faq'
  );

  return (
    <div className="bg-white relative">
      <AdvertiseBanner banner={query.banner} />

      <HeroSection data={data} />

      <div className="hidden md:block">
        <TopCarousel />
      </div>

      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-3 lg:gap-x-8 mt-12">
        <div className="px-4 sm:px-6 lg:px-8 py-8 lg:col-span-2 space-y-8">
          <CourseInstructor instructorSection={instructorSection} />

          <CourseFeatures featureSection={featureSection} />

          <FreePDFSection pdfSection={pdfSection} />

          <WhatYouWillLearn pointerSection={pointerSection} />

          <ContentPreview contentPreviewSection={contentPreviewSection} />

          <CourseDetails aboutSection={aboutSection} />

          <ExclusiveFeatureSection
            exclusiveFeatureSection={exclusiveFeatureSection}
          />

          <FreeItemsSection freeItemsSection={freeItemsSection} />

          <TestimonialsSection testimonials={testimonialsSection} />

          <RequirementsSection requirementsSection={requirementsSection} />

          <HowToPaySection howToPaySection={howToPaySection} />

          <FaqSection faqSection={faqSection} />

          <AnyMoreQuestionSection lang={query.lang} />
        </div>
        <div className="mt-8 lg:-mt-64 lg:col-span-1">
          <div className="sticky top-24 space-y-8 z-30">
            <Checklist data={data} />
          </div>
        </div>
        <div className="lg:ml-8 col-span-3">
          <MoreCoursesForYou lang={query.lang} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
