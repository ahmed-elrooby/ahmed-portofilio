"use client";
import React from "react";
import Lottie from "lottie-react";
import contact from "../../Images/contact.json";

import { FaFilePdf, FaRegUser } from "react-icons/fa";
import { IoIosHome, IoMdMail } from "react-icons/io";
import { HiMiniPresentationChartLine } from "react-icons/hi2";import Link from "next/link";
import { useForm,ValidationError } from "@formspree/react";
import successAnimation from "../../Images/loading.json"
import { motion } from 'framer-motion';

const ContactPage = () => {

  const [state, handleSubmit] = useForm("xbjngqrb");



  return (
    <>
    <div className="relative  w-[95%] mx-auto mt-[80px] md:mt-[120px] md:mb-[50px] mb-[40px]">
    <div className="text-center p-4   mb-6">
  <h1 className="text-2xl font-bold text-[--main-color] mb-2">
    Get in Touch with Us!
  </h1>
  <p className="text-gray-600 leading-[1.7] dark:text-gray-300">
    We're here to help. If you have any questions or suggestions, feel free to reach out. 
    Our team is ready to respond to your inquiries as quickly as possible.
  </p>
</div>
      <div className="fixed z-[26622] border-2 border-[--main-color]  rounded-full px-1  md:px-3 h-[250px] flex flex-col gap-[5px] md:gap-[10px]  items-center justify-center left-1  md:left-4 md:top-[40%] top-[30%] text-[--main-color]">
      <Link className="transition-all hover:text-gray-500 dark:hover:text-white " href="/"><IoIosHome size={36}/></Link>
      <Link className="transition-all hover:text-gray-500 dark:hover:text-white  " href="/About"> <FaRegUser size={36}/></Link>
      <Link className="transition-all hover:text-gray-500 dark:hover:text-white  " href="/Contact"> <IoMdMail size={36}/></Link>
      <Link className="transition-all hover:text-gray-500 dark:hover:text-white  " href="/Projects"> <HiMiniPresentationChartLine size={36}/></Link>
      <Link className="transition-all hover:text-gray-500 dark:hover:text-white  " href="/Resume"> <FaFilePdf size={36}/></Link>
        
       
      
      
           </div>
    <div>
        <div className="flex flex-wrap items-center justify-center gap-[20px] md:gap-[30px] ">
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
            <Lottie
              animationData={contact}
              loop={true}
              className="max-w-full w-[250px] h-[250px]  md:w-[300px] md:h-[300px]  "
            />
          </motion.div>
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
            <form
            onSubmit={handleSubmit}
              action=""
              className="flex flex-col gap-3 p-3  rounded-lg md:gap-5 md:p-5 "
            >
              <input
               required
                className="outline-[--main-color] bg-transparent text-[--main-color] font-bold md:py-3 py-2 px-3 md:px-5 rounded-lg border-2 border-[--main-color]"
                type="email"
                name="email"
                placeholder="Enter your Email"
                id="email"
              />
              <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              <textarea
                              className="outline-[--main-color] bg-transparent w-[300px] md:w-[400px] h-[300px] text-[--main-color] font-bold md:py-3 py-2 md:px-5 px-3 rounded-lg border-2 border-[--main-color]"

                name=""
                id=""
                placeholder="write your message "
             
              ></textarea>
              <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              <button type="submit" disabled={state.submitting} className="py-1 md:px-2 px-1 text-[18px] md:text-[22px] border-1 border-[--main-color] text-white cursor-pointer transition-all hover:bg-[#0B3D88]  rounded-full bg-[--main-color] font-bold" >                {state.submitting ? "submitting" : "submit"}
              </button>
            
            </form>

          </motion.div>
          {state.succeeded && (
            <motion.div
            initial={{ scale: 0.5 }}
            transition={{
              duration: 1.3,
              type: "tween",
            }}
            whileInView={{
              scale: 1,
            }}
              className="flex px-4 rounded-full  text-[--main-color] text-center m-auto  font-bold border border-[--main-color] justify-center gap-2 mt-4 items-center"
            >
              <Lottie
                loop={false}
                style={{ height: "35px" }}
                animationData={successAnimation}
              />
              <div className="p-2 text-center text-[24px] capitalize  ">
                your message has been sent <span>&#9996;&#65039;</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>

    </>
  );
};

export default ContactPage;
