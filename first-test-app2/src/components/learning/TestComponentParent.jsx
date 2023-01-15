import Child from "./TestComponentChild";
import { Component } from "react";


class Parent extends Component{
    constructor(){
        super();
        console.log("CompConstructor");
        this.state = {
            counter: 0
        }
    }

    onNotify(v){
        this.setState({counter: this.state.counter + 1});
        console.log(v);
    }

    render (){
        console.log("Did Render");
        return <Child onNotify={ (a) => console.log("Notify Works!")}/>
    }
}
export default Parent;