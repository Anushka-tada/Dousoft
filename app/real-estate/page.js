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
         title="Real Estate"
        description="Innovative real estate solutions to manage properties, listings, and customers with ease and efficiency."
        breadcrumb="Home > Healthcare Solutions"
        />

      <div className='solution-page'>
      
     <section class="industry ind-1 px-3 sm:px-6 md:px-10 lg:px-14">
  <div class="grid grid-cols-1 md:grid-cols-2">
    
    <div>
      <h3 class="heading-3 font-lustria">
        Smart Digital <span> Real Estate Solutions</span> for Faster Growth & Better Engagement
      </h3>

      <p class="B-1 font-notosans">
        At Dousoft, we help real estate companies, property developers, brokers, and real estate startups leverage technology to streamline operations, improve customer engagement, and accelerate sales cycles. Our Real Estate Solutions are designed to support digital transformation across residential, commercial, and property management businesses.
      </p>

      <p class="B-1 font-notosans">
        We approach real estate technology with a market-driven and customer-focused strategy, ensuring that every solution aligns with business objectives and evolving buyer expectations.
      </p>
    </div>

    <div>
      <div class="Background-Shadow-5"></div>
    </div>

  </div>
</section>

  <section class="industry ind-2">
    <h3 class="heading-3 font-lustria mb-10">
        Dousoft’s Approach to <span>Real Estate Solutions</span>
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* <!-- LEFT CARD --> */}
        <div>
            <div class="industry-card">
                <div class="box">
                    <div class="icon-heading flex items-center gap-4 mb-4">
                        <div class="icon service-inner-shadow">
                            <img src="assets/images/healthcare/icon/material-symbols_strategy.png" alt=""/>
                        </div>
                        <p class="heading-7 font-lustria">
                              Business-Centric Real Estate Strategy
                        </p>
                    </div>

                   <p class="B-3 font-notosans mb-4">
                               Real estate success depends on visibility, trust, and speed. At Dousoft, we start by understanding your property portfolio, sales processes, customer journey, and operational challenges.
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
                                  Faster lead generation and conversion
                            </p>
                        </div>

                        <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/flowbite_users-solid.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                                 Improved property visibility
                            </p>
                        </div>
                    </div>

                    <div class="approach-box grid grid-cols-2 gap-4" >
                        <div class="icon-box flex items-center justify-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/material-symbols_shield-lock.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                                Streamlined sales and management workflows
                            </p>
                        </div>

                        <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/material-symbols_speed.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                              Data-driven decision making
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
                        <div class="icon service-inner-shadow">
                            <img src="assets/images/healthcare/icon/mdi_certificate.png" alt=""/>
                        </div>
                        <p class="heading-7 font-lustria">
                           Experience-Led Digital Design
                        </p>
                    </div>

                    <p class="B-3 font-notosans mb-4">
                                                      Property buyers and tenants expect intuitive and visually engaging platforms. We design real estate solutions that provide seamless browsing, property discovery, and inquiry experiences across devices.
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

     
      <section class="industry ind-3 real-ind-3">

    </section>
         
         <section class="industry ind-4">
  <div class="main-frame">

    <div class="text-center ind-4-heading">
      <h3 class="heading-3">
        Dousoft Real Estate Delivery Framework
      </h3>
      <p class="B-1">
        We follow a structured framework to deliver consistent, high-quality Finance solutions:
      </p>
    </div>

   <div className="framework grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">

      <div class="framework-box  service-card">

        <div class="framwork-icon-box">
          <div class="f-icon service-inner-shadow">
            <img src="assets/images/healthcare/icon/Vector.png" alt=""/>
          </div>
          <h4 class="heading-4">01</h4>
        </div>

        <div>
          <p class="heading-7">Plan</p>
        </div>

        <div>
          <ul className='space-y-2'>
            <li class="B-3">Business and market analysis</li>
            <li class="B-3">Property and workflow assessment</li>
            <li class="B-3">Technology requirement mapping</li>
          </ul>
        </div>

        <div class="framework-direction-1">
          <img src="assets/images/healthcare/icon/Vector 11.svg" alt=""/>
        </div>
      </div>

      <div class="framework-box  service-card">

        <div class="framwork-icon-box">
          <div class="f-icon service-inner-shadow">
            <img src="assets/images/healthcare/icon/Group.png" alt=""/>
          </div>
          <h4 class="heading-4">02</h4>
        </div>

        <div>
          <p class="heading-7">Design</p>
        </div>

        <div>
         <ul className='space-y-2'>
            <li class="B-3">User-centric UX/UI design</li>
            <li class="B-3">Scalable and secure architecture</li>
            <li class="B-3">CRM and third-party integration planning</li>
          </ul>
        </div>

        <div class="framework-direction-1">
          <img src="assets/images/healthcare/icon/Vector 11.svg" alt=""/>
        </div>
      </div>

      <div class="framework-box  service-card">

        <div class="framwork-icon-box">
          <div class="f-icon service-inner-shadow">
            <img src="assets/images/healthcare/icon/mingcute_code-fill.png" alt=""/>
          </div>
          <h4 class="heading-4">03</h4>
        </div>

        <div>
          <p class="heading-7">Develop</p>
        </div>

        <div>
          <ul className='space-y-2'>
            <li class="B-3">Agile development approach</li>
            <li class="B-3">Modular and extensible systems</li>
            <li class="B-3">Continuous testing</li>
          </ul>
        </div>

        <div class="framework-direction-1">
          <img src="assets/images/healthcare/icon/Vector 11.svg" alt=""/>
        </div>
      </div>

      <div class="framework-box  service-card">

        <div class="framwork-icon-box">
          <div class="f-icon service-inner-shadow">
            <img src="assets/images/healthcare/icon/Vector2.png" alt=""/>
          </div>
          <h4 class="heading-4">04</h4>
        </div>

        <div>
          <p class="heading-7">Launch</p>
        </div>

        <div>
         <ul className='space-y-2'>
            <li class="B-3">Secure deployment</li>
            <li class="B-3">Performance and SEO optimization</li>
            <li class="B-3">Analytics integration</li>
          </ul>
        </div>

        <div class="framework-direction-1">
          <img src="assets/images/healthcare/icon/Vector 11.svg" alt=""/>
        </div>
      </div>

      <div class="framework-box  service-card">

        <div class="framwork-icon-box">
          <div class="f-icon service-inner-shadow">
            <img src="assets/images/healthcare/icon/material-symbols_analytics.png" alt=""/>
          </div>
          <h4 class="heading-4">05</h4>
        </div>

        <div>
          <p class="heading-7">Optimize</p>
        </div>

        <div>
          <ul className='space-y-2'>
            <li class="B-3">Lead performance tracking</li>
            <li class="B-3">Feature enhancements</li>
            <li class="B-3">Platform scalability improvements</li>
          </ul>
        </div>

      </div>
    </div>

    <div class="framework-box-2 service-card">
      <p class="heading-7">
        This framework ensures efficient delivery and long-term platform success.
      </p>
    </div>

  </div>
