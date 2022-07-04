import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/Header'

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
        {list.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.images[0]?.url} width="100" />
          </div>
        ))}

      
    </div>
  )
}

export default Home
