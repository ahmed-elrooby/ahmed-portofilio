"use client"
import React from 'react';
import download from "../../Images/download.json"
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import Link from "next/link";

const Cv = () => {
  return<>
  <div className=''>
  <div className='w-[95%] mt-[50px] pt-[100px] m-auto'>
  <motion.div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 1.3,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}  
  className='flex flex-col gap-[20px]'>
      <Link
  href="/cv.pdf"
  className="relative flex items-center gap-2 px-2  mx-auto my-4 text-center text-[20px] text-black  dark:text-gray-300 font-bold transition-all rounded-lg w-fit border-2 border-[--main-color] hover:after:w-full after:absolute after:top-0 after:left-0 after:h-full after:bg-[--main-color] after:w-0 after:transition-all after:z-0 hover:text-white"
  download
>
  <span className="relative z-10 transition-opacity duration-300 opacity-100 hover:opacity-100">Download CV</span>
  <Lottie
    className="relative w-[50px] h-[50px] z-10"
    loop={true}
    animationData={download}
  />
</Link>
<div className="p-4 rounded-lg shadow-lg">
  <embed 
    src="/cv.pdf#toolbar=0" 
    className="block mx-auto w-full h-[700px]" 
    type="application/pdf" 
  />
</div>
    </motion.div>
  </div>
  </div>


  </>

  
};

export default Cv;
