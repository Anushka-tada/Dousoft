import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FooterTop from '../components/FooterTop'
import HeroSection from '../components/Herosection2'

const page = () => {
  return (
    <div >
        <Navbar/>
        <HeroSection 
         title="Taxi Booking Solutions"
        description="Smart and scalable taxi booking solutions to manage rides, drivers, and customers seamlessly in real time."
        breadcrumb="Home > Taxi Booking"
        />

      <div className='solution-page'>

     
         <section className="industry">
    <div className="container mx-auto max-w-7xl px-4">
        <div className="row flex flex-wrap -mx-3">
            <div className="col-md-6 w-full md:w-1/2 px-3">
                <h3 className="heading-3 font-lustria">
                     Scalable <span>Taxi Booking Applications</span> for Modern Mobility Businesses
                    </h3>
              <p class="B-1 font-notosans">
                        At Dousoft, we develop high-performance Taxi Booking Applications that enable seamless ride booking, real-time tracking, secure payments, and efficient fleet management. Our taxi app solutions are designed for startups, transport providers, and enterprises looking to launch or scale digital mobility platforms.
                    </p>
                    <p class="B-1 font-notosans">
                        We approach taxi app development with a mobility-first and performance-driven mindset, ensuring reliability, scalability, and excellent user experience.
                    </p>
            </div>

            <div className="col-md-6 w-full md:w-1/2 px-3">
               <div class="Background-Shadow-8">

                    </div>
            </div>
        </div>
    </div>
</section>



    <section class="industry ind-2">
    <h3 class="heading-3 font-lustria mb-10">
        Dousoft’s Approach to <span>Taxi Booking App Development</span>
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* <!-- LEFT CARD --> */}
        <div>
            <div class="industry-card">
                <div class="box">
                    <div class="icon-heading flex items-center gap-4 mb-4">
                        <div class="icon">
                            <img src="assets/images/healthcare/icon/material-symbols_strategy.png" alt=""/>
                        </div>
                       <p class="heading-7 font-lustria ">
                                    Mobility-Centric Business Strategy
                                </p>
                    </div>

                     <p class="B-3 font-notosans">
                               Successful ride-hailing platforms depend on speed, accuracy, and trust. At Dousoft, we analyze your business model, service area, and operational requirements to design solutions that support high transaction volumes and real-time operations.
                            </p>

                    <p class="heading-8 font-lustria my-4  pb-4">
                        Our approach ensures:
                    </p>

                    <div class="approach-box grid grid-cols-2 gap-4 mb-4">
                        <div class="icon-box flex items-center gap-3 " style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/material-symbols_automation.png" alt=""/>
                            </div>
                              <p class="B-3 font-notosans">
                                         Seamless ride booking
                                    </p>
                        </div>

                        <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/flowbite_users-solid.png" alt=""/>
                            </div>
                              <p class="B-3 font-notosans">
                                          Real-time driver-passenger connectivity
                                    </p>
                        </div>
                    </div>

                    <div class="approach-box grid grid-cols-2 gap-4" >
                        <div class="icon-box flex items-center justify-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/material-symbols_shield-lock.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                                   Operational efficiency
                            </p>
                        </div>

                        <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/material-symbols_speed.png" alt=""/>
                            </div>
                           <p class="B-3 font-notosans">
                                           Scalable mobility infrastructure
                                    </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- RIGHT CARD --> */}
        <div>
            <div class="industry-card">
                <div class="box">
                    <div class="icon-heading flex items-center gap-4 mb-4">
                        <div class="icon">
                            <img src="assets/images/healthcare/icon/mdi_certificate.png" alt=""/>
                        </div>
                        <p class="heading-7 font-lustria">
                                 Experience-Led App Design
                                </p>
                    </div>

                    <p class="B-3 font-notosans mb-4">
                            We design intuitive apps for passengers, drivers, and administrators to ensure smooth onboarding and daily operations.
                    </p>

                    <p class="heading-8 font-lustria my-4 pb-4">
                        Our approach ensures:
                    </p>

                    <div class="approach-box grid grid-cols-2 gap-4 mb-4">
                        <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/ic_baseline-privacy-tip.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                                Data Privacy
                            </p>
                        </div>

                        <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/streamline-ultimate_checklist-bold.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                                Compliance
                            </p>
                        </div>
                    </div>

                    <div class="approach-box grid grid-cols-2 gap-4">
                        <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/material-symbols_integration-instructions.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                                Interoperability
                            </p>
                        </div>

                        <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center" >
                                <img src="assets/images/healthcare/icon/material-symbols_star.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                                Best Practices
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


   
   <section class="industry ind-3 taxi-ind-3">

    </section>

    <section className="industry ind-4">
    <div className="main-frame">
        {/* Heading */}
        <div className="ind-4-heading text-center mb-10">
            <h3 class="heading-3">
                    Dousoft Taxi App Delivery Framework
                </h3>
                <p class="B-1">
                    We follow a structured framework to deliver consistent, high-quality  Smart Taxi Booking solutions:
                </p>
        </div>

        {/* Framework Grid */}
        <div className="framework grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {/* BOX 01 */}
            <div className="framework-box relative">
                <div className="framwork-icon-box flex items-center justify-between mb-4">
                    <div className="f-icon">
                        <img src="assets/images/healthcare/icon/Vector.png" alt="" />
                    </div>
                    <h4 className="heading-4">01</h4>
                </div>

                <p className="heading-7 mb-3"> Plan</p>

                <ul className="space-y-2">
                          <li class="B-3">
                                 Business and market analysis
                            </li>
                            <li class="B-3">
                                 User flow and feature mapping
                            </li>
                            <li class="B-3">
                                  Technology and scalability planning
                            </li>
                </ul>

                <div className="framework-direction-1 mt-4 hidden md:block">
                    <img src="assets/images/healthcare/icon/Vector 11.svg" alt="" />
                </div>
            </div>

            {/* BOX 02 */}
            <div className="framework-box relative">
                <div className="framwork-icon-box flex items-center justify-between mb-4">
                    <div className="f-icon">
                        <img src="assets/images/healthcare/icon/Group.png" alt="" />
                    </div>
                    <h4 className="heading-4">02</h4>
                </div>

                <p className="heading-7 mb-3">Design</p>

                <ul className="space-y-2">
                        <li class="B-3">
                                 User-friendly UX/UI design
                            </li>
                            <li class="B-3">
                                 Real-time system architecture
                            </li>
                            <li class="B-3">
                                 Secure payment integration
                            </li>
                </ul>

                <div className="framework-direction-1 mt-4 hidden md:block">
                    <img src="assets/images/healthcare/icon/Vector 11.svg" alt="" />
                </div>
            </div>

            {/* BOX 03 */}
            <div className="framework-box relative">
                <div className="framwork-icon-box flex items-center justify-between mb-4">
                    <div className="f-icon">
                        <img src="assets/images/healthcare/icon/mingcute_code-fill.png" alt="" />
                    </div>
                    <h4 className="heading-4">03</h4>
                </div>

                <p className="heading-7 mb-3">Build</p>

                <ul className="space-y-2">
                     <li class="B-3">
                                Agile development methodology
                            </li>
                            <li class="B-3">
                                Real-time GPS and mapping integration
                            </li>
                            <li class="B-3">
                                Continuous testing
                            </li>
                </ul>

                <div className="framework-direction-1 mt-4 hidden md:block">
                    <img src="assets/images/healthcare/icon/Vector 11.svg" alt="" />
                </div>
            </div>

            {/* BOX 04 */}
            <div className="framework-box relative">
                <div className="framwork-icon-box flex items-center justify-between mb-4">
                    <div className="f-icon">
                        <img src="assets/images/healthcare/icon/Vector2.png" alt="" />
                    </div>
                    <h4 className="heading-4">04</h4>
                </div>

                <p className="heading-7 mb-3"> Launch</p>

                <ul className="space-y-2">
                       <li class="B-3">
                                App store deployment
                            </li>
                            <li class="B-3">
                                Performance optimization
                            </li>
                            <li class="B-3">
                                System monitoring
                            </li>
                </ul>

                <div className="framework-direction-1 mt-4 hidden md:block">
                    <img src="assets/images/healthcare/icon/Vector 11.svg" alt="" />
                </div>
            </div>

            {/* BOX 05 */}
            <div className="framework-box">
                <div className="framwork-icon-box flex items-center justify-between mb-4">
                    <div className="f-icon">
                        <img
                            src="assets/images/healthcare/icon/material-symbols_analytics.png"
                            alt=""
                        />
                    </div>
                    <h4 className="heading-4">05</h4>
                </div>

                <p className="heading-7 mb-3">Scale</p>

                <ul className="space-y-2">
                     <li class="B-3">
                                Feature expansion
                            </li>
                            <li class="B-3">
                                Traffic and fleet scaling
                            </li>
                            <li class="B-3">
                                Ongoing enhancements
                            </li>

                </ul>
            </div>
        </div>

        {/* Bottom Text */}
        <div className="framework-box-2 text-center mt-10">
            <p className="heading-7">
                 This framework ensures fast go-to-market and long-term platform success.
            </p>
        </div>
    </div>
