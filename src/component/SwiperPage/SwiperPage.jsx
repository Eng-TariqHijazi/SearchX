import React, { useState ,useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./SwiperPage.css";
export default function SwiperPage() {
  const render = (item, isSelected) => {
    return <div className="slide">{item}</div>;
  };
  useEffect(()=>{})
  return (
    <section className="swiper-page" id="swiperPage">
      <div className="container">
        <div className="swiper-content">
          <div className="title">
            <b>Our</b> <b>X</b> Services
          </div>
          <strong>X</strong>
          <div>
            <Carousel
              renderItem={render}
              showThumbs={false}
              showArrows={false}
              autoPlay={false}
              emulateTouch={true}
              centerMode={true}
              centerSlidePercentage={window.innerWidth>920?33.3:100}
              showStatus={false}
              showIndicators={true}
              selectedItem={0}
            >
              <div>
                <img src={require("../../assets/2.png")} />
                <b>Executive Search</b>
              </div>

              <div>
                <img src={require("../../assets/3.png")} />
                <b>Board Services</b>
              </div>

              <div>
                <img src={require("../../assets/4.png")} />
                <b>Leadership Services</b>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

{
}
