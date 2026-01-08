"use client"
import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import WhoWeAre from "./components/WhoWeAre";
import Testimonial from "./components/Testimonial";
import { useState } from "react";

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

const page = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      <div className="why-choose-us py-9 px-16">
          <h2 className="heading-3 font-lustria mb-5 text-center">
             Why Choose Dousoft IT?
            </h2>

            <p className="mb-6 font-notosans B-1 text-center">Our approach combines futuristic tech with human-centric design. </p>

            <div className="grid grid-cols-3 gap-14 items-center">
             <div>
              <div className="p-7 py-8 card card-1 mb-12">
               <div className="bg-white rounded-full p-2 px-3 mb-4 w-fit icon">
                <img src="/assets/red_bulb.svg"></img>
               </div>
               <p className="heading-7 font-lustria mb-2">Best-in-Class Expertise</p>
               <p className="B-3 ">We bring years of experience in delivering top-quality software solutions across industries.</p>
              </div>
              <div className="p-7 py-8 card card-2">
               <div className="bg-white rounded-full p-2 px-3 mb-4 w-fit icon">
                <img src="/assets/clients_red.svg"></img>
               </div>
               <p className="heading-7 font-lustria mb-2">Trusted by Global Clients</p>
               <p className="B-3 ">We are a trusted technology partner with a strong focus on long-term client relationships.</p>
              </div>
             </div>

             <div  className="card-3 p-8   flex justify-center items-center align-middle relative" style={{borderRadius:"40px"}}>
               <img src="/assets/why_choose_main.svg"></img>

                  <button className="btn rounded-full flex items-center p-2 px-3 gap-2 absolute bg-white B-3" style={{ width: "fit-content" }}>
                      <img src="/assets/green_dot.svg" className="ml-2" />
                   System Optimized  </button>
             </div>

             <div>
              <div className="p-7 py-8 card card-1 mb-12">
               <div className="bg-white rounded-full p-2 px-3 mb-4 w-fit icon">
                <img src="/assets/growth_red.svg"></img>
               </div>
               <p className="heading-7 font-lustria mb-2">Affordable & Transparent Pricing</p>
               <p className="B-3 ">Our pricing models are designed to be cost-effective without compromising quality.</p>
              </div>
              <div className="p-7 py-8 card card-2">
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

      <div className="future-ready py-20 px-14">
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

          <p className="B-1 max-w-[650px] flex justify-self-center mb-14">We blend AI innovation with robust engineering to deliver scalable digital
solutions that redefine whats possible for your business.</p>
        </div>

         <div className="grid  grid-cols-3 gap-10">
         {futureCards.map((card , i) => (
  <div key={i} className="service_card p-8 rounded-3xl">
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
      <div className="bg-black py-12 grid grid-cols-4 number_section">
          <div className="flex flex-col justify-center align-middle text-center">
            <h3 className="heading-3 text-white mb-3"> 98%</h3>
            <p className="B-3 text-white">Client Satisfaction</p>
          </div>
           <div className="flex flex-col justify-center align-middle text-center">
            <h3 className="heading-3 text-white mb-3"> 250+</h3>
            <p className="B-3 text-white">Projects Delivered</p>
          </div>
           <div className="flex flex-col justify-center align-middle text-center">
            <h3 className="heading-3 text-white mb-3">15+</h3>
            <p className="B-3 text-white">Years experience</p>
          </div>
           <div className="flex flex-col justify-center align-middle text-center">
            <h3 className="heading-3 text-white mb-3">24/7</h3>
            <p className="B-3 text-white">Support Active</p>
          </div>
      </div>

      {/* industries we serve section */}

      <div className="py-16 px-14 industries-section">
         
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

        <div className="grid grid-cols-3 gap-10 ">
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

        <div className="flex gap-5 p-3 start-project-section py-12 mt-14 justify-self-center">
          <div className="ps-8">
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

     <div className=" py-20 px-14 technology-section">
          <div className="flex justify-center items-center mb-5">
          <div className="flex futute_ready_btn rounded-full py-3 px-5 B-3">
            <img src="/assets/green_dot.svg" className="me-2"></img>
            Technologies
          </div>
        </div>

        <div className=" text-center">
          <h3 className="heading-3 text-white mb-7 font-lustria">
            Accelerating Growth with <br></br>
            <span className="green">Cutting-Edge Technologies</span>
          </h3>

          <p className="B-1  flex justify-self-center mb-14">We leverage modern frameworks, tools, and platforms to build scalable, secure, and high-performance digital solutions.</p>
        </div>

        <div className="flex gap-7 justify-center mb-20">
           <div className="flex futute_ready_btn-active rounded-full py-2 px-4 heading-6 ">
            {/* <img src="/assets/green_dot.svg" className="me-2"></img> */}
            Frontend
          </div>
           <div className="flex futute_ready_btn rounded-full py-2 px-4 heading-6 ">
            Backend
          </div>
           <div className="flex futute_ready_btn rounded-full py-2 px-4 heading-6">
           Mobile App
          </div>
           <div className="flex futute_ready_btn rounded-full py-2 px-4 heading-6 ">
            Web App
          </div>
           <div className="flex futute_ready_btn rounded-full py-2 px-4 heading-6 ">
            Database
          </div>
        </div>

<div className="circle-wrapper">
  <div className="circle-1">

    <div className="orbit">
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

     {/* testimonial  */}

     <div className="testimonial-section py-10 px-14" >
        <div className="grid grid-cols-[1fr_1fr_1fr_1.3fr_1fr_1fr_1fr] gap-5 items-center">
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

        
          <div className="flex justify-center items-center mb-16">
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

          <p className="B-1  flex justify-self-center mb-10 font-notosans">Leam why professionals trust our solutions to complete their customer journeys</p>
        </div>

         <button className="button rounded-full flex items-center B-1 justify-self-center" style={{width:"fit-content"}}>
          Read all Success Stories
          <img src="/assets/button_arrow.png" className="ml-2"></img>
        </button>

        <Testimonial/>
     </div>

     {/* Faq */}

     <div className="faq-section py-20 px-14 bg-white">
         <div className="flex justify-center items-center mb-10">
          <div className="flex industry_btn items-center rounded-full py-3 px-5 B-3" >
            <img src="/assets/red_dot.png" className="me-2"></img>
           FAQ&apos;S
          </div>
        </div>

        <div className=" text-center">
          <h3 className="heading-3  mb-16 font-lustria">
          Have a question? Look here
          </h3>
          </div>

          <div className="faq-outer">
      {faqs.map((faq, index) => (
        <div key={index} className="">

          {/* Question Row */}
          <div className="faq p-6 py-7 flex justify-between items-center">
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
                src="/assets/white_plus.png"
                className={`p-3 rounded-full transition-transform duration-300`}
                alt="toggle"
              />
            </button>
          </div>

          {/* Answer */}
          {openIndex === index && (
            <div className="bg-white p-6 py-7 flex justify-between items-center ">
             <h3 className="B-1 font-notosans">
             
              {faq.ans}
            </h3>

            <button
              className="icon"
              onClick={() => toggleFaq(index)}
            >
              <img
                src="/assets/minus.png"
                className={`p-3 rounded-full transition-transform duration-300 `}
                alt="toggle"
              />
            </button>
            </div>
          )}
          <hr className="text-white"></hr>
        </div>
      ))}
    </div>
     </div>

    </div>
  );
};

export default page;
