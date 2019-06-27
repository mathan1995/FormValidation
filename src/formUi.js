import React, { Component } from "react";
import "./App.css";
class UserForm extends Component {
  render() {
    return (
      <div>
        <h1>Form Validation</h1>
        <form>
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              noValidate
            />
            <span style={{ color: "red" }}> Firstname Error Message</span>
          </div>

          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              noValidate
            />
            <span style={{ color: "red" }}> Lastname Error Message</span>
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input placeholder="Email" type="email" name="email" noValidate />
            <span style={{ color: "red" }}> email Error Message</span>
          </div>

          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Password"
              type="password"
              name="password"
              noValidate
            />
            <span style={{ color: "red" }}> Password Error Message</span>
          </div>
          <div className="createAccount">
            <button type="submit">Create Account</button>
            <small>Already Have an Account?</small>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;
