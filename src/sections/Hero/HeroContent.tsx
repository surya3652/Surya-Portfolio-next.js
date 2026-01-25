import React from 'react';

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
      <div className="text-[150px] sm:text-[120px] leading-[1.1] text-white font-bold tracking-[-5px]">
        <span className="text-outline">{firstName}</span>
        <i className="bi bi-arrow-up-right text-[40px] leading-[0] ml-[5px]"></i>
      </div>
      
      <div className="pl-[20px]">
        <div className="text-[150px] sm:text-[120px] text-white font-bold tracking-[-5px]">
          {lastName}
        </div>
        
        <div className="relative -top-[40px] sm:-top-[20px] -right-[3px] sm:right-0">
          <span className="text-white text-[13px] leading-[36px] font-medium bg-black px-[20px] uppercase inline-block tracking-[1px] mb-[25px] ml-[5px]">
            {badge}
          </span>
          
          <div className="text-[19px] leading-[26px] text-black font-medium w-[65%] md:w-[70%] sm:w-full">
            {description.split('digital experiences.')[0]}
            <span className="font-bold underline decoration-2 underline-offset-4 text-black">
              digital experiences.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
