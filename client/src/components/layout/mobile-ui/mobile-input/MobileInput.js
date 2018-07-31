import React, { Component } from 'react';
import './MobileInput.css';

class MobileInput extends Component {
  render() {
    return (
      <div className="MobileInput">
        <label className="MobileInput-wrapper">{ this.props.inputNumber }</label>
      </div>
    );
  }
}

export default MobileInput;
