import React from 'react'
import Navbar from '../components/Navbar'
import FooterTop from '../components/FooterTop'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className='mt-24'>
    <Navbar/>
    <div>
      <header className="blog-detail-header">
       <div className="max-w-7xl mx-auto px-4">
  <div className="flex flex-wrap items-center gap-4 mb-4">
    <span className="text-white">
      Software Development
    </span>

    <span className="flex items-center gap-2 text-sm text-gray-300">
      <i className="far fa-calendar"></i>
      June 15, 2025
    </span>
  </div>

  <h1 className="heading-2 font-inter">
    The Future of Web Development: Trends to Watch in 2025
  </h1>

  <p className="B-2">
    Explore the latest web development trends including serverless architecture, AI integration, and progressive web apps that are shaping the future of digital experiences.
  </p>
</div>

    </header>

    <div className="section-padding">
        <div className="blog-detail-content">
            {/* <!-- Main Blog Article --> */}
           <main className="blog-detail-main max-w-7xl mx-auto px-4">
  <article className="blog-article">

    <div className="blog-featured-image mb-6">
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1170&q=80"
        alt="Future of Web Development"
        className="w-full h-auto rounded-lg"
      />
    </div>

    <div className="blog-article-content space-y-4">
      <p className="B-1">
        The web development landscape is evolving at an unprecedented pace...
      </p>

      <h2 className="heading-4">1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is no longer just a buzzword—it's becoming an integral part...</p>

      <div className="highlight-box my-6">
        <p>
          ”By 2025, it’s estimated that 30% of web development tasks will be assisted by AI...”
        </p>
      </div>

      <h2 className="heading-4">2. Serverless Architecture Maturation</h2>

      <h3 className="mt-4">Key Benefits:</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Cost Efficiency:</strong> Pay only for the compute time you consume</li>
        <li><strong>Automatic Scaling:</strong> Handle traffic spikes without manual intervention</li>
        <li><strong>Reduced Operational Overhead:</strong> No server management required</li>
        <li><strong>Faster Time to Market:</strong> Focus on writing code rather than infrastructure</li>
      </ul>

      <h2 className="heading-4">4. WebAssembly (Wasm)</h2>

      <ol className="list-decimal pl-6 space-y-1">
        <li>Complex data processing and visualization</li>
        <li>Games and interactive 3D experiences</li>
        <li>Video and image editing applications</li>
        <li>CAD and design tools</li>
      </ol>
    </div>

    {/* Tags */}
    <div className="blog-tags mt-8">
      <h4>Tags:</h4>
      <div className="tag-list flex flex-wrap gap-2">
        <a href="#" className="tag">Web Development</a>
        <a href="#" className="tag">AI Integration</a>
        <a href="#" className="tag">Serverless</a>
        <a href="#" className="tag">Progressive Web Apps</a>
        <a href="#" className="tag">WebAssembly</a>
        <a href="#" className="tag">Cybersecurity</a>
        <a href="#" className="tag">Technology Trends</a>
      </div>
    </div>

    {/* Share */}
    <div className="sidebar-widget share-widget mt-6">
      <h3>Share This Article</h3>
      <div className="share-icons flex gap-3 mt-2">
        <a href="#" className="share-icon share-facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="share-icon share-twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" className="share-icon share-linkedin"><i className="fab fa-linkedin-in"></i></a>
        <a href="#" className="share-icon share-whatsapp"><i className="fab fa-whatsapp"></i></a>
      </div>
    </div>

  </article>

  {/* Author */}
  <div className="author-info flex gap-4 mt-10">
    <div className="author-avatar">
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
        alt="Author"
        className="w-20 h-20 rounded-full object-cover"
      />
    </div>

    <div className="author-details">
      <h4 className="heading-6">Written by Rajesh Kumar</h4>
      <p className="B-2">Rajesh is a Senior Web Developer...</p>
      <div className="author-social flex gap-3 mt-2">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-medium"></i></a>
      </div>
    </div>
  </div>

  {/* Comments */}
  <div className="comments-section mt-10">
    <h3 className="heading-4">Comments (3)</h3>

    <div className="comment-form mt-4">
      <h4>Leave a Comment</h4>

      <form id="commentForm" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input type="text" id="name" className="form-control w-full" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email *</label>
            <input type="email" id="email" className="form-control w-full" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="comment">Your Comment *</label>
          <textarea id="comment" className="form-control w-full" required />
        </div>

        <button type="submit" className="submit-btn">Post Comment</button>
      </form>
    </div>
  </div>

  {/* Navigation */}
  <div className="blog-navigation flex justify-between gap-4 mt-10">
    <a href="#" className="nav-link prev flex gap-3">
      <i className="fas fa-chevron-left nav-icon"></i>
      <div>
        <span className="B-4">Previous Article</span>
        <div className="B-2">Essential Cybersecurity Practices for Remote Teams</div>
      </div>
    </a>

    <a href="#" className="nav-link next flex gap-3 text-right">
      <div>
        <span className="B-4">Next Article</span>
        <div className="B-2">Optimizing Cloud Infrastructure for Cost Efficiency</div>
      </div>
      <i className="fas fa-chevron-right nav-icon"></i>
    </a>
  </div>
