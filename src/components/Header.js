import React, { useState, useEffect } from "react";
import "./Header.scss";
import {
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import nisoftLogo from "../assets/images/logo.png";
import smartFactoryVideo from "../assets/smartfactory.mp4";
import Main from "../pages/Main";
import Footer from "./Footer";

function Header() {

  const [activeSection, setActiveSection] = useState("");
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  
  // 스크롤 위치에 따라 activeSection을 업데이트하는 함수
  const handleScroll = () => {
    const sections = [
      { id: "#main", element: document.getElementById("main") },
      { id: "#smart-factory", element: document.getElementById("smart-factory") },
      { id: "#service", element: document.getElementById("service") },
      { id: "#effect", element: document.getElementById("effect") },
      { id: "#about", element: document.getElementById("about") },
      { id: "#contact", element: document.getElementById("contact") }
    ];

    sections.forEach((section) => {
      if (section.element) {
        const rect = section.element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(section.id);

          // `#smart-factory` 섹션에 도달하면 `header`에 `active` 클래스 추가
          if (section.id === "#smart-factory") {
            setIsHeaderActive(true);
          } else if (section.id === "#main") {
            setIsHeaderActive(false);
          }
        }
      }
    });

  };
  // const handleLinkClick = (sectionId) => {
  //   const section = document.querySelector(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" }); // 부드럽게 스크롤
  //     setActiveSection(sectionId); // 섹션 활성화 상태 업데이트
  //     setMenuActive(false); // 메뉴 닫기
  //   }
  // };
  const handleLinkClick = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      
      // 강제로 상태를 업데이트하기 위해 약간 지연 후 handleScroll 호출
      setTimeout(() => {
        setActiveSection(sectionId); // 명시적으로 선택된 섹션으로 설정
        if (sectionId === "#smart-factory") {
          setIsHeaderActive(true);
        } else if (sectionId === "#main") {
          setIsHeaderActive(false);
        }
      }, 300); // 300ms 지연 (필요에 따라 조정 가능)
      
      setMenuActive(false);
    }
  };
  
  // 임시로 작업함 // 모바일 환경에서 강제로 active되게 임시로 작업해놨습니다. 시간날때 수정하겠습니다..
  useEffect(() => {
    const sections = document.querySelectorAll("#main, #smart-factory, #service, #effect, #about, #contact");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
            setIsHeaderActive(entry.target.id !== "main");
          }
        });
      },
      {
        threshold: 0.5, // 섹션이 50% 이상 보일 때 활성화
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <>    
    {/* <header className="header"> */}
    <header className={`header ${isHeaderActive ? "active" : ""}`}>
      {/* nav */}
      <nav className="header-nav-section">
        <a href="#main" className="logo"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#main");
          }}
        >
          <img src={nisoftLogo} alt="Logo" />
        </a>
        <div
            className={`header-nav-section__menu-btn ${menuActive ? 'active' : ''}`}
            onClick={toggleMenu}
          >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
        <ul 
          className={`header-nav-links SMN_effect-6 ${menuActive ? 'active' : ''}`}      
        >
          <li>
            <a
              href="#smart-factory"
              data-hover="SMART FACTORY"
              className={activeSection === "#smart-factory" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#smart-factory");
              }}
            >
              SMART FACTORY
            </a>
          </li>
          <li>
            <a
              href="#service"
              data-hover="SERVICE"
              className={activeSection === "#service" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#service");
              }}
            >
              SERVICE
            </a>
          </li>
          <li>
            <a
              href="#effect"
              data-hover="EFFECT"
              className={activeSection === "#effect" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#effect");
              }}
            >
              EFFECT
            </a>
          </li>
          <li>
            <a
              href="#about"
              data-hover="ABOUT"
              className={activeSection === "#about" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#about");
              }}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#contact"
              data-hover="CONTACT US"
              className={activeSection === "#contact" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
            >
              CONTACT US
            </a>
          </li>
        </ul>
      </nav>
    </header>
    {/* <Routes>
      <Route path="/service" element={<Main/>} />
    </Routes> */}
      <Main/>
    <Footer/>
    {/* <Footer /> */}
    {menuActive && 
      <div className="menu-bg"
        onClick={toggleMenu}
      ></div>  
    }
    </>
  );
}

export default Header;