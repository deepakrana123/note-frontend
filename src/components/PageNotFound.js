import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./PageNotFound.css"
const PageNotFound = () => {
    const naviagte=useNavigate()
  return (
    <div id="error-page">
         <div className="content">
            <h2 className="head" data-text="404">
               404
            </h2>
            <h4 data-text="Opps! Page not found">
               Opps! Page not found
            </h4>
            <p>
               Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
            </p>
            <div className="btns">
               <button onClick={()=>naviagte("")}>Home</button>
               <button onClick={()=>naviagte(-1)}>Back</button>
            </div>
         </div>
      </div>
  )
}

export default PageNotFound