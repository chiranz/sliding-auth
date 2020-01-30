import React, { useState } from "react";
import "./App.css";
import RegisterForm from "./components/register/RegisterForm";
import LoginForm from "./components/login/LoginForm";
import RegisterOverlay from "./components/register/RegisterOverlay";
import LoginOverlay from "./components/login/LoginOverlay";

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const handleClick = () => {
    setShowLogin(!showLogin);
  };
  const onRegisterSubmit = () => {
    console.log("Register Submit");
    return;
  };
  const onLoginSubmit = () => {
    console.log("Login Submit");
    return;
  };
  return (
    <div
      className={`container ${!showLogin ? "register-active" : ""}`}
      id="container"
    >
      <RegisterForm handleSubmit={onRegisterSubmit} />
      <LoginForm handleSubmit={onLoginSubmit} />
      <div className="overlay-container">
        <div className="overlay">
          <RegisterOverlay onClick={handleClick} />
          <LoginOverlay onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
