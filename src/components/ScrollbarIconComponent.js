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
          <img src="./src/assets/img/scroll-icon/Bitcoin.svg.webp" alt="logo bitcoin">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/eth_light_3.png" alt="logo eth">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Tether_USDT.png" alt="logo usdt">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/bnb-bnb-logo.png" alt="logo bnb">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/solana-logo.png" alt="logo solana">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Avalanche_Blockchain_Logo.svg.png" alt="logo avax">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/polkadot-new-dot-logo.png" alt="logo dot">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/egld.png" alt="logo egld">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/chainlink-link-logo.png" alt="logo link">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/dogecoin-doge-logo.png" alt="logo doge">
        </div>
        <!-- Double -->
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Bitcoin.svg.webp" alt="logo bitcoin">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/eth_light_3.png" alt="logo eth">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Tether_USDT.png" alt="logo usdt">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/bnb-bnb-logo.png" alt="logo bnb">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/solana-logo.png" alt="logo solana">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Avalanche_Blockchain_Logo.svg.png" alt="logo avax">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/polkadot-new-dot-logo.png" alt="logo dot">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/egld.png" alt="logo egld">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/chainlink-link-logo.png" alt="logo link">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/dogecoin-doge-logo.png" alt="logo doge">
        </div>
    </div>
    `;
  }
}
customElements.define("scrollbaricon-component", ScrollbarIconComponent);
