
export default class Screen extends HTMLElement {
  constructor() {
    super();
    this.prop = {};
    this.innerHTML = this.render();
    
  }
}
