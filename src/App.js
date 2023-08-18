import React from "react";
import './App.css';
import Header from './pages/Header/Header';
import {BrowserRouter as Router,Route ,Routes} from "react-router-dom"
import Footer from './pages/Footer/Footer';
import Landing from './pages/Landing/Landing';
import Register from "./pages/Register/Register";
import Sign from "./pages/Login/Sign";
import PageNotFound from "./components/PageNotFound";
// import MyNotes from './components/MyNotes/MyNotes';
import CreateNote from './pages/CreateNote/CreateNote';
import Edit from "./pages/Edit/Edit";
import MyNotes from "./pages/MyNotes/MyNotes";
// import Edit from './components/Edit/Edit';
// import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
       <Routes>
        <Route exact path="" element={<Landing/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Sign/>}/>
        <Route  path="/*" element={<PageNotFound/>} />
        <Route path="/create/note" element={<CreateNote/>}/>
        <Route path="/edit/note" element={<Edit/>}/>
        <Route path="/note" element={<MyNotes/>}/>
       </Routes>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
