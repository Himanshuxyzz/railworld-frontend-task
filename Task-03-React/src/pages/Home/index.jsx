import React from "react";
import { NavBar } from "../../components/Header";
import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Carousel from "../../components/Carousel";

const CarouselData = [
  {
    "section-1-carousel": [
      {
        imgSrc: "/images/page-1-section-1-carousel-1.jpeg",
        heading: "Chai Infusion Dessert: Cardamom Chai Panna Cotta",
        desc: "Experience the sweet finale of your meal with our Chai Infusion Dessert - Cardamom Chai Panna Cotta. This delectable creation melds the velvety smoothness of Italian panna cotta with the aromatic allure of Indian chai.",
      },
      {
        imgSrc: "/images/page-1-section-1-carousel-2.jpeg",
        heading: "Sizzling Tandoori Platter: A Feast for the Senses",
        desc: "Transport your taste buds to the streets of India with our Sizzling Tandoori Platter. Succulent morsels of marinated chicken, paneer, and lamb are grilled to perfection in our traditional tandoor, imparting a smoky flavor and tender texture. Served with a side of mint chutney",
      },
      {
        imgSrc: "/images/page-1-section-1-carousel-3.jpeg",
        heading: "Mango Curry Chicken",
        desc: "Indulge in the rich flavors of our Seasonal Spice Delight - Mango Curry Chicken. A symphony of succulent chicken pieces bathed in a luscious curry infused with the sweetness of ripe mangoes.",
      },
    ],
  },
  {
    "section-3-carousel": [
      {
        flat_discount: "75",
        on_order_above: "399",
        coupon_code: "FGU87",
        imgSrc: "/images/page-1-section-3-carousel-1.png",
      },
      {
        flat_discount: "100",
        on_order_above: "599",
        coupon_code: "RTH23",
        imgSrc: "/images/page-1-section-3-carousel-2.png",
      },
    ],
  },
];

// CarouselData[0]["section-1-carousel"].map((data) => {
//   console.log(data);
// });

CarouselData[1]["section-3-carousel"].map((data) => {
  console.log(data);
});

const Home = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      {/* section - 1 */}
      <section className="page-1-section-1">
        <div className="bg-overlay"></div>
        <NavBar />
        <div className="page-1-section-1-container">
          <div className="page-1-section-1-container-col">
            <h2 className="page-1-section-1-heading">Welcome</h2>
            <div className="page-1-section-1-content-wrapper">
              <p>
                Discover Culinary Elegance at Café Sunset: Where Every Sip and
                Bite Unveils a Symphony of Flavors and Moments.
              </p>
            </div>

            <div className="extra-container-margin-left">
              <h2 className="page-1-section-1-heading">
                Gateway to Serenity, Culinary Delights,
              </h2>
              <div className="page-1-section-1-content-wrapper width-normal">
                <p>
                  Step into a World Where Ambiance, Flavor, and Warmth
                  Converge—A Haven Where Every Visit Feels Like Coming Home.
                </p>
              </div>

              <button className="cta-btn-md">Order Now</button>
            </div>
          </div>

          <div className="page-1-section-1-container-col margin-t-sm">
            <h2>we are known for :-</h2>
            <Carousel settings={settings}>
              {CarouselData[0]["section-1-carousel"].map((data, index) => {
                return (
                  <div
                    key={Math.floor(Math.random() * index + index * Math.SQRT2)}
                    className="section-1-carousel-card"
                  >
                    <div>
                      <img src={data.imgSrc} alt={`image - ${index}`} />
                    </div>
                    <div>
                      <h3>{data.heading}</h3>
                      <p>{data.desc}</p>
                      <Link>
                        Find out more <MdOutlineArrowRightAlt />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>
      {/* section - 1 end */}

      {/* section 2  */}
      <section className="page-1-section-2">
        <h2>ABOUT US</h2>
        <h1>The story behind sunset ...</h1>
        <div className="page-1-section-2-container">
          <div className="page-1-section-2-col">
            <p className="page-1-section-2-text-wrapper">
              Welcome to Sunset Café, where our journey began with Chef André's
              bold decision to depart from the world of haute cuisine and create
              a culinary sanctuary rooted in simplicity and heartfelt
              connection.
            </p>

            <p className="page-1-section-2-text-wrapper">
              Inspired by a chance encounter with a charming café bathed in the
              warm glow of twilight, Chef André envisioned a place where genuine
              hospitality and exceptional flavors intertwine. At Sunset Café,
              each dish is a reflection of Chef André's dedication to crafting
              culinary experiences that nourish both body and soul.
            </p>
          </div>
          <div className="page-1-section-2-col">
            <img
              className="page-1-section-2-bg"
              src="/page-1-section-2-bg.jpg"
              alt=""
            />
          </div>
        </div>
        <button className="cta-btn-md read-more-style">READ MORE</button>
      </section>
      {/* section 2 end */}
      {/* <!-- section - 3 --> */}

      <section className="page-1-section-3">
        <h2 className="page-1-section-3-heading">DEALS AND OFFERS</h2>
        <Carousel>
          {CarouselData[1]["section-3-carousel"].map((data, index) => {
            // console.log(data);
            return (
              <div
                className="section-3-carousel-card"
                key={Math.floor(Math.random() * index + index * Math.SQRT2)}
              >
                <div className="section-3-carousel-card-wrap">
                  <div></div>
                  <div></div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </section>
      {/* <!-- section - 3 end --> */}
      {/* <!-- section 4  --> */}
      <section className="page-1-section-4">
        <div className="page-1-section-4-container">
          <div className="page-1-section-4-col">
            <img src="/images/page-1-section-4-bg.jpg" alt="" />
          </div>
          <div className="page-1-section-4-col">
            <h2 className="theme-title-text">Reservation</h2>
            <h2 className="text-white">BOOK Reservation A TABLE ONLINE</h2>
            <div className="reservation-wrapper">
              <div className="reservation-wrapper-inputs">
                <div className="reservation-wrapper-input">
                  <input placeholder="Your Name" type="text" />
                </div>
                <div className="reservation-wrapper-input">
                  <input placeholder="Your Email" type="email" />
                </div>
              </div>

              <div className="reservation-wrapper-inputs">
                <div className="reservation-wrapper-input">
                  <input placeholder="Date & Time" type="datetime" />
                </div>
                <div className="reservation-wrapper-input">
                  <input placeholder="No. of people" type="number" />
                </div>
              </div>

              <div className="reservation-wrapper-inputs">
                <div className="reservation-wrapper-input">
                  <textarea
                    placeholder="Special request"
                    className="reservation-wrapper-input"
                    name="special-request"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>

              <div className="reservation-wrapper-inputs">
                <div className="reservation-wrapper-input">
                  <button className="reservation-input-btn">READ MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- section 4 end  --> */}

      {/* <!-- section 5  --> */}
      <section className="page-1-section-5"></section>

      {/* <!-- section 5 end  --> */}

      {/* <!-- section 6  --> */}
      <section className="page-1-section-6">
        <div className="newsletter-wrapper">
          <h2>Subscribe To Newsletter</h2>
          <h2>and Get -20% off</h2>
          <p>
            Your Gateway to Serenity, Culinary Delights, and Unforgettable
            Moments.
          </p>
          <div className="email-wrapper">
            <input placeholder="Enter email address" type="text" />
            <button>SUSBSCRIBE</button>
          </div>
        </div>
      </section>
      {/* <!-- section 6 end --> */}
    </>
  );
};

export default Home;
