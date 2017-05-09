import React from 'react';
import { connect } from 'react-redux';
import ResponseViewComponent from '../components/ResponseView';


const mapStateToProps = (state) => {
  return {
    response: state.local.response
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const ResponseView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResponseViewComponent);

export default ResponseView;
