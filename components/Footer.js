import React from 'react'

const Footer = () => {
  return (
    <div className='bg-main_dark '>
       <div className="pr-[10%] pl-[10%] self-stretch flex w-full flex-col items-center mt-32 pt-6 pb-12 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-full  flex-col items-stretch mb-9 max-md:max-w-full">
          <div className="justify-center items-center flex flex-col px-16 max-md:max-w-full max-md:px-5">
            <div className="flex  w-full items-stretch justify-between gap-5 max-md:flex-wrap">
              <div className="text-white text-xl w-1/3  justify-center"><p>FIND US</p></div>
              <div className="text-white text-xl w-1/3 flex justify-start items-start"><p>PAGES</p></div>
              <div className="text-white text-xl w-1/3 flex justify-center items-center">
              <p>
                NEWSLETTER
              </p>
              </div>
            </div>
          </div>
          <div className="mt-3 max-md:max-w-full max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex justify-center items-center  w-1/3 max-md:w-full max-md:ml-0">
                <div className="text-white text-md text-wrap pr-32 max-md:mt-10">
                  Address :{" "}
                  <span className="text-white">
                    3rd Floor,Lalan Towers,Banerji Road, High
                  </span>{" "}
                  <span className="text-white">Court jn.,Cochin-682 031</span>
                  <br />
                  Email :{" "}
                  <span className="text-white">info@thestrategist.co.in</span>
                  <br />
                  Phone : <span className="text-white">
                    +91 9961813730,{" "}
                  </span>{" "}
                  <span className="text-white">0484-4059310</span>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start   w-1/3  max-md:w-full max-md:ml-0">
                <div className="text-white  leading-8 max-md:mt-10">
                  <span className=" text-white">
                    Home
                  </span>
                  <br />
                  <span className=" text-white">
                    About
                  </span>
                  <br />
                  <span className=" text-white">
                    Data Analytics
                  </span>
                  <br />
                  <span className=" text-white">Consulting</span>
                  <br />
                  <span className=" underline text-white">
                    Careers
                  </span>
                  <br />
                  <span className=" text-white">
                    Training
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-1/3 ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch mt-3 max-md:mt-10">
                  <div className="text-white text-base font-light leading-10">
                    *Name
                  </div>
                  <div className="text-white text-base font-light leading-10 mt-5 max-md:mt-10">
                    *Email
                  </div>
                  <div className=" text-lg font-semibold leading-10 whitespace-nowrap w-1/2   justify-center items-stretch mt-4 rounded-xl max-md:px-5">
                    <button className='bg-white text-main_dark  px-6 py-2 rounded-lg'>Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
