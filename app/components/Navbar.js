// "use client"
// import { getServiceCategoryServ } from "@/services/serviceCategory.service";
// import { getServiceSubCategoryServ } from "@/services/serviceSubcategory.service";
// import React from "react";
// import { useState  , useEffect} from "react";

// const navItems = [
//   { name: "Home", link: "/" },
//   {
//     name: "Company",
//     subLinks: [
//       {
//         name: "About Us",
//         description: "Learn More About Dousoft",
//         image: "/assets/about_link.png",
//         link: "/about",
//       },
//       {
//         name: "Pricing",
//         description: "Streamlined pricing",
//         image: "/assets/pricing_link.png",
//         link: "/careers",
//       },
//       {
//         name: "Careers ",
//         description: "Happy to help you",
//         image: "/assets/career_link.png",
//         link: "/careers",
//       },
//     ],
//   },
//   {
//     name: "Services",
//     subLinks: [
//     {
//       name: "Web Development Services",
//       description: "Building high-performance websites — design, develop & deploy",
//       image: "/assets/healthcare_link.svg",
//       link: "/ecommerce",
//        children: [
//     { name: "web-development-company-india", link: "/react" },
//     { name: "custom-web-development-india", link: "/nextjs" },
//     { name: "website-development-services-india", link: "/laravel" },
//     { name: "enterprise-web-development-india", link: "/custom-web" },
//      { name: "web-development-in-bangalore", link: "/react" },
//     { name: "web-development-in-delhi", link: "/nextjs" },
//     { name: "web-development-in-mumbai", link: "/laravel" },
//     { name: "web-development-in-hyderabad", link: "/custom-web" }
//   ],
//     },
//     {
//       name: "Mobile App Development",
//        description: "Building powerful mobile applications — design, develop & deploy",
//       image: "/assets/healthcare_link.svg",
//       link: "/saas",
//     },
//     {
//       name: "Web Design Services",
//        description: "Designing high-impact websites — research, design & deliver",
//        image: "/assets/healthcare_link.svg",
//       link: "/enterprise",
//     },
//      {
//       name: "AI Solutions",
//        description: "Building powerful mobile applications — design, develop & deploy",
//       image: "/assets/healthcare_link.svg",
//       link: "/saas",
//     },
//      {
//       name: "Digital Marketing Services",
//        description: "Data-driven digital marketing — plan, execute & optimize",
//       image: "/assets/healthcare_link.svg",
//       link: "/saas",
//     },
//      {
//       name: "Automated Testing Services",
//       description: "Ensuring software quality — automate, test & optimize",
//       image: "/assets/healthcare_link.svg",
//       link: "/saas",
//     },
//      {
//       name: "IOT Solutions",
//       description: "Intelligent IoT systems — design, deploy & scale",
//       image: "/assets/healthcare_link.svg",
//       link: "/saas",
//     },
//   ],
//   },
//   {
//     name: "Solutions",
//    subLinks: [
//     {
//       name: "Healthcare",
//       description: "Streamlined Pricing",
//       image: "/assets/healthcare_link.svg",
//       link: "/ecommerce",
//     },
//     {
//       name: "E-Commerce & Retail",
//        description: "Streamlined Pricing",
//       image: "/assets/healthcare_link.svg",
//       link: "/saas",
//     },
//     {
//       name: "Education & E-Learning",
//        description: "Streamlined Pricing",
//        image: "/assets/healthcare_link.svg",
//       link: "/enterprise",
//     },
//      {
//       name: "Finance &  Banking",
//        description: "Streamlined Pricing",
//       image: "/assets/healthcare_link.svg",
//       link: "/saas",
//     },
//      {
//       name: "Real Estate",
//        description: "Streamlined Pricing",
//       image: "/assets/healthcare_link.svg",
//       link: "/saas",
//     },
//      {
//       name: "Travel & Tourism",
//       description: "Streamlined Pricing",
//       image: "/assets/healthcare_link.svg",
//       link: "/saas",
//     },
//   ],
//   },
//   { name: "Portfolio", link: "/portfolio" },
//   { name: "Blogs", link: "/blogs" },
// ];

