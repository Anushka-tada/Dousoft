/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Counter from '../components/Counter'
import WhyChooseUs from '../components/WhyChooseUs'
import { useState , useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import HeroSection from '../components/Herosection2'
import FooterTop from '../components/FooterTop'

const missions = [
    {
        img: "/assets/mission_1.png",
        heading:"Our Core Mission: Driving Digital Growth Through Technology",
        para: [
            "Our main goal is to help businesses succeed in the fast-changing digital age by providing custom software solutions to solve the real problems facing businesses. We are focused on developing technologies that are not just creative but as well practical, user-friendly and in alignment with the business goals of our clients.",

            "By combining technical expertise, industry knowledge, and Agile methodologies, we ensure every solution we deliver adds measurable value and supports sustainable digital transformation"
        ]
    },
     {
        img: "/assets/mission_2.png",
        heading:"Building Scalable and Future-Ready Digital Solutions",
        para: [
            "We're dedicated to creating safe quality, high-end, and scalable software solutions that span mobile, web, AI, ERP, IoT Enterprise platforms. Our goal is to ensure the top quality standards while ensuring flexibility and efficiency in every phase of development.",

            "Continuous testing and a organized Agile processes, as well as open communications, we guarantee that our clients get solutions that are secure, future-proof and built to grow with the business."
        ]
    },
     {
        img: "/assets/mission_3.png",
        heading:"Client-Centric Approach at the Heart of Our Mission",
        para: [
            "In Dousoft IT Solutions, our goal is to go beyond the delivery of projects. We aim to establish long-term relationships by getting to know the industry of each client, their issues, and goals. Each solution we design is designed to enhance operational efficiency, enhance user experience, and increase competitive advantages.",

            "We believe that client success defines our success, and this philosophy drives our commitment to transparency, affordability, and consistent results"
        ]
    },
        {
        img: "/assets/mission_4.png",
        heading:"Empowering Businesses Across Industries",
        para: [
            "Our goal is to serve various industries like healthcare finance, finance, e-commerce real estate, education and startup companies with tailored digital solutions. We concentrate on developing software that matches real-world workflows and compliance requirements and expectations of customers.",

            "Through the use of cross-industry expertise We help companies adopt technology that improves efficiency, enhances decision-making and boosts the pace of digital transformation"
        ]
    },
       {
        img: "/assets/mission_5.png",
        heading:"Our Commitment to Innovation and Continuous Improvement",
        para: [
            "Innovation is the core of our work. We continually adopt the latest technology, new frameworks and best methods to provide better and more efficient solutions. From AI-driven automation to cloud-based scalable solutions, we help companies remain competitive in a constantly changing digital world.",

            "Our Agile-driven culture ensures continuous learning, improvement, and adaptability--allowing us to deliver value-driven solutions in a fast and transparent manner"
        ]
    },
]

const visions = [
    {
        img: "/assets/vision_1.png",
        heading:"Our Long-Term Vision: Enabling Digital Excellence Worldwide",
        para: [
            "Our vision for the future is to help entrepreneurs, small- and medium-sized enterprises, and companies across industries with modern software solutions that can respond to changing business needs and market requirements. We seek to connect the gap between technology and business strategy by creating solutions that are effective, reliable and driven by performance.",

            "Through continuous improvement of our capabilities, and by embracing the latest technology, we aim to establish Dousoft IT Solutions as a top global IT service provider that is known for its quality integrity, transparency, and cost-effective service delivery"
        ]
    },
     {
        img: "/assets/vision_2.png",
        heading:"Vision for Technology-Driven Business Transformation",
        para: [
            "We envision a technology ecosystem where businesses can scale confidently with robust web, mobile, AI, ERP, IoT, and enterprise solutions. Our goal is to design and develop software that supports long-term scalability, enhances efficiency, and simplifies complex business processes.",

            "Through Agile development practices, continuous testing, and client collaboration, we aim to deliver solutions that evolve with changing business requirements and technological advancements"
        ]
    },
     {
        img: "/assets/vision_3.png",
        heading:"Vision Built on Innovation and Continuous Growth",
        para: [
            "We envision a technological environment where businesses can grow comfortably using solid mobile, web AI, ERP IoT, enterprise solutions. Our mission is to create and build software that allows for long-term scaling, improves efficiency and simplifies complicated business procedures.",

            "With Agile development techniques that include continuous testing and collaboration with our clients We strive to create solutions that adapt to evolving business needs and technological advances"
        ]
    },
        {
        img: "/assets/vision_4.png",
        heading:"Client-Centric Vision for Long-Term Partnerships",
        para: [
            "Our goal isn't only about delivering projects, it is about forming long-term relationships that are built on trust, openness and mutual achievement. We aim to fully know the industries of our clients, their objectives, and problems so we can offer solutions that are truly supportive of their journey to growth.",

            "We aim to be a strategic technology partner that businesses can rely on at every stage of their digital transformation—from idea validation to deployment and ongoing optimization"
        ]
    },
       {
        img: "/assets/vision_5.png",
        heading:"Vision Across Industries and Global Markets",
        para: [
            "Dousoft IT Solutions envisions serving various industries like healthcare, finance, ecommerce, real estate, education travel, and new startups by providing industry-specific digital solutions. Our aim is to develop technology that works with real-world workflows, conformance standards, and the expectations of our customers in all global markets"
        ]
    },
]

const about = [
    {
        img: "/assets/about_1.png",
        heading:"Commitment to Quality and Reliability",
        para: [
            "Quality is the most important thing for us at Dousoft IT Solutions. We're dedicated to providing safe, stable and highly-performing software solutions that are in line with industry standards and customer expectations. Our well-organized Agile development process, continuous testing and quality assurance processes assure reliability at all stages of the lifecycle",

            "We believe quality-driven development leads to long-term success, reduced risk, and better user experiences"
        ]
    },
     {
        img: "/assets/about_2.png",
        heading:"Client-Centricity and Trust",
        para: [
            "Clients are the heart all we work. We are committed to transparency, open communication, and collaboration. We ensure that our clients' input in the process of development. Through a thorough understanding of business goals as well as industry-specific challenges and the requirements of users We provide solutions that make measurable impacts.",

            "Trust is earned through consistency, accountability, and results—and we strive to be a reliable technology partner for every client we serve"
        ]
    },
     {
        img: "/assets/about_3.png",
        heading:"Innovation with Purpose",
        para: [
            "Innovative thinking within Dousoft IT Solutions is driven by the need to succeed, not by trends. We concentrate on utilizing modern technology such as automation, AI and scalable structures to address real-world business issues. Our expertise lies in developing solutions that are future-proof, flexible, adaptable, and in tune to the changing needs of the market.",

            "By continuously learning and improving Our solutions are relevant and competitive in a constantly evolving digital landscape"
        ]
    },
        {
        img: "/assets/about_4.png",
        heading:"Transparency and Integrity",
        para: [
            "We believe in honesty in every contact. The transparent way we approach pricing, project deadlines and deliverables means that clients have complete clarity and confidence. We believe that ethical conduct in business and honesty of communication is crucial to build lasting relationships and sustaining growth.",

            "Transparency strengthens trust—and trust strengthens partnerships."
        ]
    },
       {
        img: "/assets/about_5.png",
        heading:"Affordability Without Compromising Quality",
        para: [
            "The concept of affordability is the main goal for us at Dousoft IT Solutions. We are committed to making high-quality software development affordable to small- and medium-sized enterprises, startups as well as large corporations. Our flexible engagement plans and cost-effective solutions guarantee customers get the best value without sacrificing performance or security."
        ]
    },
]

const timelineData = [
    {
        year:"2022",
        title:"Where It All Began",
        desc:"Dousoft IT Solutions was founded in 2022 with a distinct commitment to providing high-quality, cost-effective and high-quality software solutions. The year 2022 was all about laying solid foundations both technically and culturally"
    },
     {
        year:"2023",
        title:"Team Growth & Process ",
        desc:"By 2023 Dousoft IT Solutions entered the growth phase. With increased demand from clients and we grew our team and established more streamlined Agile workflows to increase efficiency and efficiency."
    },
     {
        year:"2024",
        title:"Capability Expansion",
        desc:"In 2024 Dousoft IT Solutions had become a trusted digital service provider for startups, small businesses and expanding companies. Dousoft IT Solutions grew its capabilities in AI solutions automation, ERP systems IoT, as well as advanced testing, which allows us to tackle more difficult business problems."
    },
     {
        year:"2025",
        title:"Where It All Began",
        desc:"Dousoft IT Solutions was founded in 2022 with a distinct commitment to providing high-quality, cost-effective and high-quality software solutions. The year 2022 was all about laying solid foundations both technically and culturally"
    }
]

const page = () => {

    const [activeTab, setActiveTab] = useState("mission");

    const dataMap = {
  mission: missions,
  vision: visions,
  about: about,
};

const currentData = dataMap[activeTab];

const swiperRef = useRef(null);


const [currentIndex, setCurrentIndex] = useState(0);
const visibleCards = 3;

const nextSlide = () => {
  if (currentIndex + visibleCards < timelineData.length) {
    setCurrentIndex(currentIndex + 1);
  }
};

const prevSlide = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
};


  return (
    <div >
        <Navbar/>

        {/* herosection */}

        {/* <div className='about-herosection mb-5'>
         <div className='about-herosection-circle' style={{border:"8px solid #D1D1D1"}}>
           <div className="about-herosection-content">
    <h3 className="heading-2 font-lustria mb-3 about-heading ">About Us</h3>
   <div className='about-hero-p'>
     <p className="B-1 font-notosans mb-5 ">
      Read more about us. Our mission, our vision, our success and many other you might love
    </p>
   </div>

    <p className="heading-7 font-lustria bg-white sm:p-3 p-2 inline-block btn" >
      Home {">"} About
    </p>
  </div>
         </div>
        </div> */}
        <HeroSection
         title="About Us"
        description="Read more about us. Our mission, our vision, our success and many other you might love"
        breadcrumb="Home > About"
        />

        <div className='px-3 sm:px-6 md:px-10 lg:px-14  who-we-about grid lg:grid-cols-2 gap-5 py-6'>

            <div className=" who-we-are min-w-full" style={{minWidth: "100%"}}>
           <button className="flex gap-2 B-3 py-3 px-5 rounded-4xl items-center mb-4">
            <img src="/assets/green_dot.svg" className="h-fit" ></img>
            Who We Are
           </button>

            <h2 className="heading-who-we font-lustria mb-5">
              Your <span className="primary-text">Reliable Partner</span> in
              Digital Transformation
            </h2>

            <p className="mb-3 font-notosans B-1">
             In Dousoft IT, we combine the expertise of technology with business knowledge to create customized software solutions that promote the growth of your business, increase efficiency and competitive advantages. Our skilled team of developers and testers, designers, and digital strategists collaborate to deliver tangible outcomes.
            </p>
             
             <p className="mb-3 font-notosans B-1">
            Our skilled team of developers, testers, designers, and digital strategists works collaboratively throughout every stage of the development lifecycle. From idea validation and UI/UX design to development, testing, deployment, and ongoing optimization, we ensure that every solution is secure, scalable, and future-ready.
            </p>

            <p className="mb-6 font-notosans B-1">
             By leveraging modern technologies, Agile methodologies, and best development practices, we deliver high-quality digital products that are reliable, user-friendly, and aligned with business objectives. Our commitment to transparency, quality, and continuous improvement allows us to build long-term partnerships and deliver tangible outcomes that help businesses grow and succeed in a rapidly evolving digital landscape.
            </p>


            <div className="flex gap-4 mb-7 overflow-y-scroll" >
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

          </div>

          <div className='flex lg:justify-start justify-center'>
            <img src='/assets/who-we-2nd.png'></img>
          </div>
        </div>

         {/* number section */}
     <div className=" py-12 grid md:grid-cols-4 grid-cols-2 number_section">

  <div className="flex flex-col text-center md:mb-0 mb-5">
    <Counter end={98} suffix="%" />
    <p className="B-3 text-white">Client Satisfaction</p>
  </div>

  <div className="flex flex-col text-center md:mb-0 mb-5">
    <Counter end={250} suffix="+" />
    <p className="B-3 text-white">Projects Delivered</p>
  </div>

  <div className="flex flex-col text-center">
    <Counter end={15} suffix="+" />
    <p className="B-3 text-white">Years Experience</p>
  </div>

  <div className="flex flex-col text-center">
    <Counter end={24} suffix="/7" />
    <p className="B-3 text-white">Support Active</p>
  </div>

</div>
        
        <WhyChooseUs/>

        {/* mission vision section */}

        <div className='mission-vison px-3 sm:px-6 md:px-10 lg:px-14 py-5'>
            <div className='btns flex sm:gap-2 p-2 justify-center w-fit rounded-full justify-self-center'>
              <div  onClick={() => setActiveTab("mission")}
    className={` sm:px-4 px-2 py-2 rounded-full cursor-pointer ${
      activeTab === "mission" ? "btn-active" : ""
    }`}>
                <p className='heading-5 font-lustria vision-btn'>Our Mission</p>
              </div>
               <div  onClick={() => setActiveTab("vision")}
    className={` sm:px-4 px-2 py-2 rounded-full cursor-pointer ${
      activeTab === "vision" ? "btn-active" : ""
    }`}>
                <p className='heading-5 font-lustria vision-btn'>Our Vision</p>
              </div>
               <div onClick={() => setActiveTab("about")}
    className={` sm:px-4 px-2 py-2 rounded-full cursor-pointer ${
      activeTab === "about" ? "btn-active" : ""
    }`}>
                <p className='heading-5 font-lustria vision-btn'>Our value</p>
              </div>
            </div>

            <div className='grid lg:grid-cols-2 gap-5 mt-9 mb-12'>
                <div>
                   <h3 className='heading-3 font-lustria mb-4 text-center'>Our Mission at <span className='red'>Dousoft IT Solution</span></h3>
                   <p className='B-1 font-notosans text-center para'>We are Dousoft IT Solutions, our goal is to provide businesses of all sizes with secure affordable, scalable, and cost-effective digital solutions that promote the growth, efficiency and long-term growth and success. We strive to become a dependable technology partner for small and medium-sized businesses, startups and large enterprises by turning concepts into high-quality, secure software solutions utilizing the latest technology and well-tested development practices</p>
                </div>
                <div>
                    <img src='/assets/our-mission.png'></img>
                </div>
            </div>

            {currentData.map((item, index) => {
  const isImageLeft = index % 2 === 0;

  return (
    <div key={index} >

      {isImageLeft ? (
  <div className="mission-image-left grid lg:grid-cols-2 sm:gap-9 gap-4 sm:p-5 p-3 items-start mb-7">

     <div className='image-wrapper h-auto'>
               <img src={item.img} ></img>
            </div>
    
    <div className='sm:me-4'>
        <h5 className='heading-5 font-lustria sm:mb-6 mb-4'>
      {item.heading}
    </h5>

     {item.para.map((text, i) => (
          <p key={i} className='B-1 font-notosans mb-4 para'>{text}</p>
        ))}
        </div>
        <div>
        
            </div>
  </div>
) : (
  <div className="mission-image-left flex flex-col lg:flex-row sm:gap-9 gap-4 sm:p-5 p-3 items-start mb-7"> 
      <div className='image-wrapper  h-auto order-1 lg:order-2 w-full lg:w-1/2'>
               <img src={item.img} ></img>
            </div>
    
    <div className='me-4 order-2 lg:order-1 w-full lg:w-1/2'>
        <h5 className='heading-5 font-lustria sm:mb-6 mb-4'>
      {item.heading}
    </h5>

     {item.para.map((text, i) => (
          <p key={i} className='B-1 font-notosans mb-4 para'>{text}</p>
        ))}
        </div>
      
   

        <div>
        
            </div>
  </div>
)}

     
    </div>
  );
})}


        </div>     

        {/* grow and innovation section */}

       <div className='growth-section sm:pt-8 pt-3'>
            <div className="flex flex-col justify-center items-center mb-10">
          <div className="flex growth_btn items-center rounded-full py-3 px-5 B-3 bg-white mb-5">
            <img src="/assets/green_dot.svg" className="me-2"></img>
           Journey So Far
          </div>

          <h5 className='heading-5 font-lustria growth-heading'>A timeline of growth and innovation</h5>


            </div>

         {/* timeline slider */}

          <div className="relative">
        <div className="absolute top-6 left-0 w-full h-[3px] horizontal-line"></div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="pb-20 " style={{marginLeft:"5%" , marginRight:"5%"}}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          loop={true}
loopFillGroupWithBlank={true}
        >
          {timelineData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative sm:pb-20 pb-7">

                {/* Red Dot on Line */}
                <div className="flex justify-start mb-18 " style={{marginLeft:"14%" , marginTop:"1%"}}>
                  <div className="w-10 h-10 red-circle rounded-full z-10"></div>
                </div>

                {/* Card */}
                <div className="relative timeline-card shadow-md p-6 ">

                  {/* White Dot */}
                  <div className="absolute left-6 w-6 h-6 bg-white  rounded-full" style={{top:"3%"}}></div>

                  {/* Dotted Line Image */}
                  <img
                    src="/assets/dotted_line_green.svg"
                    className="absolute "
                    alt=""
                    style={{top:"-30%"}}
                  />

              <div className='flex gap-3 items-center'>
                <div style={{width:"90%"}}>
                <img src='/assets/timeline_card.png'></img>
                </div>
                <div>
                     <div className='flex justify-between'>
                   <h4 className="heading-6 ">
                    {item.year}
                  </h4>
                  <div className='bg-white sm:px-3 sm:py-2.5 px-2 py-1.5 rounded-full red-top-arrow'>
                    <img src='/assets/red_top_arrow.png'></img>
                  </div>
                 </div>
                  <h5 className="heading-7 font-lustria timeline-title">{item.title}</h5>
                  <p className="B-3 mt-2 time-line-desc">
                    {item.desc}
                  </p>
                </div>
              </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

           <div className='flex justify-center justify-self-center items-center growth-btn2 px-2'>
         <div className="px-2 sm:ps-6 ps-3 sm:pe-4 pe-3 py-2 side-btn" style={{borderRight:"1px solid white"}}  onClick={() => swiperRef.current.slidePrev()}>
            <img src='/assets/white_prev.png'></img>
         </div>
         <div className="sm:px-8 px-3 py-2">
            <h4 className='heading-5 font-lustria text-white '>Our Story in Motion</h4>
         </div>
          <div className="px-2 sm:pe-6 pe-3 sm:ps-4 ps-3 py-2 side-btn" style={{borderLeft:"1px solid white"}} onClick={() => swiperRef.current.slideNext()}>
            <img src='/assets/white_next.png'></img>
         </div>
           </div>
       </div>


      
      
       
        <FooterTop/>

        <Footer/>
      
    </div>
  )
}

export default page
