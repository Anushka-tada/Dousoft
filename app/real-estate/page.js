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
         title="Healthcare Solutions"
        description="Building robust automated testing solutions to improve speed, stability, and software reliability."
        breadcrumb="Home > Healthcare Solutions"
        />

      <div className='solution-page'>

     
         <section className="industry">
    <div className="container mx-auto max-w-7xl px-4">
        <div className="row flex flex-wrap -mx-3">
            <div className="col-md-6 w-full md:w-1/2 px-3">
                <h3 className="heading-3 font-lustria">
                    Technology-Driven <span>Healthcare Solutions</span> Designed for Better Patient Outcomes
                </h3>
                <p className="B-1 font-notosans">
                    At Dousoft IT, we understand that healthcare is not just an industry—it is a mission-critical
                    ecosystem where technology must deliver accuracy, security, and reliability. Our Healthcare
                    Solutions are designed to help hospitals, clinics, healthcare startups, and medical service
                    providers modernize operations, enhance patient experiences, and maintain strict regulatory
                    compliance.
                </p>
                <p className="B-1 font-notosans">
                    We approach healthcare technology with a business-first and patient-centric mindset, ensuring
                    every solution aligns with clinical workflows, operational efficiency, and long-term
                    scalability.
                </p>
            </div>

            <div className="col-md-6 w-full md:w-1/2 px-3">
                <div className="Background-Shadow">
                </div>
            </div>
        </div>
    </div>
</section>



    <section class="industry ind-2">
    <h3 class="heading-3 font-lustria mb-10">
        Our Approach to <span>Healthcare Solutions</span> at Dousoft
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
                        <p class="heading-7 font-lustria">
                            Business-Centric & Patient-Focused Strategy
                        </p>
                    </div>

                    <p class="B-3 font-notosans mb-4">
                        We begin by understanding your healthcare business goals, patient journey, and
                        operational challenges. Our team collaborates closely with stakeholders to map
                        workflows, identify inefficiencies, and design solutions that improve both patient
                        outcomes and business performance
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
                                Reduced administrative burden
                            </p>
                        </div>

                        <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/flowbite_users-solid.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                                Improved patient engagement
                            </p>
                        </div>
                    </div>

                    <div class="approach-box grid grid-cols-2 gap-4" >
                        <div class="icon-box flex items-center justify-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/material-symbols_shield-lock.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                                Secure data handling
                            </p>
                        </div>

                        <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/material-symbols_speed.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                                Faster service delivery
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
                            Domain Expertise & Compliance Awareness
                        </p>
                    </div>

                    <p class="B-3 font-notosans mb-4">
                        Healthcare technology requires deep domain understanding. Our solutions are developed
                        with a strong focus on data privacy, interoperability, and regulatory standards,
                        ensuring compliance with healthcare regulations and best practices.
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


    <section className="industry ind-3">

    </section>

    <section className="industry ind-4">
    <div className="main-frame">
        {/* Heading */}
        <div className="ind-4-heading text-center mb-10">
            <h3 className="heading-3">
                Dousoft Healthcare Delivery Framework
            </h3>
            <p className="B-1">
                We follow a structured framework to deliver consistent, high-quality healthcare solutions:
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
                    <li className="B-3">Requirement analysis</li>
                    <li className="B-3">Workflow assessment</li>
                    <li className="B-3">Stakeholder consultation</li>
                    <li className="B-3">Compliance and risk evaluation</li>
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
                    <li className="B-3">User-centric UX/UI design</li>
                    <li className="B-3">Secure system architecture</li>
                    <li className="B-3">Integration planning with existing systems</li>
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

                <p className="heading-7 mb-3">Develop</p>

                <ul className="space-y-2">
                    <li className="B-3">Agile-based development</li>
                    <li className="B-3">Modular and scalable architecture</li>
                    <li className="B-3">Continuous testing and validation</li>
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
                    <li className="B-3">Secure deployment</li>
                    <li className="B-3">System integration</li>
                    <li className="B-3">Performance optimization</li>
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

                <p className="heading-7 mb-3">Optimize</p>

                <ul className="space-y-2">
                    <li className="B-3">Ongoing monitoring</li>
                    <li className="B-3">Feature enhancements</li>
                    <li className="B-3">Scalability and performance improvements</li>
                </ul>
            </div>
        </div>

        {/* Bottom Text */}
        <div className="framework-box-2 text-center mt-10">
            <p className="heading-7">
                This framework allows us to reduce development risks, accelerate delivery, and ensure measurable
                outcomes
            </p>
        </div>
    </div>
