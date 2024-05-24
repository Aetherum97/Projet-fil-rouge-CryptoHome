import Screen from "../models/Screen.js";

export default class RegisterComponent extends Screen {
  constructor() {
    super();
    this.innerHTML = this.render();
  }

  render() {
    return `<style> @import"./src/assets/styles/loginPageStyle/signin.css"</style>
        <div class="container-form">
        <div class="card" style="width: 40rem">
        <div class="card-body">
            <div class="button-screen-login">
            <button class="btn"><a href="/login" id="nav-login" target="spa">Connexion</a></button>
            </div>
            <legend>Création de compte</legend>
            <form>
            <div class="mb-3">
                <label class="form-label">Nom :</label>
                <input
                type="text"
                class="form-control"
                aria-describedby="lastNameHelp"
                placeholder="Saisissez votre nom..."/>
            </div>
            <div class="mb-3">
                <label class="form-label">Prénom :</label>
                <input
                type="text"
                class="form-control"
                aria-describedby="first-nameHelp"
                placeholder="Saisissez votre prénom..."/>
            </div>
            <div class="mb-3">
                <label class="form-label">E-mail :</label>
                <input
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Saisissez votre e-mail..."/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                >Mot de passe :</label>
                <input
                type="password"
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
