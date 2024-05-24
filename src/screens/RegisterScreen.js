import RegisterComponent from "../components/RegisterComponent.js";
import Screen from "../models/Screen.js";

export default class RegisterScreen extends Screen {
  constructor() {
    super();
    this.prop.signinComponent = new RegisterComponent();
  }

  render() {
    return `
        <register-component/>
        `;
  }
}
customElements.define("signin-screen", RegisterScreen);
