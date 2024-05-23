export default class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.render();
  }

  render() {
    return ``;
  }
}
customElements.define("navbar-component", NavbarComponent);
