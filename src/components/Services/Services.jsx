import React from 'react'
import arrow from "../../Images/arrow.json"
import { FaLaptopCode,FaCode,FaRegPlayCircle } from "react-icons/fa";
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';

const Services = () => {
  return <>
  <div className='m-auto mt-[50px]'>
  <span className=" block w-[200px] m-auto h-[3px] bg-[--main-color]"></span>

    <motion.div
      initial={{  scale:0.7,opacity:0.5 }}
      transition={{
          duration: 1.3,
          type: "tween",
      }}
      whileInView={{
          scale: 1,
          opacity:1
      }}
    
    className="flex flex-col items-center justify-center gap-[40px]">
<h1 className='font-bold text-[25px] md:text-[35px] justify-center text-[--main-color] flex text-center items-center '>What I Can Do For You <Lottie className='w-[100px] h-[100px]' animationData={arrow} loop={true}/></h1>
<div className='flex items-center flex-wrap justify-center gap-[15px]'>
<div className="flex rounded-lg hover:shadow-lg transition-all group hover:bg-[--main-color]  flex-col justify-center text-center items-center h-[300px] w-[350px] gap-1 border-2 border-[--main-color]">
    <h1 className='font-bold text-[--main-color] text-[30px] group-hover:text-white'>web development</h1>
<FaCode className="text-[--main-color] group-hover:text-white transition-all" size={150}/>
</div>
<div className="flex  rounded-lg hover:shadow-lgtransition-all group hover:bg-[--main-color]  flex-col justify-center text-center items-center h-[300px] w-[350px] gap-1 border-2 border-[--main-color]">
    <h1 className='font-bold text-[--main-color] text-[30px] group-hover:text-white'>Responsive web design</h1>
<FaLaptopCode className="text-[--main-color] group-hover:text-white transition-all" size={150}/>
</div>

<div className="flex rounded-lg hover:shadow-lg transition-all group hover:bg-[--main-color]  flex-col justify-center text-center items-center h-[300px] w-[350px] gap-1 border-2 border-[--main-color]">
    <h1 className='font-bold text-[--main-color] text-[30px] group-hover:text-white'>Animation and interactive websites</h1>
<FaRegPlayCircle className="text-[--main-color] group-hover:text-white transition-all" size={150}/>
</div>




</div>
    </motion.div>
  </div>
  </>
}

export default Services