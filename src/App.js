import React from "react";
import './App.css';
import Header from './pages/Header/Header';
import Login from './components/SingUpAndSignIn/Login/Login';
import {BrowserRouter as Router,Route ,Routes} from "react-router-dom"
import SignUp from './pages/Register/SignUp';
import Footer from './pages/Footer/Footer';
import Landing from './pages/Landing/Landing';
import MyNotes from './components/MyNotes/MyNotes';
import CreateNote from './components/CreateNote/CreateNote';
import Edit from './components/Edit/Edit';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
       <Routes>
        <Route exact path="" element={<Landing/>}/>
       </Routes>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
