import Screen from "./Screen.js";

export default class HomeScreen extends Screen {
  render() {
    return `
    <header>
      <navbar-component/>
    </header>
    <h1>Home en cours de création...</h1>
        `;
  }
}
customElements.define("home-screen", HomeScreen);
