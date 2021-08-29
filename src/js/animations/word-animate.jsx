import React from 'react';
import LetterAnimate from './letter-animate.jsx';

class WordAnimate extends React.Component {
    render() {
        const letters = [...this.props.word];
        return letters.map((letter, index) => 
        <LetterAnimate key={index} letter={letter} delay={index} />
        );
    }
}

export default WordAnimate;