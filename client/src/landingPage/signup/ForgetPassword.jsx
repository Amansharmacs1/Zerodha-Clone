import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function ForgetPassword() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setIsError(true);
      setMessage("Please enter your email");
      return;
    }

    setLoading(true);
    setMessage("");

    try {

      const response = await fetch(
        "http://localhost:8000/user/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setIsError(true);
        setMessage(data.message || "Something went wrong");
        return;
      }

      setIsError(false);
      setMessage(data.message || "Otp Generated Successfully");

      setTimeout(() => {
        navigate("/verify-otp", { state: { email } });
      }, 1500);

    } catch (error) {

      setIsError(true);
      setMessage("Server error. Try again");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <div className="card shadow p-4" style={{ width: "420px" }}>

        <h3 className="text-center text-primary mb-2">
          Forgot Password
        </h3>

        <p className="text-center text-muted mb-4">
          Enter your email to receive OTP
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>

            <input
              type="email"
              className="form-control"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>

          {message && (
            <div
              className={`text-center small mt-3 ${
                isError ? "text-danger" : "text-success"
              }`}
            >
              {message}
            </div>
          )}

        </form>

        <p className="text-center mt-3 mb-0">
          Remember your password?{" "}
          <Link to="/login" className="text-primary fw-semibold">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default ForgetPassword;

