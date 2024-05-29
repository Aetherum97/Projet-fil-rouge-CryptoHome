import WikiComponent from "../components/WikiComponent.js";
import CarouselWikiComponent from "../components/CarouselWikiComponent.js";
import CardWikiComponent from "../components/CardWikiComponent.js";

import Screen from "../models/Screen.js";

export default class WikiScreen extends Screen {
  constructor(){
    super();
    this.prop.wikiComponent = new WikiComponent();
    this.prop.carouselWikiComponent = new CarouselWikiComponent();
    this.prop.cardWikiComponent = new CardWikiComponent();
  }
  render() {
    return `
        <div>
          <wiki-component/>
        </div>
        <div>
          <carousel-wiki-component/>
        </div>

          `;
  }
}
customElements.define("wiki-screen", WikiScreen);
