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

  render() {
    return `<style>@import "./src/assets/styles/loginPageStyle/login.css"</style>

    <div class="container-fluid">
		<div id="carouselExampleIndicators" class="carousel slide">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src=${this.toImg} class="d-block w-100 img-fluid" alt="Image1">
				</div>
				<div class="carousel-item">
					<img src="https://picsum.photos/id/167/600/300" class="d-block w-100 img-fluid" alt="Image2">
				</div>
				<div class="carousel-item">
					<img src="https://picsum.photos/600/300" class="d-block w-100 img-fluid" alt="Image3">
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>
`;
  }
}
customElements.define("carousel-wiki-component", CarouselWikiComponent);
