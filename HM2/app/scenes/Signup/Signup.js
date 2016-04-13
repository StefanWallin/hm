var React = require('react-native');
import { Image, View, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from './Signup.styles';
var Backdrop = require('./../../components/Backdrop/Backdrop').default;


export default class Signup extends React.Component {
  render() {
    var logosource = require('./../../assets/images/logo.png');
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
              value={this.props.email}
            />
          </View>
          <Text style={styles.why_email}>
            Vi använder din e-post för att du ska kunna byta enhet och behålla
            din data.
          </Text>
          <TouchableHighlight style={styles.buttonWrapper} underlayColor={'#74B7D9'}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>
                Fortsätt
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </Backdrop>
    );
  }
}
