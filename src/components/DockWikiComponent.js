export default class DockWikiComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.render();
  }

  render() {
    return `<style>@import "./src/assets/styles/wikiStyle/dockWiki.css"</style>

	<div class="glass">
            <div class="dock">
                <a href="/bitcoin" target="spa"><img src="./src/assets/img/scroll-icon/Bitcoin.svg.webp" alt="btc" draggable="false" width=20px height=20px></a>
                <a href="/ethereum" target="spa"><img src="./src/assets/img/dock-wiki-icon/ethereum.svg" alt="eth" draggable="false" width=20px height=20px></a>
                <a href="/tether" target="spa"><img src="./src/assets/img/dock-wiki-icon/tether.svg" alt="tether" draggable="false" width=20px height=20px></a>
                <a href="/bnb" target="spa"><img src="./src/assets/img/dock-wiki-icon/bnb.svg" alt="bnb" draggable="false" width=20px height=20px></a>
                <a href="/solana" target="spa"><img src="./src/assets/img/dock-wiki-icon/solana.svg" alt="sol" draggable="false" width=20px height=20px></a>
                <a href="/avalanche" target="spa"><img src="./src/assets/img/dock-wiki-icon/avalanche.svg" alt="avax" draggable="false" width=20px height=20px></a>
                <a href="/polkadot" target="spa"><img src="./src/assets/img/dock-wiki-icon/polkadot.svg" alt="polk" draggable="false" width=20px height=20px></a>
                <a href="/multiversx" target="spa"><img src="./src/assets/img/dock-wiki-icon/multiversx.svg" alt="egld" draggable="false" width=20px height=20px></a>
                <a href="/chainlink" target="spa"><img src="./src/assets/img/dock-wiki-icon/chainlink.svg" alt="link" draggable="false" width=20px height=20px></a>
                <a href="/dogecoin" target="spa"><img src="./src/assets/img/dock-wiki-icon/dogecoin.svg" alt="doge" draggable="false" width=20px height=20px></a>
            </div>
        </div>
		`;
  }
}
customElements.define("dock-wiki-component", DockWikiComponent);
