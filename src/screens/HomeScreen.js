import Screen from "../models/Screen.js";

export default class HomeScreen extends Screen {
  render() {
    return `
        <h1>Home</h1>
        `;
  }
}
customElements.define("home-screen", HomeScreen);
