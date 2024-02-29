import React, { Component } from "react";
import Store from "../Config/Store";
import { connect } from "react-redux";
import { alertActions } from "../Action/ alertActions";

class Dashboard extends Component {
  render() {
    return (
      <>
        <h1>Dashboard</h1>
        <p>email: {this.props.alert.user.email}</p>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("Dashboard", state);
  return state;
};

const connectedApp = connect(mapStateToProps)(Dashboard);
export { connectedApp as Dashboard };
