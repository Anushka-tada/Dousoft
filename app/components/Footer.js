import React from "react";

const Footer = () => {
  return (
    <div className="footer px-14 pt-14 ">
      <div className="footer-main grid grid-cols-2 items-center justify-between px-8 gap-8 py-10 pb-14 mb-14">
        <div>
          <div className="flex gap-2 mb-8">
            <img src="/assets/footer_bulb.png"></img>
            <p className="B-1 font-notosans red">Future Ready</p>
          </div>

          <h3 className="heading-3 font-lustria text-white ">
            Stay ahead of the curve
          </h3>
          <p className="B-1 font-notosans para">
            Join our newsletter for the latest in AI trends, digital
            transformation insights, and growth strategies delivered straight to
            your inbox.
          </p>
        </div>
        <div>
         <div className="relative mb-5 flex justify-end w-fit justify-self-end">
  <img
    src="/assets/email_black.png" 
    alt="mail"
    className="absolute w-5 h-5 opacity-60" style={{top:"30%" , left:"5%"}}
  />

  <input
    type="email"
    placeholder="Enter your work email..."
    className="py-3 pl-12 pr-5 rounded-full border input w-full B-3 font-notosans text-gray-500 bg-white"
  />
</div>


          <button className="py-3 px-5 rounded-full B-1 btn  flex justify-between gap-2 font-notosans mb-4 ">
            Subscribe Now
            <img src="/assets/button_arrow.png" className="mr-2"></img>
          </button>

          <p className="B-3 text-end me-16 para ">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 px-9 pb-5 gap-7">
        <div>
          <img src="/assets/footer_logo.png" className="mb-4"></img>
          <p className="B-3 text-white ">
            Engineered for growth. We build the digital infrastructure that
            powers the next generation of AI-driven businesses.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="heading-7 pb-2 mb-4 font-lustria text-white w-fit">
            Solutions
          </p>
          <ul>
            <li className="B-3 text-white mb-4">
              <a>AI Consulting</a>
            </li>
            <li className="B-3 text-white mb-4">
              <a>Digital Transform</a>
            </li>
            <li className="B-3 text-white mb-4">
              <a>Cloud Infra</a>
            </li>
            <li className="B-3 text-white mb-4">
              <a>Data Analytics</a>
            </li>
          </ul>
        </div>

        <div className="ps-5">
          <p className="heading-7 pb-2 mb-4 font-lustria text-white w-fit">
            Company
          </p>
          <ul>
            <li className="B-3 text-white mb-4">
              <a>About Us</a>
            </li>
            <li className="B-3 text-white mb-4">
              <a>Careers</a>
            </li>
            <li className="B-3 text-white mb-4">
              <a>Case Studies</a>
            </li>
            <li className="B-3 text-white mb-4">
              <a>Partners</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="heading-7 pb-2 mb-4 font-lustria text-white w-fit">
             Contact Us
          </p>
          <ul>
            <li className="B-3 text-white mb-5 flex  gap-3">
               <img src="/assets/location.png" className="p-2.5 px-3 bg-white icon rounded-full"></img>
              <p>9/132, , Akruti Apartments, Near Akshardham Temple, Chitrakoot, Vaishali Nagar-302021</p>
            </li>
             <li className=" text-white mb-5 flex gap-3">
               <img src="/assets/email_red.png" className="p-2.5 px-3 bg-white icon rounded-full"></img>
             <div>
                  <p className="B-1 font-notosans">Email Us</p>
              <p className="B-3">info@dousoftit.com</p>
             </div>
            </li>
           <li className=" text-white mb-4 flex gap-3">
               <img src="/assets/call_red.png" className="p-2.5 px-3 bg-white icon rounded-full"></img>
             <div>
                  <p className="B-1 font-notosans">Call Us</p>
              <p className="B-3">+91 77349 96636</p>
             </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between py-8 " style={{borderTop:"1px solid #264f3663"}}>
       <p className="B-3 text-white">© 2026 Dousoft IT Solution Pvt. Ltd. </p>

       <div className="flex gap-5">
       <p className="B-3 text-white">Privacy Policy</p>
       <p className="B-3 text-white">Terms of Service</p>
       </div>
      </div>
    </div>
  );
};

export default Footer;
