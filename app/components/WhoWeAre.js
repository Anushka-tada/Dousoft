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
//     <section ref={containerRef} className="parallax-container">
//       <div ref={pinRef} className="parallax-pin-wrapper">
//         {/* IMAGE */}
//         <div ref={imageRef} className="image-wrapper sm:block hidden">
//           <img
//             src="/assets/2nd_section.svg"
//             alt="Dousoft IT"
//             className="hero-image "
//           />
//         </div>

//         {/* CONTENT */}
//         <div ref={contentRef} className="content-section">
//           <div className="content-wrapper who-we-are">
//            <button className="flex gap-2 B-3 py-3 px-5 rounded-4xl items-center">
//             <img src="/assets/red_dot.png" className="h-fit" ></img>
//             Who We Are
//            </button>

//             <h2 className="heading-2 font-lustria mb-5">
//               Your <span className="primary-text">Reliable Partner</span> in
//               Digital Transformation
//             </h2>

//             <p className="mb-6 font-notosans B-1">
//              In Dousoft IT, we combine the expertise of technology with business knowledge to create customized software solutions that promote the growth of your business, increase efficiency and competitive advantages. Our skilled team of developers and testers, designers, and digital strategists collaborate to deliver tangible outcomes.
//             </p>

//             <div className="flex gap-4 mb-7 overflow-scroll">
//                      <button className="btn rounded-full flex items-center p-2 px-3 gap-2" style={{ width: "fit-content" }}>
//                       <img src="/assets/ai_red.svg" className="ml-2" />
//                    AI Solutions

//                   </button>
//                    <button className="btn rounded-full flex items-center p-2 px-3 gap-2" style={{ width: "fit-content" }}>
//                       <img src="/assets/rocket_red.svg" className="ml-2" />
//                    Digital Strategy

//                   </button>
//                    <button className="btn rounded-full flex items-center p-2 px-3 gap-2" style={{ width: "fit-content" }}>
//                       <img src="/assets/growth_red.svg" className="ml-2" />
//                    Business Growth

//                   </button>
//                   </div>

//                    <div ref={imageRef} className="image-wrapper sm:hidden block">
//           <img
//             src="/assets/2nd_section.svg"
//             alt="Dousoft IT"
//             className="hero-image  mobile-hero-image"
//           />
//         </div>

//             <button className="button rounded-full flex items-center sm:justify-self-start justify-self-center mt-4">
//               Explore Our Mission
//               <img src="/assets/button_arrow.png" className="ml-2" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Scroll filler */}
//       {/* <div className="scroll-filler"></div> */}
//     </section>
//   );
// };

