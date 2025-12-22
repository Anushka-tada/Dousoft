import React from "react";
import { FaChevronDown } from "react-icons/fa";

const navItems = [
  { name: "Home", link: "/" },
  {
    name: "Company",
    subLinks: [
      {
        name: "About Us",
        description: "Learn More About Dousoft",
        image: "/assets/about_link.png",
        link: "/about",
      },
      {
        name: "Pricing",
        description: "Streamlined pricing",
        image: "/assets/pricing_link.png",
        link: "/careers",
      },
      {
        name: "Careers ",
        description: "Happy to help you",
        image: "/assets/career_link.png",
        link: "/careers",
      },
    ],
  },
  {
    name: "Services",
    subLinks: [
    {
      name: "Web Development Services",
      description: "Building high-performance websites — design, develop & deploy",
      image: "/assets/healthcare_link.svg",
      link: "/ecommerce",
       children: [
    { name: "web-development-company-india", link: "/react" },
    { name: "custom-web-development-india", link: "/nextjs" },
    { name: "website-development-services-india", link: "/laravel" },
    { name: "enterprise-web-development-india", link: "/custom-web" },
     { name: "web-development-in-bangalore", link: "/react" },
    { name: "web-development-in-delhi", link: "/nextjs" },
    { name: "web-development-in-mumbai", link: "/laravel" },
    { name: "web-development-in-hyderabad", link: "/custom-web" }
  ],
    },
    {
      name: "Mobile App Development",
       description: "Building powerful mobile applications — design, develop & deploy",
      image: "/assets/healthcare_link.svg",
      link: "/saas",
    },
    {
      name: "Web Design Services",
       description: "Designing high-impact websites — research, design & deliver",
       image: "/assets/healthcare_link.svg",
      link: "/enterprise",
    },
     {
      name: "AI Solutions",
       description: "Building powerful mobile applications — design, develop & deploy",
      image: "/assets/healthcare_link.svg",
      link: "/saas",
    },
     {
      name: "Digital Marketing Services",
       description: "Data-driven digital marketing — plan, execute & optimize",
      image: "/assets/healthcare_link.svg",
      link: "/saas",
    },
     {
      name: "Automated Testing Services",
      description: "Ensuring software quality — automate, test & optimize",
      image: "/assets/healthcare_link.svg",
      link: "/saas",
    },
     {
      name: "IOT Solutions",
      description: "Intelligent IoT systems — design, deploy & scale",
      image: "/assets/healthcare_link.svg",
      link: "/saas",
    },
  ],
  },
  {
    name: "Solutions",
   subLinks: [
    {
      name: "Healthcare",
      description: "Streamlined Pricing",
      image: "/assets/healthcare_link.svg",
      link: "/ecommerce",
    },
    {
      name: "E-Commerce & Retail",
       description: "Streamlined Pricing",
      image: "/assets/healthcare_link.svg",
      link: "/saas",
    },
    {
      name: "Education & E-Learning",
       description: "Streamlined Pricing",
       image: "/assets/healthcare_link.svg",
      link: "/enterprise",
    },
     {
      name: "Finance &  Banking",
       description: "Streamlined Pricing",
      image: "/assets/healthcare_link.svg",
      link: "/saas",
    },
     {
      name: "Real Estate",
       description: "Streamlined Pricing",
      image: "/assets/healthcare_link.svg",
      link: "/saas",
    },
     {
      name: "Travel & Tourism",
      description: "Streamlined Pricing",
      image: "/assets/healthcare_link.svg",
      link: "/saas",
    },
  ],
  },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blogs", link: "/blogs" },
];

const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-between items-center px-10">
        <img src="/assets/logo.png" className="nav-logo"></img>

        <ul className="nav-links flex items-center gap-7 list-none px-7 py-3">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative nav-item flex items-center h-7 group"
            >
              {/* Menu Title */}
              <span className="flex items-center cursor-pointer">
                {item.name}
                {item.subLinks && (
                  <span className="pl-3">
                    <img
                    src="/assets/dropdownIcon.png"
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                    </span>
                )}
              </span>

              {/* 🔽 Company Submenu */}
              {item.name === "Company" && (
                <div
                  className="absolute top-full left-[-50%] mt-6 w-[620px]  p-4 
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                        transition-all duration-300 company_submenu"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {item.subLinks.map((sub, i) => (
                      <a
                        key={i}
                        href={sub.link}
                        className="flex justify-between items-center p-3 link"
                      >
                        <div className="flex items-center  gap-4"> 
                        <img  src={sub.image}   alt={sub.name}  className="" />
                        <div>
                          <p className="h-6">
                            {sub.name}
                          </p>
                          <p className="small-text mt-3">
                            {sub.description}
                          </p>
                        </div>
                         </div>

                         <img src="/assets/next_red.png"></img>
                        
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {item.name === "Solutions" && (
                <div
                  className="absolute top-full left-[-50%] mt-6 w-[450px]  p-4 
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                        transition-all duration-300 company_submenu"
                >
                  <div className="grid gap-1">
                    {item.subLinks.map((sub, i) => (
                      <a
                        key={i}
                        href={sub.link}
                        className="flex justify-between items-center p-3 link"
                      >
                        <div className="flex items-center  gap-4"> 
                        <img  src={sub.image}   alt={sub.name}  className="" />
                        <div>
                          <p className="h-6">
                            {sub.name}
                          </p>
                          <p className="small-text mt-3">
                            {sub.description}
                          </p>
                        </div>
                         </div>

                         <img src="/assets/next_red.png"></img>
                        
                      </a>
                    ))}
                  </div>
                </div>
              )}

             {item.name === "Services" && (
  <div
    className="absolute top-full right-[-500%] mt-6 w-[890px] p-4
               opacity-0 invisible group-hover:opacity-100 group-hover:visible
               transition-all duration-300 company_submenu"
  >
    <div className="grid grid-cols-2 gap-4">
      {/* LEFT: Services list */}
      <div className="space-y-1">
        {item.subLinks.map((sub, i) => (
          <div
            key={i}
            className="relative group/service"
          >
            <div className="flex items-center justify-between p-3 link cursor-pointer">
              <div className="flex items-center gap-4">
                <img src={sub.image} />
                <div>
                  <p className="h-7">{sub.name}</p>
                  <p className="small-text mt-2">
                    {sub.description}
                  </p>
                </div>
              </div>
            </div>

            {/* 👉 INNER SUBMENU */}
            {sub.children && (
              <div
                className="absolute top-0 left-full ml-2 w-full bg-white
                           opacity-0 invisible group-hover/service:opacity-100
                           group-hover/service:visible transition-all duration-300
                           shadow-lg rounded-xl p-3"
              >
                <ul className="space-y-2">
                  {sub.children.map((child, j) => (
                    <li key={j}>
                      <a
                        href={child.link}
                        className="block px-3 py-2 rounded-md
                                   hover:bg-gray-100 text-sm"
                      >
                        {child.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
)}

            </li>
          ))}
        </ul>

        <button className="button rounded-full flex items-center">
          Get Started
          <img src="/assets/button_arrow.png" className="ml-2"></img>
        </button>
      </div>
    </>
  );
};

export default Navbar;
