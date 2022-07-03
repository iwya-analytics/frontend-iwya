import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Team from "../components/Team";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="py-12 md:py-32 container mx-auto">
        <div className="max-w-6xl w-full mx-auto flex-col md:flex-row flex md:space-x-12 items-center mb-12 md:mb-24 p-6 md:p-0">
          <div className="flex-1 w-full">
            <div className='relative w-full h-72 md:h-96'>
              <Image src="/images/digitalStrategy.jpg" alt="title" layout='fill' objectFit="contain" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-serif text-2xl md:text-4xl font-medium mb-4">Digital marketing</h2>
            <p className="text-sm md:text-base">
              In an online era, your online presence is almost inevatably linked with your companies success.
              We help you determin your best strategy to increase your online presence and boost your sales*
            </p>
          </div>
        </div>
        <div className="max-w-6xl w-full mx-auto flex-col-reverse md:flex-row flex md:space-x-12 items-center mb-12 md:mb-24 p-6 md:p-0">
          <div className="flex-1">
          <h2 className="font-serif text-2xl md:text-4xl font-medium mb-4">Web development</h2>
            <p className="text-sm md:text-base">
              In an online era, your online presence is almost inevatably linked with your companies success.
              We help you determin your best strategy to increase your online presence and boost your sales*
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className='relative w-full h-72 md:h-96'>
              <Image src="/images/digitalStrategy.jpg" alt="title" layout='fill' objectFit="contain" />
            </div>
          </div>

        </div>
      </div>
      <div className="bg-zinc-900 py-12 md:py-32 mb-12 md:mb-24">
        <div className="w-full max-w-2xl mx-auto text-center text-white p-6 md:p-0">
          <h2 className="font-serif text-2xl md:text-4xl font-medium mb-6 text-center text-white">Our philosophy</h2>
          <p className="text-sm md:text-base">Here at IWY Analytics, we&apos;ve worked with the best in the industry to produce multiple figures of Euros in return on ad spend. We do away with the inefficiencies & formalities that plague most agencies. Our client case studies have become myth, our waiting list is longer than your complaints with your current agency and we look for a very specific kind of client. Maybe that’s you: it would be our honour to find out. Schedule your FREE discovery call below. We run ads for clients in a a variety of sectors like real estate, restaurants and E-commerce</p>
        </div>
      </div>
      <div className="container mx-auto mb-24">
        <Team />
      </div>
      <div className="w-full max-w-7xl mx-auto bg-zinc-900 md:rounded-md py-10 p-12 md:p-24 text-center">
        <h2 className="font-serif text-2xl md:text-4xl font-medium mb-6 text-center text-white">Schedule a call</h2>
        <p className="text-white mb-12 md:mb-16 text-sm md:text-base">Want to see some of our work? Book a call! We will be glad to guide you through it and even throw in a free offer streamlined to your specific situation.</p>
        <a href="https://koalendar.com/events/Meet-with-Mohamed-Abouchama" className="bg-white px-12 py-4 font-serif font-medium text-black">Book</a>
      </div>
      <Footer />
    </div>
  )
}
