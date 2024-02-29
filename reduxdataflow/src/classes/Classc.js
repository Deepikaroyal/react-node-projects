import React from "react";
import { connect } from "react-redux";
import { sum } from "../Action/Sumaction";

class Classc extends React.Component{
constructor(props){
    super(props)
    this.state = {
        a:0,
        b:0
    }
};

handleChange=(e)=>{
    this.setState({[e.target.name]:[e.target.value]});
}

handleOnclick=(e)=>{
this.props.sumData(this.state);
} 

render(){
    return(
        <>
        <input type='text' name='a' onChange={this.handleChange}></input>
        <input type='text' name='b' onChange={this.handleChange}></input>
        <input type="submit" value="ADD" onClick={this.handleOnclick}></input>
        </>
    );
}
}
const mapStateToProps = (state) =>{
    return state
};

const mapDispatchToProps = (dispatch) => {
    return ({
        sumData:(data)=>dispatch(sum(data))
    })
}


const connectedApp  = connect(mapStateToProps,mapDispatchToProps)(Classc)

export  {connectedApp as Classc};