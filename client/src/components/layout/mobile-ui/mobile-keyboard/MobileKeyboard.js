import React, { Component } from 'react';
import './MobileKeyboard.css';

import MobileButton from './mobile-button/MobileButton.js';

class MobileKeyboard extends Component {
  constructor(props) {
    super(props);

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(buttonValue) {
    this.props.emitButtonClick(buttonValue);
  }

  render() {
    return (
      <div className="MobileKeyboard">
        <MobileButton title="1" subtitle="-" />
        <MobileButton title="2" emitButtonClick={ this.buttonClicked } subtitle="ABC" />
        <MobileButton title="3" emitButtonClick={ this.buttonClicked } subtitle="DEF" />
        <MobileButton title="4" emitButtonClick={ this.buttonClicked } subtitle="GHI" />
        <MobileButton title="5" emitButtonClick={ this.buttonClicked } subtitle="JKL" />
        <MobileButton title="6" emitButtonClick={ this.buttonClicked } subtitle="MNO" />
        <MobileButton title="7" emitButtonClick={ this.buttonClicked } subtitle="PQRS" />
        <MobileButton title="8" emitButtonClick={ this.buttonClicked } subtitle="TUV" />
        <MobileButton title="9" emitButtonClick={ this.buttonClicked } subtitle="WXYZ" />
        <MobileButton title="*" subtitle="-" />
        <MobileButton title="0" subtitle="-" />
        <MobileButton title="#" emitButtonClick={ this.buttonClicked } subtitle="Clear" />
      </div>
    );
  }
}

export default MobileKeyboard;