// const Navbar = () => {

//    const [mobileMenu, setMobileMenu] = useState(false);
//   const [openMenu, setOpenMenu] = useState(null);
//   const [openService, setOpenService] = useState(null);
//   const [openMobileService, setOpenMobileService] = useState(null);


//   const[serviceCategories , setServicecategories] = useState([]);
//   const[serviceSubCategories , setServiceSubcategories] = useState([]);

//   const fetchCategories = async () => {
//     try {
//       const res = await getServiceCategoryServ();
//       setServicecategories(res.data.data);
//       console.log("res", res)

//     } catch (err) {
//       console.error(err);
//     }
//   };
  
//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     fetchCategories();
//   }, []);

//     const fetchSubCategories = async () => {
//     try {
//       const res = await getServiceSubCategoryServ();
//       setServiceSubcategories(res.data.data);
//       console.log("res", res)

//     } catch (err) {
//       console.error(err);
//     }
//   };
  
//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     fetchSubCategories();
//   }, []);

//   const getSubCategoriesByCategory = (categoryId) => {
//   return serviceSubCategories.filter(
//     (sub) => sub.categoryId._id === categoryId
//   );
// };

// const slugify = (text) =>
//   text.toLowerCase().replace(/[^a-z0-9]+/g, "-");


//   return (
//     <>
//       <div className="navbar relative flex justify-between items-center md:px-20 sm:px-10 px-3  z-[1000]">
//         <img src="/assets/logo.png" className="nav-logo sm:h-auto h-20"></img>

//         {/* <button className="lg:hidden text-2xl" onClick={() => setMobileMenu(!mobileMenu)}> ☰ </button> */}
//         <img src="/assets/nav-toggle.png" className="lg:hidden text-2xl" onClick={() => setMobileMenu(!mobileMenu)} ></img>

//         {/* desktop menu */}

//         <ul className="nav-links hidden lg:flex items-center gap-7 list-none px-7 py-3">
//           {navItems.map((item, index) => (
//             <li
//               key={index}
//               className="relative nav-item flex items-center heading-7 group"
//             >
//               {/* Menu Title */}
//               <span className="flex items-center cursor-pointer heading-8">
//                 {item.name}
//                 {item.subLinks && (
//                   <span className="pl-3">
//                     <img
//                     src="/assets/dropdownIcon.png"
//                     className="transition-transform duration-300 group-hover:rotate-180"
//                   />
//                     </span>
//                 )}
//               </span>

//               {/*  Company Submenu */}
//               {item.name === "Company" && (
//                 <div
//                   className="absolute top-full left-[-50%] mt-6 w-[620px]  p-4 
//                         opacity-0 invisible group-hover:opacity-100 group-hover:visible 
//                         transition-all duration-300 company_submenu"
//                 >
//                   <div className="grid grid-cols-2 gap-4">
//                     {item.subLinks.map((sub, i) => (
//                       <a
//                         key={i}
//                         href={sub.link}
//                         className="flex justify-between items-center p-3 link"
//                       >
//                         <div className="flex items-center  gap-4"> 
//                         <img  src={sub.image}   alt={sub.name}  className="" />
//                         <div>
//                           <p className="heading-8">
//                             {sub.name}
//                           </p>
//                           <p className="B-3 mt-1">
//                             {sub.description}
//                           </p>
//                         </div>
//                          </div>

