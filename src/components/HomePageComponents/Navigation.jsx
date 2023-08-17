import React from "react";

const NavigationComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a href="/" className="navbar-brand ms-5">
          React Firebase File Manager System
        </a>
        <ul className="navbar-nav ms-auto me-5">
            <div className="nav-item mx-2">
                <a href="/login" className="btn btn-primary btn-sm">Login</a>
            </div>
            <div className="nav-item">
                <a href="/register" className="btn btn-success btn-sm">Register</a>
            </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationComponent;
