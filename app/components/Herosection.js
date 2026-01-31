/* eslint-disable react-hooks/rules-of-hooks */
// // import React from 'react'
// // import "swiper/css";


// // const Herosection = () => {
// //   return (
// //     <>
      
// //       <div classNameName='herosection-outer p-4 pt-2 px-14'>
// //      <div classNameName='herosection p-4'>
// //          <div classNameName='herosection-inner grid grid-cols-[50%_42%] bg-white px-10  flex align-middle'> 

// //         <div classNameName='py-12'>
// //             <h2 classNameName='heading-2 font-lustria mb-5'>Best <span classNameName='primary-text'> Software <br></br> Development</span> Company for Scalable Digital Solutions</h2>
// //         <p classNameName='mb-5 font-notosans B-1'>Dousoft IT is <span classNameName='primary-text'>a trusted, affordable, and top software development company</span>  that delivers innovative digital solutions for entrepreneurs, SMEs, and enterprises across the globe. We assist businesses in transforming their concepts into safe, flexible and highly-performing software solutions by utilizing the latest technologies and established methods of development.</p>

// //          <button classNameName="button rounded-full flex items-center" style={{width:"fit-content"}}>
// //           Start a Project
// //           <img src="/assets/button_arrow.png" classNameName="ml-2"></img>
// //         </button>
// //         </div>

// //         <div classNameName='flex justify-center hero-teams-outer'>
// //               <div classNameName='hero-teams bg-white p-3  h-fit'>
// //                 <p classNameName='B-1 font-notosans '>Trusted by 500+ teams to empower <br></br> 2,00,000+ people</p>
// //                 <div classNameName='flex '>
// //                  <img src='/assets/hero-teams.svg'></img>
// //                  <p classNameName='heading-2 font-light'>+</p>
// //                 </div>
// //               </div>
// //         </div>
// //       </div>
// //      </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default Herosection

// "use client"

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const Herosection = () => {
//   return (
//     <>
//       <div classNameName="herosection-outer md:p-4 mt-2 p-3 pt-2 px-3 sm:px-6 md:px-10 lg:px-14 mb-5">
//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           speed={800}
//           slidesPerView={1}
//           pagination={{
//     clickable: true,
//   }}
//         >
//           {/* ===== Slide 1 ===== */}
//           <SwiperSlide>
//             <div classNameName="herosection md:p-4 p-2 ">
//               <div classNameName="herosection-inner hero-slide-1 grid lg:grid-cols-[50%_42%] md:grid-cols-[60%_42%]  bg-white md:px-10 px-3 flex align-middle">
//                 <div classNameName="md:py-12 py-4">
//                   <h2 classNameName="heading-2 font-lustria mb-5 md:text-left text-center">
//                     Best <span classNameName="primary-text"> Software <br /> Development</span> Company for Scalable Digital Solutions
//                   </h2>

//                   <p classNameName="mb-5 font-notosans B-1 md:text-left text-center">
//                     Dousoft IT is <span classNameName="primary-text ">a trusted, affordable, and top software development company</span> that delivers innovative digital solutions for entrepreneurs, SMEs, and enterprises across the globe. We assist businesses in transforming their concepts into safe, flexible and highly-performing software solutions by utilizing the latest technologies and established methods of development.
//                   </p>

//                   <button classNameName="my-7 sm:my-0 button rounded-full flex items-center md:justify-self-start justify-self-center" style={{ width: "fit-content" }}>
//                     Start a Project
//                     <img src="/assets/button_arrow.png" classNameName="ml-2" />
//                   </button>
//                 </div>

//                 <div classNameName="flex md:justify-center justify-start hero-teams-outer">
//                   <div classNameName="hero-teams sm:bg-white p-3 h-fit">
//                     <p classNameName="B-1 font-notosans">
//                       Trusted by 500+ teams to  <br />empower  2,00,000+ people
//                     </p>
//                     <div classNameName="flex">
//                       <img src="/assets/hero-teams.svg" />
//                       <p classNameName="heading-2 font-light">+</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* ===== Slide 2 (NEW content added) ===== */}
//           <SwiperSlide>
//             <div classNameName="herosection md:p-4 p-2">
//               <div classNameName="herosection-inner hero-slide-2 grid lg:grid-cols-[50%_42%] md:grid-cols-[60%_42%]  bg-white md:px-10 px-3 flex align-middle">
//                 <div classNameName="md:py-12 py-4">
//                   <h2 classNameName="heading-2 font-lustria mb-5 md:text-left text-center">
//                     Leading <span classNameName="primary-text"> Software <br /> Development  </span> Company Delivering Scalable Solutions
//                   </h2>

//                   <p classNameName="mb-5 font-notosans B-1 md:text-left text-center">
//                    Dousoft IT is a <span classNameName="primary-text">trusted and cost-effective software development company </span> delivering innovative digital solutions to entrepreneurs, SMEs, and enterprises worldwide. We help businesses transform ideas into secure, scalable, and high-performance software using modern technologies and proven development practices.
//                   </p>

//                   <button classNameName="button my-7 sm:my-0 rounded-full flex items-center md:justify-self-start justify-self-center" style={{ width: "fit-content" }}>
//                     Start a Project
//                     <img src="/assets/button_arrow.png" classNameName="ml-2" />
//                   </button>
//                 </div>

//                 <div classNameName="flex md:justify-end justify-start ">
//                   <div classNameName="hero-teams-2 sm:bg-white p-3 h-fit overflow-hidden">
//                    <p classNameName="B-1 font-notosans">
//                       Trusted by 500+ teams to <br /> empower  2,00,000+ people
//                     </p>
//                     <div classNameName="flex">
//                       <img src="/assets/hero-teams.svg" />
//                       <p classNameName="heading-2 font-light">+</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </>
//   );
// };

// export default Herosection;


"use client"
import React from 'react'
import { useState , useEffect } from 'react';

const herosection = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % 2); // 2 = total slides
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
       <section className="hero ">
        <div className="hero-grid"></div>
           <div className="max-w-7xl mx-auto px-4 container">
            <div className="hero-content">
                <div className="hero-text active">
                    <h2 className="heading-2">Best <span>Software Development</span> Company for <span>Scalable</span>
                        Solutions</h2>
                    <p className="B-1">Dousoft IT delivers innovative, trusted, and affordable digital solutions for
                        entrepreneurs and enterprises globally.</p>
                </div>
                <div className="hero-text">
                    <h2 className="heading-2">Build <span>Smart Dashboards</span> & Systems for <span>Growing</span>
                        Businesses</h2>
                    <p className="B-1">We design secure, data-driven dashboards that scale perfectly with your business
                        growth and requirements.</p>
                </div>

                <div className="hero-buttons">
                    <a href="#" className="btn primary">Start a Project</a>
                    <a href="#" className="btn outline">View Portfolio</a>
                </div>
                <div className="trust-badge">✔ Trusted by 500+ businesses worldwide</div>
            </div>

            <div className="hero-mockup">
                <div className="dashboard active">
                    <img src="https://cdn.dribbble.com/userupload/17730953/file/original-05a2f18aae02857f16dc660924a28639.png?format=webp&resize=800x600"
                        alt="Dashboard 1"/>
                </div>
                <div className="dashboard">
                    <img src="https://cdn.dribbble.com/userupload/11926853/file/original-2a0e09a5ff8afff77bbfbfd85990098f.png?format=webp&resize=800x600"
                        alt="Dashboard 2"/>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default herosection
