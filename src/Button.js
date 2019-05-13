import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Button.css'; // Tell Webpack that Button.js uses these styles

export default class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <Link className="Button" to={this.props.linkName}>{this.props.name}</Link>;
  }
}
