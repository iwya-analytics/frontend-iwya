import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className=' p-4'>
      <div className='flex items-center justify-between container mx-auto'>
        <div className='relative h-12 w-32'>
          <Image priority={true}src="/images/iwya-logo.svg" alt="iwya-logo" layout='fill' objectFit="contain" />
        </div>
        <ul className='md:flex items-center space-x-6 hidden'>
          <li><Link href="#digitalmarketing" className="text-base leading-6 text-gray-500 hover:text-gray-900"><a>Digital marketing</a></Link></li>
          <li><Link href="#webdevelopment" clLinkssNLinkme="text-base leading-6 text-gray-500 hover:text-gray-900">Web development</Link></li>
          <li><Link href="#philosophy" clLinkssNLinkme="text-base leading-6 text-gray-500 hover:text-gray-900">Philosophy</Link></li>
          <li><Link href="#team" clLinkssNLinkme="text-base leading-6 text-gray-500 hover:text-gray-900">Team</Link></li>
          <li><a href="https://koalendar.com/events/Meet-with-Mohamed-Abouchama" className="bg-zinc-900 hover:bg-zinc-800 px-6 py-2 text-sm font-medium text-white">Book a call</a></li>
        </ul>
        <a href="https://koalendar.com/events/Meet-with-Mohamed-Abouchama" className="bg-purple-600 hover:bg-purple-700 px-6 py-2 text-sm font-medium text-white block md:hidden">Book a call</a>
      </div>
    </div>
  )
}

export default Navbar