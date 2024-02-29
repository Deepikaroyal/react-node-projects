import React, { Component } from 'react'

 class Conditionalrender extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isLogged:true
       }
     }
  render() {

    //Conditional renderining using  short circuit operator :
    
       return(this.state.isLogged && <div>Hello I'm true Conditionalrender</div>)
      // conditional rendering using element variables:

    // let msg;
    // if(this.state.isLogged){
    //     msg=<div>Hello I'm true Conditionalrender</div>
    // }
    // else{
    //     msg=<div>Hey I'm false Conditionalrender</div>
    // }
    //  return<div>{msg}</div>


     // Conditional renderining using if-else :

    //   if(this.state.isLogged){
    //      return(
    //          <div>Hello I'm true Conditionalrender </div>
    //      ) 
    //   }
    //   else{
    //       return(
    //           <div>Hey I'm false Conditionalrender</div>
    //       )
    //   }

  }
}

export default Conditionalrender