</main>

            
            {/* <!-- Sidebar --> */}
           <aside className="blog-detail-sidebar w-full lg:w-1/3 space-y-8">

  {/* City Categories Widget */}
  <div className="sidebar-widget">
    <h3 className="heading-6 mb-4">City-Based Services</h3>

    <ul className="city-categories space-y-3" id="cityCategories">
      <li className="city-item border rounded-lg">
        <div
          className="city-header flex items-center justify-between p-3 cursor-pointer"
          data-city="delhi"
        >
          <span className="city-name">Delhi NCR</span>
          <div className="flex items-center">
            <span className="city-count">15</span>
            <i className="fas fa-chevron-down dropdown-icon ml-2"></i>
          </div>
        </div>

        <div className="city-dropdown px-3 pb-3">
          <ul className="keyword-list space-y-2">
            <li className="keyword-item">
              <a href="#" className="flex justify-between">
                <span>Web Design</span>
                <span className="keyword-count">5</span>
              </a>
            </li>
            <li className="keyword-item">
              <a href="#" className="flex justify-between">
                <span>Web Development</span>
                <span className="keyword-count">8</span>
              </a>
            </li>
            <li className="keyword-item">
              <a href="#" className="flex justify-between">
                <span>Mobile Apps</span>
                <span className="keyword-count">6</span>
              </a>
            </li>
            <li className="keyword-item">
              <a href="#" className="flex justify-between">
                <span>Digital Marketing</span>
                <span className="keyword-count">7</span>
              </a>
            </li>
            <li className="keyword-item">
              <a href="#" className="flex justify-between">
                <span>SEO Services</span>
                <span className="keyword-count">4</span>
              </a>
            </li>
          </ul>
        </div>
      </li>

      <li className="city-item border rounded-lg">
        <div
          className="city-header flex items-center justify-between p-3 cursor-pointer"
          data-city="mumbai"
        >
          <span className="city-name">Mumbai</span>
          <div className="flex items-center">
            <span className="city-count">12</span>
            <i className="fas fa-chevron-down dropdown-icon ml-2"></i>
          </div>
        </div>

        <div className="city-dropdown px-3 pb-3">
          <ul className="keyword-list space-y-2">
            <li className="keyword-item">
              <a href="#" className="flex justify-between">
                <span>E-commerce Solutions</span>
                <span className="keyword-count">6</span>
              </a>
            </li>
            <li className="keyword-item">
              <a href="#" className="flex justify-between">
                <span>UI/UX Design</span>
                <span className="keyword-count">4</span>
              </a>
            </li>
            <li className="keyword-item">
              <a href="#" className="flex justify-between">
                <span>Cloud Services</span>
                <span className="keyword-count">5</span>
              </a>
            </li>
            <li className="keyword-item">
              <a href="#" className="flex justify-between">
                <span>ERP Solutions</span>
                <span className="keyword-count">3</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>

  {/* Recent Posts Widget */}
  <div className="sidebar-widget">
    <h3 className="heading-6 mb-4">Recent Posts</h3>

    <ul className="recent-posts space-y-4">
      <li className="recent-post-item flex gap-3">
        <div className="recent-post-img w-20 h-20 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1170&q=80"
            alt="Recent Post"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="recent-post-content">
          <h4><a href="#">Mobile App Development Best Practices</a></h4>
          <span>May 28, 2025</span>
        </div>
      </li>

      <li className="recent-post-item flex gap-3">
        <div className="recent-post-img w-20 h-20 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1170&q=80"
            alt="Recent Post"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="recent-post-content">
          <h4><a href="#">The Rise of Low-Code Platforms</a></h4>
          <span>May 20, 2025</span>
        </div>
      </li>

      <li className="recent-post-item flex gap-3">
        <div className="recent-post-img w-20 h-20 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1169&q=80"
            alt="Recent Post"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="recent-post-content">
          <h4><a href="#">Implementing DevOps in Your Organization</a></h4>
          <span>May 15, 2025</span>
        </div>
      </li>
    </ul>
  </div>

  {/* Newsletter Widget */}
  <div className="sidebar-widget">
    <h3 className="heading-6 mb-2">Subscribe to Newsletter</h3>
    <p className="B-3 mb-5">
      Get the latest tech insights and updates from Dousoft IT Solution.
    </p>

    <div className="search-box flex">
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 px-3 py-2 border rounded-l-md"
      />
      <button className="px-4 py-2 rounded-r-md">
        <i className="fas fa-paper-plane"></i>
      </button>
    </div>
  </div>

</aside>

        </div>
        
        {/* <!-- Related Posts --> */}
       <div className="related-posts">
  <h3 className="heading-4 mb-6">Related Articles</h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div>
      <div className="related-post-card h-full">
        <div className="related-post-img">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1170&q=80"
            alt="Cybersecurity"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="related-post-content mt-3">
          <div className="related-post-meta mb-1">
            <span>Cybersecurity • June 10, 2025</span>
          </div>
          <h4>
            <a href="#">Essential Cybersecurity Practices for Remote Teams</a>
          </h4>
        </div>
      </div>
    </div>

    <div>
      <div className="related-post-card h-full">
        <div className="related-post-img">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1172&q=80"
            alt="Cloud Computing"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="related-post-content mt-3">
          <div className="related-post-meta mb-1">
            <span>Cloud Computing • June 5, 2025</span>
          </div>
          <h4>
            <a href="#">Optimizing Cloud Infrastructure for Cost Efficiency</a>
          </h4>
        </div>
      </div>
    </div>

    <div>
      <div className="related-post-card h-full">
        <div className="related-post-img">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1170&q=80"
            alt="Mobile Development"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="related-post-content mt-3">
          <div className="related-post-meta mb-1">
            <span>Mobile Development • May 28, 2025</span>
          </div>
          <h4>
            <a href="#">Mobile App Development Best Practices for 2025</a>
          </h4>
        </div>
      </div>
    </div>

  </div>
</div>

    </div>
    </div>
    <FooterTop/>
    <Footer/>
    </div>
  )
}

export default page