//                          <img src="/assets/next_red.png"></img>
                        
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {item.name === "Solutions" && (
//                 <div
//                   className="absolute top-full left-[-50%] mt-6 w-[450px]  p-4 
//                         opacity-0 invisible group-hover:opacity-100 group-hover:visible 
//                         transition-all duration-300 company_submenu"
//                 >
//                   <div className="grid gap-1">
//                     {item.subLinks.map((sub, i) => (
//                       <a
//                         key={i}
//                         href={sub.link}
//                         className="flex justify-between items-center p-3 link"
//                       >
//                         <div className="flex items-center  gap-4"> 
//                         <img  src={sub.image}   alt={sub.name}  className="" />
//                         <div>
//                           <p className="heading-8">
//                             {sub.name}
//                           </p>
//                           <p className="B-3 mt-1">
//                             {sub.description}
//                           </p>
//                         </div>
//                          </div>

//                          <img src="/assets/next_red.png"></img>
                        
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               )}

//              {/* {item.name === "Services" && (
//   <div
//     className="absolute top-full right-[-500%] mt-6 w-[890px] p-4
//                opacity-0 invisible group-hover:opacity-100 group-hover:visible
//                transition-all duration-300 company_submenu"
//   >
//     <div className="grid grid-cols-2 gap-4">
//       <div className="space-y-1">
//        {serviceCategories.map((service) => (
//           <a
//             key={service._id}
//             href={`/services/${service.name
//               .toLowerCase()
//               .replace(/\s+/g, "-")}`}
//             className="flex items-center justify-between p-3 link"
//           >
//             <div className="flex items-center gap-4">
//               <img src="/assets/healthcare_link.svg" />
//               <div>
//                 <p className="heading-7">{service.name}</p>
//                 <p className="B-3 mt-2">{service.description}</p>
//               </div>
//             </div>

//             <img src="/assets/next_red.png" />
//           </a>
//         ))}
//       </div>
//     </div>
//   </div>
//               )} */}

//               {item.name === "Services" && (
//   <div
//     className="absolute top-full right-[-500%] mt-6 w-[890px] p-4
//                opacity-0 invisible group-hover:opacity-100 group-hover:visible
//                transition-all duration-300 company_submenu"
//   >
//     <div className="grid grid-cols-2 gap-4">
//       <div className="space-y-1">
//         {serviceCategories.map((service) => {
//           const subCats = getSubCategoriesByCategory(service._id);

//           return (
//             <div
//               key={service._id}
//               className="relative group/service"
//             >
//               {/* CATEGORY */}
//               <div className="flex items-center justify-between p-3 link cursor-pointer">
//                 <div className="flex items-center gap-4">
//                   <img src="/assets/healthcare_link.svg" />
//                   <div>
//                     <p className="heading-8">{service.name}</p>
//                     <p className="B-3 mt-1">{service.description}</p>
//                   </div>
//                 </div>
//                 <img src="/assets/next_red.png" />
//               </div>

//               {/* SUBCATEGORIES */}
//               {subCats.length > 0 && (
//                 <div
//                   className="absolute top-0 left-full ml-2 w-[340px]
//                              bg-white shadow-lg rounded-xl p-3
//                              opacity-0 invisible
//                              group-hover/service:opacity-100
//                              group-hover/service:visible
//                              transition-all duration-300"
//                 >
//                   <ul className="space-y-2">
//                     {subCats.map((sub) => (
//                       <li key={sub._id}>
//                         <a
//                           href={`/services/${slugify(service.name)}/${slugify(sub.name)}`}
//                           className="block px-3 py-2 rounded-md
//                                      hover:bg-gray-100 text-sm"
//                         >
//                           {sub.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// )}


//             </li>
//           ))}
//         </ul>

//         {/* mobile menu */}

//         {/* MOBILE MENU */}

//         {mobileMenu && (
//   <div
//     className="fixed inset-0 bg-black/40 z-[999]"
//     onClick={() => setMobileMenu(false)}
//   />
// )}

// {mobileMenu && (
  
//   <div 
//   className={`fixed top-0 right-0 h-full max-w-[400px]
//                z-[1000] shadow-xl  mobile-navbar
//               transform transition-transform duration-300
//               ${mobileMenu ? "translate-x-0" : "-translate-x-full"}`}
// >

