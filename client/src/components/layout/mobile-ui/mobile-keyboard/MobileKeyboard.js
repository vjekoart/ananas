import React, { Component } from 'react';
import './MobileKeyboard.css';

import MobileButton from './mobile-button/MobileButton.js';

class MobileKeyboard extends Component {
  render() {
    return (
      <div className="MobileKeyboard">
        <MobileButton title="1" subtitle="-" />
        <MobileButton title="2" subtitle="ABC" />
        <MobileButton title="3" subtitle="DEF" />
        <MobileButton title="4" subtitle="GHI" />
        <MobileButton title="5" subtitle="JKL" />
        <MobileButton title="6" subtitle="MNO" />
        <MobileButton title="7" subtitle="PQRS" />
        <MobileButton title="8" subtitle="TUV" />
        <MobileButton title="9" subtitle="WXYZ" />
        <MobileButton title="*" subtitle="-" />
        <MobileButton title="0" subtitle="-" />
        <MobileButton title="#" subtitle="Clear" />
      </div>
    );
  }
}

export default MobileKeyboard;
