import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './RequestUrlBar.css'


const methodOptions = [
  { label: 'GET', value: 'get' },
  { label: 'POST', value: 'post' },
  { label: 'PUT', value: 'put' },
  { label: 'PATCH', value: 'patch' },
  { label: 'DELETE', value: 'delete' },
  { label: 'HEAD', value: 'head' },
  { label: 'OPTIONS', value: 'options' }
];

class RequestUrlBar extends Component {

  renderMethodSelect() {
    const logChange = val => console.log(val);
    return (
      <Select
        className="request-method"
        name="request-method"
        value="get"
        options={ methodOptions }
        onChange={ logChange }
        clearable="false"
      />
    );
  }

  renderButton() {
    // TODO: Send / Cancel
    return (
      <button onClick={ this.props.onRequest }>Send</button>
    );
  }

  render() {
    // TODO: handleAutocompleteUrls
    const { url, method, onRequest, onCancel } = this.props;

    return (
      <div className="request-url-bar">
        { this.renderMethodSelect() }
        <input type="text" className="request-url" onChange={ this.props.onUrlChange } />
        { this.renderButton() }
      </div>
    );
  }
};

// TODO: PropTypes
RequestUrlBar.propTypes = {
  onRequest: PropTypes.func.isRequired
};

export default RequestUrlBar;

