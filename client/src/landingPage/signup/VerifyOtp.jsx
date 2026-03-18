import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function VerifyOtp() {

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email; // get email from previous page

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!otp) {
      setMessage("Please enter the OTP");
      return;
    }

    if (!email) {
      setMessage("Email not found. Please restart the process.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {

      const response = await fetch(
        `http://localhost:8000/user/verify-otp/${email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Invalid OTP");
        return;
      }

      setMessage("OTP verified successfully");

      setTimeout(() => {
        navigate(`/change-password/${email}`);
      }, 1500);

    } catch (error) {

      setMessage("Server error. Please try again.");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <div className="card shadow p-4" style={{ width: "420px" }}>

        <h3 className="text-center text-primary mb-2">
          Verify OTP
        </h3>

        <p className="text-center text-muted mb-4">
          Enter the OTP sent to your email
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label fw-semibold">OTP</label>

            <input
              type="text"
              className="form-control text-center"
              placeholder="Enter 6 digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          {message && (
            <div className="text-center small mt-3 text-danger">
              {message}
            </div>
          )}

        </form>

      </div>

    </div>
  );
}

export default VerifyOtp;