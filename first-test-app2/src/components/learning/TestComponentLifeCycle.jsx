import { Component } from "react";

class TestComponentLifeCycle extends Component{
    constructor(props){
        super(props);
        console.log("CompConstructor");
        this.state = {
            counter: 0
        }
    }

    componentDidMount(){
        console.log("DidMount");
        setInterval(() => {
            console.log('Incrementing...');
            this.setState({counter: this.state.counter + 1})
        }, 2000);
        
        

    }

    componentDidUpdate(){
        console.log("DidUpdate"); 
        //should be light, it takes alot to execute

    }

    componentWillUnmount(){
        console.log("DidWillUnmount");
        //when the component dies
    }

    render (){
        console.log("Did Render");
        return <div>{this.props.counter}</div>
    }
}
export default TestComponentLifeCycle;