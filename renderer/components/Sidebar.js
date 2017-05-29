import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Filter from './Filter';
import WorkspaceView from './WorkspaceView';
import HistoryView from '../containers/HistoryView';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        THERAPI
      </div>
      <Filter />
      <Tabs className="sidebar-tabs">
        <TabList>
          <Tab>WORKSPACE</Tab>
          <Tab>HISTORY</Tab>
        </TabList>
        <TabPanel className="sidebar-tab">
          <WorkspaceView />
        </TabPanel>
        <TabPanel className="sidebar-tab">
          <HistoryView />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Sidebar;
