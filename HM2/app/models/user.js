class User {
  constructor() {
    const UserSchema = {
      name: 'User',
      properties: {
        name: 'string',
        email: {
          type: 'string',
          optional: true
        }
      }
    }
    this.schema = UserSchema;
  }
}
