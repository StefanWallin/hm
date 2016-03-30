var UUID = require('uuid');

export default class User {
  constructor(name, email, uuid) {
    this.uuid = uuid || UUID.v1();
    this.email = email || '';
    this.name = name;
  }

  data() {
    return {
      "uuid": this.uuid,
      "email": this.email,
      "name": this.name
    };
  }

  static get schema() {
    return {
      name: 'User',
      primaryKey: 'uuid',
      properties: {
        uuid: 'string',
        name: 'string',
        email: {
          type: 'string',
          optional: true
        }
      }
    };
  }
}
