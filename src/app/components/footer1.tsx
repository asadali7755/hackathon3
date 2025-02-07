'use client';

import Link from 'next/link';
import React from 'react';

const Footer1 = () => {
  return (
    <div className="max-w-screen-xl container mx-auto  pb-8 px-4">
      <div className='flex flex-col md:flex-row items-center md:items-start justify-between px-4 py-8'>
        <div className='text-center md:text-left md:w-1/4'>
          <p className='text-sm text-gray-500'>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        
        <div className='md:w-1/4 text-center md:text-left mt-6 md:mt-0'>
          <h3 className='text-gray-500 font-semibold mb-4'>Links</h3>
          <ul className='space-y-2'>
            <li><Link href="/" className='text-black'>Home</Link></li>
            <li><Link href="/shop" className='text-black'>Shop</Link></li>
            <li><Link href="/contact" className='text-black'>Contact</Link></li>
          </ul>
        </div>

        <div className='md:w-1/4 text-center md:text-left mt-6 md:mt-0'>
          <h3 className='text-gray-500 font-semibold mb-4'>Help</h3>
          <ul className='space-y-2'>
            <li className='text-black'>Payment Options</li>
            <li className='text-black'>Returns</li>
            <li className='text-black'>Privacy Policies</li>
          </ul>
        </div>

        <div className='md:w-1/4 text-center md:text-left mt-6 md:mt-0'>
          <h3 className='text-gray-500 font-semibold mb-4'>Newsletter</h3>
          <div className='flex flex-col md:flex-row gap-2 items-center'>
            <input type='email' placeholder='Enter Your Email Address' className='border-b-2 border-black px-2 py-1 w-full md:w-auto'/>
            <button className='border-b-2 border-black text-black font-semibold'>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      
      <div className='border-t border-gray-300 mt-8 pt-4 text-center'>
        <p className='text-sm text-black'>2022 Meubel House. All rights reserved.</p>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div>
    
      <main className="container mx-auto py-8 px-4 text-center">
        <p className="text-lg text-gray-700">Explore our exclusive furniture collection.</p>
      </main>
      <Footer1 />
    </div>
  );
};

export default Footer1;
