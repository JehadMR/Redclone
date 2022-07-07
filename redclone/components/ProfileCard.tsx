import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"
import "bootstrap-icons/font/bootstrap-icons.css"
import profilepic from "./siteimages/profilepic.svg"
import { profile } from "console"
import { useSession } from "next-auth/react"
import Marquee from "react-fast-marquee";







function ProfileCard () {
  const {data: session } = useSession();
  const [player, setPlayer] = useState({});
  const [currentTrack, setCurrentTrack] = useState();

  const getPlayer = async () => {
   await axios.get(`/api/currentplay`)
    .then(res => {
      const items = res.data;
      console.log(items);
     setPlayer(items);
    })
  };



  {/*useEffect(() => {
    let interval = setInterval(() => {
     getPlayer();
    }, player.item.duration_ms);
    return () => {
      clearInterval(interval);
    };
  }, {}); */}


  return (
    <>
            <div className="overflow-hidden z-40 relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            { session? 
            <img className="absolute -left-6 w-28 h-28 rounded-full shadow-lg object-cover" src={session?.token?.picture }/> 
            : <Image className="absolute -left-6 w-28 h-28 rounded-full shadow-lg object-cover" src={profilepic} width='100%'  /> }
           {/* <Image
             className="absolute -left-6 w-4 h-4 rounded-full shadow-lg"
             objectFit="cover" src={session?.token?.picture? session.token.picture : profilepic} alt={session?.user?.name}  layout="fill" />
  */}
            <div className="min-w-0 py-5 pl-28 pr-5" >
            <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">{session?.token?.name? session.token.name : <h1>"Sign In & Start Exploring!"</h1>}</div>
            <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400"><Marquee pauseOnHover={true} gradientWidth="50" >{player?.item?.name? player.item.name : "Song Here"}</Marquee></div>
            </div>
            </div>
            

            </>

              
                 
   )
  }
export default ProfileCard

function componentDidMount() {
  throw new Error("Function not implemented.")
}

