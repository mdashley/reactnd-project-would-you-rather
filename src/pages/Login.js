import React, { Component } from 'react';
import './Login.css';
import logo from '../logo.svg';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div className="Login-container">
        <div className="Login-card">
          <img className="Login-logo" src={logo} alt="WYR Logo" />
          <form onSubmit={this.handleSubmit}>
            <TextField
              label="Username"
              type="text"
              margin="normal"
              variant="outlined"
              value={this.state.username}
              onChange={this.changeHandler}
              name="username"
            />
            <TextField
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              value={this.state.password}
              onChange={this.changeHandler}
              name="password"
            />
            <Fab
              className="Login-btn--primary"
              variant="extended"
              size="medium"
              color="primary"
              aria-label="login"
            >
              Login
            </Fab>
            <Button
              className="Login-btn--secondary"
              color="primary"
              type="submit"
            >
              Login as existing user
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
