import React from 'react';
import styled from 'styled-components';
import url from 'url';
import * as colors from '../constants/colors';


function getColor(status) {
  if (status < 300)
    return colors.SUCCESS;
  else if (status < 400)
    return colors.WARNING;
  else if (status < 500)
    return colors.FAILURE;
  else
    return colors.ERROR;
}

const Wrapper = styled.div`
  border-left: 3px solid ${ props => props.color };
  padding: 6px 0;
  background-color: rgba(255, 255, 255, 0);
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
  .actions {
    width: 22px;
  }
  .content {
    font-size: 0.9em;
    flex: 1;
  }
  .method {
    display: inline-block;
    width: 3.5em;
    font-size: 0.8em;
    font-weight: 500;
    vertical-align: middle;
  }
  .host {
    display: block;
    margin-top: 0.5em;
    font-size: 0.7em;
  }
`;

const Method = styled.span`
  display: inline-block;
  width: 5em;
`;

const HistoryListItem = ({ history }) => {
  const { request, response, createdAt } = history;
  const urlObject = url.parse(request.url);
  const { host, path } = urlObject;
  const color = getColor(response.status);

  return (
    <Wrapper color={ color }>
      <div className="actions">
      </div>
      <div className="content">
        <span className="method">{ request.method.toUpperCase() }</span>
        <span className="path">{ path }</span>
        <small className="host">{ host }</small>
      </div>
    </Wrapper>
  );
};

export default HistoryListItem;
