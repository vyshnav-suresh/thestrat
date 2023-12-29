import React from 'react'

const Singleblock = ({title,para}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center  pr-[10%] pl-[10%] mt-14">
      <p className="text-[38px] font-NunitoSans-Bold">
      {title}
      </p>
      <p className="w-16 h-1 rounded-full mt-5 bg-slate-400"></p>
      <p className="text-[18px] leading-7 text-slate-500  mt-10">
      {para}
      </p>
    </div>

  )
}

export default Singleblock
