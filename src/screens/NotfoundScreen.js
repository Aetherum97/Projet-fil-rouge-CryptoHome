import Screen from "./Screen.js";

export default class NotfoundScreen extends Screen {
  render() {
    return `
    <div class="h-100 d-flex flex-column align-items-center justify-content-center">
      <div class="m-3">Cette page n'existe pas ...</div>
      <div>
        <a href="/" target="spa">Page d'accueil</a>
      </div>
    </div>
        `;
  }
}
customElements.define("notfound-screen", NotfoundScreen);
