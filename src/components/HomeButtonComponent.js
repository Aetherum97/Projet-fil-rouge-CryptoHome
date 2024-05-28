export default class HomeButtonComponent extends HTMLElement {
  constructor(){
    super();
    this.innerHTML = this.render();
  }

  render(){
    return `<style>@import"./src/assets/styles/homePage/buttonNav.css"</style>
    <button class="btn btn-home"role="button">
    </button>
    `;
  }
}
customElements.define('homebutton-component', HomeButtonComponent);