// export default WhoWeAreParallax;

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAreParallax = () => {
  const containerRef = useRef(null);
  const pinRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 992;

    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: pinRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 0.6,
          pinSpacing: true,
        },
      });

      tl.to(
        imageRef.current,
        {
          width: "50%",
          ease: "power2.inOut",
        },
        0
      ).to(
        contentRef.current,
        {
          x: "0%",
          opacity: 1,
          ease: "power2.inOut",
        },
        0
      );
    } else {
      // Mobile reset
      gsap.set(imageRef.current, { width: "100%" });
      gsap.set(contentRef.current, {
        x: "0%",
        opacity: 1,
      });
      ScrollTrigger.getAll().forEach((t) => t.kill());
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
    <section ref={containerRef} className="parallax-container lg:block hidden">
      <div ref={pinRef} className="parallax-pin-wrapper">
        {/* IMAGE */}
        <div ref={imageRef} className="image-wrapper lg:block hidden">
          <img
            src="/assets/2nd_section.svg"
            alt="Dousoft IT"
            className="hero-image"
          />
        </div>

        {/* CONTENT */}
        <div ref={contentRef} className="content-section">
          <div className="content-wrapper who-we-are">
           <button className="flex gap-2 B-3 py-3 px-5 rounded-4xl items-center">
            <img src="/assets/red_dot.png" className="h-fit" ></img>
            Who We Are
           </button>

            <h2 className="heading-who-we font-lustria mb-5">
              Your <span className="primary-text">Reliable Partner</span> in
              Digital Transformation
            </h2>

            <p className="mb-6 font-notosans B-1">
             In Dousoft IT, we combine the expertise of technology with business knowledge to create customized software solutions that promote the growth of your business, increase efficiency and competitive advantages. Our skilled team of developers and testers, designers, and digital strategists collaborate to deliver tangible outcomes.
            </p>

            <div className="flex gap-4 mb-7">
                     <button className="btn rounded-full flex items-center p-2 px-3 gap-2" style={{ width: "fit-content" }}>
                      <img src="/assets/ai_red.svg" className="ml-2" />
                   AI Solutions

                  </button>
                   <button className="btn rounded-full flex items-center p-2 px-3 gap-2" style={{ width: "fit-content" }}>
                      <img src="/assets/rocket_red.svg" className="ml-2" />
                   Digital Strategy

                  </button>
                   <button className="btn rounded-full flex items-center p-2 px-3 gap-2" style={{ width: "fit-content" }}>
                      <img src="/assets/growth_red.svg" className="ml-2" />
                   Business Growth
                  </button>
                  </div>

                    {/* <div ref={imageRef} className="image-wrapper-mobile">
         <img
             src="/assets/2nd_section.svg"
             alt="Dousoft IT"
             className="hero-image  mobile-hero-image"
           />
         </div> */}

            <button className="button rounded-full flex items-center">
              Explore Our Mission
              <img src="/assets/button_arrow.png" className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll filler */}
      {/* <div className="scroll-filler"></div> */}
    </section>

     <section className=" lg:hidden block">
      
       

        {/* CONTENT */}
        <div  className="py-3 sm:px-8 px-3 bg-white">
          <div className="content-wrapper who-we-are">
           <button className="flex gap-2 B-3 py-3 px-5 rounded-4xl items-center mb-3">
            <img src="/assets/red_dot.png" className="h-fit" ></img>
            Who We Are
           </button>

            <h2 className="heading-who-we font-lustria mb-5">
              Your <span className="primary-text">Reliable Partner</span> in
              Digital Transformation
            </h2>

            <p className="mb-6 font-notosans B-1">
             In Dousoft IT, we combine the expertise of technology with business knowledge to create customized software solutions that promote the growth of your business, increase efficiency and competitive advantages. Our skilled team of developers and testers, designers, and digital strategists collaborate to deliver tangible outcomes.
            </p>

            <div className="flex gap-4 mb-7 overflow-scroll">
                     <button className="btn rounded-full flex items-center p-2 px-3 gap-2 whitespace-nowrap" style={{ width: "fit-content" }}>
                      <img src="/assets/ai_red.svg" className="ml-2" />
                   AI Solutions

                  </button>
                   <button className="btn rounded-full flex items-center p-2 px-3 gap-2 whitespace-nowrap" style={{ width: "fit-content" }}>
                      <img src="/assets/rocket_red.svg" className="ml-2" />
                   Digital Strategy

                  </button>
                   <button className="btn rounded-full flex items-center p-2 px-3 gap-2 whitespace-nowrap" style={{ width: "fit-content" }}>
                      <img src="/assets/growth_red.svg" className="ml-2" />
                   Business Growth
                  </button>
                  </div>

                    <div  className="image-wrapper-mobile p-3">
       <div className="image-wrapper-mobile-inner">
          <img
             src="/assets/2nd_section.svg"
             alt="Dousoft IT"
             className=" mobile-hero-image"
           />
       </div>
         </div>

            <button className="button rounded-full flex items-center mt-5 justify-self-center">
              Explore Our Mission
              <img src="/assets/button_arrow.png" className="ml-2" />
            </button>
          </div>
        </div>
     

     
    </section>

 </>
  );
};

export default WhoWeAreParallax;