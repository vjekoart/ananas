import React, { Component } from 'react';
import './App.css';

import Header from './layout/header/Header.js';
import QueryApi from './layout/query-api/QueryApi.js';
import MobileUi from './layout/mobile-ui/MobileUi.js';
import Footer from './layout/footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <QueryApi />
        <MobileUi />
        <Footer />
      </div>
    );
  }
}

export default App;
