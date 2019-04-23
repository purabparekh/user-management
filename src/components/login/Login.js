import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login } from "../../actions/session/sessionActions";

import logo from "../../assets/ic_logo_login.png";

import { Grid, Icon, Typography } from "@material-ui/core";

import Button from "@material-ui/core/Button";

import Paper from "@material-ui/core/Paper";

import AccountCircle from "@material-ui/icons/AccountCircle";

import TextField from "@material-ui/core/TextField";
import { validateUser } from "../../services/UserService";

import "./login.css";
// import { Redirect } from "react-router";

import store from "../../store";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
      // userLoggedIn: false
    };
  }

  unsubscribe = null;
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      // console.log(store.getState().sessionReducer ? true : false);
      if (store.getState().sessionReducer) {
        this.props.history.push("/");
      }
      // this.setState({
      //   userLoggedIn: store.getState().sessionReducer ? true : false
      // });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    const user = validateUser(username, password);
    if (user) {
      // console.log("Valid credentials...", user);
      this.props.login(user);
      // this.props.history.push("/");
    } else {
      alert("Invalid username or password!");
    }
  };

  render() {
    // console.log("Login");
    return (
      <>
        {/* {this.state.userLoggedIn && <Redirect to="/" />} */}
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="background-image"
        >
          <Grid item xs={5}>
            <Paper>
              <Grid container direction="row" spacing={16}>
                <Grid item className="logo-background">
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    className="height-100-percent"
                  >
                    <Grid item xs={10}>
                      <img src={logo} alt="Logo" className="logo" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item className="padding-16">
                  <Grid container direction="row" justify="center">
                    <Grid item>
                      <Grid container direction="column">
                        <div>
                          <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                              <AccountCircle />
                            </Grid>
                            <Grid item>
                              <TextField
                                name="username"
                                label="Username"
                                onChange={this.handleChange}
                                fullWidth
                                required
                              />
                            </Grid>
                          </Grid>
                        </div>
                        <div className="margin-top-8">
                          <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                              <Icon>lock</Icon>
                            </Grid>
                            <Grid item>
                              <TextField
                                name="password"
                                type="password"
                                label="Password"
                                onChange={this.handleChange}
                                fullWidth
                                required
                              />
                            </Grid>
                          </Grid>
                        </div>
                        <Grid
                          container
                          spacing={8}
                          justify="flex-end"
                          alignItems="center"
                          className="margin-top-8"
                        >
                          <Grid item>
                            <Typography>Forgot password?</Typography>
                          </Grid>
                          <Grid item>
                            <Button
                              variant="contained"
                              onClick={() => this.handleLogin()}
                              color="primary"
                            >
                              Login
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

// export default Login;

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(login(payload))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Login)
);