</section>


   <section className="industry ind-5">
    {/* Heading */}
    <h3 className="heading-3 font-lustria mb-10">
        Our Approach to <span>Taxi Booking App Solutions  </span> at Dousoft
    </h3>

    {/* Row 1 */}
    <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
            <div className="industry-card">
               <div class="overlay-shadow taxi-ind-5-picture-1">

                    </div>
                    <div >
                        <p class="heading-7">
                           Passenger Booking Applications
                        </p>
                        <p class="B-3">
                           Apps that allow users to book rides, track drivers, make payments, and rate services.
                        </p>
                    </div>
            </div>
        </div>

        <div>
            <div className="industry-card">
                <div class="overlay-shadow taxi-ind-5-picture-2">

                    </div>
                    <div >
                        <p class="heading-7">
                          Driver Applications
                        </p>
                        <p class="B-3">
                            Dedicated driver apps with ride requests, navigation, earnings tracking, and availability management.
                        </p>
                    </div>
            </div>
        </div>
    </div>

    {/* Row 2 */}
    <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <div className="industry-card">
              <div class="overlay-shadow taxi-ind-5-picture-3">

                    </div>
                    <div >
                        <p class="heading-7">
                          Admin & Fleet Management Systems
                        </p>
                        <p class="B-3">
                            Centralized dashboards for ride management, pricing control, analytics, and fleet operations.
                        </p>
                    </div>
            </div>
        </div>

        <div>
            <div className="industry-card">
               <div class="overlay-shadow taxi-ind-5-picture-4">

                    </div>
                    <div >
                        <p class="heading-7">
                           Payment & NFC Payment Integration
                        </p>
                        <p class="B-3">
                           Secure payment options including cards, wallets, and NFC payments for faster transactions.
                        </p>
                    </div>
            </div>
        </div>
    </div>
