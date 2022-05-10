import React from 'react';
import './../index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from './Nav';
import { Home } from './Home';
import { Popular } from './Popular';
import { Battle } from './Battle';
import { NotFound } from './NotFound';

export const App = () => (
  <Router>
    <div className='container'>
      <Nav />
      <Switch>
        <Route exact path = '/' component ={ Home } />
        <Route exact path = '/popular' component = { Popular } />
        <Route exact path = '/battle' component = { Battle } />
        <Route component = { NotFound } />
      </Switch>
    </div>
  </Router>
);
