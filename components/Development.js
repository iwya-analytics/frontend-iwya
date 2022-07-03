import React from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import CarouselSlide from './CarouselSlide';

function Development() {
  return (
    <div id="webdevelopment" className='flex flex-col space-x-4 p-4'>
      <div className='flex-1'>
        <h2 className='text-3xl mb-2 font-serif font-medium'>Web development</h2>
        <p className='w-1/2'>
          In an online era, your online presence is almost inevatably linked with your companies success. 
          We help you determin your best strategy to increase your online presence and boost your sales
        </p>
      </div>
      <div className=''>
        <Carousel show={5} swiping={true} slide={2} useArrowKeys={true} className="w-full">
          <CarouselSlide
            imageUrl="/images/digitalStrategy.jpg"
            title="Design"
            text="In an online era, your online presence is almost inevatably linked with your companies success."
          />
          <CarouselSlide
            imageUrl="/images/onlineAds.jpg"
            title="wordpress"
            text="In an online era, your online presence is almost inevatably linked with your companies success."
          />          
          <CarouselSlide
            imageUrl="/images/seo.jpg"
            title="SEO"
            text="In an online era, your online presence is almost inevatably linked with your companies success."
          />
          <CarouselSlide
            imageUrl="/images/digitalStrategy.jpg"
            title="Systems integration"
            text="In an online era, your online presence is almost inevatably linked with your companies success."
          />
          <CarouselSlide
            imageUrl="/images/digitalStrategy.jpg"
            title="e-commerce"
            text="In an online era, your online presence is almost inevatably linked with your companies success."
          />
        </Carousel>
      </div>
    </div>
  )
}

export default Development