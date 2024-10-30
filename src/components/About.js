import React from "react";
import "./About.css";

function About() {
  const CompanyCard = [
    {
      id: 1,
      title: "회사설립",
      description: "2020년 8월 5일",
      image: "about-company.png",
    },
    {
      id: 2,
      title: "대표이사",
      description: "김낙일",
      image: "/about-ceo.png",
    },
    {
      id: 3,
      title: "사업영역",
      description: ["소프트웨어 개발", "인공지능 솔루션 개발", "스마트 팩토리"],
      image: "/about-business.png",
    },
    {
      id: 4,
      title: "비전/가치",
      description: [
        "Creative Thinking",
        "Social Contribution",
        "Global Criteria",
      ],
      image: "/about-vision.png",
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

  return (
    <section className="about">
      {/* 제목 */}
      <h1 className="about-title">ABOUT</h1>

      {/* 회사 소개 텍스트 */}
      <div
        className="about-content"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/about-bg.png"})`,
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
            </div>
            <div className="history-year-2021">
                <div className="history-year-title">2021</div>
                <div className="history-year-detail">
                    <div className="history-year-detail-month">4</div>
                    <div className="history-year-detail-sub">중소벤처기업부 재도전성공패키지 과제 선정<br /> <span>최우수 평가 달성 (1억원)</span></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;
