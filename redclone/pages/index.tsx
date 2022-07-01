import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Red Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header/>

        <p className="mt-3 text-2xl">
         Roads always have a begining{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            innit?!!?
          </code>
        </p>

      
    </div>
  )
}

export default Home
