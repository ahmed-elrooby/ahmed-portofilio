"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
const ThemChanger = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true); 
    }, []);
  
    if (!mounted) return null; 
  return <>
  {theme === "dark"?(<span className="group">
          <IoSunnyOutline
            size={36}
            className="cursor-pointer transition-all group-hover:scale-[1.3]"
            color="#F97316"
            onClick={() => setTheme("light")}
          />
        </span>
      ):( <span className="group">
        <MdDarkMode
          size={36}
          className="cursor-pointer transition-all text-white group-hover:scale-[1.3]"
          onClick={() => setTheme("dark")}
        />
      </span>) }
  </>
}

export default ThemChanger