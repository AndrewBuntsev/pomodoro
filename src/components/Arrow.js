import React from 'react';
import PropTypes from 'prop-types';

const NORMAL_BACKGROUND = '#FF9A2E';
const MOUSE_HOVER_BACKGROUND = '#FFBF72';
const SIZE = 20;


export default class Arrow extends React.Component{
    constructor(props){
        super(props);
        this.state = { background: NORMAL_BACKGROUND };
    }

    onMouseEnter = e => this.setState({background: MOUSE_HOVER_BACKGROUND});

    onMouseLeave = e => this.setState({background: NORMAL_BACKGROUND});

    render(){
        return <div id={this.props.id} style={{
            width: 0,
            height: 0,
            cursor: 'pointer',
            borderTop: SIZE + 'px solid transparent',
            borderBottom: SIZE + 'px solid transparent',
            borderRight: (this.props.orientation === 'left' ? SIZE : 0) + 'px solid ' + this.state.background,
            borderLeft: (this.props.orientation === 'right' ? SIZE : 0) + 'px solid ' + this.state.background,
            gridRow: this.props.gridRow,
            gridColumn: this.props.gridColumn
        }} onClick={this.props.click} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        </div>;
    }
}

Arrow.propTypes = {
    id: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
    gridRow: PropTypes.string.isRequired,
    gridColumn: PropTypes.string.isRequired,
    orientation: PropTypes.string.isRequired
};

