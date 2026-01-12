/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import WhoWeAre from "./components/WhoWeAre";
import Testimonial from "./components/Testimonial";
import { useState } from "react";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";

const futureCards = [
  {
    name:"Web Development Services",
    para:"We create fast, secure and scalable websites that are designed to meet your specific business needs. Starting from business websites, to sophisticated web-based applications, our services provide a superior user experience.",
    subtitle:"Key Highlights",
    points: [
      "Custom web application development",
      "Responsive and SEO-optimized websites",
      "Secure and scalable architecture"
    ]
  },
   {
    name:"Mobile App Development",
    para:"As a leading mobile app development company, we develop user-friendly and feature-rich mobile apps designed for Android, iOS, and cross platform applications.",
    subtitle:"What We Deliver",
    points: [
      "Native and hybrid mobile apps",
      "User-centric UI/UX design",
      "High performance and scalability"
    ]
  },
   {
    name:"Web Design Services",
    para:"Our team of designers creates modern interactive, engaging and conversion-focused web design which help you establish your brand's identity and boost the user experience.",
    subtitle:"What We Deliver",
    points: [
      "UI/UX design",
      "Brand-focused layouts",
      "Mobile-first design approach"
    ]
  },
   {
    name:"AI Solutions",
    para:"Make use of the potential in AI as well as machine-learning to automate your processes as well as gain insights and improve the process of making decisions",
    subtitle:"AI Capabilities",
    points: [
      "Predictive analytics",
      "Intelligent automation",
      "AI-powered business solutions"
    ]
  },
   {
    name:"Digital Marketing Services",
    para:"Increase your online presence by using our results-driven digital marketing services that are designed to boost leads, traffic and converts.",
    subtitle:"Our Marketing Services",
    points: [
      "SEO & content marketing",
      "Social media marketing",
      "Performance-driven campaigns"
    ]
  }
  , {
    name:"Automated Testing Services",
    para:"Make sure that your software is of high quality using our trusted automated testing services to reduce time-to-market and maintain the highest standards.",
    subtitle:"Testing Solutions",
    points: [
      "Functional & regression testing",
      "Automation frameworks",
      "Continuous testing support"
    ]
  }
  , {
    name:"ERP Services",
    para:"We offer custom ERP solutions that streamline operations, increase productivity and consolidate business data",
    subtitle:"ERP Benefits",
    points: [
      "Process automation",
      "Scalable enterprise solutions",
      "Real-time business insights"
    ]
  },
  {
    name:"IOT Solutions",
    para:"Our IoT development services assist companies connect devices, gather information, and streamline processes efficiently and safely.",
    subtitle:"IoT Expertise",
    points: [
      "Smart device integration",
      "Data analytics & monitoring",
      "Secure IoT architecture"
    ]
  }
]

const industryCards = [
  {
    img:"/assets/healthcare_card.svg",
    name: "Healthcare",
    para: "We build secure and reliable healthcare software solutions that prioritize performance...",
  },
  {
    img:"/assets/ecommerce_card.svg",
    name: "E-Commerce & Retail",
    para: "As a top web and app development company, we assist e-commerce businesses grow...",
  },
  {
    img:"/assets/education_card.svg",
    name: "Education & E-Learning",
    para: "We deliver modern digital learning solutions that enhance accessibility...",
  },
  {
    img:"/assets/finance_card.svg",
    name: "Finance & Banking",
    para: "Our trusted software solutions for the finance sector focus on security...",
  },
  {
    img:"/assets/real_state.svg",
    name: "Real Estate",
    para: "We help real estate businesses strengthen their digital presence with...",
  },
  {
    img:"/assets/travel_card.svg",
    name: "Travel & Tourism",
    para: "We design customer-centric travel platforms that simplify booking...",
  },
  
]

const services = [
  "WEBSITE DESIGN & DEVELOPMENT",
  "MOBILE APP DEVELOPMENT",
  "DIGITAL MARKETTING",
  "WEB DESIGN",
  "AI SOLUTIONS",
  "AUTOMATED TESTING SERVICES",
  "IOT SOLUTIONS"
]

