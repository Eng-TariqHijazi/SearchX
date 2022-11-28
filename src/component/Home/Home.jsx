import React from "react";
import "./Home.css";
export default function Home() {

  return (
    <section className="home-section" id="home">
    {/* {let am =document.getElementById("home").onmouseup()} */}
      <div className="container">
        <div className="home-content">
          <h1 className="title">
            Search<b>X</b> marks your Executive Talent
          </h1>
          <p className="home-desc">
            We help you identify your culturally fit, business savvy,
            exceptional senior talent
          </p>
        </div>
      </div>
    </section>
  );
}
