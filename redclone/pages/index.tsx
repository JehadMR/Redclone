import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/Header'
import bodybackground from '../components/siteimages/bodybackground.avif'



const Home: NextPage = () => {
  const {data: session } = useSession();
  const [list, setList] = useState([]);

  const getMyPlaylists = async () => {
    const res = await fetch('/api/playlists');
    const {items} = await res.json();
    setList(items);
  };


  return (
    <div className="">
      <Head>
        <title>Red Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


    <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex-none flex justify-end">
          <Image src={bodybackground} className="w-[71.75rem] flex-none max-w-none  dark:hidden" layout="intrinsic" />
          
        </div>
        </div>
 

        <Header/>

        <p className="mt-3 text-2xl">
         Signed In As :{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
          {}
            {session?.token?.name} <br/>
            {session?.token?.email}
          </code>
        </p>


        {/* PLATLISTS THINGY  */}
        <button onClick={() => getMyPlaylists()}>Get all my playlists</button>
        <div className='group grid gap-4 grid-cols-3 grid-rows-3 mx-1 md:mx-10 xl:max-w-[500px]  xl:min-w-[250px] border rounded-md shadow-sm hover:cursor-pointer ' >
        {list.map((item, i) => (
            <div key={item.id}>
            <h1>{item.name}</h1>
            <img className='border rounded-sm shadow-sm' src={item.images[0]?.url} width="100" />
            </div>
          
        ))} </div>

      
    </div>
  )
}

export default Home
