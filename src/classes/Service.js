export default class Service {
  data = [];
  constructor() {}

  read(filter) {
    return this.data.filter(filter);
  }
}
