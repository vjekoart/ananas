import React, { Component } from 'react';
import './QueryApi.css';

import QueryForm from './query-form/QueryForm.js';
import QueryResults from './query-results/QueryResults.js';

class QueryApi extends Component {
  constructor(props) {
    super(props);

    this.state = { results: [] };

    this.updatedQueryResults = this.updatedQueryResults.bind(this);
  }

  updatedQueryResults(newResults) {
    this.setState({ results: newResults });
  }

  render() {
    return (
      <section className="QueryApi">
        <h2 className="QueryApi-title">Query API</h2>
        <QueryForm updateQueryResults={ this.updatedQueryResults } />
        <QueryResults results={ this.state.results } />
      </section>
    );
  }
}

export default QueryApi;
