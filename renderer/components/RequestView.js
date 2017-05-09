import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RequestUrlBar from '../containers/RequestUrlBar';
import './RequestView.css';


class RequestView extends Component {
  render() {
    return (
      <div className="request-view">
        <RequestUrlBar />
        <Tabs className="request-tabs">
          <TabList>
            <Tab>Body</Tab>
            <Tab>Query</Tab>
            <Tab>Header</Tab>
            <Tab>Auth</Tab>
          </TabList>
          <TabPanel className="request-tab">
            Hello
          </TabPanel>
          <TabPanel className="request-tab">
            World
          </TabPanel>
          <TabPanel className="request-tab">
            World
          </TabPanel>
          <TabPanel className="request-tab">
            Hello
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default RequestView;