</section>


   <section className="industry ind-5">
    {/* Heading */}
    <h3 className="heading-3 font-lustria mb-10">
        Our Approach to <span>Healthcare Solutions</span> at Dousoft
    </h3>

    {/* Row 1 */}
    <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
            <div className="industry-card">
                <div className="overlay-shadow ind-5-picture-1"></div>

                <div>
                    <p className="heading-7">
                        Healthcare Software Development
                    </p>
                    <p className="B-3">
                        Custom-built solutions including hospital management systems, patient portals, appointment
                        scheduling, and medical record management.
                    </p>
                </div>
            </div>
        </div>

        <div>
            <div className="industry-card">
                <div className="overlay-shadow ind-5-picture-2"></div>

                <div>
                    <p className="heading-7">
                        Regression Testing
                    </p>
                    <p className="B-3">
                        Secure telehealth solutions that enable virtual consultations, remote monitoring, and
                        patient engagement across devices.
                    </p>
                </div>
            </div>
        </div>
    </div>

    {/* Row 2 */}
    <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <div className="industry-card">
                <div className="overlay-shadow ind-5-picture-3"></div>

                <div>
                    <p className="heading-7">
                        Mobile & Web Healthcare Applications
                    </p>
                    <p className="B-3">
                        User-friendly applications for patients and healthcare providers, designed to improve
                        accessibility, communication, and service efficiency.
                    </p>
                </div>
            </div>
        </div>

        <div>
            <div className="industry-card">
                <div className="overlay-shadow ind-5-picture-4"></div>

                <div>
                    <p className="heading-7">
                        Healthcare Data & System Integration
                    </p>
                    <p className="B-3">
                        Seamless integration of healthcare systems, third-party tools, and data platforms to ensure
                        real-time access and interoperability.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>


    <section className="industry ind-6">
        <h3 className="heading-3">
            Benefits of <span>Dousoft IT</span> Healthcare Solutions
        </h3>

        <div className="why-card-row">

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-3.png" alt=""/>
                </div>
                <p className="heading-7">
                    Improved Patient Experience
                </p>
            </div>


            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-4.png" alt=""/>
                </div>
                <p className="heading-7">
                    Reduced Operational Costs
                </p>
            </div>

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-5.png" alt=""/>
                </div>
                <p className="heading-7">
                    Faster Service Delivery
                </p>
            </div>


            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-6.png" alt=""/>
                </div>
                <p className="heading-7">
                    Enhanced Data Security
                </p>
            </div>

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-7.png" alt=""/>
                </div>
                <p className="heading-7">
                    Better Operational Visibility
                </p>
            </div>

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-8.png" alt=""/>
                </div>
                <p className="heading-7">
                    Scalable Healthcare Systems
                </p>
            </div>
        </div>
    </section>

    <section className="industry ind-7">
    <h3 className="heading-3 mb-10">
        Why Choose <span>Dousoft IT</span> for Healthcare Solutions?
    </h3>

    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div>
            <div className="overlay-shadow-2 ind-5-picture-5"></div>
        </div>

        {/* Right Content */}
        <div className="space-y-4">
            <div className="icon-heading flex items-start gap-4">
                <div className="icon">
                    <img src="assets/images/healthcare/icon/bxs_badge-check.png" alt="" />
                </div>
                <p className="heading-7 font-lustria">
                    Proven expertise in healthcare technology
                </p>
            </div>

            <div className="icon-heading flex items-start gap-4">
                <div className="icon">
                    <img src="assets/images/healthcare/icon/Vector-9.png" alt="" />
                </div>
                <p className="heading-7 font-lustria">
                    Structured delivery framework
                </p>
            </div>

            <div className="icon-heading flex items-start gap-4">
                <div className="icon">
                    <img src="assets/images/healthcare/icon/material-symbols_check-circle.png" alt="" />
                </div>
                <p className="heading-7 font-lustria">
                    Focus on efficiency and compliance
                </p>
            </div>

            <div className="icon-heading flex items-start gap-4">
                <div className="icon">
                    <img src="assets/images/healthcare/icon/material-symbols_shield.png" alt="" />
                </div>
                <p className="heading-7 font-lustria">
                    Scalable and secure solution
                </p>
            </div>

            <div className="icon-heading flex items-start gap-4">
                <div className="icon">
                    <img src="assets/images/healthcare/icon/Vector (1).png" alt="" />
                </div>
                <p className="heading-7 font-lustria">
                    Dedicated support and continuous improvement
                </p>
            </div>
        </div>
    </div>

    {/* Bottom Text */}
    <div className="mt-10">
        <div className="icon-heading">
            <p className="heading-7 font-lustria">
                We don&#39;t just build healthcare software—we create technology ecosystems that support long-term growth,
                efficiency, and patient satisfaction.
            </p>
        </div>
    </div>
</section>


   <section className="industry ind-8 relative">
    <div className="star-bg"></div>

    <div className="flex flex-col items-center text-center px-4 py-16 max-w-4xl mx-auto">
        <h3 className="heading-3 mb-4">
            Transform Your Healthcare Operations with Dousoft
        </h3>

        <p className="B-1 pb-8">
            Whether you are launching a digital health platform, modernizing hospital systems, or improving patient engagement,
            Dousoft provides healthcare solutions that are reliable, scalable, and aligned with your business goals.
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
