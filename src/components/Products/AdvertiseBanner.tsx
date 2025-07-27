'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

const AdvertiseBanner = ({ banner }: { banner: string | undefined }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCloseBanner = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('banner', 'false');
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="relative">
      {banner === 'false' || (
        <>
          <Image
            src="https://cdn.10minuteschool.com/images/dasktop_banner_1753270611489.png?w=1800?w=1800&h=150"
            alt="KIDS English Course Banner"
            width={1800}
            height={150}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleCloseBanner}
            className="absolute top-1 right-2 text-white hover:text-red-500 text-lg font-semibold"
          >
            ✕
          </button>
        </>
      )}
    </div>
  );
};

export default AdvertiseBanner;
