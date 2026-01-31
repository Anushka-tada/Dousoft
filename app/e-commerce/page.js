// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import FooterTop from '../components/FooterTop'
// import HeroSection from '../components/Herosection2'

// const page = () => {
//   return (
//     <div >
//         <Navbar/>
//         <HeroSection 
//          title="E-Commerce & Retail Solutions"
//         description="Scalable Digital Commerce Solutions Designed for Growth & Performance"
//         breadcrumb="Home > Ecom Solutions"
//         />

//       <div className='solution-page'>

     
//          <section className="industry">
//     <div className="container mx-auto max-w-7xl px-4">
//         <div className="row flex flex-wrap -mx-3">
//             <div className="col-md-6 w-full md:w-1/2 px-3">
//                 <h3 className="heading-3 font-lustria">
//                     Scalable <span> Digital Commerce Solutions</span>  Designed for Growth & Performance
//                 </h3>
//                 <p className="B-1 font-notosans">
//                   At Dousoft, we help e-commerce and retail businesses build high-performing digital commerce ecosystems that drive sales, improve customer engagement, and streamline operations. Our E-Commerce & Retail Solutions are designed to support startups, growing brands, and enterprises looking to scale efficiently in an increasingly competitive digital marketplace.
//                 </p>
//                 <p className="B-1 font-notosans">
//                    We approach e-commerce not just as a website or app, but as a complete business system connecting technology, customer experience, data, and operations into one unified platform.
//                 </p>
//             </div>

//             <div className="col-md-6 w-full md:w-1/2 px-3">
//                 <div className="Background-Shadow-2">
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>



//     <section class="industry ind-2">
//     <h3 class="heading-3 font-lustria mb-10">
//         Our Approach to <span>E-Commerce & Retail </span> at Dousoft
//     </h3>

//     <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* <!-- LEFT CARD --> */}
//         <div>
//             <div class="industry-card">
//                 <div class="box">
//                     <div class="icon-heading flex items-center gap-4 mb-4">
//                         <div class="icon">
//                             <img src="assets/images/healthcare/icon/material-symbols_strategy.png" alt=""/>
//                         </div>
//                         <p class="heading-7 font-lustria">
//                            Business-Driven Commerce Strategy
//                         </p>
//                     </div>

//                     <p class="B-3 font-notosans mb-4">
//                       We begin by understanding your retail model—B2B, B2C, D2C, or marketplace—and your customer journey. Our solutions are tailored to align with your sales goals, target audience, and operational workflows.
//                     </p>

//                     <p class="heading-8 font-lustria my-4  pb-4">
//                        Our approach ensures:
//                     </p>

//                     <div class="approach-box grid grid-cols-2 gap-4 mb-4">
//                         <div class="icon-box flex items-center gap-3 " style={{width:"-webkit-fill-available"}}>
//                             <div class="small-icon flex justify-center">
//                                 <img src="assets/images/healthcare/icon/material-symbols_automation.png" alt=""/>
//                             </div>
//                             <p class="B-3 font-notosans">
//                               Conversion optimization
//                             </p>
//                         </div>

//                         <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
//                             <div class="small-icon flex justify-center">
//                                 <img src="assets/images/healthcare/icon/flowbite_users-solid.png" alt=""/>
//                             </div>
//                             <p class="B-3 font-notosans">Customer retention </p>
//                         </div>
//                     </div>

//                     <div class="approach-box grid grid-cols-2 gap-4" >
//                         <div class="icon-box flex items-center justify-center gap-3" style={{width:"-webkit-fill-available"}}>
//                             <div class="small-icon flex justify-center">
//                                 <img src="assets/images/healthcare/icon/material-symbols_shield-lock.png" alt=""/>
//                             </div>
//                             <p class="B-3 font-notosans">Operational efficiency </p>
//                         </div>

//                         <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
//                             <div class="small-icon flex justify-center">
//                                 <img src="assets/images/healthcare/icon/material-symbols_speed.png" alt=""/>
//                             </div>
//                             <p class="B-3 font-notosans">Long-term scalability </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* <!-- RIGHT CARD --> */}
//         <div>
//             <div class="industry-card">
//                 <div class="box">
//                     <div class="icon-heading flex items-center gap-4 mb-4">
//                         <div class="icon">
//                             <img src="assets/images/healthcare/icon/mdi_certificate.png" alt=""/>
//                         </div>
//                         <p class="heading-7 font-lustria">
//                          Customer-Centric Experience Design
//                         </p>
//                     </div>

