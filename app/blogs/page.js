import React from 'react'
import Navbar from '../components/Navbar'
import FooterTop from '../components/FooterTop'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
       <div class="container mt-28 px-3 sm:px-6 md:px-10 lg:px-14">
        {/* <!-- Main Blog Content --> */}
        <div class="blog-content">
            {/* <!-- Blog Posts Section --> */}
            <section className="blog-posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
  {/* Blog Post 1 */}
  <article className="blog-card bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
    <div className="blog-card-img">
      <img
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Software Development"
        className="w-full h-56 object-cover"
      />
    </div>

    <div className="blog-card-content p-6 flex flex-col flex-1">
      <div className="blog-meta flex flex-wrap gap-4 text-sm mb-4">
        <span className="blog-category font-medium">
          Software Development
        </span>
        <span><i className="far fa-calendar"></i> June 15, 2025</span>
        <span><i className="far fa-clock"></i> 5 min read</span>
      </div>

      <h3 className="heading-5 mb-3">
        The Future of Web Development: Trends to Watch in 2025
      </h3>

      <p className="B-2 mb-6">
        Explore the latest web development trends including serverless architecture, AI integration, and progressive web apps that are shaping the future of digital experiences.
      </p>

      <a
        href="#"
        className="read-more B-2  inline-flex items-center gap-2 mt-3"
      >
        Read More <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  </article>

  {/* Blog Post 2 */}
  <article className="blog-card bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
    <div className="blog-card-img">
      <img
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Cybersecurity"
        className="w-full h-56 object-cover"
      />
    </div>

    <div className="blog-card-content p-6 flex flex-col flex-1">
      <div className="blog-meta flex flex-wrap gap-4 text-sm mb-4">
        <span className="blog-category font-medium">
          Cybersecurity
        </span>
        <span><i className="far fa-calendar"></i> June 10, 2025</span>
        <span><i className="far fa-clock"></i> 8 min read</span>
      </div>

      <h3 className="heading-5 mb-3">
        Essential Cybersecurity Practices for Remote Teams
      </h3>

      <p className="B-2 mb-6">
        With remote work becoming the norm, learn about the critical cybersecurity measures every distributed team should implement to protect sensitive data and systems.
      </p>

      <a
        href="#"
        className="read-more B-2 inline-flex items-center gap-2 mt-3"
      >
        Read More <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  </article>

  {/* Blog Post 3 */}
  <article className="blog-card bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
    <div className="blog-card-img">
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
        alt="Cloud Computing"
        className="w-full h-56 object-cover"
      />
    </div>

    <div className="blog-card-content p-6 flex flex-col flex-1">
      <div className="blog-meta flex flex-wrap gap-4 text-sm mb-4">
        <span className="blog-category font-medium">
          Cloud Computing
        </span>
        <span><i className="far fa-calendar"></i> June 5, 2025</span>
        <span><i className="far fa-clock"></i> 6 min read</span>
      </div>

      <h3 className="heading-5 mb-3">
        Optimizing Cloud Infrastructure for Cost Efficiency
      </h3>

      <p className="B-2 mb-6">
        Discover strategies for managing cloud resources effectively to reduce costs while maintaining performance and scalability for your business applications.
      </p>

      <a
        href="#"
        className="read-more B-2  inline-flex items-center gap-2 mt-3"
      >
        Read More <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  </article>

