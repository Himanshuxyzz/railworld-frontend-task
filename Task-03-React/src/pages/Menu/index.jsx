import React from "react";
import NavBar from "../../components/Header";
import { Link } from "react-router-dom";
import { formatInInr } from "../../utils/utils";
import { MenuData } from "../../constants";

const MenuItems = ({ categoryTitle, imgSrc, menuItems, index }) => {
  return (
    <div className="page-2-section-1-container-col" key={categoryTitle + index}>
      <div className="col-cover-img">
        <img src={imgSrc} alt={`image - ${index}`} />
        <h3 className="col-cover-img-title">{categoryTitle}</h3>
      </div>
      <div className="col-menu-name">{categoryTitle}</div>
      <div className="col-menu-items">
        {menuItems.map((data) => {
          return (
            <div className="menu-item" key={data.item}>
              <div className="item-col">
                <p>{data.item}</p>
                <div className="menu-add-item-btn">
                  <i className="fa-solid fa-circle-plus add-item-btn"></i>
                </div>
              </div>
              <div className="item-col">
                <p>{data.desc}</p>
                <span>{formatInInr(data.price)}</span>
              </div>

              <div className="item-col-small">
                <div className="item-col-small-content">
                  <p>{data.item}</p>
                  <p>{data.desc}</p>
                  <span>{formatInInr(data.price)}</span>
                </div>

                <div className="item-col-small-cover">
                  <i className="fa-regular fa-heart"></i>
                  <img src={data.itemImgSrc} alt="" />
                  <div className="item-col-small-counter">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <>
      <NavBar variant customStyle={"style-2"} />

      <section className="page-2-section-1">
        <div className="hero-cafe-logo">
          <img src="/images/page-2-section-1-hero-bg.png" alt="" />
        </div>

        <div className="menu-filter">
          <div className="filter-option">Recommended</div>

          <div className="filter-option">
            <i className="fa-regular fa-heart"></i> Favourites
          </div>
        </div>

        <div className="page-2-section-1-container">
          {MenuData[0]["menuHomepage"].map((data, index) => {
            return (
              <MenuItems
                categoryTitle={data.category}
                imgSrc={data.imgSrc}
                menuItems={data.menuItems}
                index={index}
                key={data.menuItems}
              />
            );
          })}
        </div>
      </section>

      <section className="page-2-section-2">
        <div className="page-2-section-title">
          <div className="title-wrapper">
            <h3>OTHER CATEGORIES</h3>
          </div>
        </div>

        <div className="page-2-section-2-categories-wrapper">
          <div className="category-card">
            <div className="category-card-img-wrapper">
              <img src="/images/page-2-section-3-card-1.png" alt="" />
            </div>
            <h3>BURGER & SANDWICHES</h3>
          </div>
          <div className="category-card">
            <div className="category-card-img-wrapper">
              <img src="/images/page-2-section-3-card-2.png" alt="" />
            </div>
            <h3>SALADS</h3>
          </div>
          <div className="category-card">
            <div className="category-card-img-wrapper">
              <img src="/images/page-2-section-3-card-3.png" alt="" />
            </div>
            <h3>DESSERTS / ICE-CREAM</h3>
          </div>
          <div className="category-card">
            <div className="category-card-img-wrapper">
              <img src="/images/page-2-section-3-card-4.png" alt="" />
            </div>
            <h3>VALUE COMBO</h3>
          </div>
        </div>

        {/* <a className="explore-more-link" href="../Menu/explore-more-menu.html">
          Explore More
        </a> */}
        <Link className="explore-more-link" to={"/menu/abc"}>
          Explore More
        </Link>
      </section>

      <section className="page-2-section-3">
        <div className="page-2-section-title">
          <div className="title-wrapper">
            <h3 className="with-icon">
              BEST OFFERS <i className="fa-solid fa-gift"></i>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
