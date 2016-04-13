import { StyleSheet } from 'react-native';

const textColor = '#fefefe';
const mutedColor = '#777777';

export default StyleSheet.create({
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
  }
});
