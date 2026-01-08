"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// core css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// ✅ correct module imports
import { Pagination, Autoplay,} from "swiper/modules";



const testimonials = [
  {
    type: 'imageOnly',
    image: '/assets/testi_1.jpeg',
  },
  {
    type: 'imageOnly',
    image: '/assets/testi_2.jpeg',
  },
  
  {
    type: 'imageText',
    topimg:"/assets/ruchika_top.png",
    image: '/assets/testi_3.webp',
    name: 'Ruchika Shrivastav',
    role: 'CEO of Bright Tech',
  },
  {
    type: 'imageOnly',
    image: 'https://s3-alpha.figma.com/hub/file/2230775605198347133/d4d609cb-c4ea-4be7-a0ae-bba0e98d9234-cover.png',
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial mt-10 px-5">
    <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={30}
  slidesPerView={3}
  loop={true}
  autoplay={{
    delay: 3000,              // 3 sec
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}   // 🔵 dots ON
  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>


        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            {/* <div className="card h-full flex items-center justify-center"> */}
              {testimonial.type === 'imageOnly' ? (
                  <div className="card h-full flex items-center justify-center mb-16">
                <img
                  src={testimonial.image}
                  alt="testimonial"
                  className=""
                />
                </div>
              ) : (
                  <div className="card h-full  p-5 relative overflow-hidden card2 mb-16" style={{
    backgroundImage: `url(${testimonial.image})`,
  }}>
               
                   <img
                  src={testimonial.topimg}
                  alt="testimonial"
                  className='h-auto'
                />
                  <div className='absolute bottom-10'>
                    <h3 className="font-lustria heading-7 mb-2">{testimonial.name}</h3>
                    <p className="B-1 font-notosans text-white">{testimonial.role}</p>
                  </div>
                </div>
             
              )}
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
