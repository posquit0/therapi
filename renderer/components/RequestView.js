import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Divider from './Divider';
import RequestUrlBar from './RequestUrlBar';
import RequestBodyView from './RequestBodyView';
import RequestQueryView from './RequestQueryView';
import RequestHeaderView from './RequestHeaderView';
import RequestAuthView from './RequestAuthView';
import './RequestView.css';


const RequestView = ({ request, onRequest, onUrlChange }) => {
  const { method, url, query, data, headers } = request || {};

  return (
    <div className="request-view">
      <RequestUrlBar
        method={ method }
        url={ url }
        onRequest={ onRequest }
        onUrlChange={ onUrlChange } />
      <Divider />
      <Tabs className={ ['request-tabs', 'react-tabs'] }>
        <TabList>
          <Tab>Body</Tab>
          <Tab>Query</Tab>
          <Tab>Header</Tab>
          <Tab>Auth</Tab>
        </TabList>
        <TabPanel className={ ['request-tab', 'react-tabs__tab-panel'] }>
          <RequestBodyView data={ data } />
        </TabPanel>
        <TabPanel className={ ['request-tab', 'react-tabs__tab-panel'] }>
          <RequestQueryView query={ query } />
        </TabPanel>
        <TabPanel className={ ['request-tab', 'react-tabs__tab-panel'] }>
          <RequestHeaderView headers={ headers } />
        </TabPanel>
        <TabPanel className={ ['request-tab', 'react-tabs__tab-panel'] }>
          <RequestAuthView />
        </TabPanel>
      </Tabs>
    </div>
  );
};

// TODO: PropTypes
RequestView.propTypes = {
  onRequest: PropTypes.func.isRequired
};

export default RequestView;