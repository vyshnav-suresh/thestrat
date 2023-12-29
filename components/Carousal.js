// components/Carousels.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React from "react";

export const Carousels = () => {
    const data=[
        {
            id:1,
            title:'Data Analytics&Visalization',
            image:'/datas.png'
        },
        {
            id:2,
            title:'Data Analytics&Visalization',
            image:'/The.png'
        },
        {
            id:3,
            title:'Industry Oriented Training',
            image:'/industries.png'
        },
    ]

  const Fields=({title,img})=>{
    return (
        <div className="relative">
            <Image src="/datas.png" className='w-screen' alt="image1" height={200} width={1200} />
            <div className="absolute inset-0 flex flex-col justify-center pr-[10%] pl-[10%]">
              <div className="text-main_dark font-bold text-6xl max-md:max-w-full max-md:text-4xl">
                <span className="text-base">Industry Oriented Training</span>
                <br />
                <span className="">WE IMPROVE YOUR </span>
                <br />
                <span className="">SALES EFFICIENCY</span>
              </div>
              <div className="text-blue-900 text-base font-semibold whitespace-nowrap bg-white justify-center items-stretch mt-5 px-7 py-3 rounded-md self-start max-md:mt-10">
                KNOW MORE
              </div>
            </div>
          </div>
    )
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,

        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <div className="bg-red-500">
    //   <div className="bg-blue-500">
        <Slider {...settings} >
        {data.map((item)=>(
            <div key={item.id}>
            <Fields title={item.title} img={item.image}/>
            </div>
        ))

        }
        </Slider>
    // </div>
  );
};
