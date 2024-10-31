import React, { useState } from "react";


import "./Main.scss";
//이미지들
import sfManufacture from "../assets/images/sf-manufacture.png";
import sfIntegration from "../assets/images/sf-integration.png";
import sfAnalytics from "../assets/images/sf-analytics.png";
import sfBackground from "../assets/images/sf-background.png";
import service5ContentImg from "../assets/images/service5content-img.png";
import effectData from "../assets/images/effect-data.png";
import effectUp from "../assets/images/effect-up.png";
import effectAuto from "../assets/images/effect-auto.png";
import aboutCompany from "../assets/images/about-company.png";
import aboutCeo from "../assets/images/about-ceo.png";
import aboutbusiness from "../assets/images/about-business.png";
import aboutVision from "../assets/images/about-vision.png";
import aboutBg from "../assets/images/about-bg.png";

import smartFactoryVideo from "../assets/smartfactory.mp4";


function Main() {

  const effectCards = [
    {
      id: 1,
      number: "01",
      title: "실시간 데이터 공유를 통한 신속한 의사결정 지원",
      description:
        "실시간 데이터 분석과 통합을 통해 빠르고 정확한 의사결정을 도와드립니다.",
      tags: ["실시간 데이터 분석", "통합 플랫폼"],
      image: effectData,
    },
    {
      id: 2,
      number: "02",
      title: "공정단계 관리/추적을 통한 품질 향상",
      description:
        "생산 공정의 모든 단계를 추적하고 관리하여 제품의 품질을 지속적으로 개선합니다.",
      tags: ["공정 추적 시스템", "품질 관리 솔루션"],
      image: effectUp,
    },
    {
      id: 3,
      number: "03",
      title: "생산설비 자동화를 통한 생산성 향상",
      description:
        "자동화된 생산 설비로 인건비 절감과 동시에 생산성을 극대화할 수 있습니다.",
      tags: ["자동화 설비", "스마트 운영 시스템"],
      image: effectAuto,
    },
  ];


  const CompanyCard = [
    {
      id: 1,
      title: "회사설립",
      description: "2020년 8월 5일",
      image: aboutCompany,
    },
    {
      id: 2,
      title: "대표이사",
      description: "김낙일",
      image: aboutCeo,
    },
    {
      id: 3,
      title: "사업영역",
      description: ["소프트웨어 개발", "인공지능 솔루션 개발", "스마트 팩토리"],
      image: aboutbusiness,
    },
    {
      id: 4,
      title: "비전/가치",
      description: [
        "Creative Thinking",
        "Social Contribution",
        "Global Criteria",
      ],
      image: aboutVision,
    },
  ];


  const MainDevelop = [
    {
      id: 1,
      sub: "ERP 및 MES 시스템 개발",
    },
    {
        id: 2,
        sub: "코스콤 API를 연동한 Trading View 차트 개발",
      },
      {
        id: 3,
        sub: "결혼 중개 매칭 알고리즘을 적용한 앱 개발",
      },
      {
        id: 4,
        sub: "남녀간의 성향분석 데이터셋을 활용한 LSTM 학습 모델",
      },
      {
        id: 5,
        sub: "Rest API 기반 주문, 재고 관리 시스템 / 앱, 웹",
      },
      {
        id: 6,
        sub: "인공지능 CCTV 관제 시스템 솔루션",
      },
  ];

  const [activeTab, setActiveTab] = useState("service");

  document.querySelector('.contact-button-fixed').addEventListener('click', function (e) {
    e.preventDefault(); 
    document.querySelector('#contact').scrollIntoView({ 
      behavior: 'smooth' 
    });
  });

  
  return (
    <div className="main" id="main">
      <div className="visual-title-section" >
        <video className="video-background" autoPlay loop muted playsInline>
          <source src={smartFactoryVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="visual-title">
          <p>WE ARE BUILDING THE<br /> <span>OPTIMAL SMART FACTORY</span><br />SYSTEM</p>
        </div>
      </div>

      {/* 고정된 Contact 버튼 */}
      <a href="#contact" className="contact-button-fixed button btnPush btnLightBlue">
        Contact
      </a>

      <section className="smart-factory" id="smart-factory">
        {/* 스마트 팩토리 타이틀 + 설명 */}
        <div className="smart-factory-describe">
          <p className="smart-factory-title">SMART FACTORY</p>
          <p className="smart-factory-description">
            <p>ICT(정보통신) 기술을 통해</p>
            <p>
              <span>실시간 데이터 분석</span>, <span>예측 기반 유지보수</span>,{" "}
              <span>품질 혁신</span>, 그리고 <span>생산성 극대화</span>를
              실현하며,
            </p>
            <p>제조 현장에 유연하고 효율적인 스마트 제조 환경을 제공합니다.</p>
          </p>
        </div>

        {/* 스마트 팩토리 원 3개 */}
        <div className="smart-factory-features">
          <div className="feature-circle">
            <p>Smart<br></br>Manufacturing</p>
            <img src={sfManufacture} alt="Smart Manufacturing Icon" />
          </div>
          <div className="feature-circle">
            <p>Integration</p>
            <img src={sfIntegration} alt="Integration Icon" />
          </div>
          <div className="feature-circle">
            <p>Analytics</p>
            <img src={sfAnalytics} alt="Analytics Icon" />
          </div>
        </div>

        <div className="background">
          <img src={sfBackground} alt="SmartFactory BG" />
        </div>
      </section>

      <section className="service" id="service">
        {/* 서비스 + 설명 */}
        <div className="service-describe">
          <p className="service-title">SERVICE</p>
          <p className="service-description">
            <p><span>ERP</span>와 <span>MES</span> 시스템을 기반으로</p>
            <p>
              <span>자원관리 및 생산 과정</span>을 통합하여 기업에 최적화된 <span>맞춤형 솔루션</span> 및
            </p>
            <p>효율적 운영과 생산성 향상을 위한 <span>통합 서비스</span>를 지원합니다. </p>
          </p>
        </div>

        {/* 서비스 구조 */}
        <div className="service-feature">
          <img src={service5ContentImg} alt="5분류"/>
        </div>
      </section>


      <section className="effect" id="effect">
        {/* Effect + 설명 */}
        <div className="effect-describe">
          <p className="effect-title">EFFECT</p>
          <p className="effect-description">
            <p>
              첨단 ICT 기술과 통합 솔루션을 통해 혁신적인 스마트 팩토리를
              실현합니다.
            </p>
            <p>
              <span>실시간 데이터 분석</span>, <span>자동화</span>, <span>예측 유지보수</span>를 통해
              유연하고 효율적인 생산 환경을 구축하여,
            </p>
            <p>미래형 제조 혁신을 선도합니다. </p>
          </p>
        </div>

        <div className="cards">
          {effectCards.map((card) => (
              <div className="card" key={card.id}>
                  <div className="num">{card.number}</div>
                  <div className="title">
                      <span>{card.title.split("를 통한")[0]}를 통한</span>
                      <br /> {card.title.split("를 통한")[1]}
                  </div>
                  <div className="detail">{card.description}</div>
                  <div className="btns">
                      {card.tags.map((tag, index) => (
                          <button className="btn" key={index}>{tag}</button>
                      ))}
                  </div>
                  <div className="card-icon">
                      <img src={card.image} alt={'Icon for ${card.title}'}/>
                  </div>
              </div>
          ))}
        </div>
      </section>




    <section className="about" id="about">
      {/* 제목 */}
      <h1 className="about-title">ABOUT</h1>

      {/* 회사 소개 텍스트 */}
      <div
        className="about-content"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="about-description">
          <h2>NISOFT 엔아이소프트(주)</h2>
          <p className="first">
            끊임없는 기술 개발로 제조 기업의 디지털 전환을 이끌며,
          </p>
          <p>
            <span>'사람을 위한 기술, 인류의 문제 해결'</span>이라는 철학을
            바탕으로
          </p>
          <p>도움을 주는 IT 솔루션을 제공하여</p>
          <p>더 나은 미래를 함께 만들어가고자 합니다.</p>
        </div>
      </div>

      <div className="about-cards-cover">
        <div className="about-cards">
          {CompanyCard.map((card) => (
            <div className="about-card" key={card.id}>
              <div className="about-icon">
                <img src={card.image} alt={"Icon for ${card.title}"} />
              </div>
              <div className="about-type">{card.title}</div>
              <div className="about-detail">
                {Array.isArray(card.description) ? (
                  card.description.map((desc, index) => (
                    <div key={index}>{desc}</div>
                  ))
                ) : (
                  <div>{card.description}</div>
                )}
              </div>
              <div className="about-vision">{card.vision}</div>
            </div>
          ))}
        </div>
      </div>


      <div className="history">
        <div className="history-develop">
          <div className="history-develop-title">주요 개발 내역</div>
          {MainDevelop.map((sub) => (
            <div className="history-develop-detail" key={sub.id}>{sub.sub}</div>
          ))}
        </div>
        <div className="history-year">
            <div className="history-year-2023">
                <div className="history-year-title">2023</div>
                <div className="history-year-detail">
                    <div className="history-year-detail-month">4</div>
                    <div className="history-year-detail-sub">중소벤처기업부 재도전성공패키지 과제 선정<br /> <span>최우수 평가 달성 (1억원)</span></div>
                </div>
            </div>
            <div className="history-year-2022">
                <div className="history-year-title">2022</div>
                <div className="history-year-detail">
                    <div className="history-year-detail-month">12</div>
                    <div className="history-year-detail-sub">K-소비자브랜드 대상 수상</div>
                </div>
                <div className="history-year-detail">
                    <div className="history-year-detail-month">9</div>
                    <div className="history-year-detail-sub">법인 전환</div>
                </div>
                <div className="history-year-detail">
                    <div className="history-year-detail-month">8</div>
                    <div className="history-year-detail-sub">벤처기업확인 <span>(혁신성장유형)</span></div>
                </div>
                <div className="history-year-detail">
                    <div className="history-year-detail-month">7</div>
                    <div className="history-year-detail-sub">기술투자형 스마트 도시 특화기업 엑셀러레이팅 최종 선정<br /> <span>스마트 AI CCTV 관제를 활용한 법보행 객체 추적 및 사고 발생 감지 솔루션</span></div>
                </div>
                <div className="history-year-detail">
                    <div className="history-year-detail-month">5</div>
                    <div className="history-year-detail-sub-content">
                      <div className="history-year-detail-sub">중소벤처기업부 창업성장기술개발 디딤돌 과제 선정<br /> <span>CNN 기반 딥러닝을 활용한 영상 분석 솔루션 개발 (1.1억원)</span><br /></div>
                      <div className="history-year-detail-sub">숭실대학교 벤처중소기업센터 입주 기업 선정<br /></div>
                      <div className="history-year-detail-sub">과학기술정보방송통신위원장 표창장 수상<br /></div>
                      <div className="history-year-detail-sub">국토교통위원장 표창장 수상<br /></div>
                      <div className="history-year-detail-sub">K-ESG 경영혁신 대상 수상<br /></div>
                    </div>
                </div>
            </div>
            <div className="history-year-2020">
                <div className="history-year-title">2020</div>
                <div className="history-year-detail">
                    <div className="history-year-detail-month">8</div>
                    <div className="history-year-detail-sub">엔아이소프트 회사 설립</div>
                </div>
            </div>
        </div>
      </div>
    </section>


    <section className="contact-us" id="contact">
      <h1 className="contact-title">CONTACT US</h1>

      <div className="contact-container">
        {/* 왼쪽 정보 섹션 */}
        <div className="contact-info">
          <p className="contact-info-title">
            문의사항을 남겨주시면
            <br /> 확인 후 연락드리겠습니다.
          </p>
          <div className="contact-info-detail">
            <p>
              <strong>E-mail</strong> master@nisoft.kr
            </p>
            <p>
              <strong>Tel</strong> 02-123-4567
            </p>
          </div>
        </div>

        {/* 오른쪽 폼 섹션 */}
        <div className="contact-form">
          <div className="form-tabs">
            {/* 탭 버튼 */}
            <button
              className={`tab ${activeTab === "service" ? "active" : ""}`}
              onClick={() => setActiveTab("service")}
            >
              서비스 문의
            </button>
            <button
              className={`tab ${activeTab === "other" ? "active" : ""}`}
              onClick={() => setActiveTab("other")}
            >
              기타 문의
            </button>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <label>담당자*</label>
            <input
              type="text"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("담당자를 입력해 주세요")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />

            <label>회사(소속)*</label>
            <input
              type="text"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("회사(소속)를 입력해 주세요")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />

            <label>이메일*</label>
            <input
              type="email"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("올바른 이메일을 입력해 주세요")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />

            <label>연락처*</label>
            <input
              type="text"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("연락처를 입력해 주세요")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />

            <label>제목*</label>
            <input
              type="text"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("제목을 입력해 주세요")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />

            <label>내용*</label>
            <textarea
              rows="10"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("내용을 입력해 주세요")
              }
              onInput={(e) => e.target.setCustomValidity("")}
            ></textarea>

            <div className="checkbox">
              <input type="checkbox" id="agreement" />
              <label htmlFor="agreement">
                개인정보 수집 및 이용에 동의합니다.
              </label>
            </div>

            <button type="submit" className="submit-button">
              문의하기
            </button>
          </form>
        </div>
      </div>
    </section>






    </div>
  );
}

export default Main;
