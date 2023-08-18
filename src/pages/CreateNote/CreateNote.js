import React, { useState } from 'react';
import "./CreateNote.css"
import axios from "axios"
import {useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { createNote } from '../../store/authSlice';

const CreateNote = () => {
  const [title,setTitle]=useState("");
  const [category,setCategory]=useState("");
  const [content,setContent]=useState("");
  const {userToken} =useSelector((state)=>state.auth)
  const dispatch=useDispatch();
  const navigate=useNavigate()
  console.log(userToken,"userToken")
  const submithandler = async(e)=>{
    e.preventDefault();
    if(!title && !category && !content){
      alert("some description are not filled")
    }
     let createNotes={
      title:title,
      category:category,
      content:content 
     }
     if(userToken){
        console.log("hii")
        dispatch(createNote(createNotes))
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