//   <div className="flex items-center justify-between p-4 bg-white ">
//   <img src="/assets/logo.png" className="h-20" />
  
//   <img src="/assets/nav_close.png"  className="text-2xl"
//     onClick={() => setMobileMenu(false)}></img>
// </div>


//     <ul className="flex flex-col p-4 space-y-3">
//       {navItems.map((item, i) => (
//         <li key={i}>
//           {/* MAIN ITEM */}
//           <div
//             className="flex justify-between items-center font-medium"
//             onClick={() =>
//               setOpenMenu(openMenu === i ? null : i)
//             }
//           >
//             {item.name}
//             {/* {item.subLinks && <span className="pl-3">
//                     <img
//                     src="/assets/dropdownIcon.png"
//                     className="transition-transform duration-300 group-hover:rotate-180"
//                   />
//                     </span>} */}
//                     {item.name === "Services" && openMenu === i && (
//   <div className="pl-2 mt-2 space-y-2">
//     {serviceCategories.map((service, sIndex) => {
//       const subCats = getSubCategoriesByCategory(service._id);

//       return (
//         <div key={service._id}>
//           {/* CATEGORY */}
//           <div
//             className="flex justify-between items-center p-2 link"
//             onClick={() =>
//               setOpenMobileService(
//                 openMobileService === sIndex ? null : sIndex
//               )
//             }
//           >
//             <div className="flex items-center gap-3">
//               <img src="/assets/healthcare_link.svg" />
//               <div>
//                 <p className="B-2">{service.name}</p>
//                 <p className="B-4">{service.description}</p>
//               </div>
//             </div>
//             <img src="/assets/dropdownIcon.png" />
//           </div>

//           {/* SUBCATEGORIES */}
//           {openMobileService === sIndex && subCats.length > 0 && (
//             <ul className="pl-6 mt-1 space-y-1 text-sm">
//               {subCats.map((sub) => (
//                 <li key={sub._id}>
//                   <a
//                     href={`/services/${slugify(service.name)}/${slugify(
//                       sub.name
//                     )}`}
//                     className="block py-1"
//                   >
//                     {sub.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       );
//     })}
//   </div>
// )}

//           </div>

//           {/* SUBMENU */}
//           {item.subLinks && openMenu === i && (
//             <div className="pl-1 mt-2 space-y-2 company_submenu_mob">
//               {item.subLinks.map((sub, j) => (
//                 <div key={j}>
//                   <div
//                     className="flex justify-between items-center p-2 link "
//                     onHover={() =>
//                       setOpenService(openService === j ? null : j)
//                     }
//                   >
//                                      <div className="flex items-center  gap-4"> 
//                         <img  src={sub.image}   alt={sub.name}  className="" />
//                         <div>
//                           <p className="B-2">
//                             {sub.name}
//                           </p>
//                           <p className="B-4 mt-1">
//                             {sub.description}
//                           </p>
//                         </div>
//                          </div>

//                          <img src="/assets/next_red.png"></img>
//                                       </div>

//                   {/* INNER SUBMENU */}
//                   {sub.children && openService === j && (
//                     <ul className="pl-4 mt-1 space-y-1 text-sm">
//                       {sub.children.map((child, k) => (
//                         <li key={k}>
//                           <a href={child.link}>
//                             {child.name}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}

          

//         </li>
//       ))}
//       <button className="button rounded-full flex items-center B-1" style={{width:"fit-content"}}>
//           Get Started
//           <img src="/assets/button_arrow.png" className="ml-2"></img>
//         </button>
//     </ul>
//   </div>
// )}


//         <button className="button rounded-full   hidden lg:flex items-center B-1">
//           Get Started
//           <img src="/assets/button_arrow.png" className="ml-2"></img>
//         </button>
//       </div>
//     </>
//   );
// };

// export default Navbar;


