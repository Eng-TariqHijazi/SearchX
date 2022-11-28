import React from "react";
import "./Footer.css";
function Footer() {
  const handleClickNavBar = (nameId) => {
    document.querySelectorAll(".header-content .nav a").forEach((e) => {
      e.className = "";
    });
    console.log(nameId);
    document.querySelector(nameId).className = "active";
    if (window.innerWidth < 920) {
    }
  };
  const Parts = (props) => {
    return (
      <div className="parts">
        <b>{props.title}</b>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
      </div>
    );
  };
  return (
    <footer>
      <div className="container" id="footer">
        <div className="footer-content">
          <div className="list">
            <Parts
              title={"Company"}
              text1={"Our Story"}
              text2={"Industries"}
              text3={"Contact us"}
            />
            <Parts
              title={"Services"}
              text1={"Executive Search"}
              text2={"Board Services"}
              text3={"Leadership Services"}
            />
            <Parts
              title={"Research Center"}
              text1={"Reports"}
              text2={"Articles"}
            />
            <Parts
              title={"Strategic Allies"}
              text1={"Zenithr"}
              text2={"Thomas"}
              text3={"Best Places to Work"}
            />
          </div>
          <strong>X</strong>
          <div className="logo">
            <a href="#" onClick={() => handleClickNavBar("#homeA")}>
              <img src={require("../../assets/image-removebg-preview.png")} />
            </a>
            <p>© SearchX Management Consulting Co.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
