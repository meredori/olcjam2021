import React from "react";
import Introduction from "./scenes/introduction";
import ActionButtons from "./elements/action-buttons";

class Scene extends React.Component {
  constructor(props){
    super(props);
  }
  state = { textTimeout: 0, currWord: 0, reactActive: true, thinkActive: false, timer: false }
  textTimeout = (value) => {
      this.setState({textTimeout: value});
  }
  reactClick = () => {
    this.setState((prevState) => ({currWord: prevState.currWord+1}));
  }
  thinkClick = () => {
    this.setState((prevState) => ({currWord: prevState.currWord+1}));
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col justify-content-center">
            <div className="text-secondary">
            <Introduction currentWord={this.state.currWord} onTextRender={this.textTimeout} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col justify-content-center">            
            <ActionButtons reactClick={this.reactClick} thinkClick={this.thinkClick} reactActive={this.state.reactActive} thinkActive={this.state.thinkActive} />
          </div>
        </div>
      </div>
    );
  }
}

export default Scene;
