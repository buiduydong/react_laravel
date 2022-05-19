import React, { Component } from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

export class AppRoute extends Component {
  render() {
    return (
        <Routes>
      <Route path="/" >
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />}>
        </Route>
      </Route>
    </Routes>
    )
  }
}

export default AppRoute
