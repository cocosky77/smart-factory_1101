import React from "react";
import "./Service.css";

function Service() {
  return (
    <section className="service">

        
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
        {/* <div className="center-circle">
          <img src="/service-center" alt="ERP + MES" className="center-image" />
          <p>ERP + MES</p>
        </div>

        <div className="feature-circle automation">
          <img src="/service-auto" alt="Automation" />
          <p>AUTOMATION</p>
        </div>
        <div className="feature-circle connection">
          <img src="/service-connect" alt="Connection" />
          <p>CONNECTION</p>
        </div>
        <div className="feature-circle integration">
          <img src="/service-inte" alt="System Integration" />
          <p>SYSTEM INTEGRATION</p>
        </div>
        <div className="feature-circle cloud">
          <img src="/service-cloud" alt="Cloud System" />
          <p>CLOUD SYSTEM</p>
        </div>
        <div className="feature-circle big-data">
          <img src="/service-data" alt="Big Data" />
          <p>BIG DATA</p>
        </div> */}


            <img src="/service-5분류전체.png" alt="5분류"/>

      </div>
    </section>
  );
}

export default Service;
