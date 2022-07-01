import Image from 'next/image'
import React from 'react'
import logomain from './siteimages/logomain.png'
import { BeakerIcon, ChevronDoubleDownIcon, HomeIcon } from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/outline'




function header() {
  return (
    <div className='flex sticky top-0 z-50 px-4 py-3 shadow-sm '>
      <div className="headerlogo relative h-5 w-10 flex-shring-0 cursor-pointer">
          {/*  width: 5%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 25px 0px 11px 0px;
            background-color: #a1a1a154;
            border-bottom-right-radius: 30%;
            border-bottom-left-radius: 30%; */}
          <Image objectFit='contain' src={logomain} width='36.5px' height='31.5px' />
      </div>
        <div className='flex items-center mx-7 xl:min-w-[300px]'>
          <HomeIcon className='w-5 h-5' />
          <p className='flex-1'>Home</p>
          <ChevronDoubleDownIcon className='h-5 w-5'/>
        </div>
     
    </div>
  )
}

export default header