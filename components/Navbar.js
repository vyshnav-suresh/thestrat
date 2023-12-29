import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center  items-center pr-[10%] pl-[10%]">
      <div className="self-center z-[1] flex w-full  flex-col items-stretch mt-1 max-md:max-w-full">
        <div className="items-stretch flex w-full justify-between gap-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1a461385391433957cd1f6e0026a5d58b1d67b7b9bf124f9bcbccea2270c122b?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a461385391433957cd1f6e0026a5d58b1d67b7b9bf124f9bcbccea2270c122b?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a461385391433957cd1f6e0026a5d58b1d67b7b9bf124f9bcbccea2270c122b?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a461385391433957cd1f6e0026a5d58b1d67b7b9bf124f9bcbccea2270c122b?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a461385391433957cd1f6e0026a5d58b1d67b7b9bf124f9bcbccea2270c122b?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a461385391433957cd1f6e0026a5d58b1d67b7b9bf124f9bcbccea2270c122b?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a461385391433957cd1f6e0026a5d58b1d67b7b9bf124f9bcbccea2270c122b?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1a461385391433957cd1f6e0026a5d58b1d67b7b9bf124f9bcbccea2270c122b?apiKey=ff9a1e75693f49e28179dac0353d8f80&"
            className="aspect-[3.75] object-contain object-center w-[300px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="flex items-stretch gap-3.5  self-start">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4201be7e82822df9c2b0d5df29117c930b6274987feb6d38ff510c3a6831cdaf?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4201be7e82822df9c2b0d5df29117c930b6274987feb6d38ff510c3a6831cdaf?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4201be7e82822df9c2b0d5df29117c930b6274987feb6d38ff510c3a6831cdaf?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4201be7e82822df9c2b0d5df29117c930b6274987feb6d38ff510c3a6831cdaf?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4201be7e82822df9c2b0d5df29117c930b6274987feb6d38ff510c3a6831cdaf?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4201be7e82822df9c2b0d5df29117c930b6274987feb6d38ff510c3a6831cdaf?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4201be7e82822df9c2b0d5df29117c930b6274987feb6d38ff510c3a6831cdaf?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4201be7e82822df9c2b0d5df29117c930b6274987feb6d38ff510c3a6831cdaf?apiKey=ff9a1e75693f49e28179dac0353d8f80&"
              className="aspect-[0.95] object-contain object-center w-[61px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-black text-xl my-auto">
              Mail us:
              <br />
              info@thestrategist.co.in
            </div>
          </div>
          <div className="flex mt-0  items-stretch gap-2 self-start">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/807d2d6f68e3efca88ec467b6d4a936e9e6da8743ba2562f1d6b391ab7fe1639?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/807d2d6f68e3efca88ec467b6d4a936e9e6da8743ba2562f1d6b391ab7fe1639?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/807d2d6f68e3efca88ec467b6d4a936e9e6da8743ba2562f1d6b391ab7fe1639?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/807d2d6f68e3efca88ec467b6d4a936e9e6da8743ba2562f1d6b391ab7fe1639?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/807d2d6f68e3efca88ec467b6d4a936e9e6da8743ba2562f1d6b391ab7fe1639?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/807d2d6f68e3efca88ec467b6d4a936e9e6da8743ba2562f1d6b391ab7fe1639?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/807d2d6f68e3efca88ec467b6d4a936e9e6da8743ba2562f1d6b391ab7fe1639?apiKey=ff9a1e75693f49e28179dac0353d8f80&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/807d2d6f68e3efca88ec467b6d4a936e9e6da8743ba2562f1d6b391ab7fe1639?apiKey=ff9a1e75693f49e28179dac0353d8f80&"
              className="aspect-[0.93] object-contain object-center w-[57px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-black text-xl self-center grow shrink basis-auto my-auto">
              Call us:
              <br />
              +91 9961813730, 0484-4059310
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center font-NunitoSans-Bold">
          <div className="bg-main_dark flex items-stretch justify-between gap-5 mt-10 px-20 py-4 w-full max-md:flex-wrap max-md:px-5">
            <div className="hover:text-white text-white/40"><Link href='/'>HOME</Link></div>
            <div className="hover:text-white text-white/40"><Link href='/about'>ABOUT</Link></div>
            <div className="hover:text-white text-white/40 "><Link href='/dataanalytics'>DATA ANALYTICS</Link></div>
            <div className="hover:text-white text-white/40"><Link href='/'>MOS CERTIFICATIONS</Link></div>
            <div className="hover:text-white text-white/40 "><Link href='/'>TUTORIALS</Link></div>
            <div className="hover:text-white text-white/40 "><Link href='/'>TRAINING</Link></div>
            <div className="hover:text-white text-white/40"><Link href='/'>CONSULTING</Link></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
