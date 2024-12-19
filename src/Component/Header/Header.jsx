"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { array } from './array'
import { usePathname } from 'next/navigation'
import ThemChanger from '@/Providers/ThemChanger'

const Header = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <div className="mx-auto fixed top-0 w-full z-[1000]">
        <div className="shadow-lg bg-gray-600 text-gray-600 dark:text-gray-300 dark:bg-[#0d48a1d8] ">
          <nav className="flex items-center py-[5px] justify-between w-[90%] m-auto">
            <Link href="/">
              <Image 
                src={require("../../Images/logo.png")} 
                className="rounded-md transition-all hover:scale-[1.1]" 
                alt="Logo" 
                width={60} 
              />
            </Link>
         <ul className='flex gap-2 items-center'>
          <li>   <div 
              id="menu" 
              onClick={() => setOpen(!open)} 
              className="relative flex flex-col gap-1 cursor-pointer lg:hidden group"  
            >
              <span 
                className={`w-[40px] bg-[--main-color] h-[4px] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}
              ></span>
              <span 
                className={`w-[20px] group-hover:w-[40px] bg-[--main-color] h-[3px] transition-all duration-300 ${open ? 'opacity-0' : ''}`}
              ></span>
              <span 
                className={`w-[40px] bg-[--main-color] h-[4px] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}
              ></span>
            </div></li>
            <li className='lg:hidden block'><ThemChanger/>
            </li>
         </ul>
            <ul 
className={`items-center bg-white shadow-lg rounded-md 
  ${open ? 'flex flex-col gap-3 mt-3 absolute after:content-[""] after:w-[30px] after:h-[30px] after:bg-white after:absolute after:top-[-14px] after:right-3 after:rotate-[45deg] top-[76px] right-[30px] w-[60%] p-4 lg:after:hidden lg:top-0' : 'hidden'}
  lg:flex lg:flex-row lg:gap-[20px] lg:bg-transparent lg:shadow-none lg:mt-0`}
            >
              {array.map((item) => (
                <li key={item.id} className="relative w-full text-white">
                  <Link 
                    className={`relative flex gap-2 items-center text-[20px] hover:after:w-full font-bold w-full py-2 capitalize rounded after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[5px] after:rounded-lg ${open ? 'w-[50%] text-[--main-color] items-start' : 'w-full'} after:bg-[--main-color] after:transition-all after:duration-300 ${pathname === item.href ? 'after:w-full text-[--main-color]' : ''}`} 
                    href={item.href}
                  >
                    {item.icon} {item.content}
                  </Link>
                </li>
              ))}
            <li className='hidden lg:block'><ThemChanger /></li>
            </ul>
           
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
