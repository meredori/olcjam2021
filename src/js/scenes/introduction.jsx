import React from 'react'
import WordAnimate from '../animations/word-animate'
import data from "../../assets/json/intro-text.json" 
class Introduction extends React.Component {
    constructor(props){
        super(props);
        var timeout = data[this.props.currentWord].length * 150;
        this.props.dataLength(data.length);
    }
    state = {hidden:[]}
    componentDidMount(){
        var array = [];
        data.forEach(element => {
            array.push(false);
        });
        this.setState({hidden:array});
    }
    hideWord = (index) => {
        let items = [...this.state.hidden];
        items[index] = true;
        this.setState({hidden: items});
    }
    render() {
        const words = data.slice(0,this.props.currentWord+1).map((item,index) =>
        (
            this.state.hidden[index] ? null : <div key={index}><WordAnimate id={index} word={item} hideMe={this.hideWord} /><br/></div>
            
        )
        );
        return <div>{words}</div>   
    }   

}

export default Introduction;