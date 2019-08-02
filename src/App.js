import React from 'react';
import { Route } from 'react-router-dom';

import Login from './pages/Login';

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
