import logo from './logo.svg';
import './App.css';
import React from 'react';
/*
function App() {
  return (
    <div className="App">
     <>
     
     <h1/>
     
     </>
    </div>
  );
}

export default App;*/

//Class Component
// Mounting:  1.Constructor:

/*

class Employee extends React.Component{
   constructor(){
   super();
}
  render(){
    return<h3>Employee Name :{this.props.title} Neha</h3>;

  }

}
export default Employee;*/

// 2. getDrivedStateFromProps: And Render():



class Employee extends React.Component{
  constructor(props){
  super(props);
  this.state = {Title:"Mrs."};
  console.log('constructor')
}
static getDerivedStateFromProps(props, state) {
  console.log('getDerivedStateFromProps');
  return {Title:props.newTitle };
 
}
 render(){      //rendor method It actually output the HTML to the  DOM:
  console.log('render');
   return(
     
     <h3>Employee Name :{this.state.newTitle}  Neha</h3>
     
     );

 }

}
export default Employee; 


/*
class Color extends React.Component{
constructor(){
  super();
  this.state = {favoritecolor: "red"};
}
componentDidMount(){
  setTimeout(()=>{
    return this.setState({favoritecolor:"Lilac"})},2000)
}
render(){
  return <h3>My favorite color is {this.state.favoritecolor}</h3>
}
}
export default Color;

*/

// Update:
/*
class Color extends React.Component{
  constructor(){
    super();
    this.state = {favoritecolor: "red"};
  }
  static getDrivedStateFromPops(props,state){
    return {favoritecolor:this.favoritecolor}
  }
    changeColor=()=>{
      return this.setState({favoritecolor:"Lilac"})
  }
  render(){
    return <h3>My favorite color is {this.state.favoritecolor}</h3>
  }
  }
  export default Color; */
  