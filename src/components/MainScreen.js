import React from 'react'
import "./Screen.css";
const MainScreen = ({title,children}) => {
  return (
    <div className="mainback">   
          {title && (
            <>
              <h1 className="heading">{title}</h1>
              <hr />
            </>
          )}
          {children}
  </div>
  )
}

export default MainScreen