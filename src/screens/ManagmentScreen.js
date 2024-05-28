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
      <managment-component/>
    `;
  }
}
customElements.define('managment-screen', ManagmentScreen);