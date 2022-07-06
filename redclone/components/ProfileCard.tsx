import React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import "bootstrap-icons/font/bootstrap-icons.css"
import profilepic from "./siteimages/profilepic.svg"
import { profile } from "console"
import { useSession } from "next-auth/react"
import Marquee from "react-fast-marquee";






function ProfileCard () {
  const {data: session } = useSession();
 


  return (
    <>
            <div className="overflow-hidden z-50 relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
            { session? 
            <img className="absolute -left-6 w-28 h-28 rounded-full shadow-lg object-cover" src={session?.token?.picture }/> 
            : <Image className="absolute -left-6 w-28 h-28 rounded-full shadow-lg object-cover" src={profilepic}  /> }
           {/* <Image
             className="absolute -left-6 w-4 h-4 rounded-full shadow-lg"
             objectFit="cover" src={session?.token?.picture? session.token.picture : profilepic} alt={session?.user?.name}  layout="fill" />
  */}
            <div className="min-w-0 py-5 pl-28 pr-5">
            <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">{session?.token?.name? session.token.name : "Sign In & Start Exploring!"}</div>
            <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400"><Marquee pauseOnHover={true} gradientWidth="50" >Blow Spring Breeze - Kim Jung Mi</Marquee></div>
            </div>
            </div>
            </>
      
   )
  }
export default ProfileCard

