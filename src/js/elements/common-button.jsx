import React from 'react'

class CommonButton extends React.Component {
    render() {
        return <button id={this.props.label} disabled={!this.props.active} type="button" onClick={this.props.onClick} className="btn btn-outline-secondary">{this.props.label}</button>    
    }   

}

export default CommonButton;