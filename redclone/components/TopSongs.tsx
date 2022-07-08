import React, { useRef, useEffect, useState } from "react"
import Image from "next/image"
import "bootstrap-icons/font/bootstrap-icons.css"
import { profile } from "console"
import { useSession } from "next-auth/react"
import axios from "axios"



function TopSongs() {
  const {data: session } = useSession();
  const [tracks, setTracks] = useState([]);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
        //useEffect code here to be run on update
        () => {
          axios.get("/api/tracks").then((response) => {
             setTracks(response.data);
             console.log(response.data);
           });
         }
    }
  });

 // useEffect(() => {
 //  axios.get("/api/tracks").then((response) => {
  //    setTracks(response.data);
   //   console.log(response.data);
  //  });
 // }, []);

  return (
    <div className=" border-2 border-black w-full px-5">
    <div className="flex flex-1  justify-between">
       <h1 className="text-l md:text-xl">Top Songs</h1>
       <a href="#">More</a>
    </div>

    <div className="topsongsbar flex items-center justify-start">
      <button onClick={() => console.log(tracks)}>CLICK HERE</button>
  {/*  {tracks.items.slice(0, 3).map((item, i) => (
        <div key={item.id} className="border flex-col justify-center items-center p-1 m-1 mb-0 rounded-md shadow-sm hover:cursor-pointer">
        <img className='border rounded-md shadow-sm' src={item.album?.images[0]?.url} width="100%" />
        <h1>{item.name}</h1>
        <h1>{item.artists[0].name}</h1>
        </div>
      
  ))} */}
    </div>
    </div>

  )
}

export default TopSongs