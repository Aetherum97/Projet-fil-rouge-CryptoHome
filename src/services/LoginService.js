export default class LoginService {
  static login(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  static logout() {
    localStorage.removeItem("currentUser");
  }

  static getCurrentUser() {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  }

  static isAuthenticated() {
    return localStorage.getItem("currentUser") !== null;
  }

  static deleteAccount(){
    return localStorage.clear();
  }
}
