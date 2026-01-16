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
         title="Travel Solutions"
        description="End-to-end travel solutions that simplify bookings, itineraries, and customer experiences through smart digital platforms."
        breadcrumb="Home > Travel Solutions"
        />

      <div className='solution-page'>

     
         <section className="industry">
    <div className="container mx-auto max-w-7xl px-4">
        <div className="row flex flex-wrap -mx-3">
            <div className="col-md-6 w-full md:w-1/2 px-3">
                <h3 className="heading-3 font-lustria">
                     Innovative   <span>Digital Travel Solutions </span> for Seamless Customer Experiences
                </h3>
                <p class="B-1 font-notosans">
                        At Dousoft, we help travel agencies, tour operators, hospitality providers, and tourism businesses build digital solutions that enhance customer experiences, optimize operations, and drive sustainable growth. Our Travel & Tourism Solutions are designed to meet the evolving expectations of modern travelers while supporting business scalability and efficiency.
                    </p>
                    <p class="B-1 font-notosans">
                        We approach travel technology with a customer-experience-first and business-aligned mindset, ensuring every solution delivers value across the entire travel journey.
                    </p>
            </div>

            <div className="col-md-6 w-full md:w-1/2 px-3">
               <div class="Background-Shadow-6">

                    </div>
            </div>
        </div>
    </div>
</section>



    <section class="industry ind-2">
    <h3 class="heading-3 font-lustria mb-10">
       Dousoft’s Approach to <span>Travel & Tourism Solutions</span>
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
                                    Experience-Driven Business Strategy
                                </p>
                    </div>

                    <p class="B-3 font-notosans mb-4">
                         The travel industry relies heavily on user experience, trust, and convenience. At Dousoft, we begin by understanding your business model, target audience, and service offerings to design solutions that simplify booking, improve engagement, and increase conversions.
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
                               Seamless booking experiences
                            </p>
                        </div>

                        <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/flowbite_users-solid.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                               Personalized travel journeys
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
 Scalable digital platforms
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
                                   Customer-Centric Platform Design
                                </p>
                    </div>

                    <p class="B-3 font-notosans mb-4">
                        We design visually appealing and intuitive platforms that allow users to discover, plan, and book travel services effortlessly across web and mobile devices.
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


   
    <section class="industry ind-3 travel-ind-3">

    </section>

    <section className="industry ind-4">
    <div className="main-frame">
        {/* Heading */}
        <div className="ind-4-heading text-center mb-10">
            <h3 class="heading-3">
                    Dousoft Travel  Delivery Framework
                </h3>
                <p class="B-1">
                    We follow a structured framework to deliver consistent, high-quality Travel  solutions:
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

                <p className="heading-7 mb-3">Discover</p>

                <ul className="space-y-2">
                       <li class="B-3">
                                 Business and service analysis
                            </li>
                            <li class="B-3">
                                Customer journey mapping
                            </li>
                            <li class="B-3">
                                Technology and integration assessment
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
                               User-focused UX/UI design
                            </li>
                            <li class="B-3">
                                Scalable system architecture
                            </li>
                            <li class="B-3">
                                Payment and API integration planning
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
                                Modular and extensible components
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

                <p className="heading-7 mb-3">Deploy</p>

                <ul className="space-y-2">
                     <li class="B-3">
                                 Secure platform deployment
                            </li>
                            <li class="B-3">
                                Performance optimization
                            </li>
                            <li class="B-3">
                                Analytics and monitoring setup
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

                <p className="heading-7 mb-3">Enhance</p>

                <ul className="space-y-2">
                    <li class="B-3">
                                Feature upgrades
                            </li>
                            <li class="B-3">
                              Performance scaling
                            </li>
                            <li class="B-3">
                              Continuous improvement
                            </li>

                </ul>
            </div>
        </div>

        {/* Bottom Text */}
        <div className="framework-box-2 text-center mt-10">
            <p className="heading-7">
                This framework ensures faster time-to-market and long-term platform reliability.
            </p>
        </div>
    </div>
