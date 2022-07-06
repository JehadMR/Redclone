import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Albumstracks from '../components/Albumstracks'
import Header from '../components/Header'
import bodybackground from '../components/siteimages/bodybackground.avif'



const Home: NextPage = () => {
  const {data: session } = useSession();



  return (
    <>
       <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex justify-end">
          <Image src={bodybackground} className="w-[71.75rem]  flex-none max-w-none" layout="intrinsic" />
          
        </div>
        </div>
    <div className="">
      <Head>
        <title>Red Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header/>
        <Albumstracks/>

    </div>
    </>
  )
}

export default Home
