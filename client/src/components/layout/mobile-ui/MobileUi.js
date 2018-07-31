import React, { Component } from 'react';
import './MobileUi.css';

import MobileInput from './mobile-input/MobileInput.js';
import MobileSuggestions from './mobile-suggestions/MobileSuggestions.js';
import MobileKeyboard from './mobile-keyboard/MobileKeyboard.js';

class MobileUi extends Component {
  render() {
    return (
      <section className="MobileUi">
        <h2 className="MobileUi-title">Mobile UI</h2>
        <MobileInput />
        <MobileSuggestions />
        <MobileKeyboard />
      </section>
    );
  }
}

export default MobileUi;
