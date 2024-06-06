import AccountService from "../services/AccountService.js";
import App from "../scripts/App.js";

export default class RegisterComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.render();
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
    alert("Compte crée !");
    const newAccountService = new AccountService();
    newAccountService.create(entries);
    history.pushState(null, null, "/login");
    App.instance.router.navigate();
  };

  render() {
    return `<style> @import"./src/assets/styles/loginPageStyle/signin.css"</style>
        <div class="container-form">
        <div class="card" >
        <div class="card-body">
            <div class="button-screen-login">
            <button class="btn"><a href="/login" id="nav-login" target="spa">Connexion</a></button>
            </div>
            <legend>Création de compte</legend>
            <span id="accountControlRegister"></span>
            <form>
            <div class="mb-3">
                <label class="form-label">Nom :</label>
                <input
                type="text"
                name="lastName"
                class="form-control"
                aria-describedby="lastNameHelp"
                placeholder="Saisissez votre nom..."/>
            </div>
            <div class="mb-3">
                <label class="form-label">Prénom :</label>
                <input
                type="text"
                name="firstName"
                class="form-control"
                aria-describedby="first-nameHelp"
                placeholder="Saisissez votre prénom..."/>
            </div>
            <div class="mb-3">
                <label class="form-label">E-mail :</label>
                <input
                type="text"
                name="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Saisissez votre e-mail..."/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                >Mot de passe :</label>
                <span id="passwordRegister"></span>
                <input
                type="password"
                name="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Saisissez votre mot de passe..."/>
            </div>
            <div class="text-center mb-3 lost-mdp">
                Le mot de passe doit être composé à la fois de lettres et de
                chiffres et contenir au moins 8 caractères
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-submit text-center">Connexion</button>
                </div>
                </form>
            </div>
        </div>
    </div>
        `;
  }
}
customElements.define("register-component", RegisterComponent);
