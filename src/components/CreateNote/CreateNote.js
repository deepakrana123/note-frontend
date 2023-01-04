import React, { useState } from 'react';
import "./CreateNote.css"
import axios from "axios"
import {useNavigate} from "react-router-dom";
import {Api} from "../Api.js";
const CreateNote = () => {
  const [title,setTitle]=useState("");
  const [category,setCategory]=useState("");
  const [content,setContent]=useState("");
  const userInfo=JSON.parse(localStorage.getItem("userInfo"));
  const navigate=useNavigate()
  const submithandler = async(e)=>{
    e.preventDefault();
    if(!title && !category && !content){
      alert("some description are not filled")
    }
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const data=axios.post(`${Api}/note/create`,{ title , category , content } , config )
     if(data){
         navigate("/notes");
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