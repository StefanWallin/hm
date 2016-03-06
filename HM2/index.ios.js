var React = require('react-native');
// var User = require('./app/models/user');
// const Realm = require('realm');

'use strict';
import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HM extends Component {
  constructor(props) {
    super(props);
    let defaultConfig = {
      "stats": {
        "opens": 0
      }
    };
    this.state = {
      "config": defaultConfig
    };
  }

  render() {
    // var realm = new Realm({
    //   schema: User
    // });
    // realm.write(()=>{
    //   realm.create('User', ['Maria']);
    // })
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text>{this.state.config.stats.opens}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HM', () => HM);
