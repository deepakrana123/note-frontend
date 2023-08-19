import React,{useState,useEffect} from 'react'
import NoteCard from '../NoteCard/NoteCard';
import axios from "axios";
import "./MyNotes.css"
import { Link} from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage';
const Api="http://localhost:2111"
const MyNotes = () => {
  const [notes , setNotes] =useState("");
  const userToken=localStorage.getItem('userToken')
  const [error,setError]=useState()
  const  getData =async()=>{
    try{if(userToken){
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      };
      const { data } = await axios.get(`${Api}/api/note`, config);
      setNotes(data);
    }}
    catch(error){
      setError(error)
    }
  }
  useEffect(()=>{
      getData()
  },[]);

  const deleteNote = async (id) => {
   const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    const {data} = await axios.delete(`${Api}/api/note/${id}`,config)
     if(data.message==="Note Removed"){
              getData()
     }
     else{
      alert(data.message)
     }
  };
  
  return (
    <div className="notes-wrapper">
      <div className="notes-list">
        {error && <ErrorMessage error={error}/>}
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