//                     <p class="B-3 font-notosans mb-4">
//                        A seamless user experience is critical to online sales success. We design intuitive, fast, and engaging interfaces that guide users from discovery to checkout with minimal friction.
//                     </p>

//                     <p class="heading-8 font-lustria my-4 pb-4">
//                       Our approach ensures:
//                     </p>

//                     <div class="approach-box grid grid-cols-2 gap-4 mb-4">
//                         <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
//                             <div class="small-icon flex justify-center">
//                                 <img src="assets/images/healthcare/icon/ic_baseline-privacy-tip.png" alt=""/>
//                             </div>
//                             <p class="B-3 font-notosans">Data Privacy</p>
//                         </div>

//                         <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
//                             <div class="small-icon flex justify-center">
//                                 <img src="assets/images/healthcare/icon/streamline-ultimate_checklist-bold.png" alt=""/>
//                             </div>
//                             <p class="B-3 font-notosans">Compliance </p>
//                         </div>
//                     </div>

//                     <div class="approach-box grid grid-cols-2 gap-4">
//                         <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
//                             <div class="small-icon flex justify-center">
//                                 <img src="assets/images/healthcare/icon/material-symbols_integration-instructions.png" alt=""/>
//                             </div>
//                             <p class="B-3 font-notosans">Interoperability </p>
//                         </div>

//                         <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
//                             <div class="small-icon flex justify-center" >
//                                 <img src="assets/images/healthcare/icon/material-symbols_star.png" alt=""/>
//                             </div>
//                             <p class="B-3 font-notosans">Best Practices </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>


//     <section className="industry ind-3">

//     </section>

//     <section className="industry ind-4">
//     <div className="main-frame">
//         {/* Heading */}
//         <div className="ind-4-heading text-center mb-10">
//             <h3 className="heading-3">
//              Dousoft E-Commerce Delivery Framework
//             </h3>
//             <p className="B-1">We follow a structured framework to deliver consistent, high-quality healthcare solutions: </p>
//         </div>

//         {/* Framework Grid */}
//         <div className="framework grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
//             {/* BOX 01 */}
//             <div className="framework-box relative">
//                 <div className="framwork-icon-box flex items-center justify-between mb-4">
//                     <div className="f-icon">
//                         <img src="assets/images/healthcare/icon/Vector.png" alt="" />
//                     </div>
//                     <h4 className="heading-4">01</h4>
//                 </div>

//                 <p className="heading-7 mb-3">Analyze</p>

//                 <ul className="space-y-2">
//                     <li className="B-3">Business model assessment</li>
//                     <li className="B-3">Customer journey mapping</li>
//                     <li className="B-3">Technology and competitor analysis</li>
//                 </ul>

//                 <div className="framework-direction-1 mt-4 hidden md:block">
//                     <img src="assets/images/healthcare/icon/Vector 11.svg" alt="" />
//                 </div>
//             </div>

//             {/* BOX 02 */}
//             <div className="framework-box relative">
//                 <div className="framwork-icon-box flex items-center justify-between mb-4">
//                     <div className="f-icon">
//                         <img src="assets/images/healthcare/icon/Group.png" alt="" />
//                     </div>
//                     <h4 className="heading-4">02</h4>
//                 </div>

//                 <p className="heading-7 mb-3">Architect</p>

//                 <ul className="space-y-2">
//                     <li className="B-3">Scalable system architecture</li>
//                     <li className="B-3">Secure payment and data handling</li>
//                     <li className="B-3">Integration planning</li>
//                 </ul>

//                 <div className="framework-direction-1 mt-4 hidden md:block">
//                     <img src="assets/images/healthcare/icon/Vector 11.svg" alt="" />
//                 </div>
//             </div>

