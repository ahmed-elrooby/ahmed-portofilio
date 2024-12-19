import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return <>
      <div className="w-[90%] m-auto pt-[40px] mt-[100px] relative">
        <div className="flex flex-wrap items-center gap-[20px] justify-center">
          <Image 
            alt="notfound" 
            src="/error.gif" 
            width={400} 
            height={400} 
            className="w-[400px] rounded-full h-[400px] animate-pulse max-w-full" 
          />
          <div className="flex flex-col items-center gap-[30px] text-[--main-color]">
            <h1 className="font-bold text-[30px]">404 Not Found</h1>
            <p>Your visited page not found. You may go home page.</p>
            <Link 
              href="/" 
              className="py-4 font-bold bg-[--main-color] text-white border border-[--main-color] rounded-lg px-11"
            >
              Back to home page
            </Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
        </div>
      </div>
  </>
}

export default NotFound