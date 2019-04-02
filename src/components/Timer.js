import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as SystemStates from '../const/systemStates';
import {tickAction} from '../actions/tickAction';

const timerStyle = {
    color: '#FFFFFF',
    fontSize: '80px',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    margin: 'auto',
    marginBottom: '0px',
    textAlign: 'center' 
};


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
            this.interval = setInterval(() => {
                this.props.tick();
            }, 1000);
        }
    }

    render(){
        let minutes = Math.floor(this.props.currentTime / 60);
        let seconds = this.props.currentTime - minutes*60;
        let timeString = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        return <div id='time-left' style={timerStyle}>{timeString}</div>;
    }
}

Timer.propTypes = {
    currentTime: PropTypes.number.isRequired,
    systemState: PropTypes.oneOf([SystemStates.IDLE, SystemStates.SESSION, SystemStates.SESSION_PAUSE, SystemStates.BREAK, SystemStates.BREAK_PAUSE]),
    tick: PropTypes.func.isRequired
};

function mapStateToProps(state){
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