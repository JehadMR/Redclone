import React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import "bootstrap-icons/font/bootstrap-icons.css"
import profilepic from "./siteimages/profilepic.svg"
import { profile } from "console"
import { signIn, signOut, useSession } from "next-auth/react"





function Albumstracks() {
  const {data: session } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);

  const getMyPlaylists = async () => {
    const res = await fetch('/api/playlists');
    const {items} = await res.json();
    setPlaylists(items);
  };
  
  const getMyTracks = async () => {
    const res = await fetch('/api/tracks');
    const {items} = await res.json();
    console.log(items);
    setTracks(items);
  };
  

  return (
    <div className="flex-col p-10">

<div className=" max-w-sm ml-96 shrink-0 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
        </button>
        {/*- Dropdown menu */}
        <div id="dropdown" className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul className="py-1" aria-labelledby="dropdownButton">
            <li>
                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-10">
        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={session?.token?.picture? session.token.picture : profilepic} alt="Porfile Pic"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{session?.token?.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{session?.token?.email}</span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
    </div>
</div>


      {/*  PROFILE SECTION ENDS!!!!!!! HERE!  */}

      <div className="flex  justify-center p-8 space-x-12">
    <p className="mt-3 text-2xl ">
     Signed In As :{' '}
      <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
      {}
        {session?.token?.name} <br/>
        {session?.token?.email}
      </code>
    </p>
    

    <button className="h-10 my-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => getMyPlaylists()}>Get All My Playlists</button>
    <button className="h-10 my-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => getMyTracks()}>Get My Top Tracks</button>
    </div>
    <div className='flex  justify-center'>
    <div className='group grid gap-4 grid-cols-3 grid-rows-3 mx-1 md:mx-10 xl:max-w-[800px]  xl:min-w-[800px]' >
    {playlists.map((item, i) => (
        <div key={item.id} className="border flex-col justify-center items-center p-1 m-1 mb-0 rounded-md shadow-sm hover:cursor-pointer">
        <h1>{item.name}</h1>
        <img className='border rounded-sm shadow-sm' src={item.images[0]?.url} width="100%" />
        </div>
      
    ))} </div> </div>
    <div className='flex  justify-center'>
    <div className='group grid gap-4 grid-cols-3 grid-rows-3 mx-1 md:mx-10 xl:max-w-[800px]  xl:min-w-[800px]  ' >
    {tracks.map((item, i) => (
        <div key={item.id} className="border flex-col justify-center items-center p-1 m-1 mb-0 rounded-md shadow-sm hover:cursor-pointer">
        <h1>{item.name}</h1>
        <h1>{item.artists[0].name}</h1>
        <img className='border rounded-md shadow-sm' src={item.album?.images[0]?.url} width="100%" />
        </div>
      
    ))} </div> </div>
    </div>
  )
}

export default Albumstracks