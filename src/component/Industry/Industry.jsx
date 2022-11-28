import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Industry.css";
function Industry() {
  return (
    <section className="industry_section">
      <div className="title-head">
        <div className="title">
          <b>Our </b> Industries
        </div>
      </div>
      <div className="sliderSec">
        <Carousel
        //   renderItem={render}
          showThumbs={false}
          showArrows={true}
        //   autoPlay={true}
          emulateTouch={false}
          centerMode={true}
          centerSlidePercentage={60}
          showStatus={false}
          showIndicators={false}
          selectedItem={1}
        >
          <div>
            <img src={require("../../assets/7.png")} />
          </div>
          <div>
            <img src={require("../../assets/5.png")} />
          </div>
          <div>
            <img src={require("../../assets/5.png")} />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Industry;
