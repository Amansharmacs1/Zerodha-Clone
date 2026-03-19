import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:8000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message || "Signup successful");
        navigate("/verify-email");
      } else {
        setError(data.message || "Signup failed");
      }

    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-wrapper d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow" style={{ width: "420px" }}>
        <h1 className="text-center text-primary fw-bold mb-2">
          Create your account
        </h1>

        <div className="card-body p-4">
          <h3 className="text-center text-primary fw-bold mb-4">Sign up</h3>

          {/* ✅ Error Message */}
          {error && (
            <p style={{ color: "red", textAlign: "center" }}>
              {error}
            </p>
          )}

          {/* ✅ Success Message */}
          {success && (
            <p style={{ color: "green", textAlign: "center" }}>
              {success}
            </p>
          )}

          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="m@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>

            <div className="input-group">
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter password"
              />

              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={
                    showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"
                  }
                ></i>
              </button>
            </div>
          </div>

          <button
            className="btn btn-primary w-100"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Signup"}
          </button>

          <p className="text-center mt-3 mb-0">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary fw-semibold text-decoration-none"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;