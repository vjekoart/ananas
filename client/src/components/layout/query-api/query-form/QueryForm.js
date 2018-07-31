import React, { Component } from 'react';
import './QueryForm.css';

class QueryForm extends Component {
  render() {
    return (
      <form className="QueryForm">
        <input className="QueryForm-input" type="text" />
        <button className="QueryForm-button" type="submit">Submit</button>
      </form>
    );
  }
}

export default QueryForm;
