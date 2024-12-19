"use client"
import Lottie from 'lottie-react'
import React from 'react'
import loadingAnimation from "../../Images/loadinganimation.json"

const LoadingPage = () => {
  return <>
  <div className='h-screen w-full bg-[#0B3D88] flex items-center justify-center text-center relative z-[59933355555]'>
<Lottie animationData={loadingAnimation} className="md:w-[400px] w-[200px] h-[200px] md:h-[400px]" loop={true}/>

  </div>
  </>
}

export default LoadingPage