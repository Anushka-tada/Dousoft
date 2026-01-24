import React from "react";

const Page = () => {
  return (
    <section className="policy" style={{ backgroundColor: "#e8e8e8" }}>
      {/* Fixed Sidebar */}
      <aside className="sidebar industry-card">
        <div className="sidebar-content">
          <div className="sidebar-title B-1">Privacy Policy</div>

          <ul className="sidebar-nav">
            <li>
              <a href="#introduction" className="active B-3">
                Introduction & Consent
              </a>
            </li>
            <li>
              <a href="#information-collected" className="B-3">
                Information We Collect
              </a>
            </li>
            <li>
              <a href="#information-use" className="B-3">
                How We Use Information
              </a>
            </li>
            <li>
              <a href="#cookies" className="B-3">
                Cookies & Tracking
              </a>
            </li>
            <li>
              <a href="#information-sharing" className="B-3">
                Information Sharing
              </a>
            </li>
            <li>
              <a href="#data-security" className="B-3">
                Data Security
              </a>
            </li>
            <li>
              <a href="#external-links" className="B-3">
                External Links
              </a>
            </li>
            <li>
              <a href="#privacy-choices" className="B-3">
                Your Privacy Choices
              </a>
            </li>
            <li>
              <a href="#children-privacy" className="B-3">
                Children&apos;s Privacy
              </a>
            </li>
            <li>
              <a href="#contact-info" className="B-3">
                Contact Information
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Introduction */}
        <section id="introduction" className="content-section">
          <div className="header">
            <h3 className="heading-3">Privacy Policy</h3>

            <p className="B-1">
              At Dousoft IT Service, we value your privacy and are committed to
              protecting the personal information you share with us. This
              Privacy Policy explains how we collect, use, and safeguard
              information when you visit our website or interact with our
              services.
            </p>

            <div className="consent-box">
              <p className="B-1">
                By using this website, you agree to the practices described in
                this policy.
              </p>
            </div>
          </div>
        </section>

        {/* Information We Collect */}
        <section id="information-collected" className="content-section">
          <h5 className="heading-5 mb-5">Information We Collect</h5>

          <h6 className="heading-6">Personal Information</h6>
          <p className="B-1">
            We may collect personal information that you voluntarily provide
            through our website, including:
          </p>

          <ul>
            <li className="B-3">Name</li>
            <li className="B-3">Email address</li>
            <li className="B-3">Phone number</li>
            <li className="B-3">Company details</li>
            <li className="B-3">Enquiry or message content</li>
          </ul>

          <p className="B-1 mb-3">
            This information is collected when you fill out contact forms,
            request services, or communicate with us directly.
          </p>

          <h6 className="heading-6">Technical and Usage Information</h6>
          <p className="B-1">
            When you browse our website, certain information may be collected
            automatically, such as:
          </p>

          <ul>
            <li className="B-3">IP address</li>
            <li className="B-3">Browser type</li>
            <li className="B-3">Device information</li>
            <li className="B-3">Pages visited and time spent on the site</li>
          </ul>

          <p className="B-1">
            This data helps us understand how visitors use our website and
            improve overall performance.
          </p>
        </section>

        {/* How We Use Information */}
        <section id="information-use" className="content-section">
          <h5 className="heading-5">How We Use Your Information</h5>

          <h6 className="heading-6">Providing Services and Support</h6>
          <ul>
            <li className="B-3">Respond to enquiries and requests</li>
            <li className="B-3">
              Communicate about our IT and web development services
            </li>
            <li className="B-3">Provide customer support and updates</li>
          </ul>

          <h6 className="heading-6">Website Improvement</h6>
          <ul>
            <li className="B-3">Monitor website performance</li>
            <li className="B-3">Analyse visitor behaviour</li>
            <li className="B-3">
              Improve content, structure, and functionality
            </li>
          </ul>
        </section>

        {/* Cookies */}
        <section id="cookies" className="content-section">
          <h5 className="heading-5">Cookies and Tracking Technologies</h5>

          <p className="B-1">
            Cookies are small files stored on your device to enhance your
            browsing experience.
          </p>
        </section>

        {/* Information Sharing */}
        <section id="information-sharing" className="content-section">
          <h5 className="heading-5">Information Sharing and Disclosure</h5>

          <p className="B-1">
            We may share limited information with trusted service providers that
            help us operate our website or deliver services.
          </p>
        </section>

        {/* Data Security */}
        <section id="data-security" className="content-section">
          <h5 className="heading-6">Data Security</h5>
          <p className="B-1">
            We take appropriate technical and organisational measures to protect
            personal information.
          </p>
        </section>

        {/* External Links */}
        <section id="external-links" className="content-section">
          <h5 className="heading-5">External Links</h5>
          <p className="B-1">
            Our website may include links to third-party websites. We are not
            responsible for their privacy practices.
          </p>
        </section>

        {/* Privacy Choices */}
        <section id="privacy-choices" className="content-section">
          <h5 className="heading-5">Your Privacy Choices</h5>
          <p className="B-1">
            You may request access to your personal information or opt out of
            promotional communications.
          </p>
        </section>

        {/* Children Privacy */}
        <section id="children-privacy" className="content-section">
          <h5 className="heading-6">Children&apos;s Privacy</h5>
          <p className="B-1">
            Our services are intended for professional use. We do not knowingly
            collect information from children.
          </p>
        </section>

        {/* Contact Info */}
        <section id="contact-info" className="content-section">
          <h5 className="heading-5">Contact Information</h5>

          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              background: "rgba(43, 238, 121, 0.05)",
              borderRadius: "8px",
              borderLeft: "4px solid var(--secondary-light)",
            }}
          >
            <p className="B-1" style={{ fontWeight: 500 }}>
              Dousoft IT Service
            </p>
            <p className="B-1">
              Please visit our website for current contact details.
            </p>
          </div>
        </section>

        <footer className="footer">
          <p>
            Privacy Policy last updated: January 2026 | Dousoft IT Service
          </p>
        </footer>
      </main>
    </section>
  );
};

export default Page;



