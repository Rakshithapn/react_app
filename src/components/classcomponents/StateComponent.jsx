import React from "react";
class StateComponent extends React.Component
{
    constructor(){
        super() 
        this.state = {
            name:"KEC",
            course:"MERN"
        }
    }
    changeState = (params) => {
        console.log("Kongu Engineering College")  //Use state should be used
    }
    render(){
        return(
            <div>
                <h1> This is State Component</h1>
                <h2>Hello, {this.state.name}<br></br>this is {this.state.course} class</h2>
                <h3>I am changing the state of the name {this.state.name} to {this.changestate}</h3>
                <button onMouseOver={this.changeState}>Click me to change the state</button>
            </div>
        )
    }
}
export default StateComponent;
// npm i react-router-dom