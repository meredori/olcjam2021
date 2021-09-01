import React from 'react'
import CommonButton from './common-button';

class ActionButtons extends React.Component {
    reactClick = () => {
        this.props.reactClick();
    }
    thinkClick = () => {
        this.props.thinkClick();
    }
    render() {
        let thinkButton;
        if (this.props.thinkActive){
            thinkButton = <CommonButton label={this.props.thinkLabel} active={this.props.thinkActive} onClick={this.thinkClick} />
        }
        return <div><CommonButton onClick={this.reactClick} active={this.props.reactActive} label='React' />{thinkButton}</div>
    }   

}

export default ActionButtons;