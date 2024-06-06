import AccountService from "../services/AccountService.js";
import App from "../scripts/App.js";
import LoginService from "../services/LoginService.js";

export default class LoginComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.render();
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
      LoginService.login(currentUser);
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
    return `<style>@import "./src/assets/styles/loginPageStyle/login.css"</style>
        <div class="container-form">
      <div class="card" style="width: 25rem">
        <div class="card-body">
          <div class="button-screen-login">
            <button class="btn"><a href="/register" id="nav-login" target="spa">S'inscrire</a></button>
          </div>
          <legend>Connexion</legend>
          <form>
          <span id="controlLoginAccount"></span>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">E-mail :</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Saisissez votre adresse email..."/>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Mot de passe :</label>
              <span class="lost-mdp"><a href="#" class="lost-mdp-navigation">Vous avez oubliez votre mot de passe ?</a></span>
              <input
                type="password"
                name="loginPassword"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Saisissez votre mot de passe..."/>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-submit">Connexion</button>
            </div>
          </form>
        </div>
      </div>
    </div>`;
  }
}
customElements.define("login-component", LoginComponent);
