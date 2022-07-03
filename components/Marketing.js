import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import CarouselSlide from './CarouselSlide';

function Marketing() {
  return (
    <div className='flex flex-col md:flex-row space-x-4 p-4' id="digitalmarketing">
      <div className='flex-1'>
        <h2 className='text-4xl mb-2 font-serif font-medium'>Digital marketing</h2>
        <p>
          In an online era, your online presence is almost inevatably linked with your companies success. 
          We help you determin your best strategy to increase your online presence and boost your sales
        </p>
      </div>
      <div className='w-2/3'>
        <Carousel show={2.5} swiping={true} slide={2} useArrowKeys={true} className="w-full">
          <CarouselSlide
            imageUrl="/images/digitalStrategy.jpg"
            title="Digital strategy"
            text="In an online era, your online presence is almost inevatably linked with your companies success."
          />
          <CarouselSlide
            imageUrl="/images/onlineAds.jpg"
            title="Online ads"
            text="In an online era, your online presence is almost inevatably linked with your companies success."
          />          
          <CarouselSlide
            imageUrl="/images/seo.jpg"
            title="SEO"
            text="In an online era, your online presence is almost inevatably linked with your companies success."
          />
          <CarouselSlide
            imageUrl="/images/digitalStrategy.jpg"
            title="Digital strategy"
            text="In an online era, your online presence is almost inevatably linked with your companies success."
          />
        </Carousel>
      </div>
    </div>
  )
}

export default Marketing