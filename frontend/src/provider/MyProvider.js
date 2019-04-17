import React, { Component } from "react";

export const MyContext = React.createContext();

class MyProvider extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: ""
    };
  }

  loginUser = currentUser => {
    this.setState({
      currentUser: currentUser
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          functions: { loginUser: this.loginUser }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
