
import React, { useState } from "react";
import Login from "./component/Login";
import UserDashboard from "./component/UserDashboard";
import AdminDashboard from "./component/AdminDashboard";
import ErrorMessage from "./component/ErrorMessage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleLogin = (username, password) => {
    setErrorMessage("");  
    setShowError(false); 

    if (!username || !password) {
      setErrorMessage("Username and password are required."); 
      setShowError(true); 
      return;
    }

   
    if (username === 'admin' && password === 'admin') {
      setIsAdmin(true); 
      setIsLoggedIn(true); 
    } else if (username !== 'admin' && password !== 'admin') {
      setIsAdmin(false); 
      setIsLoggedIn(true); 
    } else {
      setErrorMessage('Invalid username or password'); 
      setShowError(true); 
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5 text-center">Login System</h1>
      {!isLoggedIn ? (
        <>
          <Login onLogin={handleLogin} />
          {showError && <ErrorMessage message={errorMessage} />} 
        </>
      ) : isAdmin ? (
        <AdminDashboard />
      ) : (
        <UserDashboard /> 
      )}
    </div>
  );
};

export default App;
