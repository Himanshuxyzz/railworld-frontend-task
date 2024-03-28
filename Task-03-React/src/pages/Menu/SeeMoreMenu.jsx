import React, { useEffect, useState, useRef } from "react";
import NavBar from "../../components/Header";
import MenuBanner from "../../components/MenuBanner";
import { MenuData } from "../../constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SeeMoreMenu = () => {
  const [selected, setSelected] = useState(null);
  const [bannerImg, setBannerImg] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(0);
  const filterSelected = (data) => {
    setSelected(data.title);
    setBannerImg(data.bannerCoverSrc);
  };
  useEffect(() => {
    // Set the selected title to the title of the first button when the component mounts
    setSelected(MenuData[2]["see-more-page-menu-data"][0].title);
    setBannerImg(MenuData[2]["see-more-page-menu-data"][0].bannerCoverSrc);
  }, []); // Empty dependency array to run this effect only once on mount

  return (
    <div className="see-more-page">
      <NavBar variant />
      <MenuBanner src={bannerImg} />

      <div className="see-more-menu-slider">
        <FaArrowLeft className="icon-left" />

        <ul className="tabs">
          {MenuData[2]["see-more-page-menu-data"].map((data) => {
            return (
              <li key={data.id}>
                <button
                  onClick={() => filterSelected(data)}
                  className={`tab ${selected === data.title ? "active" : ""}`}
                >
                  {data.title}
                </button>
              </li>
            );
          })}
        </ul>
        <FaArrowRight className="icon-right" />
      </div>

      <section className="page-2-section-2-see-more">
        <div className="see-more-container">
          <div className="see-more-container-item">
            <div className="item-name-type">
              <div className="item-name">BURGERS</div>
              <div className="item-type">
                <div className="marker veg"></div>
              </div>
              /
              <div className="item-type">
                <div className="marker non-veg"></div>
              </div>
            </div>
            <div className="menu-item-wrapper">
              <div className="item">
                <div className="item-row">
                  <div className="item-content">
                    <p>Tandoori Chicken Tikka Burger</p>
                    <div className="item-type">
                      <div className="marker non-veg"></div>
                    </div>
                    <div className="item-row-counter">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                  <p>210/-</p>
                </div>
                <div className="item-row">
                  <button className="item-btn">ADD +</button>
                  <img
                    src="../../public/images/see-more-menu-item-1.png"
                    alt=""
                  />
                  <i className="fa-regular fa-heart"></i>

                  <div className="item-counter">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeeMoreMenu;
