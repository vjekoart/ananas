import React, { Component } from 'react';
import './MobileButton.css';

class MobileButton extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    event.preventDefault();

    if (this.props.emitButtonClick)
      this.props.emitButtonClick(this.props.title);
  }

  render() {
    return (
      <a className="MobileButton" onClick={ this.handleButtonClick }>
        <div className="MobileButton-container">
          <p><strong>{ this.props.title }</strong></p>
          <p>{ this.props.subtitle }</p>
        </div>
      </a>
    );
  }
}

export default MobileButton;
