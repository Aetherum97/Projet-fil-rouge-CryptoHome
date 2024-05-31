import LoginService from "../services/LoginService.js";

export default class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  handleLogoutSubmit(e) {
    e.preventDefault();
    LoginService.logout();
  }

  render() {
    const userConnected = LoginService.getCurrentUser();
    this.innerHTML = `<style>@import"./src/assets/styles/navbar/navbar.css"</style>
    <nav class="navbar navbar-expand-lg sticky-top desktop">
    <div class="container-fluid nav-content">
      <a class="navbar-brand" href="/" target="spa">
        <img
          src="./src/assets/img/navbar/logo.png"
          alt="logo navbar"
          srcset=""/>
          </a>
      <div class="container" id="navbarNav">
        <ul class="navbar-nav justify-content-around">
          <li class="nav-item">
            <a
              class="nav-link text-white"
              aria-current="page"
              href="/wiki"
              target="spa">
              Wiki crypto
              </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/chart" target="spa">Classement
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/wallet" target="spa">Portefeuille
            </a>
          </li>
          ${
            userConnected
              ? `
          <a class="nav-link text-white" href="/managment" target="spa">Bienvenue ${userConnected.firstName} :)</a>
          <a class="nav-link text-white" id="logOut" href="/login" target="spa"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
          <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
        </svg></a>
              `
              : `
                <li class="nav-item">
                  <a class="nav-link text-white" href="/login" target="spa">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-person-circle me-3 mb-1"
                      viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg>
                    Connexion
                  </a>
                </li>
              `
          }
            </ul>
        </div>
      </div>
    </div>
  </nav>`;

    const logOutBtn = this.querySelector("#logOut");
    if (logOutBtn) {
      logOutBtn.addEventListener("click", this.handleLogoutSubmit);
    }
  }
}
customElements.define("navbar-component", NavbarComponent);
