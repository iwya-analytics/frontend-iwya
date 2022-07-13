import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {

  useEffect(() => {
    const hash = window.location.hash
    window.location.hash = ''
    window.location.hash = hash
  })


  return (
    <>
      <Head>
        <title>IWYA || Digital marketing & Web development</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Brussels based digital marketing & web development agency. Scale your business through digital marketing. Create your business its entry point to the online world with a stunning website."></meta>
        <meta name="keywords" content="Web development, Digital marketing, agency brussels"></meta>
      </Head>
      <div id="top">

        <Navbar />
        <div className='container mx-auto'>
          <div className='bg-zinc-900 flex flex-col md:flex-row text-white px-12 md:px-24 py-24 md:py-36'>
            <div className='flex-1'>
              <h1 className='text-3xl md:text-5xl mb-5 font-serif font-medium'>We help you build your online presence</h1>
              <p className='text-gray-100 mb-12 md:mb-24 font-light'>In this online era, your online presence is almost inevatably linked with your companies success. At IWYA we understand this, we have been helping our clients get the most out of their digital platforms for several years now. We can help you both build and expand your online presence.</p>
              <a href="https://koalendar.com/events/Meet-with-Mohamed-Abouchama" className='px-12 py-4 bg-purple-600 text-white font-serif font-medium hover:bg-purple-700'>Let’s meet</a>
            </div>
            <div className='flex-1'>

            </div>
          </div>
        </div>
        <div className="py-12 md:py-32 container mx-auto">
          <div id="digitalmarketing" className="max-w-6xl w-full mx-auto flex-col md:flex-row flex md:space-x-12 items-center mb-12 md:mb-24 p-6 md:p-0">
            <div className="flex-1 w-full">
              <div className='relative w-full h-72 md:h-96'>
                <Image priority={true}src="/images/digitalStrategy.jpg" alt="title" layout='fill' objectFit="contain" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="font-serif text-2xl md:text-4xl font-medium mb-4">Digital marketing</h2>
              <p className="text-sm md:text-base">
                We help you get more clients and achieve more brand recognition through digital marketing. This can go from
                ads on social media platforms to improving the SEO of your website. See immediate returns on your investment with the
                budget you feel comfortable with.
              </p>
            </div>
          </div>
          <div id="webdevelopment" className="max-w-6xl w-full mx-auto flex-col-reverse md:flex-row flex md:space-x-12 items-center mb-12 md:mb-24 p-6 md:p-0">
            <div className="flex-1">
            <h2 className="font-serif text-2xl md:text-4xl font-medium mb-4">Web development</h2>
              <p className="text-sm md:text-base">
                We help you build, maintain and/or expand your website. As the entry point for the online world to your bussiness, we make sure the website reflects
                your brand and fullfils its purpose being brand identity, boosting sales or a simple way for visitors to learn more about your business.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className='relative w-full h-72 md:h-96'>
                <Image priority={true}src="/images/digitalStrategy.jpg" alt="title" layout='fill' objectFit="contain" />
              </div>
            </div>

          </div>
        </div>


        <div id="philosophy" className="bg-zinc-900 py-12 md:py-32 mb-12 md:mb-24">
          <div className="w-full max-w-2xl mx-auto text-center text-white p-6 md:p-0">
            <h2 className="font-serif text-2xl md:text-4xl font-medium mb-6 text-center text-white">Our philosophy</h2>
            <p className="text-sm md:text-base">Here at IWY Analytics, we&apos;ve worked with the best in the industry to produce multiple figures of Euros in return on ad spend. We do away with the inefficiencies & formalities that plague most agencies. Our client case studies have become myth, our waiting list is longer than your complaints with your current agency and we look for a very specific kind of client. Maybe that’s you: it would be our honour to find out. Schedule your FREE discovery call below. We run ads for clients in a a variety of sectors like real estate, restaurants and E-commerce</p>
          </div>
        </div>


        <div id="team" className="container mx-auto mb-24">
          <div className='container mx-auto w-full mb-32'>
            <h2 className='text-4xl font-serif font-medium text-center mb-8'>The team</h2>
            <ul className='grid grid-cols-2 md:grid-cols-4 gap-y-6 items-center justify-center lg:w-2/3 mx-auto'>
              <li className='relative flex flex-col items-center'>
                <div className='relative h-40 w-40 mb-2'>
                  <Image priority={true}src="/images/moha.jpg" alt='portait' layout='fill' objectFit="cover"/>
                </div>
                <h3 className='font-serif font-medium text-lg'>Mohammed A.</h3>
                <p className='text-sm'>Founder</p>
              </li>
              <li className='relative flex flex-col items-center'>
                <div className='relative h-40 w-40 mb-2'>
                  <Image priority={true}src="/images/timotei.jpg" alt='portait' layout='fill' objectFit="cover"/>
                </div>
                <h3 className='font-serif font-medium text-lg'>Timotei D.Z.</h3>
                <p className='text-sm'>CEO</p>
              </li>
              <li className='relative flex flex-col items-center'>
                <div className='relative h-40 w-40 mb-2'>
                  <Image priority={true}src="/images/meghan.jpg" alt='portait' layout='fill' objectFit="cover"/>
                </div>
                <h3 className='font-serif font-medium text-lg'>Meghan L.D.</h3>
                <p className='text-sm'>Copyrighter</p>
              </li>
              <li className='relative flex flex-col items-center'>
                <div className='relative h-40 w-40 mb-2'>
                  <Image priority={true}src="/images/vadim.jpg" alt='portait' layout='fill' objectFit="cover"/>
                </div>
                <h3 className='font-serif font-medium text-lg'>Resa D.</h3>
                <p className='text-sm'>Internship in SEA</p>
              </li>
            </ul>
        </div>
        </div>
        <div className="w-full max-w-7xl mx-auto bg-zinc-900 md:rounded-md py-10 p-12 md:p-24 text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-medium mb-6 text-center text-white">Schedule a call</h2>
          <p className="text-white mb-12 md:mb-16 text-sm md:text-base">Want to see some of our work? Book a call! We will be glad to guide you through it and even throw in a free offer streamlined to your specific situation.</p>
          <a href="https://koalendar.com/events/Meet-with-Mohamed-Abouchama" className="bg-purple-600 text-white hover:bg-purple-700 px-12 py-4 font-serif font-medium">Book</a>
        </div>
        <Footer />
      </div>
    </>
  )
}
