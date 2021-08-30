import React from "react";
import Introduction from "./scenes/introduction";
import ActionButtons from "./elements/action-buttons";

class Scene extends React.Component {
  constructor(props){
    super(props);
  }
  state = { textTimeout: 0, currWord: 0, reactActive: false, thinkActive: false, timer: false }
  textTimeout = (value) => {
      this.setState({textTimeout: value});
  }
  reactClick = () => {
    if(this.state.reactActive){
      this.setState((prevState) => ({currWord: prevState.currWord+1}));
    }
    else {
      this.setState({reactActive:true});
    }
  }
  thinkClick = () => {
    this.setState((prevState) => ({currWord: prevState.currWord+1}));
  }


  render() {
    let introduction;
    if(this.state.reactActive){
      introduction = <Introduction currentWord={this.state.currWord} onTextRender={this.textTimeout} />
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col justify-content-center">            
            <ActionButtons reactClick={this.reactClick} thinkClick={this.thinkClick} thinkActive={this.state.thinkActive} />
          </div>
        </div>
        <div className="row">
          <div className="col justify-content-center">
            <div className="text-secondary">              
              {introduction}
            </div>
          </div>
        </div>     
      </div>
    );
  }
}

export default Scene;
