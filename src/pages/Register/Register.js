import React, { useState, useEffect } from "react";
import "./Register.css";
import { registerUser } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const { isLoading, error, userInfo, success } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  console.log(userInfo, isLoading, error, success);
  useEffect(() => {
    if (success) navigate("/login");
    // redirect authenticated user to profile screen
    // if (user) navigate('/user-profile')
  }, [navigate, userInfo, success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == null || password == null || email == null) {
      alert("data not filled");
    }
    if (password !== confirmpassword) {
      alert("password and confirmpassword doesnot match");
    } else {
      let postData = {
        name: name,
        email: email,
        password: password,
      };
      dispatch(registerUser(postData));
      setEmail(" ");
      setName(" ");
      setPassword("");
      setConfirmPassword("");
    }
  };
  return (
    <div className="container">
      <div className="center">
        {error && (
          <ErrorMessage variant="danger">
            {error === "Request failed with status code 404"
              ? "User Already Exist"
              : error}
          </ErrorMessage>
        )}
        {isLoading && <Loading />}
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              type="name"
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span></span>
            <label>Name</label>
          </div>
          <div className="txt_field">
            <input
              type="email"
              required
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              required
              id="confirmpassword"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span></span>
            <label>Confirm Password</label>
          </div>
          <button type="submit" className="butSubmit" disabled={isLoading}>
            Submit
          </button>
          <div className="signup_link">
            Have an Account ? <Link to="/login">Login Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
