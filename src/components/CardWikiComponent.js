export default class CardWikiComponent extends HTMLElement {
	constructor() {
	  super();
	  this.innerHTML = this.render();
	}

	render() {
		return `
		<div class="container">
		<div class="card">
                <div class="card-body">
                    <h5 class="card-title">Titre carte</h5>
                    <p class="card-text">Exemple de contenu de texte</p>
                </div>
            </div>
	`;
   }
 }
 customElements.define("card-wiki-component", CardWikiComponent);