import { matchRoute } from "../utils";

function User() {
  const getUserData = () => {
    console.log(
      "aqui user",
      !!localStorage.getItem("user"),
      JSON.parse(localStorage.getItem("user")),
      {
        created_at: null,
        email: null,
        updated_at: null,
        user_admin: null,
        user_id: null,
        user_login: null,
        user_name: null,
      }
    );

    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {
          created_at: null,
          email: null,
          updated_at: null,
          user_admin: null,
          user_id: null,
          user_login: null,
          user_name: null,
        };
  };

  const user = getUserData();

  const isAuthenticated = () => {
    const token = getTokenData();
    return token && user;
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("params");
  };

  const getTokenData = () => {
    return localStorage.getItem("token") ? localStorage.getItem("token") : null;
  };

  const getToken = () => {
    return user?.token || getTokenData();
  };

  const setItems = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const getUser = () => {
    return user?.usuario ? user?.usuario : getUserData();
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
