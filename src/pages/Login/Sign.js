import React ,{useState} from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"
import {  userLogin } from '../../store/authSlice';
import { useSelector,useDispatch } from 'react-redux';
const Sign = () => {
  const [email , setEmail]=useState();
  const [password , setPassword] = useState();
  const navigate=useNavigate();
  const [message,setMessage]=useState()
  const { loading, error, userInfo } = useSelector((state)=>state.auth);
  const [show,setShow]=useState(false)
  console.log(show,loading, error, userInfo)
  const dispatch=useDispatch()
  const loginSubmit=async(e)=>{
    e.preventDefault()
    if(password==null || email==null){
      setMessage("Please fill all the deatils")
      setShow(false)
    }
    else{
      let postData={
        email:email,
        password:password
      };
      setShow(true)
      dispatch(userLogin(postData))
      setEmail(" ")
      setPassword(" ")
      navigate("/")
    }
  }


  return (
    <div className="container">
    <div className="center">
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
        <button type="submit" className="butSubmit" disabled={show}>Submit</button>
        <div className="signup_link">
          Not Have an Account ? <Link to="/register">Register Here</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Sign