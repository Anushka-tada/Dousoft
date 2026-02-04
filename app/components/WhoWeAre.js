

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const WhoWeAreParallax = () => {
//   const containerRef = useRef(null);
//   const pinRef = useRef(null);
//   const imageRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const isMobile = window.innerWidth <= 992;

//     if (!isMobile) {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           pin: pinRef.current,
//           start: "top top",
//           end: "+=200%",
//           scrub: 0.6,
//           pinSpacing: true,
//         },
//       });

//       tl.to(
//         imageRef.current,
//         {
//           width: "50%",
//           ease: "power2.inOut",
//         },
//         0
//       ).to(
//         contentRef.current,
//         {
//           x: "0%",
//           opacity: 1,
//           ease: "power2.inOut",
//         },
//         0
//       );
//     } else {
//       // Mobile reset
//       gsap.set(imageRef.current, { width: "100%" });
//       gsap.set(contentRef.current, {
//         x: "0%",
//         opacity: 1,
//       });
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     }

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <>
//     <section ref={containerRef} classNameName="parallax-container lg:block hidden">
//       <div ref={pinRef} classNameName="parallax-pin-wrapper">
      
//         <div ref={imageRef} classNameName="image-wrapper lg:block hidden">
//           <img
//             src="/assets/2nd_section.svg"
//             alt="Dousoft IT"
//             classNameName="hero-image"
//           />
//         </div>

       
//         <div ref={contentRef} classNameName="content-section">
//           <div classNameName="content-wrapper who-we-are">
//            <button classNameName="flex gap-2 B-3 py-3 px-5 rounded-4xl items-center">
//             <img src="/assets/red_dot.png" classNameName="h-fit" ></img>
//             Who We Are
//            </button>

//             <h2 classNameName="heading-who-we font-lustria mb-5">
//               Your <span classNameName="primary-text">Reliable Partner</span> in
//               Digital Transformation
//             </h2>

//             <p classNameName="mb-6 font-notosans B-1">
//              In Dousoft IT, we combine the expertise of technology with business knowledge to create customized software solutions that promote the growth of your business, increase efficiency and competitive advantages. Our skilled team of developers and testers, designers, and digital strategists collaborate to deliver tangible outcomes.
//             </p>

//             <div classNameName="flex gap-4 mb-7">
//                      <button classNameName="btn rounded-full flex items-center p-2 px-3 gap-2" style={{ width: "fit-content" }}>
//                       <img src="/assets/ai_red.svg" classNameName="ml-2" />
//                    AI Solutions

//                   </button>
//                    <button classNameName="btn rounded-full flex items-center p-2 px-3 gap-2" style={{ width: "fit-content" }}>
//                       <img src="/assets/rocket_red.svg" classNameName="ml-2" />
//                    Digital Strategy

//                   </button>
//                    <button classNameName="btn rounded-full flex items-center p-2 px-3 gap-2" style={{ width: "fit-content" }}>
//                       <img src="/assets/growth_red.svg" classNameName="ml-2" />
//                    Business Growth
//                   </button>
//                   </div>

//                     {/* <div ref={imageRef} classNameName="image-wrapper-mobile">
//          <img
//              src="/assets/2nd_section.svg"
//              alt="Dousoft IT"
//              classNameName="hero-image  mobile-hero-image"
//            />
//          </div> */}

//             <button classNameName="button rounded-full flex items-center">
//               Explore Our Mission
//               <img src="/assets/button_arrow.png" classNameName="ml-2" />
//             </button>
//           </div>
//         </div>
//       </div>

     
//     </section>

//      <section classNameName=" lg:hidden block">
      
       

       
//         <div  classNameName="py-3 sm:px-8 px-3 bg-white">
//           <div classNameName="content-wrapper who-we-are">
//            <button classNameName="flex gap-2 B-3 py-3 px-5 rounded-4xl items-center mb-3">
//             <img src="/assets/green_dot.png" classNameName="h-fit" ></img>
//             Who We Are
//            </button>