//             {/* BOX 03 */}
//             <div className="framework-box relative">
//                 <div className="framwork-icon-box flex items-center justify-between mb-4">
//                     <div className="f-icon">
//                         <img src="assets/images/healthcare/icon/mingcute_code-fill.png" alt="" />
//                     </div>
//                     <h4 className="heading-4">03</h4>
//                 </div>

//                 <p className="heading-7 mb-3">Build</p>

//                 <ul className="space-y-2">
//                     <li className="B-3">Agile development methodology</li>
//                     <li className="B-3">Modular and reusable components</li>
//                     <li className="B-3">Continuous quality assurance</li>
//                 </ul>

//                 <div className="framework-direction-1 mt-4 hidden md:block">
//                     <img src="assets/images/healthcare/icon/Vector 11.svg" alt="" />
//                 </div>
//             </div>

//             {/* BOX 04 */}
//             <div className="framework-box relative">
//                 <div className="framwork-icon-box flex items-center justify-between mb-4">
//                     <div className="f-icon">
//                         <img src="assets/images/healthcare/icon/Vector2.png" alt="" />
//                     </div>
//                     <h4 className="heading-4">04</h4>
//                 </div>

//                 <p className="heading-7 mb-3">Launch</p>

//                 <ul className="space-y-2">
//                     <li className="B-3">Performance optimization</li>
//                     <li className="B-3">Secure deployment</li>
//                     <li className="B-3">Monitoring and analytics setup</li>
//                 </ul>

//                 <div className="framework-direction-1 mt-4 hidden md:block">
//                     <img src="assets/images/healthcare/icon/Vector 11.svg" alt="" />
//                 </div>
//             </div>

//             {/* BOX 05 */}
//             <div className="framework-box">
//                 <div className="framwork-icon-box flex items-center justify-between mb-4">
//                     <div className="f-icon">
//                         <img
//                             src="assets/images/healthcare/icon/material-symbols_analytics.png"
//                             alt=""
//                         />
//                     </div>
//                     <h4 className="heading-4">05</h4>
//                 </div>

//                 <p className="heading-7 mb-3">Scale</p>

//                 <ul className="space-y-2">
//                     <li className="B-3">Feature expansion</li>
//                     <li className="B-3">Traffic and performance optimization</li>
//                     <li className="B-3">Ongoing enhancements</li>
//                 </ul>
//             </div>
//         </div>

//         {/* Bottom Text */}
//         <div className="framework-box-2 text-center mt-10">
//             <p className="heading-7">
//                This framework enables faster go-to-market while maintaining stability and performance.
//             </p>
//         </div>
//     </div>
// </section>


//    <section className="industry ind-5">
//     {/* Heading */}
//     <h3 className="heading-3 font-lustria mb-10">
//         E-Commerce & Retail Solutions We Offer
//     </h3>

//     {/* Row 1 */}
//     <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         <div>
//             <div className="industry-card">
//                 <div className="overlay-shadow ecom-ind-5-picture-1"></div>

//                 <div>
//                     <p className="heading-7">
//                        Custom E-Commerce Platform Development
//                     </p>
//                     <p className="B-3">
//                        Fully customized e-commerce platforms tailored to your brand, product catalog, and business needs.
//                     </p>
//                 </div>
//             </div>
//         </div>

//         <div>
//             <div className="industry-card">
//                 <div className="overlay-shadow ecom-ind-5-picture-2"></div>

//                 <div>
//                     <p className="heading-7">
//                        Mobile Commerce Applications
//                     </p>
//                     <p className="B-3">
//                        High-performance mobile apps that enhance customer engagement and increase repeat purchases.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>

//     {/* Row 2 */}
//     <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//             <div className="industry-card">
//                 <div className="overlay-shadow ecom-ind-5-picture-3"></div>

//                 <div>
//                     <p className="heading-7">
//                        Payment Gateway & NFC Payment Integration
//                     </p>
//                     <p className="B-3">
//                        Secure and flexible payment solutions, including contactless and NFC-based payments, to improve checkout experiences.
//                     </p>
//                 </div>
//             </div>
//         </div>

//         <div>
//             <div className="industry-card">
//                 <div className="overlay-shadow ind-5-picture-4"></div>

