import CarouselWikiComponent from "../components/CarouselWikiComponent.js";
import Screen from "./Screen.js";

export default class ChainlinkWikiScreen extends Screen {
  constructor() {
    super();
    this.prop.carouselWiki = new CarouselWikiComponent();
  }

  render() {
    return `<style>@import "./src/assets/styles/wikiStyle/wikisCryptosPages.css"</style>
    <header>
        <navbar-component/>
    </header>

    <div>
        <p>En cours de création</p>
    </div>

    <div>
    <orangeline-component/>
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

customElements.define("chainlink-wiki-screen", ChainlinkWikiScreen);
