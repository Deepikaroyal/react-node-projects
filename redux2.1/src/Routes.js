import React from "react";
import ReactDOM from "react-dom/client";
import "./Styled/Style.css";
// import SignUp from "./Component/SignUp";
// import Login from "./Component/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import { alertActions } from "./Action/ alertActions";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import Login1 from "./Component/Login1";

export const history = createBrowserHistory();

class Routesall extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <Routes>
            {/* <Route path="/SignUp" element={<SignUp />} /> */}
            <Route path="/" element={<Login1 />} />
            {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
          </Routes>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

const connectedApp = connect(mapStateToProps)(Routesall);
export { connectedApp as Routesall };
