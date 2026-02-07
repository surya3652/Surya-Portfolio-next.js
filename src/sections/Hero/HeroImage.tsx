import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

interface HeroImageProps {
  src?: string;
  alt?: string;
}

export default function HeroImage({ 
  src = "",
  alt = "Hero Image"
}: HeroImageProps) {
  return (
    <div className={styles['image-wrapper']}>
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
