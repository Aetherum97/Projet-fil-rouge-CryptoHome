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
    <a href=${this.toPath} target="spa"><button class="btn btn-home"role="button">
    ${this.textBtn}
    </button></a>
    
    `;
  }
}
customElements.define("homebutton-component", HomeButtonComponent);