</section>

            {/* <!-- Sidebar --> */}
          <aside className="blog-sidebar w-full lg:w-1/3 space-y-8">

  {/* Search Widget */}
  <div className="sidebar-widget bg-white shadow-md rounded-lg p-6">
    <h3 className="heading-6 mb-4">Search</h3>

    <div className="search-box flex items-center border rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="Search articles..."
        className="flex-1 px-4 py-2 outline-none"
      />
      <button className="px-4 py-2">
        <i className="fas fa-search"></i>
      </button>
    </div>
  </div>

  {/* City Categories Widget */}
  <div className="sidebar-widget bg-white shadow-md rounded-lg p-6">
    <h3 className="heading-6 mb-4">City-Based Services</h3>

    <ul className="city-categories space-y-4" id="cityCategories">

      {/* City Item */}
      <li className="city-item border-b pb-3">
        <div className="city-header flex justify-between items-center cursor-pointer">
          <span className="city-name">Delhi NCR</span>
          <div className="flex items-center gap-2">
            <span className="city-count">15</span>
            <i className="fas fa-chevron-down dropdown-icon"></i>
          </div>
        </div>

        <div className="city-dropdown mt-3">
          <ul className="keyword-list space-y-2">
            {[
              ["Web Design", 5],
              ["Web Development", 8],
              ["Mobile Apps", 6],
              ["Digital Marketing", 7],
              ["SEO Services", 4],
            ].map(([name, count], i) => (
              <li key={i} className="keyword-item">
                <a href="#" className="flex justify-between">
                  <span>{name}</span>
                  <span className="keyword-count">{count}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* Mumbai */}
      <li className="city-item border-b pb-3">
        <div className="city-header flex justify-between items-center cursor-pointer">
          <span className="city-name">Mumbai</span>
          <div className="flex items-center gap-2">
            <span className="city-count">12</span>
            <i className="fas fa-chevron-down dropdown-icon"></i>
          </div>
        </div>

        <div className="city-dropdown mt-3">
          <ul className="keyword-list space-y-2">
            {[
              ["E-commerce Solutions", 6],
              ["UI/UX Design", 4],
              ["Cloud Services", 5],
              ["ERP Solutions", 3],
            ].map(([name, count], i) => (
              <li key={i} className="keyword-item">
                <a href="#" className="flex justify-between">
                  <span>{name}</span>
                  <span className="keyword-count">{count}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* Bangalore */}
      <li className="city-item border-b pb-3">
        <div className="city-header flex justify-between items-center cursor-pointer">
          <span className="city-name">Bangalore</span>
          <div className="flex items-center gap-2">
            <span className="city-count">10</span>
            <i className="fas fa-chevron-down dropdown-icon"></i>
          </div>
        </div>

        <div className="city-dropdown mt-3">
          <ul className="keyword-list space-y-2">
            {[
              ["AI/ML Solutions", 4],
              ["Software Testing", 3],
              ["DevOps", 5],
              ["Cyber Security", 3],
            ].map(([name, count], i) => (
              <li key={i} className="keyword-item">
                <a href="#" className="flex justify-between">
                  <span>{name}</span>
                  <span className="keyword-count">{count}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* Hyderabad */}
      <li className="city-item border-b pb-3">
        <div className="city-header flex justify-between items-center cursor-pointer">
          <span className="city-name">Hyderabad</span>
          <div className="flex items-center gap-2">
            <span className="city-count">8</span>
            <i className="fas fa-chevron-down dropdown-icon"></i>
          </div>
        </div>

        <div className="city-dropdown mt-3">
          <ul className="keyword-list space-y-2">
            {[
              ["Web Applications", 4],
              ["Mobile Development", 3],
              ["Database Management", 2],
            ].map(([name, count], i) => (
              <li key={i} className="keyword-item">
                <a href="#" className="flex justify-between">
                  <span>{name}</span>
                  <span className="keyword-count">{count}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* Chennai */}
      <li className="city-item">
        <div className="city-header flex justify-between items-center cursor-pointer">
          <span className="city-name">Chennai</span>
          <div className="flex items-center gap-2">
            <span className="city-count">7</span>
            <i className="fas fa-chevron-down dropdown-icon"></i>
          </div>
        </div>

        <div className="city-dropdown mt-3">
          <ul className="keyword-list space-y-2">
            {[
              ["IT Consulting", 3],
              ["Software Maintenance", 2],
              ["Technical Support", 2],
            ].map(([name, count], i) => (
              <li key={i} className="keyword-item">
                <a href="#" className="flex justify-between">
                  <span>{name}</span>
                  <span className="keyword-count">{count}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </ul>
  </div>

  {/* Recent Posts Widget */}
  <div className="sidebar-widget bg-white shadow-md rounded-lg p-6">
    <h3 className="heading-6 mb-4">Recent Posts</h3>

    <ul className="recent-posts space-y-4">
      {[
        [
          "Mobile App Development Best Practices",
          "May 28, 2025",
          "https://images.unsplash.com/photo-1552664730-d307ca884978",
        ],
        [
          "The Rise of Low-Code Platforms",
          "May 20, 2025",
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
        ],
        [
          "Implementing DevOps in Your Organization",
          "May 15, 2025",
          "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0",
        ],
      ].map(([title, date, img], i) => (
        <li key={i} className="recent-post-item flex gap-4">
          <div className="recent-post-img w-20 h-16 flex-shrink-0">
            <img
              src={img}
              alt="Recent Post"
              className="w-full h-full object-cover rounded"
            />
          </div>

          <div className="recent-post-content">
            <h4>
              <a href="#" className="hover:underline">
                {title}
              </a>
            </h4>
            <span className="text-sm">{date}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>

</aside>

        </div>

        {/* <!-- Pagination --> */}
        <div class="pagination">
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#"><i class="fas fa-chevron-right"></i></a>
        </div>
    </div>
    <FooterTop/>
    <Footer/>
    </div>
  )
}

export default page
