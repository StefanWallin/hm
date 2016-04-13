var React = require('react-native');
var Backdrop = require('./app/components/Backdrop/Backdrop').default;
var Signup = require('./app/scenes/Signup/Signup.js').default;
var User = require('./app/models/user').default;
var Config = require('./app/models/config').default;
const Realm = require('realm');

'use strict';
import {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class HM2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "email": ''
    };
  }


  render() {
    var realm = new Realm({
      schema: [Config.schema, User.schema],
      schemaVersion: 6
    });

    let allUsers = realm.objects('User');
    realm.delete(allUsers);

    // var user = new User('hm.dev@stefan-wallin.se')
    // console.log("User: ", user);
    // realm.write(()=>{
    //   realm.deleteAll();
    //   realm.create('User', user.data());
    // })

    let users = realm.objects('User');
    if(users.length === 1) {
      return ( <Dashboard></Dashboard> );
    }
    return ( <Signup></Signup> );
  }
}
const styles = StyleSheet.create({

});

AppRegistry.registerComponent('HM2', () => HM2);
