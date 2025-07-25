'use server';

import { CourseData } from '@/types';

export async function getProductData(
  lang: 'en' | 'bn' = 'en'
): Promise<CourseData> {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        accept: 'application/json',
      },
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    }
  );

  const result = await res.json();

  return result.data;
}
