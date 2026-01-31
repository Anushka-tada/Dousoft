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
         title="Finance Solutions"
        description="Secure and intelligent finance solutions to streamline transactions, manage data, and drive smarter financial decisions."
        breadcrumb="Home > Finance Solutions"
        />

      <div className='solution-page'>

     
         <section className="industry">
    <div className="container mx-auto max-w-7xl px-4">
        <div className="row flex flex-wrap -mx-3">
            <div className="col-md-6 w-full md:w-1/2 px-3">
                <h3 className="heading-3 font-lustria">
                  Secure, Scalable & Intelligent   <span>Financial Technology Solutions</span>
                </h3>
                <p class="B-1 font-notosans">
                        At Dousoft, we help banks, financial institutions, fintech startups, and enterprises build secure and scalable digital finance solutions that improve customer trust, operational efficiency, and regulatory compliance. Our Finance & Banking Solutions are designed to modernize financial services while ensuring data security, performance, and reliability
                    </p>
                    <p class="B-1 font-notosans">
                        We approach financial technology with a risk-aware, compliance-driven, and business-first mindset, ensuring that every solution supports both operational stability and digital innovation.
                    </p>
            </div>

            <div className="col-md-6 w-full md:w-1/2 px-3">
<div class="Background-Shadow-4">

                    </div>
            </div>
        </div>
    </div>
