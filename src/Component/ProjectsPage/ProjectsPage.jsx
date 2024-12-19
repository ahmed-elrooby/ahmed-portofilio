"use client";
import { IoIosLink } from "react-icons/io";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Tilt from 'react-parallax-tilt';
import { projects } from "./projectData";


const ProjectsPage = () => {
  
  return (
    <div className="h-full mt-[100px] pt-[50px] m-auto">

      <div className="flex mb-6 w-full mx-auto md:w-[90%] flex-col justify-center text-center leading-[1.9] items-center  gap-3">
        <h1 className="text-[--main-color] text-[20px] md:text-[30px] font-bold capitalize">
        Our Projects Showcase
        </h1>
        <p className="text-gray-600  dark:text-gray-300">Explore our collection of projects that highlight innovation, creativity, and dedication. Each project reflects our passion for delivering exceptional results and meeting our clients' expectations.</p>
      </div>
      <div>
        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]} 
          className="mySwiper"
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
{projects.map((project) => <SwiperSlide key={project.id}>
  <div > {/* التأكد من ف uniqueness id */}
   
      <Tilt>
        <motion.div
          initial={{ scale: 0.5 }}
          transition={{
            duration: 1.3,
            type: "tween",
          }}
          whileInView={{
            scale: 1,
          }}
          className="relative border border-[--main-color] p-1 cursor-pointer w-[350px] group rounded-md h-[450px]"
        >
          <div className="absolute my-2 rounded-md bottom-0 left-0 gap-[30px] transition-all pl-[10px] group-hover:scale-[0.9] scale-0 flex flex-col items-center justify-center text-white bg-[#3264afd6] w-full h-full overflow-hidden">
            <h1 className="font-bold text-[25px] capitalize">
              {project.title}
            </h1>
            <p className="leading-[2] capitalize text-center text-sm px-2">
              {project.description}
            </p>
            <div className="flex items-center justify-center gap-[50px]">
              {project?.links.map((ele, linkIdx) => (
                <div key={linkIdx}> {/* دمج id المشروع مع فهرس الروابط */}
                  {ele.demo && (
                    <Link href={ele.demo}>
                      <IoIosLink
                        size={28}
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                      />
                    </Link>
                  )}
                  {ele.github && (
                    <Link href={ele.github}>
                      <FaGithub
                        className="cursor-pointer transition-all opacity-[0.8] text-white hover:text-[--main-color] hover:opacity-[1]"
                        size={28}
                      />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <Image
            src={project.img}
            alt={project.title}
            className="w-full h-full max-w-full"
            priority
          />
        </motion.div>
      </Tilt>
  </div>
  </SwiperSlide>

)}


        </Swiper>
      </div>
    </div>
  );
};

export default ProjectsPage;
