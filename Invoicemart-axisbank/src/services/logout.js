/* eslint-disable import/no-anonymous-default-export */
import { logout } from "../redux/actions";

export default () => (dispatch) => {
  sessionStorage.removeItem("userData");
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("token");
  dispatch(logout());
};
