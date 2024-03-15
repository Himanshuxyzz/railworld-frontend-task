import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className="embla__slide_wrap">
            <img
              className="embla__slide_img"
              src="/page-1-section-1-carousel-1.jpeg"
              alt=""
            />
          </div>
          <div className="embla__slide_wrap">
            <h3>Chai Infusion Dessert: Cardamom Chai Panna Cotta</h3>
            <p>
              Experience the sweet finale of your meal with our Chai Infusion
              Dessert - Cardamom Chai Panna Cotta. This delectable creation
              melds the velvety smoothness of Italian panna cotta with the
              aromatic allure of Indian chai.
            </p>
            <Link>Find out more </Link>
          </div>
        </div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
        <div className="embla__slide">Slide 4</div>
        <div className="embla__slide">Slide 5</div>
        <div className="embla__slide">Slide 6</div>
      </div>
    </div>
  );
}
