import React from 'react';
import './App.css';

 class App extends React.Component {
  constructor(props) {
    super(props);
   this.state ={
     name:'Adam'
   }
  }
   changeName=(newName)=>{
     this.setState({name:newName});
   }

   changeNamefrominput=(event)=>{
    this.setState({name:event.target.value});
  }
   render(){
  return (
      <div className='App'>
      <br/><br/>
      {/* <button onClick={()=>this.changeName('nicklaus michelson')}>change state using arrow function</button>
      <button onClick={this.changeName.bind(this,'nicklaus michelson')}>change state using bind</button>
      <br/><br/> */}
      <input type='text' onChange={this.changeNamefrominput} value={this.state.name}></input>
      <div>{this.state.name}</div>
      </div>
  );
}
 }
export default App;
