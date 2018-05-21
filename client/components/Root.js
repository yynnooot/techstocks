import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import SingleStock from './SingleStock';

const Root = () => 
  (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:ticker' component={SingleStock} />
        </Switch>
      </Router>
  )

export default Root;
