import React, { Component } from 'react';
import './QueryResults.css';

class QueryResults extends Component {
  render() {
    return (
      <ul className="QueryResults">
        <li className="QueryResults-item QueryResults-notice">Enter query string, press submit and results will be displayed here.</li>
      </ul>
    );
  }
}

export default QueryResults;
