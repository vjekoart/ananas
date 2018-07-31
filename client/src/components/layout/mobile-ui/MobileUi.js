import React, { Component } from 'react';
import './MobileUi.css';

import convertNumbers from '../../../api.js';

import MobileInput from './mobile-input/MobileInput.js';
import MobileSuggestions from './mobile-suggestions/MobileSuggestions.js';
import MobileKeyboard from './mobile-keyboard/MobileKeyboard.js';

class MobileUi extends Component {
  constructor(props) {
    super(props);

    this.state = { inputNumber: '', results: [] };

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  async buttonClicked(buttonValue) {
    const oldValue = this.state.inputNumber;
    const newValue = buttonValue === '#' ? '' : oldValue + buttonValue;

    this.setState({ inputNumber: newValue });

    await this.updateSuggestions(newValue);
  }

  async updateSuggestions(value) {
    const results = await convertNumbers(value);

    this.setState({ results: results || [] });
  }

  render() {
    return (
      <section className="MobileUi">
        <h2 className="MobileUi-title">Mobile UI</h2>
        <MobileInput inputNumber={ this.state.inputNumber } />
        <MobileSuggestions results={ this.state.results } />
        <MobileKeyboard emitButtonClick={ this.buttonClicked } />
      </section>
    );
  }
}

export default MobileUi;
