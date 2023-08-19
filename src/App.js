import React, { useState } from "react";
import "./App.css";
import Header from "./pages/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import Sign from "./pages/Login/Sign";
import PageNotFound from "./components/PageNotFound";
import CreateNote from "./pages/CreateNote/CreateNote";
import Edit from "./pages/Edit/Edit";
import MyNotes from "./pages/MyNotes/MyNotes";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./pages/ProtectedRoutes/ProtectedRoutes";

function App() {
  const [isLogged, setisLogged] = useState(false);
  const { userInfo, userToken } = useSelector((state) => state.auth);

  if (userInfo && userToken) {
    setisLogged(true);
  }
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="" element={<Landing />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Sign />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route
            path="/create/note"
            element={
              <ProtectedRoutes isLogged={isLogged}>
                <CreateNote />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/edit/note"
            element={
              <ProtectedRoutes isLogged={isLogged}>
                <Edit />
                <MyNotes />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/note"
            element={
              <ProtectedRoutes isLogged={isLogged}>
                <MyNotes />
              </ProtectedRoutes>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
