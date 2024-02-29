import React, { Component } from "react";
import Iframe from "react-iframe";

const HOC = (Component, data) => {
  //console.log("data", data);

  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: data,
      };
    }

    handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    render() {
      return (
        <>
          <Component
            CountNumber={this.state.count}
            handleCLick={this.handleClick}
          />
          <Iframe url="https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_30mb.mp4" width="40%" height="300" style="border:0.5px solid black;"></Iframe>
        </>
      );
    }
  };
};

export default HOC;
