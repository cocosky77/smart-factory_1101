import React from "react";
import "./SmartFactory.css";

function SmartFactory() {
  return (
    <section className="smart-factory">
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
          <img src="/sf-manufacture.png" alt="Smart Manufacturing Icon" />
        </div>
        <div className="feature-circle">
          <p>Integration</p>
          <img src="/sf-integration.png" alt="Integration Icon" />
        </div>
        <div className="feature-circle">
          <p>Analytics</p>
          <img src="/sf-analytics.png" alt="Analytics Icon" />
        </div>
      </div>

      <div className="background">
        <img src="/sf-background.png" alt="SmartFactory BG" />
      </div>
    </section>
  );
}

export default SmartFactory;
