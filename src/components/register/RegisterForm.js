import React from "react";
import SocialContainer from "../SocialContainer";
import Button from "../Button";

export default function RegisterForm({ handleSubmit }) {
  return (
    <div className="form-container register-container">
      <form action="#">
        <h1>Create Account</h1>
        <SocialContainer />
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirm_password"
        />
        <Button type="submit" onClick={handleSubmit}>
          Sign up
        </Button>
      </form>
    </div>
  );
}
