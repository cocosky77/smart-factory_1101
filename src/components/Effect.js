import React from "react";
import "./Effect.css";

function Effect() {

    const effectCards = [
        {
          id: 1,
          number: "01",
          title: "실시간 데이터 공유를 통한 신속한 의사결정 지원",
          description:
            "실시간 데이터 분석과 통합을 통해 빠르고 정확한 의사결정을 도와드립니다.",
          tags: ["실시간 데이터 분석", "통합 플랫폼"],
          image: "/effect-data.png",
        },
        {
          id: 2,
          number: "02",
          title: "공정단계 관리/추적을 통한 품질 향상",
          description:
            "생산 공정의 모든 단계를 추적하고 관리하여 제품의 품질을 지속적으로 개선합니다.",
          tags: ["공정 추적 시스템", "품질 관리 솔루션"],
          image: "/effect-up.png",
        },
        {
          id: 3,
          number: "03",
          title: "생산설비 자동화를 통한 생산성 향상",
          description:
            "자동화된 생산 설비로 인건비 절감과 동시에 생산성을 극대화할 수 있습니다.",
          tags: ["자동화 설비", "스마트 운영 시스템"],
          image: "/effect-auto.png",
        },
      ];

  return (
    <section className="effect">
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
  );
}

export default Effect;
