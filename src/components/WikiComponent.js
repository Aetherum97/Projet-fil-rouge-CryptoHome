export default class WikiComponent extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = this.render();
	}

	render() {
		return `<style>@import "./src/assets/styles/WikiStyle/wiki.css"</style>
		<div class="container">
        <h1 class="title">Wiki Crypto</h1>

        <div class="top-section">
            <img src="./src/assets/img/halving bitcoin.jpg" alt="Image principale">
            <div class="text-right">
                <h2 class="text-center">Blockchain et cryptographie</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non vel alias possimus quaerat debitis dolor corrupti
                    illo doloribus vero temporibus iusto, tempora explicabo ipsa rerum repellendus fugit aliquid? Totam,
                    asperiores necessitatibus quod voluptate, incidunt perferendis voluptas reprehenderit quo pariatur alias labore. <br>
                    Nous souhaitons par ce site vulgariser la blockchain et les cryptomonnaies. Sans y donner accès, nous voulons....</p>
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

        <div id="trait_dessus"><hr></div>

        <div class="glass">
            <div class="dock">
                <img src="./src/assets/img/Bitcoin.svg" alt="btc" draggable="false" width=20px height=20px>
                <img src="./src/assets/img/Ethereum.svg" alt="eth" draggable="false" width=20px height=20px>
                <img src="./src/assets/img/Dogecoin.svg" alt="doge" draggable="false" width=20px height=20px>
                <img src="./src/assets/img/Polkadot.svg" alt="polk" draggable="false" width=20px height=20px>
                <img src="./src/assets/img/Tether.svg" alt="tether" draggable="false" width=20px height=20px>
                <img src="./src/assets/img/Solana.svg" alt="sol" draggable="false" width=20px height=20px>
                <img src="./src/assets/img/Avalanche.svg" alt="avax" draggable="false" width=20px height=20px>
            </div>
        </div>



    </div>
	`;
	}
	}
customElements.define("wiki-component", WikiComponent);