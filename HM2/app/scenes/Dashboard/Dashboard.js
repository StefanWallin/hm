var React = require('react-native');
import { Image, View, Text, TextInput } from 'react-native';
import styles from './Dashboard.styles';
var Backdrop = require('./../../components/Backdrop/Backdrop').default;


export default class Dashboard extends React.Component {
  render() {
    var logosource = require('./../../assets/images/logo.png');
    return (
      <Backdrop style={styles.backdrop}>
        <View style={styles.logoWrapper}>
          <Image source={logosource} style={styles.logo}></Image>
        </View>
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
}
