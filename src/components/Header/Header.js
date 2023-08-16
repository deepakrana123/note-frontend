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
        <div className="header">
      <Link to="/">
        <div className="logo">
          NotesApp
        </div>
      </Link>
      <div className="search">
        <form>
          <input type="text" value={term} className="search_input" placeholder="Search Your Notes" onChange={(e)=>setTerm(e.target.value)}/>
          <button type="submit" className="search_button"><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="user-logo">
        <img src={pic} alt={name}/>
        <button   type ="submit" >Logout</button>
      </div>
      </div>

    )
}

export default Header