import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from "./styles";

export default class SignupWith extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>SignupWith Screen</Text>
          <Button title='Signup' transparent onPress={() => this.props.navigation.navigate('Signup')} />
        </View>
      </View>
    );
  }
}
