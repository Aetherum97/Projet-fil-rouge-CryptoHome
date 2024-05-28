import HomeButtonComponent from "../components/HomeButtonComponent.js";
import Screen from "./Screen.js";

export default class HomeScreen extends Screen {
  constructor(){
    super();
    this.prop.homeButtonComponent = new HomeButtonComponent();
  }
  render() {
    return `
    <header>
      <navbar-component/>
    </header>
    <div class="container text-center mt-3">
      <h1>Crypto-Home</h1>
      <div>
      <homeButton-component></homeButton-component>
      </div>
    </div>
        `;
  }
}
customElements.define("home-screen", HomeScreen);
