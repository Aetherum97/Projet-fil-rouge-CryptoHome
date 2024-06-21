export default class CarouselWikiComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.render();
  }

  get toImg() {
    return this.getAttribute("to-img");
  }

  set toImg(value) {
    this.setAttribute("to-img", value);
  }

	get toImg2() {
    return this.getAttribute("to-img2");
  }

  set toImg2(value) {
    this.setAttribute("to-img2", value);
  }

	get toImg3() {
    return this.getAttribute("to-img3");
  }

  set toImg3(value) {
    this.setAttribute("to-img3", value);
  }

  render() {
    return `
    <div id="carouselExample" class="carousel slide ">
  <div class="carousel-inner rounded">
    <div class="carousel-item active">
      <img src="${this.toImg}" class="d-block w-100 img-fluid" alt="Image1"></img>
    </div>
    <div class="carousel-item">
      <img src=${this.toImg2} class="d-block w-100 img-fluid" alt="Image2"></img>
    </div>
    <div class="carousel-item">
      <img src="${this.toImg3}" class="d-block w-100 img-fluid" alt="Image3"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
`;
  }
}
customElements.define("carousel-wiki-component", CarouselWikiComponent);
