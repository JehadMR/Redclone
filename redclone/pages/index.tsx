import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Albumstracks from '../components/Albumstracks'
import Header from '../components/Header'
import ProfileCard from '../components/ProfileCard'
import bodybackground from '../components/siteimages/bodybackground.avif'
import TopSongs from '../components/TopSongs'



const Home: NextPage = () => {
  const {data: session } = useSession();



  return (
    <>
    
      <Head>
        <title>Red Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex justify-end">
          <Image src={bodybackground} className="w-[71.75rem]  flex-none max-w-none" layout="intrinsic" />
        </div>
        </div>
        {/*Background Color Image ^^^ */}
        <div className='grid grid-cols-2 gap-1 my-7 mx-5'>
       <div className="col-start-1 col-end-6"><TopSongs/></div>
       <div className='col-start-7 col-end-11'> <ProfileCard/> </div>
        </div>

       

    
    </>
  )
}

export default Home
