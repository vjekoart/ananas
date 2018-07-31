import React, { Component } from 'react';
import ananas from './ananas.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header" role="main">
        <img src={ananas} className="Header-logo" alt="ananas" />
      </header>
    );
  }
}

export default Header;
