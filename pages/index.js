import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import DefaultLayout from '../layout/defaultLayout';
import Hero from '@/components/Hero';
import Card from '@/components/Card';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <DefaultLayout>
      <div className=' container mx-auto p-4 lg:py-16'>
        {/* <Carousel>
          <Card />
          <Card /> */}
        <Card />
        {/* </Carousel> */}
      </div>

      <Hero>
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
          <div className=' col-span-2'>
            <h2 className=' text-lg mb-8'>Editor&apos;s Pick</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div><Card direction='vertical' /></div>
              {/* <div className=' gap-8'>
                <Card direction={'flex-row'} />
                <Card direction={'flex-row'} />
                <Card direction={'flex-row'} />
              </div> */}
            </div>
          </div>
          <div>
            <h2 className=' text-lg mb-8'>Trending</h2>
          </div>
        </div>
      </Hero>
    </DefaultLayout>
  )
}
