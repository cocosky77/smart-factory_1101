import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
    {/* background video */}
    <video className="video-background" autoPlay loop muted playsInline>
        <source src="/smartfactory.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>

  {/* nav */}
  <nav className="header-nav-section">
        <a href="#header" className="logo">
          <img src="/logo.png" alt="Logo" />
        </a>

        <ul className="header-nav-links SMN_effect-6">
          <li>
            <a href="#smartfactory" data-hover="SMART FACTORY">SMART FACTORY</a>
          </li>
          <li>
            <a href="#service" data-hover="SERVICE">SERVICE</a>
          </li>
          <li>
            <a href="#effect" data-hover="EFFECT">EFFECT</a>
          </li>
          <li>
            <a href="#about" data-hover="ABOUT">ABOUT</a>
          </li>
          <li>
            <a href="#contact" data-hover="CONTACT US">CONTACT US</a>
          </li>
        </ul>
      </nav>

      <div className="header-title-section">
      <div className="header-title">
        <p>WE ARE BUILDING THE<br /> <span>OPTIMAL SMART FACTORY</span><br />SYSTEM</p>
      </div>
      </div>

      {/* 고정된 Contact 버튼 */}
      <a href="#contact" className="contact-button-fixed button btnPush btnLightBlue">
        Contact
      </a>

    </header>
  );
}

export default Header;