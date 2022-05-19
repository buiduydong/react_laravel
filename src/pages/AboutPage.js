import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class AboutPage extends Component {
  render() {
    return (
      <div>
        about page
        <Link to="/">home</Link>
      </div>
    )
  }
}

export default AboutPage
