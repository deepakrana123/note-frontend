import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  function submitHandler() {
    localStorage.removeItem("userToken");
    navigate("/login");
  }
  return (
    <header>
      <div className="logo">
        <Link to="/">NoteApp</Link>
      </div>
      <button className="logout" onClick={() => submitHandler()}>
        Logout
      </button>
    </header>
  );
};

export default Header;
