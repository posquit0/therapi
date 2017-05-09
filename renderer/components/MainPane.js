import React, { Component } from 'react';
import RequestView from '../containers/RequestView';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const MainPane = () => {
  return (
    <div className="main-pane">
      <RequestView />
    </div>
  );
};

export default MainPane;
