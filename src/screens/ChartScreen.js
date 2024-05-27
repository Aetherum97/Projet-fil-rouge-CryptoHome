import Screen from "./Screen.js";

export default class ChartScreen extends Screen {
  render() {
    return `
        <h1>Chart</h1>
        `;
  }
}
customElements.define("chart-screen", ChartScreen);
