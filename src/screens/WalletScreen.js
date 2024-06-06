import OrangeLineComponent from "../components/OrangeLineComponent.js";
import TaxationScreenComponent from "../components/TaxationScreenComponent.js";
import Screen from "./Screen.js";

export default class WalletScreen extends Screen {
  constructor(){
    super();
    this.prop.orangeLineComponent = new OrangeLineComponent();
    this.prop.taxationScreenComponent = new TaxationScreenComponent();
  }
  render() {
    return `
    <header>
      <navbar-component/>
    </header>
    <h1>Wallet en cours de création...</h1>
    <div>
      <orangeline-component/>
    </div>
    <div>
    <taxationscreen-component/>
    </div>
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
customElements.define("wallet-screen", WalletScreen);