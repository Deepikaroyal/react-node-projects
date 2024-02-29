// import React, { Component } from 'react'
 import Classb from './Classb'
 import Classc from './Classc'

// export default class A extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//            x: 2,
//           y: 0
//         };
//       }
//       callback = (childData) =>{
//       this.setState({y:childData})
//       }
//   render() {
//     return (
//       <div>

//       <Classb value1={this.state.x}/>
//       <Classc parentcallback={this.callback}/>
//       <p>{this.state.y}</p>
//       </div>
//     )
//   }
// }


import React from "react";


class A extends React.Component{
constructor(props){
    super(props);
    this.state = {
        x: 5,
        y:0
        
       };
      
    }
    handleCallback = (childData) =>{
        const {x,y} = childData;
        this.setState({x:x})
        this.setState({y:y})
        console.log(x,y)
    }
  
    render(){
        
        const {y} = this.state;
        const {x} = this.state;
        return(
            <div>
                <h1>A(parent)</h1>
                y={y}
                x={x}
                <h3>classb</h3>
                <Classb value1={ this.state.x} value2={this.state.y}/>
                <Classc parentCallback = {this.handleCallback}/>
                
               
            </div>
        )
    }
}

export default A;