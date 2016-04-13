export default class Config {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  get data() {
    return {
      "key": this.key,
      "value": this.value
    };
  }

  static get schema() {
    return {
      name: 'Config',
      primaryKey: 'key',
      properties: {
        key: 'string',
        value: 'string'
      }
    };
  }
}
