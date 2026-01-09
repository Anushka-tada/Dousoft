// import React from 'react'
// import "swiper/css";


// const Herosection = () => {
//   return (
//     <>
      
//       <div className='herosection-outer p-4 pt-2 px-14'>
//      <div className='herosection p-4'>
//          <div className='herosection-inner grid grid-cols-[50%_42%] bg-white px-10  flex align-middle'> 

//         <div className='py-12'>
//             <h2 className='heading-2 font-lustria mb-5'>Best <span className='primary-text'> Software <br></br> Development</span> Company for Scalable Digital Solutions</h2>
//         <p className='mb-5 font-notosans B-1'>Dousoft IT is <span className='primary-text'>a trusted, affordable, and top software development company</span>  that delivers innovative digital solutions for entrepreneurs, SMEs, and enterprises across the globe. We assist businesses in transforming their concepts into safe, flexible and highly-performing software solutions by utilizing the latest technologies and established methods of development.</p>

//          <button className="button rounded-full flex items-center" style={{width:"fit-content"}}>
//           Start a Project
//           <img src="/assets/button_arrow.png" className="ml-2"></img>
//         </button>
//         </div>

//         <div className='flex justify-center hero-teams-outer'>
//               <div className='hero-teams bg-white p-3  h-fit'>
//                 <p className='B-1 font-notosans '>Trusted by 500+ teams to empower <br></br> 2,00,000+ people</p>
//                 <div className='flex '>
//                  <img src='/assets/hero-teams.svg'></img>
//                  <p className='heading-2 font-light'>+</p>
//                 </div>
//               </div>
//         </div>
//       </div>
//      </div>
//       </div>
//     </>
//   )
// }

// export default Herosection

"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Herosection = () => {
  return (
    <>
      <div className="herosection-outer md:p-4 p-3 pt-2 px-3 sm:px-6 md:px-10 lg:px-14 mb-5">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          slidesPerView={1}
          pagination={{
    clickable: true,
  }}
        >
          {/* ===== Slide 1 ===== */}
          <SwiperSlide>
            <div className="herosection md:p-4 p-2 ">
              <div className="herosection-inner hero-slide-1 grid lg:grid-cols-[50%_42%] md:grid-cols-[60%_42%]  bg-white md:px-10 px-3 flex align-middle">
                <div className="md:py-12 py-4">
                  <h2 className="heading-2 font-lustria mb-5 md:text-left text-center">
                    Best <span className="primary-text"> Software <br /> Development</span> Company for Scalable Digital Solutions
                  </h2>

                  <p className="mb-5 font-notosans B-1 md:text-left text-center">
                    Dousoft IT is <span className="primary-text ">a trusted, affordable, and top software development company</span> that delivers innovative digital solutions for entrepreneurs, SMEs, and enterprises across the globe. We assist businesses in transforming their concepts into safe, flexible and highly-performing software solutions by utilizing the latest technologies and established methods of development.
                  </p>

                  <button className="my-7 sm:my-0 button rounded-full flex items-center md:justify-self-start justify-self-center" style={{ width: "fit-content" }}>
                    Start a Project
                    <img src="/assets/button_arrow.png" className="ml-2" />
                  </button>
                </div>

                <div className="flex md:justify-center justify-start hero-teams-outer">
                  <div className="hero-teams sm:bg-white p-3 h-fit">
                    <p className="B-1 font-notosans">
                      Trusted by 500+ teams to  <br />empower  2,00,000+ people
                    </p>
                    <div className="flex">
                      <img src="/assets/hero-teams.svg" />
                      <p className="heading-2 font-light">+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* ===== Slide 2 (NEW content added) ===== */}
          <SwiperSlide>
            <div className="herosection md:p-4 p-2">
              <div className="herosection-inner hero-slide-2 grid lg:grid-cols-[50%_42%] md:grid-cols-[60%_42%]  bg-white md:px-10 px-3 flex align-middle">
                <div className="md:py-12 py-4">
                  <h2 className="heading-2 font-lustria mb-5 md:text-left text-center">
                    Leading <span className="primary-text"> Software <br /> Development  </span> Company Delivering Scalable Solutions
                  </h2>

                  <p className="mb-5 font-notosans B-1 md:text-left text-center">
                   Dousoft IT is a <span className="primary-text">trusted and cost-effective software development company </span> delivering innovative digital solutions to entrepreneurs, SMEs, and enterprises worldwide. We help businesses transform ideas into secure, scalable, and high-performance software using modern technologies and proven development practices.
                  </p>

                  <button className="button my-7 sm:my-0 rounded-full flex items-center md:justify-self-start justify-self-center" style={{ width: "fit-content" }}>
                    Start a Project
                    <img src="/assets/button_arrow.png" className="ml-2" />
                  </button>
                </div>

                <div className="flex md:justify-end justify-start ">
                  <div className="hero-teams-2 sm:bg-white p-3 h-fit overflow-hidden">
                   <p className="B-1 font-notosans">
                      Trusted by 500+ teams to <br /> empower  2,00,000+ people
                    </p>
                    <div className="flex">
                      <img src="/assets/hero-teams.svg" />
                      <p className="heading-2 font-light">+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Herosection;
