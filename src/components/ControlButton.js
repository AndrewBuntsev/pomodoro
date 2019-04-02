import React from 'react';
import PropTypes from 'prop-types';

const NORMAL_BACKGROUND = '#C13100';
const MOUSE_HOVER_BACKGROUND = '#D64615';
const TEXT_STYLE = {
    color: '#FFFFFF',
    fontSize: '25px',
    margin: 'auto',
    marginTop: '5px',
    textAlign: 'center'
};

export default class ControlButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {background: NORMAL_BACKGROUND};
    }

    onMouseEnter = e => this.setState({background: MOUSE_HOVER_BACKGROUND});

    onMouseLeave = e => this.setState({background: NORMAL_BACKGROUND});

    render(){
        return <div id={this.props.id} style={{
            background: this.state.background,
            gridRow: this.props.gridRow,
            gridColumn: this.props.gridColumn,
            borderRadius: '7px',
            cursor: 'pointer'
        }} onClick={this.props.click} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
            <div style={TEXT_STYLE}>{this.props.title}</div>
        </div>;
    }
}

ControlButton.propTypes = {
    id: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    gridRow: PropTypes.string.isRequired,
    gridColumn: PropTypes.string.isRequired
};

