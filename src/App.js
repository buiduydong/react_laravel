import React, { Component } from 'react'
import './assets/css/zmix.scss';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from './route/AppRoute'
import 'animate.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <AppRoute />
        </Router>
      </div>
    )
  }
}

export default App
