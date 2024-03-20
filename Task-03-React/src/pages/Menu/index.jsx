import React from "react";
import NavBar from "../../components/Header";

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
          <div className="page-2-section-1-container-col">
            <div className="col-cover-img">
              <img src="/images/page-2-section-1-menu-cover-1.jpeg" alt="" />
              <h3 className="col-cover-img-title">HOT BEVERAGES</h3>
            </div>
            <div className="col-menu-name">HOT BEVERAGES</div>
            <div className="col-menu-items">
              <div className="menu-item">
                <div className="item-col">
                  <p>Espresso</p>
                  <div className="menu-add-item-btn">
                    <i className="fa-solid fa-circle-plus add-item-btn"></i>
                  </div>
                </div>
                <div className="item-col">
                  <p>A single shot of concentrated coffee</p>
                  <span>Rs.120</span>
                </div>

                <div className="item-col-small">
                  <div className="item-col-small-content">
                    <p>Espresso</p>
                    <p>A single shot of concentrated coffee</p>
                    <span>Rs.120</span>
                  </div>

                  <div className="item-col-small-cover">
                    <i className="fa-regular fa-heart"></i>
                    <img
                      src="/images/page-2-section-1-small-cover-1.jpeg"
                      alt=""
                    />
                    <div className="item-col-small-counter">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-col">
                  <p>Cappuccino</p>
                  <div className="menu-add-item-btn">
                    <i className="fa-solid fa-circle-plus add-item-btn"></i>
                  </div>
                </div>
                <div className="item-col">
                  <p>Equal parts espresso steamed milk, and foam</p>
                  <span>Rs.250</span>
                </div>

                <div className="item-col-small">
                  <div className="item-col-small-content">
                    <p>Cappuccino</p>
                    <p>Equal parts espresso steamed milk, and foam</p>
                    <span>Rs.250</span>
                  </div>
                  <div className="item-col-small-cover">
                    <i className="fa-regular fa-heart"></i>
                    <img
                      src="/images/page-2-section-1-small-cover-2.jpeg"
                      alt=""
                    />
                    <div className="item-col-small-counter">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-col">
                  <p>Americano</p>
                  <div className="menu-add-item-btn">
                    <i className="fa-solid fa-circle-plus add-item-btn"></i>
                  </div>
                </div>
                <div className="item-col">
                  <p>Espresso shots with hot water</p>
                  <span>Rs.158</span>
                </div>

                <div className="item-col-small">
                  <div className="item-col-small-content">
                    <p>Americano</p>
                    <p>Espresso shots with hot water</p>
                    <span>Rs.158</span>
                  </div>

                  <div className="item-col-small-cover">
                    <i className="fa-regular fa-heart"></i>
                    <img
                      src="/images/page-2-section-1-small-cover-3.jpeg"
                      alt=""
                    />
                    <div className="item-col-small-counter">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="page-2-section-1-container-col">
            <div className="col-cover-img">
              <img src="/images/page-2-section-menu-cover-2.jpeg" alt="" />
              <h3 className="col-cover-img-title">COLD BEVERAGES</h3>
            </div>
            <div className="col-menu-name">COLD BEVERAGES</div>
            <div className="col-menu-items">
              <div className="menu-item">
                <div className="item-col">
                  <p>Iced Coffee</p>
                  <div className="menu-add-item-btn">
                    <i className="fa-solid fa-circle-plus add-item-btn"></i>
                  </div>
                </div>
                <div className="item-col">
                  <p>A single shot of concentrated coffee</p>
                  <span>Rs.140</span>
                </div>

                <div className="item-col-small">
                  <div className="item-col-small-content">
                    <p>Iced Coffee</p>
                    <p>A single shot of concentrated coffee</p>
                    <span>Rs.140</span>
                  </div>

                  <div className="item-col-small-cover">
                    <i className="fa-regular fa-heart"></i>
                    <img
                      src="/images/page-2-section-1-small-cover-4.jpeg"
                      alt=""
                    />
                    <div className="item-col-small-counter">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-col">
                  <p>Iced Latte</p>
                  <div className="menu-add-item-btn">
                    <i className="fa-solid fa-circle-plus add-item-btn"></i>
                  </div>
                </div>
                <div className="item-col">
                  <p>A single shot of concentrated coffee</p>
                  <span>Rs.130</span>
                </div>

                <div className="item-col-small">
                  <div className="item-col-small-content">
                    <p>Iced Latte</p>
                    <p>A single shot of concentrated coffee</p>
                    <span>Rs.130</span>
                  </div>

                  <div className="item-col-small-cover">
                    <i className="fa-regular fa-heart"></i>
                    <img
                      src="/images/page-2-section-1-small-cover-5.jpeg"
                      alt=""
                    />
                    <div className="item-col-small-counter">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-col">
                  <p>Frappuccino</p>
                  <div className="menu-add-item-btn">
                    <i className="fa-solid fa-circle-plus add-item-btn"></i>
                  </div>
                </div>
                <div className="item-col">
                  <p>A single shot of concentrated coffee</p>
                  <span>Rs.120</span>
                </div>

                <div className="item-col-small">
                  <div className="item-col-small-content">
                    <p>Frappuccino</p>
                    <p>A single shot of concentrated coffee</p>
                    <span>Rs.120</span>
                  </div>

                  <div className="item-col-small-cover">
                    <i className="fa-regular fa-heart"></i>
                    <img
                      src="/images/page-2-section-1-small-cover-6.jpeg"
                      alt=""
                    />
                    <div className="item-col-small-counter">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-col">
                  <p>Affogato</p>
                  <div className="menu-add-item-btn">
                    <i className="fa-solid fa-circle-plus add-item-btn"></i>
                  </div>
                </div>
                <div className="item-col">
                  <p>A single shot of concentrated coffee</p>
                  <span>Rs.110</span>
                </div>

                <div className="item-col-small">
                  <div className="item-col-small-content">
                    <p>Affogato</p>
                    <p>A single shot of concentrated coffee</p>
                    <span>Rs.110</span>
                  </div>

                  <div className="item-col-small-cover">
                    <i className="fa-regular fa-heart"></i>
                    <img
                      src="/images/page-2-section-1-small-cover-7.jpeg"
                      alt=""
                    />
                    <div className="item-col-small-counter">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-col">
                  <p>Ice Latte</p>
                  <div className="menu-add-item-btn">
                    <i className="fa-solid fa-circle-plus add-item-btn"></i>
                  </div>
                </div>
                <div className="item-col">
                  <p>A single shot of concentrated coffee</p>
                  <span>Rs.160</span>
                </div>

                <div className="item-col-small">
                  <div className="item-col-small-content">
                    <p>Ice Latte</p>
                    <p>A single shot of concentrated coffee</p>
                    <span>Rs.160</span>
                  </div>

                  <div className="item-col-small-cover">
                    <i className="fa-regular fa-heart"></i>
                    <img
                      src="/images/page-2-section-1-small-cover-8.jpeg"
                      alt=""
                    />
                    <div className="item-col-small-counter">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="page-2-section-1-container-col">
            <div className="col-cover-img">
              <img src="/images/page-2-section-menu-cover-3.jpeg" alt="" />
              <h3 className="col-cover-img-title">SPECIALTY DRINKS</h3>
            </div>
            <div className="col-menu-name">SPECIALTY DRINKS</div>
            <div className="col-menu-items">
              <div className="menu-item">
                <div className="item-col">
                  <p>Matcha Latte</p>
                  <div className="menu-add-item-btn">
                    <i className="fa-solid fa-circle-plus add-item-btn"></i>
                  </div>
                </div>
                <div className="item-col">
                  <p>A single shot of concentrated coffee</p>
                  <span>Rs.148</span>
                </div>

                <div className="item-col-small">
                  <div className="item-col-small-content">
                    <p>Matcha Latte</p>
                    <p>A single shot of concentrated coffee</p>
                    <span>Rs.148</span>
                  </div>

                  <div className="item-col-small-cover">
                    <i className="fa-regular fa-heart"></i>
                    <img
                      src="/images/page-2-section-1-small-cover-9.jpeg"
                      alt=""
                    />
                    <div className="item-col-small-counter">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-col">
                  <p>Turmeric Latte</p>
                  <div className="menu-add-item-btn">
                    <i className="fa-solid fa-circle-plus add-item-btn"></i>
                  </div>
                </div>
                <div className="item-col">
                  <p>A single shot of concentrated coffee</p>
                  <span>Rs.160</span>
                </div>

                <div className="item-col-small">
                  <div className="item-col-small-content">
                    <p>Turmeric Latte</p>
                    <p>A single shot of concentrated coffee</p>
                    <span>Rs.160</span>
                  </div>

                  <div className="item-col-small-cover">
                    <i className="fa-regular fa-heart"></i>
                    <img
                      src="/images/page-2-section-1-small-cover-10.jpeg"
                      alt=""
                    />
                    <div className="item-col-small-counter">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-col">
                  <p>Caramel Tea</p>
                  <div className="menu-add-item-btn">
                    <i className="fa-solid fa-circle-plus add-item-btn"></i>
                  </div>
                </div>
                <div className="item-col">
                  <p>A single shot of concentrated coffee</p>
                  <span>Rs.160</span>
                </div>

                <div className="item-col-small">
                  <div className="item-col-small-content">
                    <p>Caramel Tea</p>
                    <p>A single shot of concentrated coffee</p>
                    <span>Rs.160</span>
                  </div>

                  <div className="item-col-small-cover">
                    <i className="fa-regular fa-heart"></i>
                    <img
                      src="/images/page-2-section-1-small-cover-11.jpeg"
                      alt=""
                    />
                    <div className="item-col-small-counter">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-col">
                  <p>Green Tea</p>
                  <div className="menu-add-item-btn">
                    <i className="fa-solid fa-circle-plus add-item-btn"></i>
                  </div>
                </div>
                <div className="item-col">
                  <p>A single shot of concentrated coffee</p>
                  <span>Rs.120</span>
                </div>

                <div className="item-col-small">
                  <div className="item-col-small-content">
                    <p>Green Tea</p>
                    <p>A single shot of concentrated coffee</p>
                    <span>Rs.120</span>
                  </div>

                  <div className="item-col-small-cover">
                    <i className="fa-regular fa-heart"></i>
                    <img
                      src="/images/page-2-section-1-small-cover-12.png"
                      alt=""
                    />
                    <div className="item-col-small-counter">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-item">
                <div className="item-col">
                  <p>Herbal Infusions</p>
                  <div className="menu-add-item-btn">
                    <i className="fa-solid fa-circle-plus add-item-btn"></i>
                  </div>
                </div>
                <div className="item-col">
                  <p>A single shot of concentrated coffee</p>
                  <span>Rs.120</span>
                </div>

                <div className="item-col-small">
                  <div className="item-col-small-content">
                    <p>Herbal Infusions</p>
                    <p>A single shot of concentrated coffee</p>
                    <span>Rs.120</span>
                  </div>

                  <div className="item-col-small-cover">
                    <i className="fa-regular fa-heart"></i>
                    <img
                      src="/images/page-2-section-1-small-cover-13.jpeg"
                      alt=""
                    />
                    <div className="item-col-small-counter">
                      <button>-</button>
                      <span>1</span>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

        <a className="explore-more-link" href="../Menu/explore-more-menu.html">
          Explore More
        </a>
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
