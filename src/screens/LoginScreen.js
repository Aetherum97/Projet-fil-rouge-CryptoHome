import LoginComponent from "../components/LoginComponents.js";
import Screen from "../models/Screen.js";

export default class LoginScreen extends Screen {
  constructor(){
    super();
    this.prop.loginComponent = new LoginComponent();
  }
  render() {
    return `
        <login-component/>
        `;
  }
}
customElements.define("login-screen", LoginScreen);