//                 <div>
//                     <p className="heading-7">
//                        Inventory & Order Management Systems
//                     </p>
//                     <p className="B-3">
//                        Real-time inventory tracking, order processing, and supply chain visibility to reduce operational inefficiencies.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>


//     <section className="industry ind-6">
//         <h3 className="heading-3">
//             Benefits of <span>Dousoft IT</span> E-Commerce & Retail Solutions
//         </h3>

//         <div className="why-card-row">

//             <div className="why-card">
//                 <div className="why-icon">
//                     <img src="assets/images/healthcare/icon/Vector-3.png" alt=""/>
//                 </div>
//                 <p className="heading-7">
//                   Increased conversion rates
//                 </p>
//             </div>


//             <div className="why-card">
//                 <div className="why-icon">
//                     <img src="assets/images/healthcare/icon/Vector-4.png" alt=""/>
//                 </div>
//                 <p className="heading-7">
//                    Improved customer retention
//                 </p>
//             </div>

//             <div className="why-card">
//                 <div className="why-icon">
//                     <img src="assets/images/healthcare/icon/Vector-5.png" alt=""/>
//                 </div>
//                 <p className="heading-7">
//                    Faster order processing
//                 </p>
//             </div>


//             <div className="why-card">
//                 <div className="why-icon">
//                     <img src="assets/images/healthcare/icon/Vector-6.png" alt=""/>
//                 </div>
//                 <p className="heading-7">
//                   Reduced operational costs
//                 </p>
//             </div>

//             <div className="why-card">
//                 <div className="why-icon">
//                     <img src="assets/images/healthcare/icon/Vector-7.png" alt=""/>
//                 </div>
//                 <p className="heading-7">
//                   Secure commerce platforms
//                 </p>
//             </div>

//             <div className="why-card">
//                 <div className="why-icon">
//                     <img src="assets/images/healthcare/icon/Vector-8.png" alt=""/>
//                 </div>
//                 <p className="heading-7">
//                   Scalable commerce platforms
//                 </p>
//             </div>
//         </div>
//     </section>

//     <section className="industry ind-7">
//     <h3 className="heading-3 mb-10">
//         Why Choose <span>Dousoft IT</span>  for E-Commerce & Retail Solutions?
//     </h3>

//     {/* Main Content */}
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//         {/* Left Image */}
//         <div>
//             <div className="overlay-shadow-2 ind-5-picture-5"></div>
//         </div>

//         {/* Right Content */}
//         <div className="space-y-4">
//             <div className="icon-heading flex items-start gap-4">
//                 <div className="icon">
//                     <img src="assets/images/healthcare/icon/bxs_badge-check.png" alt="" />
//                 </div>
//                 <p className="heading-7 font-lustria">
//                    End-to-end commerce expertise
//                 </p>
//             </div>

//             <div className="icon-heading flex items-start gap-4">
//                 <div className="icon">
//                     <img src="assets/images/healthcare/icon/Vector-9.png" alt="" />
//                 </div>
//                 <p className="heading-7 font-lustria">Proven delivery framework</p>
//             </div>

//             <div className="icon-heading flex items-start gap-4">
//                 <div className="icon">
//                     <img src="assets/images/healthcare/icon/material-symbols_check-circle.png" alt="" />
//                 </div>
//                 <p className="heading-7 font-lustria">Focus on performance and scalability </p>
//             </div>

//             <div className="icon-heading flex items-start gap-4">
//                 <div className="icon">
//                     <img src="assets/images/healthcare/icon/material-symbols_shield.png" alt="" />
//                 </div>
//                 <p className="heading-7 font-lustria">Secure payment and data handling </p>
//             </div>

//             <div className="icon-heading flex items-start gap-4">
//                 <div className="icon">
//                     <img src="assets/images/healthcare/icon/Vector (1).png" alt="" />
//                 </div>
//                 <p className="heading-7 font-lustria">Continuous optimization and support </p>
//             </div>
//         </div>
//     </div>

//     {/* Bottom Text */}
//     <div className="mt-10">
//         <div className="icon-heading">
//             <p className="heading-7 font-lustria">
//                We help businesses move beyond traditional e-commerce by building intelligent, scalable, and customer-focused retail solutions.
//             </p>
//         </div>
//     </div>
// </section>


