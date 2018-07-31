import React, { Component } from 'react';
import './QueryApi.css';

import QueryForm from './query-form/QueryForm.js';
import QueryResults from './query-results/QueryResults.js';

class QueryApi extends Component {
  render() {
    return (
      <section className="QueryApi">
        <h2 className="QueryApi-title">Query API</h2>
        <QueryForm />
        <QueryResults />
      </section>
    );
  }
}

export default QueryApi;
