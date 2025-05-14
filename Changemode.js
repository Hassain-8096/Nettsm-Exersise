import React, { Component } from "react";
import "./mode.css";

class Changemode extends Component {
  state = {
    isDarkMode: false,
  };

  toggleMode = () => {
    this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }));
  };

  authRender = () => {
    return (
      <button onClick={this.toggleMode}>
        {this.state.isDarkMode ? "LightMode" : "DarkMode"}
      </button>
    );
  };

  render() {
    const { isDarkMode } = this.state;
    return (
      <div className={`mode ${isDarkMode ? "dark" : "light"}`}>
        <h1>Click to change mode</h1>
        {this.authRender()}
      </div>
    );
  }
}

export default Changemode;