</section>



    <section class="industry ind-2">
    <h3 class="heading-3 font-lustria mb-10">
                Dousoft’s Approach to <span>Finance & Banking Solutions</span>
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
                        <p class="heading-7 font-lustria ">
                                    Business & Compliance-First Strategy
                                </p>
                    </div>

                    <p class="B-3 font-notosans mb-4">
                       Financial systems operate in highly regulated environments where accuracy, security, and compliance are critical. At Dousoft, we begin by understanding your business model, regulatory requirements, and risk landscape before designing any solution.
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
                              Secure digital transactions
                            </p>
                        </div>

                        <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/flowbite_users-solid.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                                 Regulatory compliance
                            </p>
                        </div>
                    </div>

                    <div class="approach-box grid grid-cols-2 gap-4" >
                        <div class="icon-box flex items-center justify-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/material-symbols_shield-lock.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                                Customer trust and experience
                            </p>
                        </div>

                        <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/material-symbols_speed.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                               Operational efficiency and scalability
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
                           Customer-Centric Financial Experiences
                        </p>
                    </div>

                    <p class="B-3 font-notosans mb-4">
                         Modern customers expect fast, seamless, and transparent financial services. We design digital platforms that simplify complex financial processes while maintaining high security standards.
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


  
    <section class="industry ind-3 fin-ind-3">

    </section>

    <section className="industry ind-4">
    <div className="main-frame">
        {/* Heading */}
        <div className="ind-4-heading text-center mb-10">
            <h3 class="heading-3">
                    Dousoft Finance Delivery Framework
                </h3>
            <p class="B-1">
                    We follow a structured framework to deliver consistent, high-quality Finance solutions:
                </p>
        </div>

        {/* Framework Grid */}
        <div className="framework grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {/* BOX 01 */}
            <div className="framework-box relative service-card">
                <div className="framwork-icon-box flex items-center justify-between mb-4">
                    <div className="f-icon service-inner-shadow">
                        <img src="assets/images/healthcare/icon/Vector.png" alt="" />
                    </div>
                    <h4 className="heading-4">01</h4>
                </div>

                <p className="heading-7 mb-3">Analyze</p>

                <ul className="space-y-2">
                                              <li class="B-3">
                               Business and operational assessment
                            </li>
                            <li class="B-3">
                               Regulatory and compliance evaluation
                            </li>
                            <li class="B-3">
                                Risk and security analysis
                            </li>
                </ul>

                <div className="framework-direction-1 mt-4 hidden md:block">
                    <img src="assets/images/healthcare/icon/Vector 11.svg" alt="" />
                </div>
            </div>

            {/* BOX 02 */}
            <div className="framework-box relative service-card">
                <div className="framwork-icon-box flex items-center justify-between mb-4">
                    <div className="f-icon service-inner-shadow">
                        <img src="assets/images/healthcare/icon/Group.png" alt="" />
                    </div>
                    <h4 className="heading-4">02</h4>
                </div>

                <p className="heading-7 mb-3">  Secure</p>

                <ul className="space-y-2">
                     <li class="B-3">
                               Secure system architecture design
                            </li>
                            <li class="B-3">
                               Data encryption and access control
                            </li>
                            <li class="B-3">
                                Compliance-ready workflows
                            </li>
                </ul>

                <div className="framework-direction-1 mt-4 hidden md:block">
                    <img src="assets/images/healthcare/icon/Vector 11.svg" alt="" />
                </div>
            </div>

            {/* BOX 03 */}
            <div className="framework-box relative service-card">
                <div className="framwork-icon-box flex items-center justify-between mb-4">
                    <div className="f-icon service-inner-shadow">
                        <img src="assets/images/healthcare/icon/mingcute_code-fill.png" alt="" />
                    </div>
                    <h4 className="heading-4">03</h4>
                </div>

                <p className="heading-7 mb-3">Build</p>

                <ul className="space-y-2">
                  <li class="B-3">
                                Agile and modular development
                            </li>
                            <li class="B-3">
                                Secure API and system development
                            </li>
                            <li class="B-3">
                                Continuous testing and validation
                            </li>
                </ul>

                <div className="framework-direction-1 mt-4 hidden md:block">
                    <img src="assets/images/healthcare/icon/Vector 11.svg" alt="" />
                </div>
            </div>

            {/* BOX 04 */}
            <div className="framework-box relative service-card">
                <div className="framwork-icon-box flex items-center justify-between mb-4">
                    <div className="f-icon service-inner-shadow">
                        <img src="assets/images/healthcare/icon/Vector2.png" alt="" />
                    </div>
                    <h4 className="heading-4">04</h4>
                </div>

                <p className="heading-7 mb-3">Integrate</p>

                <ul className="space-y-2">
                   <li class="B-3">
                                Core banking and third-party system integration
                            </li>
                            <li class="B-3">
                                  Payment gateway and NFC payment integration
                            </li>
                            <li class="B-3">
                                  Data synchronization and interoperability
                            </li>
                </ul>

                <div className="framework-direction-1 mt-4 hidden md:block">
                    <img src="assets/images/healthcare/icon/Vector 11.svg" alt="" />
                </div>
            </div>

            {/* BOX 05 */}
            <div className="framework-box service-card">
                <div className="framwork-icon-box flex items-center justify-between mb-4">
                    <div className="f-icon service-inner-shadow">
                        <img
                            src="assets/images/healthcare/icon/material-symbols_analytics.png"
                            alt=""
                        />
                    </div>
                    <h4 className="heading-4">05</h4>
                </div>

                <p className="heading-7 mb-3">Optimize</p>

                <ul className="space-y-2">
                     <li class="B-3">
                                Performance monitoring
                            </li>
                            <li class="B-3">
                                Security updates and enhancements
                            </li>
                            <li class="B-3">
                                Scalability planning
                            </li>
                </ul>
            </div>
        </div>

        {/* Bottom Text */}
        <div className="framework-box-2 text-center mt-10 service-card">
            <p className="heading-7">
                 This framework ensures robust, compliant, and future-ready financial solutions.
            </p>
        </div>
    </div>
</section>


   <section className="industry ind-5">
    {/* Heading */}
    <h3 class="heading-3 font-lustria mb-10">
                Our Approach to <span>Finance & Banking Solutions  </span> at Dousoft
            </h3>

    {/* Row 1 */}
    <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
            <div className="industry-card">
 <div class="overlay-shadow fin-ind-5-picture-1">

                    </div>
                <div>
                  <p class="heading-7">
                           Digital Banking Platforms
                        </p>
                        <p class="B-3">
                           Custom digital banking solutions including customer portals, account management systems, and transaction platforms.
                        </p>
                </div>
            </div>
        </div>

        <div>
            <div className="industry-card">
                <div class="overlay-shadow fin-ind-5-picture-2">

                    </div>
                <div>
                     <p class="heading-7">
                           Payment & Transaction Solutions
                        </p>
                        <p class="B-3">
                            Secure payment processing systems with support for online payments, mobile wallets, and NFC payment solutions for faster, contactless transactions.
                        </p>
                </div>
            </div>
        </div>
    </div>

    {/* Row 2 */}
    <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <div className="industry-card">
                 <div class="overlay-shadow fin-ind-5-picture-3">

                    </div>

                <div>
                     <p class="heading-7">
                          Fintech Application Development
                        </p>
                        <p class="B-3">
                            End-to-end fintech solutions for lending platforms, digital wallets, investment management, and financial analytics.
                        </p>
                </div>
            </div>
        </div>

        <div>
            <div className="industry-card">
              <div class="overlay-shadow fin-ind-5-picture-4">

                    </div>
                    <div >
                        <p class="heading-7">
                           Risk & Compliance Management Systems
                        </p>
                        <p class="B-3">
                           Automated compliance tracking, audit management, and reporting solutions to meet regulatory standards efficiently.
                        </p>
                    </div>
            </div>
        </div>
    </div>
