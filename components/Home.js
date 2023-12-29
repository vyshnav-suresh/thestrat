import React from "react";
import { Carousal, Carousels } from "./Carousal";
import Slider from "react-slick";
import Image from "next/image";

const Home1 = () => {
  const data = [
    {
      id: 1,
      name: "Data Analytics&Visalization",
      img: "/i21.png",
    },
    {
      id: 2,
      name: "Spreadsheet Consulting",
      img: "/i3.png",
    },
    {
      id: 3,
      name: "Financial Analytics & Model Building",
      img: "/i1.png",
    },
    {
      id: 4,
      name: " Our Flagship Programs",
      img: "/i3.png",
    },
    {
      id: 5,
      name: "Industry Oriented Training",
      img: "/i41.png",
    },
    {
      id: 6,
      name: "Microsoft Certifications",
      img: "/i3.png",
    },
  ];
  const Work = ({img,name}) => {
    return (
      <div className="text-black flex p-16 flex-col justify-center items-center w-full text-xl  ">
        <div className="w-full  flex justify-center items-center">
          <Image
            src={img}
            width={1000}
            height={1000}
            alt="ds"
            className="aspect-square  object-contain object-center w-[100px] h-[100px] overflow-hidden shrink-0 max-w-full"
          />
        </div>
        <div className="w-full  flex justify-center items-center">
          <p className="text-[24px] font-bold text-secondary_dark text-wrap">
           {name}
          </p>
        </div>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className="">
      <div className="w-screen">
        <Carousels />
        <div className="justify-center items-stretch self-center flex w-full  flex-col mt-10 pr-[10%] pl-[10%] max-md:max-w-full">
          <div className="w-full">
            <Slider {...settings1}>
            {
                data.map((item) => (
                    <div className="" key={item.id}>
                       <Work name={item.name} img={item.img}/>
                    </div>
                ))
            }
            </Slider>
          </div>
        </div>
      </div>
      <div>
        <div className="text-cyan-800 flex justify-center items-center text-4xl font-bold self-center pr-[10%] pl-[10%] w-full whitespace-nowrap mt-10">
          OUR CLIENTS
        </div>
        {/* <div className="justify-between items-start self-center flex w-full pr-[10%] pl-[10%] gap-5 mt-11 px-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5"> */}
        <Slider {...settings} className="mt-20 pr-[10%] pl-[10%]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5c837eff2930b319bae641679992a72008bca5baa04fd1ffc69ceced01f4a35a?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c837eff2930b319bae641679992a72008bca5baa04fd1ffc69ceced01f4a35a?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c837eff2930b319bae641679992a72008bca5baa04fd1ffc69ceced01f4a35a?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c837eff2930b319bae641679992a72008bca5baa04fd1ffc69ceced01f4a35a?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c837eff2930b319bae641679992a72008bca5baa04fd1ffc69ceced01f4a35a?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c837eff2930b319bae641679992a72008bca5baa04fd1ffc69ceced01f4a35a?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c837eff2930b319bae641679992a72008bca5baa04fd1ffc69ceced01f4a35a?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c837eff2930b319bae641679992a72008bca5baa04fd1ffc69ceced01f4a35a?apiKey=ff9a1e75693f49e28179dac0353d8f80&"
            className="aspect-[1.62] object-contain object-center w-[105px] h-[105px] overflow-hidden shrink-0 max-w-full self-start"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5176e2c3b28f25635f43cbdaf857cf9dab108fbd88622062d6ee08b47bcb4e76?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5176e2c3b28f25635f43cbdaf857cf9dab108fbd88622062d6ee08b47bcb4e76?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5176e2c3b28f25635f43cbdaf857cf9dab108fbd88622062d6ee08b47bcb4e76?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5176e2c3b28f25635f43cbdaf857cf9dab108fbd88622062d6ee08b47bcb4e76?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5176e2c3b28f25635f43cbdaf857cf9dab108fbd88622062d6ee08b47bcb4e76?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5176e2c3b28f25635f43cbdaf857cf9dab108fbd88622062d6ee08b47bcb4e76?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5176e2c3b28f25635f43cbdaf857cf9dab108fbd88622062d6ee08b47bcb4e76?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5176e2c3b28f25635f43cbdaf857cf9dab108fbd88622062d6ee08b47bcb4e76?apiKey=ff9a1e75693f49e28179dac0353d8f80&"
            className="aspect-[1.62] object-contain object-center w-[105px] h-[105px] overflow-hidden shrink-0 max-w-full self-start"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61e80c1666b7b9c755b3896a90af403fccbf9d274fb1acd013317f9befeea089?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61e80c1666b7b9c755b3896a90af403fccbf9d274fb1acd013317f9befeea089?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61e80c1666b7b9c755b3896a90af403fccbf9d274fb1acd013317f9befeea089?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61e80c1666b7b9c755b3896a90af403fccbf9d274fb1acd013317f9befeea089?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61e80c1666b7b9c755b3896a90af403fccbf9d274fb1acd013317f9befeea089?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61e80c1666b7b9c755b3896a90af403fccbf9d274fb1acd013317f9befeea089?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61e80c1666b7b9c755b3896a90af403fccbf9d274fb1acd013317f9befeea089?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61e80c1666b7b9c755b3896a90af403fccbf9d274fb1acd013317f9befeea089?apiKey=ff9a1e75693f49e28179dac0353d8f80&"
            className="aspect-[1.62] object-contain object-center w-[105px] h-[105px] overflow-hidden shrink-0 max-w-full self-start"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1896056963f40ef90fe31653421a2eb7353c4351b2ea9c688b602f0d563a550f?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1896056963f40ef90fe31653421a2eb7353c4351b2ea9c688b602f0d563a550f?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1896056963f40ef90fe31653421a2eb7353c4351b2ea9c688b602f0d563a550f?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1896056963f40ef90fe31653421a2eb7353c4351b2ea9c688b602f0d563a550f?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1896056963f40ef90fe31653421a2eb7353c4351b2ea9c688b602f0d563a550f?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1896056963f40ef90fe31653421a2eb7353c4351b2ea9c688b602f0d563a550f?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1896056963f40ef90fe31653421a2eb7353c4351b2ea9c688b602f0d563a550f?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1896056963f40ef90fe31653421a2eb7353c4351b2ea9c688b602f0d563a550f?apiKey=ff9a1e75693f49e28179dac0353d8f80&"
            className="aspect-[1.62] object-contain object-center w-[105px] h-[105px] overflow-hidden shrink-0 max-w-full self-start"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14c9e9b6a7ede96fbe6223349713327101bc7af364db566a150f2b74153001e9?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14c9e9b6a7ede96fbe6223349713327101bc7af364db566a150f2b74153001e9?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14c9e9b6a7ede96fbe6223349713327101bc7af364db566a150f2b74153001e9?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14c9e9b6a7ede96fbe6223349713327101bc7af364db566a150f2b74153001e9?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14c9e9b6a7ede96fbe6223349713327101bc7af364db566a150f2b74153001e9?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14c9e9b6a7ede96fbe6223349713327101bc7af364db566a150f2b74153001e9?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14c9e9b6a7ede96fbe6223349713327101bc7af364db566a150f2b74153001e9?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14c9e9b6a7ede96fbe6223349713327101bc7af364db566a150f2b74153001e9?apiKey=ff9a1e75693f49e28179dac0353d8f80&"
            className="aspect-[3.02] object-contain object-center w-[272px] h-[105px] overflow-hidden self-stretch"
          />
        </Slider>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home1;
