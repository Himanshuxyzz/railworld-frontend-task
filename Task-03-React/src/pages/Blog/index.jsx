import React from "react";
import NavBar from "../../components/Header";

const Blog = () => {
  return (
    <>
      <NavBar />
      <div className="blog-page">
        <div className="blog-hero-section">
          <div className="blog-hero-bg-overlay">
            <div>
              <h2>SUNSET</h2>
            </div>
            <div>
              <h2>OUR VISION</h2>
              <p>
                To create a haven where every cup is a canvas, painting moments
                of serenity and connection against the backdrop of a setting
                sun.
              </p>
            </div>
          </div>
          <img src="/images/page-blog-hero-bg.jpeg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Blog;
