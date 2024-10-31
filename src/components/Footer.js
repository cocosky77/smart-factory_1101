import React from "react";
import "./Footer.css";
import nisoftLogo from "../assets/images/logo.png";

function Footer() {

  return (
    <footer className="footer">
    <div className="footer-company">
        <div className="footer-logo">
            <img src={nisoftLogo} alt="FooterLogo" />
        </div>
        <div className="footer-title">엔아이소프트(주)</div>
        <div className="footer-detail">
            <p>Address. 서울특별시 동작구 상도로 369, 창신관 108-109호 (상도동, 숭실대학교)</p>
            <p>Tel. 02 123 4567</p>
            <p>Email. master@nisoft.kr</p>
        </div>
    </div>
    <div className="footer-info">
      <div className="button">개인정보처리방침</div>
      <div className="button">이용약관</div>
    </div>
    </footer>
  );
}

export default Footer;
