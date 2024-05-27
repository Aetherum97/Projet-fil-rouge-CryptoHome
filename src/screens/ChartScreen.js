import Screen from "./Screen.js";

export default class ChartScreen extends Screen {
  render() {
    return `
        <header>
          <navbar-component/>
        </header>
        <h1>Chart en cours de création...</h1>
        `;
  }
}
customElements.define("chart-screen", ChartScreen);
