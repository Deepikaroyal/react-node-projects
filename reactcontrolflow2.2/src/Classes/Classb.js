import React, { Component } from "react";

export default class Classb extends Component {
  
    constructor(props){
        super(props);
     
        // console.log(this.x,this.y);
     
  }
 
   
sum = () =>{
   
      return (+(this.props.value1) + +(this.props.value2));
}

//   Sum=(x, y)=>{
//     console.log(this.x + this.y);
//   };
  render() {
    return( <div>
        x1={this.props.value1}
        y={this.props.value2};
             <h1>
                    {`Sum is ${this.sum()}`}
                </h1>
    </div>
    );
}
}
