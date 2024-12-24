"use client";
import { Typewriter } from "react-simple-typewriter";
import welcome from "../../Images/welcom.json";
import Introduce from '../Introduce/Introduce';
import { motion } from 'framer-motion';
import Image from "next/image";
import Lottie from "react-lottie-player";

const Home = () => {
  return (
    <>
      <div className="relative z-10 m-auto w-[90%] pt-[100px] mt-[50px]">
      <div
               
          className="grid items-center justify-between grid-cols-1 gap-2 text-center lg:grid-cols-2"
        >
          <div className="relative after:content-[''] after:animate-pulse transition-all after:absolute after:w-[400px] after:h-[400px] after:rounded-full after:top-[-13px] after:left-[-301px] after:bg-[#5dbcfc5f] flex items-start flex-col">
            <motion.h1
             initial={{ scale: 0.5 }}
             transition={{
               duration: 1.3,
               type: "tween",
             }}
             whileInView={{
               scale: 1,
             }}
            className="mb-4 text-[30px] md:text-[50px] flex gap-1 items-center font-extrabold capitalize text-[#5dbcfc]">
              Hi everyone! 
              <Lottie
                className="max-w-full w-[60px] h-[60px] md:w-[100px] md:h-[100px]"
                loop={true}
                animationData={welcome}
              />
            </motion.h1>
            <div className="md:text-[45px] text-[25px] font-bold relative after:animate-pulse after:absolute dark:text-white text-gray-600 after:w-[250px] after:h-[250px] after:bg-[#5dbcfc30] after:content-[''] after:bottom-[150px] after:rounded-full after:right-[-36px]">
           <motion.div
            initial={{ scale: 0.5 }}
            transition={{
              duration: 1.3,
              type: "tween",
            }}
            whileInView={{
              scale: 1,
            }}
           
           >
           I'm Ahmed El Rooby
              <h1 className="mt-[30px] text-[25px] md:text-[45px] text-[#5dbcfc] font-bold">
                <Typewriter
                  words={[
                    "Front-End Developer",
                    "UI/UX Developer",
                    "React.js Developer",
                    "Next.js Developer",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
           </motion.div>
            </div>
          </div>
        
         <div className="relative after:content-[''] after:absolute after:animate-pulse after:w-[150px] after:h-[150px] after:rounded-full after:bg-[#5dbcfc30] after:top-[-80px] after:right-[-10px]">
           <motion.div
            initial={{ scale: 0.5 }}
            transition={{
              duration: 1.3,
              type: "tween",
            }}
            whileInView={{
              scale: 1,
            }}
           >
          <Image src={require("../../Images/home.gif")} width={400}/>
           </motion.div>
          </div>
        </div>
        <Introduce />
      </div>
    </>
  );
};

export default Home;
