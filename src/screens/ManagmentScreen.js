import ManagmentComponent from "../components/ManagmentComponent.js";
import Screen from "./Screen.js";
export default class ManagmentScreen extends Screen {
  constructor(){
    super();
    this.prop.managmentComponent = new ManagmentComponent();
  }

  render(){
    return `
      <header>
        <navbar-component/>
      </header>
      <div>
        <managment-component/>
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
customElements.define('managment-screen', ManagmentScreen);