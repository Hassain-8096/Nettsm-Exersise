import React, { Component } from "react";
import "./mode.css";

class Welcome extends Component {
  state = {
    isDarkMode: false,
  };

  toggleMode = () => {
    this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }));
  };

  authRender = () => {
    return (
      <button className="button" onClick={this.toggleMode}>
        {this.state.isDarkMode ? "Subscribe" : "Subscribed"}
      </button>
    );
  };

  render() {
    const { isDarkMode } = this.state;
    return (
      <div className={`mode ${isDarkMode ? "dark" : "light"}`}>
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {this.authRender()}
      </div>
    );
  }
}

export default Welcome;