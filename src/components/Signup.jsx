import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault(); 
    setErrorMessage("");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid Email Format");
      return;
    }

    // Password length check
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    // Store user info in localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("SignUp Successfull! Now you can login now")
    // Navigate to login page after successful signup
    navigate("/login");
  };

  return (
    <div className='auth-container'>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder='Enter your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button> 
      </form>

      {errorMessage && <p className='error-message'>{errorMessage}</p>}
      
      <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
    </div>
  );
}

export default Signup;
