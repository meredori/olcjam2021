import React from 'react'
import ReactButton from './react-button';
import ThinkButton from './think-button';

class ActionButtons extends React.Component {
    reactClick = () => {
        this.props.reactClick();
    }
    thinkClick = () => {
        this.props.thinkClick();
    }
    render() {
        let reactButton;
        let thinkButton;
        if (this.props.reactActive){
            reactButton = <ReactButton onClick={this.reactClick} />
        }
        if (this.props.thinkActive){
            thinkButton += <ThinkButton onClick={this.thinkClick} />
        }
        return <div>{reactButton}{thinkButton}</div>
    }   

}

export default ActionButtons;