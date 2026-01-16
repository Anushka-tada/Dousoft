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
         title="Education Solutions"
        description="Innovative education solutions to enhance digital learning, streamline administration, and improve student engagement."
        breadcrumb="Home > Healthcare Solutions"
        />

      <div className='solution-page'>

     
         <section className="industry">
    <div className="container mx-auto max-w-7xl px-4">
        <div className="row flex flex-wrap -mx-3">
            <div className="col-md-6 w-full md:w-1/2 px-3">
                <h3 className="heading-3 font-lustria">
                      Smart   <span>Digital Learning Solutions </span>Built for Modern Education Ecosystems
                </h3>
                <p class="B-1 font-notosans">
                        At Dousoft, we empower educational institutions, edtech startups, training providers, and enterprises with innovative Education & E-Learning Solutions that enhance learning experiences, improve accessibility, and streamline academic operations. Our solutions are designed to support digital transformation in education while aligning technology with pedagogy and business objectives
                    </p>
                    <p class="B-1 font-notosans">
                        We approach education technology with a learner-centric and outcome-driven mindset, ensuring that every solution delivers measurable value to students, educators, and administrators.
                    </p>
            </div>

            <div className="col-md-6 w-full md:w-1/2 px-3">
                 <div class="Background-Shadow-3">

                    </div>
            </div>
        </div>
    </div>
</section>



    <section class="industry ind-2">
    <h3 class="heading-3 font-lustria mb-10">
          Our Approach to <span>Education & E-Learning  </span> at Dousoft
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
                                    Education-Focused Business Strategy
                                </p>
                    </div>

                    <p class="B-3 font-notosans">
                                Every education provider has unique learning models, audiences, and delivery methods. At Dousoft, we begin by understanding your educational goals—whether it’s student engagement, content delivery, assessment efficiency, or platform scalability.
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
                                       Enhancing learning outcomes
                                    </p>
                        </div>

                        <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/flowbite_users-solid.png" alt=""/>
                            </div>
                          <p class="B-3 font-notosans">
                                         Improving accessibility and inclusivity
                                    </p>
                        </div>
                    </div>

                    <div class="approach-box grid grid-cols-2 gap-4" >
                        <div class="icon-box flex items-center justify-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/material-symbols_shield-lock.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                                        Reducing operational complexity
                                    </p>
                        </div>

                        <div class="icon-box flex items-center gap-3" style={{width:"-webkit-fill-available"}}>
                            <div class="small-icon flex justify-center">
                                <img src="assets/images/healthcare/icon/material-symbols_speed.png" alt=""/>
                            </div>
                            <p class="B-3 font-notosans">
                                        scalable digital education models
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
                                    Learner-Centric Experience Design
                                </p>
                    </div>

                    <p class="B-3 font-notosans mb-4">
                        Effective digital learning depends on usability and engagement. We design intuitive platforms that support interactive learning, personalized content, and seamless navigation across devices.
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


     <section class="industry ind-3 edu-ind-3">

    </section>

    <section className="industry ind-4">
    <div className="main-frame">
        {/* Heading */}
        <div className="ind-4-heading text-center mb-10">
            <h3 class="heading-3">
                    Dousoft Education Delivery Framework
                </h3>
            <p class="B-1">
                    We follow a structured framework to deliver consistent, high-quality Education solutions:
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

                <p className="heading-7 mb-3">  Assess</p>

                <ul className="space-y-2">
                     <li class="B-3">
                                 Learning model analysis
                            </li>
                            <li class="B-3">
                                  Audience and curriculum understanding
                            </li>
                            <li class="B-3">
                                  Platform and content evaluation
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
                                 User-centric UX/UI for learners and educators
                            </li>
                            <li class="B-3">
                                  Secure and scalable system architecture
                            </li>
                            <li class="B-3">
                                  Learning flow and engagement design
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

                <p className="heading-7 mb-3">Develop</p>

                <ul className="space-y-2">
                        <li class="B-3">
                                Agile-based development methodology
                            </li>
                            <li class="B-3">
                                 Modular and extensible systems
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
            <div className="framework-box relative">
                <div className="framwork-icon-box flex items-center justify-between mb-4">
                    <div className="f-icon">
                        <img src="assets/images/healthcare/icon/Vector2.png" alt="" />
                    </div>
                    <h4 className="heading-4">04</h4>
                </div>

                <p className="heading-7 mb-3">Launch</p>

                <ul className="space-y-2">
                    <li class="B-3">
                                  Secure deployment
                            </li>
                            <li class="B-3">
                                  System integration
                            </li>
                            <li class="B-3">
                                  Performance optimization
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
                                 Platform analytics
                            </li>
                            <li class="B-3">
                                 Feature upgrades
                            </li>
                            <li class="B-3">
                                 Scalability and performance improvements
                            </li>
                </ul>
            </div>
        </div>

        {/* Bottom Text */}
        <div className="framework-box-2 text-center mt-10">
            <p className="heading-7">
                This framework ensures faster implementation, reduced risks, and long-term platform sustainability
            </p>
        </div>
    </div>
