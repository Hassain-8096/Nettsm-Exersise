import React, { Component } from "react";
import "./login.css"; 

class Login extends Component {
  state = {
    isLoggedIn: false,
  };

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let displayMessage;

    if (this.state.isLoggedIn) {
      displayMessage = (
        <div>
          <h1>Welcome user!</h1>
          <button className="logout-button" onClick={this.handleLogout}>
            Logout
          </button>
        </div>
      );
    } else {
      displayMessage = (
        <div>
          <h1>Please login</h1>
          <button className="login-button" onClick={this.handleLogin}>
            Login
          </button>
        </div>
      );
    }

    return (
      <div className="container"> {/* Use a class for styling */}
        <div className="login-box">
          {displayMessage}
        </div>
      </div>
    );
  }
}

export default Login;