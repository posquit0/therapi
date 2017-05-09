import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ResponseStatusBar from './ResponseStatusBar';
import ResponseBodyView from './ResponseBodyView';
import ResponseHeaderView from './ResponseHeaderView';
import './ResponseView.css';


class ResponseView extends Component {
  render() {
    const { response } = this.props;
    const { status, headers, data } = response;
    const time = 604;
    const size = 1684;

    return (
      <div className="response-view">
        <ResponseStatusBar status={ status } time={ time } size={ size }  />
        <Tabs className="response-tabs">
          <TabList>
            <Tab>Body</Tab>
            <Tab>Cookie</Tab>
            <Tab>Header</Tab>
          </TabList>
          <TabPanel className="response-tab">
            <ResponseBodyView data={ data } />
          </TabPanel>
          <TabPanel className="response-tab">
            2
          </TabPanel>
          <TabPanel className="response-tab">
            <ResponseHeaderView headers={ headers } />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default ResponseView;