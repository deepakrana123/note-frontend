import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import {Api} from "../../Api.js";
import "./SignUp.css";
import {useNavigate  } from 'react-router-dom'
import ImageLoading from '../../ImageLoading.js';

const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
    const [confirmPassword, setConfirmPassword] = useState();
    // const [message, setMessage] = useState(null);
    const [picMessage, setPicMessage] = useState(null);
    const [error , setError] = useState(null);
    const [loading , setLoading]=useState(false);
    const navigate=useNavigate() 
  console.log(picMessage,error);   
    const submitHandler = async(e)=>{
        e.preventDefault();
      // setLoading(true);
      if(password === confirmPassword){
        setError("Password doesnot match")
      }
      if(email && password && pic && name){
        console.log(email,password, pic , name ,"value")
       const config = {
                    headers: {
                        "Content-type": "application/json",
                    },
                };
                const { data } = await axios.post(
                    `${Api}/user/register`,
                    { name , email, password ,pic },
                    config
                );
              
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/notes");
            

      }

    }
  
    const postDetails = (pics) => {
        console.log(pics,"pics")
        setLoading(true)
        if (
            pics ===
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        ) {
            return setPicMessage("Please Select an Image");
        }
        setPicMessage(null);
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "NoteApp");
            data.append("cloud_name", "devendracloud123");
            fetch("https://api.cloudinary.com/v1_1/devendracloud123/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data,"data")
                    setPic(data.url.toString());
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            return setPicMessage("Please Select an Image");
        }
       setLoading(false)
    }
    return (
      <div className="signUpContainer">

      <div  className="forms1">
      <div className="headingsContainer">
          <h3>Register</h3>
          <p>Please fill the form</p>
      </div>
  
      <div className="mainContainer">
          <label htmlFor="username">Your username</label>
          <input type="text" placeholder="Enter Username"  required value={name}
           onChange={(e) => setName(e.target.value)}
          />
  
          <br></br>
  
          <label htmlFor="pswrd">Your Email</label>
          <input type="email" placeholder="Enter Email" value={email}  required
          onChange={(e) => setEmail(e.target.value)}/>
  
          <br></br>
          <label htmlFor="pswrd">Your password</label>
          <input type="password" placeholder="Enter Password"  required value={password}
          onChange={(e) => setPassword(e.target.value)}/>
  
          <br></br>
          <label htmlFor="pswrd">Your Confirm password</label>
          <input type="password" placeholder="Enter Confirm Password"  required value={confirmPassword}
           onChange={(e) => setConfirmPassword(e.target.value)}/>
  
          <br></br>
          <label htmlFor="pswrd">Pic</label>
          <input type="file" placeholder="Enter Pic"  required  onChange={(e)=>postDetails(e.target.files[0])}/>
           {loading?<ImageLoading/>:""}
          <br></br>
           <button type="submit" className="buttons"  onClick={(e)=>submitHandler(e)} disabled={loading}>Register</button>   
          <p className="register">Already a member?  <Link to="/login"> Loginhere!</Link></p>
      </div>
  
  </div>
      
      </div>
    )
}

export default SignUp