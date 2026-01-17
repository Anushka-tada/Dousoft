"use client";
import React, { useState } from "react";

const faqs = [
  {
    number: "01",
    title: "Send your CV",
    description:
      "Apply for a position by sending us your CV or providing a link to your LinkedIn profile, and take the first step toward joining our team.",
  },
  {
    number: "02",
    title: "Initial screening results?",
    description:
      "Our recruiter will get back to you if your resume meets our requirements in order to introduce you to the role.",
  },
  {
    number: "03",
    title: "Job interview",
    description:
      "You will meet a few of your potential colleagues to talk about your skills, background, and expectations in detail.",
  },
  {
    number: "04",
    title: "Test task",
    description:
      "If needed, we’ll arrange a small test task. Depending on the project and role, this may be followed by a client interview.",
  },
  {
    number: "05",
    title: "You’re hired!",
    description:
      "By deciding we are a good match for each other, we’ll agree the terms of you starting your career at Dousoft IT Solutions.",
  },
];

const CareerFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-3 sm:px-6 md:px-10 lg:px-14 careerFaq">
      <div className="text-center pt-8">
        <h3 className="heading-3 mb-5 font-lustria">
          Our Hiring Process
        </h3>
        <p className="B-1 flex justify-self-center para">
          We follow a structured and transparent hiring process to ensure the
          right talent joins our team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
        {/* Left Section */}
        <div>
          <div className="xb-faq cp-faq">
            <ul className="accordion_box clearfix list-unstyled">

              {faqs.map((faq, index) => (
                <li
                  key={index}
                  className={`accordion block ${
                    activeIndex === index ? "active-block" : ""
                  }`}
                >
<div
  className={`acc-btn flex justify-between ${
    activeIndex === index ? "active big-p" : "big-p"
  }`}
  onClick={() => toggleFAQ(index)}
>
  <div>
    <span className="number heading-5">{faq.number}</span> <span className="heading-6">_{faq.title}</span>
  </div>

  <img
    src={
      activeIndex === index
        ? "/assets/minus.png"
        : "/assets/white_plus.png"
    }
    alt="toggle"
    className="sm:p-3 p-1 rounded-full icon"
  />
</div>


                  <div
                    className={`acc_body ${
                      activeIndex === index ? "current" : ""
                    }`}
                    style={{
                      display:
                        activeIndex === index ? "block" : "none",
                    }}
                  >
                    <div className="content">
                      <p className="font-notosans B-1 ">{faq.description}</p>
                    </div>
                  </div>
                </li>
              ))}

            </ul>
          </div>
        </div>

        {/* Right Image Section */}
        <div>
          <div className="cp-process-right">
            <div className="xb-img">
              <img
                src="assets/career_faq.png"
                alt="Hiring Process Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerFaq;
