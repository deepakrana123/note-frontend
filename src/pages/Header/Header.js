import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css"
// import { getUserInfo, logout } from '../../Features/authSlice';
const Header = () => {
  const navigate=useNavigate()
  const [term , setTerm]=useState("");
  const [name,setName]=useState("hii")
  const [pic,setPic]=useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg")
   const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  
  // function submitHandler(){
  //   localStorage.removeItem("userInfo")
  //   navigate("/login")
  // }
  // if(userInfo){
  //   setPic(userInfo.pic)
  //   setName(userInfo.name)
  // }
    return (
    <header>
    <div class="logo">Logo</div>
    <div class="search">
      <input type="text" value={term} className="search_input" placeholder="Search Your Notes" onChange={(e)=>setTerm(e.target.value)}/>
      <button><i className="fa fa-search"></i></button>
    </div>
    <div class="logout">
      Logout</div>
  </header>
    )
}

export default Header