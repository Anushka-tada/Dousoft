import React from "react";

const HeroSection = ({
  title,
  description,
  breadcrumb,
  borderColor = "#F0F8F0",
}) => {
  return (
    <div className="about-herosection mb-5">
      <div
        className="about-herosection-circle light-green-shadow mb-4"
        style={{ border: `8px solid ${borderColor}` }}
      >
        <div className="about-herosection-content">
          <h3 className="heading-3 font-lustria mb-3 about-heading">
            {title}
          </h3>

          <div className="about-hero-p">
            <p className="B-3 font-notosans mb-5">
              {description}
            </p>
          </div>

          <p className="heading-7 font-lustria  sm:p-3 p-2 inline-block btn service-card">
            {breadcrumb}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
