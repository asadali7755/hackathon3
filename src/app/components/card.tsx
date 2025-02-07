import Image from 'next/image';
import React from 'react';

interface Propstype {
  img: string;
  title: string;
  price: string;
}

const Card: React.FC<Propstype> = ({ img, title, price }: Propstype) => {
  return (
    <div className="hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="border-gray-300 p-4">
        <div>
          <Image
            src={img}
            alt="card"
            width={1000}
            height={1000}
            className="w-[200px] h-[150px]"
          />
        </div>
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Card;

export const Carddetails = () => {
  const data = [
    {
      id: 1,
      img: '/image/sofa1.png',
      title: 'Trenton modular sofa_3',
      price: 'Rs:25000',
    },
    {
      id: 2,
      img: '/image/sofa2.png',
      title: 'Granite dining table with dining chair',
      price: 'Rs:25000',
    },
    {
      id: 3,
      img: '/image/sofa3.png',
      title: 'Outdoor bar table and stool',
      price: 'Rs:25000',
    },
    {
      id: 4,
      img: '/image/sofa4.png',
      title: 'Plain console with teak mirror',
      price: 'Rs:25000',
    },
  ];
  return (
    <div className="flex w-[1440px] h-[350px] gap-[30px] ml-[150px]">
      {data.map((items) => (
        <Card
          key={items.id}
          img={items.img}
          title={items.title}
          price={items.price}
        />
      ))}
    </div>
  );
};