"use client"
import { getServiceCategoryServ } from "@/services/serviceCategory.service";
import { getServiceSubCategoryServ } from "@/services/serviceSubcategory.service";
import React from "react";
import { useState  , useEffect} from "react";
import BookingForm from "./BookingForm";


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
        link: "/packages",
      },
      {
        name: "Careers ",
        description: "Happy to help you",
        image: "/assets/career_link.png",
        link: "/career",
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
      link: "/healthcare",
    },
    {
      name: "E-Commerce & Retail",
       description: "Streamlined Pricing",
      image: "/assets/healthcare_link.svg",
      link: "/e-commerce",
    },
    {
      name: "Education & E-Learning",
       description: "Streamlined Pricing",
       image: "/assets/healthcare_link.svg",
      link: "/education",
    },
     {
      name: "Finance &  Banking",
       description: "Streamlined Pricing",
      image: "/assets/healthcare_link.svg",
      link: "/finance",
    },
     {
      name: "Real Estate",
       description: "Streamlined Pricing",
      image: "/assets/healthcare_link.svg",
      link: "/real-estate",
    },
     {
      name: "Travel & Tourism",
      description: "Streamlined Pricing",
      image: "/assets/healthcare_link.svg",
      link: "/travel",
    },
     { name: "Taxi booking",
      description: "Streamlined Pricing",
      image: "/assets/healthcare_link.svg",
      link: "/taxi-booking",
    },
  ],
  },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Blogs", link: "/blogs" },
];