</section>


    <section className="industry ind-6">
      <h3 class="heading-3">
            Benefits of <span>Dousoft IT</span> Finance & Banking 
        </h3>
        <div className="why-card-row">

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-3.png" alt=""/>
                </div>
              <p class="heading-7">
                    Enhanced transaction security
                </p>
            </div>


            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-4.png" alt=""/>
                </div>
                   <p class="heading-7">
                    Improved regulatory compliance
                </p>
            </div>

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-5.png" alt=""/>
                </div>
               <p class="heading-7">
                     Faster financial operations
                </p>
            </div>


            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-6.png" alt=""/>
                </div>
              <p class="heading-7">
                      Reduced operational risk
                </p>
            </div>

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-7.png" alt=""/>
                </div>
                <p class="heading-7">
                    Scalable digital finance platforms
                </p>
            </div>

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-8.png" alt=""/>
                </div>
                <p class="heading-7">
                    Secure digital finance platforms
                </p>
            </div>
        </div>
    </section>

    <section className="industry ind-7">
     <h3 class="heading-3">
            Why Choose <span>Dousoft IT</span> for Finance & Banking Solutions ?
        </h3>

    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div>
             <div class="overlay-shadow-2 fin-5-picture-5">

                </div>
        </div>

        {/* Right Content */}
        <div className="space-y-4">
            <div className="icon-heading flex items-start gap-4">
                <div className="icon service-inner-shadow">
                    <img src="assets/images/healthcare/icon/bxs_badge-check.png" alt="" />
                </div>
              <p class="heading-7 font-lustria ">
                        Strong focus on security and compliance
                    </p>
            </div>

            <div className="icon-heading flex items-start gap-4">
                <div className="icon service-inner-shadow">
                    <img src="assets/images/healthcare/icon/Vector-9.png" alt="" />
                </div>
              <p class="heading-7 font-lustria ">
                          Proven framework-based delivery
                    </p>
            </div>

            <div className="icon-heading flex items-start gap-4">
                <div className="icon service-inner-shadow">
                    <img src="assets/images/healthcare/icon/material-symbols_check-circle.png" alt="" />
                </div>
             <p class="heading-7 font-lustria ">
                        Expertise in fintech and payment technologies
                    </p>
            </div>

            <div className="icon-heading flex items-start gap-4">
                <div className="icon service-inner-shadow">
                    <img src="assets/images/healthcare/icon/material-symbols_shield.png" alt="" />
                </div>
              <p class="heading-7 font-lustria ">
                         Scalable and future-ready solutions
                    </p>
            </div>

            <div className="icon-heading flex items-start gap-4">
                <div className="icon service-inner-shadow">
                    <img src="assets/images/healthcare/icon/Vector (1).png" alt="" />
                </div>
                <p class="heading-7 font-lustria ">
                       Ongoing support and optimization
                    </p>
            </div>
        </div>
    </div>

    {/* Bottom Text */}
    <div className="mt-10">
        <div className="icon-heading">
            <p class="heading-7 font-lustria ">
                       We don’t just develop financial software—we create secure digital finance ecosystems that support trust, innovation, and long-term growth.
                    </p>
        </div>
    </div>
</section>


   <section className="industry ind-8 relative">
    <div className="star-bg"></div>

    <div className="flex flex-col items-center text-center px-4 py-16 max-w-4xl mx-auto">
        <h3 className="heading-3 mb-4">
           Power Your Financial Services with Dousoft
        </h3>

        <p class="B-1 pb-8">
                      Whether you are launching a fintech product, modernizing banking systems, or enhancing payment platforms, Dousoft delivers finance and banking solutions that balance security, efficiency, and innovation.
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