const faqs = [
  {
    que:"What makes Dousoft IT a top software development company?",
    ans:"Dousoft IT combines technical expertise, affordable pricing, and a client-centric approach to deliver reliable and scalable software solutions.",

  },
   {
    que:"Do you offer custom software development services?",
    ans:"Dousoft IT combines technical expertise, affordable pricing, and a client-centric approach to deliver reliable and scalable software solutions.",

  },
   {
    que:"Is Dousoft IT suitable for startups and small businesses?",
    ans:"Dousoft IT combines technical expertise, affordable pricing, and a client-centric approach to deliver reliable and scalable software solutions.",

  },
   {
    que:"Do you provide ongoing support and maintenance?",
    ans:"Dousoft IT combines technical expertise, affordable pricing, and a client-centric approach to deliver reliable and scalable software solutions.",

  },
   {
    que:"How can I start a project with Dousoft IT?",
    ans:"Dousoft IT combines technical expertise, affordable pricing, and a client-centric approach to deliver reliable and scalable software solutions.",

  },
]

const footerlinks = [
  {
    name:"WEB DEVELOPMENT",
    links: [
      "web-development-company-india",
      "custom-web-development-india",
      "website-development-services-india",
      "enterprise-web-development-india",
      "web-development-in-india"
    ]
  },
  {
    name:"WEB DESIGN",
    links: [
      "web-design-services-india",
      "website-design-company-india",
      "custom-web-design-india",
      "professional-web-design-services-india",
      "responsive-web-design-india"
    ]
  }
  ,
  {
    name:"APP DEVELOPMENT",
    links: [
      "mobile-app-development-company-india",
      "mobile-app-development-services-india",
      "custom-mobile-app-development-india",
      "enterprise-mobile-app-development-india",
      "best-mobile-app-developers-india"
    ]
  }
  ,
  {
    name:"DIGITAL MARKETING",
    links: [
      "digital-marketing-company-india",
      "digital-marketing-services-india",
      "online-marketing-company-india",
      "nternet-marketing-services-india",
      "best-digital-marketing-agency-india"
    ]
  }
]

const technologies = {
  frontend: [
    { src: "/assets/react.png", alt: "React" },
    { src: "/assets/javascript.png", alt: "JavaScript" },
    { src: "/assets/angular.png", alt: "Angular" },
    { src: "/assets/jquery.png", alt: "jQuery" },
    { src: "/assets/vue.png", alt: "Vue" },
  ],
  backend: [
    { src: "/assets/node.png", alt: "Node.js" },
    // { src: "/assets/express.png", alt: "Express" },
    { src: "/assets/python.png", alt: "Python" },
    { src: "/assets/django.svg", alt: "Django" },
    { src: "/assets/java.png", alt: "Java" },
  ],
  mobile: [
    { src: "/assets/react_native.png", alt: "React Native" },
    { src: "/assets/flutter.png", alt: "Flutter" },
    // { src: "/assets/swift.png", alt: "Swift" },
    // { src: "/assets/kotlin.png", alt: "Kotlin" },
  ],
  webapp: [
    // { src: "/assets/nextjs.png", alt: "Next.js" },
    // { src: "/assets/nuxt.png", alt: "Nuxt.js" },
    // { src: "/assets/laravel.png", alt: "Laravel" },
  ],
  database: [
    { src: "/assets/mysql.png", alt: "MySQL" },
    { src: "/assets/mongodb.svg", alt: "MongoDB" },
    { src: "/assets/postgresql.png", alt: "PostgreSQL" },
  ],
};


