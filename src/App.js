import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Login from './components/SingUpAndSignIn/Login/Login';
import {BrowserRouter as Router,Route ,Routes} from "react-router-dom"
import SignUp from './components/SingUpAndSignIn/Register/SignUp';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
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
        <Route  exact path="/login" element={<Login/>}/>
        <Route  exact path="/register" element={<SignUp/>}/>
        <Route  exact path="/notes" element={<MyNotes/>}/>
        <Route exact path ="/create" element={<CreateNote/>}/>
        <Route path="/edit/:id" element={<Edit/>}/> 
        <Route path="*" element={<PageNotFound/>}/>
       </Routes>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
