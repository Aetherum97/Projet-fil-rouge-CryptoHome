import Screen from "../models/Screen.js";

export default class LoginScreen extends Screen {
  render() {
    return `
        <h1>Login</h1>
        `;
  }
}
customElements.define("login-screen", LoginScreen);