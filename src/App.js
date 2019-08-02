import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
