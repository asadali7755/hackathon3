import React from 'react'
import { BiFilter } from "react-icons/bi";
import Link from "next/link"
import Image from "next/image"




const BackgroundHeader = () => {
  return (
   <div>
  <div className="relative w-[1440px] h-[350px]">
  <Image 
    src="/image/background1.png" 
    alt="background" 
    height={1000} 
    width={1000} 
    className="w-full h-full object-cover bg-[#FAF4F480]" 
  />

  {/* Logo Image - Adjusted Position */}
  <Image 
    src="/image/logo.png" 
    alt="logo" 
    height={100} 
    width={100} 
    className="absolute top-[20%] left-1/2 transform -translate-x-1/2" 
  />

  {/* Heading */}
  <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-[60px] text-[#000000]">
    shop
  </h1>

  {/* Description */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
                    <p className="text-gray-700 text-xs md:text-xl flex items-center">
                        <Link href="/" className="font-bold hover:underline">Home</Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/shop" className=" hover:underline">Contact</Link>
                    </p>
                </div>
</div>

  <div className="w-[1440px] h-[70px] flex   bg-[#FAF4F4]">
    <div className="w-[85px] h-[30px] flex ml-[98px] mt-[20px]">
    <BiFilter />
   <button><h1 className="ml-[25px] border-b-2 border-black mb-[20px]">Filter</h1></button>
  </div>

  <div>
    <Image src="/image/4dot.png" alt="filter" width={28} height={28} className="ml-[20px] mt-[20px]" />
  </div>

  <div>
  <Image src="/image/round.png" alt="filter" width={24} height={24} className="ml-[20px] mt-[22px]" />
  </div>

    <div className="w-[240px] h-[37px] border-l-2 border-[#000000] mt-[20px] ml-[20px]">
    <h1 className="font-serif font-[400px] ml-4 mt-1 text-[12px]">Showing 1–16 of 32 results</h1>
  </div>
  
  <div className="w-[120px] h-[55px] gap-5 flex ml-[450px]">
    <div className="mt-[20px] ">Show</div>
    <div className=" w-[40px] h-[40px] mt-[12px] text-center bg-white">
      <h1 className="mt-2">16</h1>
      </div>
  </div>

  <div className="w-[420px] h-[55px] gap-2 flex ml-[90px]">
    <div className="mt-[20px] ">Short by</div>
    <div className=" w-[90px] h-[40px]  mt-[12px] text-center bg-white">
      <h1 className="mt-2">default</h1>
      </div>
  </div>
  
  </div>
    </div>
  )
}

export default BackgroundHeader
