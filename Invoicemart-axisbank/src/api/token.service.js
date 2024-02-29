class TokenService {
  getLocalApiKeygen() {
    const apiKeyGen = JSON.parse(sessionStorage.getItem("apiKeyGen"));
    return apiKeyGen;
  }

  getLocalRefreshToken() {
    const user = JSON.parse(sessionStorage.getItem("userData"));
    return user?.refreshToken;
  }

  getLocalAccessToken() {
    const user = JSON.parse(sessionStorage.getItem("userData"));
    return user?.accessToken;
  }

  setApiKeyGen(apiKeyGen) {
    sessionStorage.setItem("apiKeyGen", JSON.stringify(apiKeyGen));
  }

  updateLocalAccessToken(token) {
    let user = JSON.parse(sessionStorage.getItem("userData"));
    user.accessToken = token;
    sessionStorage.setItem("userData", JSON.stringify(user));
  }

  updateLocalRefreshToken(token) {
    let user = JSON.parse(sessionStorage.getItem("userData"));
    user.refreshToken = token;
    sessionStorage.setItem("userData", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(sessionStorage.getItem("userData"));
  }

  setUser(user) {
    sessionStorage.setItem("userData", JSON.stringify(user));
  }

  removeUser() {
    sessionStorage.removeItem("userData");
  }
}

export default new TokenService();
