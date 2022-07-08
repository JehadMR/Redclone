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


  return (

    <div className="flex flex-col w flex-1 justify-center items-center py-4 w-5/6 mx-auto md:w-auto bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 border border-none rounded-3xl">
      <h1 className="mt-1 text-2xl font-extrabold text-transparent uppercase tracking-tighest sm:text-3xl lg:text-4xl  bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 bg-clip-text">Now Playing</h1>
      <Marquee gradient={false} pauseOnHover={true}>
      <p className="mt-1 text-sm font-extrabold text-transparent uppercase tracking-tighest bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-clip-text">  Running up that hill, Kate Bush</p>
      </Marquee>
    </div>

              
                 
   )
  }
export default ProfileCard

function componentDidMount() {
  throw new Error("Function not implemented.")
}

