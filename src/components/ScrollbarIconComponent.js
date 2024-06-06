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
          <img src="./src/assets/img/scroll-icon/Bitcoin.svg.webp" class="img-slide" alt="logo bitcoin">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/eth_light_3.png" class="img-slide" alt="logo eth">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Tether_USDT.png" class="img-slide" alt="logo usdt">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/bnb-bnb-logo.png" class="img-slide" alt="logo bnb">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/solana-logo.png" class="img-slide" alt="logo solana">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Avalanche_Blockchain_Logo.svg.png" class="img-slide" alt="logo avax">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/polkadot-new-dot-logo.png"  class="img-slide" alt="logo dot">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/egld.png" class="img-slide" alt="logo egld">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/chainlink-link-logo.png" class="img-slide" alt="logo link">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/dogecoin-doge-logo.png" class="img-slide" alt="logo doge">
        </div>
        <!-- Double -->
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Bitcoin.svg.webp" class="img-slide" alt="logo bitcoin">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/eth_light_3.png" class="img-slide" alt="logo eth">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Tether_USDT.png" class="img-slide" alt="logo usdt">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/bnb-bnb-logo.png" class="img-slide" alt="logo bnb">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/solana-logo.png"  class="img-slide" alt="logo solana">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/Avalanche_Blockchain_Logo.svg.png" class="img-slide" alt="logo avax">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/polkadot-new-dot-logo.png" class="img-slide" alt="logo dot">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/egld.png" class="img-slide" alt="logo egld">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/chainlink-link-logo.png" class="img-slide" alt="logo link">
        </div>
        <div class="slide">
          <img src="./src/assets/img/scroll-icon/dogecoin-doge-logo.png" class="img-slide" alt="logo doge">
        </div>
    </div>
    `;
  }
}
customElements.define("scrollbaricon-component", ScrollbarIconComponent);
