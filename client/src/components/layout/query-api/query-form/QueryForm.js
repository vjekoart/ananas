import React, { Component } from 'react';
import './QueryForm.css';

import convertNumbers from '../../../../api.js';

class QueryForm extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const queryResults = await convertNumbers(this.state.value);

    this.props.updateQueryResults(queryResults);
  }

  render() {
    return (
      <form className="QueryForm" onSubmit={ this.handleSubmit }>
        <input className="QueryForm-input" type="text" value={ this.state.value } onChange={ this.handleChange } />
        <button className="QueryForm-button" type="submit">Submit</button>
      </form>
    );
  }
}

export default QueryForm;
