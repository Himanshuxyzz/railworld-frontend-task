import React from "react";
import NavBar from "../../components/Header";
import Carousel from "../../components/Carousel";
import { Link } from "react-router-dom";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Blog = () => {
  return (
    <>
      <NavBar />
      <div className="blog-page">
        <BlogHeroSection imgSrc={"/images/page-blog-hero-bg.jpeg"} />
        {/* section 1 */}
        <section className="latest-blog-carousel-section">
          <Carousel settings={settings}>
            <div className="latest-blog-carousel-item">
              <div>
                <img src="" alt="" />
                <div>
                  <p>Sip, Savor, Socialize: The Three S's of Café Sunset.</p>
                  <Link> Found out More.</Link>
                </div>
              </div>
            </div>
          </Carousel>
        </section>
      </div>
    </>
  );
};

const BlogHeroSection = ({ imgSrc }) => {
  return (
    <div className="blog-hero-section">
      <div className="blog-hero-bg-overlay">
        <div>
          <h2>SUNSET</h2>
        </div>
        <div>
          <h2>OUR VISION</h2>
          <p>
            To create a haven where every cup is a canvas, painting moments of
            serenity and connection against the backdrop of a setting sun.
          </p>
        </div>
      </div>
      <img src={imgSrc} alt="hero-bg" />
    </div>
  );
};

export default Blog;
