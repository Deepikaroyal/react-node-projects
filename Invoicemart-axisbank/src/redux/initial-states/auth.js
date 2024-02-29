const token = sessionStorage.getItem("token");
const userData = sessionStorage.getItem("userData");

const authInitialState = {
  isAuthenticated: !!token,
  currentUser: userData ? JSON.parse(userData) : null,
  token,
  entityType: null,
  loading: false,
  siteTheme: false,
};

export default authInitialState;
