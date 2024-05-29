export default class HomeButtonComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.render();
  }

  get toPath() {
    return this.getAttribute('to-path');
  }

  set toPath(value) {
    this.setAttribute('to-path', value);
  }

  get textBtn() {
    return this.getAttribute('text-btn');
  }

  set textBtn(value) {
    this.setAttribute('text-btn', value);
  }

  render() {
    return  `<style>@import"./src/assets/styles/homePage/buttonNav.css"</style>
    <button class="btn btn-home"role="button">
    <a href=${this.toPath} target="spa">${this.textBtn}</a>
    </button>
    `;
  }
}
customElements.define("homebutton-component", HomeButtonComponent);
