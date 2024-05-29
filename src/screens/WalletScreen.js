import Screen from "./Screen.js";

export default class WalletScreen extends Screen {
  render() {
    return `
    <header>
      <navbar-component/>
    </header>
    <h1>Wallet en cours de création...</h1>
    <footer>
      <footerdesktop-component/>
    </footer>
        `;
  }
}
customElements.define("wallet-screen", WalletScreen);