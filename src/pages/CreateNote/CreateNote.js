import React, { useState } from 'react';
import "./CreateNote.css"
import axios from "axios"
import {useNavigate} from "react-router-dom";
import {useSelector } from "react-redux";

const CreateNote = () => {
  const [title,setTitle]=useState("");
  const [category,setCategory]=useState("");
  const [content,setContent]=useState("");
  const {userToken} =useSelector((state)=>state.auth)
  const navigate=useNavigate()
  const submithandler = async(e)=>{
    e.preventDefault();
    if(!title && !category && !content){
      alert("some description are not filled")
    }
     let notes={
      title:title,
      category:category,
      content:content 
     }
     if(userToken){
        let baseURL="http://localhost:2111"
        try {
          const response = await axios.post(`${baseURL}/api/note/create`, notes, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });
          // return response.data;
          console.log(response,"response")
          if(response.status===201){
            navigate("/note")
          }
          // navigate("/note")
        } catch (error) {
          // You can handle errors and rejections here
          if (error.response && error.response.data.message) {
            return error.response.data.message;
          } else {
            return error.message;
          }
        }
        
     }
  }
  return (
    <div className="createContainer">
    <div  className="forms123" >
    <div className="createNoteheading">
        <h2>Create Note</h2>    
    </div>
    <div className="createNoteMainContainer">
      <div className="createNote">
        <label>Title</label>
        <input type="text" className="inputText" placeholder="Enter title"  required value={title} onChange={(e)=>setTitle(e.target.value)}
        />
        </div>
        <br></br>
        <div className="createNote">
        <label >Category</label>
        <input type="text" placeholder="Enter Content"  required
        value={category} onChange={(e)=>setCategory(e.target.value)}
        />
        </div>
        <br></br>
        <div className='createNote'>
        <label >Content</label>
        <textarea wrap="off" cols="30" rows="5" placeholder="Enter Content"  required
        value={content} onChange={(e)=>setContent(e.target.value)}
        />
        </div>
        <br></br>
         <button type="submit" className="buttons123" onClick={(e)=>submithandler(e)} >Create</button>
    </div>
</div>
    </div>
  )
}

export default CreateNote