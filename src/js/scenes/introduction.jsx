import React from 'react'
import WordAnimate from '../animations/word-animate'
import data from "../../assets/json/intro-text.json" 
class Introduction extends React.Component {
    constructor(props){
        super(props);
        var timeout = data[this.props.currentWord].length * 150;
        this.props.dataLength(data.length);
    }
    render() {
        const words = data.slice(0,this.props.currentWord+1).map((item,index) =>
        (
            <div key={index}><WordAnimate id={index} word={item} /><br/></div>
            
        )
        );
        return <div>{words}</div>   
    }   

}

export default Introduction;