</section>


   <section className="industry ind-5">
    {/* Heading */}
    <h3 className="heading-3 font-lustria mb-10">
         Our Approach to <span>E-Learning Solutions  </span> at Dousoft
    </h3>

    {/* Row 1 */}
    <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
            <div className="industry-card">
                  <div class="overlay-shadow edu-ind-5-picture-1">

                    </div>
                    <div >
                        <p class="heading-7">
                           Learning Management Systems (LMS)
                        </p>
                        <p class="B-3">
                            Custom LMS platforms for schools, universities, and training providers to manage courses, users, assessments, and certifications.
                        </p>
                    </div>
            </div>
        </div>

        <div>
            <div className="industry-card">
                <div class="overlay-shadow edu-ind-5-picture-2">

                    </div>
                    <div >
                        <p class="heading-7">
                           Online Learning & Virtual Classroom Platforms
                        </p>
                        <p class="B-3">
                            Interactive digital classrooms with live sessions, recorded content, quizzes, and collaborative tools to support remote and hybrid learning models.
                        </p>
                    </div>
            </div>
        </div>
    </div>

    {/* Row 2 */}
    <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <div className="industry-card">
               <div class="overlay-shadow edu-ind-5-picture-3">

                    </div>
                    <div >
                        <p class="heading-7">
                           Education Mobile App Development
                        </p>
                        <p class="B-3">
                            Mobile-first learning applications that provide anytime, anywhere access to educational content and assessments.
                        </p>
                    </div>
            </div>
        </div>

        <div>
            <div className="industry-card">
              <div class="overlay-shadow edu-ind-5-picture-4">

                    </div>
                    <div >
                        <p class="heading-7">
                            Assessment & Evaluation Systems
                        </p>
                        <p class="B-3">
                           Automated exam management, grading systems, performance tracking, and reporting tools to improve academic efficiency.
                        </p>
                    </div>
            </div>
        </div>
    </div>
</section>


    <section className="industry ind-6">
        <h3 className="heading-3">
           Benefits of <span>Dousoft IT</span> E-Learning Solutions
        </h3>

        <div className="why-card-row">

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-3.png" alt=""/>
                </div>
                <p className="heading-7">
                      Enhanced student engagement and retention
                </p>
            </div>


            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-4.png" alt=""/>
                </div>
                <p className="heading-7">
                    Improved accessibility and flexibility
                </p>
            </div>

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-5.png" alt=""/>
                </div>
                <p className="heading-7">
                     Reduced administrative overhead
                </p>
            </div>


            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-6.png" alt=""/>
                </div>
                <p className="heading-7">
                    Scalable and future-ready platforms
                </p>
            </div>

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-7.png" alt=""/>
                </div>
                <p className="heading-7">
                     Data-driven academic insights
                </p>
            </div>

            <div className="why-card">
                <div className="why-icon">
                    <img src="assets/images/healthcare/icon/Vector-8.png" alt=""/>
                </div>
                <p className="heading-7">
                    Secure Education Systems
                </p>
            </div>
        </div>
    </section>

    <section className="industry ind-7">
    <h3 className="heading-3 mb-10">
         Why Choose <span>Dousoft IT</span> for Education & E-Learning Solutions?
    </h3>

    {/* Main Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div>
          <div class="overlay-shadow-2 edu-5-picture-5">

                </div>
        </div>

        {/* Right Content */}
        <div className="space-y-4">
            <div className="icon-heading flex items-start gap-4">
                <div className="icon">
                    <img src="assets/images/healthcare/icon/bxs_badge-check.png" alt="" />
                </div>
                <p class="heading-7 font-lustria ">
                        Deep understanding of education technology
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
               <p class="heading-7 font-lustria ">
                         Secure and scalable architecture
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
            <p className="heading-7 font-lustria">
                We don’t just build e-learning platforms—we create digital learning ecosystems that support long-term educational growth and innovation.
            </p>
        </div>
    </div>
</section>


   <section className="industry ind-8 relative">
    <div className="star-bg"></div>

    <div className="flex flex-col items-center text-center px-4 py-16 max-w-4xl mx-auto">
        <h3 className="heading-3 mb-4">
               Transform Learning Experiences with Dousoft
        </h3>

        <p className="B-1 pb-8">
             Whether you are launching an edtech startup, modernizing an institution, or scaling a training platform, Dousoft delivers education solutions that combine technology, engagement, and efficiency to meet evolving learning needs.
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
