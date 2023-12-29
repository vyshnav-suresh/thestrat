import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <Layout>
      <div className="h-[200px] w-full bg-main_dark flex justify-center items-center mt-[-30px] font-NunitoSans-Regular">
        <p className="absolute text-5xl font-bold text-white">ABOUT</p>
        <Image
          height={234}
          width={1500}
          src="/about.jpg"
          alt="fds"
          className="absolute h-[200px] w-full object-cover opacity-45"
        />
      </div>

      <div className="w-full flex pr-[10%] pl-[10%] mt-20">
        <div className="w-1/2 flex justify-center items-center">
          <Image width={200} height={200} alt="sdfd" src='/jomon.png'/>
          <p className="text-4xl pl-10 text-main_dark font-semibold">JOMON JOSEPH</p>
        </div>
        <div className="w-1/2">
        
        <p className="text-4xl font-semibold ">WHO I AM</p>
        <p className="w-16 h-1 rounded-full mt-5 bg-slate-400"></p>
        <p className="text-[18px] leading-7 text-slate-500 text-justify mt-10" >
Jomon Joseph is a business consultant and modelling expert with an excellent track record of having delivered substantial value to a wide variety of institutions in the public and private sectors and academia.Consulting assignments primarily include business model design, learning content development and delivery as well as financial planning and advisory services (individual and corporate). Jomon began his career with a major broking house in Mumbai having served as Senior Analyst, Head of Research and Financial Planner. At present, he is the promoter of 'The Strategist'.
        </p>
        </div>
      </div>
    </Layout>
  );
};

export default about;
