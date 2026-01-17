import React from 'react'
import Navbar from '../components/Navbar'
import FooterTop from '../components/FooterTop'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
       <header className="policy-header mt-14 ">
        <div className="container">
            <h1 className="heading-3 text-white">Terms and Conditions</h1>
            <p className="B-1 text-white-50 mb-4">Legal agreements and website usage policies</p>
        </div>
    </header>

    <div className="container px-14">
        <div className="row">
            
                <div className="content-card">
                    <p className="B-1">Welcome to <strong>Dousoft IT Service</strong>. When you access or use this website you are agreeing to abide by and be legally bound by these Terms and Conditions. These conditions govern your use of our website as well as our services and content. If you are not in agreement to any of these terms, you should avoid using our website.</p>

                    <section id="about">
                        <h2 className="heading-6 primary-text">About Dousoft IT Service</h2>
                        <h3 className="heading-7">Website Usage</h3>
                        <p className="B-1">Dousoft IT Service provides IT services as well as Web development and software products and other information via this website. The information on this website is for general informational as well as business-related purposes only.</p>
                        <p className="B-1">We are entitled to change the website, update or even discontinue any aspect of our website or its services without notice.</p>
                    </section>

                    <section id="intellectual">
                        <h2 className="heading-6 primary-text">Use of Website Content</h2>
                        <h3 className="heading-7">Intellectual Property Rights</h3>
                        <p className="B-1">The content of this website comprising logos, text, graphics icons, images and codes, are the sole property of Dousoft IT Service unless otherwise specified. The content is protected under any applicable Intellectual Property Laws.</p>
                        
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <p className="fw-bold">You may:</p>
                                <ul>
                                    <li className="B-3">access information for personal use</li>
                                    <li className="B-3">Download content for non-commercial usage</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <p className="fw-bold">You may not:</p>
                                <ul>
                                    <li className="B-3">Copy without written authorization</li>
                                    <li className="B-3">Use content for illegal purposes</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section id="services">
                        <h2 className="heading-6 primary-text">Services and Enquiries</h2>
                        <h3 className="heading-7">Service Information</h3>
                        <p className="B-1">The descriptions of services on this site are intended to provide a general understanding. The final scope, price timelines, deliverables, and scope are only confirmed by written agreements or through proposals shared directly with clients.</p>
                    </section>

                    <section id="responsibilities">
                        <h2 className="heading-6 primary-text">User Responsibilities</h2>
                        <h3 className="heading-7">Acceptable Use</h3>
                        <p className="B-1">When using our website, you agree not to:</p>
                        <ul className="B-1">
                            <li>submit false or harmful information</li>
                            <li>attempt to disrupt website functionality</li>
                            <li>upload malicious code or spam</li>
                        </ul>
                    </section>

                    <section id="liability">
                        <h2 className="heading-6 primary-text">Limitation of Liability</h2>
                        <p className="B-1">Dousoft IT Service is not liable for any direct or indirect loss, damage, or disruption arising from the use or inability to use the website, reliance on content, or technical issues.</p>
                    </section>

                    <section id="privacy">
                        <h2 className="heading-6 primary-text">Privacy and Data Protection</h2>
                        <p className="B-1">Your use of this website is also governed by our <strong>Privacy Policy</strong>, which explains how we collect, use, and protect personal information.</p>
                    </section>

                    <section id="contact" className="border-0">
                        <h2 className="heading-6 primary-text">Contact Information</h2>
                        <p className="B-1">If you have any questions regarding these Terms and Conditions, you may contact us through the contact details provided on our website.</p>
                        <div className="mt-4">
                            <a href="#" className="btn btn-primary" style={{backgroundColor: "var(--primary-color)" , border: "none" , padding: "12px 30px"}}>Go to Contact Page</a>
                        </div>
                    </section>
                </div>
         
        </div>
    </div>

    <FooterTop/>
    <Footer/>

    </div>
  )
}

export default page
