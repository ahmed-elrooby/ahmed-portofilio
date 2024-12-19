"use client";
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { FaAngleDoubleUp } from "react-icons/fa";

const Up = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
                <motion.div
                initial={{ scale: 0.5 }}
                transition={{
                  duration: 1.3,
                  type: "tween",
                }}
                whileInView={{
                  scale: 1,
                }}
          onClick={handleTop}
          className="flex animate-bounce fixed bottom-[100px] right-[20px] items-center justify-center w-12 h-12 font-bold text-[--main-color] z-[555555] transition-all border-[3px] border-[--main-color] rounded-full cursor-pointer hover:bg-[--main-color] hover:text-white"
        >
          <FaAngleDoubleUp size={36} />
        </motion.div>
      )}
    </>
  );
};

export default Up;
