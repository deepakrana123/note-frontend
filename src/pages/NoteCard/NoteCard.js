import React from 'react'
import { Link} from 'react-router-dom';
import "./NoteCard.css";

const NoteCard = ({ note ,deleteNote }) => {
  
  return (
    // <div className="noteCard">
    //     <h4>{note.title}</h4>
    //     <div className="noteInner">
    //       <div className="noteTop">
    //       <span>Content :</span>
    //         <p>{note.content}</p>
    //         <div className="noteInfo">
    //         <span>Created At :</span>
    //           <p>{note.createdAt}</p>
    //         </div>
    //       </div>
    //         <div className="buttonInfo">
    //          <button><Link to={`/edit/${note._id}`}  className="buttonB" >Edit</Link></button> 
    //           <button className='buttonB' style={{marginLeft:"20px"}} onClick={()=>deleteNote(note._id)} >Delete</button>
    //         </div>
    //     </div>
    // </div>
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