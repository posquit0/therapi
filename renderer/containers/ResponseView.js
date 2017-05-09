import React from 'react';
import { connect } from 'react-redux';
import ResponseViewComponent from '../components/ResponseView';


const mapStateToProps = (state = {}) => {
  const { response } = state;

  return {
    response
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
