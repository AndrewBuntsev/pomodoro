import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as SystemStates from '../const/systemStates';

const statusStyle = {
    color: '#FFFFFF',
    fontSize: '30px',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    margin: 'auto',
    marginBottom: '20px',
    textAlign: 'center' 
  };

const finalStatusStyle = {...statusStyle, color: '#FF0000'};

class TimerStatus extends React.Component{
    render(){
        return <div style={this.props.currentTime >= 60 ? statusStyle : finalStatusStyle} id='timer-label'>{this.props.label}</div>
    }
}

TimerStatus.propTypes = {
    currentTime: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
}

function mapStateToProps(state){
    return {
        currentTime: state.currentTime,
        label: (state.systemState === SystemStates.BREAK || state.systemState === SystemStates.BREAK_PAUSE) ? 'Break' : 'Session'
    };
}


export default connect(mapStateToProps, null)(TimerStatus);