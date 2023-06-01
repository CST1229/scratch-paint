import React from 'react';
import PropTypes from 'prop-types';
import ToolSelectComponent from '../tool-select-base/tool-select-base.jsx';
import messages from '../../lib/messages.js';
import digonIcon from './digon.svg';

const DigonModeComponent = props => (
    <ToolSelectComponent
        imgDescriptor={messages.oval}
        imgSrc={digonIcon}
        isSelected={props.isSelected}
        onMouseDown={props.onMouseDown}
    />
);

DigonModeComponent.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onMouseDown: PropTypes.func.isRequired
};

export default DigonModeComponent;
