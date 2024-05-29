export default class OrangeLineComponent extends HTMLElement {
  constructor(){
    super();
    this.innerHTML = this.render();
  }

  render(){
    return `<style>@import"./src/assets/styles/homePage/orangeline.css"</style>
    <div class="orangeline mt-5">
    </div>
    `
  }
}
customElements.define('orangeline-component', OrangeLineComponent);