const page = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [activeTab, setActiveTab] = useState("frontend"); 

  return (
    <div className="home-page">
      <Navbar />
      
       <Herosection/>

       <div className="herosection-bottom py-5 px-8 overflow-hidden">
          <div className="marquee">
    <div className="marquee-track">
      {[...services, ...services].map((service, index) => (
        <span
          key={index}
          className="marquee-item font-lustria heading-5 text-white"
        >
          ✨ {service} 
        </span>
      ))}
    </div>
  </div>
       </div>

      {/* Future ready section */}

      {/* who we are section */}
      {/* <div className="who-we-are">
        <div className="w-1/2 main py-20 p-10">
           <button className="flex gap-2 B-3 py-3 px-5 rounded-4xl items-center">
            <img src="/assets/red_dot.png" className="h-fit" ></img>
            Who We Are
           </button>

             <h2 className="heading-2 font-lustria mb-5">
                   Your <span className="primary-text">Reliable Partne</span> in Digital Transformation
                  </h2>

                  <p className="mb-5 font-notosans B-1">
                    In Dousoft IT, we combine the expertise of technology with business knowledge to create customized software solutions that promote the growth of your business, increase efficiency and competitive advantages. Our skilled team of developers and testers, designers, and digital strategists collaborate to deliver tangible outcomes.
                  </p>

                  <div className="flex gap-4 mb-7">
                     <button className="btn rounded-full flex items-center p-3 px-4" style={{ width: "fit-content" }}>
                      <img src="/assets/ai_red.svg" className="ml-2" />
                   AI Solutions

                  </button>
                   <button className="btn rounded-full flex items-center p-3 px-4" style={{ width: "fit-content" }}>
                      <img src="/assets/rocket_red.svg" className="ml-2" />
                   Digital Strategy

                  </button>
                   <button className="btn rounded-full flex items-center p-3 px-4" style={{ width: "fit-content" }}>
                      <img src="/assets/growth_red.svg" className="ml-2" />
                   Business Growth

                  </button>
                  </div>

                   <button className="button rounded-full flex items-center" style={{ width: "fit-content" }}>
                    Explore Our Mission
                    <img src="/assets/button_arrow.png" className="ml-2" />
                  </button>
        </div>
      </div> */}

      <WhoWeAre/>

      {/* why choose dousoft IT */}
      <div className="why-choose-us py-9 px-3 sm:px-6 md:px-10 lg:px-16">
          <h2 className="heading-3 font-lustria sm:mb-5 mb-4 text-center">
             Why Choose Dousoft IT?
            </h2>

            <p className="mb-6 font-notosans B-1 text-center">Our approach combines futuristic tech with human-centric design. </p>

            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-14 sm:gap-5 gap-3  items-center">
             <div className="flex lg:flex-col flex-row lg:gap-12 sm:gap-8 gap-3 sm:flex-nowrap flex-wrap">
              <div className="sm:p-7 sm:py-8 p-5 card card-1 ">
               <div className="bg-white rounded-full p-2 px-3 mb-4 w-fit icon">
                <img src="/assets/red_bulb.svg"></img>
               </div>
               <p className="heading-7 font-lustria mb-2">Best-in-Class Expertise</p>
               <p className="B-3 ">We bring years of experience in delivering top-quality software solutions across industries.</p>
              </div>
              <div className="sm:p-7 sm:py-8 p-5 card card-2">
               <div className="bg-white rounded-full p-2 px-3 mb-4 w-fit icon">
                <img src="/assets/clients_red.svg"></img>
               </div>
               <p className="heading-7 font-lustria mb-2">Trusted by Global Clients</p>
               <p className="B-3 ">We are a trusted technology partner with a strong focus on long-term client relationships.</p>
              </div>
             </div>

             <div  className="card-3 sm:p-8 p-6   flex justify-center items-center align-middle relative" style={{borderRadius:"40px"}}>
               <img src="/assets/why_choose_main.svg"></img>

                  <button className="btn rounded-full flex items-center p-2 px-3 gap-2 absolute bg-white B-3" style={{ width: "fit-content" }}>
                      <img src="/assets/green_dot.svg" className="ml-2" />
                   System Optimized  </button>
             </div>

                <div className="flex lg:flex-col flex-row lg:gap-12 sm:gap-8 gap-3 sm:flex-nowrap flex-wrap">
              <div className="sm:p-7 sm:py-8 p-5 card card-1 ">
               <div className="bg-white rounded-full p-2 px-3 mb-4 w-fit icon">
                <img src="/assets/growth_red.svg"></img>
               </div>
               <p className="heading-7 font-lustria mb-2">Affordable & Transparent Pricing</p>
               <p className="B-3 ">Our pricing models are designed to be cost-effective without compromising quality.</p>
              </div>
              <div className="sm:p-7 sm:py-8 p-5 card card-2">
               <div className="bg-white rounded-full p-2 px-3 mb-4 w-fit icon">
                <img src="/assets/support_red.svg"></img>
               </div>
               <p className="heading-7 font-lustria mb-2">End-to-End Support</p>
               <p className="B-3 ">From ideation to deployment and ongoing support, we handle the complete development lifecycle.</p>
              </div>
             </div>
            </div>

      </div>

      {/* future ready section */}

      <div className="future-ready sm:py-20 py-8 px-3 sm:px-6 md:px-10 lg:px-14">
        <div className="flex justify-center items-center mb-5">
          <div className="flex futute_ready_btn rounded-full py-3 px-5 B-3">
            <img src="/assets/green_dot.svg" className="me-2"></img>
            Future Ready
          </div>
        </div>

        <div className=" text-center">
          <h3 className="heading-3 text-white mb-7">
            Accelerating Growth with <br></br>
            <span className="green">Intelligent Solutions</span>
          </h3>

          <p className="B-1 max-w-[650px] flex justify-self-center md:mb-14 mb-5">We blend AI innovation with robust engineering to deliver scalable digital
solutions that redefine whats possible for your business.</p>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-10 gap-3">
         {futureCards.map((card , i) => (
  <div key={i} className="service_card sm:p-8 p-6 rounded-3xl">
    <div className="flex justify-between items-center">
        <div>
          <img src="/assets/future_point.svg" className="card_icon p-4"></img>
          </div>
          
          <span className="card_no heading-4">{`0${i + 1}`}</span>
      </div>

      <p className="heading-7 text-white my-3">{card.name}</p>
      <p className="B-3"> {card.para}</p>
      <p className="B-1 my-3"> {card.subtitle}</p>

     <div className=" pb-4 mb-5" style={{borderBottom:"1px solid #21452f"}}>
       {
        card.points.map((point , i) => (
          <p key={i} className="B-3" style={{color:"#2BEE79"}}>{point}</p>
        ))
      }
      </div>

       <div className="flex justify-between items-center learn-more">
        <p className="B-1">Learn More</p>

        <div className=" ">
          <img src="/assets/up_white_arrow.svg" className="arrow rounded-full py-2.5 px-3"></img>
          </div>
        </div>
       
  </div>
          ))}

          <div className="service-end-card p-8 rounded-3xl flex flex-col items-center justify-center">
            <div>
              <img src="/assets/service_icon.svg" className="mb-5 rounded-full p-3 px-4" ></img>
            </div>
            <p className="heading-7 text-white mb-5"> Need a Custom Solution?</p>
             <p className="B-3 text-white mb-5">Lets discuss your specific requirements.</p>

             <button className="py-3 px-5 rounded-full B-1 " style={{color:"black"}}>
              Book Consultaion
             </button>
          </div>

         </div>

      </div>

      {/* number section */}
      <div className="bg-black py-12 grid md:grid-cols-4 grid-cols-2 number_section">
          <div className="flex flex-col justify-center align-middle text-center md:mb-0 mb-5">
            <h3 className="heading-3 text-white md:mb-3 mb-0"> 98%</h3>
            <p className="B-3 text-white">Client Satisfaction</p>
          </div>
           <div className="flex flex-col justify-center align-middle text-center md:mb-0 mb-5">
            <h3 className="heading-3 text-white md:mb-3 mb-0"> 250+</h3>
            <p className="B-3 text-white">Projects Delivered</p>
          </div>
           <div className="flex flex-col justify-center align-middle text-center">
            <h3 className="heading-3 text-white md:mb-3 mb-0">15+</h3>
            <p className="B-3 text-white">Years experience</p>
          </div>
           <div className="flex flex-col justify-center align-middle text-center">
            <h3 className="heading-3 text-white md:mb-3 mb-0">24/7</h3>
            <p className="B-3 text-white">Support Active</p>
          </div>
      </div>

      {/* industries we serve section */}

      <div className="sm:py-16 py-8 px-3 sm:px-6 md:px-10 lg:px-14 industries-section">
         
          <div className="flex justify-center items-center mb-5">
          <div className="flex industry_btn items-center rounded-full py-3 px-5 B-3">
            <img src="/assets/red_dot.png" className="me-2"></img>
            INDUSTRY WE SERVE
          </div>
        </div>

        <div className=" text-center">
          <h3 className="heading-3  mb-7">
            Expertise Across <br></br>
            <span className="red pb-2">Key business sectors</span>
          </h3>

          <p className="B-1 max-w-[650px] flex justify-self-center mb-14">We provide tailored digital and marketing solutions for diverse industries ensuring measurable growth and scalability</p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-3 ">
          {
          industryCards.map((card , i) => (
            <div key={i} className="industry-card p-4">
              <img src={card.img} className="mb-4" style={{width:"-webkit-fill-available"}}></img>
              <p className="mb-4 heading-7 font-lustria">{card.name}</p>
              <p className="B-3 pb-4 mb-2">{card.para}</p>

              <div className="flex gap-1 mb-3">
               
                <p className="B-3 read-more">Read More</p>
                 <img src="/assets/next_icon_red.svg"></img>
                </div>
            </div>
          ))
        }

        </div>

        <div className="flex gap-5 md:flex-nowrap flex-wrap md:justify-between justify-center p-3 start-project-section sm:py-12 py-5 sm:mt-14 mt-6 justify-self-center">
          <div className="ps-8 md:text-left text-center">
            <p className="heading-7 font-lustria mb-2">Ready to scale your vision?</p>
            <p className="B-3">Let&apos;s discuss how our AI solutions can optimize  your
business.</p>
          </div>
          <button className="button rounded-full flex items-center B-1 gap-3" style={{width:"fit-content", borderRadius:"12px"}}>
          Start Your Project
          <img src="/assets/rocket_icon.svg" className="ml-2"></img>
        </button>

        </div>
      </div>

      {/* technology section */}

     <div className=" lg:pt-20 pt-5 lg:pb-0 pb-5 px-0 lg:px-4  technology-section">

      <div className="mobile-orbit-wrapper bg-white p-3 overflow-hidden lg:hidden block">
  <div className="mobile-orbit-track flex gap-4">
    {[...technologies[activeTab], ...technologies[activeTab]].map(
      (tech, index) => (
        <div
          key={index}
          className="orbit-item-mobile p-5 flex-shrink-0"
        >
          <img src={tech.src} alt={tech.alt} />
        </div>
      )
    )}
  </div>
</div>
          <div className="flex justify-center items-center mb-5">
          <div className="flex futute_ready_btn rounded-full py-3 px-5 B-3 lg:mt-0 mt-5">
            <img src="/assets/green_dot.svg" className="me-2"></img>
            Technologies
          </div>
        </div>

        <div className=" text-center md:px-0 sm:px-7 px-3">
          <h3 className="heading-3 text-white sm:mb-7 mb-4 font-lustria">
            Accelerating Growth with <br></br>
            <span className="green">Cutting-Edge Technologies</span>
          </h3>

          <p className="B-1  flex justify-self-center md:mb-14 mb-5">We leverage modern frameworks, tools, and platforms to build scalable, secure, and high-performance digital solutions.</p>
        </div>

      <div className="flex md:flex-nowrap flex-wrap md:gap-7 gap-4 justify-center md:pt-0 pt-5 md:pb-20 pb-8 md:px-0 sm:px-7 px-3">
        {["frontend", "backend", "mobile", "webapp", "database"].map((tab) => (
          <div
            key={tab}
            className={`flex rounded-full py-2 px-4 heading-6 cursor-pointer w-fit ${
              activeTab === tab ? "futute_ready_btn-active" : "futute_ready_btn"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </div>
        ))}
      </div>

     <div className="mobile-orbit-wrapper bg-white p-3 overflow-hidden lg:hidden block">
  <div className="mobile-orbit-track flex gap-4">
    {[...technologies[activeTab], ...technologies[activeTab]].map(
      (tech, index) => (
        <div
          key={index}
          className="orbit-item-mobile p-5 flex-shrink-0"
        >
          <img src={tech.src} alt={tech.alt} />
        </div>
      )
    )}
  </div>
</div>


<div className="circle-wrapper pt-32 pb-5">
  <div className="circle-1">

    {/* <div className="orbit">
  <div className="orbit-item" style={{ "--i": 0 }}>
    <img src="/assets/react.png" alt="React" />
  </div>

  <div className="orbit-item" style={{ "--i": 1 }}>
    <img src="/assets/javascript.png" alt="JavaScript" />
  </div>

  <div className="orbit-item" style={{ "--i": 2 }}>
    <img src="/assets/angular.png" alt="Angular" />
  </div>

  <div className="orbit-item" style={{ "--i": 3 }}>
    <img src="/assets/jquery.png" alt="jQuery" />
  </div>

  <div className="orbit-item" style={{ "--i": 4 }}>
    <img src="/assets/vue.png" alt="Vue" />
  </div>
</div> */}

<div className="orbit">
            {technologies[activeTab].map((tech, index) => (
              <div
                key={index}
                className="orbit-item"
                style={{ "--i": index }}
              >
                <img src={tech.src} alt={tech.alt} />
              </div>
            ))}
          </div>

    <div className="middle-circle">
      <div className="inner-circle">
        <div className="circle-4 flex justify-center items-center">
          <img src="/assets/figma.png" />
        </div>
      </div>
    </div>

  </div>
</div>


     </div>

     {/* agile process section */}

     <div className="agile-section pt-8 px-3 sm:px-6 md:px-10 lg:px-14">
       <div className="flex justify-center items-center mb-5">
          <div className="flex industry_btn items-center rounded-full py-3 px-5 B-3">
            <img src="/assets/red_dot.png" className="me-2"></img>
            Agile Process
          </div>
        </div>

        <div className=" text-center">
          <h3 className="heading-3  mb-7 font-lustria">
           Agile Development Process We Follow <br></br>
            <span className="red pb-2">at Dousoft IT</span>
          </h3>

          <p className="B-1 flex justify-self-center mb-14 font-notosans">A Proven, Agile Driven Delivery Model for Scalable Solutions</p>
        </div>

        <Roadmap/>

     </div>

     {/* testimonial  */}

     <div className="testimonial-section sm:py-10 py-9 px-3 sm:px-6 md:px-10 lg:px-14 " >
        <div className="grid grid-cols-[1fr_1fr_1fr_1.3fr_1fr_1fr_1fr] gap-5 items-center md:flex hidden ">
          <div className=" pt-44">
            <img src="/assets/top_testimonial.png" className="mb-4"></img>
             <img src="/assets/top_testimonial.png" className=""></img>
          </div>

           <div>
            <img src="/assets/top_testimonial.png" className="mb-4"></img>
             <img src="/assets/top_testimonial.png" className=""></img>
          </div>

           <div className="">
            <img src="/assets/top_testimonial.png" className=""></img>
          </div>

          <div className="">
            <img src="/assets/top_testimonial.png" className="h-auto w-100"></img>
          </div>

          <div>
            <img src="/assets/top_testimonial.png" className=""></img>
          </div>

           <div >
            <img src="/assets/top_testimonial.png" className="mb-4"></img>
             <img src="/assets/top_testimonial.png" className=""></img>
          </div>

           <div className=" mt-44">
            <img src="/assets/top_testimonial.png" className="mb-4"></img>
             <img src="/assets/top_testimonial.png" className=""></img>
          </div>
        </div>

        
          <div className="flex justify-center items-center sm:mb-16 mb-6">
          <div className="flex industry_btn items-center rounded-full py-3 px-5 B-3" style={{marginTop:"-5%"}}>
            <img src="/assets/red_dot.png" className="me-2"></img>
           Testimonials
          </div>
        </div>

        <div className=" text-center">
          <h3 className="heading-3  mb-7 font-lustria">
           Trusted by leaders  <br></br>
            <span className="grey pb-2">from various indursties</span>
          </h3>

          <p className="B-1  flex justify-self-center sm:mb-10 mb-7 font-notosans">Leam why professionals trust our solutions to complete their customer journeys</p>
        </div>

         <button className="button rounded-full flex items-center B-1 justify-self-center md:flex hidden" style={{width:"fit-content"}}>
          Read all Success Stories
          <img src="/assets/button_arrow.png" className="ml-2"></img>
        </button>

        <Testimonial/>

          <button className="button rounded-full flex items-center B-1 justify-self-center md:hidden flex" style={{width:"fit-content"}}>
          Read all Success Stories
          <img src="/assets/button_arrow.png" className="ml-2"></img>
        </button>
     </div>

     {/* Faq */}

     <div className="faq-section sm:py-20 py-8 px-3 sm:px-6 md:px-10 lg:px-14 bg-white">
         <div className="flex justify-center items-center sm:mb-10 mb-6">
          <div className="flex industry_btn items-center rounded-full py-3 px-5 B-3" >
            <img src="/assets/red_dot.png" className="me-2"></img>
           FAQ&apos;S
          </div>
        </div>

        <div className=" text-center">
          <h3 className="heading-3  sm:mb-16 mb-8 font-lustria">
          Have a question? Look here
          </h3>
          </div>

          <div className="faq-outer">
      {faqs.map((faq, index) => (
        <div key={index} className="">

          {/* Question Row */}
          <div className="faq sm:p-6 sm:py-7  p-4 flex justify-between items-center">
            <h3 className="heading-6">
              <span className="font-lustria me-4">
                {"0"}{index + 1}_
              </span>{" "}
              {faq.que}
            </h3>

            <button
              className="icon"
              onClick={() => toggleFaq(index)}
            >
              <img
    src={
      openIndex === index
        ? "/assets/minus.png"
        : "/assets/white_plus.png"
    }
    className="sm:p-3 p-1 rounded-full"
    alt="toggle"
  />
            </button>
          </div>

          {/* Answer */}
          {openIndex === index && (
            <div className="bg-white sm:p-6 sm:py-7  p-4 flex justify-between items-center ">
             <h3 className="B-1 font-notosans">
             
              {faq.ans}
            </h3>

            {/* <button
              className="icon"
              onClick={() => toggleFaq(index)}
            >
              <img
                src="/assets/minus.png"
                className={`p-3 rounded-full transition-transform duration-300 `}
                alt="toggle"
              />
            </button> */}
            </div>
          )}
          <hr className="text-white"></hr>
        </div>
      ))}
    </div>
     </div>

     {/* start your journey sectiion */}

     <div className="journey-section sm:py-12 py-8 px-3 sm:px-6 md:px-10 lg:px-14 bg-black">

      <div className="journey-inner flex flex-col justify-center items-center md:py-1 py-4" style={{border:"1px solid #264f3663"}}>
        <div>
          <img src="/assets/rocket-green.png" className="icon sm:mb-12 mb-8 rounded-full p-4"></img>
        </div>
       <div classname="text-center">
         <h2 className="heading-3 text-white mb-7 font-lustria text-center">Start Your Digital Journey with <br></br> <span className="green"> Dousoft IT</span></h2>

          <p className="max-w-[700px] B-1 text-center sm:mb-14 mb-8 para">Looking for a 
            <span className="green-para"> reliable software development company </span>
             to bring your idea to life? Dousoft IT is here to help you build future-ready digital solutions</p>
             </div>

             <div className="flex justify-center items-center sm:gap-12 gap-7 md:mb-18 sm:mb-8 mb-6 sm:flex-nowrap flex-wrap">
                  <button className="py-3 px-5 rounded-full B- btn-1  flex gap-2 font-notosans" style={{color:"black"}}>
              Launch Your Project
              <img src="/assets/next_black.png"></img>
             </button>

              <button className="py-3 px-5 rounded-full B-1 btn-2  flex gap-2 text-white" >
             Explore Services
                <img src="/assets/service_black.png"></img>
             </button>
                
             </div>


             <div className="flex gap-5 justify-center w-fit px-16 sm:pt-12 pt-4 sm:flex-nowrap flex-wrap" style={{borderTop:"1px solid #264f3663"}}>
              <div className="flex gap-2 items-center">
                <img src="\assets\check.svg"></img>
                <p className="B-3 text-white">AI-Driven Strategy</p>
              </div>
               <div className="flex gap-2 items-center">
                <img src="\assets\check.svg"></img>
                <p className="B-3 text-white">Scalable Architecture</p>
              </div>
               <div className="flex gap-2 items-center">
                <img src="\assets\check.svg"></img>
                <p className="B-3 text-white">24/7 Support</p>
              </div>
             </div>

      
      </div>
     </div>

     {/* footer top */}

   <div className="footer-top lg:p-14 p-10">
     <div className="grid lg:grid-cols-4 sm:grid-cols-2  md:gap-12 sm:gap-10 gap-9">
       {footerlinks.map((section, index) => (
  <div key={index} >
    <h4 className="heading-6 uppercase sm:mb-5 mb-4 font-bold" style={{fontWeight:500}}>{section.name}</h4>

    <ul>
      {section.links.map((link, i) => (
        <li key={i}>
          <p className="B-3 sm:mb-4 mb-3">{link}</p>
        </li>
      ))}
    </ul>
  </div>
))}

     </div>
   </div>

   <Footer/>

    </div>
  );
};

export default page;
