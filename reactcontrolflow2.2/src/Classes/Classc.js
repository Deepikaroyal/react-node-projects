import React, { Component } from 'react'
import Classb from './Classb'
export default class Classc extends Component {
    constructor(props){
     super(props);
     this.state={
         x:0,
         y:0
     };
    }
    changeNamefrominput = (event) => {
        this.setState({ x: event.target.value });
      };


      changeNamefrominput2 = (event) => {
          this.setState({ y: event.target.value });
      };


      handleSubmit = (event) =>{
               
        this.props.parentCallback(this.state);
        event.preventDefault();
    }

//     sendData = (e) => {
//     this.props.parentCallback(this.state.y);
//     e.preventDefault();
//    }

  render() {
    return (
      <div className='App'>
        
        <input type='text' onChange={this.changeNamefrominput} value={this.state.x}></input>
        <input type='text' onChange={this.changeNamefrominput2} value={this.state.y}></input>
       {/* <div>{this.state.x}</div> 
      <div>{this.state.y}</div>  */}
      {/* <button onClick= {this.sendData}>Sum</button> */}
      <input type="button" value="ADD" onClick={this.handleSubmit}></input>
           
      
         
      </div>
    )
  }
}




// import React from "react";

// class C extends React.Component{
//     constructor(props){
//         super(props)
//      this.state = {
//         x:0,
//         y:0
//     };
//     }

//     handleSubmit = (event) =>{
               
//         this.props.parentCallback(this.state.y);
//         event.preventDefault();
//     }

//     handleChange = (e) =>{
//             console.log(this.state)
//             this.setState({[e.target.name]:e.target.value})
//             console.log(this.state)
//     }
//     render()
//     {
//         return(
//             <>
//                 <h1>C</h1>
//                 <label>x: </label>
//                 <input type="text" name="x" pattern="[0-9]*" onChange={this.handleChange}></input>
//                 <br/>

//                 <label>y : </label>
//                 <input type="text" name="y" pattern="[0-9]*" onChange={this.handleChange}></input>

//                 <input type="button" value="ADD" onClick={this.handleSubmit}></input>
//             </>
//         )
//     }
// }

// export default C;