const Navbar = () => {

   const [mobileMenu, setMobileMenu] = useState(false);
   const [activeMobileCategory, setActiveMobileCategory] = useState(null); 
  // const [openMenu, setOpenMenu] = useState(null);
  const [openService, setOpenService] = useState(null);
  const [openMobileService, setOpenMobileService] = useState(null);
  const [openServiceCategory, setOpenServiceCategory] = useState(null);


  const[serviceCategories , setServicecategories] = useState([]);
  const[serviceSubCategories , setServiceSubcategories] = useState([]);
const [showGetStarted, setShowGetStarted] = useState(false);
  

  const fetchCategories = async () => {
    try {
      const res = await getServiceCategoryServ();
      setServicecategories(res.data.data);
      console.log("res", res)

    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCategories();
  }, []);

    const fetchSubCategories = async () => {
    try {
      const res = await getServiceSubCategoryServ();
      setServiceSubcategories(res.data.data);
      console.log("res", res)

    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchSubCategories();
  }, []);

  const getSubCategoriesByCategory = (categoryId) => {
  return serviceSubCategories.filter(
    (sub) => sub.categoryId._id === categoryId
  );
};

const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const [mobileStack, setMobileStack] = useState([]);

const openMenu = (item) => {
  setMobileStack((prev) => [...prev, item]);

  if (item.name === "Services") {
    setOpenServiceCategory(null);
  }
};



const goBack = () => {
  setMobileStack((prev) => prev.slice(0, -1));
};

const currentMenu = mobileStack[mobileStack.length - 1];

const getCurrentItems = () => {
  if (!currentMenu) return navItems;

  if (currentMenu.name === "Services") {
    return serviceCategories;
  }

  if (currentMenu.children) {
    return currentMenu.children;
  }

  if (currentMenu.subLinks) {
    return currentMenu.subLinks;
  }

  return [];
};



  return (
    <>
      <div className="navbar fixed top-0 left-0 w-full  flex justify-between items-center md:px-20 sm:px-10 px-3  z-[1000]">
        <img src="/assets/new-logo.svg" className="nav-logo sm:h-auto h-20"></img>

       <img
  src={mobileMenu ? "/assets/nav_close.png" : "/assets/nav-toggle.png"}
  className="lg:hidden cursor-pointer"
  onClick={() => setMobileMenu(!mobileMenu)}
/>


        {/* desktop menu */}

        <ul className="nav-links hidden lg:flex items-center gap-7 list-none px-7 py-3">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative nav-item flex items-center heading-7 group"
            >
              {/* Menu Title */}
             {item.link ? (
  <a href={item.link} className="flex items-center cursor-pointer heading-8">
    {item.name}
  </a>
) : (
  <span className="flex items-center cursor-pointer heading-8">
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
)}

              {/*  Company Submenu */}
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
                          <p className="heading-8">
                            {sub.name}
                          </p>
                          <p className="B-3 mt-1">
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
                          <p className="heading-8">
                            {sub.name}
                          </p>
                          <p className="B-3 mt-1">
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

             {/* {item.name === "Services" && (
  <div
    className="absolute top-full right-[-500%] mt-6 w-[890px] p-4
               opacity-0 invisible group-hover:opacity-100 group-hover:visible
               transition-all duration-300 company_submenu"
  >
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-1">
       {serviceCategories.map((service) => (
          <a
            key={service._id}
            href={`/services/${service.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="flex items-center justify-between p-3 link"
          >
            <div className="flex items-center gap-4">
              <img src="/assets/healthcare_link.svg" />
              <div>
                <p className="heading-7">{service.name}</p>
                <p className="B-3 mt-2">{service.description}</p>
              </div>
            </div>

            <img src="/assets/next_red.png" />
          </a>
        ))}
      </div>
    </div>
  </div>
              )} */}

              {item.name === "Services" && (
  <div
    className="absolute top-full right-[-500%] mt-6 w-[890px] p-4
               opacity-0 invisible group-hover:opacity-100 group-hover:visible
               transition-all duration-300 company_submenu"
  >
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-1">
        {serviceCategories.map((service) => {
          const subCats = getSubCategoriesByCategory(service._id);

          return (
            <div
              key={service._id}
              className="relative group/service"
            >
              {/* CATEGORY */}
          <a
  href={`/service/${slugify(service.name)}-in-india`}
  className="flex items-center justify-between p-2 link cursor-pointer"
>
  <div className="flex items-center gap-3">
    <img src="/assets/healthcare_link.svg" />
    <div>
      <p className="B-1">{service.name}</p>
      <p className="B-4 mt-1">{service.description}</p>
    </div>
  </div>
  <img src="/assets/next_red.png" />
</a>


              {/* SUBCATEGORIES */}
              {subCats.length > 0 && (
                <div
                  className="absolute top-0 left-full ml-2 w-[340px]
                             bg-white shadow-lg rounded-xl p-3
                             opacity-0 invisible
                             group-hover/service:opacity-100
                             group-hover/service:visible
                             transition-all duration-300"
                >
                  <ul className="space-y-2">
                    {subCats.map((sub) => (
                      <li key={sub._id}>
                        <a
                          // href={`/services/${slugify(service.name)}/${slugify(sub.name)}`}
                           href={`/services/${slugify(sub.name)}`}
                          className="block px-3 py-2 rounded-md
                                     hover:bg-gray-100 text-sm"
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </div>
)}


            </li>
          ))}
        </ul>

        {/* mobile menu */}

        {/* MOBILE MENU */}
{mobileMenu && (
  <div
    className="fixed inset-0 bg-black/40 z-[999]"
    onClick={() => {
      setMobileMenu(false);
      setMobileStack([]);
      setOpenServiceCategory(null);
    }}
  />
)}

{/* MOBILE MENU */}
{mobileMenu && (
  <>
    {/* OVERLAY */}
    <div
      className="fixed inset-0 bg-black/40 z-[999]"
      onClick={() => {
        setMobileMenu(false);
        setMobileStack([]);
        setOpenServiceCategory(null);
      }}
    />

    {/* DRAWER */}
    <div className="fixed top-0 right-0 h-full w-full sm:w-[360px] z-[1000] flex flex-col">

      {/* HEADER */}
      <div className="flex items-center justify-between p-4 bg-white">
        <img src="/assets/new-logo.svg" className="h-14" />
        <img
          src="/assets/nav_close.png"
          className="h-6 cursor-pointer"
          onClick={() => {
            setMobileMenu(false);
            setMobileStack([]);
            setOpenServiceCategory(null);
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-4 mobile-navbar">

        {/* BACK */}
        {mobileStack.length > 0 && (
          <div
            className="flex items-center gap-3 mb-4 cursor-pointer heading-8 font-lustria"
            onClick={() => {
              setMobileStack((prev) => prev.slice(0, -1));
              setOpenServiceCategory(null);
            }}
          >
            <img src="/assets/back_arrow.png" className="h-4 w-4" />
            <span>{mobileStack[mobileStack.length - 1]?.name}</span>
          </div>
        )}

        {/* MENU LIST */}
        <div className="space-y-4">

          {/* ROOT MENU */}
          {mobileStack.length === 0 &&
            navItems.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center cursor-pointer heading-8 font-lustria"
                onClick={() => {
                  if (item.name === "Services") {
                    setMobileStack([{ name: "Services", type: "services" }]);
                  } else if (item.subLinks) {
                    setMobileStack([item]);
                  } else {
                    window.location.href = item.link;
                    setMobileMenu(false);
                  }
                }}
              >
                {item.name}
                {(item.subLinks || item.name === "Services") && (
                  <img src="/assets/nav_mobile_next.png" />
                )}
              </div>
            ))}

          {/* STATIC SUBMENUS (Company / Solutions) */}
          {mobileStack.length === 1 &&
            mobileStack[0].name !== "Services" &&
            mobileStack[0].subLinks && (
              <div className="space-y-4">
                {mobileStack[0].subLinks.map((sub, i) => (
                  <a
                    key={i}
                    href={sub.link}
                    className="block font-medium"
                    onClick={() => {
                      setMobileMenu(false);
                      setMobileStack([]);
                    }}
                  >
                    {sub.name}
                  </a>
                ))}
              </div>
            )}

          {/* SERVICES (API ONLY) */}
          {mobileStack.length === 1 &&
            mobileStack[0].type === "services" && (
              <div className="space-y-3">

                {serviceCategories.map((cat) => {
                  const subCats = getSubCategoriesByCategory(cat._id);
                  const isOpen = openServiceCategory === cat._id;

                  return (
                    <div key={cat._id} className=" pb-2">

                      {/* CATEGORY */}
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() =>
                          setOpenServiceCategory(isOpen ? null : cat._id)
                        }
                      >
                        <span className="heading-8 font-lustria">{cat.name}</span>
                        <img
                          src="/assets/nav_mobile_next.png"
                          className={`transition-transform ${
                            isOpen ? "rotate-90" : ""
                          }`}
                        />
                      </div>

                      {/* SUBCATEGORIES (TOGGLE) */}
                      {isOpen && (
                        <div className="pl-4 mt-2 py-2 space-y-2 bg-white">
                          {subCats.map((sub) => (
                            <a
                              key={sub._id}
                              href={`/services/${slugify(cat.name)}/${slugify(
                                sub.name
                              )}`}
                              className="block B-3 font-notosans pb-2"
                              onClick={() => {
                                setMobileMenu(false);
                                setMobileStack([]);
                                setOpenServiceCategory(null);
                              }}
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
        </div>

        {/* CTA */}
        <button className="button rounded-full mt-6 flex items-center"  onClick={() => setShowGetStarted(true)}>
          Get Started
          <img src="/assets/button_arrow.png" className="ml-2" />
        </button>
      </div>
    </div>
  </>
)}




        <button className="button rounded-full   hidden lg:flex items-center B-1"  onClick={() => setShowGetStarted(true)}>
          Get Started
          <img src="/assets/button_arrow.png" className="ml-2"></img>
        </button>
      </div>

 
<BookingForm
isOpen={showGetStarted}
  onClose={() => setShowGetStarted(false)}
  />
    </>
  );
};

export default Navbar;
