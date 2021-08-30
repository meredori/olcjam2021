import React from 'react'

class ReactButton extends React.Component {
    render() {
        return <button type="button" onClick={this.props.onClick} className="btn btn-outline-secondary">React</button>    
    }   

}

export default ReactButton;