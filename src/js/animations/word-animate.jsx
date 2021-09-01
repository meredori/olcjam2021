import React from "react";
import LetterAnimate from "./letter-animate.jsx";
import anime from "animejs";

class WordAnimate extends React.Component {
  state = { visible: true };
  componentDidMount() {
    anime
      .timeline()
      .add({
        targets: ".word" + this.props.id + " .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i + 1),
      })
      .add({
        targets: ".word" + this.props.id,
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
        complete: function (anim) {
          this.props.hideMe(this.props.id);
        }.bind(this),
      });
  }
  render() {
    const letters = [...this.props.word];
    var splitLetters = letters.map((letter, index) => (
      <LetterAnimate key={index} letter={letter} delay={index} />
    ));
    return <div className={"word" + this.props.id}>{splitLetters}</div>
  }
}

export default WordAnimate;
