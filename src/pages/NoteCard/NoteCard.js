import React from 'react'
import { Link} from 'react-router-dom';
import "./NoteCard.css";

const NoteCard = ({ note ,deleteNote }) => {
  
  return (
    <div className="noteCard">
        <h4>{note.title}</h4>
        <div className="noteInner">
          <div className="noteTop">
            <p>{note.content}</p>
            <div className="noteInfo">
            <span>Created At :</span>
              <p>{note.createdAt}</p>
            </div>
          </div>
            <div className="buttonInfo">
              <Link to={`/edit/${note._id}`}  className="buttonB" >Edit</Link>
              <button className='buttonB' style={{marginLeft:"20px"}} onClick={()=>deleteNote(note._id)} >Delete</button>
            </div>
        </div>
    </div>
  )
}

export default NoteCard