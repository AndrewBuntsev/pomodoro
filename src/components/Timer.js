import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as SystemStates from '../const/systemStates';
import {tickAction} from '../actions/tickAction';
import { PlayBeep } from '../beepController';

const timerStyle = {
    color: '#FFFFFF',
    fontSize: '80px',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    margin: 'auto',
    marginBottom: '0px',
    textAlign: 'center' 
};

const finalTimerStyle = {...timerStyle, color: '#FF0000'};


class Timer extends React.Component{
    constructor(props){
        super(props);
        this.interval = 0;
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.systemState === this.props.systemState) return;

        if (nextProps.systemState === SystemStates.IDLE || nextProps.systemState === SystemStates.SESSION_PAUSE || nextProps.systemState === SystemStates.BREAK_PAUSE){
            clearInterval(this.interval);
        }else{
            clearInterval(this.interval);
            this.interval = setInterval(() => {
                this.props.tick();
            }, 1000);
        }
    }

    render(){
        let minutes = Math.floor(this.props.currentTime / 60);
        let seconds = this.props.currentTime - minutes*60;
        let timeString = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        return <div id='time-left' style={this.props.currentTime >= 60 ? timerStyle : finalTimerStyle}>{timeString}</div>;
    }
}

Timer.propTypes = {
    currentTime: PropTypes.number.isRequired,
    systemState: PropTypes.oneOf([SystemStates.IDLE, SystemStates.SESSION, SystemStates.SESSION_PAUSE, SystemStates.BREAK, SystemStates.BREAK_PAUSE]),
    tick: PropTypes.func.isRequired
};

function mapStateToProps(state){
    if (state.currentTime === 0){
        PlayBeep();
    }
    return {
        currentTime: state.currentTime,
        systemState: state.systemState
    };
}

function mapDispatchToProps(dispatch){
    return {
        tick: () => dispatch(tickAction)
    };
}




export default connect(mapStateToProps, mapDispatchToProps)(Timer);