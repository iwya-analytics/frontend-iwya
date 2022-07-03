import React from 'react'

function Hero() {
  return (
    <div className='container mx-auto'>
      <div className='bg-zinc-900 flex flex-col md:flex-row text-white px-12 md:px-24 py-24 md:py-36'>
        <div className='flex-1'>
          <h1 className='text-3xl md:text-5xl mb-5 font-serif font-medium'>We help you build your online presence</h1>
          <p className='text-gray-100 mb-12 md:mb-24 font-light'>In an online era, your online presence is almost inevatably linked with your companies success. We can help you both build or expand your online presence.</p>
          <button className='px-12 py-4 bg-white text-black font-serif font-medium'>Let’s meet</button>
        </div>
        <div className='flex-1'>

        </div>
      </div>
    </div>
  )
}

export default Hero