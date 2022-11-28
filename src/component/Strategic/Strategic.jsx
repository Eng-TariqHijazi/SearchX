import React from "react";
import './Strategic.css'
function Strategic() {
  const Cards = (props) => {
    return (
      <div className="cards">
        <img src={props.img} />
      </div>
    );
  };
  return (
    <section className="Strategic-section" id="strategic">
      <div className="container">
        <div className="Strategic-content">
          <div className="title">
            <b>Strategic</b>
            <p>Allies</p>
          </div>
          <div className="lorem">Lorem ipsum is placeholder text commonly used in the graphic</div>
          <div className="cards-container">
          <Cards img={require('../../assets/Morocco_0 1.png')}/>
          <Cards img={require('../../assets/thomas.png')}/>
          <Cards img={require('../../assets/zen.png')}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Strategic;
