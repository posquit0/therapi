import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Divider from './Divider';
import ResponseStatusBar from './ResponseStatusBar';
import ResponseBodyView from './ResponseBodyView';
import ResponseHeaderView from './ResponseHeaderView';
import './ResponseView.css';


class ResponseView extends Component {
  render() {
    const { response } = this.props;
    const { status, statusText, headers, data, latency } = response;
    const size = parseInt(headers['content-length']);

    return (
      <div className="response-view">
        <ResponseStatusBar
          status={ status }
          statusText={ statusText }
          time={ latency }
          size={ size } />
        <Divider />
      <Tabs className={ ['response-tabs', 'react-tabs'] }>
          <TabList>
            <Tab>Body</Tab>
            <Tab>Cookie</Tab>
            <Tab>Header</Tab>
          </TabList>
        <TabPanel className={ ['response-tab', 'react-tabs__tab-panel'] }>
            <ResponseBodyView data={ data } />
          </TabPanel>
        <TabPanel className={ ['response-tab', 'react-tabs__tab-panel'] }>
            2
          </TabPanel>
        <TabPanel className={ ['response-tab', 'react-tabs__tab-panel'] }>
            <ResponseHeaderView headers={ headers } />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default ResponseView;