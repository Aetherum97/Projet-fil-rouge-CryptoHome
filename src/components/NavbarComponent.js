import LoginService from "../services/LoginService.js";

export default class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const userConnected = LoginService.getCurrentUser();
    this.innerHTML = `<style>@import"./src/assets/styles/navbar/navbar.css"</style>
    <nav class="navbar navbar-expand-lg sticky-top">
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
          ${userConnected ? `
          <a class="nav-link text-white" href="/login" target="spa">Bienvenue ${userConnected.firstName} :)</a>
              ` : `
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
              `}
            </ul>
        </div>
      </div>
    </div>
  </nav>`;
  }
}
customElements.define("navbar-component", NavbarComponent);
