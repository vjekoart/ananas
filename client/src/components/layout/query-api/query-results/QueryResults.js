import React, { Component } from 'react';
import './QueryResults.css';

class QueryResults extends Component {
  render() {
    const haveItems = this.props.results && this.props.results.length;
    let items;

    if (haveItems) {
      items = [];

      for (let i = 0; i < this.props.results.length; ++i) {
        const word = this.props.results[i];
        items.push(<li key={ word } className="QueryResults-item">{ word }</li>);
      }
    } else {
      items = <li className="QueryResults-item QueryResults-notice">Enter query string, press submit and results will be displayed here.</li>;
    }

    return (
      <ul className="QueryResults">
        { items }
      </ul>
    );
  }
}

export default QueryResults;
