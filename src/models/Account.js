export default class Account {
  static #_nextId = 0;
  constructor(props) {
    const { id, firstName, lastName, email, password } = props;
    this.id = id || ++Account.#_nextId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
