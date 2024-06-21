import LoginService from "../services/LoginService.js";

export default class FooterMobileComponent extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  connectedCallback() {
    this.setupNavigationLinks();
    this.markActiveLink();
  }

  setupNavigationLinks() {
    const links = this.querySelectorAll(".nav-link.mobile");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((lnk) => lnk.classList.remove("active"));
        link.classList.add("active");
      });
    });
  }

  markActiveLink() {
    const currentPage = window.location.pathname;
    const activeLink = this.querySelector(`.nav-link[href="${currentPage}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  handleLogoutSubmit(e) {
    e.preventDefault();
    LoginService.logout();
  }

  render() {
    const userConnected = LoginService.getCurrentUser();
    this.innerHTML = `<style>@import"./src/assets/styles/navbarMobile/navbarMobile.css"</style>
    <div class="footer d-block d-md-none">
        <nav class="navbar">
            <ul class="navbar-nav d-flex flex-row w-100 justify-content-around">
                <li class="nav-item mobile">
                    <a class="nav-link mobile" href="/" target="spa">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                          </svg>
                          <span class="spanMobile">Accueil</span>
                    </a>
                </li>
                <li class="nav-item mobile">
                    <a class="nav-link mobile" href="/wiki" target="spa">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
                            <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                          </svg>
                        <span class="spanMobile">Wiki</span>
                    </a>
                </li>
                <li class="nav-item mobile">
                    <a class="nav-link mobile" href="/chart" target="spa">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bar-chart-line-fill" viewBox="0 0 16 16">
                            <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z"/>
                          </svg>
                        <span class="spanMobile">Classement</span>
                    </a>
                </li>
                <li class="nav-item mobile">
                    <a class="nav-link mobile" href="/wallet" target="spa">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-wallet-fill" viewBox="0 0 16 16">
                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542s.987-.254 1.194-.542C9.42 6.644 9.5 6.253 9.5 6a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2z"/>
                            <path d="M16 6.5h-5.551a2.7 2.7 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5s-1.613-.412-2.006-.958A2.7 2.7 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5z"/>
                          </svg>
                        <span class="spanMobile">Portefeuille</span>
                    </a>
                </li>
                ${
                  userConnected
                    ? `
                    <a class="nav-link mobile" href="/managment" target="spa">${userConnected.firstName}</a>
                    <a class="nav-link mobile" id="logOut" href="/login" target="spa"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
          <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
        </svg></a>
                    `
                    : `
                <li class="nav-item mobile">
                    <a class="nav-link mobile" href="/login" target="spa">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill mobile" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                          </svg>
                        <span>Connexion</span>
                    </a>
                </li>
                `
                }
            </ul>
        </nav>
    </div>
    `;
    const logOutBtn = this.querySelector("#logOut");
    if (logOutBtn) {
      logOutBtn.addEventListener("click", this.handleLogoutSubmit);
    }
  }
  
}
customElements.define("footermobile-component", FooterMobileComponent);
