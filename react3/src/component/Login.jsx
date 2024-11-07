// LoginForm.js
import React, { useState } from "react";

const Login= ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          className="form-control mb-3" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Your username..." 
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          className="form-control mb-3" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Your password..." 
        />
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
