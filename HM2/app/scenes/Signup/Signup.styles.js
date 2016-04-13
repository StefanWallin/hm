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
  buttonWrapper: {
    marginTop: 20,
    marginLeft: 80,
    marginRight: 80,
    borderRadius: 10
  },
  buttonView: {
    height: 44,
    borderWidth: 1,
    borderColor: textColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: textColor,
    fontSize: 19
  }
});
