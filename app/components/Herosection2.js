import React from "react";

const HeroSection = ({
  title,
  description,
  breadcrumb,
  borderColor = "#D1D1D1",
}) => {
  return (
    <div className="about-herosection mb-5">
      <div
        className="about-herosection-circle"
        style={{ border: `8px solid ${borderColor}` }}
      >
        <div className="about-herosection-content">
          <h3 className="heading-2 font-lustria mb-3 about-heading">
            {title}
          </h3>

          <div className="about-hero-p">
            <p className="B-1 font-notosans mb-5">
              {description}
            </p>
          </div>

          <p className="heading-7 font-lustria bg-white sm:p-3 p-2 inline-block btn">
            {breadcrumb}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
