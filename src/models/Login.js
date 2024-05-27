
export default class Login {

  static #_nextId = 0;
  constructor(props) {
    const {id, firstName, lastName} = props;
    this.id = id || ++Login.#_nextId;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}