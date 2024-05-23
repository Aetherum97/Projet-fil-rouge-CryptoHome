import ChartScreen from "../screens/ChartScreen.js";
import HomeScreen from "../screens/HomeScreen.js";
import LoginScreen from "../screens/LoginScreen.js";
import NotfoundScreen from "../screens/NotfoundScreen.js";
import WalletScreen from "../screens/WalletScreen.js";
import WikiScreen from "../screens/WikiScreen.js";
import App from "./App.js";

export default class Router {
  #screen = null;
  get screen() {
    return this.#screen;
  }
  constructor() {
    window.onclick = this.handlePageClick;
    window.onload = this.navigate;
    window.onpopstate = this.navigate;
  }

  handlePageClick = (e) => {
    const link = e.target.closest('[target="spa"]');
    if (link) {
      e.preventDefault();
      history.pushState(null, null, link.href);
      this.navigate();
    }
  };

  navigate = () => {
    if (location.pathname == "/" || location.pathname == "/index") {
      this.#screen = new HomeScreen();
    } else if (location.pathname == "/chart") {
      this.#screen = new ChartScreen();
    } else if (location.pathname == "/wiki") {
      this.#screen = new WikiScreen();
    } else if (location.pathname == "/login") {
      this.#screen = new LoginScreen();
    } else if (location.pathname == "/wallet") {
      this.#screen = new WalletScreen();
    } else {
      this.#screen = new NotfoundScreen();
    }
    App.instance.render();
  };
}
