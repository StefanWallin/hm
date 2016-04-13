import React, { Image, View, StyleSheet } from 'react-native';
import styles from './Backdrop.styles';

export default class Backdrop extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={ styles.contentContainer }>
          {this.props.children}
        </View>
      </View>
    );
  }
}
