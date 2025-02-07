import React from 'react'
import { BsFillClockFill } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import { FaPhone } from "react-icons/fa6";
import Header from '../components/header';
import Footer3 from '../components/footer3';
import Footer1 from '../components/footer1';
import Image from 'next/image';
import Link from 'next/link';


const Page = () => {
  return (
    <div>
        <Header />
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
    Contect
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
        
        <section className=" text-center  px-4 border-t-2 border-gray-200 md:px-32">
    <h2 className="text-3xl mt-4 font-bold">Get In Touch With Us</h2>
    <p className="mt-4 text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora libero aut, reiciendis, harum laboriosam quis minus quas maxime delectus sint dolores repudiandae, voluptate rerum nemo non corporis esse aspernatur?</p>
</section>

      <div className="flex flex-col md:flex-row justify-between mt-12 gap-12 md:gap-16">
    {/* Contact Details */}
    <div className="flex flex-col ml-10 mt-20 gap-8">
        <div className="flex items-center space-x-4 my-6">
            <div>
                <span className='flex'>
                    <IoLocationSharp size={25} className="text-4xl text-primary" />
                    <h3 className="font-semibold text-xl ml-4">Address</h3>
                </span>
                <p className='ml-10'>
                    238 5<sup>th</sup> SE Avenue,
                    <br /> New York NY10000,
                    <br /> United States
                </p>
            </div>
        </div>
        <div className="flex items-center space-x-4 my-6">
            <div>
                <span className='flex'>
                <FaPhone size={25} className="text-4xl text-primary" />
                    <h3 className="font-semibold ml-4 text-lg">Phone</h3>
                </span>
                <p className='ml-10'>Mobile : +(84)546-6789</p>
                <p className='ml-10'>Hotline : +(84)546-6789</p>
            </div>
        </div>
        <div className="flex items-center space-x-4 my-6">
            <div>
                <span className='flex'>
                    <BsFillClockFill size={25} className="text-4xl text-primary" />
                    <h3 className="ml-4 font-semibold text-lg">Working Time</h3>
                </span>
                <p className='ml-10'>Monday-Friday: 9:00 - 
                    <br />22:00</p>
                <p className='ml-10'>Saturday-Sunday: 9:00 - 
                    <br />21:00</p>
            </div>
        </div>
    </div>

    {/* Contact Form Section */}
    <div className="mt-16 bg-white rounded-lg p-8 md:w-1/2">
        <form className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" id="name" placeholder="Abc" className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email Address</label>
                <input type="email" id="email" placeholder="Abc@def.com" className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" placeholder="This is optional" className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea id="message" placeholder="Hi, I would like to ask about..." rows={4} className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
            </div>
        </form>
        <button type="submit" className="py-3 px-16 border border-black rounded-xl mt-8">Submit</button>
    </div>
</div>
    <Footer3 />
    <Footer1 />
    </div>

  )
}

export default Page
