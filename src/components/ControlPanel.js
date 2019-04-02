import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {resetAction} from '../actions/resetAction';
import {startStopClickedAction} from '../actions/startStopClickedAction';
import {updateBreakLengthAction} from '../actions/updateBreakLengthAction';
import {updateSessionLengthAction} from '../actions/updateSessionLengthAction';
import * as SystemStates from '../const/systemStates';
import ControlButton from './ControlButton';
import Editor from './Editor';

const panelStyle = {
    width: '60%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '50px 50px',
    gridColumnGap: '40px',
    gridRowGap: '30px',
    margin: 'auto'
};

class ControlPanel extends React.Component{
    render(){
        return <div style={panelStyle}>
            <Editor id='session' gridRow='1' gridColumn='1' updateValue={this.props.updateSessionLength} value={this.props.sessionLength}></Editor>
            <Editor id='break' gridRow='1' gridColumn='2' updateValue={this.props.updateBreakLength} value={this.props.breakLength}></Editor>
            <ControlButton title={this.props.startButtonTitle} id='start_stop' click={this.props.startStopClick} gridRow='2' gridColumn='1'></ControlButton>
            <ControlButton title='Reset' click={this.props.resetClick} id='reset' gridRow='2' gridColumn='2'></ControlButton>
        </div>;
    }
}



ControlPanel.propTypes = {
    resetClick: PropTypes.func.isRequired,
    startStopClick: PropTypes.func.isRequired,
    updateBreakLength: PropTypes.func.isRequired,
    updateSessionLength: PropTypes.func.isRequired,
    startButtonTitle: PropTypes.string.isRequired,
    sessionLength: PropTypes.number.isRequired,
    breakLength: PropTypes.number.isRequired
};

function mapStateToProps(state){
    return {
        startButtonTitle: (state.systemState === SystemStates.IDLE || state.systemState === SystemStates.SESSION_PAUSE || state.systemState === SystemStates.BREAK_PAUSE)
                            ? 'Start' : 'Pause',
        sessionLength: state.sessionLength,
        breakLength: state.breakLength
    }
}

function mapDispatchToProps(dispatch){
    return {
        resetClick: () => dispatch(resetAction),
        startStopClick: () => dispatch(startStopClickedAction),
        updateBreakLength: value => dispatch(updateBreakLengthAction(value)),
        updateSessionLength: value => dispatch(updateSessionLengthAction(value))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
