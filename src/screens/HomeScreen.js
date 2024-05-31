import HomeButtonComponent from "../components/HomeButtonComponent.js";
import OrangeLineComponent from "../components/OrangeLineComponent.js";
import ScrollbarIconComponent from "../components/ScrollbarIconComponent.js";
import Screen from "./Screen.js";

export default class HomeScreen extends Screen {
  constructor(){
    super();
    this.prop.homeButtonComponent = new HomeButtonComponent();
    this.prop.orangeLineComponent = new OrangeLineComponent();
    this.prop.scrollbarIconComponent = new ScrollbarIconComponent();
  }
  render() {
    return `<style>@import"./src/assets/styles/homePage/img.css"</style>
    <header>
      <navbar-component/>
    </header>
    <div class="container text-center text-white mt-4">
      <h1>Crypto-Home</h1>
      <div>
          <homebutton-component
            to-path="/wiki"
            text-btn="Découvrez la technologie de la Blockchain !">
          </homebutton-component>
        </div>
    </div>
    <div>
      <scrollbaricon-component/>
    </div>
    <div>
      <orangeline-component/>
    </div>
    <div class="container text-center mt-3">
          <homebutton-component
            to-path="/chart"
            text-btn="Suivez en direct le prix de vos cryptos préférées !">
          </homebutton-component>
          <iframe
      src="https://www.widgets.investing.com/top-cryptocurrencies?theme=darkTheme"
      width="100%"
      height="460px"
      frameborder="0"
      allowtransparency="true"
      marginwidth="0"
      marginheight="0"
      class="rounded-2"
    ></iframe>
        </div>
        <div>
      <orangeline-component/>
    </div>
    <div class="container text-center mt-3">
          <homebutton-component
            to-path="/wallet"
            text-btn="Gérez vos adresses blockchain & plus !">
          </homebutton-component>
    </div>
    <div class="divImageWallet">
      <img src="./src/assets/img/homepage/ecran wallet.png" alt="image wallet" srcset="" class="screenWallet">
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
customElements.define("home-screen", HomeScreen);
