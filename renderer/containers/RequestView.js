import React from 'react';
import { connect } from 'react-redux';
import RequestViewComponent from '../components/RequestView';
import { sendRequest, changeRequestUrl } from '../actions/request';


const mapStateToProps = (state) => {
  return {
    request: state.local.request
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRequest: () => dispatch(sendRequest()),
    onUrlChange: (event) => dispatch(changeRequestUrl(event.target.value))
  };
};

const RequestView = connect(
  mapStateToProps, mapDispatchToProps
)(RequestViewComponent);

export default RequestView;
