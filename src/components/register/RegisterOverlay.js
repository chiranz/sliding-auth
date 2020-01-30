import React from "react";
import Button from "../Button";

export default function RegisterOverlay({ onClick }) {
  return (
    <div className="overlay-panel overlay-register">
      <h1>Hello Friend!</h1>
      <p>Enter your personal detail and start journey with us</p>
      <Button className="ghost" type="" onClick={onClick}>
        Sign Up
      </Button>
    </div>
  );
}
