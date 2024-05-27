import Screen from "./Screen.js";

export default class WikiScreen extends Screen {
  render() {
    return `
        <h1>Wiki</h1>
        `;
  }
}
customElements.define("wiki-screen", WikiScreen);
