import React from "react";
export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            c: 0
        }
    }

    handleMas = (event) =>{
        this.setState({
            c: this.state.c + 1
        })
    }

    handleMenos = (event) =>{
        this.setState({
            c: this.state.c - 1
        })
    }

    render() {
        return (
            <div>
                <h1>count {this.props.counter}</h1>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.descrement}>-</button>
            </div>
        );
    }
}