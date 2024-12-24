"use client"
import React from 'react'
import loadingAnimation from "../../Images/loadinganimation.json"
import Lottie from 'react-lottie-player'

const LoadingPage = () => {
  return <>
  <div className='h-screen w-full bg-[#0B3D88] flex items-center justify-center text-center relative z-[59933355555]'>
<Lottie animationData={loadingAnimation}
  play
  style={{ width: 150, height: 150 }}
className="md:w-[400px] w-[200px] h-[200px] md:h-[400px]" loop={true}/>

  </div>
  </>
}

export default LoadingPage