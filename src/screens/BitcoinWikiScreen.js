import CarouselWikiComponent from "../components/CarouselWikiComponent.js";
import Screen from "./Screen.js";

export default class BitcoinWikiScreen extends Screen {
  constructor() {
    super();
    this.prop.carouselWiki = new CarouselWikiComponent();
  }

  render() {
    return `<style>@import "./src/assets/styles/wikiStyle/wikisCryptosPages.css"</style>
    <header>
        <navbar-component/>
    </header>

    <div class="container">
        <h1 class="my-4">Bitcoin
            <img src="./src/assets/img/dock-wiki-icon/bitcoin.svg" alt="btc" draggable="false" width="100"> 
            - La première blockchain
        </h1>

        <div class="content-section">
            <h2>
                <a class="text-white text-decoration-none" data-bs-toggle="collapse" href="#section1" role="button" aria-expanded="false" aria-controls="section1">
                    Genèse - Satoshi
                </a>
            </h2>
            <div class="collapse show" id="section1">
                <p>
                    <img src="https://picsum.photos/300/200" alt="Image 1" class="img-fluid">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin bibendum, tortor eget ullamcorper molestie, erat ligula
                    facilisis nisl, id viverra urna odio non leo. Nullam vehicula interdum
                    metus, a tincidunt massa ultricies in.
                    iste minima maiores tenetur ullam maxime, earum velit. Quia, veritatis
                    repellat sit enim cum vel consectetur accusantium ea fugiat suscipit?
                    Accusantium voluptate amet, minus quos atque qui rerum voluptatem
                    blanditiis temporibus quis ad deleniti mollitia!
                </p>
                <p>
                    Vivamus mollis semper felis, nec ultrices magna interdum nec. Phasellus nec viverra mi. Cras vestibulum, quam a aliquet ullamcorper, tortor elit sollicitudin turpis, sit amet suscipit odio ipsum a libero.
                </p>
                <br>
            </div>
        </div>

        <div class="content-section">
            <h2>
                <a class="text-white text-decoration-none" data-bs-toggle="collapse" href="#section2" role="button" aria-expanded="false" aria-controls="section2">
                    Une vision et une réaction
                </a>
            </h2>
            <div class="collapse" id="section2">
                <p>
                    <img src="https://picsum.photos/300/200" alt="Image 2" class="img-fluid">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <br><br><br>
            </div>
        </div>

        <div class="content-section">
            <h2>
                <a class="text-white text-decoration-none" data-bs-toggle="collapse" href="#section3" role="button" aria-expanded="false" aria-controls="section3">
                    Or numérique
                </a>
            </h2>
            <div class="collapse" id="section3">
                <p>
                    <img src="https://picsum.photos/300/200" alt="Image 2" class="img-fluid">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis unde officia beatae nobis rem pariatur nisi enim aperiam,
                    cupiditate repudiandae quam molestiae optio ex ea, inventore recusandae
                    iste minima maiores tenetur ullam maxime, earum velit. Quia, veritatis
                    repellat sit enim cum vel consectetur accusantium ea fugiat suscipit?
                    Accusantium voluptate amet, minus quos atque qui rerum voluptatem
                    blanditiis temporibus quis ad deleniti mollitia!
                </p>
                <br><br><br>
            </div>
        </div>

        <div class="content-section">
            <h2>
                <a class="text-white text-decoration-none" data-bs-toggle="collapse" href="#section4" role="button" aria-expanded="false" aria-controls="section4">
                    Lenteurs et centralisation
                </a>
            </h2>
            <div class="collapse" id="section4">
                <p>
                    <img src="https://picsum.photos/300/200" alt="Image 2" class="img-fluid">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis unde officia beatae nobis rem pariatur nisi enim aperiam,
                    cupiditate repudiandae quam molestiae optio ex ea, inventore recusandae
                    Proin bibendum, tortor eget ullamcorper molestie, erat ligula
                    facilisis nisl, id viverra urna odio non leo. Nullam vehicula interdum
                    metus, a tincidunt massa ultricies in.
                    iste minima maiores tenetur ullam maxime, earum velit. Quia, veritatis
                    repellat sit enim cum vel consectetur accusantium ea fugiat suscipit?
                    Accusantium voluptate amet, minus quos atque qui rerum voluptatem
                    blanditiis temporibus quis ad deleniti mollitia!
                </p>
                <br><br><br>
            </div>
        </div>
    </div>

    <div>
    <dock-wiki-component/>
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

customElements.define("bitcoin-wiki-screen", BitcoinWikiScreen);
