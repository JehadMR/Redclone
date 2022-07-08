import React, { useRef, useEffect, useState } from "react"
import Image from "next/image"
import "bootstrap-icons/font/bootstrap-icons.css"
import { profile } from "console"
import { useSession } from "next-auth/react"
import axios from "axios"



function TopSongs() {
  const {data: session } = useSession();
  const [tracks, setTracks] = useState({});
  const [loaded, setLoaded] = useState(false);

  const getTracks =   () => {
    axios.get("/api/tracks").then((response) => {
       setTracks(response.data);
       console.log(response.data);
     });
    }

  useEffect(() => {
    if (loaded == false) {
       setLoaded(true);
       getTracks();
       
    } 
  });


  return (
    <div className=" w-full px-5">
    <div className="flex flex-1 pb-4  justify-between">
       <h1 className="mt-1 text-2xl font-extrabold text-transparent uppercase tracking-tighest sm:text-3xl lg:text-4xl   bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text">Top Songs</h1>
       <a  className="mt-1 md:mt-4 text-sm font-medium cursor-pointer text-slate-800 hover:bg-gradient-to-r hover:from-green-300 hover:via-blue-500 hover:to-purple-600 hover:bg-clip-text" href="#">MORE</a>
    </div>



    <div className="flex flex-1 justify-start items-center py-4 w-5/6 mx-auto md:w-auto">
      <div className="container grid grid-cols-2 mx-auto space-x-2 space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-6">
      {tracks?.items?.slice(0, 6).map((item, i) => (
        <div  key={item} className="group flex flex-col cursor-pointer">
        <img  className='border border-none rounded-3xl group-hover:shadow-2xl' src={item.album?.images[0]?.url} width="100%" />
        <div className="flex flex-col justify-start items-center mt-3">
        <h6 className="text-sm font-medium text-slate-800	">{item.name}</h6>
        <p className=" text-xs font-medium text-slate-500">{item.artists[0].name}</p>
        </div>
        </div>
  ))} 
    </div>

    </div>


    </div>

  )
}

export default TopSongs