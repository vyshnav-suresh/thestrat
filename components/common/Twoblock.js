import Image from 'next/image'
import React from 'react'

const Twoblock = ({img,title,para}) => {
  return (
    <div className="w-full flex pr-[10%] pl-[10%] mt-20">
        <div className="w-1/2 flex justify-center items-center">
          <Image width={500} height={800} alt="sdfd" src={img}/>
        </div>
        <div className="w-1/2">
          <p className="text-4xl font-semibold font-NunitoSans-Bold">
          {title}
          </p>
          <p className="w-16 h-1 rounded-full mt-5 bg-slate-400"></p>
          <p className="text-[18px] leading-7 text-slate-500 text-justify mt-10">
          {para}
          </p>
        </div>

      </div>
  )
}

export default Twoblock
