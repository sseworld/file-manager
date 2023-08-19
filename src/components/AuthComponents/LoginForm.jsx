import React, { useState, useEffect } from "react";
import { signInUser } from "../../redux/actionCreators/authActionCreators";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password){
      alert("Please fill in all fields")
      return;
    }
    dispatch(signInUser(email, password, setSuccess));
  }

  useEffect(() => {
    if(success) {
      navigate("/dashboard")
    }
  }, [success])

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="form-group my-2">
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group my-2">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary my-2 form-control">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
