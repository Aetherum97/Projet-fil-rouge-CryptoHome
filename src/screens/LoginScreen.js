import LoginComponent from "../components/LoginComponents.js";
import AccountService from "../services/AccountService.js";
import Screen from "./Screen.js";
import App from "../scripts/App.js";
import LoginService from "../services/LoginService.js";

export default class LoginScreen extends Screen {
  constructor() {
    super();
    this.prop.loginComponent = new LoginComponent();
  }

  render() {
    return `
      <header>
        <navbar-component/>
      </header>
      <div>
        <login-component/>
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
customElements.define("login-screen", LoginScreen);
