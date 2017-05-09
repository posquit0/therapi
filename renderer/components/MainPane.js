import React, { Component } from 'react';
import RequestView from './RequestView';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const MainPane = () => {
  return (
    <div className="main-pane">
      <RequestView />
    </div>
  );
};

export default MainPane;
