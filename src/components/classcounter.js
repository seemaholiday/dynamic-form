import React, { Component } from 'react'

export default class Classcounter extends Component {
    constructor(props){
        super(props)
        this.state ={
            counter:0
        }
    }
    increament =() =>{
        this.setState({
            counter:this.state.counter+10
        })
    }
    render() {
        return (
            <div>
               <button onClick={this.increament}>Increament</button>
               <div>{this.state.counter}</div>
            </div>
        )
    }
}
