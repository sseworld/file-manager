import React from "react";
import RegisterForm from "../../../components/AuthComponents/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container-fluid">
      <h1 className="display-1 my-5 text-center">Register here</h1>
      <div className="row">
        <div className="col-md-5 mx-auto mt-5">
          <RegisterForm />
          <Link to="/login" className="ms-auto">
            Already a Member? Login
          </Link>
          <br />
          <Link to="/" className="text-end">
            GO Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
