import Screen from "./Screen.js";

export default class WalletScreen extends Screen {
  render() {
    return `
        <h1>Wallet</h1>
        `;
  }
}
customElements.define("wallet-screen", WalletScreen);