import React from 'react'

const footerlinks = [
  {
    name:"WEB DEVELOPMENT",
    links: [
      "web-development-company-india",
      "custom-web-development-india",
      "website-development-services-india",
      "enterprise-web-development-india",
      "web-development-in-india"
    ]
  },
  {
    name:"WEB DESIGN",
    links: [
      "web-design-services-india",
      "website-design-company-india",
      "custom-web-design-india",
      "professional-web-design-services-india",
      "responsive-web-design-india"
    ]
  }
  ,
  {
    name:"APP DEVELOPMENT",
    links: [
      "mobile-app-development-company-india",
      "mobile-app-development-services-india",
      "custom-mobile-app-development-india",
      "enterprise-mobile-app-development-india",
      "best-mobile-app-developers-india"
    ]
  }
  ,
  {
    name:"DIGITAL MARKETING",
    links: [
      "digital-marketing-company-india",
      "digital-marketing-services-india",
      "online-marketing-company-india",
      "nternet-marketing-services-india",
      "best-digital-marketing-agency-india"
    ]
  }
]

const FooterTop = () => {
  return (
    <div>
         <div className="footer-top lg:p-14 p-10" >
     <div className="grid lg:grid-cols-4 sm:grid-cols-2  md:gap-12 sm:gap-10 gap-9">
       {footerlinks.map((section, index) => (
  <div key={index} >
    <h4 className="heading-6 uppercase sm:pb-5 pb-4 font-bold font-inter " style={{fontWeight:500}}>{section.name}</h4>

    <ul>
      {section.links.map((link, i) => (
        <li key={i}>
          <p className="B-3 sm:pb-4 pb-3">{link}</p>
        </li>
      ))}
    </ul>
  </div>
))}

     </div>
   </div>
      
    </div>
  )
}

export default FooterTop
