export default class ScrollbarIconComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.render();
  }

  render() {
    return `
    <style>@import"./src/assets/styles/homePage/scroll-icon.css"</style>
    <div class="slider mt-3">
      <div class="slide-track">
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Bitcoin.svg.webp" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/eth_light_3.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Tether_USDT.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/bnb-bnb-logo.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/solana-logo.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Avalanche_Blockchain_Logo.svg.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/polkadot-new-dot-logo.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/egld.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/chainlink-link-logo.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/dogecoin-doge-logo.png" alt="">
        </div>
        <!-- Double -->
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Bitcoin.svg.webp" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/eth_light_3.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Tether_USDT.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/bnb-bnb-logo.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/solana-logo.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Avalanche_Blockchain_Logo.svg.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/polkadot-new-dot-logo.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/egld.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/chainlink-link-logo.png" alt="">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/dogecoin-doge-logo.png" alt="">
        </div>
    </div>
    `;
  }
}
customElements.define('scrollbaricon-component', ScrollbarIconComponent);