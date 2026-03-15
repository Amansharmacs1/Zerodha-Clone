import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function VerifyEmail() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#eef5ff" }}
    >
      <div
        className="card shadow text-center p-4 border-0"
        style={{ width: "420px", borderRadius: "12px" }}
      >
        <h4 className="fw-bold mb-3" style={{ color: "#387ed1" }}>
          <i className="bi bi-check-circle-fill me-2"></i>
          Check Your Email
        </h4>

        <p className="text-muted mb-0">
          We've sent you an email to verify your account. Please check
          your inbox and click the verification link.
        </p>
      </div>
    </div>
  );
}

export default VerifyEmail;