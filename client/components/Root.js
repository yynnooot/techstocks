import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Home from './Home';

export default class Root extends Component {
  render(){
    return(
      <div>
        <div>
          <h1>HELLO FROM ROOT</h1>
        </div>
        <Home /> 
      </div>
    )
  }
}
