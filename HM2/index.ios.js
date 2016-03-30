var React = require('react-native');
var User = require('./app/models/user').default;
var Config = require('./app/models/config').default;
const Realm = require('realm');

'use strict';
import {
  AppRegistry,
  Component,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class HM2 extends Component {
  constructor(props) {
    super(props);
    let defaultConfig = {
      "stats": {
        "opens": 0
      }
    };
    this.state = {
      "config": defaultConfig,
      "name": '',
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

    // var user = new User("Stefan Wallin", 'hm.dev@stefan-wallin.se')
    // console.log("User: ", user);
    // realm.write(()=>{
    //   realm.deleteAll();
    //   realm.create('User', user.data());
    // })

    let users = realm.objects('User');
    if(users.length === 1) {
      return (
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
          />
          <Text style={styles.welcome}>
            Welcome to HM,
          </Text>
          <Text style={styles.instructions}>
            {users['0'].name}
          </Text>
          <Text style={styles.stats}>{this.state.config.stats.opens}</Text>
        </View>
      );
    }
    console.log("Users: ", users);
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <Text style={styles.welcome}>
          Welcome to HM!
        </Text>
        <Text style={styles.instructions}>
          To get started please enter your name:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <Text style={styles.instructions}>
          and email:
        </Text>
        <TextInput
        style={styles.input}
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
        />
        <Text style={styles.stats}>{this.state.config.stats.opens}</Text>
      </View>
    );
  }
}

const textColor = '#8B93A6';
const backgroundColor = '#1E2128';
const mutedColor = '#777777';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: textColor,
  },
  instructions: {
    textAlign: 'center',
    color: textColor,
    marginBottom: 5,
  },
  input: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderColor: 'gray',
    borderWidth: 1,
    color: textColor,
    textAlign: 'center',
  },
  stats: {
    color: mutedColor,
  },
});

AppRegistry.registerComponent('HM2', () => HM2);
