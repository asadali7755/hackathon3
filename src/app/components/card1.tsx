import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Propstype {
  img: string;
  title: string;
  price: string;
}





const Card: React.FC<Propstype> = ({ img, title, price }: Propstype) => {
  return (
    <div className='border-gray-300 p-4 transition-colors duration-300 hover:bg-gray-100  hover:scale-105'>
      <div>
        <Image src={img} alt="card" width={1000} height={1000} className='w-[250px] h-[200px]' />
      </div>
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
};


export default Card;

export const Carddetails = () => {
  const data = [
    { id: 1, img: "/image/sofa1.png", title: "Trenton modular sofa_3", price: "Rs:25000" },
    { id: 2, img: "/image/sofa2.png", title: "Granite dining table with dining chair", price: "Rs:20000" },
    { id: 3, img: "/image/sofa3.png", title: "Outdoor bar table and stool", price: "Rs:34000" },
    { id: 4, img: "/image/sofa4.png", title: "Plain console with teak mirror", price: "Rs:20000" },
    { id: 5, img: "/image/sofa12.png", title: "Reclaimed teak Sideboard", price: "Rs:15000" },
    { id: 6, img: "/image/sofa11.png", title: "asgaard sofa", price: "Rs:25000" },
    { id: 7, img: "/image/sofa13.png", title: "SJP_0825 ", price: "Rs:25000" },
    { id: 8, img: "/image/sofa14.png", title: "Outdoor sofa set", price: "Rs:25000" },
    { id: 9, img: "/image/sofa15.png", title: "Reclaimed teak coffee table", price: "Rs:30000" },
    { id: 10, img: "/image/sofa16.png", title: "Round coffee table_color 2", price: "Rs:35900" },
    { id: 11, img: "/image/sofa17.png", title: "Kent coffee table", price: "Rs:25560" },
    { id: 13, img: "/image/sofa19.png", title: "Bella chair and table", price: "Rs:24300" },
    { id: 14, img: "/image/sofa20.png", title: "Grain coffee table", price: "Rs:25000" },
    { id: 15, img: "/image/sofa21.png", title: "Plain console", price: "Rs:25000" },
    { id: 16, img: "/image/sofa2.png", title: "Granite dining table with dining chair", price: "Rs:30000" },
    { id: 17, img: "/image/sofa16.png", title: "Round coffee table_color 2", price: "Rs:35900" },
  ];

  return (
    <div className='flex flex-wrap gap-[30px] justify-start ml-[90px]'>
      {data.map((items) => (
        <Card
          key={items.id}
          img={items.img}
          title={items.title}
          price={items.price}
        />
      ))}

      <div className='  w-[392px] h-[60px] mt-[100px] ml-[324px]  '>
        <div className='flex gap-6'>
        <button className='w-[60px]  h-[60px] rounded-[10px] bg-[#FBEBB5]  hover:scale-105'>1</button>
        <button className='w-[60px] h-[60px] rounded-[10px] bg-[#FBEBB5] hover:scale-105 '>2</button>
        <button className='w-[60px] h-[60px] rounded-[10px] bg-[#FBEBB5] hover:scale-105 '>3</button>
         <Link href="./"><button className='w-[98px] h-[60px] rounded-[10px] bg-[#FBEBB5] hover:scale-105'> Next</button></Link>
        </div>
      </div>
    </div>
  );
};
