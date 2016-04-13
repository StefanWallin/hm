var React = require('react-native');
var Backdrop = require('./app/components/Backdrop/Backdrop').default;
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
      return (
        <Backdrop>
          <Text style={styles.welcome}>
            Welcome to HM,
          </Text>
          <Text style={styles.instructions}>
            {users['0'].name}
          </Text>
          <Text style={styles.stats}>{this.state.config.stats.opens}</Text>
        </Backdrop>
      );
    }
    console.log("Users: ", users);
    logosource = require('./app/assets/images/logo.png')
    return (
      <Backdrop style={styles.backdrop}>
        <View style={styles.logoWrapper}>
          <Image source={logosource} style={styles.logo}></Image>
        </View>
        <View style={styles.form}>
          <Text style={styles.welcome}>
            Hälsomått
          </Text>
          <Text style={styles.instructions}>
            Ange din e-post för att komma igång:
          </Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
          </View>
          <Text style={styles.why_email}>
            Vi använder din e-post för att du ska kunna byta enhet och behålla
            din data.
          </Text>
        </View>
      </Backdrop>
    );
  }
}

const textColor = '#fefefe';
const mutedColor = '#777777';

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    alignItems: 'center'
  },
  logoWrapper: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  logo: {
    flex: 0.5,
    alignItems: 'center',
    resizeMode: 'contain',
  },
  form: {
    flex: 12
  },
  welcome: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: textColor,
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
    color: textColor,
    marginTop: 5,
    marginBottom: 15,
  },
  why_email: {
    fontSize: 10,
    marginLeft: 50,
    marginRight: 50,
    textAlign: 'center',
    color: textColor
  },
  inputWrapper:  {
    borderBottomColor: textColor,
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5
  },
  input: {
    height: 40,
    color: textColor,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('HM2', () => HM2);
