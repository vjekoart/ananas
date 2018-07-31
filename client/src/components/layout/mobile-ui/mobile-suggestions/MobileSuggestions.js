import React, { Component } from 'react';
import './MobileSuggestions.css';

class MobileSuggestions extends Component {
  render() {
    const haveItems = this.props.results && this.props.results.length;
    let items;

    if (haveItems) {
      items = [];

      for (let i = 0; i < this.props.results.length; ++i) {
        const word = this.props.results[i];
        items.push(<li key={ word } className="MobileSuggestions-item">{ word }</li>);
      }
    } else {
      items = <li className="MobileSuggestions-item">There are no suggestions.</li>;
    }

    return (
      <ul className="MobileSuggestions">
        { items }
      </ul>
    );
  }
}

export default MobileSuggestions;
