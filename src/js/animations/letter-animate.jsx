import React from 'react';
import Anime from 'react-anime';

class LetterAnimate extends React.Component {
    render() {
        return <Anime opacity={[0,1]} easing="easeInOutQuad" duration={2250} delay={150 * (this.props.delay+1)}><span>{this.props.letter}</span></Anime>;
    }
}

export default LetterAnimate;