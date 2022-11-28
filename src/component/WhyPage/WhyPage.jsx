import React from "react";
import { Feather } from "react-web-vector-icons/fonts";
import Icon, { FontAwesome, Foundation } from "react-web-vector-icons";
import "./WhyPage.css";

function WhyPage() {
  const services = (icon, text) => {
    return (
      <div className="services">
        <Icon
          name={icon}
          font="FontAwesome"
          color="#FFF"
          size={30}

          style={{width:'70px'}}
        />
        <p>{text}</p>
      </div>
    );
  };
  return (
    <section className="why-section" id="whyPage">
      <div className="container">
        <div className="Why-content">
          <img src={require("../../assets/1.png")} />
          <div className="content-text">
            <div className="title">
              <b>Why</b> SearchX ?
            </div>
            <div className="line"></div>
            <div className="para">
              We offer a selection of services to guide you to transform your
              business into a successful investment.
            </div>
            {services("group",'Dedicated teams')}
            {services("globe","Global know-how")}
            {services("lightbulb-o","Focus on innovation")}
            {services("handshake-o","True partners")}
            {services("lightbulb-o","Creative and innovative solutions")}
            {services("lightbulb-o","Focus on innovation")}
            {services("handshake-o","True partners")}
            {services("lightbulb-o","Creative and innovative solutions")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyPage;
