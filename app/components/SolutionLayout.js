import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterTop from "../components/FooterTop";
import HeroSection from "../components/Herosection2";

const SolutionLayout = ({
  hero,
  intro,
  approach,
  framework,
  offerings,
  benefits,
  whyChoose,
  cta,
}) => {
  return (
    <div>
      <Navbar />

      <HeroSection
        title={hero.title}
        description={hero.description}
        breadcrumb={hero.breadcrumb}
      />

      <div className="solution-page">

        {/* SECTION 1 */}
        <section className="industry">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="row flex flex-wrap -mx-3 items-center">
              <div className="col-md-6 w-full md:w-1/2 px-3 md:pe-5">
                <h3 className="heading-3 font-lustria">
                  {intro.heading}
                </h3>

                {intro.paragraphs.map((p, i) => (
                  <p key={i} className="B-1 font-notosans">
                    {p}
                  </p>
                ))}
              </div>

              <div className="col-md-6 w-full md:w-1/2 px-3">
                <div className="Background-Shadow"></div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="industry ind-2">
          <h3 className="heading-3 font-lustria mb-10">
            {approach.heading}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.cards.map((card, i) => (
              <div key={i}>
                <div className="industry-card">
                  <div className="box">
                    <div className="icon-heading flex items-center gap-4 mb-4">
                      <div className="icon service-inner-shadow">
                        <img src={card.icon} alt="" />
                      </div>
                      <p className="heading-7 font-lustria">
                        {card.title}
                      </p>
                    </div>

                    <p className="B-3 font-notosans mb-4">
                      {card.description}
                    </p>

                    <p className="heading-8 font-lustria my-4 pb-4">
                      Our approach ensures:
                    </p>

                    <div className="approach-box grid grid-cols-2 gap-4">
                      {card.points.map((point, idx) => (
                        <div
                          key={idx}
                          className="icon-box flex items-center gap-3"
                          style={{ width: "-webkit-fill-available" }}
                        >
                          <div className="small-icon flex justify-center">
                            <img src={point.icon} alt="" />
                          </div>
                          <p className="B-3 font-notosans">
                            {point.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 (EMPTY SAME AS ORIGINAL) */}
        <section className="industry ind-3"></section>

       {/* SECTION 4 – FRAMEWORK (DESIGN SAME AS ORIGINAL) */}
<section className="industry ind-4">
  <div className="main-frame">

    {/* Heading */}
    <div className="ind-4-heading text-center mb-10">
      <h3 className="heading-3">
        {framework.heading}
      </h3>
      <p className="B-1">
        {framework.subheading}
      </p>
    </div>

    {/* Framework Grid */}
    <div className="framework grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
      {framework.steps.map((step, i) => (
        <div
          key={i}
          className={`framework-box ${i !== framework.steps.length - 1 ? "relative" : ""} service-card`}
        >
          <div className="framwork-icon-box flex items-center justify-between mb-4">
            <div className="f-icon service-inner-shadow">
              <img src={step.icon} alt="" />
            </div>
            <h4 className="heading-4">{step.number}</h4>
          </div>

          <p className="heading-7 mb-3">{step.title}</p>

          <ul className="space-y-2">
            {step.points.map((point, idx) => (
              <li key={idx} className="B-3">
                {point}
              </li>
            ))}
          </ul>

          {/* Direction Arrow (only for first 4 boxes) */}
          {i !== framework.steps.length - 1 && (
            <div className="framework-direction-1 mt-4 hidden md:block">
              <img src="assets/images/healthcare/icon/Vector 11.svg" alt="" />
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Bottom Text */}
    <div className="framework-box-2 text-center mt-10 service-card">
      <p className="heading-7">
        {framework.footerText}
      </p>
    </div>

  </div>
</section>

        {/* SECTION 5 */}
        <section className="industry ind-5">
          <h3 className="heading-3 font-lustria mb-10">
            {offerings.heading}
          </h3>

          <div className="industry-row grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.cards.map((card, i) => (
              <div key={i}>
                <div className="industry-card">
                  <div className={card.overlayClass}></div>
                  <div>
                    <p className="heading-7">{card.title}</p>
                    <p className="B-3">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6 */}
        <section className="industry ind-6">
          <h3 className="heading-3">
            {benefits.heading}
          </h3>

          <div className="why-card-row">
            {benefits.items.map((item, i) => (
              <div key={i} className="why-card">
                <div className="why-icon">
                  <img src={item.icon} alt="" />
                </div>
                <p className="heading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7 */}
        <section className="industry ind-7">
          <h3 className="heading-3 mb-10">
            {whyChoose.heading}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className={whyChoose.imageClass}></div>
            </div>

            <div className="space-y-4">
              {whyChoose.points.map((p, i) => (
                <div key={i} className="icon-heading flex items-start gap-4">
                  <div className="icon service-inner-shadow">
                    <img src={p.icon} alt="" />
                  </div>
                  <p className="heading-7 font-lustria">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8 */}
        <section className="industry ind-8 relative">
          <div className="star-bg"></div>

          <div className="flex flex-col items-center text-center px-4 py-16 max-w-4xl mx-auto">
            <h3 className="heading-3 mb-4">{cta.heading}</h3>
            <p className="B-1 pb-8">{cta.description}</p>

            <div className="cta-btn flex items-center gap-3 cursor-pointer">
              <p className="B-1">{cta.buttonText}</p>
              <div className="btn-icon">
                <img src={cta.icon} alt="" />
              </div>
            </div>
          </div>
        </section>

      </div>

      <FooterTop />
      <Footer />
    </div>
  );
};

export default SolutionLayout;