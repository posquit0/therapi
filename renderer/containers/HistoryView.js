import React from 'react';
import { connect } from 'react-redux';
import HistoryViewComponent from '../components/HistoryView';


const mapStateToProps = (state) => {
  return {
    history: state.db.history
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

const HistoryView = connect(
  mapStateToProps, mapDispatchToProps
)(HistoryViewComponent);

export default HistoryView;
