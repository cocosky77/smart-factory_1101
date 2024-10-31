import React from "react";
import "./SuccessModal.scss";
import nisoftLogo from "../assets/images/logo.png";

function SuccessModal({ resetForm }) {
  return (
    <>
      <div className="success-modal">
        <p className="success-modal__title">
          문의가 정상적으로 처리되었습니다.
          <br /> 빠른 시일 내로 연락드리겠습니다.
        </p>
        <button className="success-modal__btn" onClick={() => resetForm()}>
          확인
        </button>
      </div>
      <div className="success-modal__bg" onClick={() => resetForm()}></div>
    </>
  );
}

export default SuccessModal;
