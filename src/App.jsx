import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    return loggedInStatus === "true";  // Initialize based on localStorage
  });
  


  useEffect(()=>{
    const loggedInStatus=localStorage.getItem("isLoggedIn");
    if(loggedInStatus ==="true"){
      setIsLoggedIn(true);
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("isLoggedIn",isLoggedIn);
  },[isLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={
          isLoggedIn ? (<Dashboard setIsLoggedIn={setIsLoggedIn} />)
          : <Navigate to="/login"/>
        }
        />

        <Route path="/*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"}/>}/>
      </Routes>
    </Router>
  )
}

export default App
