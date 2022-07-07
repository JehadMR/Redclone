import React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import "bootstrap-icons/font/bootstrap-icons.css"
import { profile } from "console"
import { useSession } from "next-auth/react"



function TopSongs() {
  const {data: session } = useSession();

  return (
    <div className="flex flex-1 border-2 border-black">
      <h1>HOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOLA</h1>
    </div>

  )
}

export default TopSongs