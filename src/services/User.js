import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { matchRoute } from "../utils";

function User() {
  const { authenticated, user } = useContext(AuthContext);

  const isAuthenticated = () => {
    const token = getTokenData();
    const localStoreuser = localStorage.getItem("user");
    const user = getUserData();
    console.log("aqui dentro", { token, user, authenticated, localStoreuser });
    return token && user;
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("params");
  };

  const getTokenData = () => {
    return localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
  };

  const getUserData = () => {
    console.log("aqui antes localStorage", { localStorage });
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
  };

  const getToken = () => {
    return user?.token || getTokenData();
  };

  const setItems = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const getUser = () => {
    return user?.usuario || getUserData();
  };

  const isAdmin = () => {
    const user = getUser();
    return user && parseInt(user.admin) === 1;
  };

  const canAccessThisRoute = (route) => {
    if (isAdmin() && !matchRoute(route, "/")) {
      return true;
    }
    // if (matchRoute(route, VISAO_GERAL_ROUTE) && this.isProvaoOnlineVoter()) {
    //   return true;
    // }

    return false;
  };

  return {
    isAuthenticated,
    logout,
    getTokenData,
    getUserData,
    getToken,
    setItems,
    getUser,
    isAdmin,
    canAccessThisRoute,
  };
}

export default User;
