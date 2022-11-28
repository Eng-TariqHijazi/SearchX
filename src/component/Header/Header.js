import React, { useEffect } from "react";
import "./Header.css";
function Header() {
  const handleClickNavBar = (nameId) => {
    document.querySelectorAll(".header-content .nav a").forEach((e) => {
      e.className = "";
    });
    console.log(nameId);
    document.querySelector(nameId).className = "active";
    if(window.innerWidth< 920){
      noneNav();
    }
  };
  window.onscroll = function () {
    myFunction();
    
  };
  function myFunction() {
    document.documentElement.scrollTop > 60
      ? (document.querySelector("header").style.backgroundColor = "#004232")
      : (document.querySelector("header").style.backgroundColor = "#00000000");
    
  }
  const blockNav = ()=>{
    document.querySelector('.nav').style = 'display:block;'
  }
  const noneNav = ()=>{
    document.querySelector('.nav').style = 'display:none;'
  }
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#" onClick={() => handleClickNavBar("#homeA")}>
              <img src={require("../../assets/image-removebg-preview.png")} />
            </a>
          </div>
          {/* <input type="checkbox" id="toggler"> */}
          <label for="toggler" onClick={blockNav}><i class="fa-solid fa-bars"></i></label>
          <div className="menu">
          <ul className="nav">
          <label for="toggler" onClick={noneNav}><i class="fa-solid fa-xmark"></i></label>
            <li>
              <a
                id="homeA"
                href="#home"
                className="active"
                onClick={() => handleClickNavBar("#homeA")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                id="About"
                href="#whyPage"
                onClick={() => handleClickNavBar("#About")}
              >
                About
              </a>
            </li>
            <li>
              <a
                id="Services"
                href="#swiperPage"
                onClick={() => handleClickNavBar("#Services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                id="Research"
                href="#strategic"
                onClick={() => handleClickNavBar("#Research")}
              >
                Research Center
              </a>
            </li>
            <li>
              <a
                id="Contact"
                href="#speak"
                onClick={() => handleClickNavBar("#Contact")}
              >
                Contact Us
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
