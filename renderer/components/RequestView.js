import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RequestUrlBar from './RequestUrlBar';
import RequestBodyView from './RequestBodyView';
import RequestQueryView from './RequestQueryView';
import RequestHeaderView from './RequestHeaderView';
import RequestAuthView from './RequestAuthView';
import './RequestView.css';


const RequestView = ({ request, onRequest }) => {
  const { method, url, query, data, headers } = request || {};

  return (
    <div className="request-view">
      <RequestUrlBar method={ method } url={ url } onRequest={ onRequest } />
      <Tabs className="request-tabs">
        <TabList>
          <Tab>Body</Tab>
          <Tab>Query</Tab>
          <Tab>Header</Tab>
          <Tab>Auth</Tab>
        </TabList>
        <TabPanel className="request-tab">
          <RequestBodyView data={ data } />
        </TabPanel>
        <TabPanel className="request-tab">
          <RequestQueryView query={ query } />
        </TabPanel>
        <TabPanel className="request-tab">
          <RequestHeaderView headers={ headers } />
        </TabPanel>
        <TabPanel className="request-tab">
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