</section>

<section class="industry ind-5">
  
  <div>
    <h3 class="heading-3 font-lustria">
      Our Approach to <span>Real Estate Solutions</span> at Dousoft
    </h3>
  </div>

  <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    
    <div>
      <div class="industry-card">
        <div class="overlay-shadow real-ind-5-picture-1"></div>
        <div>
          <p class="heading-7">
            Real Estate Web & Mobile Platforms
          </p>
          <p class="B-3">
            Custom-built websites and mobile applications for property listings, virtual tours, and lead management.
          </p>
        </div>
      </div>
    </div>

    <div>
      <div class="industry-card">
        <div class="overlay-shadow real-ind-5-picture-2"></div>
        <div>
          <p class="heading-7">
            Property Management Systems
          </p>
          <p class="B-3">
            Solutions to manage rentals, tenants, maintenance, payments, and reporting from a single platform.
          </p>
        </div>
      </div>
    </div>

  </div>

  <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    
    <div>
      <div class="industry-card">
        <div class="overlay-shadow real-ind-5-picture-3"></div>
        <div>
          <p class="heading-7">
            CRM & Lead Management Solutions
          </p>
          <p class="B-3">
            Integrated CRM systems to track leads, automate follow-ups, and improve sales conversions.
          </p>
        </div>
      </div>
    </div>

    <div>
      <div class="industry-card">
        <div class="overlay-shadow real-ind-5-picture-4"></div>
        <div>
          <p class="heading-7">
            Virtual Tours & Interactive Property Showcases
          </p>
          <p class="B-3">
            Immersive digital experiences that allow buyers to explore properties remotely, improving engagement and decision-making.
          </p>
        </div>
      </div>
    </div>

  </div>

</section>

