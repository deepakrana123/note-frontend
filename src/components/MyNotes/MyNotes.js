import React,{useEffect ,useState} from 'react'
import NoteCard from '../NoteCard/NoteCard';
import axios from "axios";
import "./MyNotes.css"
import { Link} from 'react-router-dom';
import {Api} from "../Api.js";
const MyNotes = () => {
  const [notes , setNotes] =useState("");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
 
  const  getData = async(user)=>{
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.get(`${Api}/note`, config);
      setNotes(data);
  };
  useEffect(()=>{
    if(userInfo){
      getData(userInfo)
    }
  },[ userInfo]);

  const deleteNote = async (id) => {
   const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const {data} = await axios.delete(`http://localhost:2111/api/note/${id}`,config)
     if(data.message==="Note Removed"){
              getData(userInfo)
     }
     else{
      alert(data.message)
     }
  };
  
  return (
    <div className="notes-wrapper">
      <div className="notes-list">
        <div className="notes">
        <h2>Notes</h2>
        <Link to="/create">Create Note</Link>
        </div>
        <div className="notes-container">
          {notes && notes.map((item)=>(

          <NoteCard note={item} key={item._id} deleteNote={deleteNote}/>
          ))}
        </div>
      </div>
      </div>
  
  )
}

export default MyNotes