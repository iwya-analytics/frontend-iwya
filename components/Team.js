import Image from 'next/image'
import React from 'react'

function Team() {
  return (
    <div className='container mx-auto w-full mb-32'>
        <h2 className='text-4xl font-serif font-medium text-center mb-8'>The team</h2>
        <ul className='grid grid-cols-2 md:grid-cols-4 gap-y-6 items-center justify-center lg:w-2/3 mx-auto'>
          <li className='relative flex flex-col items-center'>
            <div className='relative h-40 w-40 mb-2'>
              <Image src="/images/moha.jpg" alt='portait' layout='fill' objectFit="cover"/>
            </div>
            <h3 className='font-serif font-medium text-lg'>Mohammed A.</h3>
            <p className='text-sm'>Founder</p>
          </li>
          <li className='relative flex flex-col items-center'>
            <div className='relative h-40 w-40 mb-2'>
              <Image src="/images/timotei.jpg" alt='portait' layout='fill' objectFit="cover"/>
            </div>
            <h3 className='font-serif font-medium text-lg'>Timotei D.Z.</h3>
            <p className='text-sm'>CEO</p>
          </li>
          <li className='relative flex flex-col items-center'>
            <div className='relative h-40 w-40 mb-2'>
              <Image src="/images/meghan.jpg" alt='portait' layout='fill' objectFit="cover"/>
            </div>
            <h3 className='font-serif font-medium text-lg'>Meghan L.D.</h3>
            <p className='text-sm'>Copyrighter</p>
          </li>
          <li className='relative flex flex-col items-center'>
            <div className='relative h-40 w-40 mb-2'>
              <Image src="/images/vadim.jpg" alt='portait' layout='fill' objectFit="cover"/>
            </div>
            <h3 className='font-serif font-medium text-lg'>Resa D.</h3>
            <p className='text-sm'>Performance Marketer</p>
          </li>
        </ul>
    </div>
  )
}

export default Team