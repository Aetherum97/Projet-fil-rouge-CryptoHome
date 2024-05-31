import Screen from "./Screen.js";

export default class WikiScreen extends Screen {
  render() {
    return `
    <header>
      <navbar-component/>
    </header>
    <h1>Wiki en cours de création...</h1>
    <footer>
        <div>
          <footerdesktop-component/>
        </div>
        <div>
          <footermobile-component/>
        </div>
    </footer>
        `;
  }
}
customElements.define("wiki-screen", WikiScreen);
