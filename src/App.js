import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

import { handleInitialData } from './actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

function isEmpty(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

function mapStateToProps({ questions, users }) {
  return {
    loading: isEmpty(questions) || isEmpty(users),
  };
}

export default connect(mapStateToProps)(App);
