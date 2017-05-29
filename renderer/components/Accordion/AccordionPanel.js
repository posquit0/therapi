import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { CARET_RIGHT, CARET_DOWN } from '../../constants/icons';


const Wrapper = styled.div`
  .panel-heading {
    display: inline-block;
    padding: 5px 0;
    font-size: 0.9em;
  }
  .panel-heading * {
    vertical-align: middle;
  }
  .panel-heading input[type=checkbox] {
    display: none;
    visibility: hidden;
  }
  .panel-content {
    max-height: ${props => props.active ? 500 : 0}px;
    overflow: hidden;
    transition: max-height 1.2s;
  }
`;

class AccordionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  onToggle(event) {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const { heading, children } = this.props;
    const { active } = this.state;
    const icon = active ? CARET_DOWN : CARET_RIGHT;

    return (
      <Wrapper active={ active }>
        <label className="panel-heading">
          <input
            type="checkbox"
            checked={ active }
            onChange={ event => this.onToggle(event) }
          />
          <Icon icon={ icon } />
          <span>{ heading }</span>
        </label>
        <div className="panel-content">
          { children }
        </div>
      </Wrapper>
    );
  }
}

AccordionPanel.propTypes = {
};

export default AccordionPanel;
