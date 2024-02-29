const userAccess = sessionStorage.getItem("userAccess");
const user = userAccess ? userAccess : {};

const userDetailInitialState = {
  loading: false,
  ...user,
};

export default userDetailInitialState;
