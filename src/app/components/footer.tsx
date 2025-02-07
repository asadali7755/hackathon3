import Image from "next/image"




const Footer = ()=> {
  return(
    <div className="relative w-[1440px] h-[350px] mt-[200px]">
  <Image src="/image/background.png" alt="background" height={1000} width={1000} className="w-full h-full object-cover bg-[#FAF4F480]" />
  
  
  <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-[60px] text-[#000000]">
    Our Instagram
  </h1>
  
  
  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[70px] font-serif font-normal text-[20px] text-[#000000]">
    Follow our store on Instagram
  </p>
  
  
 <a href="https://www.instagram.com/asadmalik8007/"><button className="absolute hover:scale-105 top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[120px] font-serif font-normal text-[15px] text-[#000000] bg-transparent border-2 rounded-[90px] ">
    Follow Us
  </button></a> 
</div>

  )
}
export default Footer