</section>


   <section className="industry ind-5">
    {/* Heading */}
    <h3 className="heading-3 font-lustria mb-10">
       Our Approach to <span>Travel & Tourism  </span> at Dousoft
    </h3>

    {/* Row 1 */}
    <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
            <div className="industry-card">
               <div class="overlay-shadow travel-ind-5-picture-1">

                    </div>
                    <div >
                        <p class="heading-7">
                           Travel Booking Platforms
                        </p>
                        <p class="B-3">
                           Custom booking systems for flights, hotels, tours, and travel packages with real-time availability and pricing.
                        </p>
                    </div>
            </div>
        </div>

        <div>
            <div className="industry-card">
               <div class="overlay-shadow travel-ind-5-picture-2">

                    </div>
                    <div >
                        <p class="heading-7">
                           Travel Mobile App Development
                        </p>
                        <p class="B-3">
                           Mobile applications that enable travelers to search, book, manage itineraries, and receive real-time updates.
                        </p>
                    </div>
            </div>
        </div>
    </div>

    {/* Row 2 */}
    <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <div className="industry-card">
               <div class="overlay-shadow travel-ind-5-picture-3">

                    </div>
                    <div>
                        <p class="heading-7">
                          Payment & NFC Payment Integration
                        </p>
                        <p class="B-3">
                            Secure payment solutions including digital wallets and NFC payments for faster and contactless transactions.
                        </p>
                    </div>
            </div>
        </div>

        <div>
            <div className="industry-card">
                <div class="overlay-shadow travel-ind-5-picture-4">

                    </div>
                    <div >
                        <p class="heading-7">
                           CRM & Customer Engagement Systems
                        </p>
                        <p class="B-3">
                          Integrated CRM platforms to manage customer interactions, preferences, and loyalty programs.
                        </p>
                    </div>
            </div>
        </div>
    </div>
</section>


    <section className="industry ind-6">
        <h3 className="heading-3">
           Benefits of <span>Dousoft IT</span> Travel & Tourism Solutions
        </h3>

        <div className="why-card-row">

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-3.png" alt=""/>
                </div>
                <p class="heading-7">
                   Improved customer experience
                </p>
            </div>


            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-4.png" alt=""/>
                </div>
                <p class="heading-7">
                    Faster booking and payment processes
                </p>
            </div>

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-5.png" alt=""/>
                </div>
               <p class="heading-7">
                     Reduced operational overhead
                </p>
            </div>


            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-6.png" alt=""/>
                </div>
                 <p class="heading-7">
                     Increased customer retention
                </p>
            </div>

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-7.png" alt=""/>
                </div>
                 <p class="heading-7">
                    Scalable Travel & Tourism  platforms
                </p>
            </div>

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-8.png" alt=""/>
                </div>
                <p class="heading-7">
                    Secure Travel & Tourism  platforms
                </p>
            </div>
        </div>
    </section>

    <section className="industry ind-7">
    <h3 className="heading-3 mb-10">
        Why Choose <span>Dousoft IT</span> for Travel & Tourism Solutions ?
    </h3>

    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div>
            <div class="overlay-shadow-2 travel-5-picture-5">

                </div>
        </div>

        {/* Right Content */}
        <div className="space-y-4">
            <div className="icon-heading flex items-start gap-4">
                <div className="icon">
                    <img src="assets/images/healthcare/icon/bxs_badge-check.png" alt="" />
                </div>
                <p class="heading-7 font-lustria ">
                           Expertise in travel technology
                    </p>
            </div>

            <div className="icon-heading flex items-start gap-4">
                <div className="icon">
                    <img src="assets/images/healthcare/icon/Vector-9.png" alt="" />
                </div>
                 <p class="heading-7 font-lustria ">
                          Expertise in travel technology
                    </p>
            </div>

            <div className="icon-heading flex items-start gap-4">
                <div className="icon">
                    <img src="assets/images/healthcare/icon/material-symbols_check-circle.png" alt="" />
                </div>
                 <p class="heading-7 font-lustria ">
                         Focus on user experience and efficiency
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
                      Ongoing optimization and support
                    </p>
            </div>
        </div>
    </div>

    {/* Bottom Text */}
    <div className="mt-10">
        <div className="icon-heading">
            <p className="heading-7 font-lustria">
                 We don’t just build travel software—we create digital travel ecosystems that support growth, engagement, and operational excellence.
            </p>
        </div>
    </div>
</section>


   <section className="industry ind-8 relative">
    <div className="star-bg"></div>

    <div className="flex flex-col items-center text-center px-4 py-16 max-w-4xl mx-auto">
        <h3 className="heading-3 mb-4">
               Elevate Your Travel Business with Dousoft
        </h3>

        <p className="B-1 pb-8">
           Whether you are launching a travel booking platform, building a mobile app, or optimizing customer engagement systems, Dousoft delivers travel solutions that help you stay competitive in the digital travel landscape.
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
