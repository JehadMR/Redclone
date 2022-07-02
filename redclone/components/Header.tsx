import Image from "next/image"
import React from "react"
import logomain from "./siteimages/logomain.png"
import 'bootstrap-icons/font/bootstrap-icons.css'





function header() {
  return (
    <div className="flex sticky top-0 z-50 px-8 py-4  ">
        <div className="headerlogo relative h-10 w-20  flex-shrink-0 cursor-pointer">
        <Image objectFit="contain" src={logomain} layout="fill" />
        </div>


     
       <div className="group flex items-center mx-1 md:mx-10  px-3 xl:min-w-[250px] border border-black rounded-md shadow-sm hover:cursor-pointer ">
          <i className="bi bi-textarea-resize w-5 h-5 "></i>
          <p className="flex-1 hidden ml-1 lg:inline text-sm font-medium 	">Spaces</p>
          <i className="bi bi-arrow-down-square-fill group-hover:text-blue-700  pl-3 "></i>
      </div>
      {/* NAVBAR STARTS HERE! */}
      
      <nav className="container mx-auto flex flex-wrap items-center justify-between px-5">
          <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a href="#" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded" aria-current="page">home</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">news</a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">contact</a>
              </li>
            </ul>
          </div>
       </nav>
        {/* NAVBAR ENDS HERE! */}

      <form>
          <i className="bi bi-search h-6 w-6 text-gray-400"></i>
      </form>



    </div>
  )
}

export default header