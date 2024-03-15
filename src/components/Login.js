import React from 'react'
import "./Login.css"
// import Button from 'react-bootstrap/Button';
export const Login = () => {
  return (
    <div className="login-card">
      <h2>Login</h2>
      <div className='form1'>
    
        <label >Username:</label>
        <input type="text" id="username"  placeholder="Enter your username" />
        <label >Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />

        <button type="submit">Login</button>
    
      </div>
      
    </div>
  

  )
}
