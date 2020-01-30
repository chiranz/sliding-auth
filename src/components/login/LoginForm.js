import React from "react";
import SocialContainer from "../SocialContainer";
import Button from "../Button";

export default function LoginForm({ handleSubmit }) {
  return (
    <div className="form-container login-container">
      <form action="#">
        <h1>Sign In</h1>
        <SocialContainer />
        <span>or use your account</span>
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <a href="/">Forgot your password?</a>
        <Button type="submit" onClick={handleSubmit}>
          Sign In
        </Button>
      </form>
    </div>
  );
}
