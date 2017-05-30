import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import Filter from './Filter';
import Divider from './Divider';
import WorkspaceView from './WorkspaceView';
import HistoryView from '../containers/HistoryView';
import './Sidebar.css';


const StyledTabs = styled(Tabs)`
  bakground: none;

  & [role=tablist] {
    display: flex;
    margin: 0;
    font-size: 0.85em;
    text-align: center;
    vertical-align: middle;
    color: #d1d3d9;
    border: none;
  }
  & [role=tab] {
    flex: 1;
    position: static;
    border: none;
    border-radius: 0;
    bottom: 0;
  }
  & [role=tab]:hover {
    color: #e1e3e9;
  }
  & [role=tab]:focus {
    box-shadow: none;
    outline: none;
  }
  & [role=tab][aria-selected=true] {
    background: none;
    border-bottom: 2px solid #16b9b6;
    color: white;
  }
`;

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        THERAPI
      </div>
      <Filter />
      <StyledTabs>
        <TabList>
          <Tab>WORKSPACE</Tab>
          <Tab>HISTORY</Tab>
        </TabList>
        <Divider color="#454643" />
        <TabPanel>
          <WorkspaceView />
        </TabPanel>
        <TabPanel>
          <HistoryView />
        </TabPanel>
      </StyledTabs>
    </div>
  );
};

export default Sidebar;
