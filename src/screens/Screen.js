import FooterDesktopComponent from "../components/FooterDesktopComponent.js";
import NavbarComponent from "../components/NavbarComponent.js";

export default class Screen extends HTMLElement {
  constructor() {
    super();
    this.prop = {};
    this.innerHTML = this.render();
    this.prop.navbarComponent = new NavbarComponent();
    this.prop.footerComponent = new FooterDesktopComponent();
  }
}
