import CarouselWikiComponent from "../components/CarouselWikiComponent.js";
import DockWikiComponent from "../components/DockWikiComponent.js";

import Screen from "./Screen.js";

export default class WikiScreen extends Screen {
  constructor() {
    super();
    this.prop.carouselWikiComponent = new CarouselWikiComponent();
    this.prop.dockWikiComponent = new DockWikiComponent();
  }
  render() {
    return `<style>@import "./src/assets/styles/wikiStyle/wiki.css"</style>

        <header>
          <navbar-component/>
        </header>

        <div>
        <div class="container">
        <h1 class="title">Wiki Crypto</h1>

        <div class="top-section">
          <div>
            <carousel-wiki-component
            to-img= "https://picsum.photos/id/162/600/300"
            >
            </carousel-wiki-component>
          </div>
          <div class="text-right">
            <h2 class="text-center">Blockchain et cryptographie</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non vel alias possimus quaerat debitis dolor corrupti
              illo doloribus vero temporibus iusto, tempora explicabo ipsa rerum repellendus fugit aliquid? Totam,
              asperiores necessitatibus quod voluptate, incidunt perferendis voluptas reprehenderit quo pariatur alias labore. <br>
              Nous souhaitons par ce site vulgariser la blockchain et les cryptomonnaies. Sans y donner accès, nous voulons par ce site 
              les expliquer au mieux et partager notre intérêt et proposer un outil de suivi de capital investi. Nous espérons ainsi participer à l'adoption de ces moyens d'échanges de valeurs.....</p>
          </div>
        </div>

        <div class="pros-cons">
          <div class="pros">
            <h2 class="text-center">Les Pour</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores eligendi blanditiis architecto et ut voluptas cupiditate tenetur quam. Quas, cumque rerum!
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus scelerisque ante sollicitudin commodo.<hr>
              Expedita ducimus cum pariatur, laboriosam cumque praesentium ea impedit.</p>
          </div>
          <img src="./src/assets/img/halving bitcoin.jpg" alt="Image centrée">
          <div class="cons">
            <h2 class="text-center">Les Contre</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel metus scelerisque ante sollicitudin commodo.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Asperiores eligendi blanditiis architecto et ut voluptas cupiditate tenetur quam. Quas, cumque rerum!
            </p>
          </div>

        </div>
      </div>
        </div>
        <div>
          <dock-wiki-component/>
        </div>
        <footer>
          <footerdesktop-component/>
        </footer>
          `;
  }
}
customElements.define("wiki-screen", WikiScreen);
