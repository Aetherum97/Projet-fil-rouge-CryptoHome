export default class LoginComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.render();
  }

  render() {
    return `<style>@import "./src/assets/styles/login.css"</style>
        <div class="container-form">
      <div class="card" style="width: 25rem">
        <div class="card-body">
          <div class="button-screen-login">
            <button class="btn"><a href="/register" id="nav-login" target="spa">S'inscrire</a></button>
          </div>
          <legend>Connexion</legend>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">E-mail :</label>
              <input
                type="email"
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
