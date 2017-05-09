import React from 'react';
import { connect } from 'react-redux';
import RequestViewComponent from '../components/RequestView';
import { sendRequest } from '../actions/request';


const mapStateToProps = (state) => {
  return {
    request: state.local.request
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequest: () => dispatch(sendRequest())
  };
};

const RequestView = connect(
  mapStateToProps, mapDispatchToProps
)(RequestViewComponent);

export default RequestView;