</section>


    <section className="industry ind-6">
        <h3 className="heading-3">
          Benefits of <span>Dousoft IT</span> Taxi Booking App Development
        </h3>

        <div className="why-card-row">

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-3.png" alt=""/>
                </div>
               <p class="heading-7">
                      Faster ride booking and dispatch
                </p>
            </div>


            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-4.png" alt=""/>
                </div>
             <p class="heading-7">
                     Improved customer satisfaction
                </p>
            </div>

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-5.png" alt=""/>
                </div>
                 <p class="heading-7">
                   Efficient fleet management
                </p>
            </div>


            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-6.png" alt=""/>
                </div>
                 <p class="heading-7">
                  Scalable platforms
                </p>
            </div>

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-7.png" alt=""/>
                </div>
               <p class="heading-7">
                 Real-time operational insights
                </p>
            </div>

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-8.png" alt=""/>
                </div>
                <p class="heading-7">
                    Secure  platforms 
                </p>
            </div>
        </div>
    </section>

    <section className="industry ind-7">
    <h3 className="heading-3 mb-10">
      Why Choose <span>Dousoft IT</span> for Taxi Booking App Development ?
    </h3>

    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div>
           <div class="overlay-shadow-2 taxi-5-picture-5">

                </div>
        </div>

        {/* Right Content */}
        <div className="space-y-4">
            <div className="icon-heading flex items-start gap-4">
                <div className="icon">
                    <img src="assets/images/healthcare/icon/bxs_badge-check.png" alt="" />
                </div>
                             <p class="heading-7 font-lustria ">
                       Proven mobility solution expertise
                    </p>
            </div>

            <div className="icon-heading flex items-start gap-4">
                <div className="icon">
                    <img src="assets/images/healthcare/icon/Vector-9.png" alt="" />
                </div>
                 <p class="heading-7 font-lustria ">
                       Framework-based development
                    </p>
            </div>

            <div className="icon-heading flex items-start gap-4">
                <div className="icon">
                    <img src="assets/images/healthcare/icon/material-symbols_check-circle.png" alt="" />
                </div>
                  <p class="heading-7 font-lustria ">
                        Focus on performance and scalability
                    </p>
            </div>

            <div className="icon-heading flex items-start gap-4">
                <div className="icon">
                    <img src="assets/images/healthcare/icon/material-symbols_shield.png" alt="" />
                </div>
              <p class="heading-7 font-lustria ">
                          Secure payment integrations
                    </p>
            </div>

            <div className="icon-heading flex items-start gap-4">
                <div className="icon">
                    <img src="assets/images/healthcare/icon/Vector (1).png" alt="" />
                </div>
               <p class="heading-7 font-lustria ">
                        Continuous support and optimization
                    </p>
            </div>
        </div>
    </div>

    {/* Bottom Text */}
    <div className="mt-10">
        <div className="icon-heading">
           <p class="heading-7 font-lustria ">
                       We don’t just build taxi apps we create intelligent mobility ecosystems that drive growth and operational efficiency.
                    </p>
        </div>
    </div>
</section>


   <section className="industry ind-8 relative">
    <div className="star-bg"></div>

    <div className="flex flex-col items-center text-center px-4 py-16 max-w-4xl mx-auto">
       <h3 class="heading-3 mb-4">
                      Launch Your Taxi Booking Platform with Dousoft
                 </h3>
                 <p class="B-1 pb-8">
                      Whether you are building a local taxi service or scaling a ride-hailing platform, Dousoft delivers taxi booking solutions designed for reliability, growth, and customer satisfaction.
                 </p>


        <div className="cta-btn flex items-center gap-3 cursor-pointer">
            <p className="B-1">
                Get Started Today
            </p>
            <div className="btn-icon">
                <img src="assets/images/healthcare/icon/Container.png" alt="" />
            </div>
        </div>
    </div>
</section>
 </div>

<FooterTop/>

<Footer/>

      
    </div>
  )
}

export default page
