import React from 'react'
import { Link} from 'react-router-dom';
import "./NoteCard.css";

const NoteCard = ({ note ,deleteNote }) => {
  
  return (
    <div className="box">
    <div className="box-header">
      {note.title}
      </div>
    <div className="box-content">
    <span>Content :</span>
      <p>{note.content}</p></div>
    <div className="box-footer">
      <div className="footer-left">
      <span>Created At :</span>
        <p>{note.createdAt}</p></div>
      <div className="footer-right">
      <button  className="buttonB"><Link to={`/edit/${note._id}`}  >Edit</Link></button> 
      <button className='buttonB' style={{marginLeft:"20px"}} onClick={()=>deleteNote(note._id)} >Delete</button>
      </div>
    </div>
  </div>
  )
}

export default NoteCard