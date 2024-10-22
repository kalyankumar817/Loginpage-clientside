import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({setIsLoggedIn}) => {
  const navigate=useNavigate();

  const handleLogout=()=>{
    setIsLoggedIn(false)
    localStorage.removeItem("isLoggedIn")
    navigate("/login");
  }

  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <button onClick={handleLogout} type="button">SignOut</button>
    </div>
  )
}

export default Dashboard;
