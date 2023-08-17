// import { LOGIN_ROUTE, HOME_ROUTE, DASHBOARD_ROUTE } from "../consts.js";

import { matchRoute } from "../utils";

class User {
  static isAuthenticated() {
    const token = User.getTokenData();
    const user = User.getUserData();
    console.log("aqui dentro", { token, user });
    if (token && user) {
      return true;
    }
    return false;
  }

  static logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("params");
  }

  static getTokenData() {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).token
      : null;
  }

  static getUserData() {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).usuario
      : null;
  }

  constructor() {
    this.user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).usuario
      : null;
    this.token = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).token
      : null;
  }

  getToken() {
    return this.token;
  }

  setItems(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return this.user;
  }

  isAdmin() {
    const user = this.getUser();
    if (user) return parseInt(user.admin) === 1;
  }

  canAcessThisRoute(route) {
    if (this.isAdmin() && !matchRoute(route, "/")) {
      return true;
    }
    // if (matchRoute(route, VISAO_GERAL_ROUTE) && this.isProvaoOnlineVoter()) {
    //   return true;
    // }

    return false;
  }
}

export default User;
