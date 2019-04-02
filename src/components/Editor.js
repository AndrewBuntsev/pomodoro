import React from 'react';
import PropTypes from 'prop-types';

import Arrow from './Arrow';


export default class Editor extends React.Component{
    increaseValue = () => {
        if (this.props.value < 60 * 60){
            this.props.updateValue(60);
        }
    }
    decreaseValue = () => {
        if (this.props.value > 60){
            this.props.updateValue(-60);
        }
    }

    render(){
        return <div id={this.props.id} style={{
            gridRow: this.props.gridRow,
            gridColumn: this.props.gridColumn,
            margin: 'auto',
            textAlign: 'center'
        }}>
            <div style={{
                display: 'grid',
                gridTemplateRows: '25px 50px',
                gridTemplateColumns: '1fr 2fr 1fr',
                alignItems: 'center',
                justifyItems: 'center'
            }}>
                <span style={{
                    gridRow: '1',
                    gridColumn: '2',
                    color: '#FFFFFF',
                    fontFamily: 'Arial',
                    fontSize: '20px',
                    whiteSpace: 'nowrap'
                }} id={this.props.id + '-label'}>{phraseToCapital(this.props.id + ' length')}</span>
                <Arrow gridRow='2' gridColumn='1' orientation='left' id={this.props.id + '-decrement'} click={this.decreaseValue}></Arrow>
                <span style={{
                    gridRow: '2',
                    gridColumn: '2',
                    color: '#FFFFFF',
                    fontFamily: 'Arial',
                    fontSize: '20px'
                }} id={this.props.id + '-length'}>{this.props.value / 60}</span>
                <Arrow gridRow='2' gridColumn='3' orientation='right' id={this.props.id + '-increment'} click={this.increaseValue}></Arrow>
            </div>
        </div>
        
        
        
    }
}

Editor.propTypes = {
    id: PropTypes.string.isRequired,
    gridRow: PropTypes.string.isRequired,
    gridColumn: PropTypes.string.isRequired,
    updateValue: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};


function phraseToCapital(phrase){
    return phrase.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}