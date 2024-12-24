"use client"
import Link from 'next/link'
import notFoundImage from "../../Images/error.svg"; 
import Image from 'next/image'
const NotFoundPage = () => {



  return <>
    <div className='flex w-[95%] bg-white p-3 pt-[100px] rounded-lg dark:bg-[#171717]  mx-auto  sm:flex-col md:flex-row gap-3 justify-around items-center'>
      <div className='flex flex-col items-center gap-3'>
        <p className="text-xl  capitalize font-bold text-[--main-color]">Page Not Found</p>
        <p className="text-md text-gray-500 mt-4">
          The page you're looking for does not exist.
        </p>

        <Link className='border-2 border-[--main-color] hover:bg-[--main-color] hover:text-white text-[--main-color]  font-semibold capitalize transition-all rounded-md p-2' href={"/"}>
          home page
        </Link>
      </div>
      <Image src={notFoundImage} alt='notfound' width={400} height={300} />
    </div>
  </>
}

export default NotFoundPage