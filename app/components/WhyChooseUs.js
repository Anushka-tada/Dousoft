import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  // why choose animation

  // const leftCard = {
  //   hidden: { opacity: 0, x: -80, scale: 0.95 },
  //   visible: { opacity: 1, x: 0, scale: 1 }
  // };

  // const rightCard = {
  //   hidden: { opacity: 0, x: 80, scale: 0.95 },
  //   visible: { opacity: 1, x: 0, scale: 1 }
  // };

  return (
    <div>
      {/* why choose dousoft IT */}
      <div className="why-choose-us py-9 px-3 sm:px-6 md:px-10 lg:px-16">
        {" "}
        <h2 className="heading-3 font-lustria sm:mb-5 mb-4 text-center">
          {" "}
          Why Choose Dousoft IT?{" "}
        </h2>{" "}
        <p className="mb-6 font-notosans B-1 text-center">
          Our approach combines futuristic tech with human-centric design.{" "}
        </p>{" "}
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-14 sm:gap-5 gap-3 items-center">
          {" "}
          <div className="flex lg:flex-col flex-row lg:gap-12 sm:gap-8 gap-3 sm:flex-nowrap flex-wrap">
            {" "}
            <div className="sm:p-7 sm:py-8 p-5 card card-1 ">
              {" "}
              <div className="bg-white rounded-full p-2 px-3 mb-4 w-fit icon">
                {" "}
                <img src="/assets/red_bulb.svg"></img>{" "}
              </div>{" "}
              <p className="heading-7 font-lustria mb-2">
                Best-in-Class Expertise
              </p>{" "}
              <p className="B-3 ">
                We bring years of experience in delivering top-quality software
                solutions across industries.
              </p>{" "}
            </div>{" "}
            <div className="sm:p-7 sm:py-8 p-5 card card-2">
              {" "}
              <div className="bg-white rounded-full p-2 px-3 mb-4 w-fit icon">
                {" "}
                <img src="/assets/clients_red.svg"></img>{" "}
              </div>{" "}
              <p className="heading-7 font-lustria mb-2">
                Trusted by Global Clients
              </p>{" "}
              <p className="B-3 ">
                We are a trusted technology partner with a strong focus on
                long-term client relationships.
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div
            className="card-3 sm:p-8 p-6 flex justify-center items-center align-middle relative"
            style={{ borderRadius: "40px" }}
          >
            {" "}
            <img src="/assets/why_choose_main.svg"></img>{" "}
            <button
              className="btn rounded-full flex items-center p-2 px-3 gap-2 absolute bg-white B-3"
              style={{ width: "fit-content" }}
            >
              {" "}
              <img src="/assets/green_dot.svg" className="ml-2" /> System
              Optimized{" "}
            </button>{" "}
          </div>{" "}
          <div className="flex lg:flex-col flex-row lg:gap-12 sm:gap-8 gap-3 sm:flex-nowrap flex-wrap">
            {" "}
            <div className="sm:p-7 sm:py-8 p-5 card card-2 ">
              {" "}
              <div className="bg-white rounded-full p-2 px-3 mb-4 w-fit icon">
                {" "}
                <img src="/assets/growth_red.svg"></img>{" "}
              </div>{" "}
              <p className="heading-7 font-lustria mb-2">
                Affordable & Transparent Pricing
              </p>{" "}
              <p className="B-3 ">
                Our pricing models are designed to be cost-effective without
                compromising quality.
              </p>{" "}
            </div>{" "}
            <div className="sm:p-7 sm:py-8 p-5 card card-1">
              {" "}
              <div className="bg-white rounded-full p-2 px-3 mb-4 w-fit icon">
                {" "}
                <img src="/assets/support_red.svg"></img>{" "}
              </div>{" "}
              <p className="heading-7 font-lustria mb-2">End-to-End Support</p>{" "}
              <p className="B-3 ">
                From ideation to deployment and ongoing support, we handle the
                complete development lifecycle.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default WhyChooseUs;
