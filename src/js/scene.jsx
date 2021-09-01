import React from "react";
import Introduction from "./scenes/introduction";
import ActionButtons from "./elements/action-buttons";
import WordAnimate from "./animations/word-animate";

class Scene extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.setState({dataThink:[]});
  }
  state = { dataLength: 0, reactCount: 0, reactActive: true, thinkActive: false, timer: false, thinkLabel: 'Think', isThinking: false, dataThink:[], thinkCount: 0,}
  dataLength = (value) => {
      this.setState({dataLength: value});  
  }
  reactClick = () => {
    if(this.state.dataLength == this.state.reactCount + 2){
      this.setState({reactActive:false, thinkActive:true});
    }
    this.setState((prevState) => ({reactCount: prevState.reactCount+1}));
      
  }
  thinkClick = () => {
    var dots = Math.floor(Math.random()*8) + 4;
    let dotdotdot = "";
    for(let i=0; i < dots; i++){
      dotdotdot += ".";
    }
    this.setState((prevState) => ({dataThink: [...prevState.dataThink, dotdotdot], isThinking: true, thinkCount: prevState.thinkCount+1}));
  }
  hideWord = (index) => {
    var newList = this.state.dataThink;
    newList.pop();
    this.setState({dataThink:newList});
}


  render() {
    let thinker;
    if(this.state.isThinking){
      thinker = this.state.dataThink.map((item,index) =>
        (
            <div key={index}><WordAnimate id={index+this.state.dataLength} word={item} hideMe={this.hideWord} /><br/></div>
            
        ) 
      )          
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col justify-content-center">            
            <ActionButtons reactClick={this.reactClick} thinkClick={this.thinkClick} reactActive={this.state.reactActive} thinkActive={this.state.thinkActive} thinkLabel={this.state.thinkLabel} />
          </div>
        </div>
        <div className="row">
          <div className="col justify-content-center">
            <div className="text-secondary">              
            <Introduction currentWord={this.state.reactCount} dataLength={this.dataLength} />
            {thinker}
            </div>
          </div>
        </div>     
      </div>
    );
  }
}

export default Scene;