//    <section className="industry ind-8 relative">
//     <div className="star-bg"></div>

//     <div className="flex flex-col items-center text-center px-4 py-16 max-w-4xl mx-auto">
//         <h3 className="heading-3 mb-4">Build a Future-Ready E-Commerce Platform with Dousoft IT</h3>

//         <p className="B-1 pb-8">
//           Whether you’re launching a new online store or optimizing an existing retail platform, Dousoft delivers solutions that drive measurable business growth and long-term success.
//         </p>

//         <div className="cta-btn flex items-center gap-3 cursor-pointer">
//             <p className="B-1">
//                 Get Started Today
//             </p>
//             <div className="btn-icon">
//                 <img src="assets/images/healthcare/icon/Container.png" alt="" />
//             </div>
//         </div>
//     </div>
// </section>
//  </div>

// <FooterTop/>

// <Footer/>

      
//     </div>
//   )
// }

// export default page

import SolutionLayout from "../components/SolutionLayout";

export default function ECommercePage() {
  return (
    <SolutionLayout
      hero={{
        title: "E-Commerce & Retail Solutions",
        description:
          "Scalable Digital Commerce Solutions Designed for Growth & Performance",
        breadcrumb: "Home > Ecom Solutions",
      }}

      intro={{
        heading: (
          <>
            Scalable <span>Digital Commerce Solutions</span> Designed for Growth & Performance
          </>
        ),
        paragraphs: [
          "At Dousoft, we help e-commerce and retail businesses build high-performing digital commerce ecosystems that drive sales, improve customer engagement, and streamline operations. Our E-Commerce & Retail Solutions are designed to support startups, growing brands, and enterprises looking to scale efficiently in an increasingly competitive digital marketplace.",
          "We approach e-commerce not just as a website or app, but as a complete business system connecting technology, customer experience, data, and operations into one unified platform.",
        ],
        imageClass: "Background-Shadow-2",
      }}

      approach={{
        heading: (
          <>
            Our Approach to <span>E-Commerce & Retail</span> at Dousoft
          </>
        ),
        cards: [
          {
            icon: "assets/images/healthcare/icon/material-symbols_strategy.png",
            title: "Business-Driven Commerce Strategy",
            description:
              "We begin by understanding your retail model—B2B, B2C, D2C, or marketplace—and your customer journey. Our solutions are tailored to align with your sales goals, target audience, and operational workflows.",
            points: [
              {
                icon: "assets/images/healthcare/icon/material-symbols_automation.png",
                text: "Conversion optimization",
              },
              {
                icon: "assets/images/healthcare/icon/flowbite_users-solid.png",
                text: "Customer retention",
              },
              {
                icon: "assets/images/healthcare/icon/material-symbols_shield-lock.png",
                text: "Operational efficiency",
              },
              {
                icon: "assets/images/healthcare/icon/material-symbols_speed.png",
                text: "Long-term scalability",
              },
            ],
          },
          {
            icon: "assets/images/healthcare/icon/mdi_certificate.png",
            title: "Customer-Centric Experience Design",
            description:
              "A seamless user experience is critical to online sales success. We design intuitive, fast, and engaging interfaces that guide users from discovery to checkout with minimal friction.",
            points: [
              {
                icon: "assets/images/healthcare/icon/ic_baseline-privacy-tip.png",
                text: "Data Privacy",
              },
              {
                icon: "assets/images/healthcare/icon/streamline-ultimate_checklist-bold.png",
                text: "Compliance",
              },
              {
                icon: "assets/images/healthcare/icon/material-symbols_integration-instructions.png",
                text: "Interoperability",
              },
              {
                icon: "assets/images/healthcare/icon/material-symbols_star.png",
                text: "Best Practices",
              },
            ],
          },
        ],
      }}

      framework={{
        heading: "Dousoft E-Commerce Delivery Framework",
        subheading:
          "We follow a structured framework to deliver consistent, high-quality healthcare solutions:",
        steps: [
          {
            number: "01",
            title: "Analyze",
            icon: "assets/images/healthcare/icon/Vector.png",
            points: [
              "Business model assessment",
              "Customer journey mapping",
              "Technology and competitor analysis",
            ],
          },
          {
            number: "02",
            title: "Architect",
            icon: "assets/images/healthcare/icon/Group.png",
            points: [
              "Scalable system architecture",
              "Secure payment and data handling",
              "Integration planning",
            ],
          },
          {
            number: "03",
            title: "Build",
            icon: "assets/images/healthcare/icon/mingcute_code-fill.png",
            points: [
              "Agile development methodology",
              "Modular and reusable components",
              "Continuous quality assurance",
            ],
          },
          {
            number: "04",
            title: "Launch",
            icon: "assets/images/healthcare/icon/Vector2.png",
            points: [
              "Performance optimization",
              "Secure deployment",
              "Monitoring and analytics setup",
            ],
          },
          {
            number: "05",
            title: "Scale",
            icon: "assets/images/healthcare/icon/material-symbols_analytics.png",
            points: [
              "Feature expansion",
              "Traffic and performance optimization",
              "Ongoing enhancements",
            ],
          },
        ],
        footerText:
          "This framework enables faster go-to-market while maintaining stability and performance.",
      }}

      offerings={{
        heading: "E-Commerce & Retail Solutions We Offer",
        cards: [
          {
            overlayClass: "overlay-shadow ecom-ind-5-picture-1",
            title: "Custom E-Commerce Platform Development",
            description:
              "Fully customized e-commerce platforms tailored to your brand, product catalog, and business needs.",
          },
          {
            overlayClass: "overlay-shadow ecom-ind-5-picture-2",
            title: "Mobile Commerce Applications",
            description:
              "High-performance mobile apps that enhance customer engagement and increase repeat purchases.",
          },
          {
            overlayClass: "overlay-shadow ecom-ind-5-picture-3",
            title: "Payment Gateway & NFC Payment Integration",
            description:
              "Secure and flexible payment solutions, including contactless and NFC-based payments, to improve checkout experiences.",
          },
          {
            overlayClass: "overlay-shadow ind-5-picture-4",
            title: "Inventory & Order Management Systems",
            description:
              "Real-time inventory tracking, order processing, and supply chain visibility to reduce operational inefficiencies.",
          },
        ],
      }}

      benefits={{
        heading: (
          <>
            Benefits of <span>Dousoft IT</span> E-Commerce & Retail Solutions
          </>
        ),
        items: [
          { icon: "assets/images/healthcare/icon/Vector-3.png", text: "Increased conversion rates" },
          { icon: "assets/images/healthcare/icon/Vector-4.png", text: "Improved customer retention" },
          { icon: "assets/images/healthcare/icon/Vector-5.png", text: "Faster order processing" },
          { icon: "assets/images/healthcare/icon/Vector-6.png", text: "Reduced operational costs" },
          { icon: "assets/images/healthcare/icon/Vector-7.png", text: "Secure commerce platforms" },
          { icon: "assets/images/healthcare/icon/Vector-8.png", text: "Scalable commerce platforms" },
        ],
      }}

      whyChoose={{
        heading: (
          <>
            Why Choose <span>Dousoft IT</span> for E-Commerce & Retail Solutions?
          </>
        ),
        imageClass: "overlay-shadow-2 ind-5-picture-5",
        points: [
          {
            icon: "assets/images/healthcare/icon/bxs_badge-check.png",
            text: "End-to-end commerce expertise",
          },
          {
            icon: "assets/images/healthcare/icon/Vector-9.png",
            text: "Proven delivery framework",
          },
          {
            icon: "assets/images/healthcare/icon/material-symbols_check-circle.png",
            text: "Focus on performance and scalability",
          },
          {
            icon: "assets/images/healthcare/icon/material-symbols_shield.png",
            text: "Secure payment and data handling",
          },
          {
            icon: "assets/images/healthcare/icon/Vector (1).png",
            text: "Continuous optimization and support",
          },
        ],
      }}

      cta={{
        heading: "Build a Future-Ready E-Commerce Platform with Dousoft IT",
        description:
          "Whether you’re launching a new online store or optimizing an existing retail platform, Dousoft delivers solutions that drive measurable business growth and long-term success.",
        buttonText: "Get Started Today",
        icon: "assets/images/healthcare/icon/Container.png",
      }}
    />
  );
}