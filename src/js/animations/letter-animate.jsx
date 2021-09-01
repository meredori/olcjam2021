import React from 'react';
import anime from 'animejs'

class LetterAnimate extends React.Component {

    render() {
        return <span className="letter">{this.props.letter}</span>;
    }
}

export default LetterAnimate;