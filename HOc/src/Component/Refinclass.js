import React, { Component, createRef } from 'react'

export default class Refinclass extends Component {
    constructor(props){
    super(props);
    this.state = {
        textInput : React.createRef()
    };
    }
    focusInput =()=>{
        this.state.textInput.focus();
    }
  render() {
    return (
      <div>
          <input type= 'text' ref={this.state.textInput}></input>
          <input type='button'value='click Me!' onClick={this.state.focusInput}></input>
      </div>
    );
  }
}
