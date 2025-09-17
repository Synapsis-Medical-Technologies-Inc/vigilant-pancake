'use client';

import React from 'react';
import Image from 'next/image';

interface CardProps {
  icon: string;
  title: string;
  description?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-5 transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)] ${className}`}>
      <div className="flex flex-col items-center">
        <Image 
          src={icon} 
          alt={title} 
          width={140} 
          height={140} 
          className="mb-4"
        />
        <h3 className="text-white text-base font-medium text-center">{title}</h3>
        {description && (
          <p className="text-[#ffffff99] text-sm text-center mt-2">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Card;