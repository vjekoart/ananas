import React, { Component } from 'react';
import './MobileButton.css';

class MobileButton extends Component {
  render() {
    return (
      <a className="MobileButton">
        <div className="MobileButton-container">
          <p><strong>{this.props.title}</strong></p>
          <p>{this.props.subtitle}</p>
        </div>
      </a>
    );
  }
}

export default MobileButton;
