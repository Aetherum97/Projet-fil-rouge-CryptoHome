import Service from "../classes/Service.js";
import Account from "../models/Account.js";

export default class AccountService extends Service {
  constructor() {
    super();
    if (localStorage.getItem("accounts")) {
      this.data = JSON.parse(localStorage.getItem("accounts")).map(
        (json) => new Account(json)
      );
    }
  }

  // Methode CRUD

  create(instance) {
    //setItem
    this.data.push(new Account(instance));
    localStorage.setItem("accounts", JSON.stringify(this.data));
  }

  read(filter) {
    return this.data.filter(filter);
  }
}
