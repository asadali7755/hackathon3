
import { AiOutlineShoppingCart } from "react-icons/ai";

import Image from "next/image";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { IoMdClock } from "react-icons/io";
import { BsCalendar2Date } from "react-icons/bs";
import Footer from "./components/footer";
import Footer1 from "./components/footer1";
import Link from "next/link";
import Sofas from "./sofas/page";


const Home=()=> {
  return (

 <div className="w-[1200px] h-[5052px] bg-[#FFFFFF]">
  
    <div className='w-[1440px] h-[70px] flex  gap-14 fixed top-0 left-0 right-0 z-50 bg-[#FBEBB5] '>      
          <div className='w-[430px] h-[24px] ml-[505px] mt-5 gap-14 flex justify-center text-[#000000]'>
           <div className='w-[49px] h-[24px] font-serif font-[500] text-[16px] text-[#000000] '><Link href="/">home</Link></div>
              <div className='w-[42px] h-[24px] font-serif font-[500px] text-[16px] text-[#000000]'><Link href="shop">Shop</Link></div> 
               <div className='w-[49px] h-[24px]  font-serif font-[500px] text-[16px] text-[#000000]' ><Link href="/asgaarsofa">newarrived</Link></div>
               <div className='w-[66px] h-[24px]  font-serif font-[500px] text-[16px] text-[#000000]'><Link href="/contect">contect</Link></div>   
          </div>
          <div className='w-[1400px] h-[28px] ml-[170px] mt-6  flex gap-7'>
          <Link href="/myaccount"><MdOutlineSupervisorAccount/></Link>
         <Link href="/checkout"> <IoSearchOutline className="hover:scale-105" /></Link>
         <Link href="/contect"> <IoIosHeartEmpty className="hover:scale-105" /></Link>
         <Link href="/cart"> <AiOutlineShoppingCart className="hover:scale-105" /></Link>
          </div>
   </div>

  <div className="w-[1400px] flex bg-[#FBEBB5] ">  
    <div className="w-[1240px] h-[276px] mt-[328px] ml-[202px] text-[#000000]  ">
      <div className="w-[440px] h-[192px]  font-serif font-[500px] text-[64px] ">Rocket single seater</div>
     <Link href="/shop"><button className="w-[121px] h-[36px] font-serif  text-[20px] border-b-2 border-[#000000] hover:scale-105">Shop Now</button></Link> 
      </div>   
    <div className="w-[1400px] h-[1000px]">
      <Image src="/image/sofa.png" alt="single seater" width={1000} height={1000} className="w-[1440px] h-[1000px]  " />
    </div>
  </div>

  
   <div className="w-[1400px] h-[790px] bg-[#FAF4F4] flex ">
         <div>
         <Image src="/image/sidetable.png" alt="" width={1000} height={1000} className="w-[605px] h-[562px]  ml-[10px]" />
         </div>
         <div>
         <Image src="/image/sidetable1.png" alt="" width={1000} height={1000} className="w-[605px] h-[562px]  ml-[10px]" />
         </div>
   </div>

      <div className='w-[1400px] max-auto bg-[#FFFFFF]'>
          <div className='w-[311px] h-[54px] mb-2 mt-8  ml-[564px] font-serif font-[500px] text-[36px] text-[#000000]'>Top Picks For You</div>
          <div className='w-[773px] h-[24px] mb-5 ml-[333px] font-serif font-[500px] text-[17px] text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</div>  
        
         <Sofas />
         
          <Link href="/shop"><button className="w-[105px] h-[49px] ml-[662px] border-[1px] border-b-[#000000] font-serif text-[20px] hover:scale-105">View More</button></Link>
       </div>

     <div className="w-[1400px] flex h-[770px] bg-[#FFF9E5]">
      <div>
        <Image src="/image/sofa11.png" alt="rounded sofa" width={1000} height={1000} className="w-[983px] h-[799px] ml-[-36px]" />
      </div>
      <div className="w-[331px] h-[205px]  mt-[260px] ">
        <div className="w-[149px] h-[26px] font-serif ml-[90px] font-[500px] text-[24px] text-[#000000] hover:scale-105">new arrivals</div>
        <h1 className="w-[331px] h-[72px] font-mono font-[700px] text-[48px] text-[#000000]">asgaard sofa</h1>
        <Link href="/AsgaardSofa"><button className="w-[255px] h-[64px] border-[1px] mt-[30px] ml-[32px] border-[#000000] hover:scale-105">order now</button></Link>
      </div>  
      </div>

      <div className="w-[1400px]  h-[700px] ">
        <div className="[479px] h-[91px]">
          <h1 className=" w-[174px] h-[54px] font-serif ml-[600px] text-[36px] text-[#000000]">Our Blogs</h1>
            <div className="w-[479px] h-[24px] ml-[470px] font-serif text-[16px] text-[#9F9F9F]"> Find a bright ideal to suit your taste with our great selection</div>
          </div>
      <div className="flex mr-[60px]">
      <div className="[1240px]  h-[679px]">
        <Image src="/image/25.png" alt="post" width={1000} height={1000} className="w-[293px] h-[293px] mt-[100px] ml-[100px] radius-[10px] " />
        <div className="w-[339px] h-[129px] ml-[60px]">
          <div className="w-[339px] h-[10px] font-mono font-[200px] mt-[20px] ml-[40px] text-[15px] text-[#000000] ">Going all-in with millennial design</div>
          <button className="w-[130px] h-[36px] ml-[100px] text-[17px] mt-[20px] border-b border-[#000000] text-[#000000] hover:scale-105">Read More</button>
         <div className="flex mt-[6px] ml-[60px]">
          <IoMdClock className="mt-[4px]" /> <h1 className="ml-[10px]">5 mint</h1> <BsCalendar2Date className="ml-[60px] mt-[5px]" /> <h1 className="ml-[10px]">20 jan 2025</h1>
          </div>
         </div>
      </div>

      <div className="[1240px]  h-[679px]">
        <Image src="/image/26.png" alt="post" width={1000} height={1000} className="w-[293px] h-[293px] mt-[100px] ml-[100px] radius-[10px] " />
        <div className="w-[339px] h-[129px] ml-[60px]">
          <div className="w-[339px] h-[10px] font-mono font-[200px] mt-[20px] ml-[40px] text-[15px] text-[#000000] ">Going all-in with millennial design</div>
          <button className="w-[130px] h-[36px] ml-[100px] text-[17px] mt-[20px] border-b border-[#000000] text-[#000000] hover:scale-105">Read More</button>
         <div className="flex mt-[6px] ml-[60px]">
          <IoMdClock className="mt-[4px]" /> <h1 className="ml-[10px]">5 mint</h1> <BsCalendar2Date className="ml-[60px] mt-[5px]" /> <h1 className="ml-[10px]">20 jan 2025</h1>
          </div>
        </div>

      </div>
      <div className="[1240px]  h-[679px]">
        <Image src="/image/27.png" alt="post" width={100} height={100} className="w-[293px] h-[293px] mt-[100px] ml-[100px] radius-[10px] " />
        <div className="w-[339px] h-[129px] ml-[60px]">
          <div className="w-[339px] h-[10px] font-mono font-[200px] mt-[20px] ml-[40px] text-[15px] text-[#000000] ">Going all-in with millennial design</div>
          <button className="w-[130px] h-[36px] ml-[100px] text-[17px] mt-[20px] border-b border-[#000000] text-[#000000] hover:scale-105">Read More</button>
         <div className="flex mt-[6px] ml-[60px]">
          <IoMdClock className="mt-[4px]" /> <h1 className="ml-[10px]">5 mint</h1> <BsCalendar2Date className="ml-[60px] mt-[5px]" /> <h1 className="ml-[10px]">20 jan 2025</h1>
          </div>
          </div>
      </div>
        </div>
       <Link href="/shop" > <button className="w-[126px] h-[49px] ml-[557px] border-b border-[#000000] font-serif font-[500px]  text-[16px] hover:scale-105">View All Post</button> 
       </Link>
      </div>
      <Footer />
      <Footer1 />
 </div>

 

  );
}
export default Home


