import React from 'react'
import Navbar from '../components/Navbar'
import FooterTop from '../components/FooterTop'
import Footer from '../components/Footer'
import HeroSection from '../components/Herosection2'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection
       title="Careers at Dousoft IT"
        description="Building robust automated testing solutions to improve speed, stability, and software reliability."
        breadcrumb="Home > Careers"
        />

        {/* best service section */}
      <div className="services_2nd px-3 sm:px-6 md:px-10 lg:px-14 py-6 flex flex-col justify-center text-center">
        <h3 className="heading-3 font-lustria mb-5">
         Build Your Career with <span className='red' >Dousoft IT </span>
        </h3>

        
          <p className="mb-3 font-notosans B-1 para">
          At Dousoft IT, we believe that great technology is built by passionate people. Our team is driven by innovation, transparency, and continuous improvement. We offer a collaborative environment where ideas are valued, skills are nurtured, and careers are built for the long term.
          </p>

         <p className="mb-3 font-notosans B-1 para">
 If you are looking for an organization that values learning, ownership, and performance, Dousoft IT is the place for you.
          </p>

        <img
        //   src={data?.bestServiceSection.image}
        src='/assets/career_2nd.png'
          className="my-5"
        />
         
      </div>

      <div className='career-why-us grid grid-cols-2 gap-5 '>
      
        <div className='ps-14 py-10'>
            <h3 className='mb-7 font-lustria heading-3'>Why Work at Dousoft IT?</h3>
        <div className='ul'>
           <li className='flex gap-4 mb-6'>
            <img src='/assets/right_check.png' className=' h-7 w-7'></img>
         <p className='font-notosans B-1'>Growth-oriented work culture</p>
         </li>
          <li className='flex gap-4 mb-6'>
            <img src='/assets/right_check.png' className=' h-7 w-7'></img>
         <p className='font-notosans B-1'>Opportunity to work on real-world, scalable projects</p>
         </li>
          <li className='flex gap-4 mb-6'>
            <img src='/assets/right_check.png' className=' h-7 w-7'></img>
         <p className='font-notosans B-1'>Transparent communication and ethical practices</p>
         </li>
          <li className='flex gap-4 mb-6'>
            <img src='/assets/right_check.png' className=' h-7 w-7'></img>
         <p className='font-notosans B-1'>Supportive leadership and collaborative teams</p>
         </li>
          <li className='flex gap-4 mb-6'>
            <img src='/assets/right_check.png' className=' h-7 w-7'></img>
         <p className='font-notosans B-1'>Continuous learning and upskilling opportunities</p>
         </li>
          <li className='flex gap-4 mb-8'>
            <img src='/assets/right_check.png' className=' h-7 w-7'></img>
         <p className='font-notosans B-1'>Work-life balance and employee-centric policies</p>
         </li>
        </div>

        <p className='B-1 font-notosans'>We foster an environment where every individual contributes meaningfully and grows professionally.</p>
        </div>
       <div> 
        <img src='/assets/career_3rd.png'></img>
       </div>
      </div>


       <div className="why-choose-us py-9 px-3 sm:px-6 md:px-10 lg:px-16">
         
        <h2 className="heading-3 font-lustria sm:mb-5 mb-4 text-center">
           
         Company Culture at Dousoft IT
        </h2> 
        <p className="mb-6 font-notosans B-1 text-center">Our culture is built on trust, accountability, and innovation</p> 
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-14 sm:gap-5 gap-3 items-center">
           
          <div className="flex lg:flex-col flex-row lg:gap-12 sm:gap-8 gap-3 sm:flex-nowrap flex-wrap">
             
            <div className="sm:p-7 sm:py-8 p-5 card card-1 ">
               
              <div className="bg-white rounded-full p-2 px-3 mb-4 w-fit icon">
                 
                <img src="/assets/red_bulb.svg"></img> 
              </div> 
              <p className="heading-7 font-lustria mb-2">Ownership Mindset </p> 
              <p className="B-3 ">
                Every team member is responsible for quality and results
              </p> 
            </div> 
            <div className="sm:p-7 sm:py-8 p-5 card card-2">
               
              <div className="bg-white rounded-full p-2 px-3 mb-4 w-fit icon">
                 
                <img src="/assets/clients_red.svg"></img> 
              </div> 
              <p className="heading-7 font-lustria mb-2">
              People First Approach </p> 
              <p className="B-3 ">
              Employees are our biggest asset
              </p> 
            </div> 
          </div> 
        
          <div className="flex lg:flex-col flex-row lg:gap-12 sm:gap-8 gap-3 sm:flex-nowrap flex-wrap">
             
            <div className="sm:p-7 sm:py-8 p-5 card card-1 ">
               
              <div className="bg-white rounded-full p-2 px-3 mb-4 w-fit icon">
                 
                <img src="/assets/growth_red.svg"></img> 
              </div> 
              <p className="heading-7 font-lustria mb-2">
              Continuous Learning
              </p> 
              <p className="B-3 ">
               Regular knowledge sharing and skill enhancement
              </p> 
            </div> 
            <div className="sm:p-7 sm:py-8 p-5 card card-2">
               
              <div className="bg-white rounded-full p-2 px-3 mb-4 w-fit icon">
                 
                <img src="/assets/support_red.svg"></img> 
              </div> 
              <p className="heading-7 font-lustria mb-2">Open Communication</p> 
              <p className="B-3 ">
                Ideas and feedback are always welcome
              </p> 
            </div> 
          </div> 
            <div
            className="card-3 career-card-3 sm:p-8 p-6 flex justify-center items-center align-middle relative"
            style={{ borderRadius: "40px" }}
          >
             
            {/* <img src="/assets/why_choose_main.svg"></img>  */}
            <button
              className="btn rounded-full flex items-center p-2 px-3 gap-2 absolute bg-white B-3 "
              style={{ width: "fit-content" }}
            >
               
              <img src="/assets/green_dot.svg" className="ml-2" /> System
              Optimized 
            </button> 
          </div> 
        </div> 
      </div>

       <section className="industry ind-5">
    {/* Heading */}
    <h3 className="heading-3 font-lustria mb-4">
    SOPs & Work Processes We Follow
    </h3>
    <p className='mb-10 B-1  font-notosans'>We follow well-defined Standard Operating Procedures (SOPs) to maintain consistency, quality, and efficiency.</p>

    {/* Row 1 */}
    <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
            <div className="industry-card">
                <div className="overlay-shadow career-5-picture-1"></div>

                <div>
                    <p className="heading-7">
                      Quality Assurance SOPs
                    </p>
                    <p className="B-3">
                        Manual and automated testing
                    </p>
                    <p className="B-3">
                      Performance and security checks
                    </p>
                    <p className="B-3">
                     Bug tracking and resolution workflows
                    </p>
                </div>
            </div>
        </div>

        <div>
            <div className="industry-card">
                <div className="overlay-shadow career-5-picture-2"></div>

                <div>
                    <p className="heading-7">
                      Development SOPs
                    </p>
                    <p className="B-3">Requirement analysis and documentation
                    </p>
                      <p className="B-3">Agile and sprint-based development
                    </p>
                      <p className="B-3">Code reviews and version control
                    </p>
                </div>
            </div>
        </div>
    </div>

    {/* Row 2 */}
    <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <div className="industry-card">
                <div className="overlay-shadow career-5-picture-3"></div>

                <div>
                    <p className="heading-7">
                       Project Management SOPs
                    </p>
                    <p className="B-3">
                       Agile / Scrum methodologies
                    </p>
                    <p className="B-3">
                      Clear timelines and milestones
                    </p>
                    <p className="B-3">Regular client and internal reviews</p>
                </div>
            </div>
        </div>

        <div>
            <div className="industry-card">
                <div className="overlay-shadow career-5-picture-4"></div>

                <div>
                    <p className="heading-7">
                      Security & Compliance SOPs
                    </p>
                    <p className="B-3">Data privacy and security best practices</p>
                     <p className="B-3">Access control and system monitoring</p>
                      <p className="B-3">Compliance with industry standards</p>
                </div>
            </div>
        </div>
    </div>
</section>


      <FooterTop/>
      <Footer/>
    </div>
  )
}

export default page
