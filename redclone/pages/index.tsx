import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  const {data: session } = useSession();
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

      
    </div>
  )
}

export default Home
