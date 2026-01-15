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

      <FooterTop/>
      <Footer/>
    </div>
  )
}

export default page
