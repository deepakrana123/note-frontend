import React ,{useState} from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"
import {Api} from "../../Api.js";
const Login = () => {
  const [email , setEmail]=useState();
  const [password , setPassword] = useState();
  const navigate=useNavigate();

  const loginSubmit=async(e)=>{
    e.preventDefault();
    const config = {
      headers: {
          "Content-type": "application/json",
      },
         };
  
  const { data } = await axios.post(
      `${Api}/user/login`,
      { email, password },
      config
  );
  localStorage.setItem("userInfo", JSON.stringify(data));
  navigate("/notes");
  }

  return (
    <div className="formContainer">
    <div  className="forms" >
    <div className="headingsContainer">
        <h3>Sign in</h3>
        <p>Sign in with your username and password</p>
    </div>
    <div className="mainContainer">
        <label>Your Email</label>
        <input type="email" placeholder="Enter Email" value={email} required
        onChange={(e)=>setEmail(e.target.value)}/>
        <br></br>
        <label >Your password</label>
        <input type="password" placeholder="Enter Password" value={password} required
        onChange={(e)=>setPassword(e.target.value)}/>
        <br></br>
         <button type="submit" className="buttons" onClick={(e)=>loginSubmit(e)}>Login</button>
        <p className="register">Not a member?  <Link to="/register">Register here!</Link></p>
    </div>
</div>
    </div>
       
  )
}

export default Login;