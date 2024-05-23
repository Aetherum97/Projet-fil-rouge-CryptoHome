import Screen from "../models/Screen.js";

export default class NotfoundScreen extends Screen {
  render() {
    return `
        <h1>Page introuvable</h1>
        `;
  }
}
customElements.define("notfound-screen", NotfoundScreen);
