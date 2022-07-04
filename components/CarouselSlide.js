import React from 'react';
import Image from 'next/image'

function CarouselSlide({imageUrl, title, text}) {
  return (
    <div className='bg-zinc-900 flex flex-col mr-4'>
      <div className='relative w-full h-40'>
        <Image priority={true}src={imageUrl} alt={title} layout='fill' objectFit="cover" />
      </div>
      <div className='text-white p-8 h-52'>
        <h3 className='text-xl mb-2'>{title}</h3>
        <p className='font-light text-sm'>{text}</p>
      </div>
    </div>
  )
}

export default CarouselSlide