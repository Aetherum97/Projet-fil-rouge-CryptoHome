import RegisterComponent from "../components/RegisterComponent.js";
import Screen from "./Screen.js";

export default class RegisterScreen extends Screen {
  constructor() {
    super();
    this.prop.signinComponent = new RegisterComponent();
  }

  render() {
    return `
    <header>
      <navbar-component/>
    </header>
    <div>
      <register-component/>
    </div>
    <footer>
        <div>
          <footerdesktop-component/>
        </div>
        <div>
          <footermobile-component/>
        </div>
    </footer>
        `;
  }
}
customElements.define("signin-screen", RegisterScreen);
