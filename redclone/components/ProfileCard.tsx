import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import handler from "../pages/api/currentplay"
import Image from "next/image"
import "bootstrap-icons/font/bootstrap-icons.css"
import profilepic from "./siteimages/profilepic.svg"
import { profile } from "console"
import { useSession } from "next-auth/react"
import Marquee from "react-fast-marquee";
import logo from "./siteimages/logomain.png"


function ProfileCard () {
  const {data: session } = useSession();

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});


  useEffect(() => {
    if (loading == true) {
    axios.get("/api/currentplay").then((results) => {
      console.log(results)
      console.log(session)
      setResult(results);
      setLoading(false);
    });
  }
    }
  );

 const beforeDecimal = (num) => {
    const beforeDecimalStr = num.toString().split('.')[0];
    return beforeDecimalStr;
  }
  
  const getTimestamp = (ms_num) => {
    let seconds = beforeDecimal(ms_num / 1000);
    let minutes = beforeDecimal(ms_num / 60000);

    return (`${minutes}:${seconds[0]}${seconds[1]? seconds[1] : 0}`)

  }




  return (

      <div className="flex flex-col justify-center px-5">
  <div className="max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="relative h-[40vw] md:h-[25vw]">
        {/*  object cover img normal */}
        <div className="h-auto">
        <Image src={result?.data?.item?.album?.images? result.data.item.album.images[0].url : "https://images.unsplash.com/photo-1595491542937-3de00ac7e08a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"} 
          layout="fill" objectFit="cover" className="relative" />
       </div>
      <div className="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop backdrop-blur-5 text-white">
        <h3 className="font-bold">{result?.data?.item?.name? result.data.item.name : "Play A Song" }</h3>
        <span className="opacity-70">{result?.data?.item?.album?.name? result.data.item.album.name : "sign in" } - {result?.data?.item?.artists? result.data.item.artists[0].name : ""}</span>
      </div>
    </div>
    <div>
      <div className="relative h-1 bg-gray-200">
        <div className="absolute h-full w-1/2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-end">
          <div className="rounded-full w-3 h-3 bg-white shadow"></div>
        </div>
      </div>
    </div>
    <div className="flex justify-between text-xs font-semibold text-gray-500 px-4 py-2">
      <div>
          {getTimestamp(result?.data?.progress_ms? result.data.progress_ms : 0 )}
      </div>
      <div className="flex space-x-3 p-2">
        <button className="focus:outline-none">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
        </button>
        <button className="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-gray-100 focus:outline-none">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </button>
        <button className="focus:outline-none">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
        </button>
      </div>
      <div>
        {getTimestamp(result?.data?.item?.duration_ms? result.data.item.duration_ms : 0) }
      </div>
    </div>
    <ul className="text-xs sm:text-base divide-y border-t cursor-default">
      <li className="flex items-center space-x-3 hover:bg-gray-100">
        <button className="p-3 hover:bg-green-500 group focus:outline-none">
          <svg className="w-4 h-4 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </button>
        <div className="flex-1">
          Artist - Title
        </div>
        <div className="text-xs text-gray-400">
          2:58
        </div>
        <button className="focus:outline-none pr-4 group">
          <svg className="w-4 h-4 group-hover:text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
        </button>
      </li>
      <li className="flex items-center space-x-3 hover:bg-gray-100">
        <button className="p-3 hover:bg-green-500 group focus:outline-none">
          <svg className="w-4 h-4 group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </button>
        <div className="flex-1">
          Artist - Title
        </div>
        <div className="text-xs text-gray-400">
          2:58
        </div>
        <button className="focus:outline-none pr-4 group">
          <svg className="w-4 h-4 group-hover:text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
        </button>
      </li>
    </ul>
  </div>
</div>   
                 
   )
  }
export default ProfileCard

function componentDidMount() {
  throw new Error("Function not implemented.")
}

