import React from 'react'
import {Link} from 'react-router-dom'
import "./Landing.css"
const Landing = () => {
  return (
    <div className="mains">
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <button size="lg" className="landingbutton">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </button>
              </Link>
            </div>
          </div>
    </div>
  )
}

export default Landing