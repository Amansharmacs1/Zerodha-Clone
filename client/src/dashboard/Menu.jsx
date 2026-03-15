import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./dash.png";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");

    navigate("/");
  };

  return (
    <div className="dash-menu-container">
      <img src={logo} style={{ width: "50px" }} alt="logo" />

      <div className="dash-menus">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) => (isActive ? "menu selected" : "menu")}
              style={{ textDecoration: "none" }}
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/orders"
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
              style={{ textDecoration: "none" }}
            >
              Orders
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/holdings"
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
              style={{ textDecoration: "none" }}
            >
              Holdings
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/positions"
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
              style={{ textDecoration: "none" }}
            >
              Positions
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/funds"
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
              style={{ textDecoration: "none" }}
            >
              Funds
            </NavLink>
          </li>
        </ul>

        <hr />

        {/* Profile */}
        <div
          className="dash-profile"
          onClick={handleProfileClick}
          style={{ cursor: "pointer" }}
        >
          <div className="dash-avatar">
            {username ? username.charAt(0).toUpperCase() : "U"}
          </div>

          <p className="dash-username">
            {username || "User"}
          </p>
        </div>

        {/* Dropdown */}
        {isProfileDropdownOpen && (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              background: "white",
              border: "1px solid #ddd",
              borderRadius: "6px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              width: "120px"
            }}
          >
            <button
              className="btn btn-danger btn-sm w-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;