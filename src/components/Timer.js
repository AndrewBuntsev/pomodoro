import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Timer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>{this.props.currentTime}</div>;
    }

    
}

Timer.propTypes = {
    currentTime: PropTypes.number.isRequired
};

function mapStateToProps(state){
    return {
        currentTime: state.currentTime
    };
}




export default connect(mapStateToProps, null)(Timer);