<section class="industry ind-6">
  <h3 class="heading-3">
    Benefits of <span>Dousoft IT</span> Real Estate Solution
  </h3>

  <div class="why-card-row">

    <div class="why-card">
      <div class="why-icon">
        <img src="assets/images/healthcare/icon/Vector-3.png" alt=""/>
      </div>
      <p class="heading-7">
        Faster lead conversion
      </p>
    </div>

    <div class="why-card">
      <div class="why-icon">
        <img src="assets/images/healthcare/icon/Vector-4.png" alt=""/>
      </div>
      <p class="heading-7">
        Improved customer engagement
      </p>
    </div>

    <div class="why-card">
      <div class="why-icon">
        <img src="assets/images/healthcare/icon/Vector-5.png" alt=""/>
      </div>
      <p class="heading-7">
        Streamlined property management
      </p>
    </div>

    <div class="why-card">
      <div class="why-icon">
        <img src="assets/images/healthcare/icon/Vector-6.png" alt=""/>
      </div>
      <p class="heading-7">
        Enhanced digital visibility
      </p>
    </div>

    <div class="why-card">
      <div class="why-icon">
        <img src="assets/images/healthcare/icon/Vector-7.png" alt=""/>
      </div>
      <p class="heading-7">
        Scalable Real Estate platforms
      </p>
    </div>

    <div class="why-card">
      <div class="why-icon">
        <img src="assets/images/healthcare/icon/Vector-8.png" alt=""/>
      </div>
      <p class="heading-7">
        Secure Real Estate platforms
      </p>
    </div>

  </div>
</section>

<section class="industry ind-7">
  <h3 class="heading-3">
    Why Choose <span>Dousoft IT</span> for Real Estate Solutions ?
  </h3>

  <div class="grid grid-cols-1 lg:grid-cols-2">
    
    <div>
      <div class="overlay-shadow-2 real-5-picture-5"></div>
    </div>

    <div>
      <div class="icon-heading">
        <div class="icon service-inner-shadow">
          <img src="assets/images/healthcare/icon/bxs_badge-check.png" alt=""/>
        </div>
        <p class="heading-7 font-lustria">
          Real estate domain expertise
        </p>
      </div>

      <div class="icon-heading">
        <div class="icon  service-inner-shadow">
          <img src="assets/images/healthcare/icon/Vector-9.png" alt=""/>
        </div>
        <p class="heading-7 font-lustria">
          Proven delivery framework
        </p>
      </div>

      <div class="icon-heading">
        <div class="icon  service-inner-shadow">
          <img src="assets/images/healthcare/icon/material-symbols_check-circle.png" alt=""/>
        </div>
        <p class="heading-7 font-lustria">
          Focus on performance and scalability
        </p>
      </div>

      <div class="icon-heading">
        <div class="icon  service-inner-shadow">
          <img src="assets/images/healthcare/icon/material-symbols_shield.png" alt=""/>
        </div>
        <p class="heading-7 font-lustria">
          Seamless integrations
        </p>
      </div>

      <div class="icon-heading">
        <div class="icon  service-inner-shadow">
          <img src="assets/images/healthcare/icon/Vector (1).png" alt=""/>
        </div>
        <p class="heading-7 font-lustria">
          Continuous optimization and support
        </p>
      </div>
    </div>

  </div>

  <div>
    <div class="icon-heading">
      <p class="heading-7 font-lustria">
        We don’t just build real estate platforms—we create digital property ecosystems that drive growth, efficiency, and customer trust.
      </p>
    </div>
  </div>
</section>


<section class="industry ind-8">
  <div class="star-bg"></div>

 <div className="flex flex-col items-center text-center px-4 py-16 max-w-4xl mx-auto">
    <h3 class="heading-3">
      Accelerate Your Real Estate Business with Dousoft
    </h3>

    <p class="B-1">
      Whether you’re launching a property portal, managing large portfolios, or optimizing sales operations, Dousoft delivers real estate solutions that help you compete and grow in a digital-first market.
    </p>

    <center>
       <div className="cta-btn flex items-center gap-3 cursor-pointer">
        <p class="B-1">
          Get Started Today
        </p>
        <div class="btn-icon">
          <img src="assets/images/healthcare/icon/Container.png" alt=""/>
        </div>
      </div>
    </center>
  </div>
</section>


 </div>

<FooterTop/>

<Footer/>

      
    </div>
  )
}

export default page