//             <h2 classNameName="heading-who-we font-lustria mb-5">
//               Your <span classNameName="primary-text">Reliable Partner</span> in
//               Digital Transformation
//             </h2>

//             <p classNameName="mb-6 font-notosans B-1">
//              In Dousoft IT, we combine the expertise of technology with business knowledge to create customized software solutions that promote the growth of your business, increase efficiency and competitive advantages. Our skilled team of developers and testers, designers, and digital strategists collaborate to deliver tangible outcomes.
//             </p>

//             <div classNameName="flex gap-4 mb-7 overflow-scroll">
//                      <button classNameName="btn rounded-full flex items-center p-2 px-3 gap-2 whitespace-nowrap" style={{ width: "fit-content" }}>
//                       <img src="/assets/ai_red.svg" classNameName="ml-2" />
//                    AI Solutions

//                   </button>
//                    <button classNameName="btn rounded-full flex items-center p-2 px-3 gap-2 whitespace-nowrap" style={{ width: "fit-content" }}>
//                       <img src="/assets/rocket_red.svg" classNameName="ml-2" />
//                    Digital Strategy

//                   </button>
//                    <button classNameName="btn rounded-full flex items-center p-2 px-3 gap-2 whitespace-nowrap" style={{ width: "fit-content" }}>
//                       <img src="/assets/growth_red.svg" classNameName="ml-2" />
//                    Business Growth
//                   </button>
//                   </div>

//                     <div  classNameName="image-wrapper-mobile p-3">
//        <div classNameName="image-wrapper-mobile-inner">
//           <img
//              src="/assets/2nd_section.svg"
//              alt="Dousoft IT"
//              classNameName=" mobile-hero-image"
//            />
//        </div>
//          </div>

//             <button classNameName="button rounded-full flex items-center mt-5 justify-self-center">
//               Explore Our Mission
//               <img src="/assets/button_arrow.png" classNameName="ml-2" />
//             </button>
//           </div>
//         </div>
     

     
//     </section>

//  </>
//   );
// };

// export default WhoWeAreParallax;


import React from 'react'

const WhoWeAre = () => {
  return (
    <div>
      <div className="who-we-are-container main-container py-16 ">
        <div className="hero-card py-10">
           <div className="flex industry_btn items-center rounded-full py-3 px-5 B-3 service-inner-shadow font-lustria w-fit justify-self-center my-4">
            <img src="/assets/white_dot.png" className="me-2"></img>
            Who We Are
          </div>

          <h3 className="heading-3 dark-text">
            Your Reliable Partner in <br /> <span className='primary-text' >Digital Transformation</span>
          </h3>

          <p className="B-1">
            We blend cutting-edge technology with strategic foresight to empower businesses in the digital age,
            delivering sustainable growth and future-ready solutions.
          </p>

          {/* inline style removed, Tailwind added */}
          <div className="features-row mt-8">
            <div className="feature-box">
              <div className="inner-content">
                <div className="icon-circle">
                  <i data-lucide="brain-circuit"></i>
                </div>
                <div className="text">
                  <h6 className="heading-8 font-lustria">AI Solutions</h6>
                  <p className="B-3">Intelligent automation & predictive analytics.</p>
                </div>
              </div>
            </div>

            <div className="feature-box elevated">
              <div className="inner-content">
                <div className="icon-circle">
                  <i data-lucide="compass"></i>
                </div>
                <div className="text">
                  <h6 className="heading-8 font-lustria">Digital Strategy</h6>
                  <p className="B-3">Future-focused roadmaps & innovation.</p>
                </div>
              </div>
            </div>

            <div className="feature-box">
              <div className="inner-content">
                <div className="icon-circle">
                  <i data-lucide="trending-up"></i>
                </div>
                <div className="text">
                  <h6 className="heading-8 font-lustria">Business Growth</h6>
                  <p className="B-3">Scalable models & market expansion.</p>
                </div>
              </div>
            </div>
          </div>

         
                             <button className="button rounded-full flex items-center justify-self-center" >
          Explore Our Mission
          <img src="/assets/button_arrow.png" className="ml-2" />
        </button>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre

