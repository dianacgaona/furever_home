import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Typography, Avatar } from "@material-ui/core";
import { MyContext } from "../provider/MyProvider";

import "../css/navbar.css";
let logo = require("../assets/logo.png");

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class Bar extends React.Component {
  state = {
    value: 2
  };


  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <MyContext.Consumer>
        {context => {
          return (
            <div className="navbarContainer">
              <div className={classes.root}>
                <AppBar position="static">
                  <Tabs
                    value={value}
                    onChange={this.handleChange}
                    className="navbar"
                  >
                    <div className="logoContainer">
                      <NavLink to={"/"} className="logoLink">
                        <img src={logo} alt="" className="logo" />
                      </NavLink>
                    </div>

                    <div className="fureverHome">
                      <NavLink to={"/"} className="brand_name">
                        furever home
                      </NavLink>
                    </div>
                    <Tab
                      label="ANIMALS"
                      style={{
                        color: "#001049",
                        fontSize: "20px",
                        marginLeft: "5%"
                      }}
                      className="iLinks"
                    />

                    <Tab
                      label="COMMUNITY"
                      style={{ color: "#001049", fontSize: "20px" }}
                      className="iLinks"
                    />

                    {context.state.currentUser.username ? (
                      <div className="leftCorner">
                        <div className="username">
                          <NavLink to={`/user/${context.state.currentUser.id}`}>
                            <div className="usernameCont">
                              <Avatar
                                alt="Remy Sharp"
                                src={context.state.currentUser.profile_picture}
                                style={{
                                  marginTop: "-28%",
                                  width: "50px",
                                  height: "50px"
                                }}
                              />
                            </div>
                          </NavLink>
                          <NavLink
                            to={`/user/${context.state.currentUser.id}`}
                            className="username"
                          >
                            {context.state.currentUser.username}
                          </NavLink>

                          <button
                            type="button"
                            onClick={context.functions.logoutUser}
                            className="logout"
                          >
                            logout
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="loginCont">
                        <NavLink
                          to={"/login"}
                          className="register"
                          style={{ fontSize: "15px" }}
                        >
                          LOGIN / REGISTER
                        </NavLink>
                      </div>
                    )}
                  </Tabs>
                </AppBar>

                <div className="navlinks">
                  <div className="dogs">
                    {value === 2 && (
                      <TabContainer>
                        <Link to="/dogs" style={{ fontSize: "15px" }}>
                          DOGS
                        </Link>
                      </TabContainer>
                    )}
                  </div>

                  <div className="cats">
                    {value === 2 && (
                      <TabContainer>
                        <Link
                          to="/cats"
                          style={{ fontSize: "15px", paddingLeft: "0%" }}
                        >
                          CATS
                        </Link>
                      </TabContainer>
                    )}
                  </div>
                </div>

                <div className="navlinks">
                  <div className="subBar">
                    {value === 3 && (
                      <TabContainer>
                        <Link component={RouterLink} to="/dog-care">
                          DOG CARE
                        </Link>
                      </TabContainer>
                    )}
                    {value === 3 && (
                      <TabContainer>
                        <Link component={RouterLink} to="/cat-care">
                          CAT CARE
                        </Link>
                      </TabContainer>
                    )}
                    {value === 3 && (
                      <TabContainer>
                        <Link component={RouterLink} to="/shelters-rescues">
                          SHELTERS & RESCUES
                        </Link>
                      </TabContainer>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

Bar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bar);
