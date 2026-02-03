/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Footer from "@/app/components/Footer";
import FooterTop from "@/app/components/FooterTop";
import HeroSection from "@/app/components/Herosection2";
import Navbar from "@/app/components/Navbar";
import React from "react";
import { servicesContent } from "@/app/data/servicesContent";
import { useParams } from "next/navigation";

export default function page() {
  const params = useParams();
  const name = params.name;
  const data = servicesContent[name];

  if (!data) return null;

  return (
    <>
     <Navbar />

   <div className="service-page about-page">

      {/* HERO */}
      <HeroSection
        title={data?.hero.title}
        description={data?.hero.description}
        breadcrumb={data?.hero.breadcrumb}
      />

      {/* best service section */}
      <div className="services_2nd px-3 sm:px-6 md:px-10 lg:px-14 py-6 flex flex-col justify-center text-center">
        <h3 className="heading-3 font-lustria mb-5">
          {data?.bestServiceSection.title}
        </h3>

        {data?.bestServiceSection.paragraphs.map((p, i) => (
          <p key={i} className="mb-3 font-notosans B-1 para">
            {p}
          </p>
        ))}

        <img
          src={data?.bestServiceSection.image}
          className="my-5"
        />
         <p className="mb-3 font-notosans B-1 para">
            {data?.bestServiceSection.imagepara}
          </p>
      </div>

      {/* custom services section */}
      <div className="services_2nd px-3 sm:px-6 md:px-10 lg:px-14 sm:py-6 grid md:grid-cols-2 items-center gap-5">
        <div>
          <h3 className="heading-3 font-lustria mb-5">
            {data?.customServiceSection.title}
          </h3>

          {data?.customServiceSection.paragraphs.map((p, i) => (
            <p key={i} className="mb-3 font-notosans B-1 para">
              {p}
            </p>
          ))}
        </div>

        <div>
          <img
            src={data?.customServiceSection.image}
            className="my-5"
          />
        </div>
      </div>

      {/* capabilities section */}
      <div className="sm:py-16 py-8 px-3 sm:px-6 md:px-10 lg:px-14 industries-section">
        <div className="text-center">
          <h3 className="heading-3 mb-7">
            {data?.capabilities.heading}
          </h3>
          <p className="B-1 flex justify-self-center mb-14">
            {data?.capabilities.subHeading}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-3">
          {data?.capabilities.cards.map((card, i) => (
            <div key={i} className="industry-card p-4">
              <div className="service_image_wrapper">
                <img
                  src={card.img}
                  className="mb-4 service_card_image"
                  style={{ width: "-webkit-fill-available" }}
                />
              </div>
              <p className="mb-4 heading-7 font-lustria">
                {card.name}
              </p>
              <p
                className="B-3 pb-4 mb-2"
                style={{ borderBottom: "1px solid rgb(232 ,232 , 232)" }}
              >
                {card.para}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* why we are top section */}
      <div className="sm:py-16 py-8 px-3 sm:px-6 md:px-10 lg:px-14">
        <div className="text-center">
          <h3 className="heading-3 font-lustria mb-7">
            {data?.whyTopCompany.heading}
          </h3>
          <p className="B-1 font-lustria flex justify-self-center mb-14 para">
            {data?.whyTopCompany.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-3 topCompanyCards px-5 py-14">
          {data?.whyTopCompany.cards.map((card, i) => (
            <div key={i} className="p-4">
              <img src={card.icon} className="mb-5" />
              <h5 className="heading-5 font-lustria mb-3 text-white">
                {card.title}
              </h5>
              <p className="B-1 font-notosans text-white">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* left right image sections */}
      <div className="sm:py-16 py-8 px-3 sm:px-6 md:px-10 lg:px-14">
        {data?.leftRightSections.map((section, i) => (
          <div
            key={i}
            className="mission-image-left grid lg:grid-cols-2 sm:gap-9 gap-4 sm:p-5 p-3 items-start mb-14"
            style={{ backgroundColor: "rgb(232 , 232 , 232)" }}
          >
            {section.imagePosition === "left" && (
              <div className="image-wrapper h-auto">
                <img src={section.image} />
              </div>
            )}

            <div className={section.imagePosition === "left" ? "sm:me-4" : "sm:ms-4"}>
              <h3 className="heading-3 font-lustria sm:mb-6 mb-4">
                {section.title}
              </h3>

              {section.paragraphs.map((p, idx) => (
                <p key={idx} className="B-1 font-notosans mb-4 para">
                  {p}
                </p>
              ))}
               
               <p className="mb-2  heading-8 font-lustria para">{section.bulletHead}</p>
              {section.bulletPoints && (
                <ul>
                  {section.bulletPoints.map((b, j) => (
                    <li key={j} className="B-3 mb-1 para">
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {section.extraText && (
                <p className="B-1  mb-4 para mt-3">
                  {section.extraText}
                </p>
              )}
            </div>

            {section.imagePosition === "right" && (
              <div className="image-wrapper h-auto">
                <img src={section.image} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* industries section */}
      <div className="sm:py-7 py-5 px-3 sm:px-6 md:px-10 lg:px-14">
        <div className="text-center">
          <h3 className="heading-3 font-lustria sm:mb-7 mb-4">
            {data?.industries.heading}
          </h3>
          <p className="B-1 font-notosans flex justify-self-center sm:mb-14 mb-5 para">
            {data?.industries.description}
          </p>
        </div>

        <div className="flex justify-between gap-4 flex-wrap">
          {data?.industries.list.map((item, i) => (
            <div key={i} className="flex flex-col justify-center items-center">
              <img src={item.icon} className="mb-5" />
              <p className="B-1 font-notosans font-semibold red">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* process section */}
      <div className="web-dev-process sm:py-16 py-8 px-3 sm:px-6 md:px-10 lg:px-14">
        <h2 className="heading-3 text-white mb-7 font-lustria text-center">
          {data?.process.heading}
        </h2>
        <p className="B-1 text-center sm:mb-14 mb-8 light-text">
          {data?.process.description}
        </p>

        <div className="process-wrapper">
          {data?.process.steps.map((card, i) => (
            <div
              key={i}
              className="process-card service-card p-4 flex flex-col justify-between"
              style={{ "--bg-img": `url(${card.img})` }}
            >
              <div className="flex justify-end">
                <h1 className="heading-1 font-bold index-no">
                  0{i + 1}
                </h1>
              </div>

              <div>
                <img src={card.icon} className="card_icon p-4 mb-4" />
                <h6 className="heading-6">{card.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
     <FooterTop />
      <Footer />
    </>
  );
}
