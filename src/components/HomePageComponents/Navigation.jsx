import React from "react";
import { Link } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a href="/" className="navbar-brand ms-5">
          React Firebase File Manager System
        </a>
        <ul className="navbar-nav ms-auto me-5">
            <div className="nav-item mx-2">
                <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
            </div>
            <div className="nav-item">
                <Link to="/register" className="btn btn-success btn-sm">Register</Link>
            </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationComponent;
