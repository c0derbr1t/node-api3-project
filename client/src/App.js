import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Users from './components/Users';
import Welcome from './components/Welcome';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/users' component={Users} />
        <Route path='/' component={Welcome} />
      </Switch>
    </div>
  );
}

export default App;
