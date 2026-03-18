import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function ChangePassword() {

  const { email } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Frontend validation
    if (!formData.newPassword || !formData.confirmPassword) {
      setIsError(true);
      setMessage("All fields are required");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setIsError(true);
      setMessage("Passwords do not match");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        `http://localhost:8000/user/change-password/${encodeURIComponent(email)}`, // ✅ correct route
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            newPassword: formData.newPassword,
            confirmPassword: formData.confirmPassword // ✅ IMPORTANT FIX
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setIsError(true);
        setMessage(data.message || "Something went wrong");
        return;
      }

      setIsError(false);
      setMessage("Password changed successfully");

      setTimeout(() => {
        navigate("/login");
      }, 2000);

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
          Change Password
        </h3>

        <p className="text-center text-muted mb-4">
          Enter your new password
        </p>

        <form onSubmit={handleSubmit}>

          {/* New Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">New Password</label>

            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="form-control"
                required
              />

              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Changing Password..." : "Change Password"}
          </button>

          {message && (
            <div className={`text-center small mt-3 ${isError ? "text-danger" : "text-success"}`}>
              {message}
            </div>
          )}

        </form>

      </div>
    </div>
  );
}

export default ChangePassword;