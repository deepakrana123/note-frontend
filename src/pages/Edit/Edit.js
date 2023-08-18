import React, { useState } from 'react';
import "./Edit.css"
import axios from "axios";
import {useParams,useNavigate} from "react-router-dom";



const Edit = () => {
    const [title,setTitle]=useState("");
  const [category,setCategory]=useState("");
  const [content,setContent]=useState("");
  const {id}=useParams();
  const navigate=useNavigate()
  // const userInfo=JSON.parse(localStorage.getItem("userInfo"));
  const submithandler = async(e)=>{
    // e.preventDefault();
    // if(!title && !category && !content){
    //   alert("some description are not filled")

    // }
    // e.preventDefault();
    // if(!title && !category && !content){
    //   alert("some description are not filled")
    // }
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    // const data=axios.put(`${Api}/${id}`,{title,category,content},config)
    //  if(data){
    //      navigate("/notes")
    //  }
  }
  return (
    <div className="editContainer">
    <div  className="editforms" >
    <div className="createNoteheading">
        <h2>Edit Note</h2>
        
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
         <button type="submit" className="buttons123" onClick={(e)=>submithandler(e)} >Edit Note</button>
    </div>
</div>
    </div>
  )
}

export default Edit