import App from "../scripts/App.js";
import LoginService from "../services/LoginService.js";

export default class ManagmentComponent extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  handleDeleteAccountSubmit(e) {
    e.preventDefault();
    alert('Le compte a bien été supprimé !');
    LoginService.deleteAccount();
    history.pushState(null, null, "/login");
    App.instance.router.navigate();
  }

  render() {
    const showInfoCurrentUser = LoginService.getCurrentUser();
    this.innerHTML = `<style>@import "./src/assets/styles/loginPageStyle/managment.css"</style>
    <div class="container-form ">
      <div class="card">
        <div class="card-body">
          <div class="button-screen-login">
            <button class="btn" id="delete-account">SUPPRIMER</button>
          </div>
          <legend>Edition de compte</legend>
          <form>
            <div class="mb-3">
              <label class="form-label">Nom :</label>
              <input
                type="text"
                class="form-control"
                aria-describedby="lastNameHelp"
                placeholder="${showInfoCurrentUser.lastName}"/>
            </div>
            <div class="mb-3">
              <label class="form-label">Prénom :</label>
              <input
                type="text"
                class="form-control"
                aria-describedby="first-nameHelp"
                placeholder="${showInfoCurrentUser.firstName}"/>
            </div>
            <div class="mb-3">
              <label class="form-label">E-mail :</label>
              <input
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="${showInfoCurrentUser.email}"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Mot de passe :</label>
              <input
                type="password"
                class="form-control"
                placeholder="${showInfoCurrentUser.password}"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Nouveau mot de passe :</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Saisissez votre nouveau mot de passe..."/>
            </div>
            <div class="text-center mb-3 lost-mdp">
              Le mot de passe doit être composé à la fois de lettres et de
              chiffres et contenir au moins 8 caractères
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-submit text-center">
                Confirmer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    `;

    const deleteAccountBtn = this.querySelector("#delete-account");
    if (deleteAccountBtn) {
      deleteAccountBtn.addEventListener(
        "click",
        this.handleDeleteAccountSubmit
      );
    }
  }
}
customElements.define("managment-component", ManagmentComponent);
