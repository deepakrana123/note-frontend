import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css"
// import { getUserInfo, logout } from '../../Features/authSlice';
const Header = () => {
  const navigate=useNavigate()
  const [term , setTerm]=useState("");
   const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  const user= userInfo.pic.startsWith("https")?userInfo.pic:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"

  function submitHandler(){
    localStorage.removeItem("userInfo")
    navigate("/login")
  }
    return (
        <div className="header">
      <Link to="/">
        <div className="logo">
          NotesApp
        </div>
      </Link>
      <div className="search">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} className="search_input" placeholder="Search Your Notes" onChange={(e)=>setTerm(e.target.value)}/>
          <button type="submit" className="search_button"><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="user-logo">
        <img src={user} alt={userInfo.name}/>
        <button   type ="submit" onClick={submitHandler}>Logout</button>
      </div>
      </div>

    )
}

export default Header