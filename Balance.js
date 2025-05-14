import React, { Component } from 'react'
import "./balance.css"

export class Balance extends Component {

    state ={
        countInput :""
    }

    onChangeInput=(event) => {
        this.setState({countInput : event.target.value})
        console.log(this.state.countInput)
    }
  render() { 
    return (
      <div className="container">

        <h1>Calculate the numbers you enter</h1>
        <p>enter the phrase</p>
        
        <input type="search" onChange={this.onChangeInput}/>
        <h1>No.Of letters:{this.state.countInput.length}</h1>

      </div>
    )
  }
}

export default Balance