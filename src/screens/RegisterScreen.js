import RegisterComponent from "../components/RegisterComponent.js";
import AccountService from "../services/AccountService.js";
import Screen from "./Screen.js";

export default class RegisterScreen extends Screen {
  constructor() {
    super();
    this.prop.signinComponent = new RegisterComponent();
    this.querySelector("form").onsubmit = this.handleRegisterFormSubmit;
  }

  handleRegisterFormSubmit = (e) => {
    e.preventDefault();
    const entries = Object.fromEntries(new FormData(e.target));
    const password = entries["password"];
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{6,15}$/;
    if (!regex.test(password)) {
      const errorPassword = document.getElementById("accountControlRegister");
      errorPassword.textContent =
        "Attention mot de passe invalide, veuillez saisir un mot de passe fort !";
      setTimeout(function () {
        errorPassword.textContent = "";
      }, 2500);
      return;
    }
    const createAccount = new AccountService();
    const newAccount = createAccount.read(
      (account) => account.email === entries.email
    );
    const userAccounts = newAccount.pop();
    if (userAccounts) {
      const errorMail = document.getElementById("accountControlRegister");
      errorMail.textContent = "Un compte existe déjà !";
      setTimeout(() => {
        errorMail.textContent = "";
      }, 2000);
      return;
    }
    alert('Compte crée');
    const newAccountService = new AccountService();
    newAccountService.create(entries);
  };

  render() {
    return `
        <register-component/>
        `;
  }
}
customElements.define("signin-screen", RegisterScreen);
