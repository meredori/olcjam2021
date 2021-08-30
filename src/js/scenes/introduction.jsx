import React from 'react'
import WordAnimate from '../animations/word-animate'
import data from "../../assets/json/intro-text.json" 
class Introduction extends React.Component {
    constructor(props){
        super(props);
        var timeout = data[this.props.currentWord].length * 150;
        this.props.onTextRender(timeout);
    }
    componentDidUpdate(prevProps){
        if(prevProps.currentWord != this.props.currentWord){
            var timeout = data[this.props.currentWord].length * 150;
            this.props.onTextRender(timeout);
        }
    }
    render() {
        const words = data.slice(0,this.props.currentWord+1).map((item,index) =>
        (
            <><WordAnimate key={index} word={item} /><br /></>
        )
        );
        return <div>{words}</div>   
    }   

}

export default Introduction;