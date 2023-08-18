import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { userLogin } from "../../store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
const Sign = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const { isLoading, error, userInfo, userToken } = useSelector(
    (state) => state.auth
  );
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const loginSubmit = async (e) => {
    e.preventDefault();
    if (password == null || email == null) {
      setMessage("Please fill all the deatils");
      setShow(false);
    } else {
      let postData = {
        email: email,
        password: password,
      };
      setShow(true);
      dispatch(userLogin(postData));
      setEmail("");
      setPassword("");
    }
  };
  useEffect(() => {
    if (userInfo) navigate("/");
    if (userToken) navigate("/");
  }, [navigate, userInfo, userToken]);

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
        <h1>Login</h1>
        <form onSubmit={loginSubmit}>
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
          <button type="submit" className="butSubmit" disabled={isLoading}>
            Submit
          </button>
          <div className="signup_link">
            Not Have an Account ? <Link to="/register">Register Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
