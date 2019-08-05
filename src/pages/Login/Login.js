import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/authedUser';
import './Login.css';
import logo from '../../logo.svg';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';

class Login extends Component {
  state = {
    username: '',
  };

  changeHandler = event => {
    const value = event.target.value;

    this.setState({
      username: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username } = this.state;
    const { dispatch } = this.props;

    if (username !== '') {
      dispatch(authenticateUser(username));
      this.setState(() => ({ isLogged: true }));
    }
  };

  render() {
    const { isLogged } = this.state;
    if (isLogged) {
      const { from } = this.props.location.state || {
        from: { pathname: '/home' },
      };
      return <Redirect to={from} />;
    }

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
            />
            <Fab
              className="Login-btn--primary"
              variant="extended"
              size="medium"
              color="primary"
              aria-label="login"
              type="submit"
            >
              Login
            </Fab>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users: Object.values(users).map(user => {
      return {
        id: user.id,
        name: user.name,
      };
    }),
    username: authedUser,
  };
}

export default connect(mapStateToProps)(Login);
