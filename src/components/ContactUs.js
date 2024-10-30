import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  // 현재 활성화된 탭 상태를 관리
  const [activeTab, setActiveTab] = useState("service");

  return (
    <section className="contact-us">
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
  );
}

export default ContactUs;
