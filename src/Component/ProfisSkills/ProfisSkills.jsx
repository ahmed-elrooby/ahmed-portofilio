import Image from "next/image";
import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt,FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { motion } from 'framer-motion';

const ProfisSkills = () => {
  return <>
<div className=" mt-[50px] text-black dark:text-white m-auto"> 
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
  
  className="flex flex-col items-center mt-[10px] gap-7">
<h1 className="text-[20px] md:text-[40px] text-[--main-color] font-bold">Professional <span className="text-[--main-color]">Proficiencies</span></h1>
<div className="flex gap-[30px] items-center justify-center flex-wrap">
<div className="border w-full  border-[--main-color] transition-all hover:bg-[--main-color] group flex items-center justify-center md:w-[200px] h-[200px] rounded-lg">
<Image alt="c++" src={require("../../Images/C++.png")}  className="w-[300px] max-w-full" />

</div>
<div className="border w-full  border-[--main-color] transition-all hover:bg-[--main-color] group flex items-center justify-center md:w-[200px] h-[200px] rounded-lg">
<FaHtml5 size={150} className="text-[#E34F26] transition-all group-hover:text-[#FF0000]" />

</div>
<div className="border w-full  border-[--main-color] transition-all hover:bg-[--main-color] group flex items-center justify-center md:w-[200px] h-[200px] rounded-lg">
<FaCss3Alt className="text-[#1572b6] group-hover:text-[#264de4]" size={150} />

</div>
<div className="border w-full  border-[--main-color] transition-all hover:bg-[--main-color] group flex items-center justify-center md:w-[200px] h-[200px] rounded-lg">
<FaJsSquare className="text-[#F7DF1E] group-hover:text-[#fff200]" size={150} />

</div>
<div className="border w-full  border-[--main-color] transition-all hover:bg-[--main-color] group flex items-center justify-center md:w-[200px] h-[200px] rounded-lg">
<FaBootstrap className="text-[#0d6efd] group-hover:text-[#004085]" size={150} />

</div>
<div className="border w-full  border-[--main-color] transition-all hover:bg-[--main-color] group flex items-center justify-center md:w-[200px] h-[200px] rounded-lg">
<FaReact className="text-[#61DBFB] group-hover:text-[#004085]" size={150} />

</div>

<div className="border w-full  border-[--main-color] transition-all hover:bg-[--main-color] group flex items-center justify-center md:w-[200px] h-[200px] rounded-lg">
<SiNextdotjs className="text-white group-hover:text-[#000000]" size={150} />

</div>


<div className="border w-full  border-[--main-color] transition-all hover:bg-[--main-color] group flex items-center justify-center md:w-[200px] h-[200px] rounded-lg">
<SiTailwindcss className="text-[#38BDF8] group-hover:text-blue-500" size={150} />

</div>


<div className="border w-full  border-[--main-color] transition-all hover:bg-[--main-color] group flex items-center justify-center md:w-[200px] h-[200px] rounded-lg">
<FaGitAlt className="text-[#F05032] group-hover:text-[#fff]" size={150} />

</div>


  </div>
  </motion.div>
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
 className="flex flex-col items-center justify-center mt-5">
  <h1 className="md:text-[40px] text-[25px] mb-5 font-bold">My Essential <span className="text-[--main-color] ">Tools</span></h1>
  <div className="flex gap-[30px] items-center justify-center flex-wrap">
  <div className="border w-full  border-[--main-color] transition-all hover:bg-[--main-color] group flex items-center justify-center md:w-[200px] h-[200px] rounded-lg">
  <VscVscode className="text-[#007ACC] group-hover:text-[#004E8C]" size={150} />
    </div>

    <div className="border w-full  border-[--main-color] transition-all hover:bg-[--main-color] group flex items-center justify-center md:w-[200px] h-[200px] rounded-lg">
    <SiPostman className="text-[#FF6F00] group-hover:text-[#BF5C00]" size={150} />
    </div>
  </div>
 </motion.div>
</div>

  </>
};

export default ProfisSkills;
