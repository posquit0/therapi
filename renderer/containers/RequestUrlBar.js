import React from 'react';
import { connect } from 'react-redux';
import RequestUrlBarComponent from '../components/RequestUrlBar';
import { sendRequest } from '../actions/request';


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequest: () => dispatch(sendRequest())
  };
};

const RequestUrlBar = connect(
  mapStateToProps, mapDispatchToProps
)(RequestUrlBarComponent);

export default RequestUrlBar;
