import React from "react";
import Button from "../Button";

export default function LoginOverlay({ onClick }) {
  return (
    <div className="overlay-panel overlay-login">
      <h1>Welcome Back!</h1>
      <p>To keep connect with us please login with your personal info</p>
      <Button type="" className="ghost" onClick={onClick}>
        Sign In
      </Button>
    </div>
  );
}
