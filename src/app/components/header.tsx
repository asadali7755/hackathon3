import React from 'react'
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from 'next/link';

const Header = () => {
  return (
     
     <div className=' w-[1440px] h-[70px] flex bg-[#FFFFFF] gap-14 fixed top-0 left-0 right-0 z-50 '>    
        <div className='w-[430px] h-[24px] ml-[505px] mt-5 gap-14 flex justify-center text-[#000000]'>

         <div className='w-[49px] h-[24px] font-serif font-[500] text-[16px] text-[#000000] '><Link href="/">home</Link></div>

            <div className='w-[42px] h-[24px] font-serif font-[500px] text-[16px] text-[#000000]'><Link href="/shop">shop</Link></div>
            
            <div className='w-[49px] h-[24px]  font-serif font-[500px] text-[16px] text-[#000000]' ><Link href="/asgaarsofa">newarrived</Link></div>
            
            <div className='w-[66px] h-[24px]  font-serif font-[500px] text-[16px] text-[#000000]'><Link href="/contect">contect</Link></div>       
        </div>

        <div className='w-[247px] h-[28px] ml-[170px] mt-6  flex gap-6'>
               <Link href="/myaccount"><MdOutlineSupervisorAccount className='hover:scale-105'/></Link>

               <Link href="/"> <IoSearchOutline className='hover:scale-105' /></Link>

               <Link href="/">  <IoIosHeartEmpty className='hover:scale-105' /></Link>

               <Link href="/checkout"> <AiOutlineShoppingCart className="hover:scale-105" /></Link>
        </div>

      </div>








  )
}

export default Header
