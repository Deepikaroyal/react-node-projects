import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoutes = ({ isAuthenticated, component: Component }) => {
  const auth = sessionStorage.getItem("token");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(PrivateRoutes);
