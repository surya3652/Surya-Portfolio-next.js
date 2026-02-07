import React from 'react';
import styles from './Hero.module.css';

interface HeroContentProps {
  firstName?: string;
  lastName?: string;
  badge?: string;
  description?: string;
}

export default function HeroContent({ 
  firstName = "",
  lastName = "",
  badge = "",
  description = ""
}: HeroContentProps) {
  return (
    <div className="w-full xl:w-1/2 lg:w-2/3 md:pt-[75px]">
      <div className={styles['name-first']}>
        <span className="text-outline">{firstName}</span>
        <i className="bi bi-arrow-up-right text-[40px] leading-[0] ml-[5px]"></i>
      </div>
      
      <div className="pl-[20px]">
        <div className={styles['name-last']}>
          {lastName}
        </div>
        
        <div className="relative -top-[40px] sm:-top-[20px] -right-[3px] sm:right-0">
          <span className={styles.badge}>
            {badge}
          </span>
          
          <div className={styles.description}>
            {description.split('digital experiences.')[0]}
            <span className="font-bold underline decoration-2 underline-offset-4 text-dark-gray">
              digital experiences.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
