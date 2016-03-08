var UUID = require('uuid');

export default class User {
  constructor(name, email, uuid) {
    this.uuid = uuid || UUID.v1();
    this.email = email || '';
    this.name = name;
  }

  get schema() {
    return {
      name: 'User',
      primaryKey: 'uuid',
      properties: {
        uuid: {
          type: 'string',
          default: UUID.v1()
        },
        name: 'string',
        email: {
          type: 'string',
          optional: true
        }
      }
    };
  }
}
