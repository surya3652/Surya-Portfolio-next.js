import React from 'react';
import Image from 'next/image';

interface HeroImageProps {
  src?: string;
  alt?: string;
}

export default function HeroImage({ 
  src = "",
  alt = "Hero Image"
}: HeroImageProps) {
  return (
    <div className="absolute right-[100px] -bottom-[100px] w-[55%] md:w-[60%] xs:w-full md:right-[150px] xs:right-0">
      {src && (
        <Image 
          src={src} 
          alt={alt} 
          width={1030}
          height={1100}
          className="w-full"
          priority
        />
      )}
    </div>
  );
}
