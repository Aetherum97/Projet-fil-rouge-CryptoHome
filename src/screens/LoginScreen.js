import LoginComponent from "../components/LoginComponents.js";
import AccountService from "../services/AccountService.js";
import Screen from "./Screen.js";
import App from "../scripts/App.js";

export default class LoginScreen extends Screen {
  constructor() {
    super();
    this.prop.loginComponent = new LoginComponent();
    this.querySelector("form").onsubmit = this.handleLoginFormSubmit;
  }

  handleLoginFormSubmit = (e) => {
    e.preventDefault();
    const entries = Object.fromEntries(new FormData(e.target));
    const accountService = new AccountService();
    const accounts = accountService.read(
      (account) => account.email === entries.email
    );

    if (accounts.length === 0) {
      const noExistingUser = document.getElementById("controlLoginAccount");
      noExistingUser.textContent = "Compte inexistant ou mdp incorrect !";
      setTimeout(function () {
        noExistingUser.textContent = "";
      }, 2000);
      return;
    }
    const currentUser = accounts.pop();
    if (currentUser.password === entries.loginPassword) {
      alert("Connecté !");
      history.pushState(null, null, "/");
      App.instance.router.navigate();
      return;
    } else {
      const wrongPassword = document.getElementById("controlLoginAccount");
      wrongPassword.textContent = "Compte inexistant ou mdp incorrect !";
      setTimeout(function () {
        wrongPassword.textContent = "";
      }, 2000);
    }
  };

  render() {
    return `
        <login-component/>
        `;
  }
}
customElements.define("login-screen", LoginScreen);
